"""GEO-readiness scoring.

"GEO" here = Generative Engine Optimization — how likely a page is to
get pulled into an AI answer engine's response (ChatGPT/Perplexity/
Google AI Overviews/etc.), as opposed to classic keyword SEO.

This is a heuristic checklist, not a guarantee of anything — it scores
the structural things GSS can control: a direct-answer paragraph near
the top, clean heading hierarchy, structured data, and a real meta
description. Use it to compare pages against each other over time, not
as an absolute number.
"""

from __future__ import annotations

from dataclasses import dataclass, field

from .extract import PageSignals

MAX_SCORE = 100


@dataclass
class AuditResult:
    url: str
    score: int
    max_score: int
    checks: list[dict] = field(default_factory=list)

    def to_dict(self) -> dict:
        return {"url": self.url, "score": self.score, "max_score": self.max_score, "checks": self.checks}


def _check(label: str, passed: bool, points: int, note: str = "") -> dict:
    return {"label": label, "passed": passed, "points": points if passed else 0, "max_points": points, "note": note}


def audit_page(signals: PageSignals) -> AuditResult:
    checks: list[dict] = []

    if signals.error:
        checks.append(_check("Page fetched successfully", False, 100, signals.error))
        return AuditResult(url=signals.url, score=0, max_score=MAX_SCORE, checks=checks)

    # Direct-answer paragraph: a short, self-contained answer near the top
    # of the page is what answer engines like to quote directly.
    has_direct_answer = bool(
        signals.first_paragraph and 15 <= signals.first_paragraph_word_count <= 60
    )
    checks.append(_check(
        "Has a direct-answer paragraph near the top (15-60 words)",
        has_direct_answer, 25,
        f"first paragraph is {signals.first_paragraph_word_count} words",
    ))

    # Single, clear H1.
    checks.append(_check(
        "Exactly one H1", len(signals.h1) == 1, 10,
        f"found {len(signals.h1)} H1 tag(s)",
    ))

    # Heading hierarchy present at all (H2s to structure sub-answers).
    checks.append(_check(
        "Has H2 subheadings", len(signals.h2) >= 2, 10,
        f"found {len(signals.h2)} H2 tag(s)",
    ))

    # Structured data.
    checks.append(_check(
        "Has JSON-LD structured data", len(signals.json_ld_types) > 0, 15,
        f"types: {', '.join(signals.json_ld_types) or 'none'}",
    ))
    checks.append(_check(
        "Has FAQPage schema", signals.has_faq_schema, 15,
        "FAQ schema is one of the highest-leverage GEO signals for Q&A-style content",
    ))

    # Meta description quality (still used by some engines as a summary).
    meta_len = len(signals.meta_description) if signals.meta_description else 0
    checks.append(_check(
        "Meta description present and well-sized (50-160 chars)",
        50 <= meta_len <= 160, 10,
        f"length {meta_len}",
    ))

    # Title present.
    checks.append(_check("Has a <title>", bool(signals.title), 5))

    # Image alt text — accessibility + helps multimodal crawlers.
    alt_ok = signals.image_count == 0 or signals.images_missing_alt == 0
    checks.append(_check(
        "All images have alt text", alt_ok, 10,
        f"{signals.images_missing_alt}/{signals.image_count} images missing alt",
    ))

    score = sum(c["points"] for c in checks)
    return AuditResult(url=signals.url, score=score, max_score=MAX_SCORE, checks=checks)
