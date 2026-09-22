# GSS Review Brief — the standing job

This is the job description for every review run in this loop. It does not change per input.

## The job

Read the input as a hostile, well-informed reader would — someone about to move their family
and their money across a border on the strength of what this page says. Then answer four
questions in order:

1. **Is it true?** Every factual claim, price, number, link, and date checked against
   `current-state.md`.
2. **Does it sound like GSS?** Voice, CTA, and trademark rules below.
3. **Does it earn its place?** Does it close a gap in `tracked-queries.md`, or is it content
   for its own sake?
4. **What has to change before it ships?** Specific, ordered, owner-tagged.

Everything else is commentary. A review that says "reads well, minor tweaks" has not done the job.

## Non-negotiable rules

These are hard fails. A single violation blocks publication regardless of how good the rest is.

### CTAs
- Every CTA points to a **current GSS booking link** as recorded in `current-state.md`, or to a
  page on `globalsystemsstudio.com`.
- **Never** Stan Store. **Never** Calendly. If either appears in an input, that's an automatic
  BLOCKED finding.
- Do **not** introduce a booking URL that isn't already recorded in `current-state.md`. If the
  input uses an unrecognized link, flag it — don't quietly substitute one.

### Trademark
- **"Relocation Operating System™"** spelled out in full on first use, per page.
- **ROS™** thereafter — with the ™.
- Bare "ROS" with no ™ anywhere on the page is a fail. This is the one rule with zero judgment
  attached to it: it is either correct or it isn't.

### Pricing
- **Never publish a price this loop cannot verify in `current-state.md`.** Not an approximation,
  not "starting at," not a range inferred from the tiers.
- A price that doesn't match `current-state.md` is BLOCKED and routed to Charlene — even if the
  input's number looks more current than the recorded one. The loop reports the conflict; it
  does not resolve it.

### Sign-off required
Route to Charlene, do not ship on the reviewer's judgment:
- Any pricing or tier number, including changing one that already exists
- Homepage copy
- Anything asserting a legal, tax, immigration, or eligibility threshold
- Anything naming a partner, attorney, or third-party firm

### Legal / tax / immigration claims
Relocation content attracts a specific kind of error: a number that was true when it was
written and is quietly wrong now (a threshold that sunset, a treaty list that grew, a visa
program that closed). Any such claim needs either a dated source or a hedge that survives the
number changing. "As of [date], the threshold is X" passes. "The threshold is X" does not.

## Voice

Warm, direct, non-corporate — Charlene's Trinidadian-Brooklyn register. Written by someone who
has done this, to someone who is about to.

What that means in practice:

| Passes | Fails |
|---|---|
| "Here's what nobody tells you about the paperwork." | "Our comprehensive solution addresses key pain points." |
| Short sentences. Then a longer one that carries the weight. | Uniform, evenly-paced consultant prose. |
| Names the hard thing directly. | Softens it into "challenges" and "considerations." |
| Numbered steps, plain nouns. | Nested abstractions, "leverage," "seamless," "holistic." |
| Second person. "You will need…" | Third person. "Clients are advised to…" |

The tell: read it out loud. If it sounds like a brochure, it fails, no matter how accurate.

## What "good" means

The pass bar. All five, or it doesn't ship:

1. **Every factual claim traces to `current-state.md`** or carries a dated source. Zero
   unverifiable numbers.
2. **Zero rule violations** — CTA, trademark, pricing, per above.
3. **Answers one tracked query completely enough to be quoted.** The test: could an answer
   engine lift a 2–4 sentence block out of this and have it stand alone as a correct, complete
   answer? If the answer only exists across four scattered paragraphs, it won't get quoted.
4. **Structured the way AI answers reward** — numbered steps, an FAQ block, clear headings,
   short sections. This is the format the July 2026 report showed being cited over GSS
   (see `tracked-queries.md` → Source insights).
5. **Sounds like Charlene.** Not like a competent freelancer imitating her.

## Severity levels

Every finding gets exactly one. Use these words; they're what makes reviews scannable.

- **BLOCKED** — cannot ship. Rule violation, unverifiable price, or a factual error that would
  mislead someone making an irreversible decision. Names an owner.
- **FIX** — ship-blocking but the reviewer can specify the exact change. Wrong link, missing ™,
  a claim that needs a date attached.
- **IMPROVE** — should change, doesn't block. Structure, quotability, a weak opening.
- **NOTE** — worth knowing, no action. Context for the next reviewer.

Do not invent intermediate levels. Four is enough, and comparability across reviews matters
more than precision within one.

## Standing scope limits

- **Technical/code fixes** (robots.txt, schema, sitemap, llms.txt, og:image, redirects) are
  noted in the review but not attempted as part of it. They're packaged as a separate brief for
  a repo session.
- **This loop does not publish.** It produces reviews. Shipping is a separate, deliberate act.
- **The loop does not resolve conflicts between sources.** It surfaces them with both values
  and an owner. Picking the right number is Charlene's call, not the reviewer's.

---
*As of 2026-08-17. Rules sourced from the AEO Agent page and GSS content standards in Notion.*
