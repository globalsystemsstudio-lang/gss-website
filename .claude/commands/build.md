---
description: Create it step by step, in the order it actually gets done
argument-hint: [what to build]
---

Build: **$ARGUMENTS**

Produce a sequence someone can follow start to finish without stopping to figure out what you meant.

Structure:

1. **Outcome** — one line. What exists at the end that doesn't exist now.
2. **Before you start** — anything needed up front: access, decisions, inputs. If a step later depends on something I don't have yet, it belongs here, not as a surprise at step 7.
3. **The steps** — numbered, in execution order. Each one:
   - starts with a verb
   - is a single action, not a phase containing five actions
   - names its output, so I know whether the step worked
4. **Checkpoints** — after any step where a mistake would be expensive or hard to undo, say what to verify before continuing.
5. **Where this usually goes wrong** — two or three failure points, and what to do when you hit them.

Rules:

- **Real sequence, not a taxonomy.** If step 4 can't start until step 2 finishes, order enforces it.
- **Concrete throughout.** Actual commands, filenames, values. "Configure appropriately" is not a step.
- **Say when to stop and decide.** If a step needs a judgment call, mark it and say what the call is between.
- If the whole thing is under three steps, just say it in prose. Don't inflate a simple task into a framework.
