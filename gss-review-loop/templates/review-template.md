# Review: `<input-filename>`

> Copy this file to `reviews/<input-basename>.review.md` and fill it in.
> Delete the instruction blockquotes as you go. Keep the five headings exactly as written —
> comparability across reviews is the point of having a format.

**Input:** `input/<filename>`
**Reviewed:** YYYY-MM-DD
**Type:** blog post / LinkedIn article / site page / email / other
**Standards version:** `current-state.md` as of YYYY-MM-DD · `tracked-queries.md` as of YYYY-MM-DD

---

## 1. Verdict

> One of: **SHIP** · **SHIP AFTER FIXES** · **BLOCKED** · **REWRITE**.
> Then two or three sentences — no more — on why. The reader should be able to stop here and
> know what happens next.

**Verdict:**

**Why:**

| Pass bar (from the brief) | |
|---|---|
| Every factual claim traceable | ⬜ |
| Zero rule violations (CTA / ™ / pricing) | ⬜ |
| Answers one tracked query quotably | ⬜ |
| Structured the way AI answers reward | ⬜ |
| Sounds like Charlene | ⬜ |

> ✅ pass · ⚠️ partial · ❌ fail. All five ✅ or the verdict is not SHIP.

---

## 2. Fact check

> Every checkable claim in the input gets a row. Quote the claim as written — don't paraphrase,
> because the paraphrase is where errors hide. Check against `current-state.md`.
>
> An empty table means the input made no factual claims, which is itself worth stating. It does
> not mean this section was skipped.

| Claim as written | Checked against | Verdict |
|---|---|---|
| "…" | `current-state.md` §2 Pricing | ✅ Correct |
| "…" | `current-state.md` §5 | ❌ Conflicts — page says X, input says Y |
| "…" | Not in `current-state.md` | ⚠️ Unverifiable — needs a dated source |

**Unverifiable claims:**
> List anything with no source and no entry in `current-state.md`. Per the brief, these cannot
> ship as written — they need a source, a date, or removal.

**Dated-claim check:**
> Legal, tax, immigration, and eligibility thresholds: does each survive the number changing?
> "As of [date], X" passes. Bare "X" does not.

---

## 3. Voice, CTA & trademark

**Hard rules:**

| Rule | Result |
|---|---|
| CTA points to a recorded GSS booking link or a `globalsystemsstudio.com` page | ⬜ |
| No Stan Store, no Calendly | ⬜ |
| No unrecognized third booking URL | ⬜ |
| "Relocation Operating System™" in full on first use | ⬜ |
| ROS™ with ™ on every subsequent use — no bare "ROS" | ⬜ |
| Every price matches `current-state.md` §2 | ⬜ |

> Any ❌ here is BLOCKED or FIX. There is no version of "close enough" for this table.

**Voice:**
> Does it sound like Charlene, or like a competent freelancer imitating her? Quote one line that
> lands and one that doesn't. Specifics only — "tighten the voice" is not a finding.

**Reads-aloud test:** ⬜ passes / ⬜ sounds like a brochure

---

## 4. Query coverage

**Targets:** `tracked-queries.md` #__ — *"<query as tracked>"*

> If the input maps to no tracked query, say so plainly and explain why it should still exist.
> "Doesn't map to a tracked query" is not automatically a fail — but it is always a question.

**Quotability test:**
> Can an answer engine lift 2–4 consecutive sentences out of this and have them stand alone as a
> correct, complete answer? Paste the block you'd expect to get quoted. If you can't find one,
> that is the finding.

```
<paste the strongest self-contained block, or write: none — no quotable block exists>
```

**Format check** *(the shape cited sources share)*:

| | |
|---|---|
| Direct answer near the top | ⬜ |
| Numbered steps or FAQ block | ⬜ |
| Short sections, plain headings | ⬜ |
| Internal links into ROS™ / services / pricing | ⬜ |

**Competitive read:**
> `tracked-queries.md` records who gets cited for this query today. What does their page do that
> this one doesn't?

---

## 5. Required fixes

> Ordered: BLOCKED first, then FIX, then IMPROVE, then NOTE. Every finding names an owner and
> states the exact change — not the problem. "Pricing is unclear" is not a fix; "replace
> '30-Minute' with '45-Minute' in the tier card" is.

| # | Severity | Location | Change required | Owner |
|---|---|---|---|---|
| 1 | BLOCKED | ¶3 | | Charlene |
| 2 | FIX | Line 12 | | Reviewer |
| 3 | IMPROVE | Section 2 | | Reviewer |
| 4 | NOTE | — | | — |

**Needs Charlene before shipping:**
> Pricing/tier numbers, homepage copy, legal/tax/immigration thresholds, named third parties.
> If nothing does, say "Nothing — reviewer can apply all fixes."

**Route to a code session:**
> Schema, robots.txt, sitemap, llms.txt, og:image, redirects, internal-link plumbing. Noted here,
> not attempted in this loop. If nothing, say so.

**Re-review needed after fixes?** ⬜ Yes / ⬜ No

---
*Reviewed against `standards/gss-review-brief.md`. Findings are advisory until the fixes ship —
this loop reviews, it does not publish.*
