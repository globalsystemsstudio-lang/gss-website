---
name: geo-scraper
description: Run GSS's competitor scraper and GEO-readiness (AI-answer-engine) audit toolkit under scripts/geo-scraper. Use when asked to scan competitors, check pricing/content changes on peer relocation-consultancy sites, or audit globalsystemsstudio.com pages for AI-answer-engine (GEO) readiness.
---

# GEO / Competitor Scraper

This drives the Python toolkit in `scripts/geo-scraper/` (built on
[Scrapling](https://github.com/D4Vinci/Scrapling)). It does two things:

1. **`scan`** — read-only scrape of configured competitor/peer pages: title, meta
   description, headings, pricing mentions, CTA links, FAQ/JSON-LD schema presence.
2. **`audit`** — scores our own pages (or any URL) on GEO-readiness: does the page have
   a direct-answer paragraph near the top, clean heading hierarchy, structured data,
   FAQ schema, a real meta description, alt text on images.

Both write timestamped JSON+CSV snapshots to `scripts/geo-scraper/data/` (gitignored).
`diff` compares the two most recent scans.

## First-time setup (once per environment)

```bash
cd scripts/geo-scraper
python3 -m venv .venv && .venv/bin/pip install -r requirements.txt
```

If `config.yaml` doesn't exist yet, copy the example and ask the user to confirm/add
real competitor URLs before running `scan` (don't invent competitor names or URLs):

```bash
cp scripts/geo-scraper/config.example.yaml scripts/geo-scraper/config.yaml
```

`own_site` in the example config already points at GSS's live pages, so `audit` with
no args works out of the box.

## Running it

Always run from `scripts/geo-scraper/` using the venv's Python:

```bash
cd scripts/geo-scraper
.venv/bin/python -m geo_scraper audit                # audit our own configured pages
.venv/bin/python -m geo_scraper audit <url> [<url>...]  # audit specific URLs
.venv/bin/python -m geo_scraper scan                  # scrape configured competitors
.venv/bin/python -m geo_scraper scan --stealth         # force headless-browser fetch for JS-heavy sites
.venv/bin/python -m geo_scraper diff                   # compare the two most recent scans
```

Real scraping needs outbound network access — it will fail in a network-restricted
sandbox. If a fetch errors out, say so plainly rather than fabricating results.

## After running

Read the JSON snapshot it just wrote (path is printed, e.g.
`scripts/geo-scraper/data/audits/<timestamp>/audit.json` or
`.../scans/<timestamp>/scan.json`) and summarize it for the user in plain language:
what's missing (e.g. "no FAQ schema on 3 of 4 pages"), what changed since last time (for
`diff`), and concrete next steps — don't just dump the raw JSON/CSV back at them.

Never guess at competitor names, pricing, or scan results. If `config.yaml` has no real
competitors configured yet, tell the user instead of inventing plausible-sounding ones.
