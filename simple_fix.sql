-- Simple fix for infinite recursion - just drop the problematic policies
DROP POLICY IF EXISTS "Admins can view all profiles" ON profiles;
DROP POLICY IF EXISTS "Admins can manage all markets" ON markets;
DROP POLICY IF EXISTS "Admins can manage all market documents" ON market_documents;
DROP POLICY IF EXISTS "Admins can view all vendor profiles" ON vendor_profiles;
DROP POLICY IF EXISTS "Admins can manage all vendor documents" ON vendor_documents;
DROP POLICY IF EXISTS "Admins can manage all applications" ON vendor_applications;
DROP POLICY IF EXISTS "Admins can manage all events" ON events;
DROP POLICY IF EXISTS "Only admins can access emails log" ON emails_log;
DROP POLICY IF EXISTS "Only admins can manage feature flags" ON feature_flags;

-- Create the profiles table if it doesn't exist
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    role TEXT NOT NULL DEFAULT 'vendor',
    name TEXT,
    email TEXT,
    phone TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add basic policies for profiles (only if they don't exist)
DO $$ BEGIN
    CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE POLICY "Anyone can create profile on signup" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
EXCEPTION WHEN duplicate_object THEN null; END $$;