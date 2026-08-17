# Current State — fact-check reference

Every factual claim in a reviewed input gets checked against this file. If a claim isn't here
and isn't independently sourced with a date, it is unverifiable — flag it, don't approve it.

**Source of truth:** the `gss-website` repo on `main`, which is what Netlify deploys.
Entries below were read from the committed source, not scraped from the rendered site. Where
that distinction matters, it's noted.

---

## 1. Live pages (43 routes)

**Core:** `/` · `/our-story/` · `/what-is-ros/` · `/who-its-for/` · `/why-you-need-this/`
· `/work-with-me/` · `/contact/` · `/testimonials/` · `/resources/` · `/podcast/`

**Services:** `/services/` · `/services/discovery-call/` · `/services/clarity-session/`
· `/services/async-qa/` · `/services/ros-solo-pathway/` · `/services/ros-family-edition-pathway/`
· `/services/ros-digital-nomad-pathway/` · `/services/ros-entrepreneur-pathway/`
· `/services/ros-investor-pathway/` · `/services/ros-legacy-pathway/`

**Shop:** `/shop/` · `/shop/new-roots/` · `/shop/across-streets-and-seas/`
· `/shop/relocation-library/` · `/shop/five-questions/`

**Tools:** `/cost-of-living-calculator/` · `/relocation-readiness-quiz/`

**Standalone topic pages:** `/international-relocation-consultancy/`
· `/relocation-financial-planning/` · `/financial-planning-international-relocation/`
· `/visa-residency-pathways/`

**Blog (12):** `/blog/` + `disconnection-nobody-prepares-you-for` ·
`financial-considerations-us-persons-relocating-internationally` ·
`find-financial-planning-services-moving-abroad` · `finding-work-after-60-foreign-country` ·
`how-international-relocation-consultancy-works` · `opening-business-abroad` ·
`professional-skills-new-country` · `renting-abroad-as-foreigner` ·
`sell-or-rent-home-before-relocating` · `visa-legal-support-international-relocation` ·
`visas-residency-miss-the-window` · `what-is-apostille`

⚠️ **`/tools/relocation-cost-calculator/` does not exist and 404s.** The live calculator is at
`/cost-of-living-calculator/`. Any input pointing at the `/tools/` URL is a **FIX**.

*Verified 2026-08-17 against repo `main`.*

---

## 2. Pricing — as published on `/services/`

This is the canonical tier list. **Do not publish a number that isn't in this table.**

| Offer | Price | Access |
|---|---|---|
| Free Discovery Call | FREE | 15-Minute Video Call |
| Clarity Session | $497 | 45-Minute 1:1 Call |
| Async Q&A | $97 | Written Q&A Response |
| Digital Nomad Pathway | $697 | 6-Month Access |
| Solo Relocator Pathway | $897 | 6-Month Access |
| Family Edition Pathway | $1,197 | 9-Month Dual Access |
| Entrepreneur Pathway | $1,597 | 9-Month Access |
| Legacy Pathway | $1,997 | 12-Month Access |
| Investor Pathway | $2,497 | 12-Month Access |
| New Roots (book) | $27 | Digital Download |
| Across Streets & Seas (book) | $47 | Digital Download |
| Relocation Library Bundle | $64 | Both books ($10 saving vs. separate) |

*Verified 2026-08-17 against `app/services/page.jsx`.*

---

## 3. Booking links currently on the site

| Link | Used on |
|---|---|
| `https://calendar.app.google/5GiW8EZKoyB7SqEKA` | 17 files — homepage, `/work-with-me/`, `/contact/`, `/what-is-ros/`, `/who-its-for/`, `/why-you-need-this/`, `/our-story/`, `/testimonials/`, `/resources/`, `/services/discovery-call/`, 4 blog posts, BethChat, quiz, calculator |
| `https://calendar.app.google/GqshRNZbP1LTvwKJ9` | 10 files — homepage, `/work-with-me/`, 8 blog posts |

**Rule:** use one of these two. Do not introduce a third. Never Stan Store, never Calendly.

🔶 **OPEN — needs Charlene.** Three different Discovery Call links are documented across GSS
systems. The AEO Agent page in Notion records the Discovery Call as
`calendar.app.google/jgZG4FdY9HWpsQeD7`, which **appears nowhere in the site source**. The two
links above are both live and both in use, with no documented rule for which goes where.
Until this is resolved: flag any input using `jgZG4FdY9HWpsQeD7` as **BLOCKED**, and flag any
new third link as **BLOCKED**.

*Verified 2026-08-17.*

---

## 4. Numbers that recur — and what each one actually refers to

These look inconsistent and mostly aren't. Check the referent before flagging.

| Claim | Refers to | Correct? |
|---|---|---|
| **132 destinations / countries** | ROS™ destination intelligence coverage | ✅ Site-wide standard |
| **90+ countries** | Cost-of-living **calculator** dataset only | ✅ Different thing — not a conflict |
| **50+ countries** | Countries offering digital-nomad residency permits | ✅ Topic-specific |
| **30 / 30+ countries** | US Social Security **totalization agreements** | ⚠️ Two pages disagree — see below |
| **7 modules** | ROS™ governance framework | ✅ |

⚠️ `/relocation-financial-planning/` says totalization agreements with **"30 countries"**;
`/blog/financial-considerations-us-persons-relocating-internationally/` says **"30+ countries"**.
Minor, but it's the class of claim that needs a date and a source. Treat any new instance as
**FIX**: attach "as of [date]" or cite SSA.

*Verified 2026-08-17.*

---

## 5. Known internal contradictions — flag, don't resolve

Live right now. Reviewers surface these; Charlene decides.

1. 🔶 **Clarity Session length: 30 vs 45 minutes.**
   `/services/` → "45-Minute 1:1 Call". `/work-with-me/` → "45-Minute 1:1 Video Call".
   `/what-is-ros/` → "**30-Minute** 1:1 Call" *and* body copy "30 minutes."
   Two pages say 45, one says 30, all at $497. The 45-minute figure also matches the
   "45-Minute Transition Call" recorded in Notion. **Treat 45 as canonical for review purposes;
   `/what-is-ros/` needs a FIX.** Owner: Charlene to confirm before the edit ships.

2. 🔶 **"The Departure Lounge" — $97/mo Discord community.**
   Appears **only** on `/what-is-ros/`. Not on `/services/`, not on `/work-with-me/`.
   Also collides with the $97 Async Q&A (a one-off written response, not a subscription) —
   two different products at the same number. Either it's an unlisted offer or it's stale.
   **Any input mentioning it is BLOCKED** until confirmed. Owner: Charlene.

3. 🔶 **BethChat has been routing prospects to a dead URL.**
   Per the GSS Update Log in Notion, Beth's system prompt has pointed at the 404'ing
   `/tools/relocation-cost-calculator/` since July 19. A fix was drafted and logged. Confirm
   whether it actually shipped before writing anything that depends on Beth's routing.

4. 🔶 **Which version of the cost-of-living calculator is live?**
   The July 18 spec called for a state selector + 15 categories. What was observed live was a
   flat monthly-budget + destination-country input. Unresolved as of the Aug 12 Notion entry.
   Do not describe calculator features in content until someone confirms the live version.

5. 🔶 **`/cost-of-living-calculator/` is not linked from the `/tools/` nav.**
   Currently reachable by direct URL only — effectively undiscoverable. Relevant whenever a
   draft claims the tool is "available on the site."

---

## 6. Hard blocks — do not write around these

**Costa Rica interactive budget calculator — do not build, do not publish numbers.**
Three unresolved items, per the Notion Operations Hub:

- **Inversionista threshold unconfirmed.** ~$150,000 was a temporary reduction under Law 9996
  that **sunset July 14, 2026**. No source confirms whether it reverted to $200,000 or was
  renewed. Needs a licensed Costa Rican immigration attorney. **Do not publish either number.**
- **Household budget bands disagree across three sources.** Thursday Article: Solo $2,000–3,500
  / Family $4,000–6,500. Jurisdiction Research (older): Solo $1,500–2,000 / Couple $2,000–3,000
  / Family $3,000–5,000+. Outside 2026 data: Solo $1,600–2,200 / Family $3,000–4,500 typical.
  The posture question — comfortable vs. typical vs. frugal — hasn't been decided.
- **Reconciliation not done.** Both Notion pages still disagree.

Any Costa Rica cost figure in an input is **BLOCKED**. No exceptions, no ranges, no "roughly."

---

## 7. Brand facts

- **Founder:** Charlene LM Cupidore Bynoe. Background: firsthand relocation experience +
  decades of executive operations in banking and healthcare.
- **Core product:** Relocation Operating System™ (ROS™) — a 7-module governance framework
  delivered as a Notion workspace.
- **Books:** *New Roots: A Global Relocation Guide for Families, Expats, Retirees & Nomads* ($27);
  *Across Streets & Seas: Your Bold Relocation Blueprint* ($47); bundle $64.
- **Audience segments:** digital nomads, solo relocators, families, entrepreneurs, legacy
  movers, investors, retirees.
- **Positioning:** decision-oriented and sequenced — explicitly *not* inspirational expat content.
- **Site:** `globalsystemsstudio.com` (no `www`).
- **Platforms:** LinkedIn · Instagram · Facebook Groups · Substack · TikTok.
  ❌ **Reddit is off the platform mix** — decided, do not re-attempt without a materially
  different approach (personal, non-branded account with no GSS promotion).

---
*As of 2026-08-17. Sections 1–5 verified against repo `main` (commit `03c2f65`). Section 6–7
sourced from Notion (Operations Hub, AEO Agent, RankPrompt brand facts). Re-verify sections 1–4
whenever pages ship.*
