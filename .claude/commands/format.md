---
description: Turn output into a table, checklist, or usable structure
argument-hint: [what to format] — optionally: as [table/checklist/steps]
---

Restructure: **$ARGUMENTS**

(If no target given, restructure the previous output.)

If I named a format, use it. If not, pick the one the content actually calls for and say why in one line:

| Content shape | Format |
|---|---|
| Things compared across the same dimensions | **Table** — items as rows, dimensions as columns |
| Things to do, order matters | **Numbered steps** |
| Things to verify, order doesn't matter | **Checklist** |
| One thing leading to another | **Prose** — resist the urge to fragment it |
| Reference material, looked up not read | **Table or definition list** |

Rules:

- **Structure only. No new content, no dropped content.** If restructuring exposes a gap, mark it `[gap]` rather than filling it — the gap was there before you arrived.
- **Consistent cells.** If one row says "$497," another can't say "about five hundred."
- **Merciless headers.** A column called "Notes" is where meaning goes to die. Name the actual dimension.
- **Don't fragment reasoning.** An argument broken into bullets loses its logic. Some things should stay prose — say so if that's the honest answer.
- **Fits on one screen** where possible. If it doesn't, split into two tables with real names rather than one that scrolls.
