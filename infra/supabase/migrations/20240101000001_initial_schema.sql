-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";

-- Create custom types
CREATE TYPE user_role AS ENUM ('market_organizer', 'vendor', 'admin');
CREATE TYPE market_status AS ENUM ('draft', 'live', 'paused');
CREATE TYPE document_type AS ENUM ('license', 'insurance', 'menu_pdf', 'food_licence', 'public_liability', 'other');
CREATE TYPE verification_status AS ENUM ('valid', 'expiring_soon', 'expired', 'needs_review');
CREATE TYPE application_status AS ENUM ('submitted', 'accepted', 'refused', 'not_now');
CREATE TYPE vendor_category AS ENUM ('farmer', 'gourmet_food', 'ready_to_eat', 'artisan', 'specialist', 'charity');
CREATE TYPE site_size AS ENUM ('3x3', '6x3', '9x3');

-- Create profiles table (extends auth.users)
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    role user_role NOT NULL DEFAULT 'vendor',
    name TEXT,
    email TEXT,
    phone TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create markets table
CREATE TABLE markets (
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

-- Create market_documents table
CREATE TABLE market_documents (
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
CREATE TABLE vendor_profiles (
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
CREATE TABLE vendor_documents (
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
CREATE TABLE vendor_applications (
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
CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    market_id UUID NOT NULL REFERENCES markets(id) ON DELETE CASCADE,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create emails_log table
CREATE TABLE emails_log (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    to_email TEXT NOT NULL,
    template TEXT NOT NULL,
    payload JSONB DEFAULT '{}',
    sent_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create feature_flags table
CREATE TABLE feature_flags (
    key TEXT PRIMARY KEY,
    enabled BOOLEAN DEFAULT FALSE,
    audience JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert initial feature flags
INSERT INTO feature_flags (key, enabled) VALUES
    ('plan.vendor_management', true),
    ('plan.payments', false);

-- Create indexes for performance
CREATE INDEX idx_markets_owner_id ON markets(owner_id);
CREATE INDEX idx_markets_status ON markets(status);
CREATE INDEX idx_markets_location ON markets USING GIST(POINT(lng, lat));
CREATE INDEX idx_market_documents_market_id ON market_documents(market_id);
CREATE INDEX idx_market_documents_expiry ON market_documents(expiry_date) WHERE expiry_date IS NOT NULL;
CREATE INDEX idx_vendor_documents_vendor_id ON vendor_documents(vendor_id);
CREATE INDEX idx_vendor_documents_expiry ON vendor_documents(expiry_date) WHERE expiry_date IS NOT NULL;
CREATE INDEX idx_vendor_applications_market_id ON vendor_applications(market_id);
CREATE INDEX idx_vendor_applications_vendor_id ON vendor_applications(vendor_id);
CREATE INDEX idx_vendor_applications_status ON vendor_applications(status);

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
CREATE TRIGGER update_market_documents_updated_at BEFORE UPDATE ON market_documents FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_vendor_profiles_updated_at BEFORE UPDATE ON vendor_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_vendor_documents_updated_at BEFORE UPDATE ON vendor_documents FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_vendor_applications_updated_at BEFORE UPDATE ON vendor_applications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_feature_flags_updated_at BEFORE UPDATE ON feature_flags FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();