#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Local AI video generation — one-shot setup for Linux / macOS
#
#   1. Checks your system (GPU, VRAM, RAM, disk, python)
#   2. Installs ComfyUI + the right PyTorch build for your card
#   3. Downloads the best video model your VRAM can actually run
#   4. Tells you how to start it and make your first clip
#
# Usage:
#   chmod +x local-video-setup.sh
#   ./local-video-setup.sh                 # check + install + download
#   ./local-video-setup.sh --check-only    # just report my system, change nothing
#   ./local-video-setup.sh --tier medium   # override the auto-detected tier
#   ./local-video-setup.sh --dir ~/ai      # install somewhere other than ~/ai-video
#
# Tiers: tiny | small | medium | large | xl | mac
# ---------------------------------------------------------------------------
set -euo pipefail

INSTALL_DIR="${HOME}/ai-video"
FORCE_TIER=""
CHECK_ONLY=0
SKIP_MODELS=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    --check-only) CHECK_ONLY=1; shift ;;
    --skip-models) SKIP_MODELS=1; shift ;;
    --tier) FORCE_TIER="$2"; shift 2 ;;
    --dir) INSTALL_DIR="$2"; shift 2 ;;
    -h|--help) sed -n '2,20p' "$0"; exit 0 ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
done

bold() { printf '\033[1m%s\033[0m\n' "$*"; }
info() { printf '  %s\n' "$*"; }
warn() { printf '\033[33m  ! %s\033[0m\n' "$*"; }
die()  { printf '\033[31m  x %s\033[0m\n' "$*" >&2; exit 1; }
rule() { printf '\n\033[1m== %s ==\033[0m\n' "$*"; }

# ---------------------------------------------------------------------------
# 1. SYSTEM CHECK
# ---------------------------------------------------------------------------
rule "System check"

OS="$(uname -s)"
ARCH="$(uname -m)"
GPU_NAME="none"
VRAM_MB=0
CUDA_TAG=""
IS_MAC=0

case "$OS" in
  Linux)
    info "OS:      Linux ($(. /etc/os-release 2>/dev/null && echo "${PRETTY_NAME:-unknown}"))"
    if command -v nvidia-smi >/dev/null 2>&1; then
      GPU_NAME="$(nvidia-smi --query-gpu=name --format=csv,noheader | head -1)"
      VRAM_MB="$(nvidia-smi --query-gpu=memory.total --format=csv,noheader,nounits | head -1)"
      DRIVER="$(nvidia-smi --query-gpu=driver_version --format=csv,noheader | head -1)"
      info "GPU:     ${GPU_NAME}  (${VRAM_MB} MiB VRAM, driver ${DRIVER})"
    elif command -v rocminfo >/dev/null 2>&1; then
      GPU_NAME="AMD (ROCm)"
      warn "AMD GPU detected. ROCm works but is rougher; this script installs the ROCm torch build."
    else
      warn "No NVIDIA GPU found. CPU-only video generation is possible but takes hours per clip."
    fi
    ;;
  Darwin)
    IS_MAC=1
    info "OS:      macOS $(sw_vers -productVersion 2>/dev/null || echo '?') on ${ARCH}"
    if [[ "$ARCH" == "arm64" ]]; then
      GPU_NAME="Apple Silicon (Metal/MPS)"
      # Unified memory — treat total RAM as the budget
      VRAM_MB=$(( $(sysctl -n hw.memsize) / 1048576 ))
      info "GPU:     ${GPU_NAME}, ${VRAM_MB} MiB unified memory"
    else
      die "Intel Macs have no usable GPU path for video models. Stop here."
    fi
    ;;
  *) die "Unsupported OS: $OS (this script covers Linux and macOS; use the .ps1 for Windows)" ;;
esac

if [[ $IS_MAC -eq 0 ]]; then
  RAM_MB=$(( $(grep MemTotal /proc/meminfo | awk '{print $2}') / 1024 ))
else
  RAM_MB=$(( $(sysctl -n hw.memsize) / 1048576 ))
fi
info "RAM:     ${RAM_MB} MiB"
info "CPU:     $( [[ $IS_MAC -eq 1 ]] && sysctl -n machdep.cpu.brand_string || grep -m1 'model name' /proc/cpuinfo | cut -d: -f2 | xargs )"

DISK_AVAIL_GB=$(df -Pk "$(dirname "$INSTALL_DIR")" 2>/dev/null | awk 'NR==2{print int($4/1048576)}')
info "Disk:    ${DISK_AVAIL_GB} GB free at $(dirname "$INSTALL_DIR")"
[[ "${DISK_AVAIL_GB:-0}" -lt 60 ]] && warn "Under 60 GB free. Models are 10-40 GB each — you may run out."

PYBIN=""
for c in python3.12 python3.11 python3.10 python3; do
  if command -v "$c" >/dev/null 2>&1; then
    v="$("$c" -c 'import sys;print("%d.%d"%sys.version_info[:2])')"
    case "$v" in 3.10|3.11|3.12) PYBIN="$c"; break ;; esac
  fi
done
[[ -z "$PYBIN" ]] && die "Need Python 3.10-3.12. Install it (Linux: apt install python3.12-venv; Mac: brew install python@3.12) and re-run."
info "Python:  $PYBIN ($("$PYBIN" --version 2>&1))"
command -v git >/dev/null 2>&1 || die "git not found. Install git and re-run."

# ---------------------------------------------------------------------------
# 2. PICK THE MODEL TIER
# ---------------------------------------------------------------------------
rule "Model selection"

if [[ -n "$FORCE_TIER" ]]; then
  TIER="$FORCE_TIER"
  info "Tier forced to: $TIER"
elif [[ $IS_MAC -eq 1 ]]; then
  TIER="mac"
elif [[ "$VRAM_MB" -eq 0 ]]; then
  TIER="tiny"
elif [[ "$VRAM_MB" -lt 8500 ]]; then
  TIER="tiny"
elif [[ "$VRAM_MB" -lt 13000 ]]; then
  TIER="small"
elif [[ "$VRAM_MB" -lt 17000 ]]; then
  TIER="medium"
elif [[ "$VRAM_MB" -lt 25000 ]]; then
  TIER="large"
else
  TIER="xl"
fi

case "$TIER" in
  tiny)   MODEL_LABEL="LTX-Video 2B (fast, low VRAM)";           DL_SET="ltx2b" ;;
  small)  MODEL_LABEL="LTX-Video 13B distilled fp8";             DL_SET="ltx13b" ;;
  medium) MODEL_LABEL="Wan 2.2 TI2V 5B (text+image to video)";   DL_SET="wan5b" ;;
  large)  MODEL_LABEL="Hunyuan Video fp8 (720p)";                DL_SET="hunyuan" ;;
  xl)     MODEL_LABEL="Hunyuan Video bf16 + Wan 2.2 5B";         DL_SET="hunyuan_full" ;;
  mac)    MODEL_LABEL="LTX-Video 2B (only realistic option on Metal)"; DL_SET="ltx2b" ;;
  *) die "Unknown tier '$TIER'. Use: tiny small medium large xl mac" ;;
esac

info "Tier:    $TIER"
info "Model:   $MODEL_LABEL"
cat <<TIERS

  Reference — what runs on what:
    < 8 GB VRAM    tiny     LTX-Video 2B            ~5s clip in 1-2 min
    8-12 GB        small    LTX-Video 13B fp8       ~5s clip in 2-4 min
    12-16 GB       medium   Wan 2.2 TI2V 5B         ~5s clip in 4-8 min   (best quality/VRAM ratio)
    16-24 GB       large    Hunyuan Video fp8       ~5s clip in 8-15 min
    24 GB+         xl       Hunyuan bf16 / Wan 14B  best quality, slowest
    Apple Silicon  mac      LTX-Video 2B            slow (10-30 min), 32 GB+ unified recommended

TIERS

if [[ $CHECK_ONLY -eq 1 ]]; then
  bold "Check-only mode — nothing installed. Re-run without --check-only to proceed."
  exit 0
fi

read -r -p "  Proceed with install into ${INSTALL_DIR}? [y/N] " ans
case "$ans" in [yY]|[yY][eE][sS]) ;; *) echo "  Aborted."; exit 0 ;; esac

# ---------------------------------------------------------------------------
# 3. INSTALL COMFYUI
# ---------------------------------------------------------------------------
rule "Installing ComfyUI"

mkdir -p "$INSTALL_DIR"
cd "$INSTALL_DIR"

if [[ -d ComfyUI/.git ]]; then
  info "ComfyUI already present — pulling latest."
  git -C ComfyUI pull --ff-only || warn "Pull failed; continuing with existing checkout."
else
  git clone --depth 1 https://github.com/comfyanonymous/ComfyUI.git
fi
cd ComfyUI

if [[ ! -d venv ]]; then
  info "Creating virtualenv."
  "$PYBIN" -m venv venv
fi
# shellcheck disable=SC1091
source venv/bin/activate
python -m pip install --upgrade pip wheel >/dev/null

rule "Installing PyTorch"
if [[ $IS_MAC -eq 1 ]]; then
  info "Metal/MPS build."
  pip install torch torchvision torchaudio
elif [[ "$GPU_NAME" == *"AMD"* ]]; then
  info "ROCm build."
  pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm6.2
elif [[ "$VRAM_MB" -gt 0 ]]; then
  # Blackwell (RTX 50-series) needs CUDA 12.8+; everything else is fine on 12.4
  if echo "$GPU_NAME" | grep -qE 'RTX (50[0-9]{2})|B[0-9]{3}'; then
    CUDA_TAG="cu128"
  else
    CUDA_TAG="cu124"
  fi
  info "CUDA build: $CUDA_TAG"
  pip install torch torchvision torchaudio --index-url "https://download.pytorch.org/whl/${CUDA_TAG}"
else
  info "CPU-only build (this will be very slow)."
  pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu
fi

rule "Installing ComfyUI requirements"
pip install -r requirements.txt
pip install huggingface_hub

rule "Installing ComfyUI-Manager (node/model installer UI)"
mkdir -p custom_nodes
if [[ ! -d custom_nodes/ComfyUI-Manager ]]; then
  git clone --depth 1 https://github.com/ltdrdata/ComfyUI-Manager.git custom_nodes/ComfyUI-Manager
  pip install -r custom_nodes/ComfyUI-Manager/requirements.txt || warn "Manager requirements failed; the Manager may still load."
else
  info "Already installed."
fi

# ---------------------------------------------------------------------------
# 4. DOWNLOAD MODELS
# ---------------------------------------------------------------------------
if [[ $SKIP_MODELS -eq 1 ]]; then
  warn "Skipping model downloads (--skip-models)."
else
rule "Downloading models for tier: $TIER"
info "This is the slow part — tens of GB. Safe to Ctrl-C and re-run; downloads resume."

python - "$DL_SET" <<'PYEOF'
import os, sys
from huggingface_hub import hf_hub_download

SET = sys.argv[1]
ROOT = os.path.join(os.getcwd(), "models")

# (repo_id, path_in_repo, local_subdir)
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
   ("Comfy-Org/Wan_2.2_ComfyUI_Repackaged",
    "split_files/diffusion_models/wan2.2_ti2v_5B_fp16.safetensors", "diffusion_models"),
   ("Comfy-Org/Wan_2.2_ComfyUI_Repackaged",
    "split_files/text_encoders/umt5_xxl_fp8_e4m3fn_scaled.safetensors", "text_encoders"),
   ("Comfy-Org/Wan_2.2_ComfyUI_Repackaged",
    "split_files/vae/wan2.2_vae.safetensors", "vae"),
 ],
 "hunyuan": [
   ("Comfy-Org/HunyuanVideo_repackaged",
    "split_files/diffusion_models/hunyuan_video_t2v_720p_bf16.safetensors", "diffusion_models"),
   ("Comfy-Org/HunyuanVideo_repackaged",
    "split_files/text_encoders/llava_llama3_fp8_scaled.safetensors", "text_encoders"),
   ("Comfy-Org/HunyuanVideo_repackaged",
    "split_files/text_encoders/clip_l.safetensors", "text_encoders"),
   ("Comfy-Org/HunyuanVideo_repackaged",
    "split_files/vae/hunyuan_video_vae_bf16.safetensors", "vae"),
 ],
}
SETS["hunyuan_full"] = SETS["hunyuan"] + SETS["wan5b"]

items = SETS[SET]
for i, (repo, path, sub) in enumerate(items, 1):
    dest = os.path.join(ROOT, sub)
    os.makedirs(dest, exist_ok=True)
    name = os.path.basename(path)
    if os.path.exists(os.path.join(dest, name)):
        print(f"  [{i}/{len(items)}] {name} — already downloaded, skipping")
        continue
    print(f"  [{i}/{len(items)}] {repo} :: {name}")
    try:
        p = hf_hub_download(repo_id=repo, filename=path, local_dir=dest)
        # flatten split_files/... into the plain model dir ComfyUI expects
        final = os.path.join(dest, name)
        if os.path.abspath(p) != os.path.abspath(final):
            os.replace(p, final)
        print(f"        -> {final}")
    except Exception as e:
        print(f"  !! FAILED: {e}")
        print(f"     Filenames on Hugging Face do drift between releases.")
        print(f"     Open https://huggingface.co/{repo}/tree/main and grab the")
        print(f"     current equivalent of '{name}' into: {dest}")

# tidy up any empty split_files scaffolding left behind
for sub in {s for _, _, s in items}:
    d = os.path.join(ROOT, sub, "split_files")
    for r, dirs, files in os.walk(d, topdown=False):
        if not files and not dirs:
            try: os.rmdir(r)
            except OSError: pass
print("\n  Model download step finished.")
PYEOF
fi

# ---------------------------------------------------------------------------
# 5. LAUNCHER + INSTRUCTIONS
# ---------------------------------------------------------------------------
rule "Writing launcher"

LOWVRAM_FLAG=""
case "$TIER" in
  tiny|small) LOWVRAM_FLAG=" --lowvram" ;;
  mac)        LOWVRAM_FLAG=" --force-fp16" ;;
esac

cat > "${INSTALL_DIR}/run-comfyui.sh" <<LAUNCH
#!/usr/bin/env bash
cd "${INSTALL_DIR}/ComfyUI"
source venv/bin/activate
exec python main.py --listen 127.0.0.1 --port 8188${LOWVRAM_FLAG} "\$@"
LAUNCH
chmod +x "${INSTALL_DIR}/run-comfyui.sh"
info "Created ${INSTALL_DIR}/run-comfyui.sh"

rule "Done — how to run it"
cat <<FINISH

  Start the server:
      ${INSTALL_DIR}/run-comfyui.sh

  Then open:
      http://127.0.0.1:8188

  First clip:
      1. In ComfyUI, click the Workflow menu -> Browse Templates -> Video.
         Pick the template matching your model ($MODEL_LABEL).
         The templates ship with ComfyUI and are already wired correctly —
         do not hand-build the graph.
      2. If a node shows a red "model not found", click the model dropdown and
         pick the file this script downloaded (models/diffusion_models,
         models/checkpoints, models/text_encoders, models/vae).
      3. Type your prompt in the positive-prompt node.
      4. Keep the FIRST run small: 512x320, 49 frames, 24 fps. Confirm it
         completes, then scale up resolution and length.
      5. Hit Run. Output lands in ComfyUI/output/.

  If you hit CUDA out-of-memory:
      - add --lowvram (or --novram) to run-comfyui.sh
      - drop frame count before you drop resolution
      - close the browser tab's preview, and any other GPU apps

  To add models later, use the Manager button in the UI -> Model Manager,
  rather than downloading by hand.

FINISH
