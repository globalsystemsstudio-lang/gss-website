# GSS GEO / Competitor Scraper

A small [Scrapling](https://github.com/D4Vinci/Scrapling)-based Python toolkit for
Global Systems Studio: read-only market research on competitor/peer relocation-consultancy
sites, plus a GEO-readiness ("will an AI answer engine actually cite this page?") audit
of our own site.

This lives alongside the Next.js site but is a fully separate Python project — it isn't
part of the site build and doesn't ship anywhere.

## What it does

- **`scan`** — fetches each competitor URL in `config.yaml`, extracts title, meta
  description, heading structure, pricing mentions, CTA links, and JSON-LD/FAQ schema
  presence, and writes a timestamped JSON + CSV snapshot to `data/scans/<timestamp>/`.
- **`audit`** — scores GEO-readiness (structured data, direct-answer paragraphs, heading
  hierarchy, meta description quality, image alt text) for our own pages, or any URLs
  you pass in. Writes a snapshot to `data/audits/<timestamp>/` and prints a scorecard.
- **`diff`** — compares the two most recent `scan` snapshots and reports new/removed
  pages, title changes, pricing changes, and FAQ-schema changes.

`data/` is gitignored — every run is a local snapshot, not something we commit.

## Setup

```bash
cd scripts/geo-scraper
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

cp config.example.yaml config.yaml
# edit config.yaml — add real competitor URLs under `competitors:`
```

Scrapling installs its `fetchers` extra with a fast HTTP-based fetcher (curl_cffi) that
handles most sites, plus an optional stealth headless-browser fetcher for JS-heavy
pages. To use the stealth fetcher you need a Chromium/Camoufox browser available —
see the [Scrapling docs](https://scrapling.readthedocs.io/) if `--stealth` errors about
a missing browser.

This needs real outbound network access to the target sites — it won't work from a
network-restricted sandbox.

## Usage

```bash
# Audit our own pages (uses own_site.urls from config.yaml)
python -m geo_scraper audit

# Audit specific URLs instead
python -m geo_scraper audit https://www.globalsystemsstudio.com/our-story/

# Scan configured competitors
python -m geo_scraper scan

# Force the headless-browser fetcher for JS-rendered competitor pages
python -m geo_scraper scan --stealth

# Compare the two most recent scans
python -m geo_scraper diff
```

Run `scan` on a recurring cadence (weekly is plenty) to build a history you can `diff`
against — that's what surfaces "competitor changed their pricing" or "competitor shipped
a new FAQ page" signals.

## Why this matters for GSS specifically

GSS's own homepage already leads with a direct-answer paragraph (the `.answer-capsule`
class in `app/page.jsx`) — that instinct is exactly what GEO rewards. The `audit`
command turns that instinct into a checklist you can run against every page and every
competitor, instead of relying on a gut feeling.

## Using this from Claude Code

See `.claude/skills/geo-scraper/SKILL.md` — it teaches Claude Code how to drive this
toolkit (install deps, run scans/audits, read back the JSON, and summarize findings)
so you can just ask, e.g., "audit our GEO readiness" or "scan our competitors for
pricing changes" in a Claude Code session.
