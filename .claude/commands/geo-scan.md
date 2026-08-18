---
description: Run the GSS competitor scan and/or GEO-readiness audit, then summarize findings
---

Use the `geo-scraper` skill (`.claude/skills/geo-scraper/SKILL.md`) to run the toolkit
in `scripts/geo-scraper/`.

Arguments (optional): $ARGUMENTS

- If arguments mention "competitor(s)" or "scan", run `scan` (and `diff` if at least
  two prior snapshots exist).
- If arguments mention "audit", "GEO", or "readiness", run `audit`.
- If no arguments are given, run `audit` against our own configured pages first, then
  ask whether the user also wants a competitor `scan`.

Set up the venv first if `scripts/geo-scraper/.venv` doesn't exist yet. If
`scripts/geo-scraper/config.yaml` is missing, copy it from `config.example.yaml` and
tell the user to fill in real competitor URLs before scanning — don't invent any.

After running, read the resulting JSON snapshot and give a plain-language summary:
what's strong, what's missing, and (for scans/diffs) what changed since last time.
