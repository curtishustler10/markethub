-- Complete MarketHub Database Setup and Vendor Import (FIXED)
-- This version handles imported vendors that don't have auth.users accounts

-- ==============================================
-- PART 1: DATABASE SCHEMA SETUP
-- ==============================================

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";

-- Create custom types (skip if already exists)
DO $$ BEGIN
    CREATE TYPE user_role AS ENUM ('market_organizer', 'vendor', 'admin');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE market_status AS ENUM ('draft', 'live', 'paused');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE document_type AS ENUM ('license', 'insurance', 'menu_pdf', 'food_licence', 'public_liability', 'other');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE verification_status AS ENUM ('valid', 'expiring_soon', 'expired', 'needs_review');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE application_status AS ENUM ('submitted', 'accepted', 'refused', 'not_now');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE vendor_category AS ENUM ('farmer', 'gourmet_food', 'ready_to_eat', 'artisan', 'specialist', 'charity');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE site_size AS ENUM ('3x3', '6x3', '9x3');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Create imported_vendors table (for vendors without auth accounts)
CREATE TABLE IF NOT EXISTS imported_vendors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    source TEXT DEFAULT 'csv_import',
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create vendor_profiles table (modified to work with imported vendors)
CREATE TABLE IF NOT EXISTS vendor_profiles (
    vendor_id UUID PRIMARY KEY,
    business_name TEXT,
    phone TEXT,
    address TEXT,
    suburb TEXT,
    postcode TEXT,
    region TEXT,
    category vendor_category,
    vehicle_on_site BOOLEAN DEFAULT FALSE,
    power_required BOOLEAN DEFAULT FALSE,
    site_size site_size DEFAULT '3x3',
    website TEXT,
    facebook TEXT,
    instagram TEXT,
    products_summary TEXT,
    preferred_start_date DATE,
    heard_about TEXT,
    consent_email BOOLEAN DEFAULT FALSE,
    consent_sms BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Foreign key that can reference either profiles OR imported_vendors
    CONSTRAINT fk_vendor_profile_id 
        FOREIGN KEY (vendor_id) 
        REFERENCES imported_vendors(id) 
        ON DELETE CASCADE
);

-- Create profiles table (for authenticated users only)
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    role user_role NOT NULL DEFAULT 'vendor',
    name TEXT,
    email TEXT,
    phone TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on tables
ALTER TABLE imported_vendors ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendor_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for imported_vendors (admin only for now)
CREATE POLICY "Service role can manage imported vendors" ON imported_vendors
    FOR ALL USING (auth.role() = 'service_role');

-- Create policies for vendor_profiles
CREATE POLICY "Anyone can view vendor profiles" ON vendor_profiles
    FOR SELECT TO authenticated, anon;

CREATE POLICY "Service role can manage vendor profiles" ON vendor_profiles
    FOR ALL USING (auth.role() = 'service_role');

-- Create policies for profiles (authenticated users)
DO $$ BEGIN
    CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE POLICY "Anyone can create profile on signup" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
EXCEPTION WHEN duplicate_object THEN null; END $$;

-- Create updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

DO $$ BEGIN
    CREATE TRIGGER update_imported_vendors_updated_at BEFORE UPDATE ON imported_vendors FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE TRIGGER update_vendor_profiles_updated_at BEFORE UPDATE ON vendor_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
EXCEPTION WHEN duplicate_object THEN null; END $$;

-- ==============================================
-- PART 2: IMPORT SAMPLE VENDOR DATA
-- ==============================================

-- Import sample vendors to test the setup
INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    '7279650d-c00b-4666-b9ac-fd223bae5364',
    'Super Butcher Browns Plains',
    'super.butcher.browns.plains@imported-vendor.markethub.com',
    '0407 194 956',
    'csv_import_butchers',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    '7279650d-c00b-4666-b9ac-fd223bae5364',
    'Super Butcher Browns Plains',
    '0407 194 956',
    '18 Eastern Rd, Browns Plains QLD 4118, Australia',
    'Browns Plains',
    '4118',
    'QLD',
    'gourmet_food',
    'http://www.superbutcher.com.au/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'd1bccbbc-72ed-4ef6-a73f-ed131919a8a2',
    'Mega Meats',
    'mega.meats@imported-vendor.markethub.com',
    '(07) 3800 6342',
    'csv_import_butchers',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'd1bccbbc-72ed-4ef6-a73f-ed131919a8a2',
    'Mega Meats',
    '(07) 3800 6342',
    '5-7 Enterprise Way, Browns Plains QLD 4118, Australia',
    'Browns Plains',
    '4118',
    'QLD',
    'gourmet_food',
    'https://www.facebook.com/Mega-Meats-Browns-Plains-1412615272352494/',
    NULL,
    'Imported from BUTCHER directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

-- Add a farmer example
INSERT INTO imported_vendors (id, name, email, phone, source, created_at, updated_at)
VALUES (
    'e1f2a3b4-c5d6-7e8f-9a0b-1c2d3e4f5a6b',
    'Farmcraft Beenleigh',
    'farmcraft.beenleigh@imported-vendor.markethub.com',
    '(07) 3287 2796',
    'csv_import_farms',
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

INSERT INTO vendor_profiles (
    vendor_id, business_name, phone, address, suburb, postcode, region,
    category, website, instagram, products_summary, created_at, updated_at
) VALUES (
    'e1f2a3b4-c5d6-7e8f-9a0b-1c2d3e4f5a6b',
    'Farmcraft Beenleigh',
    '(07) 3287 2796',
    '101 Logan River Rd, Beenleigh QLD 4207, Australia',
    'Beenleigh',
    '4207',
    'QLD',
    'farmer',
    'https://www.farmcraft.com.au/',
    NULL,
    'Imported from FARM directory. Activity score: 6',
    NOW(),
    NOW()
) ON CONFLICT (vendor_id) DO NOTHING;

-- ==============================================
-- PART 3: VERIFICATION QUERIES
-- ==============================================

-- Check setup results
SELECT 
    'Setup Complete' as status,
    (SELECT COUNT(*) FROM imported_vendors) as imported_vendors_count,
    (SELECT COUNT(*) FROM vendor_profiles) as vendor_profiles_count;

-- Show imported vendors by category
SELECT 
    vp.category,
    COUNT(*) as count,
    STRING_AGG(iv.name, ', ') as sample_names
FROM imported_vendors iv
JOIN vendor_profiles vp ON vp.vendor_id = iv.id
GROUP BY vp.category
ORDER BY count DESC;

-- Show all sample vendors
SELECT 
    iv.name,
    iv.email,
    vp.category,
    vp.suburb,
    vp.website
FROM imported_vendors iv
JOIN vendor_profiles vp ON vp.vendor_id = iv.id
ORDER BY vp.category, iv.name;