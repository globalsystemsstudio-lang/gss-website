# Local AI Video Generation — setup notes

This is the written-down version of that TikTok prompt ("set up [tool] so I can
generate videos locally, check my system first, install everything, download the
right model for my GPU"). Run it on your **laptop/desktop**, not in a cloud
session — the whole point is the local GPU.

---

## What you're installing

**ComfyUI** is the tool. It's the node-based runner that basically every open
video model ships a workflow for. You install it once and then swap models —
you don't install a separate app per model.

On top of it you get **one video model chosen by your VRAM**:

| Your VRAM | Tier | Model | Roughly |
|---|---|---|---|
| under 8 GB | `tiny` | LTX-Video 2B | 5s clip in 1–2 min |
| 8–12 GB | `small` | LTX-Video 13B distilled fp8 | 5s clip in 2–4 min |
| 12–16 GB | `medium` | Wan 2.2 TI2V 5B | 5s clip in 4–8 min |
| 16–24 GB | `large` | Hunyuan Video fp8 720p | 5s clip in 8–15 min |
| 24 GB+ | `xl` | Hunyuan bf16 (+ Wan 5B) | best quality, slowest |
| Apple Silicon | `mac` | LTX-Video 2B | 10–30 min, want 32 GB+ unified |

Short version of the trade-off: **LTX-Video** is fast and cheap and looks it.
**Wan 2.2** is the sweet spot — it does text-to-video *and* image-to-video and
runs in 12 GB. **Hunyuan Video** is the best-looking of the three and the most
expensive to run. If you have a 12 GB card or better, Wan 2.2 is the one to
start with.

### Hard requirements

- **NVIDIA GPU, 8 GB VRAM minimum.** 12 GB is where this stops being painful.
- **~60 GB free disk.** Models are 10–40 GB each.
- **Python 3.10–3.12.** Not 3.13 — several dependencies aren't there yet.
- **Git.**
- AMD works via ROCm on Linux but it's rough. Intel GPUs: no.
- Intel Macs: no. Apple Silicon works but is slow enough to be a novelty.

---

## Running it

### Windows

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\local-video-setup.ps1 -CheckOnly          # see what it detects, changes nothing
.\local-video-setup.ps1                      # do the install
.\local-video-setup.ps1 -Dir D:\ai-video     # if C: is tight
```

### Linux / macOS

```bash
chmod +x local-video-setup.sh
./local-video-setup.sh --check-only          # see what it detects, changes nothing
./local-video-setup.sh                        # do the install
./local-video-setup.sh --dir /mnt/big/ai      # if home is tight
```

**Run `--check-only` / `-CheckOnly` first.** It prints your GPU, VRAM, RAM,
disk and the tier it picked, and installs nothing. If the tier looks wrong, or
you want to try a heavier model than it picked, force it:

```bash
./local-video-setup.sh --tier medium
.\local-video-setup.ps1 -Tier medium
```

Other flags: `--skip-models` / `-SkipModels` installs ComfyUI without the
multi-GB downloads, if you want to grab models through the UI instead.

The model download step is resumable — Ctrl-C and re-run is safe, it skips
what's already on disk.

---

## First clip

1. Start it:
   - Windows: double-click `run-comfyui.bat`
   - Linux/Mac: `./run-comfyui.sh`
2. Open **http://127.0.0.1:8188**
3. **Workflow → Browse Templates → Video**, and pick the template for the model
   you installed. Use the shipped templates. Do not hand-wire the graph — video
   workflows have a lot of nodes and one wrong connection gives you noise with
   no error message.
4. Red "model not found" on a node → click its dropdown and select the file the
   script downloaded. They land in `ComfyUI/models/` under `diffusion_models`,
   `checkpoints`, `text_encoders`, `vae`.
5. Type your prompt into the positive-prompt node.
6. **Make the first run small: 512×320, 49 frames, 24 fps.** Prove the pipeline
   completes end to end before you spend 20 minutes on a 720p run that OOMs at
   the last step.
7. Run. Output goes to `ComfyUI/output/`.

### Prompting these models

They are not Midjourney. Long comma-separated tag lists work badly. Write one
descriptive sentence about the *shot*, including camera motion:

> A slow dolly-in on a glass office tower at dusk, warm interior lights coming
> on floor by floor, shallow depth of field, cinematic.

Motion words ("slow pan", "handheld", "dolly in", "static shot") do more work
than adjectives. And keep clips to 3–5 seconds — every one of these models
degrades badly past that.

---

## When it breaks

**CUDA out of memory** — the normal failure. In order:
1. Add `--lowvram` to the launcher (then `--novram` if still failing).
2. Cut the frame count. Frames cost more than resolution.
3. Close Chrome and anything else holding VRAM — browsers hold hundreds of MB.
4. Drop to a smaller tier.

**A model download 404s** — Hugging Face filenames drift between releases. The
script prints the repo URL when this happens; open it, find the current
equivalent file, and drop it in the folder the script names. Or install it
through the UI: **Manager → Model Manager**.

**`torch` installed but "no CUDA"** — your driver is too old for the CUDA build.
Update the NVIDIA driver, delete the `venv` folder, re-run the script.

**RTX 50-series (Blackwell)** — needs the `cu128` torch build. The script
detects this from the GPU name, but if you're on a rebranded/mobile variant it
may guess wrong; re-run after deleting `venv` and it'll reinstall.

**Python 3.13** — some dependencies don't build. Install 3.12 alongside it and
point the script at that.

---

## What this costs you

Nothing in money — all three models are free weights, and everything runs
offline after the download. It costs disk (60 GB+), the first-run download
(30–60 min on a decent connection), and electricity. There's no account, no
API key, no per-clip fee.
