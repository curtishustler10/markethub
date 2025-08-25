#!/usr/bin/env python3
"""
Scrape all markets from marketsandfairs.com.au for given Australian state(s)
and export a clean CSV that you can map 1:1 into your MarketHub database.

Usage:
  python scrape_marketsandfairs.py --state NSW --out markets.csv --sql-out markets.sql
  python scrape_marketsandfairs.py --state ALL --out all_markets.csv

Notes:
- Be respectful: default delay ~1s/request to avoid hammering the site.
- The script discovers ALL pages by crawling within the state filter; no fixed page count needed.
- Edit COLUMN_MAP below to match your DB column names exactly. Any value set to None is skipped.
"""

import argparse
import csv
import os
import random
import re
import time
from collections import OrderedDict
from dataclasses import dataclass, asdict
from typing import List, Optional, Set, Tuple
from urllib.parse import urljoin, urlparse, urlunparse, parse_qs

import requests
from bs4 import BeautifulSoup
from slugify import slugify

BASE = "https://www.marketsandfairs.com.au"
LISTING_PATH = "/Markets"
ALL_STATES = ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"]

# ---------- Configure your DB mapping here ----------
# Left = scraped field name; Right = your DB column.
# Set to None to exclude a scraped field.
COLUMN_MAP: "OrderedDict[str, Optional[str]]" = OrderedDict({
    "external_id":        "external_id",
    "name":               "name",
    "description":        "description",
    "category":           "category",
    "is_outdoor":         "is_outdoor",
    "address_text":       "address",
    "suburb":             "suburb",
    "state":              "state",
    "postcode":           "postcode",
    "country":            "country",
    "latitude":           "lat",
    "longitude":          "lng",
    "schedule_text":      "schedule_text",
    "day_of_week":        "day_of_week",
    "frequency":          "frequency",
    "start_time":         "start_time",
    "end_time":           "end_time",
    "website":            "website",
    "email":              "email",
    "phone":              "phone",
    "image_url":          "image_url",
    "source_url":         "source_url",
})

DB_TABLE_NAME = "markets_staging"   # change to your exact table name if generating SQL

# ---------- Scraper settings ----------
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/124.0 Safari/537.36"
    ),
    "Accept": (
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,"
        "image/webp,image/apng,*/*;q=0.8"
    ),
    "Accept-Language": "en-US,en;q=0.9",
    "Referer": "https://www.google.com/",
}
REQUEST_TIMEOUT = 20
MIN_DELAY = 0.8
MAX_DELAY = 1.6

# create a session that can bypass simple anti-bot protections
try:
    import cloudscraper  # type: ignore

    session = cloudscraper.create_scraper()
except Exception:  # pragma: no cover - fallback when cloudscraper missing
    session = requests.Session()

session.headers.update(HEADERS)

# ---------- Data model ----------
@dataclass
class Market:
    external_id: str
    name: str
    description: str
    category: str
    is_outdoor: bool
    address_text: str
    suburb: str
    state: str
    postcode: str
    country: str
    latitude: str
    longitude: str
    schedule_text: str
    day_of_week: str
    frequency: str
    start_time: str
    end_time: str
    website: str
    email: str
    phone: str
    image_url: str
    source_url: str

# ---------- Helpers ----------
def sleep_a_bit():
    time.sleep(random.uniform(MIN_DELAY, MAX_DELAY))

def fetch(url: str) -> Optional[requests.Response]:
    for attempt in range(4):
        try:
            r = session.get(url, timeout=REQUEST_TIMEOUT)
            if r.status_code == 200:
                return r
            if r.status_code in (429, 500, 502, 503, 504):
                sleep_a_bit()
                continue
            return None
        except requests.RequestException:
            sleep_a_bit()
            continue
    return None

def soupify(html: str) -> BeautifulSoup:
    return BeautifulSoup(html, "html.parser")

def normalize_space(s: str) -> str:
    return re.sub(r"\s+", " ", (s or "").strip())

def extract_latlon_from_text(text: str) -> Tuple[str, str]:
    m = re.search(r"(-?\d{1,2}\.\d{3,6})[, ]\s*(-?\d{1,3}\.\d{3,6})", text)
    if m:
        return m.group(1), m.group(2)
    return "", ""

def extract_postcode(addr: str) -> str:
    m = re.search(r"\b(\d{4})\b", addr or "")
    return m.group(1) if m else ""

def extract_state(addr: str, default_state: str) -> str:
    for st in ALL_STATES:
        if re.search(rf"\b{st}\b", addr or "", re.I):
            return st
    return default_state

def split_suburb(addr: str) -> str:
    m = re.search(r",\s*([A-Za-z \-']+)\s*,?\s*(ACT|NSW|NT|QLD|SA|TAS|VIC|WA)\b", addr or "", re.I)
    if m:
        return normalize_space(m.group(1).title())
    return ""

def is_market_detail_href(href: str) -> bool:
    if not href:
        return False
    return bool(re.search(r"/Market(s)?/[^/?#]+", href, re.I)) and "state=" not in href.lower()

def make_state_listing_url(state: str) -> str:
    return f"{BASE}{LISTING_PATH}?state={state.upper()}"

def canonicalize(url: str) -> str:
    u = urlparse(url)
    return urlunparse((u.scheme, u.netloc, u.path, u.params, u.query, ""))

# ---------- Crawling ----------
def crawl_listing(state: str) -> List[str]:
    start_url = make_state_listing_url(state)
    to_visit: List[str] = [start_url]
    visited: Set[str] = set()
    market_urls: Set[str] = set()

    while to_visit:
        url = to_visit.pop(0)
        cu = canonicalize(url)
        if cu in visited:
            continue
        visited.add(cu)

        resp = fetch(cu)
        if not resp:
            continue
        sleep_a_bit()
        s = soupify(resp.text)

        for a in s.select("a[href]"):
            href = a.get("href")
            if not href:
                continue
            full = canonicalize(urljoin(BASE, href))
            if is_market_detail_href(href):
                market_urls.add(full)

        for a in s.select("a[href]"):
            href = a.get("href")
            if not href:
                continue
            full = canonicalize(urljoin(BASE, href))
            if full.startswith(f"{BASE}{LISTING_PATH}"):
                qs = parse_qs(urlparse(full).query)
                if "state" in qs and qs["state"][0].upper() != state.upper():
                    continue
                if full not in visited and full not in to_visit:
                    to_visit.append(full)

    return sorted(market_urls)

# ---------- Parsing a market page ----------
LABEL_PATTERNS = {
    "when": re.compile(r"^\s*when\s*:?", re.I),
    "where": re.compile(r"^\s*where\s*:?,?", re.I),
    "contact": re.compile(r"^\s*contact\s*:?,?", re.I),
    "website": re.compile(r"^\s*website\s*:?,?", re.I),
    "category": re.compile(r"^\s*(categories?|type)\s*:?,?", re.I),
}

def get_text_after_label(soup: BeautifulSoup, key: str) -> str:
    pat = LABEL_PATTERNS[key]
    el = soup.find(string=pat)
    if el:
        txt = normalize_space(str(el))
        txt = re.sub(pat, "", txt).strip(": \n")
        if txt:
            return txt
        parent = el.parent
        if parent and parent.find_next_sibling():
            return normalize_space(parent.find_next_sibling().get_text(" ", strip=True))
    return ""

def first_text(soup: BeautifulSoup, selectors: List[str]) -> str:
    for sel in selectors:
        node = soup.select_one(sel)
        if node:
            return normalize_space(node.get_text(" ", strip=True))
    return ""

def parse_market(url: str, default_state: str) -> Market:
    resp = fetch(url)
    if not resp:
        raise RuntimeError(f"Failed to fetch {url}")
    sleep_a_bit()
    s = soupify(resp.text)

    title = first_text(s, ["h1", ".page-title", ".title", "h2"])
    if not title:
        title = normalize_space(s.title.get_text()) if s.title else ""

    description = ""
    desc_node = s.select_one("meta[name='description']") or s.select_one("meta[property='og:description']")
    if desc_node and desc_node.get("content"):
        description = normalize_space(desc_node["content"])
    if not description:
        body_blurb = s.select_one("article, .content, .market-description, .rich-text, .editor, .post-content, .container")
        if body_blurb:
            text = normalize_space(body_blurb.get_text(" ", strip=True))
            description = text[:1200]

    when = get_text_after_label(s, "when")
    where = get_text_after_label(s, "where")
    category = get_text_after_label(s, "category")

    email = ""
    phone = ""
    website = ""

    for a in s.select("a[href]"):
        href = a.get("href", "")
        if href.startswith("mailto:") and not email:
            email = href.replace("mailto:", "").strip()
        elif href.startswith("tel:") and not phone:
            phone = href.replace("tel:", "").strip()
        elif href.startswith("http") and "marketsandfairs.com.au" not in href and not website:
            website = href

    if not website:
        web_from_label = get_text_after_label(s, "website")
        if web_from_label and web_from_label.startswith("http"):
            website = web_from_label

    image_url = ""
    img = s.select_one("meta[property='og:image']")
    if img and img.get("content"):
        image_url = img["content"]
    else:
        tag = s.select_one("img")
        if tag and tag.get("src"):
            image_url = urljoin(BASE, tag["src"])

    lat, lon = "", ""
    map_candidates = []
    for a in s.select("a[href]"):
        h = a.get("href", "")
        if any(k in h for k in ["google.com/maps", "goo.gl/maps", "maps.apple.com"]):
            map_candidates.append(h)
    if map_candidates:
        lat, lon = extract_latlon_from_text(" ".join(map_candidates))
    if not lat:
        lat, lon = extract_latlon_from_text(s.get_text(" ", strip=True))

    addr = where or ""
    pc = extract_postcode(addr)
    st = extract_state(addr, default_state)
    suburb = split_suburb(addr)

    schedule_text = when
    day_of_week = ""
    frequency = ""
    m = re.search(r"(Mon|Tue|Wed|Thu|Fri|Sat|Sun|Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)", when, re.I)
    if m:
        day_of_week = m.group(0).title()
    m = re.search(r"(weekly|fortnightly|monthly|quarterly|bi-?monthly|first|second|third|fourth)\b", when, re.I)
    if m:
        frequency = m.group(0).lower()

    start_time = ""
    end_time = ""
    t = re.findall(r"\b(\d{1,2}(:\d{2})?\s*(am|pm))\b", when, re.I)
    if t:
        if len(t) >= 1:
            start_time = t[0][0]
        if len(t) >= 2:
            end_time = t[1][0]

    p = urlparse(url).path.rstrip("/")
    external_id = "marketsandfairs:" + slugify(p)

    return Market(
        external_id=external_id,
        name=title,
        description=description,
        category=category,
        is_outdoor=True,
        address_text=addr,
        suburb=suburb,
        state=st,
        postcode=pc,
        country="Australia",
        latitude=lat,
        longitude=lon,
        schedule_text=schedule_text,
        day_of_week=day_of_week,
        frequency=frequency,
        start_time=start_time,
        end_time=end_time,
        website=website,
        email=email,
        phone=phone,
        image_url=image_url,
        source_url=url,
    )

def dedup(records: List[Market]) -> List[Market]:
    seen: Set[str] = set()
    out: List[Market] = []
    for r in records:
        key = "|".join([
            slugify(r.name) or "noname",
            (r.suburb or "").lower(),
            r.postcode or "",
            r.state or "",
        ])
        if key in seen:
            continue
        seen.add(key)
        out.append(r)
    return out

def write_csv(path: str, records: List[Market]):
    fieldnames = [dst for src, dst in COLUMN_MAP.items() if dst]
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fieldnames)
        w.writeheader()
        for m in records:
            row_src = asdict(m)
            row_out = {COLUMN_MAP[k]: row_src.get(k, "") for k in COLUMN_MAP if COLUMN_MAP[k]}
            w.writerow(row_out)

def generate_sql(path: str, records: List[Market], table: str):
    cols = [dst for src, dst in COLUMN_MAP.items() if dst]
    col_list = ", ".join(f'"{c}"' for c in cols)

    with open(path, "w", encoding="utf-8") as f:
        f.write(f"-- Generated by scrape_marketsandfairs.py\n")
        f.write(f"-- Table: {table}\n\n")
        for m in records:
            row_src = asdict(m)
            vals = []
            for src, dst in COLUMN_MAP.items():
                if not dst:
                    continue
                v = row_src.get(src, "")
                if v is None:
                    vals.append("NULL")
                else:
                    s = str(v).replace("'", "''")
                    vals.append(f"'{s}'")
            f.write(f"INSERT INTO {table} ({col_list}) VALUES ({', '.join(vals)});\n")

# ---------- Main ----------
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--state", default="ALL", help="State code: NSW, QLD, etc. Use ALL for every state")
    ap.add_argument("--out", default="markets.csv", help="CSV output path")
    ap.add_argument("--sql-out", default="", help="Optional .sql file to generate INSERTs")
    ap.add_argument("--max", type=int, default=0, help="Max markets to parse per state (0 = all)")
    args = ap.parse_args()

    states = ALL_STATES if args.state.upper() == "ALL" else [args.state.upper()]
    records: List[Market] = []

    for st in states:
        print(f"[1/4] Discovering market pages for state={st}…")
        urls = crawl_listing(st)
        print(f"  Found {len(urls)} detail pages")

        if args.max and args.max > 0:
            urls = urls[:args.max]

        print(f"[2/4] Parsing detail pages for {st}…")
        for i, u in enumerate(urls, 1):
            try:
                m = parse_market(u, default_state=st)
                records.append(m)
            except Exception as e:
                print(f"    ! Skipped {u} due to: {e}")
            if i % 10 == 0:
                print(f"   …parsed {i}/{len(urls)} for {st}")

    print(f"[3/4] De-duplicating…")
    records = dedup(records)
    print(f"  Kept {len(records)} unique markets")

    print(f"[4/4] Writing CSV → {args.out}")
    write_csv(args.out, records)
    print(f"  Done. {len(records)} rows written.")

    if args.sql_out:
        print(f"Generating SQL → {args.sql_out} (table={DB_TABLE_NAME})")
        generate_sql(args.sql_out, records, DB_TABLE_NAME)
        print("  SQL file created.")

if __name__ == "__main__":
    main()