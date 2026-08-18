"""Thin, polite wrapper around Scrapling's fetchers.

Defaults to the fast static fetcher (Fetcher) and falls back to the
stealth headless-browser fetcher (StealthyFetcher) for pages that need
JS rendering — either because config says so, or because the static
fetch comes back looking blocked/empty.
"""

from __future__ import annotations

import time
from dataclasses import dataclass

from .config import FetchSettings

_last_request_at: dict[str, float] = {}


def _domain(url: str) -> str:
    from urllib.parse import urlparse

    return urlparse(url).netloc


def _respect_delay(url: str, delay_seconds: float) -> None:
    domain = _domain(url)
    last = _last_request_at.get(domain)
    now = time.monotonic()
    if last is not None:
        elapsed = now - last
        if elapsed < delay_seconds:
            time.sleep(delay_seconds - elapsed)
    _last_request_at[domain] = time.monotonic()


@dataclass
class FetchResult:
    url: str
    status: int | None
    ok: bool
    response: object | None
    error: str | None
    used_stealth: bool


def fetch(url: str, settings: FetchSettings, force_stealth: bool | None = None) -> FetchResult:
    """Fetch a URL politely, returning a Scrapling Response (or an error).

    Import of scrapling is deferred so `--help` and config-only commands
    don't require the (heavier) fetcher extras to be installed.
    """
    use_stealth = settings.use_stealth_by_default if force_stealth is None else force_stealth

    _respect_delay(url, settings.delay_seconds)

    try:
        if use_stealth:
            from scrapling.fetchers import StealthyFetcher

            resp = StealthyFetcher.fetch(url, headless=True)
        else:
            from scrapling.fetchers import Fetcher

            resp = Fetcher.get(url, stealthy_headers=True)
    except Exception as exc:  # noqa: BLE001 - surface any fetch failure to the caller
        return FetchResult(url=url, status=None, ok=False, response=None, error=str(exc), used_stealth=use_stealth)

    status = getattr(resp, "status", None)
    ok = bool(status) and 200 <= status < 400
    return FetchResult(url=url, status=status, ok=ok, response=resp, error=None, used_stealth=use_stealth)
