-- Upgrade events table for comprehensive calendar functionality
-- Drop the existing basic events table and recreate with full features

DROP TABLE IF EXISTS events CASCADE;

-- Create comprehensive events table
CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    market_id UUID NOT NULL REFERENCES markets(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    start_at TIMESTAMPTZ NOT NULL,
    end_at TIMESTAMPTZ NOT NULL,
    all_day BOOLEAN DEFAULT FALSE,
    location TEXT,
    tags TEXT[],
    visibility TEXT DEFAULT 'public' CHECK (visibility IN ('public', 'private')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_events_market_id ON events(market_id);
CREATE INDEX idx_events_start_at ON events(start_at);
CREATE INDEX idx_events_end_at ON events(end_at);
CREATE INDEX idx_events_visibility ON events(visibility);

-- Add updated_at trigger
CREATE TRIGGER update_events_updated_at 
    BEFORE UPDATE ON events 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample events for existing markets
INSERT INTO events (market_id, title, description, start_at, end_at, all_day, location, tags, visibility)
SELECT 
    m.id,
    m.name || ' Weekly Market',
    'Regular weekly market day with local vendors and fresh produce',
    -- Every Saturday 8:00 AM Australia/Brisbane (converting to UTC)
    (DATE_TRUNC('week', CURRENT_DATE) + INTERVAL '6 days' + INTERVAL '8 hours' - INTERVAL '10 hours')::TIMESTAMPTZ,
    (DATE_TRUNC('week', CURRENT_DATE) + INTERVAL '6 days' + INTERVAL '14 hours' - INTERVAL '10 hours')::TIMESTAMPTZ,
    FALSE,
    m.address,
    ARRAY['market', 'weekly', 'local'],
    'public'
FROM markets m 
WHERE m.status = 'live'
LIMIT 5;

-- Add recurring events for next 8 weeks
INSERT INTO events (market_id, title, description, start_at, end_at, all_day, location, tags, visibility)
SELECT 
    m.id,
    m.name || ' Weekly Market',
    'Regular weekly market day with local vendors and fresh produce',
    -- Generate events for next 8 Saturdays
    (DATE_TRUNC('week', CURRENT_DATE) + INTERVAL '6 days' + INTERVAL '8 hours' - INTERVAL '10 hours' + (weeks.week * INTERVAL '1 week'))::TIMESTAMPTZ,
    (DATE_TRUNC('week', CURRENT_DATE) + INTERVAL '6 days' + INTERVAL '14 hours' - INTERVAL '10 hours' + (weeks.week * INTERVAL '1 week'))::TIMESTAMPTZ,
    FALSE,
    m.address,
    ARRAY['market', 'weekly', 'local'],
    'public'
FROM markets m 
CROSS JOIN (SELECT generate_series(1, 8) as week) weeks
WHERE m.status = 'live';

-- Add some special events
INSERT INTO events (market_id, title, description, start_at, end_at, all_day, location, tags, visibility)
SELECT 
    m.id,
    'Summer Festival Market',
    'Special extended summer market with live music, food trucks, and extra vendors',
    (CURRENT_DATE + INTERVAL '2 weeks' + INTERVAL '9 hours' - INTERVAL '10 hours')::TIMESTAMPTZ,
    (CURRENT_DATE + INTERVAL '2 weeks' + INTERVAL '16 hours' - INTERVAL '10 hours')::TIMESTAMPTZ,
    FALSE,
    m.address,
    ARRAY['festival', 'special', 'summer', 'music'],
    'public'
FROM markets m 
WHERE m.status = 'live' AND m.city = 'Brisbane'
LIMIT 2;