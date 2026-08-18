<#
  Local AI video generation - one-shot setup for Windows

    1. Checks your system (GPU, VRAM, RAM, disk, python)
    2. Installs ComfyUI + the right PyTorch build for your card
    3. Downloads the best video model your VRAM can actually run
    4. Tells you how to start it and make your first clip

  Usage (PowerShell, NOT as admin unless python needs installing):
      Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
      .\local-video-setup.ps1                  # check + install + download
      .\local-video-setup.ps1 -CheckOnly       # report only, change nothing
      .\local-video-setup.ps1 -Tier medium     # override auto-detected tier
      .\local-video-setup.ps1 -Dir D:\ai-video # install elsewhere (models are huge)

  Tiers: tiny | small | medium | large | xl
#>
[CmdletBinding()]
param(
  [string]$Dir = "$env:USERPROFILE\ai-video",
  [ValidateSet("","tiny","small","medium","large","xl")][string]$Tier = "",
  [switch]$CheckOnly,
  [switch]$SkipModels
)

$ErrorActionPreference = "Stop"
function Rule($t) { Write-Host "`n== $t ==" -ForegroundColor White -BackgroundColor DarkBlue }
function Info($t) { Write-Host "  $t" }
function Warn($t) { Write-Host "  ! $t" -ForegroundColor Yellow }
function Die($t)  { Write-Host "  x $t" -ForegroundColor Red; exit 1 }

# ---------------------------------------------------------------------------
# 1. SYSTEM CHECK
# ---------------------------------------------------------------------------
Rule "System check"

$os = Get-CimInstance Win32_OperatingSystem
Info "OS:      $($os.Caption) build $($os.BuildNumber)"

$gpuName = "none"; $vramMB = 0
if (Get-Command nvidia-smi -ErrorAction SilentlyContinue) {
  $gpuName = (nvidia-smi --query-gpu=name --format=csv,noheader | Select-Object -First 1).Trim()
  $vramMB  = [int](nvidia-smi --query-gpu=memory.total --format=csv,noheader,nounits | Select-Object -First 1).Trim()
  $driver  = (nvidia-smi --query-gpu=driver_version --format=csv,noheader | Select-Object -First 1).Trim()
  Info "GPU:     $gpuName  ($vramMB MiB VRAM, driver $driver)"
} else {
  $vid = Get-CimInstance Win32_VideoController | Select-Object -First 1
  $gpuName = $vid.Name
  Warn "No nvidia-smi found. Detected video controller: $gpuName"
  Warn "If this is an NVIDIA card, install the current GeForce/Studio driver first, then re-run."
  Warn "If it is AMD/Intel, local video generation on Windows is not practical - stop here."
}

$ramMB = [math]::Round($os.TotalVisibleMemorySize / 1024)
Info "RAM:     $ramMB MiB"
Info "CPU:     $((Get-CimInstance Win32_Processor | Select-Object -First 1).Name.Trim())"

$driveLetter = (Split-Path -Qualifier $Dir)
$disk = Get-CimInstance Win32_LogicalDisk -Filter "DeviceID='$driveLetter'"
$freeGB = [math]::Round($disk.FreeSpace / 1GB)
Info "Disk:    $freeGB GB free on $driveLetter"
if ($freeGB -lt 60) { Warn "Under 60 GB free. Models are 10-40 GB each - consider -Dir on a bigger drive." }

$py = $null
foreach ($c in @("python3.12","python3.11","python","py")) {
  $cmd = Get-Command $c -ErrorAction SilentlyContinue
  if (-not $cmd) { continue }
  try { $v = & $c -c "import sys;print('%d.%d'%sys.version_info[:2])" 2>$null } catch { continue }
  if ($v -in @("3.10","3.11","3.12")) { $py = $c; break }
}
if (-not $py) { Die "Need Python 3.10-3.12. Install from python.org (tick 'Add to PATH') and re-run." }
Info "Python:  $py ($(& $py --version 2>&1))"
if (-not (Get-Command git -ErrorAction SilentlyContinue)) { Die "git not found. Install Git for Windows and re-run." }

# ---------------------------------------------------------------------------
# 2. PICK THE MODEL TIER
# ---------------------------------------------------------------------------
Rule "Model selection"

if ($Tier) { Info "Tier forced to: $Tier" }
elseif ($vramMB -lt 1)     { $Tier = "tiny" }
elseif ($vramMB -lt 8500)  { $Tier = "tiny" }
elseif ($vramMB -lt 13000) { $Tier = "small" }
elseif ($vramMB -lt 17000) { $Tier = "medium" }
elseif ($vramMB -lt 25000) { $Tier = "large" }
else                       { $Tier = "xl" }

$label, $dlset = switch ($Tier) {
  "tiny"   { "LTX-Video 2B (fast, low VRAM)",         "ltx2b" }
  "small"  { "LTX-Video 13B distilled fp8",           "ltx13b" }
  "medium" { "Wan 2.2 TI2V 5B (text+image to video)", "wan5b" }
  "large"  { "Hunyuan Video fp8 (720p)",              "hunyuan" }
  "xl"     { "Hunyuan Video bf16 + Wan 2.2 5B",       "hunyuan_full" }
}
Info "Tier:    $Tier"
Info "Model:   $label"
Write-Host @"

  Reference - what runs on what:
    < 8 GB VRAM    tiny     LTX-Video 2B            ~5s clip in 1-2 min
    8-12 GB        small    LTX-Video 13B fp8       ~5s clip in 2-4 min
    12-16 GB       medium   Wan 2.2 TI2V 5B         ~5s clip in 4-8 min   (best quality/VRAM ratio)
    16-24 GB       large    Hunyuan Video fp8       ~5s clip in 8-15 min
    24 GB+         xl       Hunyuan bf16 / Wan 14B  best quality, slowest

"@

if ($CheckOnly) { Write-Host "Check-only mode - nothing installed. Re-run without -CheckOnly to proceed."; exit 0 }
$ans = Read-Host "  Proceed with install into $Dir ? [y/N]"
if ($ans -notmatch '^(y|yes)$') { Write-Host "  Aborted."; exit 0 }

# ---------------------------------------------------------------------------
# 3. INSTALL COMFYUI
# ---------------------------------------------------------------------------
Rule "Installing ComfyUI"
New-Item -ItemType Directory -Force -Path $Dir | Out-Null
Set-Location $Dir

if (Test-Path "$Dir\ComfyUI\.git") {
  Info "ComfyUI already present - pulling latest."
  git -C "$Dir\ComfyUI" pull --ff-only
} else {
  git clone --depth 1 https://github.com/comfyanonymous/ComfyUI.git
}
Set-Location "$Dir\ComfyUI"

if (-not (Test-Path "venv")) { Info "Creating virtualenv."; & $py -m venv venv }
$vpy = "$Dir\ComfyUI\venv\Scripts\python.exe"
& $vpy -m pip install --upgrade pip wheel | Out-Null

Rule "Installing PyTorch"
# Blackwell (RTX 50-series) needs CUDA 12.8+; everything older is fine on 12.4
if ($gpuName -match 'RTX\s*50\d\d') { $cudaTag = "cu128" } else { $cudaTag = "cu124" }
if ($vramMB -lt 1) {
  Warn "No CUDA GPU detected - installing CPU build. Generation will take hours per clip."
  & $vpy -m pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu
} else {
  Info "CUDA build: $cudaTag"
  & $vpy -m pip install torch torchvision torchaudio --index-url "https://download.pytorch.org/whl/$cudaTag"
}

Rule "Installing ComfyUI requirements"
& $vpy -m pip install -r requirements.txt
& $vpy -m pip install huggingface_hub

Rule "Installing ComfyUI-Manager"
New-Item -ItemType Directory -Force -Path "custom_nodes" | Out-Null
if (-not (Test-Path "custom_nodes\ComfyUI-Manager")) {
  git clone --depth 1 https://github.com/ltdrdata/ComfyUI-Manager.git custom_nodes\ComfyUI-Manager
  & $vpy -m pip install -r custom_nodes\ComfyUI-Manager\requirements.txt
} else { Info "Already installed." }

# ---------------------------------------------------------------------------
# 4. DOWNLOAD MODELS
# ---------------------------------------------------------------------------
if ($SkipModels) {
  Warn "Skipping model downloads (-SkipModels)."
} else {
  Rule "Downloading models for tier: $Tier"
  Info "This is the slow part - tens of GB. Safe to Ctrl-C and re-run; downloads resume."
  $dlScript = Join-Path $env:TEMP "comfy_fetch_models.py"
  Set-Content -Path $dlScript -Encoding UTF8 -Value @'
import os, sys
from huggingface_hub import hf_hub_download
SET = sys.argv[1]; ROOT = os.path.join(os.getcwd(), "models")
SETS = {
 "ltx2b": [
   ("Lightricks/LTX-Video", "ltx-video-2b-v0.9.5.safetensors", "checkpoints"),
   ("comfyanonymous/flux_text_encoders", "t5xxl_fp16.safetensors", "text_encoders"),
 ],
 "ltx13b": [
   ("Lightricks/LTX-Video", "ltxv-13b-0.9.7-distilled.safetensors", "checkpoints"),
   ("comfyanonymous/flux_text_encoders", "t5xxl_fp16.safetensors", "text_encoders"),
 ],
 "wan5b": [
   ("Comfy-Org/Wan_2.2_ComfyUI_Repackaged", "split_files/diffusion_models/wan2.2_ti2v_5B_fp16.safetensors", "diffusion_models"),
   ("Comfy-Org/Wan_2.2_ComfyUI_Repackaged", "split_files/text_encoders/umt5_xxl_fp8_e4m3fn_scaled.safetensors", "text_encoders"),
   ("Comfy-Org/Wan_2.2_ComfyUI_Repackaged", "split_files/vae/wan2.2_vae.safetensors", "vae"),
 ],
 "hunyuan": [
   ("Comfy-Org/HunyuanVideo_repackaged", "split_files/diffusion_models/hunyuan_video_t2v_720p_bf16.safetensors", "diffusion_models"),
   ("Comfy-Org/HunyuanVideo_repackaged", "split_files/text_encoders/llava_llama3_fp8_scaled.safetensors", "text_encoders"),
   ("Comfy-Org/HunyuanVideo_repackaged", "split_files/text_encoders/clip_l.safetensors", "text_encoders"),
   ("Comfy-Org/HunyuanVideo_repackaged", "split_files/vae/hunyuan_video_vae_bf16.safetensors", "vae"),
 ],
}
SETS["hunyuan_full"] = SETS["hunyuan"] + SETS["wan5b"]
items = SETS[SET]
for i, (repo, path, sub) in enumerate(items, 1):
    dest = os.path.join(ROOT, sub); os.makedirs(dest, exist_ok=True)
    name = os.path.basename(path)
    if os.path.exists(os.path.join(dest, name)):
        print("  [%d/%d] %s - already downloaded, skipping" % (i, len(items), name)); continue
    print("  [%d/%d] %s :: %s" % (i, len(items), repo, name))
    try:
        p = hf_hub_download(repo_id=repo, filename=path, local_dir=dest)
        final = os.path.join(dest, name)
        if os.path.abspath(p) != os.path.abspath(final): os.replace(p, final)
        print("        -> " + final)
    except Exception as e:
        print("  !! FAILED: %s" % e)
        print("     Filenames on Hugging Face drift between releases.")
        print("     Open https://huggingface.co/%s/tree/main and put the current" % repo)
        print("     equivalent of '%s' into: %s" % (name, dest))
for sub in set(s for _, _, s in items):
    d = os.path.join(ROOT, sub, "split_files")
    for r, dirs, files in os.walk(d, topdown=False):
        if not files and not dirs:
            try: os.rmdir(r)
            except OSError: pass
print("\n  Model download step finished.")
'@
  & $vpy $dlScript $dlset
}

# ---------------------------------------------------------------------------
# 5. LAUNCHER + INSTRUCTIONS
# ---------------------------------------------------------------------------
Rule "Writing launcher"
$lowvram = ""
if ($Tier -in @("tiny","small")) { $lowvram = " --lowvram" }
Set-Content -Path "$Dir\run-comfyui.bat" -Encoding ASCII -Value @"
@echo off
cd /d "$Dir\ComfyUI"
"$Dir\ComfyUI\venv\Scripts\python.exe" main.py --listen 127.0.0.1 --port 8188$lowvram %*
pause
"@
Info "Created $Dir\run-comfyui.bat"

Rule "Done - how to run it"
Write-Host @"

  Start the server:
      double-click  $Dir\run-comfyui.bat

  Then open:
      http://127.0.0.1:8188

  First clip:
      1. Workflow menu -> Browse Templates -> Video. Pick the template matching
         your model ($label). The templates ship with ComfyUI and are already
         wired correctly - do not hand-build the graph.
      2. If a node shows a red "model not found", click its dropdown and pick
         the file this script downloaded (models\diffusion_models,
         models\checkpoints, models\text_encoders, models\vae).
      3. Type your prompt in the positive-prompt node.
      4. Keep the FIRST run small: 512x320, 49 frames, 24 fps. Confirm it
         completes, then scale up resolution and length.
      5. Hit Run. Output lands in ComfyUI\output\.

  If you hit CUDA out-of-memory:
      - add --lowvram (or --novram) to run-comfyui.bat
      - drop frame count before you drop resolution
      - close other GPU apps; Chrome and games hold VRAM

  To add models later use the Manager button in the UI -> Model Manager.

"@
