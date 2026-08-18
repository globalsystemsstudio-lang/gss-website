"""GSS GEO / competitor scraping toolkit.

Small collection of Scrapling-based tools for Global Systems Studio:

- competitor_scan: pull structured signals off competitor/peer sites
  (headings, meta, pricing mentions, blog cadence, CTAs).
- geo_audit: score our own pages (or anyone's) for AI-answer-engine
  (GEO) readiness — structured data, direct-answer paragraphs, heading
  hierarchy, meta description quality.
- diff_snapshot: compare two scan runs and report what changed.

Everything here is read-only, polite scraping of public pages for market
research. It does not log in anywhere, bypass paywalls, or handle any
personal data beyond what's already public on a page.
"""

from .config import Config, load_config

__all__ = ["Config", "load_config"]
