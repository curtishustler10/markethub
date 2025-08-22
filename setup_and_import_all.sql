-- Complete MarketHub Database Setup and Vendor Import
-- Run this script in your Supabase SQL Editor to:
-- 1. Create all database tables and policies
-- 2. Import 200 vendors from CSV data

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

-- Create profiles table (extends auth.users)
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    role user_role NOT NULL DEFAULT 'vendor',
    name TEXT,
    email TEXT,
    phone TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create vendor_profiles table
CREATE TABLE IF NOT EXISTS vendor_profiles (
    vendor_id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
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
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendor_profiles ENABLE ROW LEVEL SECURITY;

-- Create basic policies for profiles
DO $$ BEGIN
    CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE POLICY "Anyone can create profile on signup" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
EXCEPTION WHEN duplicate_object THEN null; END $$;

-- Create policies for vendor_profiles
DO $$ BEGIN
    CREATE POLICY "Vendors can manage own profile" ON vendor_profiles FOR ALL USING (vendor_id = auth.uid());
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
    CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE TRIGGER update_vendor_profiles_updated_at BEFORE UPDATE ON vendor_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
EXCEPTION WHEN duplicate_object THEN null; END $$;

-- ==============================================
-- PART 2: IMPORT VENDOR DATA (First 10 as sample)
-- ==============================================

-- Create a few sample vendors to test the setup
-- (For full import, run import_all_vendors.sql after this completes successfully)

INSERT INTO profiles (id, role, name, email, phone, created_at, updated_at)
VALUES (
    '7279650d-c00b-4666-b9ac-fd223bae5364',
    'vendor',
    'Super Butcher Browns Plains',
    'super.butcher.browns.plains@imported-vendor.markethub.com',
    '0407 194 956',
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

INSERT INTO profiles (id, role, name, email, phone, created_at, updated_at)
VALUES (
    'd1bccbbc-72ed-4ef6-a73f-ed131919a8a2',
    'vendor',
    'Mega Meats',
    'mega.meats@imported-vendor.markethub.com',
    '(07) 3800 6342',
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

-- Verification: Check if setup worked
SELECT 
    'Schema Setup Complete' as status,
    COUNT(*) as sample_vendors_imported
FROM vendor_profiles vp
JOIN profiles p ON p.id = vp.vendor_id
WHERE p.email LIKE '%@imported-vendor.markethub.com';

-- Show what was created
SELECT 
    p.name,
    vp.category,
    vp.suburb
FROM profiles p
JOIN vendor_profiles vp ON vp.vendor_id = p.id
WHERE p.email LIKE '%@imported-vendor.markethub.com'
ORDER BY p.name;