"""Snapshot writers — JSON (full detail) + CSV (quick skim) per run."""

from __future__ import annotations

import csv
import json
from pathlib import Path

DATA_DIR = Path(__file__).resolve().parent.parent / "data"


def snapshot_dir(kind: str, timestamp: str) -> Path:
    d = DATA_DIR / kind / timestamp
    d.mkdir(parents=True, exist_ok=True)
    return d


def write_json(path: Path, records: list[dict]) -> None:
    path.write_text(json.dumps(records, indent=2, ensure_ascii=False), encoding="utf-8")


def write_csv(path: Path, records: list[dict], fields: list[str]) -> None:
    with open(path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        for record in records:
            row = dict(record)
            for k, v in list(row.items()):
                if isinstance(v, (list, dict)):
                    row[k] = json.dumps(v, ensure_ascii=False)
            writer.writerow(row)


def latest_snapshot(kind: str) -> Path | None:
    base = DATA_DIR / kind
    if not base.exists():
        return None
    runs = sorted((p for p in base.iterdir() if p.is_dir()), key=lambda p: p.name)
    return runs[-1] if runs else None
