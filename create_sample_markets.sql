-- Create sample markets for MarketHub
-- These are fictitious markets in Brisbane/Gold Coast area to work with imported vendor data

-- First create some market organizer profiles
INSERT INTO profiles (id, role, name, email, phone, created_at, updated_at)
VALUES 
    ('market-org-001', 'market_organizer', 'Brisbane Markets Collective', 'brisbane.markets@example.com', '(07) 3000 1001', NOW(), NOW()),
    ('market-org-002', 'market_organizer', 'Gold Coast Events Co', 'goldcoast.events@example.com', '(07) 5000 2002', NOW(), NOW()),
    ('market-org-003', 'market_organizer', 'Southside Market Group', 'southside.markets@example.com', '(07) 3000 3003', NOW(), NOW()),
    ('market-org-004', 'market_organizer', 'Northside Community Markets', 'northside.events@example.com', '(07) 3000 4004', NOW(), NOW())
ON CONFLICT (id) DO NOTHING;

-- Create sample markets
INSERT INTO markets (id, owner_id, name, slug, description, address, city, state, postcode, country, lat, lng, amenities, requirements, status, created_at, updated_at)
VALUES 
    (
        'market-001-southbank', 
        'market-org-001', 
        'South Bank Weekend Markets', 
        'south-bank-weekend-markets',
        'Brisbane''s premier weekend market featuring local produce, artisan foods, and handmade crafts. Located in the heart of South Bank with river views.',
        'Stanley Street Plaza, South Bank QLD 4101, Australia',
        'Brisbane',
        'QLD',
        '4101',
        'Australia',
        -27.4750,
        153.0200,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": false, "loading_dock": true}',
        '{"food_licence": true, "public_liability": true, "products_list": true}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'market-002-westend', 
        'market-org-001', 
        'West End Farmers Market', 
        'west-end-farmers-market',
        'A vibrant community market focusing on fresh local produce, organic foods, and sustainable products. Every Saturday morning.',
        'Davies Park, West End QLD 4101, Australia',
        'Brisbane',
        'QLD',
        '4101',
        'Australia',
        -27.4800,
        153.0100,
        '{"parking": true, "toilets": true, "power": false, "water": true, "wifi": false, "loading_dock": false}',
        '{"food_licence": true, "public_liability": true, "organic_certification": false}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'market-003-goldcoast', 
        'market-org-002', 
        'Surfers Paradise Beachfront Market', 
        'surfers-paradise-beachfront-market',
        'Iconic beachfront market with stunning ocean views. Features food trucks, local crafts, and beach-themed products. Open Friday to Sunday.',
        'Cavill Avenue, Surfers Paradise QLD 4217, Australia',
        'Gold Coast',
        'QLD',
        '4217',
        'Australia',
        -28.0023,
        153.4145,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": true, "loading_dock": true}',
        '{"food_licence": true, "public_liability": true, "tourism_permit": true}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'market-004-browns-plains', 
        'market-org-003', 
        'Browns Plains Community Market', 
        'browns-plains-community-market',
        'Family-friendly community market serving the growing Browns Plains area. Focus on fresh produce, family meals, and local businesses.',
        'Grand Plaza Shopping Centre, Browns Plains QLD 4118, Australia',
        'Brisbane',
        'QLD',
        '4118',
        'Australia',
        -27.6500,
        153.0400,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": false, "loading_dock": true}',
        '{"food_licence": true, "public_liability": true, "products_list": true}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'market-005-northside', 
        'market-org-004', 
        'Northside Artisan Market', 
        'northside-artisan-market',
        'Boutique market specializing in handcrafted goods, gourmet foods, and unique local products. Perfect for specialty vendors.',
        'Gasworks Plaza, Newstead QLD 4006, Australia',
        'Brisbane',
        'QLD',
        '4006',
        'Australia',
        -27.4350,
        153.0450,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": true, "loading_dock": false}',
        '{"food_licence": true, "public_liability": true, "artisan_certification": false}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'market-006-greenslopes', 
        'market-org-003', 
        'Greenslopes Fresh Food Market', 
        'greenslopes-fresh-food-market',
        'Local neighborhood market focusing on fresh, healthy food options. Supporting local growers and food producers.',
        'Logan Road, Greenslopes QLD 4120, Australia',
        'Brisbane',
        'QLD',
        '4120',
        'Australia',
        -27.5050,
        153.0480,
        '{"parking": true, "toilets": true, "power": false, "water": true, "wifi": false, "loading_dock": false}',
        '{"food_licence": true, "public_liability": true, "health_certificate": true}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'market-007-city', 
        'market-org-001', 
        'Brisbane CBD Lunch Market', 
        'brisbane-cbd-lunch-market',
        'Weekday lunch market in the heart of Brisbane CBD. Perfect for ready-to-eat food vendors and quick service options.',
        'King George Square, Brisbane City QLD 4000, Australia',
        'Brisbane',
        'QLD',
        '4000',
        'Australia',
        -27.4700,
        153.0240,
        '{"parking": false, "toilets": true, "power": true, "water": true, "wifi": true, "loading_dock": true}',
        '{"food_licence": true, "public_liability": true, "quick_service": true}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'market-008-beenleigh', 
        'market-org-003', 
        'Beenleigh Country Market', 
        'beenleigh-country-market',
        'Traditional country market featuring farm-fresh produce, homemade goods, and rural crafts. Monthly market on first Saturday.',
        'Beenleigh Showgrounds, Beenleigh QLD 4207, Australia',
        'Brisbane',
        'QLD',
        '4207',
        'Australia',
        -27.7100,
        153.1800,
        '{"parking": true, "toilets": true, "power": false, "water": true, "wifi": false, "loading_dock": false}',
        '{"food_licence": true, "public_liability": true, "rural_products": true}',
        'live',
        NOW(),
        NOW()
    )
ON CONFLICT (id) DO NOTHING;

-- Create some sample events for these markets
INSERT INTO events (id, market_id, start_date, end_date, notes, created_at, updated_at)
VALUES 
    ('event-001', 'market-001-southbank', CURRENT_DATE + INTERVAL '1 day', CURRENT_DATE + INTERVAL '1 day', 'Regular Saturday market', NOW(), NOW()),
    ('event-002', 'market-001-southbank', CURRENT_DATE + INTERVAL '2 days', CURRENT_DATE + INTERVAL '2 days', 'Regular Sunday market', NOW(), NOW()),
    ('event-003', 'market-002-westend', CURRENT_DATE + INTERVAL '1 day', CURRENT_DATE + INTERVAL '1 day', 'Saturday farmers market', NOW(), NOW()),
    ('event-004', 'market-003-goldcoast', CURRENT_DATE + INTERVAL '1 day', CURRENT_DATE + INTERVAL '1 day', 'Friday beachfront market', NOW(), NOW()),
    ('event-005', 'market-004-browns-plains', CURRENT_DATE + INTERVAL '7 days', CURRENT_DATE + INTERVAL '7 days', 'Weekly community market', NOW(), NOW()),
    ('event-006', 'market-005-northside', CURRENT_DATE + INTERVAL '14 days', CURRENT_DATE + INTERVAL '14 days', 'Bi-weekly artisan market', NOW(), NOW()),
    ('event-007', 'market-008-beenleigh', CURRENT_DATE + INTERVAL '30 days', CURRENT_DATE + INTERVAL '30 days', 'Monthly country market', NOW(), NOW())
ON CONFLICT (id) DO NOTHING;

-- Show created markets
SELECT 
    m.name,
    m.city,
    m.state,
    m.status,
    p.name as organizer,
    'Market created' as status
FROM markets m
JOIN profiles p ON p.id = m.owner_id
WHERE m.created_at >= NOW() - INTERVAL '1 minute';

-- Show upcoming events
SELECT 
    m.name as market_name,
    e.start_date,
    e.notes
FROM events e
JOIN markets m ON m.id = e.market_id
WHERE e.start_date >= CURRENT_DATE
ORDER BY e.start_date;