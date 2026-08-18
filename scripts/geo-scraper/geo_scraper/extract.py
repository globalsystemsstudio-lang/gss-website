"""Signal extraction from a fetched page.

Pulls out the fields that matter for competitor/market scans and for
GEO (generative-engine / AI-answer-engine optimization) audits, using
Scrapling's CSS/XPath-capable Response object.
"""

from __future__ import annotations

import json
import re
from dataclasses import asdict, dataclass, field

PRICE_RE = re.compile(r"(\$|USD|€|EUR|£|GBP)\s?[\d][\d,]*(\.\d{1,2})?", re.IGNORECASE)
WORD_RE = re.compile(r"\b[\w'-]+\b")


@dataclass
class PageSignals:
    url: str
    status: int | None
    title: str | None
    meta_description: str | None
    canonical: str | None
    h1: list[str] = field(default_factory=list)
    h2: list[str] = field(default_factory=list)
    h3: list[str] = field(default_factory=list)
    word_count: int = 0
    price_mentions: list[str] = field(default_factory=list)
    cta_links: list[dict] = field(default_factory=list)
    json_ld_types: list[str] = field(default_factory=list)
    has_faq_schema: bool = False
    image_count: int = 0
    images_missing_alt: int = 0
    first_paragraph: str | None = None
    first_paragraph_word_count: int = 0
    error: str | None = None

    def to_dict(self) -> dict:
        return asdict(self)


CTA_KEYWORDS = (
    "book", "schedule", "call", "contact", "get started", "learn more",
    "apply", "join", "buy", "shop", "subscribe", "sign up", "consult",
    "quote", "free", "discovery",
)


def _text_or_none(node) -> str | None:
    if node is None:
        return None
    text = node.get_all_text(strip=True) if hasattr(node, "get_all_text") else str(node).strip()
    return text or None


def extract_signals(url: str, status: int | None, response) -> PageSignals:
    if response is None:
        return PageSignals(url=url, status=status, title=None, meta_description=None,
                            canonical=None, error="no response body")

    try:
        title_node = response.css("title").first
        title = _text_or_none(title_node)

        meta_desc_node = response.css('meta[name="description"]').first
        meta_description = meta_desc_node.attrib.get("content") if meta_desc_node is not None else None

        canonical_node = response.css('link[rel="canonical"]').first
        canonical = canonical_node.attrib.get("href") if canonical_node is not None else None

        h1 = [_text_or_none(n) for n in response.css("h1")]
        h2 = [_text_or_none(n) for n in response.css("h2")]
        h3 = [_text_or_none(n) for n in response.css("h3")]
        h1 = [t for t in h1 if t]
        h2 = [t for t in h2 if t]
        h3 = [t for t in h3 if t]

        body_text = response.get_all_text(strip=True) if hasattr(response, "get_all_text") else ""
        word_count = len(WORD_RE.findall(body_text))
        price_mentions = sorted(set(m.group(0) for m in PRICE_RE.finditer(body_text)))[:20]

        cta_links = []
        for a in response.css("a"):
            text = (_text_or_none(a) or "").strip()
            href = a.attrib.get("href", "")
            if not text or not href:
                continue
            low = text.lower()
            if any(kw in low for kw in CTA_KEYWORDS):
                cta_links.append({"text": text, "href": href})

        json_ld_types: list[str] = []
        has_faq_schema = False
        for script in response.css('script[type="application/ld+json"]'):
            # .text (not .get_all_text()) — script contents aren't visible
            # text, so get_all_text() would come back empty.
            raw = script.text or ""
            if not raw:
                continue
            try:
                data = json.loads(raw)
            except (json.JSONDecodeError, TypeError):
                continue
            entries = data if isinstance(data, list) else [data]
            for entry in entries:
                if not isinstance(entry, dict):
                    continue
                t = entry.get("@type")
                if isinstance(t, list):
                    json_ld_types.extend(str(x) for x in t)
                elif t:
                    json_ld_types.append(str(t))
                if entry.get("@type") == "FAQPage":
                    has_faq_schema = True

        images = response.css("img")
        image_count = len(images)
        images_missing_alt = sum(1 for img in images if not img.attrib.get("alt", "").strip())

        first_p_node = response.css("p").first
        first_paragraph = _text_or_none(first_p_node)
        first_paragraph_word_count = len(WORD_RE.findall(first_paragraph)) if first_paragraph else 0

        return PageSignals(
            url=url,
            status=status,
            title=title,
            meta_description=meta_description,
            canonical=canonical,
            h1=h1,
            h2=h2,
            h3=h3,
            word_count=word_count,
            price_mentions=price_mentions,
            cta_links=cta_links[:15],
            json_ld_types=sorted(set(json_ld_types)),
            has_faq_schema=has_faq_schema,
            image_count=image_count,
            images_missing_alt=images_missing_alt,
            first_paragraph=first_paragraph,
            first_paragraph_word_count=first_paragraph_word_count,
        )
    except Exception as exc:  # noqa: BLE001 - one bad page shouldn't kill a whole scan
        return PageSignals(url=url, status=status, title=None, meta_description=None,
                            canonical=None, error=f"extraction failed: {exc}")
