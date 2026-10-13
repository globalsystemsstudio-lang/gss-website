# GSS Review Loop

A standing review station for GSS content. Drop something in `input/`, run a review against
the standards, get a structured verdict in `reviews/`. Same brief, same format, every time —
so reviews are comparable to each other and to the ones from three months ago.

## Layout

```
gss-review-loop/
├── input/                      drop content here (never modified)
├── reviews/                    one review per input
├── standards/
│   ├── gss-review-brief.md     the standing job + what "good" means
│   ├── current-state.md        fact-check reference
│   └── tracked-queries.md      0%-visibility query mirror
├── templates/
│   └── review-template.md      the five-section format
├── pending.ps1                 read-only: which inputs lack a review
└── README.md
```

## The rule that makes this work

**`input/` is read-only.** Nothing in this loop ever edits, renames, reformats, or "cleans up"
a file in `input/`. A review is a separate artifact that points at the input. If a draft needs
changes, the changes are described in the review's Section 5 and applied by whoever owns the
source — not silently written back over the thing being reviewed.

Reviews are disposable; inputs are evidence. Keep them separable.

## Running a review

1. Drop the file in `input/`. Any format — `.md`, `.txt`, pasted LinkedIn copy, a page draft.
2. Check what's outstanding:
   ```powershell
   .\pending.ps1
   ```
3. Open a session and say: *review `input/<filename>` against the standards.*
   The reviewer reads, in this order:
   - `standards/gss-review-brief.md` — the job and the pass bar
   - `standards/current-state.md` — every factual claim gets checked against this
   - `standards/tracked-queries.md` — does this close a visibility gap, and which one
   - `templates/review-template.md` — the output format
4. Write the review to `reviews/<filename-without-extension>.review.md`.
5. Anything the review flags as **BLOCKED** goes to Charlene. Nothing blocked ships.

## Naming convention

`pending.ps1` pairs them by base name:

| Input | Review |
|---|---|
| `input/ros-definition-page.md` | `reviews/ros-definition-page.review.md` |
| `input/linkedin-fbar-post.txt` | `reviews/linkedin-fbar-post.review.md` |

Break the convention and the input reads as unreviewed. That's the intended failure direction —
it over-reports rather than under-reports.

## Keeping the standards honest

The standards files are the whole value of this loop. A review is only as good as
`current-state.md` was on the day it ran.

- **`current-state.md`** — re-verify against the live site whenever pages ship. Every entry
  carries a `verified` date; anything older than ~30 days is a claim, not a fact.
- **`tracked-queries.md`** — refresh after a RankPrompt re-run (~13–15 credits per full
  check-in). Do not re-run for one page; batch the fixes, then measure.
- **`gss-review-brief.md`** — changes only when the actual standard changes. If a review keeps
  flagging the same thing and the answer is always "that's fine," the brief is wrong, not the
  content.

Each standards file ends with an "As of" line. Update it when you touch the file.
