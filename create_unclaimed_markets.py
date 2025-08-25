#!/usr/bin/env python3
"""
Convert the scraped Australian markets CSV to SQL INSERT statements
for unclaimed markets (to be claimed by organizers later)
"""

import csv
import uuid
import re
from datetime import datetime

def slugify(text):
    """Create a URL-friendly slug from text"""
    slug = re.sub(r'[^a-zA-Z0-9\s-]', '', text).strip().lower()
    slug = re.sub(r'\s+', '-', slug)
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

def convert_csv_to_unclaimed_markets_sql(csv_file_path, output_sql_path):
    """Convert CSV to SQL INSERT statements for unclaimed markets"""
    
    sql_lines = [
        "-- Import Australian Markets as unclaimed markets",
        f"-- Generated on {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
        "-- These markets have no owner and can be claimed by organizers",
        "",
        "-- Note: You must have a system user to own unclaimed markets",
        "-- Create a system user first through your application or use an existing admin user ID",
        "-- Replace 'YOUR_SYSTEM_USER_ID' with an actual UUID from auth.users",
        "",
        "-- Example system user creation (run this first if needed):",
        "-- INSERT INTO auth.users (id, email, created_at, updated_at)",  
        "-- VALUES ('00000000-0000-0000-0000-000000000000', 'system@markethub.com.au', NOW(), NOW());",
        "-- INSERT INTO profiles (id, role, name, email, created_at, updated_at)",
        "-- VALUES ('00000000-0000-0000-0000-000000000000', 'admin', 'System User', 'system@markethub.com.au', NOW(), NOW());",
        "",
        "-- Insert unclaimed markets (replace YOUR_SYSTEM_USER_ID with actual user ID)",
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
            description = escape_sql_string(row.get('description', ''))[:500]
            address = escape_sql_string(row.get('address', ''))
            suburb = escape_sql_string(row.get('suburb', ''))
            city = suburb or escape_sql_string(row.get('city', ''))
            state = escape_sql_string(row.get('state', ''))
            postcode = escape_sql_string(row.get('postcode', ''))
            country = escape_sql_string(row.get('country', 'Australia'))
            
            # Create the market record
            market_data = {
                'id': market_id,
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
                'status': 'draft',  # Set as draft since they're unclaimed
            }
            
            markets_data.append(market_data)
    
    # Generate INSERT statements using placeholder for system user
    for market in markets_data:
        lat_val = str(market['lat']) if market['lat'] is not None else 'NULL'
        lng_val = str(market['lng']) if market['lng'] is not None else 'NULL'
        
        insert_sql = f"""INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '{market['id']}',
    'YOUR_SYSTEM_USER_ID',  -- Replace with actual system user UUID
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
    
    # Add instructions at the end
    sql_lines.extend([
        "",
        f"-- Total: {len(markets_data)} unclaimed markets ready to import",
        "-- Remember to replace 'YOUR_SYSTEM_USER_ID' with an actual user UUID before running!",
        "",
        "-- After import, organizers can claim markets through your application",
        "-- You may want to add a 'claimed' boolean field or transfer ownership mechanism"
    ])
    
    # Write to SQL file
    with open(output_sql_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(sql_lines))
    
    print(f"✅ Created SQL for {len(markets_data)} unclaimed markets")
    print(f"📄 SQL file saved: {output_sql_path}")
    print(f"⚠️  IMPORTANT: Replace 'YOUR_SYSTEM_USER_ID' with an actual user UUID before running!")
    print(f"💡 These markets will be in 'draft' status until claimed by organizers")
    
    return len(markets_data)

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) != 3:
        print("Usage: python create_unclaimed_markets.py <input.csv> <output.sql>")
        sys.exit(1)
    
    csv_file = sys.argv[1]
    sql_file = sys.argv[2]
    
    print(f"Converting {csv_file} to unclaimed markets SQL: {sql_file}")
    convert_csv_to_unclaimed_markets_sql(csv_file, sql_file)