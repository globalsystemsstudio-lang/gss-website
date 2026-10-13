---
description: Find the risks and blind spots before they find you
argument-hint: [plan, decision, or draft to pressure-test]
---

Scout for risk in: **$ARGUMENTS**

Assume this goes ahead as written. Find what bites.

Cover four categories — and if a category is genuinely empty, say so rather than inventing something to fill it:

1. **Will break** — concrete failure modes. What specifically goes wrong, under what conditions, and how you'd notice.
2. **Assumed but unverified** — things being treated as settled that nobody actually checked. These are the expensive ones, because no one is watching them.
3. **Blind spots** — the affected party not consulted, the second-order effect, the thing that's fine now and compounds later.
4. **Hard to undo** — anything one-way. Published content, deleted data, a price told to a customer, a public commitment. Flag these even at low probability; reversibility matters more than likelihood.

For each risk:

| | |
|---|---|
| **Risk** | one line |
| **Trigger** | the condition that sets it off |
| **Severity** | how bad, in concrete terms — not high/medium/low |
| **Early signal** | what you'd see first, while there's still time |
| **Cheapest mitigation** | the smallest thing that meaningfully reduces it |

Order by *severity × how easily it's missed* — not by probability. A likely, obvious risk is already handled by whoever wrote the plan. Your value is the one they didn't see.

End with the single line: **"If you only do one thing:"**
