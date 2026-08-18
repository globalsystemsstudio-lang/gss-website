"""Config loading for the geo-scraper toolkit."""

from __future__ import annotations

import sys
from dataclasses import dataclass, field
from pathlib import Path

import yaml

DEFAULT_CONFIG_PATH = Path(__file__).resolve().parent.parent / "config.yaml"
EXAMPLE_CONFIG_PATH = Path(__file__).resolve().parent.parent / "config.example.yaml"


@dataclass
class SiteTarget:
    name: str
    urls: list[str]


@dataclass
class FetchSettings:
    delay_seconds: float = 2.0
    use_stealth_by_default: bool = False
    user_agent: str = "Mozilla/5.0 (compatible; GSS-GEO-Scan/1.0)"


@dataclass
class Config:
    own_site: SiteTarget
    competitors: list[SiteTarget] = field(default_factory=list)
    fetch: FetchSettings = field(default_factory=FetchSettings)


def load_config(path: str | Path | None = None) -> Config:
    cfg_path = Path(path) if path else DEFAULT_CONFIG_PATH

    if not cfg_path.exists():
        if cfg_path == DEFAULT_CONFIG_PATH and EXAMPLE_CONFIG_PATH.exists():
            print(
                f"[geo-scraper] No config.yaml found at {cfg_path}.\n"
                f"[geo-scraper] Copy {EXAMPLE_CONFIG_PATH.name} to config.yaml "
                "and fill in your target URLs first:\n"
                f"    cp {EXAMPLE_CONFIG_PATH} {cfg_path}",
                file=sys.stderr,
            )
        raise SystemExit(f"Config file not found: {cfg_path}")

    with open(cfg_path, "r", encoding="utf-8") as f:
        raw = yaml.safe_load(f) or {}

    own = raw.get("own_site") or {}
    own_site = SiteTarget(name=own.get("name", "Own Site"), urls=own.get("urls", []))

    competitors = [
        SiteTarget(name=c.get("name", c.get("urls", ["unknown"])[0]), urls=c.get("urls", []))
        for c in raw.get("competitors", [])
    ]

    fetch_raw = raw.get("fetch") or {}
    fetch = FetchSettings(
        delay_seconds=float(fetch_raw.get("delay_seconds", 2.0)),
        use_stealth_by_default=bool(fetch_raw.get("use_stealth_by_default", False)),
        user_agent=fetch_raw.get("user_agent", FetchSettings.user_agent),
    )

    return Config(own_site=own_site, competitors=competitors, fetch=fetch)
