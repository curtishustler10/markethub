-- Create imported_markets table to match imported_vendors structure
CREATE TABLE imported_markets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT,
    email TEXT,
    phone TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    postcode TEXT,
    source TEXT,
    is_verified BOOLEAN DEFAULT FALSE,
    verified_at TIMESTAMPTZ,
    verified_by UUID REFERENCES profiles(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on imported_markets table
ALTER TABLE imported_markets ENABLE ROW LEVEL SECURITY;

-- Create policy for service role access (matching imported_vendors)
CREATE POLICY "Service role can manage imported markets" ON imported_markets
    FOR ALL USING (auth.role() = 'service_role');

-- Create updated_at trigger
CREATE TRIGGER update_imported_markets_updated_at 
    BEFORE UPDATE ON imported_markets 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for performance
CREATE INDEX idx_imported_markets_name ON imported_markets(name);
CREATE INDEX idx_imported_markets_is_verified ON imported_markets(is_verified);
