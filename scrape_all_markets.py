#!/usr/bin/env python3
"""
Enhanced scraper to get ALL markets from marketsandfairs.com.au
Based on the working test_scraper.py but expanded for all states
"""

import requests
from bs4 import BeautifulSoup
import csv
import re
import time
from urllib.parse import urljoin
import argparse

BASE = "https://www.marketsandfairs.com.au"
ALL_STATES = ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"]

def get_market_urls(state):
    """Get ALL market URLs from the listing page by paginating through pages"""
    all_urls = set()
    page = 1
    
    while True:
        url = f"{BASE}/Markets?state={state}&page={page}"
        print(f"  Fetching page {page}: {url}")
        
        try:
            r = requests.get(url, timeout=15)
            soup = BeautifulSoup(r.text, 'html.parser')
            
            # Find market links on this page
            page_urls = []
            for a in soup.find_all('a', href=True):
                href = a.get('href')
                if href and '/Market/' in href and href not in ['/Market/', '/Markets/']:
                    full_url = urljoin(BASE, href)
                    if full_url not in all_urls:
                        all_urls.add(full_url)
                        page_urls.append(full_url)
            
            print(f"    Found {len(page_urls)} new markets on page {page}")
            
            # If no new markets found, we've reached the end
            if not page_urls:
                print(f"    No more markets found. Stopping pagination.")
                break
                
            page += 1
            
            # Safety limit to avoid infinite loops
            if page > 50:
                print(f"    Reached page limit of 50. Stopping.")
                break
                
            time.sleep(1)  # Be respectful between pages
            
        except Exception as e:
            print(f"    Error fetching page {page}: {e}")
            break
    
    return list(all_urls)

def extract_coordinates(text):
    """Extract lat/lng coordinates from text"""
    # Look for coordinate patterns in map links or text
    patterns = [
        r'(@|=)(-?\d{1,2}\.\d{4,}),(-?\d{1,3}\.\d{4,})',  # Google Maps format
        r'(-?\d{1,2}\.\d{4,})[,\s]+(-?\d{1,3}\.\d{4,})',  # General lat,lng
    ]
    
    for pattern in patterns:
        match = re.search(pattern, text)
        if match:
            if len(match.groups()) == 3:  # Has prefix
                return match.group(2), match.group(3)
            else:  # Direct coordinates
                return match.group(1), match.group(2)
    
    return "", ""

def parse_market(url, state):
    """Parse a single market page"""
    print(f"    Parsing: {url.split('/')[-1]}")
    
    try:
        r = requests.get(url, timeout=15)
        soup = BeautifulSoup(r.text, 'html.parser')
        
        # Get title
        title = ""
        h1 = soup.find('h1')
        if h1:
            title = h1.get_text().strip()
        
        if not title:
            # Try page title
            title_tag = soup.find('title')
            if title_tag:
                title = title_tag.get_text().strip()
        
        # Get description from meta tag or content
        description = ""
        meta_desc = soup.find('meta', {'name': 'description'})
        if meta_desc:
            description = meta_desc.get('content', '').strip()
        
        if not description:
            # Try to find description in content
            content_divs = soup.find_all(['div', 'p'], class_=re.compile(r'(content|description|about)', re.I))
            for div in content_divs:
                text = div.get_text().strip()
                if len(text) > 50:  # Substantial content
                    description = text[:300]
                    break
        
        # Look for address/location info
        address = ""
        suburb = ""
        postcode = ""
        
        # Get all text and look for address patterns
        all_text = soup.get_text()
        lines = [line.strip() for line in all_text.split('\n') if line.strip()]
        
        for line in lines:
            # Look for lines with Australian postcodes (4 digits) and state abbreviations
            if re.search(r'\b\d{4}\b', line):
                for aus_state in ALL_STATES:
                    if aus_state in line.upper():
                        address = line
                        # Extract suburb (word before state)
                        suburb_match = re.search(r'([A-Za-z\s]+)\s+' + aus_state, line, re.I)
                        if suburb_match:
                            suburb = suburb_match.group(1).strip().rstrip(',')
                        
                        # Extract postcode
                        postcode_match = re.search(r'\b(\d{4})\b', line)
                        if postcode_match:
                            postcode = postcode_match.group(1)
                        break
                if address:
                    break
        
        # Extract coordinates from map links or scripts
        lat, lng = "", ""
        
        # Look for Google Maps links
        for a in soup.find_all('a', href=True):
            href = a.get('href')
            if 'google.com/maps' in href or 'maps.google' in href:
                lat, lng = extract_coordinates(href)
                if lat and lng:
                    break
        
        # If no coordinates from links, try to find them in page text/scripts
        if not lat:
            lat, lng = extract_coordinates(all_text)
        
        # Look for contact info
        phone = ""
        email = ""
        website = ""
        
        for a in soup.find_all('a', href=True):
            href = a.get('href')
            if href.startswith('tel:'):
                phone = href.replace('tel:', '').strip()
            elif href.startswith('mailto:'):
                email = href.replace('mailto:', '').strip()
            elif href.startswith('http') and 'marketsandfairs.com.au' not in href:
                website = href
        
        # Look for schedule/timing info
        schedule = ""
        when_patterns = [
            r'(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday).*?\d{1,2}[:\.]?\d{0,2}\s*(am|pm|AM|PM)',
            r'(Mon|Tue|Wed|Thu|Fri|Sat|Sun).*?\d{1,2}[:\.]?\d{0,2}\s*(am|pm|AM|PM)',
            r'Every\s+(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)',
            r'\d{1,2}[:\.]?\d{0,2}\s*(am|pm|AM|PM).*?(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)',
        ]
        
        for pattern in when_patterns:
            match = re.search(pattern, all_text, re.I)
            if match:
                schedule = match.group(0)
                break
        
        return {
            'external_id': f"marketsandfairs:{url.split('/')[-1].lower()}",
            'name': title,
            'description': description[:500] if description else '',
            'address': address,
            'suburb': suburb,
            'state': state,
            'postcode': postcode,
            'country': 'Australia',
            'lat': lat,
            'lng': lng,
            'schedule': schedule,
            'phone': phone,
            'email': email,
            'website': website,
            'source_url': url
        }
        
    except Exception as e:
        print(f"      Error parsing market: {e}")
        return {
            'external_id': f"marketsandfairs:{url.split('/')[-1].lower()}",
            'name': url.split('/')[-1].replace('-', ' ').title(),
            'description': '',
            'address': '',
            'suburb': '',
            'state': state,
            'postcode': '',
            'country': 'Australia',
            'lat': '',
            'lng': '',
            'schedule': '',
            'phone': '',
            'email': '',
            'website': '',
            'source_url': url
        }

def main():
    parser = argparse.ArgumentParser(description='Scrape Australian markets')
    parser.add_argument('--state', default='ALL', help='State to scrape (NSW, QLD, etc.) or ALL for all states')
    parser.add_argument('--out', default='australian_markets.csv', help='Output CSV file')
    
    args = parser.parse_args()
    
    states = ALL_STATES if args.state.upper() == 'ALL' else [args.state.upper()]
    
    print(f"Scraping markets for states: {', '.join(states)}")
    
    all_markets = []
    
    for state in states:
        print(f"\n=== Scraping {state} ===")
        
        # Get all market URLs for this state
        print(f"[1/2] Discovering market URLs for {state}...")
        urls = get_market_urls(state)
        print(f"  Found {len(urls)} total markets in {state}")
        
        # Parse each market
        print(f"[2/2] Parsing market details for {state}...")
        state_markets = []
        
        for i, url in enumerate(urls, 1):
            market = parse_market(url, state)
            state_markets.append(market)
            all_markets.append(market)
            
            if i % 10 == 0:
                print(f"    Progress: {i}/{len(urls)} markets processed")
            
            time.sleep(0.5)  # Be respectful to the server
        
        print(f"  Completed {state}: {len(state_markets)} markets scraped")
    
    # Remove duplicates based on external_id
    print(f"\nRemoving duplicates...")
    seen_ids = set()
    unique_markets = []
    for market in all_markets:
        if market['external_id'] not in seen_ids:
            seen_ids.add(market['external_id'])
            unique_markets.append(market)
    
    print(f"Kept {len(unique_markets)} unique markets (removed {len(all_markets) - len(unique_markets)} duplicates)")
    
    # Write to CSV
    print(f"\nWriting results to {args.out}")
    fieldnames = [
        'external_id', 'name', 'description', 'address', 'suburb', 'state', 
        'postcode', 'country', 'lat', 'lng', 'schedule', 'phone', 'email', 
        'website', 'source_url'
    ]
    
    with open(args.out, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(unique_markets)
    
    print(f"✅ Scraping completed! {len(unique_markets)} markets saved to {args.out}")
    
    # Show summary by state
    print(f"\nSummary by state:")
    for state in states:
        count = sum(1 for m in unique_markets if m['state'] == state)
        print(f"  {state}: {count} markets")

if __name__ == "__main__":
    main()