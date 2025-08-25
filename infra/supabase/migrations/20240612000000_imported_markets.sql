-- Create imported_markets table
CREATE TABLE imported_markets (
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
    amenities JSONB DEFAULT '{}'::jsonb,
    requirements JSONB DEFAULT '{}'::jsonb,
    is_verified BOOLEAN DEFAULT FALSE,
    claimed_by UUID REFERENCES profiles(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER update_imported_markets_updated_at
BEFORE UPDATE ON imported_markets
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

ALTER TABLE imported_markets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view imported markets" ON imported_markets
    FOR SELECT USING (true);

CREATE POLICY "Admins can manage imported markets" ON imported_markets
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );
