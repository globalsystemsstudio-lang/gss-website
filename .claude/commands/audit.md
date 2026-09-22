---
description: Review the output properly and say whether it ships
argument-hint: [what to audit, or blank for the last output]
---

Audit: **$ARGUMENTS**

(If no argument, audit the previous output in this conversation.)

This is the last check before something goes out. Be the reader who catches what everyone else missed.

**1. Verdict first.** One of: **SHIP** · **SHIP AFTER FIXES** · **BLOCKED** · **REWRITE**. Then two sentences on why. Don't bury this at the bottom.

**2. Accuracy.** Every factual claim, number, price, date, name, and link. For each: correct, wrong, or unverifiable. Unverifiable is not a pass — it's a claim nobody has checked, and it ships as a liability. Quote claims exactly as written; paraphrasing is where errors hide.

**3. Does it do its job?** State what this was supposed to achieve, then whether it does. A well-written thing that misses its purpose is a fail, not a near-miss.

**4. What's missing.** The question left unanswered, the step skipped, the objection unhandled. Absences are harder to see than errors, which is why they survive to publication.

**5. Fixes** — ordered, severity-tagged, each naming the exact change:

- **BLOCKED** — cannot ship. Wrong fact, unverifiable claim, broken promise.
- **FIX** — must change, and you can state precisely what.
- **IMPROVE** — should change, doesn't block.
- **NOTE** — worth knowing, no action.

Rules:

- **No praise padding.** If it's good, "SHIP" says it.
- Every fix names the change, not the problem.
- If a fix needs a decision or a fact you don't have, name the owner instead of guessing.
- If this repo has `gss-review-loop/standards/`, audit against `gss-review-brief.md` and `current-state.md` and cite the section you're checking against.
