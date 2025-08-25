#!/usr/bin/env python3
"""
Convert the scraped Australian markets CSV data to SQL INSERT statements
that match the MarketHub database schema
"""

import csv
import uuid
import re
from datetime import datetime

def slugify(text):
    """Create a URL-friendly slug from text"""
    # Remove special characters and convert to lowercase
    slug = re.sub(r'[^a-zA-Z0-9\s-]', '', text).strip().lower()
    # Replace spaces with hyphens
    slug = re.sub(r'\s+', '-', slug)
    # Remove multiple consecutive hyphens
    slug = re.sub(r'-+', '-', slug)
    return slug.strip('-')

def escape_sql_string(text):
    """Escape single quotes and other SQL special characters"""
    if not text:
        return ""
    return text.replace("'", "''").replace('\n', ' ').replace('\r', ' ')

def parse_coordinates(lat_str, lng_str):
    """Parse coordinate strings to float or None"""
    try:
        lat = float(lat_str) if lat_str and lat_str.strip() else None
        lng = float(lng_str) if lng_str and lng_str.strip() else None
        return lat, lng
    except (ValueError, TypeError):
        return None, None

def convert_csv_to_sql(csv_file_path, output_sql_path):
    """Convert CSV to SQL INSERT statements"""
    
    # Create a single market organizer profile ID for all scraped markets
    scraped_organizer_id = str(uuid.uuid4())
    
    sql_lines = [
        "-- Import Australian Markets from scraped data",
        f"-- Generated on {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
        "",
        "-- Create market organizer profile for scraped markets",
        f"INSERT INTO profiles (id, role, name, email, phone, created_at, updated_at)",
        f"VALUES ('{scraped_organizer_id}', 'market_organizer', 'Australian Markets Scraped Data', 'scraped.markets@markethub.com.au', '+61400000000', NOW(), NOW())",
        "ON CONFLICT (id) DO NOTHING;",
        "",
        "-- Insert scraped markets data",
    ]
    
    with open(csv_file_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        
        markets_data = []
        processed_slugs = set()
        
        for i, row in enumerate(reader):
            # Generate unique market ID and slug
            market_id = str(uuid.uuid4())
            base_slug = slugify(row['name'])
            
            # Ensure slug is unique
            slug = base_slug
            counter = 1
            while slug in processed_slugs:
                slug = f"{base_slug}-{counter}"
                counter += 1
            processed_slugs.add(slug)
            
            # Parse coordinates
            lat, lng = parse_coordinates(row.get('lat'), row.get('lng'))
            
            # Extract location data
            name = escape_sql_string(row['name'])
            description = escape_sql_string(row.get('description', ''))[:500]  # Limit description
            address = escape_sql_string(row.get('address', ''))
            suburb = escape_sql_string(row.get('suburb', ''))
            city = suburb or escape_sql_string(row.get('city', ''))  # Use suburb as city if available
            state = escape_sql_string(row.get('state', ''))
            postcode = escape_sql_string(row.get('postcode', ''))
            country = escape_sql_string(row.get('country', 'Australia'))
            
            # Create the market record
            market_data = {
                'id': market_id,
                'owner_id': scraped_organizer_id,
                'name': name,
                'slug': slug,
                'description': description,
                'address': address,
                'city': city,
                'state': state,
                'postcode': postcode,
                'country': country,
                'lat': lat,
                'lng': lng,
                'status': 'live',  # Set imported markets as live
            }
            
            markets_data.append(market_data)
    
    # Generate INSERT statements
    for market in markets_data:
        lat_val = str(market['lat']) if market['lat'] is not None else 'NULL'
        lng_val = str(market['lng']) if market['lng'] is not None else 'NULL'
        
        insert_sql = f"""INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '{market['id']}',
    '{market['owner_id']}',
    '{market['name']}',
    '{market['slug']}',
    '{market['description']}',
    '{market['address']}',
    '{market['city']}',
    '{market['state']}',
    '{market['postcode']}',
    '{market['country']}',
    {lat_val},
    {lng_val},
    '{{}}'::jsonb,
    '{{}}'::jsonb,
    '{market['status']}',
    NOW(),
    NOW()
);"""
        
        sql_lines.append(insert_sql)
    
    # Write to SQL file
    with open(output_sql_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(sql_lines))
    
    print(f"✅ Converted {len(markets_data)} markets to SQL")
    print(f"📄 SQL file saved: {output_sql_path}")
    print(f"🔑 Market organizer ID: {scraped_organizer_id}")
    
    return len(markets_data)

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) != 3:
        print("Usage: python convert_csv_to_sql.py <input.csv> <output.sql>")
        sys.exit(1)
    
    csv_file = sys.argv[1]
    sql_file = sys.argv[2]
    
    print(f"Converting {csv_file} to {sql_file}")
    convert_csv_to_sql(csv_file, sql_file)