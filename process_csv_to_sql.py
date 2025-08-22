#!/usr/bin/env python3
"""
Process CSV vendor files and generate SQL import script for MarketHub database
"""

import csv
import os
import uuid
from pathlib import Path

# Mapping from CSV categories to MarketHub vendor categories
CATEGORY_MAPPING = {
    'BUTCHER': 'gourmet_food',
    'FARM': 'farmer', 
    'BAKERY': 'gourmet_food',
    'FLORIST': 'artisan',
    'GREENGROCER': 'farmer'
}

def clean_text(text):
    """Clean text for SQL insertion"""
    if not text:
        return 'NULL'
    # Escape single quotes and return quoted string
    return "'" + str(text).replace("'", "''") + "'"

def clean_email(business_name):
    """Generate a safe email from business name"""
    if not business_name:
        return 'imported-vendor@markethub.com'
    
    # Clean business name for email
    clean_name = business_name.lower()
    clean_name = ''.join(c if c.isalnum() else '.' for c in clean_name)
    clean_name = clean_name.strip('.')
    # Remove consecutive dots
    while '..' in clean_name:
        clean_name = clean_name.replace('..', '.')
    
    return f"{clean_name}@imported-vendor.markethub.com"

def process_csv_files():
    """Process all CSV files and generate SQL"""
    
    csv_dir = Path("/Users/gwendolyn/Downloads/local food marketplace scripts scraping")
    csv_files = list(csv_dir.glob("*.csv"))
    
    print(f"Found {len(csv_files)} CSV files")
    
    sql_statements = []
    sql_statements.append("-- Import vendor data from CSV files into MarketHub database")
    sql_statements.append("-- Generated automatically from scraped vendor data")
    sql_statements.append("")
    
    total_vendors = 0
    category_counts = {}
    
    for csv_file in csv_files:
        print(f"Processing {csv_file.name}...")
        
        try:
            with open(csv_file, 'r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                
                file_vendors = 0
                for row in reader:
                    if not row.get('name'):
                        continue
                        
                    new_user_id = str(uuid.uuid4())
                    business_name = row.get('name', '')
                    app_category = row.get('app_category', '').upper()
                    vendor_category = CATEGORY_MAPPING.get(app_category, 'specialist')
                    
                    # Track categories
                    category_counts[vendor_category] = category_counts.get(vendor_category, 0) + 1
                    
                    vendor_email = clean_email(business_name)
                    
                    # Generate profile insert
                    profile_sql = f"""
INSERT INTO profiles (id, role, name, email, phone, created_at, updated_at)
VALUES (
    '{new_user_id}',
    'vendor',
    {clean_text(business_name)},
    '{vendor_email}',
    {clean_text(row.get('phone'))},
    NOW(),
    NOW()
);"""
                    
                    # Generate vendor_profile insert
                    instagram = row.get('instagram_url', '')
                    if instagram and not instagram.startswith('http'):
                        instagram = f"https://instagram.com/{instagram}"
                    
                    products_summary = f"Imported from {app_category} directory"
                    if row.get('activity_score'):
                        products_summary += f". Activity score: {row.get('activity_score')}"
                    
                    vendor_profile_sql = f"""
INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '{new_user_id}',
    {clean_text(business_name)},
    {clean_text(row.get('phone'))},
    {clean_text(row.get('address'))},
    {clean_text(row.get('suburb'))},
    {clean_text(row.get('postcode'))},
    {clean_text(row.get('state', 'QLD'))},
    '{vendor_category}',
    {clean_text(row.get('website'))},
    {clean_text(instagram)},
    {clean_text(products_summary)},
    NOW(),
    NOW()
);"""
                    
                    sql_statements.append(profile_sql)
                    sql_statements.append(vendor_profile_sql)
                    
                    file_vendors += 1
                    total_vendors += 1
                
                print(f"  - Processed {file_vendors} vendors from {csv_file.name}")
                
        except Exception as e:
            print(f"Error processing {csv_file.name}: {e}")
            continue
    
    # Add summary at the end
    sql_statements.append("\n-- Import Summary")
    sql_statements.append(f"-- Total vendors imported: {total_vendors}")
    for category, count in category_counts.items():
        sql_statements.append(f"-- {category}: {count} vendors")
    
    # Add verification query
    sql_statements.append("""
-- Verify import
SELECT 
    vp.category,
    COUNT(*) as count
FROM vendor_profiles vp
JOIN profiles p ON p.id = vp.vendor_id
WHERE p.email LIKE '%@imported-vendor.markethub.com'
GROUP BY vp.category
ORDER BY count DESC;""")
    
    return '\n'.join(sql_statements), total_vendors, category_counts

def main():
    """Main function"""
    sql_content, total_vendors, category_counts = process_csv_files()
    
    # Write to file
    output_file = Path("/Users/gwendolyn/Downloads/markethub/import_all_vendors.sql")
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(sql_content)
    
    print(f"\nGenerated SQL import script: {output_file}")
    print(f"Total vendors to import: {total_vendors}")
    print("Category breakdown:")
    for category, count in category_counts.items():
        print(f"  - {category}: {count}")

if __name__ == "__main__":
    main()