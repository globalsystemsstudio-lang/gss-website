"""CLI entrypoint: python -m geo_scraper <command> [options]

Commands:
  scan    Scrape competitor/peer pages from config.yaml, save a snapshot.
  audit   Score GEO-readiness of our own pages (or any URLs given).
  diff    Compare the two most recent `scan` snapshots and report changes.
"""

from __future__ import annotations

import argparse
import sys
from datetime import datetime, timezone

from .audit import audit_page
from .config import load_config
from .extract import extract_signals
from .fetch import fetch
from .output import latest_snapshot, snapshot_dir, write_csv, write_json


def _now_stamp() -> str:
    return datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")


def cmd_scan(args: argparse.Namespace) -> int:
    cfg = load_config(args.config)
    targets = cfg.competitors
    if not targets:
        print("No competitors configured in config.yaml — nothing to scan.", file=sys.stderr)
        return 1

    records = []
    for target in targets:
        for url in target.urls:
            print(f"[scan] fetching {url} ({target.name})")
            result = fetch(url, cfg.fetch, force_stealth=args.stealth)
            signals = extract_signals(url, result.status, result.response)
            record = signals.to_dict()
            record["competitor"] = target.name
            record["fetch_error"] = result.error
            record["used_stealth"] = result.used_stealth
            records.append(record)

    stamp = _now_stamp()
    out_dir = snapshot_dir("scans", stamp)
    write_json(out_dir / "scan.json", records)
    write_csv(
        out_dir / "scan.csv", records,
        fields=["competitor", "url", "status", "title", "meta_description", "word_count",
                "has_faq_schema", "image_count", "images_missing_alt", "price_mentions", "fetch_error"],
    )
    print(f"[scan] wrote {len(records)} records to {out_dir}")
    return 0


def cmd_audit(args: argparse.Namespace) -> int:
    cfg = load_config(args.config)
    urls = args.urls or cfg.own_site.urls
    if not urls:
        print("No URLs to audit — pass URLs or set own_site.urls in config.yaml.", file=sys.stderr)
        return 1

    records = []
    for url in urls:
        print(f"[audit] fetching {url}")
        result = fetch(url, cfg.fetch, force_stealth=args.stealth)
        signals = extract_signals(url, result.status, result.response)
        audit_result = audit_page(signals)
        record = audit_result.to_dict()
        record["title"] = signals.title
        records.append(record)

    stamp = _now_stamp()
    out_dir = snapshot_dir("audits", stamp)
    write_json(out_dir / "audit.json", records)
    write_csv(out_dir / "audit.csv", records, fields=["url", "title", "score", "max_score"])
    print(f"[audit] wrote {len(records)} records to {out_dir}")

    print("\n=== GEO readiness summary ===")
    for r in records:
        print(f"  {r['score']:>3}/{r['max_score']}  {r['url']}")
        for check in r["checks"]:
            mark = "x" if check["passed"] else " "
            print(f"      [{mark}] {check['label']}" + (f" — {check['note']}" if check.get("note") else ""))
    return 0


def cmd_diff(args: argparse.Namespace) -> int:
    from .output import DATA_DIR

    base = DATA_DIR / "scans"
    if not base.exists():
        print("No scans found yet — run `scan` at least twice first.", file=sys.stderr)
        return 1
    runs = sorted((p for p in base.iterdir() if p.is_dir()), key=lambda p: p.name)
    if len(runs) < 2:
        print("Need at least two scan snapshots to diff — run `scan` again later.", file=sys.stderr)
        return 1

    import json

    prev_path, curr_path = runs[-2] / "scan.json", runs[-1] / "scan.json"
    prev = {r["url"]: r for r in json.loads(prev_path.read_text(encoding="utf-8"))}
    curr = {r["url"]: r for r in json.loads(curr_path.read_text(encoding="utf-8"))}

    print(f"Comparing {runs[-2].name} -> {runs[-1].name}\n")

    new_urls = set(curr) - set(prev)
    removed_urls = set(prev) - set(curr)
    if new_urls:
        print("New pages seen:")
        for u in sorted(new_urls):
            print(f"  + {u}")
    if removed_urls:
        print("Pages no longer in scan (removed or config changed):")
        for u in sorted(removed_urls):
            print(f"  - {u}")

    changed_any = False
    for url in sorted(set(curr) & set(prev)):
        p, c = prev[url], curr[url]
        diffs = []
        if p.get("title") != c.get("title"):
            diffs.append(f"title: {p.get('title')!r} -> {c.get('title')!r}")
        if p.get("price_mentions") != c.get("price_mentions"):
            diffs.append(f"pricing mentions changed: {p.get('price_mentions')} -> {c.get('price_mentions')}")
        if abs((p.get("word_count") or 0) - (c.get("word_count") or 0)) > 40:
            diffs.append(f"word count: {p.get('word_count')} -> {c.get('word_count')}")
        if p.get("has_faq_schema") != c.get("has_faq_schema"):
            diffs.append(f"FAQ schema: {p.get('has_faq_schema')} -> {c.get('has_faq_schema')}")
        if diffs:
            changed_any = True
            print(f"\n{url}")
            for d in diffs:
                print(f"  * {d}")

    if not new_urls and not removed_urls and not changed_any:
        print("No meaningful changes detected.")
    return 0


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(prog="geo_scraper", description="GSS competitor / GEO scraping toolkit")
    parser.add_argument("--config", default=None, help="Path to config.yaml (default: ./config.yaml)")
    sub = parser.add_subparsers(dest="command", required=True)

    p_scan = sub.add_parser("scan", help="Scrape competitor pages from config.yaml")
    p_scan.add_argument("--stealth", action="store_true", help="Force the headless-browser fetcher for all pages")
    p_scan.set_defaults(func=cmd_scan)

    p_audit = sub.add_parser("audit", help="GEO-readiness audit of our own pages (or given URLs)")
    p_audit.add_argument("urls", nargs="*", help="Specific URLs to audit (default: own_site.urls from config)")
    p_audit.add_argument("--stealth", action="store_true", help="Force the headless-browser fetcher")
    p_audit.set_defaults(func=cmd_audit)

    p_diff = sub.add_parser("diff", help="Diff the two most recent scan snapshots")
    p_diff.set_defaults(func=cmd_diff)

    return parser


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)
    return args.func(args)


if __name__ == "__main__":
    raise SystemExit(main())
