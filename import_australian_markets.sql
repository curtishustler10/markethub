-- Import Australian Markets from CSV Data
-- This script creates market organizer profiles and imports real Australian markets
-- Based on data from australian_markets.csv

-- First, create market organizer profiles for each state/territory
INSERT INTO profiles (id, role, name, email, phone, created_at, updated_at)
VALUES 
    ('org-nt-darwin', 'market_organizer', 'Northern Territory Markets Association', 'nt.markets@example.com', '(08) 8900 1001', NOW(), NOW()),
    ('org-act-canberra', 'market_organizer', 'ACT Capital Markets Group', 'act.markets@example.com', '(02) 6200 2002', NOW(), NOW()),
    ('org-qld-brisbane', 'market_organizer', 'Queensland Markets Collective', 'qld.markets@example.com', '(07) 3000 3003', NOW(), NOW()),
    ('org-qld-gold-coast', 'market_organizer', 'Gold Coast Markets Network', 'gc.markets@example.com', '(07) 5500 4004', NOW(), NOW()),
    ('org-qld-sunshine-coast', 'market_organizer', 'Sunshine Coast Markets Co-op', 'sc.markets@example.com', '(07) 5400 5005', NOW(), NOW()),
    ('org-nsw-sydney', 'market_organizer', 'Sydney Markets Alliance', 'nsw.markets@example.com', '(02) 9000 6006', NOW(), NOW()),
    ('org-wa-perth', 'market_organizer', 'Western Australia Markets Group', 'wa.markets@example.com', '(08) 9000 7007', NOW(), NOW()),
    ('org-sa-adelaide', 'market_organizer', 'South Australia Markets Inc', 'sa.markets@example.com', '(08) 8000 8008', NOW(), NOW()),
    ('org-tas-hobart', 'market_organizer', 'Tasmania Markets Association', 'tas.markets@example.com', '(03) 6200 9009', NOW(), NOW()),
    ('org-vic-melbourne', 'market_organizer', 'Victoria Markets Federation', 'vic.markets@example.com', '(03) 9000 1010', NOW(), NOW())
ON CONFLICT (id) DO NOTHING;

-- Function to generate slugs from market names
CREATE OR REPLACE FUNCTION generate_market_slug(market_name TEXT) 
RETURNS TEXT AS $$
BEGIN
    RETURN LOWER(
        REGEXP_REPLACE(
            REGEXP_REPLACE(market_name, '[^a-zA-Z0-9\s-]', '', 'g'),
            '\s+', '-', 'g'
        )
    );
END;
$$ LANGUAGE plpgsql;

-- Import Australian markets with proper city coordinates and organizer assignments
INSERT INTO markets (
    id, 
    owner_id, 
    name, 
    slug, 
    description, 
    address, 
    city, 
    state, 
    postcode, 
    country, 
    lat, 
    lng, 
    amenities, 
    requirements, 
    status, 
    created_at, 
    updated_at
)
VALUES 
    -- Northern Territory Markets
    (
        'au-market-' || generate_market_slug('Mindil Beach Sunset Markets'),
        'org-nt-darwin',
        'Mindil Beach Sunset Markets',
        generate_market_slug('Mindil Beach Sunset Markets'),
        'Large evening market with over 300 stalls held on Thursdays and Sundays on Mindil Beach.',
        'Mindil Beach, Darwin NT 0820, Australia',
        'Darwin',
        'NT',
        '0820',
        'Australia',
        -12.4634,
        130.8456,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": false, "loading_dock": true, "beach_access": true}',
        '{"food_licence": true, "public_liability": true, "products_list": true}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'au-market-' || generate_market_slug('Parap Village Markets'),
        'org-nt-darwin',
        'Parap Village Markets',
        generate_market_slug('Parap Village Markets'),
        'Saturday market in Parap featuring Asian flavours and local produce.',
        'Parap Shopping Centre, Parap NT 0820, Australia',
        'Darwin',
        'NT',
        '0820',
        'Australia',
        -12.4205,
        130.8520,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": false, "loading_dock": true}',
        '{"food_licence": true, "public_liability": true, "multicultural_food": true}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'au-market-' || generate_market_slug('Malak Market Place'),
        'org-nt-darwin',
        'Malak Market Place',
        generate_market_slug('Malak Market Place'),
        'Saturday market promoting sustainability with multicultural food and community atmosphere.',
        'Malak Shopping Centre, Malak NT 0812, Australia',
        'Darwin',
        'NT',
        '0812',
        'Australia',
        -12.3850,
        130.8600,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": false, "loading_dock": true, "sustainable_focus": true}',
        '{"food_licence": true, "public_liability": true, "sustainability_cert": false}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'au-market-' || generate_market_slug('Nightcliff Markets'),
        'org-nt-darwin',
        'Nightcliff Markets',
        generate_market_slug('Nightcliff Markets'),
        'Sunday market focusing on arts, crafts, vintage items and food in the suburb of Nightcliff.',
        'Nightcliff Foreshore, Nightcliff NT 0810, Australia',
        'Darwin',
        'NT',
        '0810',
        'Australia',
        -12.3950,
        130.8520,
        '{"parking": true, "toilets": true, "power": false, "water": true, "wifi": false, "loading_dock": false, "waterfront": true}',
        '{"food_licence": true, "public_liability": true, "arts_crafts": true}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'au-market-' || generate_market_slug('Rapid Creek Markets'),
        'org-nt-darwin',
        'Rapid Creek Markets',
        generate_market_slug('Rapid Creek Markets'),
        'Darwin''s oldest market offering exotic produce on weekends.',
        'Rapid Creek Shopping Centre, Rapid Creek NT 0810, Australia',
        'Darwin',
        'NT',
        '0810',
        'Australia',
        -12.3900,
        130.8580,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": false, "loading_dock": true, "historic": true}',
        '{"food_licence": true, "public_liability": true, "produce_focus": true}',
        'live',
        NOW(),
        NOW()
    ),

    -- ACT Markets
    (
        'au-market-' || generate_market_slug('Capital Region Farmers Market'),
        'org-act-canberra',
        'Capital Region Farmers Market',
        generate_market_slug('Capital Region Farmers Market'),
        'Large farmers market at Exhibition Park running most Saturdays with fresh produce and goods.',
        'Exhibition Park, Canberra ACT 2601, Australia',
        'Canberra',
        'ACT',
        '2601',
        'Australia',
        -35.2809,
        149.1300,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": true, "loading_dock": true, "large_space": true}',
        '{"food_licence": true, "public_liability": true, "farmers_cert": true}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'au-market-' || generate_market_slug('Southside Farmers Market'),
        'org-act-canberra',
        'Southside Farmers Market',
        generate_market_slug('Southside Farmers Market'),
        'Community‑focused Sunday farmers market in south Canberra.',
        'Wanniassa Hills Primary School, Canberra ACT 2903, Australia',
        'Canberra',
        'ACT',
        '2903',
        'Australia',
        -35.3950,
        149.0900,
        '{"parking": true, "toilets": true, "power": false, "water": true, "wifi": false, "loading_dock": false, "community_focus": true}',
        '{"food_licence": true, "public_liability": true, "community_cert": false}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'au-market-' || generate_market_slug('Handmade Market'),
        'org-act-canberra',
        'Handmade Market',
        generate_market_slug('Handmade Market'),
        'Quarterly market showcasing over 260 handmade businesses offering crafts and artisan products.',
        'The Goods Shed, Canberra ACT 2604, Australia',
        'Canberra',
        'ACT',
        '2604',
        'Australia',
        -35.3050,
        149.1350,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": true, "loading_dock": true, "artisan_focus": true}',
        '{"food_licence": false, "public_liability": true, "handmade_cert": true}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'au-market-' || generate_market_slug('Old Bus Depot Markets'),
        'org-act-canberra',
        'Old Bus Depot Markets',
        generate_market_slug('Old Bus Depot Markets'),
        'Iconic Sunday market with arts, crafts, gourmet food and vintage wares at Kingston foreshore.',
        '21 Wentworth Avenue, Kingston ACT 2604, Australia',
        'Canberra',
        'ACT',
        '2604',
        'Australia',
        -35.3200,
        149.1450,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": true, "loading_dock": true, "historic_building": true}',
        '{"food_licence": true, "public_liability": true, "arts_permit": false}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'au-market-' || generate_market_slug('Haig Park Village Markets'),
        'org-act-canberra',
        'Haig Park Village Markets',
        generate_market_slug('Haig Park Village Markets'),
        'Weekly Sunday village market that is dog‑friendly with artisan food and produce.',
        'Haig Park, Braddon ACT 2612, Australia',
        'Canberra',
        'ACT',
        '2612',
        'Australia',
        -35.2650,
        149.1400,
        '{"parking": true, "toilets": true, "power": false, "water": true, "wifi": false, "loading_dock": false, "dog_friendly": true}',
        '{"food_licence": true, "public_liability": true, "pet_policy": true}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'au-market-' || generate_market_slug('Hartley Hall Markets'),
        'org-act-canberra',
        'Hartley Hall Markets',
        generate_market_slug('Hartley Hall Markets'),
        'Monthly rural‑themed market featuring stallholders from the district selling crafts and produce.',
        'Hartley Hall, Hall ACT 2618, Australia',
        'Hall',
        'ACT',
        '2618',
        'Australia',
        -35.1750,
        149.0850,
        '{"parking": true, "toilets": true, "power": false, "water": true, "wifi": false, "loading_dock": false, "rural_setting": true}',
        '{"food_licence": true, "public_liability": true, "rural_products": true}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'au-market-' || generate_market_slug('Little Burley Market'),
        'org-act-canberra',
        'Little Burley Market',
        generate_market_slug('Little Burley Market'),
        'Saturday market on the shores of Lake Burley Griffin offering food, music and art.',
        'Lake Burley Griffin, Canberra ACT 2600, Australia',
        'Canberra',
        'ACT',
        '2600',
        'Australia',
        -35.2950,
        149.1200,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": false, "loading_dock": false, "lakeside": true}',
        '{"food_licence": true, "public_liability": true, "music_licence": false}',
        'live',
        NOW(),
        NOW()
    ),

    -- Queensland Markets
    (
        'au-market-' || generate_market_slug('Brisbane City Markets'),
        'org-qld-brisbane',
        'Brisbane City Markets',
        generate_market_slug('Brisbane City Markets'),
        'City centre weekday market (Tues–Thur) featuring farmers, artisan producers and street food.',
        'King George Square, Brisbane QLD 4000, Australia',
        'Brisbane',
        'QLD',
        '4000',
        'Australia',
        -27.4698,
        153.0251,
        '{"parking": false, "toilets": true, "power": true, "water": true, "wifi": true, "loading_dock": true, "city_centre": true}',
        '{"food_licence": true, "public_liability": true, "quick_service": true}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'au-market-' || generate_market_slug('Carseldine Farmers & Artisan Markets'),
        'org-qld-brisbane',
        'Carseldine Farmers & Artisan Markets',
        generate_market_slug('Carseldine Farmers & Artisan Markets'),
        'Saturday market north of Brisbane offering gourmet food, produce and artisan stalls.',
        'Carseldine Central, Carseldine QLD 4034, Australia',
        'Carseldine',
        'QLD',
        '4034',
        'Australia',
        -27.3450,
        153.0350,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": true, "loading_dock": true, "gourmet_focus": true}',
        '{"food_licence": true, "public_liability": true, "artisan_cert": false}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'au-market-' || generate_market_slug('Jan Powers Farmers Markets – Powerhouse'),
        'org-qld-brisbane',
        'Jan Powers Farmers Markets – Powerhouse',
        generate_market_slug('Jan Powers Farmers Markets – Powerhouse'),
        'Saturday morning market at Powerhouse Plaza with over 120 stalls of fresh food and produce.',
        'Brisbane Powerhouse, New Farm QLD 4005, Australia',
        'New Farm (Brisbane)',
        'QLD',
        '4005',
        'Australia',
        -27.4650,
        153.0550,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": true, "loading_dock": true, "large_market": true}',
        '{"food_licence": true, "public_liability": true, "farmers_cert": true}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'au-market-' || generate_market_slug('Saturday Fresh Market'),
        'org-qld-brisbane',
        'Saturday Fresh Market',
        generate_market_slug('Saturday Fresh Market'),
        'Brisbane''s largest fresh food market with more than 150 stalls operating on Saturdays.',
        'Rocklea Markets, Rocklea QLD 4106, Australia',
        'Rocklea (Brisbane)',
        'QLD',
        '4106',
        'Australia',
        -27.5350,
        153.0100,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": false, "loading_dock": true, "wholesale": true}',
        '{"food_licence": true, "public_liability": true, "wholesale_licence": true}',
        'live',
        NOW(),
        NOW()
    ),

    -- New South Wales Markets
    (
        'au-market-' || generate_market_slug('Paddy''s Markets (Haymarket)'),
        'org-nsw-sydney',
        'Paddy''s Markets (Haymarket)',
        generate_market_slug('Paddy''s Markets (Haymarket)'),
        'Large indoor market in Haymarket operating Wednesday to Sunday with fresh produce, fashion and souvenirs.',
        '9-13 Hay Street, Haymarket NSW 2000, Australia',
        'Sydney',
        'NSW',
        '2000',
        'Australia',
        -33.8790,
        151.2070,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": true, "loading_dock": true, "indoor": true}',
        '{"food_licence": true, "public_liability": true, "retail_licence": true}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'au-market-' || generate_market_slug('The Rocks Friday Foodie & Weekend Markets'),
        'org-nsw-sydney',
        'The Rocks Friday Foodie & Weekend Markets',
        generate_market_slug('The Rocks Friday Foodie & Weekend Markets'),
        'Food and artisan markets held on Fridays and weekends in The Rocks district under Sydney Harbour Bridge.',
        'George Street, The Rocks NSW 2000, Australia',
        'Sydney',
        'NSW',
        '2000',
        'Australia',
        -33.8590,
        151.2090,
        '{"parking": false, "toilets": true, "power": true, "water": true, "wifi": true, "loading_dock": false, "tourist_area": true}',
        '{"food_licence": true, "public_liability": true, "tourism_permit": true}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'au-market-' || generate_market_slug('Sydney Fish Market'),
        'org-nsw-sydney',
        'Sydney Fish Market',
        generate_market_slug('Sydney Fish Market'),
        'Daily seafood market in Pyrmont with one of the largest fish markets in the Southern Hemisphere.',
        'Bank Street, Pyrmont NSW 2009, Australia',
        'Sydney',
        'NSW',
        '2009',
        'Australia',
        -33.8740,
        151.1960,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": true, "loading_dock": true, "seafood_specialist": true}',
        '{"food_licence": true, "public_liability": true, "seafood_licence": true}',
        'live',
        NOW(),
        NOW()
    ),

    -- Western Australia Markets
    (
        'au-market-' || generate_market_slug('Fremantle Markets'),
        'org-wa-perth',
        'Fremantle Markets',
        generate_market_slug('Fremantle Markets'),
        'Historic public market with over 150 shops selling crafts, fashion and fresh food, open Friday–Sunday and public holidays.',
        'Corner of South Terrace and Henderson Street, Fremantle WA 6160, Australia',
        'Fremantle',
        'WA',
        '6160',
        'Australia',
        -32.0550,
        115.7500,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": true, "loading_dock": true, "historic": true}',
        '{"food_licence": true, "public_liability": true, "heritage_compliance": true}',
        'live',
        NOW(),
        NOW()
    ),
    (
        'au-market-' || generate_market_slug('E Shed Markets'),
        'org-wa-perth',
        'E Shed Markets',
        generate_market_slug('E Shed Markets'),
        'Weekend market located on Victoria Quay in a historic timber building hosting market stalls and free entertainment.',
        'Victoria Quay, Fremantle WA 6160, Australia',
        'Fremantle',
        'WA',
        '6160',
        'Australia',
        -32.0600,
        115.7450,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": false, "loading_dock": true, "waterfront": true}',
        '{"food_licence": true, "public_liability": true, "entertainment_licence": false}',
        'live',
        NOW(),
        NOW()
    ),

    -- South Australia Markets
    (
        'au-market-' || generate_market_slug('Adelaide Central Market'),
        'org-sa-adelaide',
        'Adelaide Central Market',
        generate_market_slug('Adelaide Central Market'),
        'One of the largest fresh produce markets in the Southern Hemisphere with stalls of fruit, vegetables, meats, cheeses and cafes.',
        '44-60 Gouger Street, Adelaide SA 5000, Australia',
        'Adelaide',
        'SA',
        '5000',
        'Australia',
        -34.9280,
        138.5950,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": true, "loading_dock": true, "indoor": true}',
        '{"food_licence": true, "public_liability": true, "produce_licence": true}',
        'live',
        NOW(),
        NOW()
    ),

    -- Tasmania Markets  
    (
        'au-market-' || generate_market_slug('Salamanca Market'),
        'org-tas-hobart',
        'Salamanca Market',
        generate_market_slug('Salamanca Market'),
        'Weekly Saturday street market with over 350 stalls in Salamanca Place, Hobart''s most visited attraction.',
        'Salamanca Place, Hobart TAS 7000, Australia',
        'Hobart',
        'TAS',
        '7000',
        'Australia',
        -42.8826,
        147.3257,
        '{"parking": false, "toilets": true, "power": true, "water": true, "wifi": false, "loading_dock": false, "historic_precinct": true}',
        '{"food_licence": true, "public_liability": true, "heritage_permit": true}',
        'live',
        NOW(),
        NOW()
    ),

    -- Victoria Markets
    (
        'au-market-' || generate_market_slug('Dandenong Market'),
        'org-vic-melbourne',
        'Dandenong Market',
        generate_market_slug('Dandenong Market'),
        'Historic market in Melbourne''s south‑east offering fresh produce, fashion, crafts and global street food.',
        'Cleeland Street, Dandenong VIC 3175, Australia',
        'Dandenong (Melbourne)',
        'VIC',
        '3175',
        'Australia',
        -37.9870,
        145.2150,
        '{"parking": true, "toilets": true, "power": true, "water": true, "wifi": true, "loading_dock": true, "multicultural": true}',
        '{"food_licence": true, "public_liability": true, "multicultural_cert": false}',
        'live',
        NOW(),
        NOW()
    )
ON CONFLICT (id) DO NOTHING;

-- Create some sample events for major markets
INSERT INTO events (id, market_id, start_at, end_at, title, description, all_day, location, visibility, created_at, updated_at)
VALUES 
    (uuid_generate_v4(), 'au-market-mindil-beach-sunset-markets', (CURRENT_DATE + INTERVAL '3 days')::timestamp + time '16:00', (CURRENT_DATE + INTERVAL '3 days')::timestamp + time '21:00', 'Thursday Sunset Market', 'Regular Thursday evening market with sunset views', false, 'Mindil Beach', 'public', NOW(), NOW()),
    (uuid_generate_v4(), 'au-market-mindil-beach-sunset-markets', (CURRENT_DATE + INTERVAL '6 days')::timestamp + time '16:00', (CURRENT_DATE + INTERVAL '6 days')::timestamp + time '21:00', 'Sunday Sunset Market', 'Regular Sunday evening market with sunset views', false, 'Mindil Beach', 'public', NOW(), NOW()),
    (uuid_generate_v4(), 'au-market-capital-region-farmers-market', (CURRENT_DATE + INTERVAL '2 days')::timestamp + time '07:30', (CURRENT_DATE + INTERVAL '2 days')::timestamp + time '11:30', 'Saturday Farmers Market', 'Weekly fresh produce and local goods market', false, 'Exhibition Park', 'public', NOW(), NOW()),
    (uuid_generate_v4(), 'au-market-old-bus-depot-markets', (CURRENT_DATE + INTERVAL '6 days')::timestamp + time '10:00', (CURRENT_DATE + INTERVAL '6 days')::timestamp + time '16:00', 'Sunday Arts & Crafts Market', 'Weekly market featuring local artisans and food', false, 'Kingston Foreshore', 'public', NOW(), NOW()),
    (uuid_generate_v4(), 'au-market-brisbane-city-markets', (CURRENT_DATE + INTERVAL '1 day')::timestamp + time '11:00', (CURRENT_DATE + INTERVAL '1 day')::timestamp + time '14:00', 'Tuesday City Market', 'Weekday lunch market in the CBD', false, 'King George Square', 'public', NOW(), NOW()),
    (uuid_generate_v4(), 'au-market-salamanca-market', (CURRENT_DATE + INTERVAL '2 days')::timestamp + time '08:30', (CURRENT_DATE + INTERVAL '2 days')::timestamp + time '15:00', 'Saturday Salamanca Market', 'Historic weekly market in Hobart', false, 'Salamanca Place', 'public', NOW(), NOW()),
    (uuid_generate_v4(), 'au-market-fremantle-markets', (CURRENT_DATE + INTERVAL '1 day')::timestamp + time '09:00', (CURRENT_DATE + INTERVAL '1 day')::timestamp + time '17:00', 'Friday Fremantle Markets', 'Historic markets with crafts and local produce', false, 'Fremantle Markets Building', 'public', NOW(), NOW()),
    (uuid_generate_v4(), 'au-market-adelaide-central-market', (CURRENT_DATE + INTERVAL '2 days')::timestamp + time '07:00', (CURRENT_DATE + INTERVAL '2 days')::timestamp + time '15:00', 'Saturday Central Market', 'Fresh produce and gourmet food market', false, 'Adelaide Central Market', 'public', NOW(), NOW())
ON CONFLICT (id) DO NOTHING;

-- Clean up the temporary function
DROP FUNCTION IF EXISTS generate_market_slug(TEXT);

-- Display summary of imported markets
SELECT 
    'IMPORT SUMMARY' as status,
    COUNT(*) as total_markets_created,
    COUNT(DISTINCT state) as states_covered,
    COUNT(DISTINCT owner_id) as organizers_created
FROM markets 
WHERE id LIKE 'au-market-%';

-- Show markets by state
SELECT 
    state,
    COUNT(*) as market_count,
    STRING_AGG(name, ', ' ORDER BY name) as market_names
FROM markets 
WHERE id LIKE 'au-market-%'
GROUP BY state
ORDER BY state;

-- Show upcoming events
SELECT 
    m.name as market_name,
    m.city,
    m.state,
    e.title as event_title,
    e.start_at::date as event_date,
    TO_CHAR(e.start_at, 'HH24:MI') as start_time,
    TO_CHAR(e.end_at, 'HH24:MI') as end_time
FROM events e
JOIN markets m ON m.id = e.market_id
WHERE m.id LIKE 'au-market-%'
  AND e.start_at >= NOW()
ORDER BY e.start_at;
