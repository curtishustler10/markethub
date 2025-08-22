-- Import vendor data from CSV files into MarketHub database
-- This script imports data from the scraped vendor CSV files

-- Create a temporary table to hold CSV data
CREATE TEMP TABLE temp_vendor_data (
    place_id TEXT,
    name TEXT,
    app_category TEXT,
    address TEXT,
    suburb TEXT,
    state TEXT,
    postcode TEXT,
    city TEXT,
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION,
    phone TEXT,
    email TEXT,
    website TEXT,
    instagram_url TEXT,
    opening_hours_json TEXT,
    min_order INTEGER,
    lead_time_days INTEGER,
    delivery_radius_km INTEGER,
    dietary_tags TEXT,
    order_notes TEXT,
    activity_score INTEGER,
    verified BOOLEAN,
    is_approved BOOLEAN
);

-- Insert data from all CSV files (you'll need to replace these with actual CSV data)
-- For now, let's create the structure and you can populate manually or via COPY commands

-- Function to map app_category to vendor_category
CREATE OR REPLACE FUNCTION map_vendor_category(app_cat TEXT) 
RETURNS vendor_category AS $$
BEGIN
    CASE UPPER(app_cat)
        WHEN 'BUTCHER' THEN RETURN 'gourmet_food'::vendor_category;
        WHEN 'FARM' THEN RETURN 'farmer'::vendor_category;
        WHEN 'BAKERY' THEN RETURN 'gourmet_food'::vendor_category;
        WHEN 'FLORIST' THEN RETURN 'artisan'::vendor_category;
        ELSE RETURN 'specialist'::vendor_category;
    END CASE;
END;
$$ LANGUAGE plpgsql;

-- Create profiles and vendor_profiles from temp data
-- First, let's create some sample data for testing
INSERT INTO temp_vendor_data (
    place_id, name, app_category, address, suburb, state, postcode, city, 
    lat, lng, phone, email, website, instagram_url, activity_score, verified, is_approved
) VALUES 
-- Sample from butchers_brisbane.csv
('ChIJR3UOgfVDbAERxi92ViOiKNc', 'Super Butcher Browns Plains', 'BUTCHER', 
 '18 Eastern Rd, Browns Plains QLD 4118, Australia', 'Browns Plains', 'QLD', '4118', 'Brisbane',
 -27.6640734, 153.0446758, '0407 194 956', NULL, 'http://www.superbutcher.com.au/', NULL, 6, false, false),

-- Sample from farms_greengrocers_brisbane.csv  
('ChIJteM4zcpBkWsRriDLxFEU6oI', 'Farmcraft Beenleigh', 'FARM',
 '101 Logan River Rd, Beenleigh QLD 4207, Australia', 'Beenleigh', 'QLD', '4207', 'Brisbane',
 -27.7128735, 153.1821041, '(07) 3287 2796', NULL, 'https://www.farmcraft.com.au/', NULL, 6, false, false),

-- Sample from florists_brisbane.csv
('ChIJc6GdLgNakWsR5jOaRVDR_2I', 'Flowers by Jane', 'FLORIST',
 '200 Adelaide St, Brisbane City QLD 4000, Australia', 'Brisbane City', 'QLD', '4000', 'Brisbane',
 -27.4672692, 153.0262777, '(07) 3229 7644', NULL, 'https://www.flowersbyjane.com.au/', NULL, 6, false, false),

-- Sample from vendors_au_qld_brizzy_goldcoast.csv
('ChIJNfJgQF1bkWsRiYOgbdLUTgE', 'Montjoie Patisserie', 'BAKERY',
 '100 Melbourne St, South Brisbane QLD 4101, Australia', 'South Brisbane', 'QLD', '4101', 'Brisbane',
 -27.4757441, 153.0162143, '0421 643 310', NULL, 'http://montjoiepatisserie.com/', NULL, 6, false, false);

-- Now create the profiles and vendor_profiles
DO $$
DECLARE
    vendor_record RECORD;
    new_user_id UUID;
    vendor_email TEXT;
BEGIN
    FOR vendor_record IN SELECT * FROM temp_vendor_data LOOP
        -- Generate a UUID for the vendor
        new_user_id := uuid_generate_v4();
        
        -- Create a placeholder email from business name
        vendor_email := LOWER(REPLACE(REPLACE(vendor_record.name, ' ', '.'), '''', '')) || '@imported-vendor.markethub.com';
        
        -- Insert into profiles table
        INSERT INTO profiles (id, role, name, email, phone, created_at, updated_at)
        VALUES (
            new_user_id,
            'vendor',
            vendor_record.name,
            vendor_email,
            vendor_record.phone,
            NOW(),
            NOW()
        );
        
        -- Insert into vendor_profiles table
        INSERT INTO vendor_profiles (
            vendor_id,
            business_name,
            phone,
            address,
            suburb,
            postcode,
            region,
            category,
            website,
            instagram,
            products_summary,
            created_at,
            updated_at
        ) VALUES (
            new_user_id,
            vendor_record.name,
            vendor_record.phone,
            vendor_record.address,
            vendor_record.suburb,
            vendor_record.postcode,
            vendor_record.state,
            map_vendor_category(vendor_record.app_category),
            vendor_record.website,
            vendor_record.instagram_url,
            'Imported from ' || vendor_record.app_category || ' directory. Activity score: ' || COALESCE(vendor_record.activity_score::TEXT, 'N/A'),
            NOW(),
            NOW()
        );
        
        RAISE NOTICE 'Imported vendor: % (%) - %', vendor_record.name, vendor_record.app_category, map_vendor_category(vendor_record.app_category);
    END LOOP;
END $$;

-- Clean up
DROP FUNCTION IF EXISTS map_vendor_category(TEXT);
DROP TABLE temp_vendor_data;

-- Show import results
SELECT 
    vp.category,
    COUNT(*) as count,
    STRING_AGG(vp.business_name, ', ') as sample_businesses
FROM vendor_profiles vp
JOIN profiles p ON p.id = vp.vendor_id
WHERE p.email LIKE '%@imported-vendor.markethub.com'
GROUP BY vp.category
ORDER BY count DESC;

-- Show total imported
SELECT COUNT(*) as total_imported_vendors
FROM profiles 
WHERE email LIKE '%@imported-vendor.markethub.com';