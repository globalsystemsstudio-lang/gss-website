# Tracked Queries — the 0%-visibility mirror

The questions real buyers ask answer engines, and whether GSS shows up in the answer. A piece of
content earns its place by closing one of these. If a draft doesn't map to a row here, the
review should ask why it's being written.

**Source:** RankPrompt "GSS Buyer-Journey Visibility Report — July 2026"
(report `62f0541e-b953-4bf8-b9ad-5ea61289920c`, brand `02c0ce9c-edd0-4903-a5f5-6b4dc78ff619`),
run 2026-07-29 across ChatGPT, Perplexity, Google AI Overviews, and Claude.

## The headline

**Visibility score: 2.08%** — 1 of 48 prompt-platform results mentioned GSS.

| Segment | Visibility |
|---|---|
| Awareness | **0%** (0/16) |
| Consideration | **0%** (0/12) |
| Branded | **0%** (0/4) |
| Decision | 6% (1/16) |
| ChatGPT | 8% (1/12) |
| Perplexity · Claude · AI Overviews | **0%** each |

**Branded at 0% is the one that should sting.** "What is a Relocation Operating System?" is
GSS's own trademarked term, and no engine connected it to GSS.

---

## ⚠️ Read this before using the table

**The report predates the August page rebuild.** It ran 2026-07-29. Between then and 2026-08-12,
a large batch of pages shipped — the whole `/services/` tree, the ROS™ pathway pages, `/shop/`,
`/podcast/`. Several rows below were "no page exists" at measurement time and now have one.

**Nothing here has been re-measured.** "Page now exists" is not "gap closed" — it means the
gap is *plausibly* closed and awaiting the next report. Until a re-run, treat every row as
still open, and don't let a draft claim credit for a fix that hasn't been measured.

---

## The queries

`Status` = visibility as measured 2026-07-29. `Page` = what exists as of 2026-08-17.

### Branded — 0% (0/4)

| # | Query | Status | Page |
|---|---|---|---|
| 1 | What is a Relocation Operating System? | 0% | ✅ `/what-is-ros/` — shipped after measurement |

### Awareness — 0% (0/16)

| # | Query | Status | Page |
|---|---|---|---|
| 2 | How do I plan an international move from the US step by step? | 0% | ❌ **No flagship step-by-step guide.** Biggest single gap |
| 3 | What do I need to know about FBAR and taxes before relocating abroad as a US citizen? | 0% | 🟡 Partial — `/blog/financial-considerations-us-persons-relocating-internationally/` + FBAR redirect. No dedicated pre-move tax-prep page |
| 4 | How do digital nomads and remote workers plan a permanent move out of the United States? | 0% | 🟡 `/services/ros-digital-nomad-pathway/` is a service page, not an answer to the question |
| 5 | What are the biggest mistakes people make when relocating internationally without a plan? | 0% | 🟡 `/why-you-need-this/` is adjacent. No mistake-focused piece |

### Consideration — 0% (0/12)

| # | Query | Status | Page |
|---|---|---|---|
| 6 | Is there a structured framework or system for planning a family's relocation out of the US? | 0% | 🟡 `/services/ros-family-edition-pathway/` — sells the tier, doesn't answer the question |
| 7 | What services help retirees relocate internationally with legal and financial planning? | 0% | ❌ **No retiree landing page.** `/blog/finding-work-after-60-foreign-country/` is a different intent |
| 8 | Best relocation consultant for Americans moving abroad *(exact wording to confirm on re-run)* | 0% | ❌ Nothing comparison-shaped. Cited instead: Launchpad Abroad, GTFO Tours, Expat Counsel, Experts for Expats, Passport To Wealth |

### Decision — 6% (1/16)

| # | Query | Status | Page |
|---|---|---|---|
| 9 | What questions should I ask before hiring a relocation advisor or consultant? | 0% | 🟡 `/shop/five-questions/` is close — needs an FAQ block that answers it on-page, not a lead magnet |
| 10 | What is the difference between an immigration lawyer and a relocation strategist? | 0% | ❌ Nothing. High-leverage: it's a definitional question GSS is uniquely placed to own |
| 11 | How much does it cost to hire a relocation consultant for an international move? | 0% | ✅ `/services/` now publishes the full tier table. Cited instead at measurement time: Reelo, Ascot International |
| 12 | *The one ranked result* — prompt not named in the report summary | **6%** | ⛔ Identify from the full report before the next run. Don't guess — this is the only thing currently working |

---

## What AI cited instead

The engines weren't short of answers — they just weren't GSS's. 428 citations across 388 unique
URLs, averaging 1.1 citations per URL.

**That spread is strategically important:** there is no dominant page to out-rank and no
outreach target worth chasing. The win comes from broad topical coverage, not from beating one
competitor on one URL.

| Source | Cites | The lesson |
|---|---|---|
| `expat-us.com/services` | 4 | A services page that states plainly what's offered, who for, how to start |
| `digitalnomads.world/tips/guide-to-full-service-relocation-companies…` | 3 | Comparison format — evaluate options by need, audience, stage |
| `libertyatlantic.com/blog/how-to-move-abroad-permanently` | 3 | Exact-match intent. Uses "move abroad permanently" prominently |
| `findawayabroad.com/post/how-to-move-to-another-country-asap-in-10-steps` | 3 | Numbered roadmap, short sections, direct next steps |
| `smile.tax/top-relocation-services-for-americans-moving-abroad` | 2 | Links relocation to tax/residency/compliance |
| `expertsforexpats.com` | 2 | Authority signalling |
| `passporttowealth.com` | 2 | Relocation tied to financial structure, not just logistics |

**Named competitors:** Nomad Capitalist (awareness *and* decision — strongest overall), Greenback
Expat Tax, Taxes for Expats, Bright!Tax, Launchpad Abroad, GTFO Tours, Expat Counsel, Experts for
Expats, Passport To Wealth, Reelo, Ascot International.

On the digital-nomad permanent-move query the cited set was tax, banking, insurance, and mail
brands — Wise, Revolut, HSBC Expat, Cigna Global, SafetyWing, US Global Mail, Nomad List. **No
structured relocation strategist appeared at all.** That category is unclaimed.

## The format lesson

Every heavily-cited page above shares a shape: numbered steps, short sections, plain headings,
a direct answer near the top. This is what `gss-review-brief.md` means by "quotable" — the
engines lift self-contained blocks. Beautifully-argued flowing prose does not get quoted.

---

## Refreshing this file

1. `rankprompt_run_report` on brand `02c0ce9c-edd0-4903-a5f5-6b4dc78ff619` (~13–15 credits per
   full check-in — batch the fixes first, then measure).
2. `rankprompt_get_report_summary` for score + gaps; pull per-prompt results to fill in row 12.
3. Update the table, the headline numbers, and the "As of" line.
4. Compare against the 2.08% baseline. **Movement is the only real proof any of this worked.**

Cadence: every 3–4 weeks, or after a batch of content goes live. Not after a single page.

---
*As of 2026-08-17. Data measured 2026-07-29 — pre-dates the August rebuild. Page-status column
verified against repo `main` 2026-08-17. Not yet re-measured.*
