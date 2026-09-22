# Claude Cheat Codes — slash commands

Type `/goal`, `/critic`, `/audit` in any Claude Code session opened in this repo. Each file in
this folder is one command; the filename is the command name. Arguments after the command get
passed through, so `/compare Netlify vs Vercel for a Next.js site` works as written.

These live in the repo, so they travel with it — pull the branch and they're on your machine.

## The commands

### Core — start here
| | |
|---|---|
| `/goal` | Define the exact outcome before any work starts |
| `/brief` | The short version, fast |
| `/compare` | Compare options clearly, then actually pick one |
| `/explain` | Make it simple and genuinely easy to understand |

### Thinking — strengthen a first draft
| | |
|---|---|
| `/critic` | Spot the weak points fast, no reassurance |
| `/optimize` | Improve what already exists |
| `/build` | Create it step by step |
| `/scout` | Find risks and blind spots |

Best used *after* a first answer or first draft, not before.

### Creation — package answers into usable output
| | |
|---|---|
| `/rewrite` | Improve wording and clarity, same meaning |
| `/format` | Turn output into a table, checklist, or structure |
| `/brief` | *(same command as above)* |
| `/explain` | *(same command as above)* |

### Business — offers, content, sales assets
| | |
|---|---|
| `/offer` | Shape a stronger offer |
| `/content` | Generate content angles fast |
| `/salespage` | Structure a sales page clearly |
| `/audit` | Review the output and say whether it ships |

## Stacks

Two or three commands in sequence beat one command doing everything. Run them as separate
turns — each one works on what the last one produced.

| Stack | Gets you |
|---|---|
| `/goal` → `/build` → `/format` | An idea turned into a clear checklist |
| `/compare` → `/critic` → `/brief` | Options evaluated and summarized fast |
| `/content` → `/rewrite` → `/format` | Stronger posts, faster |
| `/offer` → `/salespage` → `/audit` | Sales assets built and refined |

The pattern underneath: **frame it → do it → tighten it.** Most single-command output is
missing either the frame or the tightening.

## A note on the count

The source carousel advertises 16 commands, but `/brief` and `/explain` each appear twice —
once in Core and again in Creation. That's **14 unique commands** filling 16 slots. Nothing is
missing; a command file can only have one name, so `/brief` is one command usable at either
stage. Worth knowing if you go looking for two you can't find.

## Working with the review loop

Four commands check themselves against `gss-review-loop/standards/` when it's present:

- `/audit` — audits against `gss-review-brief.md` and `current-state.md`, citing sections
- `/offer`, `/salespage` — verify prices and claims against `current-state.md` rather than inventing them
- `/content` — angles aimed at the gaps in `tracked-queries.md`

Outside this repo they degrade gracefully to the generic behavior.

## Adding your own

Drop a `.md` file in this folder. Frontmatter sets the description shown in `/help`:

```markdown
---
description: What it does, one line
argument-hint: [what to pass it]
---

The prompt. Use $ARGUMENTS where the input goes.
```

The ones here are opinionated on purpose — they specify output shape, length, and what *not*
to do. A command that just says "improve this" gets you what you'd have gotten anyway.
