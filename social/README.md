# GSS social carousels

Source files for Instagram / TikTok / LinkedIn carousels. One HTML file per
carousel; each `.slide` element is one 1080 × 1350 (4:5) frame.

## Files

| File | What it is |
|---|---|
| `carousel-001-before-you-book-the-flight.html` | Carousel 001, seven slides. Open it in a browser to review; slides scale to the window. |
| `export-slides.mjs` | Renders each slide to a PNG in `social/out/` (gitignored). |

## Exporting the PNGs

```bash
npm i -D playwright
node social/export-slides.mjs social/carousel-001-before-you-book-the-flight.html
```

The slides load Archivo, Inter and IBM Plex Mono from Google Fonts, so run the
export online. Adding `class="export"` to `<body>` also renders the slides at
true 1080 × 1350 in a browser, if you'd rather screenshot by hand.

## The format

Seven slides: one cover, five items, one recap. Every slide carries the same
frame, so the deck reads as one object in a feed.

- **Pill, top left** — the ROS™ module this slide belongs to, or the slide's job
  (`WHAT NOBODY TELLS YOU`, `SAVE THIS`).
- **Meta, top right** — `ROS™ · MODULE nn / 07`. Mono, quiet.
- **Headline** — Archivo 800. Black carries the setup, Coastal Blue carries the
  turn. Keep the blue to the last three or four words; a mostly-blue headline
  loses the contrast that makes the format work.
- **Ring** — the seven ROS™ modules. Set `data-a` on the `<svg>` to the module
  number (1–7) to fill that dot gold; `data-a="0"` marks all seven, for the
  cover and recap. The marker encodes the module, so keep it accurate.
- **Worksheet card** — the proof element. Four questions per item slide, phrased
  as questions the reader must answer, closing with a `VERIFY WITH` line naming
  who actually answers it. This is the slide that separates GSS from a
  motivational post: it hands over the artifact, not the feeling.
- **Navy band** — one line, the takeaway. Gold on the clause that lands.
- **Foot** — domain left, slide counter right.

Rules that keep it on brand: no emoji, no exclamation points, no invented
thresholds or deadlines. Where a number matters, name the form or the office and
send the reader to the professional who owns it. One CTA, on the last slide only.

## Carousel 001 — caption

> Five things that decide the move before the flight is booked.
>
> Not the packing list. The filing order.
>
> Where the visa has to be applied from. When the school's enrollment window
> actually closes. Which banks will open an account for a U.S. person. What your
> prescription is called there. What your visa lets you earn.
>
> None of these are hard once you know the sequence. All five are expensive when
> you find them in the wrong order.
>
> The full sequence is ROS™. Start with the free 15-minute discovery call.
>
> Nothing here is legal, tax, or immigration advice. It is the list of questions
> to put to the people who give it.

Tags: `#relocation #expat #movingabroad #expattax #internationalschools
#globalmobility #visas #americansabroad`

## Slide-by-slide

| # | Module | Item |
|---|---|---|
| 1 | — | Cover: five open items |
| 2 | 01 · Legal & Documentation | Where the visa must be filed from |
| 3 | 06 · Family & Social Integration | The school's real enrollment window |
| 4 | 02 · Financial Structure | A bank that will take a U.S. person |
| 5 | 04 · Healthcare & Wellness | The prescription, under its local name |
| 6 | 05 · Business & Income | What your visa lets you earn |
| 7 | — | Recap and the one CTA |

Modules 03 (Housing & Lifestyle) and 07 (Long-Term Stability) are unused here —
they're the natural spine for carousel 002.
