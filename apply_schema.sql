-- MarketHub Database Schema Setup
-- Run this script in your Supabase SQL Editor to create all tables and policies

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

-- Create markets table
CREATE TABLE IF NOT EXISTS markets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    owner_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    postcode TEXT,
    country TEXT DEFAULT 'Australia',
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION,
    amenities JSONB DEFAULT '{}',
    requirements JSONB DEFAULT '{}',
    status market_status DEFAULT 'draft',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create imported_markets table
CREATE TABLE IF NOT EXISTS imported_markets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    postcode TEXT,
    country TEXT DEFAULT 'Australia',
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION,
    amenities JSONB DEFAULT '{}',
    requirements JSONB DEFAULT '{}',
    is_verified BOOLEAN DEFAULT FALSE,
    claimed_by UUID REFERENCES profiles(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create market_documents table
CREATE TABLE IF NOT EXISTS market_documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    market_id UUID NOT NULL REFERENCES markets(id) ON DELETE CASCADE,
    type document_type NOT NULL,
    storage_path TEXT NOT NULL,
    extracted_text TEXT,
    number TEXT,
    expiry_date DATE,
    verification_status verification_status DEFAULT 'needs_review',
    last_checked_at TIMESTAMPTZ,
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

-- Create vendor_documents table
CREATE TABLE IF NOT EXISTS vendor_documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    vendor_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    type document_type NOT NULL,
    region TEXT,
    storage_path TEXT NOT NULL,
    extracted_text TEXT,
    number TEXT,
    expiry_date DATE,
    verification_status verification_status DEFAULT 'needs_review',
    last_checked_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create vendor_applications table
CREATE TABLE IF NOT EXISTS vendor_applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    market_id UUID NOT NULL REFERENCES markets(id) ON DELETE CASCADE,
    vendor_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    status application_status DEFAULT 'submitted',
    message TEXT,
    additional_requirements JSONB DEFAULT '{}',
    decided_at TIMESTAMPTZ,
    decided_by UUID REFERENCES profiles(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(market_id, vendor_id)
);

-- Create events table (optional for calendar)
CREATE TABLE IF NOT EXISTS events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    market_id UUID NOT NULL REFERENCES markets(id) ON DELETE CASCADE,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create emails_log table
CREATE TABLE IF NOT EXISTS emails_log (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    to_email TEXT NOT NULL,
    template TEXT NOT NULL,
    payload JSONB DEFAULT '{}',
    sent_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create feature_flags table
CREATE TABLE IF NOT EXISTS feature_flags (
    key TEXT PRIMARY KEY,
    enabled BOOLEAN DEFAULT FALSE,
    audience JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert initial feature flags (only if they don't exist)
INSERT INTO feature_flags (key, enabled) VALUES
    ('plan.vendor_management', true),
    ('plan.payments', false)
ON CONFLICT (key) DO NOTHING;

-- Create indexes for performance (skip if already exist)
CREATE INDEX IF NOT EXISTS idx_markets_owner_id ON markets(owner_id);
CREATE INDEX IF NOT EXISTS idx_markets_status ON markets(status);
CREATE INDEX IF NOT EXISTS idx_markets_location ON markets USING GIST(POINT(lng, lat));
CREATE INDEX IF NOT EXISTS idx_imported_markets_slug ON imported_markets(slug);
CREATE INDEX IF NOT EXISTS idx_imported_markets_location ON imported_markets USING GIST(POINT(lng, lat));
CREATE INDEX IF NOT EXISTS idx_market_documents_market_id ON market_documents(market_id);
CREATE INDEX IF NOT EXISTS idx_market_documents_expiry ON market_documents(expiry_date) WHERE expiry_date IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_vendor_documents_vendor_id ON vendor_documents(vendor_id);
CREATE INDEX IF NOT EXISTS idx_vendor_documents_expiry ON vendor_documents(expiry_date) WHERE expiry_date IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_vendor_applications_market_id ON vendor_applications(market_id);
CREATE INDEX IF NOT EXISTS idx_vendor_applications_vendor_id ON vendor_applications(vendor_id);
CREATE INDEX IF NOT EXISTS idx_vendor_applications_status ON vendor_applications(status);

-- Create updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_markets_updated_at BEFORE UPDATE ON markets FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_imported_markets_updated_at BEFORE UPDATE ON imported_markets FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_market_documents_updated_at BEFORE UPDATE ON market_documents FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_vendor_profiles_updated_at BEFORE UPDATE ON vendor_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_vendor_documents_updated_at BEFORE UPDATE ON vendor_documents FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_vendor_applications_updated_at BEFORE UPDATE ON vendor_applications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_feature_flags_updated_at BEFORE UPDATE ON feature_flags FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE markets ENABLE ROW LEVEL SECURITY;
ALTER TABLE imported_markets ENABLE ROW LEVEL SECURITY;
ALTER TABLE market_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendor_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendor_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendor_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE emails_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE feature_flags ENABLE ROW LEVEL SECURITY;

-- Profiles policies (skip if already exist)
DO $$ BEGIN
    CREATE POLICY "Users can view own profile" ON profiles
        FOR SELECT USING (auth.uid() = id);
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE POLICY "Users can update own profile" ON profiles
        FOR UPDATE USING (auth.uid() = id);
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE POLICY "Anyone can create profile on signup" ON profiles
        FOR INSERT WITH CHECK (auth.uid() = id);
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Note: Admin policy removed to prevent infinite recursion
-- Admins can use the service role key for admin operations

-- Markets policies
CREATE POLICY "Anyone can view live markets" ON markets
    FOR SELECT USING (status = 'live');

CREATE POLICY "Market owners can view own markets" ON markets
    FOR SELECT USING (owner_id = auth.uid());

CREATE POLICY "Market owners can create markets" ON markets
    FOR INSERT WITH CHECK (owner_id = auth.uid());

CREATE POLICY "Market owners can update own markets" ON markets
    FOR UPDATE USING (owner_id = auth.uid());

-- Note: Admin policy removed to prevent infinite recursion with profiles table

-- Imported markets policies
CREATE POLICY "Anyone can view imported markets" ON imported_markets
    FOR SELECT USING (true);

CREATE POLICY "Admins can manage imported markets" ON imported_markets
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Market documents policies
CREATE POLICY "Market owners can manage own market documents" ON market_documents
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM markets 
            WHERE markets.id = market_documents.market_id 
            AND markets.owner_id = auth.uid()
        )
    );

CREATE POLICY "Vendors can view market documents for application" ON market_documents
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM markets 
            WHERE markets.id = market_documents.market_id 
            AND markets.status = 'live'
        )
    );

-- Note: Admin policy removed to prevent infinite recursion with profiles table

-- Vendor profiles policies
CREATE POLICY "Vendors can manage own profile" ON vendor_profiles
    FOR ALL USING (vendor_id = auth.uid());

CREATE POLICY "Market owners can view vendor profiles for applications" ON vendor_profiles
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM vendor_applications va
            JOIN markets m ON m.id = va.market_id
            WHERE va.vendor_id = vendor_profiles.vendor_id
            AND m.owner_id = auth.uid()
        )
    );

-- Note: Admin policy removed to prevent infinite recursion with profiles table

-- Vendor documents policies
CREATE POLICY "Vendors can manage own documents" ON vendor_documents
    FOR ALL USING (vendor_id = auth.uid());

CREATE POLICY "Market owners can view vendor documents for applications" ON vendor_documents
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM vendor_applications va
            JOIN markets m ON m.id = va.market_id
            WHERE va.vendor_id = vendor_documents.vendor_id
            AND m.owner_id = auth.uid()
        )
    );

-- Note: Admin policy removed to prevent infinite recursion with profiles table

-- Vendor applications policies
CREATE POLICY "Vendors can view own applications" ON vendor_applications
    FOR SELECT USING (vendor_id = auth.uid());

CREATE POLICY "Vendors can create applications" ON vendor_applications
    FOR INSERT WITH CHECK (vendor_id = auth.uid());

CREATE POLICY "Vendors can update own applications" ON vendor_applications
    FOR UPDATE USING (vendor_id = auth.uid());

CREATE POLICY "Market owners can view applications to their markets" ON vendor_applications
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM markets 
            WHERE markets.id = vendor_applications.market_id 
            AND markets.owner_id = auth.uid()
        )
    );

CREATE POLICY "Market owners can update applications to their markets" ON vendor_applications
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM markets 
            WHERE markets.id = vendor_applications.market_id 
            AND markets.owner_id = auth.uid()
        )
    );

-- Note: Admin policy removed to prevent infinite recursion with profiles table

-- Events policies
CREATE POLICY "Market owners can manage own market events" ON events
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM markets 
            WHERE markets.id = events.market_id 
            AND markets.owner_id = auth.uid()
        )
    );

CREATE POLICY "Anyone can view events for live markets" ON events
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM markets 
            WHERE markets.id = events.market_id 
            AND markets.status = 'live'
        )
    );

-- Note: Admin policy removed to prevent infinite recursion with profiles table

-- Emails log policies (admin only - using service role in app code)

-- Feature flags policies
CREATE POLICY "Anyone can read feature flags" ON feature_flags
    FOR SELECT TO authenticated;

-- Note: Admin policy removed to prevent infinite recursion with profiles table