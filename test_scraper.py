#!/usr/bin/env python3
"""Simple test version of the scraper to debug issues"""

import requests
from bs4 import BeautifulSoup
import csv
import re
import time
from urllib.parse import urljoin

BASE = "https://www.marketsandfairs.com.au"

def get_market_urls(state):
    """Get market URLs from the listing page"""
    url = f"{BASE}/Markets?state={state}"
    print(f"Fetching: {url}")
    
    r = requests.get(url, timeout=10)
    soup = BeautifulSoup(r.text, 'html.parser')
    
    market_urls = []
    for a in soup.find_all('a', href=True):
        href = a.get('href')
        if href and '/Market/' in href and href not in ['/Market/', '/Markets/']:
            full_url = urljoin(BASE, href)
            if full_url not in market_urls:
                market_urls.append(full_url)
    
    print(f"Found {len(market_urls)} unique market URLs")
    return market_urls

def parse_market(url):
    """Parse a single market page"""
    print(f"Parsing: {url}")
    
    r = requests.get(url, timeout=10)
    soup = BeautifulSoup(r.text, 'html.parser')
    
    # Get title
    title = ""
    h1 = soup.find('h1')
    if h1:
        title = h1.get_text().strip()
    
    # Get description from meta tag
    desc = ""
    meta_desc = soup.find('meta', {'name': 'description'})
    if meta_desc:
        desc = meta_desc.get('content', '').strip()
    
    # Look for address/location info
    address = ""
    # Try to find text that looks like an address
    text = soup.get_text()
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    
    for line in lines:
        # Look for lines with postcodes (4 digits)
        if re.search(r'\b\d{4}\b', line) and any(state in line.upper() for state in ['NSW', 'QLD', 'VIC', 'SA', 'WA', 'TAS', 'NT', 'ACT']):
            address = line
            break
    
    return {
        'name': title,
        'description': desc[:200] if desc else '',
        'address': address,
        'url': url
    }

def main():
    print("Testing simple scraper...")
    
    # Get first 3 market URLs from NSW
    urls = get_market_urls('NSW')[:3]
    
    markets = []
    for url in urls:
        try:
            market = parse_market(url)
            markets.append(market)
            time.sleep(1)  # Be nice to the server
        except Exception as e:
            print(f"Error parsing {url}: {e}")
    
    # Write to CSV
    print(f"\nWriting {len(markets)} markets to test_output.csv")
    with open('test_output.csv', 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['name', 'description', 'address', 'url'])
        writer.writeheader()
        writer.writerows(markets)
    
    # Show results
    print("\nResults:")
    for i, market in enumerate(markets, 1):
        print(f"{i}. {market['name']}")
        print(f"   Address: {market['address']}")
        print(f"   URL: {market['url']}")
        print()

if __name__ == "__main__":
    main()