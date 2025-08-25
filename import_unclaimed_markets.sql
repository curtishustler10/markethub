-- Import Australian Markets as unclaimed markets
-- Generated on 2025-08-24 18:47:03
-- These markets have no owner and can be claimed by organizers

-- Note: You must have a system user to own unclaimed markets
-- Create a system user first through your application or use an existing admin user ID
-- Replace '00000000-0000-0000-0000-000000000000' with an actual UUID from auth.users

-- System user creation (run this first):
INSERT INTO auth.users (id, email, created_at, updated_at, email_confirmed_at, role, aud)
VALUES ('00000000-0000-0000-0000-000000000000', 'system@markethub.com.au', NOW(), NOW(), NOW(), 'authenticated', 'authenticated');

INSERT INTO profiles (id, role, name, email, created_at, updated_at)
VALUES ('00000000-0000-0000-0000-000000000000', 'admin', 'System User', 'system@markethub.com.au', NOW(), NOW());

-- Insert unclaimed markets owned by system user
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'aac7c447-92af-4513-8e6f-235611d45bcd',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'CAPITAL REGION FARMERS MARKET',
    'capital-region-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'ACT 2600',
    '',
    'ACT',
    '2600',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '34bd8a57-a0a1-4080-9855-25e373b945c0',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'HARTLEY HALL MARKETS',
    'hartley-hall-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Hall ACT 2618',
    'Hall',
    'ACT',
    '2618',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '0ac34a32-fcf1-41d5-b2a1-34d9e2bbe374',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'GUNGAHLIN COMMUNITY MARKET',
    'gungahlin-community-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'CASEY ACT 2913',
    'CASEY',
    'ACT',
    '2913',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '55088bbe-5b0c-4353-88fe-824c69702ec4',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Canberra City Walk Markets',
    'canberra-city-walk-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'ACT 2612',
    '',
    'ACT',
    '2612',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '31d2fc49-cebd-401d-b25d-c5f0d9ed548b',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'ANU MARKET DAYS',
    'anu-market-days',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'ACT 2600',
    '',
    'ACT',
    '2600',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'e69edcad-9f6f-48de-8a66-b38d6de67c41',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Canberra Fashion Market',
    'canberra-fashion-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Mitchell ACT 2911',
    'Mitchell',
    'ACT',
    '2911',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '21f2b985-5926-41dd-ac9e-4a7bd713eec8',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'SOUTHSIDE FARMERS MARKET',
    'southside-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'ACT 2606',
    '',
    'ACT',
    '2606',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '4d0d8b44-6c7b-401d-8f8d-2b6e0f6fdca0',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'SUMMER SUNSET MARKETS',
    'summer-sunset-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'ACT 2620',
    '',
    'ACT',
    '2620',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '11a5687b-7b96-487a-b9ba-fc23d0cd04e5',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BOULEVARD MARKET',
    'boulevard-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'ACT 2600',
    '',
    'ACT',
    '2600',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'adfbeaac-2ad0-41a6-b392-32ff874c566c',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'CANBERRA NIGHT MARKETS',
    'canberra-night-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'ACT 2600',
    '',
    'ACT',
    '2600',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '6e206bc5-1172-4a7f-bffb-65dc1b61a4eb',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'OLD BUS DEPOT MARKET',
    'old-bus-depot-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'ACT 2604',
    '',
    'ACT',
    '2604',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '2525ae34-addf-4596-b5b1-044befdcc241',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BELCONNEN TRASH & TREASURE MARKET',
    'belconnen-trash-treasure-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'ACT 2614',
    '',
    'ACT',
    '2614',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '0155d377-ec32-4464-835a-15a37cdf1c40',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Canberra Kids Market',
    'canberra-kids-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Mitchell ACT 2911',
    'Mitchell',
    'ACT',
    '2911',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '9c76cc69-1012-41bb-bc74-7cb66b2a34f6',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BALMAIN MARKET',
    'balmain-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Balmain NSW 2041',
    'Balmain',
    'NSW',
    '2041',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '04375858-d368-4668-a7bb-582066998662',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Lugarno Lions Community Fair 21st September 2025 (Previously Spring Festival)',
    'lugarno-lions-community-fair-21st-september-2025-previously-spring-festival',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Riverwood Park, Coleridge St, RIVERWOOD NSW 2210',
    'RIVERWOOD',
    'NSW',
    '2210',
    'Australia',
    -33.9496260993,
    151.0474542492,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'a3900961-03e1-452e-b48b-aa04d4924569',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BONDI BEACH COMMUNITY MARKET',
    'bondi-beach-community-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Roscoe St Mall, Campbell Parade, Bondi Beach NSW 2026',
    'Bondi Beach',
    'NSW',
    '2026',
    'Australia',
    -33.8903388766,
    151.2745195164,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '73a9441e-4cc2-4a07-8b96-c9972207aa65',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'ADAMSTOWN MARKET',
    'adamstown-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Adamstown NSW 2289',
    'Adamstown',
    'NSW',
    '2289',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '4a58d38b-d635-4410-a852-684af48f2d3c',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Italian Forum Twilight Market',
    'italian-forum-twilight-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'The Italian Forum Piazza, 23 Norton Street, Leichhardt NSW 2040',
    'Leichhardt',
    'NSW',
    '2040',
    'Australia',
    -33.8867929155,
    151.1581019943,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'b7999c82-6180-42a1-8724-e48b1333b989',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BALLINA MARKET - returning on 19th July 2020',
    'ballina-market-returning-on-19th-july-2020',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Ballina NSW 2478',
    'Ballina',
    'NSW',
    '2478',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '78a74702-0e6a-4087-8859-9b4f80c65401',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Penrith Trash and Treasure Market',
    'penrith-trash-and-treasure-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Penrith Paceway, Ransley Street, Penrith NSW 2750',
    'Penrith',
    'NSW',
    '2750',
    'Australia',
    -33.7567311371,
    150.6869773453,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'dd523723-0a4a-4fdc-b9f6-dbaf19055397',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BANGALOW VILLAGE MARKET',
    'bangalow-village-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NSW 2479',
    '',
    'NSW',
    '2479',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'f031cd42-8dd0-4ef6-97dc-fe75507034ab',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BANKSTOWN SUNDAY MARKETS & BARGAIN BAZAAR',
    'bankstown-sunday-markets-bargain-bazaar',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Condell Park NSW 2200',
    'Condell Park',
    'NSW',
    '2200',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '1721e3d7-221b-471c-a557-cba5667242da',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Sydney City Night Market',
    'sydney-city-night-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Belmore Park, Hay Street, Haymarket NSW 2000',
    'Haymarket',
    'NSW',
    '2000',
    'Australia',
    -33.8809679018,
    151.2075833862,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'e1763f82-16a9-4c40-a1d1-786d5e9a336d',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Arcadia Market',
    'arcadia-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Arcadia NSW 2159',
    'Arcadia',
    'NSW',
    '2159',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '2e81cd03-e5a7-4bb9-90a6-30967bd165ce',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Wednesday Pickers Bazaar',
    'wednesday-pickers-bazaar',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Fairfield Showground, 447 Smithfield Road, Prairiewood NSW 2171',
    'Prairiewood',
    'NSW',
    '2171',
    'Australia',
    -33.8669114146,
    150.9059743469,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '155fe9e3-0387-4a6d-abbc-60423e1a4f73',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'ASHBY MARKET',
    'ashby-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NSW 2463',
    '',
    'NSW',
    '2463',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '7802bcaf-015b-4685-88bd-8accae0acaee',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BANGALOW FARMERS MARKET',
    'bangalow-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NSW 2479',
    '',
    'NSW',
    '2479',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '5df40912-c9fd-4155-aa48-4885655d222b',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'ART ON THE LEVEE - WAGGA',
    'art-on-the-levee-wagga',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Wagga Wagga NSW 2650',
    'Wagga Wagga',
    'NSW',
    '2650',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '63ec3135-5e00-4af8-997f-5b78355bc0ad',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'The Concourse Artisan Market',
    'the-concourse-artisan-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'The Concourse Chatswood, 409 Victoria Avenue, Chatswood NSW 2067',
    'Chatswood',
    'NSW',
    '2067',
    'Australia',
    -33.7956772,
    151.1843034,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'd56e24fe-5ddb-4627-a444-90f14af67910',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BERRY RESERVE MARKET',
    'berry-reserve-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Berry Reserve, 1417 Pittwater Road, Narrabeen NSW 2101',
    'Narrabeen',
    'NSW',
    '1417',
    'Australia',
    -33.7138262119,
    151.2966244024,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '8e7b44f8-598b-4db3-9bc8-8167221d6e95',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'AVOCA BEACHSIDE MARKETS',
    'avoca-beachside-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Avoca Beach NSW 2251',
    'Avoca Beach',
    'NSW',
    '2251',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'ced6112f-1855-41af-800e-ba47935210cf',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'ARMIDALE MARKET',
    'armidale-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Armidale NSW 2350',
    'Armidale',
    'NSW',
    '2350',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'eedd3e0a-2475-48bf-9c8d-ba756d2ff616',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    '@The HUB Markets',
    'the-hub-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Lalor Park NSW 2147',
    'Lalor Park',
    'NSW',
    '2147',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '0f608bc1-202d-4558-9500-ecf25bcbdeca',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BERRY SPRINGS COMMUNITY MARKET',
    'berry-springs-community-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0838',
    '',
    'NT',
    '0838',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'a2678611-27d8-4aef-924c-ab44beed30f6',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Adelaide River Market',
    'adelaide-river-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0846',
    '',
    'NT',
    '0846',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '0ab30b35-ecf7-44e3-a064-243478109f71',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'HEAVITREE GAP COMMUNITY MARKETS',
    'heavitree-gap-community-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0873',
    '',
    'NT',
    '0873',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '625ee2a9-fff6-4640-b3ca-a6398b5032cb',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Malak Marketplace',
    'malak-marketplace',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0812',
    '',
    'NT',
    '0812',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'b327d1cc-7bb1-471d-8d84-ad98a09471ec',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'PARAP VILLAGE MARKET',
    'parap-village-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0804',
    '',
    'NT',
    '0804',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'd609272d-074e-438f-9568-cd68af3cb791',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Darwin Trailer Boat Club''s Car Boot Sale',
    'darwin-trailer-boat-clubs-car-boot-sale',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0820',
    '',
    'NT',
    '0820',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '7d0d75be-2153-42a8-9762-db5d3de3cb73',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BATCHELOR MARKET',
    'batchelor-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0845',
    '',
    'NT',
    '0845',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'af782d4c-7f2f-4b25-8f60-3c0996111fac',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'PALMERSTON and RURAL MARKETS',
    'palmerston-and-rural-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0830',
    '',
    'NT',
    '0830',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '1f833447-1dc1-40e2-88cd-bcc7aff55746',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'MINDIL BEACH SUNSET MARKET',
    'mindil-beach-sunset-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'The Gardens NT 0820',
    'The Gardens',
    'NT',
    '0820',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '28b6e9c1-0e61-46f6-922a-271dea4df9a2',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'KATHERINE COMMUNITY MARKET',
    'katherine-community-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0850',
    '',
    'NT',
    '0850',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '5483343f-b5ad-441c-865f-ae5d33aaf40a',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'NIGHTCLIFF MARKET',
    'nightcliff-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0810',
    '',
    'NT',
    '0810',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '518d3b7c-6993-49e6-a7aa-57a77350ae0b',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'THE FREDS PASS RURAL MARKET',
    'the-freds-pass-rural-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Bees Creek NT 0822',
    'Bees Creek',
    'NT',
    '0822',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '8cfb3e6c-1ff5-4e0a-ac5a-afbaa482c7a3',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'ALICE SPRINGS TOWN COUNCIL NIGHT MARKETS',
    'alice-springs-town-council-night-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0870',
    '',
    'NT',
    '0870',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '2edb76ee-8687-4fef-8504-ba5e552a1742',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'MUMMY MARKET NT',
    'mummy-market-nt',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0831',
    '',
    'NT',
    '0831',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '32fc10a8-4a93-462e-90f3-0a4448e65237',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'RAPID CREEK MARKET',
    'rapid-creek-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0810',
    '',
    'NT',
    '0810',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '61945187-4664-4bad-a3e1-b5d2f95480fc',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'TODD MALL MARKET ALICE SPRINGS',
    'todd-mall-market-alice-springs',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'NT 0870',
    '',
    'NT',
    '0870',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '7bae63ee-c449-4c4b-a304-cff3bb736d54',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Airlie Beach - The Handmade Expo Market',
    'airlie-beach-the-handmade-expo-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Cannonvale QLD 4802',
    'Cannonvale',
    'QLD',
    '4802',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'e66971bb-4375-412a-957d-e528980a2bca',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Boundary Street Markets',
    'boundary-street-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4101',
    '',
    'QLD',
    '4101',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '857912be-dead-4a58-97e7-d2538d92a511',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BAM MARKETS - BEACH, ARTS, MUSIC',
    'bam-markets-beach-arts-music',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4680',
    '',
    'QLD',
    '4680',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '1fdc4ff4-b558-482a-b283-e0c3ad7afac7',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'ARCADE CAR PARK MARKET ROCKHAMPTON',
    'arcade-car-park-market-rockhampton',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Rockhampton City QLD 4700',
    'Rockhampton City',
    'QLD',
    '4700',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '2496842a-78a3-437c-8640-aef3e70326f9',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Goodna Jacaranda Festival',
    'goodna-jacaranda-festival',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Evan Marginson Park, 49 Woogaroo Street, Goodna QLD 4300',
    'Goodna',
    'QLD',
    '4300',
    'Australia',
    -27.6066346,
    152.9006111,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '6d880c2c-10df-45c4-9109-841844f47094',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BEENLEIGH EARLY BIRD MARKETS',
    'beenleigh-early-bird-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4207',
    '',
    'QLD',
    '4207',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '683d9151-87b8-4431-8e2c-f71cc63938c3',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BARDON COMMUNITY MARKET',
    'bardon-community-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4065',
    '',
    'QLD',
    '4065',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'e6fe366b-fdd3-45aa-aa29-a1296719de07',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BRISBANE NIGHT MARKET',
    'brisbane-night-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Rocklea QLD 4106',
    'Rocklea',
    'QLD',
    '4106',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '93e179b5-d17c-4110-8270-ae5ae2390e3a',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BOWENS LIONS MARKET',
    'bowens-lions-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4805',
    '',
    'QLD',
    '4805',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '61a21852-e852-4040-9ec4-87dc74d4d17e',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'AIRLIE BEACH MARKETS',
    'airlie-beach-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4802',
    '',
    'QLD',
    '4802',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '3446fd9a-5494-4811-acab-cbcee555fa63',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Apollonian Hotel Markets',
    'apollonian-hotel-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4565',
    '',
    'QLD',
    '4565',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '6927d945-640a-4508-9164-aaf6487c900f',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'ATHERTON MARKET',
    'atherton-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Atherton QLD 4883',
    'Atherton',
    'QLD',
    '4883',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'cb85530d-6f46-47d0-a49e-b3ad8a9056a8',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Bazaar Racecourse Market',
    'bazaar-racecourse-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4551',
    '',
    'QLD',
    '4551',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '7214ffc9-b029-420f-af0f-380b3081b0ed',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BRISBANE MARKETPLACE: Sunday Discovery Market',
    'brisbane-marketplace-sunday-discovery-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4106',
    '',
    'QLD',
    '4106',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '464e72ac-23a7-46d8-8466-d3459bc54039',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Billycart Markets - Sandgate',
    'billycart-markets-sandgate',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4017',
    '',
    'QLD',
    '4017',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '9189d9ca-5662-4298-9b24-6e1b3791abc5',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BEENLEIGH SHOWGROUND MARKET',
    'beenleigh-showground-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4207',
    '',
    'QLD',
    '4207',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'a845446a-71b8-4292-943f-3d948797c078',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    '4207 Indoor Markets',
    '4207-indoor-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Beenleigh QLD 4207',
    'Beenleigh',
    'QLD',
    '4207',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'a7ad27b9-edb6-475f-8404-5d2c2f8fec21',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Brisbane MarketPlace: Saturday Fresh Market',
    'brisbane-marketplace-saturday-fresh-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Rocklea QLD 4106',
    'Rocklea',
    'QLD',
    '4106',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '0a6c49a5-e937-4246-93fb-0a80d70ee033',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BELL PARK MARKETS',
    'bell-park-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4710',
    '',
    'QLD',
    '4710',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '33fc0124-f48d-4ab7-839a-18612fc8c07d',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BOONAH COUNTRY MARKETS',
    'boonah-country-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'QLD 4310',
    '',
    'QLD',
    '4310',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'a7c81daf-ccfc-4e0d-b149-ebb9eed74070',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BARMERA MAIN STREET MARKET',
    'barmera-main-street-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5345',
    '',
    'SA',
    '5345',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '1dcf380c-2b2a-4a42-9f7f-3d217f1e53b0',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'ADELAIDE CENTRAL MARKET',
    'adelaide-central-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5000',
    '',
    'SA',
    '5000',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'b9203dd9-2f16-43a1-8ef0-4806df69069a',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BLACKWOOD ART & CRAFT MARKET',
    'blackwood-art-craft-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5051',
    '',
    'SA',
    '5051',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '53e62805-96d6-4357-9424-71edd7f061c7',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Green Light Organic Market Willunga',
    'green-light-organic-market-willunga',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Willunga SA 5172',
    'Willunga',
    'SA',
    '5172',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '9b35399a-243e-44d5-9838-c309f16e3389',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Adelaide Hills Farmers Market',
    'adelaide-hills-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Mount Barker SA 5251',
    '',
    'SA',
    '5251',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '26fbd93d-a6b3-408f-992a-9513e54e0aa3',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'ANGASTON MARKET',
    'angaston-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Angaston SA 5353',
    'Angaston',
    'SA',
    '5353',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '4e2bb49d-2f36-4ebb-a2a4-2ae0b95d2dfa',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'ADELAIDE NIGHT MARKET',
    'adelaide-night-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5000',
    '',
    'SA',
    '5000',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'bbf60422-b85f-4acd-910c-0a8e45e955fd',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'GAWLER LIONS STATION MARKET',
    'gawler-lions-station-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5118',
    '',
    'SA',
    '5118',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'dcafb532-e707-4258-9ee0-95d149283780',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'ADELAIDE SHOWGROUND FARMERS MARKET',
    'adelaide-showground-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5034',
    '',
    'SA',
    '5034',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '37a7a44a-8e4e-4d98-83f0-8599a14e8931',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Community Market - Kangaroo Island',
    'community-market-kangaroo-island',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5220',
    '',
    'SA',
    '5220',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'de0bfed8-9a18-4d48-abfc-97432794ab51',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'FISHERMAN''S WHARF MARKET',
    'fishermans-wharf-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Port Adelaide SA 5015',
    'Port Adelaide',
    'SA',
    '5015',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '7bd8a508-e342-4d96-8387-2e4f53c007e3',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BEACHFRONT TWILIGHT MARKETS AT SEACLIFF',
    'beachfront-twilight-markets-at-seacliff',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    '3/1741 Pittwater Road',
    '',
    'SA',
    '1741',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'c3767c6e-3fe2-4f80-a3f9-1cb26c486d82',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Farmers Markets - Kangaroo Island',
    'farmers-markets-kangaroo-island',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5220',
    '',
    'SA',
    '5220',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '81be0172-9353-4b59-b792-b23c74d03616',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'GILLES STREET MARKET',
    'gilles-street-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5086',
    '',
    'SA',
    '5086',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '9c5e7a22-c49c-4d71-a141-fe74e7c2b333',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'FULLARTON MARKET',
    'fullarton-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5063',
    '',
    'SA',
    '5063',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '5cd54dd2-b40b-42cc-b701-698ade958d8d',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Barker Market',
    'barker-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5255',
    '',
    'SA',
    '5255',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '816076b7-3fc8-4729-91f2-fa9720ed1b6d',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'GOOLWA WHARF MARKET',
    'goolwa-wharf-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5214',
    '',
    'SA',
    '5214',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '6d3871a3-0f33-4d36-b4f1-f29e64963e9d',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Elizabeth Grove Community Market',
    'elizabeth-grove-community-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5112',
    '',
    'SA',
    '5112',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'c7618971-23e3-4131-af0d-27c59f59b0a7',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'FARM PRODUCE MARKET',
    'farm-produce-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5211',
    '',
    'SA',
    '5211',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '5866e8b2-3ca2-4be5-bc49-1f3ee4614315',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'GEPPS CROSS SUNDAY TREASURE MARKET',
    'gepps-cross-sunday-treasure-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'SA 5094',
    '',
    'SA',
    '5094',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '5d74a5a2-6fe7-4d4d-9d22-ece67064c1e4',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BUMPS BUBS & BEYOND MARKETS',
    'bumps-bubs-beyond-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7307',
    '',
    'TAS',
    '7307',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '319f347d-4309-47b2-b0ae-a2a567758d3d',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BREAM CREEK FARMERS MARKET',
    'bream-creek-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Bream Creek TAS 7175',
    'Bream Creek',
    'TAS',
    '7175',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '066c53e1-5e84-42e0-a135-1765aa44d4aa',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Brookfield Twilight Market',
    'brookfield-twilight-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7054',
    '',
    'TAS',
    '7054',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'a37dfb59-d7ec-4cde-9071-9ab299649275',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'All Saints Market',
    'all-saints-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'South Hobart TAS 7004',
    'South Hobart',
    'TAS',
    '7004',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '6033ec91-ba0c-4443-b51f-47f7445c5e90',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'AVALON MARKET',
    'avalon-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7250',
    '',
    'TAS',
    '7250',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '90a3f068-5573-4e14-b4c6-2cc9419039d2',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'DEVONPORT FARMERS MARKET',
    'devonport-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7310',
    '',
    'TAS',
    '7310',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'a2a047d5-6e19-4f24-9f38-e30ecc2d4634',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BRIGHTON MARKET',
    'brighton-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Pontville TAS 7030',
    '',
    'TAS',
    '7030',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '56c2cf71-0ef3-4246-808d-36649f4ee92e',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BUSHY PARK COMMUNITY MARKET',
    'bushy-park-community-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7140',
    '',
    'TAS',
    '7140',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '40d44e8b-c9c0-4d79-a398-5bb32934d0e1',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Deloraine Market',
    'deloraine-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7304',
    '',
    'TAS',
    '7304',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '068aa638-a251-4cbf-b75d-9be95ebeaf9d',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'CLAUDE RD MARKET',
    'claude-rd-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7306',
    '',
    'TAS',
    '7306',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '0660e59f-8e34-4182-8acd-4d5139fb9da2',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'DELORIANE MARKET',
    'deloriane-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7304',
    '',
    'TAS',
    '7304',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'ca86310f-0f7b-4b3a-a3ce-8da06c6dd7e1',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BURNIE FARMERS MARKETS',
    'burnie-farmers-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7320',
    '',
    'TAS',
    '7320',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '924df0f4-b1dd-4328-8783-2865f368256a',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BURNIE FARMERS MARKET & COUNTRY',
    'burnie-farmers-market-country',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7320',
    '',
    'TAS',
    '7320',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '36128bf0-88cb-4426-a99d-7f690b7a61b8',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Cradle Coast Farmers Market',
    'cradle-coast-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7315',
    '',
    'TAS',
    '7315',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '14543aba-bed0-4bbb-ad1b-6d55d6dbe4d4',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'CWA MARKET',
    'cwa-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Bridport TAS 7262',
    'Bridport',
    'TAS',
    '7262',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '3a60e724-838e-4dd1-94e0-319d677e074a',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'DELORANIE MARKET',
    'deloranie-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7304',
    '',
    'TAS',
    '7304',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '24081977-c756-487d-8ab6-409bc666291b',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Devonport Farmers'' Market',
    'devonport-farmers-market-1',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7310',
    '',
    'TAS',
    '7310',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '2d4b797c-0d7b-499d-9116-80c5a2ec6d42',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'AXEMANS MAKERS MARKET',
    'axemans-makers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7307',
    '',
    'TAS',
    '7307',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'e782a4c3-3573-4836-bcb5-031cdd458952',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'CAMPBELL TOWN MARKET',
    'campbell-town-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7210',
    '',
    'TAS',
    '7210',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'c7f9accd-5b91-4411-8eac-11c5d1f309df',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'DON VILLAGE MARKET',
    'don-village-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'TAS 7310',
    '',
    'TAS',
    '7310',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'd4b2db24-5c50-41ca-9c31-31820928c4cf',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'ARARAT TRASH & TREASURE FARMERS MARKET',
    'ararat-trash-treasure-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3377',
    '',
    'VIC',
    '3377',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '9ad9ea15-c200-4f4b-8573-d3af613c7a80',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'A PLUS MARKET',
    'a-plus-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3058',
    '',
    'VIC',
    '3058',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'f060b45c-215b-46ea-90e7-432ec4bac503',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'ALTONA BEACH MARKET',
    'altona-beach-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Altona VIC 3018',
    'Altona',
    'VIC',
    '3018',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '02057e31-c029-49e7-9105-8c2575890a7d',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'ALEXANDRA MARKET',
    'alexandra-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3714',
    '',
    'VIC',
    '3714',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '64dd9267-a05b-477a-ae48-251e77e4c7c9',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'AIREY''S INLET MARKET',
    'aireys-inlet-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3231',
    '',
    'VIC',
    '3231',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '0f671f98-2f18-43c1-9b20-427cf8be239c',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'AKOONAH PARK MARKET',
    'akoonah-park-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Berwick VIC 3806',
    'Berwick',
    'VIC',
    '3806',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '48c40730-eafb-47fc-89bc-01a12bc895c2',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Ballan Farmers Market',
    'ballan-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3342',
    '',
    'VIC',
    '3342',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'a8b01567-260b-409c-8477-2f516967493b',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Abbotsford Convent Farmers Market',
    'abbotsford-convent-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Abbotsford VIC 3067',
    'Abbotsford',
    'VIC',
    '3067',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'fe1a1d67-2c4b-4275-92da-32fd4c0b3ce6',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Bairnsdale Makers Market',
    'bairnsdale-makers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3875',
    '',
    'VIC',
    '3875',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'fe924924-dab1-4a78-8f1c-28e17a402c53',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Pipeworks Market',
    'pipeworks-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Pipeworks Market, 5 Dunstans Court, Thomastown VIC 3074',
    'Thomastown',
    'VIC',
    '3074',
    'Australia',
    -37.6928106,
    145.0164046,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '35216349-40f8-480a-a04b-83e59df2b3ec',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Alphington Farmers Market',
    'alphington-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Alphington VIC 3078',
    'Alphington',
    'VIC',
    '3078',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'ba8d5a03-f595-4c3f-b28a-0de31b24646d',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'ARARAT SEASONAL FARMERS MARKET',
    'ararat-seasonal-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3377',
    '',
    'VIC',
    '3377',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '5951c0a4-d4c2-49e6-bf3a-f34439f54395',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'APOLLO BAY MARKET',
    'apollo-bay-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3233',
    '',
    'VIC',
    '3233',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'd2e0f62b-7489-4a5b-b28f-f31058de5f7f',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Ballan Lions Market',
    'ballan-lions-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3342',
    '',
    'VIC',
    '3342',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '21e44ee4-bf3c-4af9-8b5a-41489d482f61',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'ARTS CENTRE MELBOURNE SUNDAY MARKET',
    'arts-centre-melbourne-sunday-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Southbank VIC 3006',
    'Southbank',
    'VIC',
    '3006',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '3c614ef9-03c7-4406-9cd4-418c29a452be',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'ARARAT TRASH AND TREASURE AND FARMERS MARKET (COMBINED)',
    'ararat-trash-and-treasure-and-farmers-market-combined',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Ararat VIC 3377',
    'Ararat',
    'VIC',
    '3377',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'fb4dcc23-5fda-4b92-8cd9-0996f6597932',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'ASHWOOD FARMERS'' MARKET',
    'ashwood-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3147',
    '',
    'VIC',
    '3147',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'cd74f41a-7de4-4f03-a826-698d51d0d1b2',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BALLARAT BRIDGE MALL FARMERS MARKET',
    'ballarat-bridge-mall-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3350',
    '',
    'VIC',
    '3350',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'a5223481-f1b0-4983-9f2a-dee53f7bc3a7',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'APOLLO BAY FARMERS MARKET',
    'apollo-bay-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Apollo Bay VIC 3233',
    'Apollo Bay',
    'VIC',
    '3233',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '3ea5fb78-7233-4782-acbf-15fcd6acb0c7',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Amber Lane Makers Market',
    'amber-lane-makers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'VIC 3342',
    '',
    'VIC',
    '3342',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '8db40eb4-84bd-4b86-b74d-91d369f8027c',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BODDINGTON COMMUNITY MARKETS',
    'boddington-community-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6390',
    '',
    'WA',
    '6390',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '4364fa52-a1f6-45ba-af98-54e893b4df76',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'CARNARVON COURTYARD CRAFT MARKETS',
    'carnarvon-courtyard-craft-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6701',
    '',
    'WA',
    '6701',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'c8fcc66a-1f2d-4f81-b919-88e3051b7e78',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'CANNING VALE MARKETS',
    'canning-vale-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6155',
    '',
    'WA',
    '6155',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '3845d595-7bda-496f-bcda-d4349258eb6d',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BOYANUP & DISTRICTS FARMERS',
    'boyanup-districts-farmers',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6237',
    '',
    'WA',
    '6237',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '14e25676-36ec-46da-8de4-20ce9c9f222e',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'FREMANTLE MARKETS - rE-Reopens Friday 10th July',
    'fremantle-markets-re-reopens-friday-10th-july',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Fremantle WA 6160',
    '',
    'WA',
    '6160',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'be7a4412-09cf-4958-a88a-6f70e12a2789',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BROOME COURTHOUSE MARKET',
    'broome-courthouse-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Broome WA 6725',
    'Broome',
    'WA',
    '6725',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'da4ba265-73eb-465b-83bc-eafede0b1911',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Bridgetown River Markets',
    'bridgetown-river-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 0625',
    '',
    'WA',
    '0625',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '874e70dc-9e17-4dc8-aaf0-87827098bdc8',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Chidlow Hall Market Day',
    'chidlow-hall-market-day',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'CHIDLOW WA 6556',
    'CHIDLOW',
    'WA',
    '6556',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '4632cdf1-d9c4-4818-be19-c8b51b10ae2a',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'ALBANY FARMERS MARKET',
    'albany-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6330',
    '',
    'WA',
    '6330',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '799fa8e5-a975-4fbd-9bd0-623de6ffb123',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'DONGARA MARKETS',
    'dongara-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6525',
    '',
    'WA',
    '6525',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'c405e5e5-76bd-4116-953e-a4f5d20b63d7',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'E-SHED MARKET FREMANTLE',
    'e-shed-market-fremantle',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6160',
    '',
    'WA',
    '6160',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '85ddb72f-f91d-4691-a25e-a0d2fcc738b1',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Brighton Moonlight Markets',
    'brighton-moonlight-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6036',
    '',
    'WA',
    '6036',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'd7becda6-e210-4f24-8d69-e12fdc84ec19',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BROOM STAIRCASE TO THE MOON NIGHT MARKETS',
    'broom-staircase-to-the-moon-night-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Broome WA 6725',
    'Broome',
    'WA',
    '6725',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '573cef29-ced3-4b36-b157-236f4503bcb2',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Cannington Antique & Collectors Fair',
    'cannington-antique-collectors-fair',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6107',
    '',
    'WA',
    '6107',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'a0f52f49-79c8-4e42-8423-cd7621f22816',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Dampier Beachside Markets',
    'dampier-beachside-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6713',
    '',
    'WA',
    '6713',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '390508e9-7435-41be-982c-25eaa0389fba',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BUSSELTON RAILWAY MARKETS',
    'busselton-railway-markets',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6280',
    '',
    'WA',
    '6280',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '2a3b150b-38cc-4d58-a2c0-97fc70d68ec5',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Bathers Beach Sunset Market',
    'bathers-beach-sunset-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6160',
    '',
    'WA',
    '6160',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    '93035ecf-e2d3-4aae-82cd-1539b2dd027c',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'DENMARK ART and CRAFT MARKET',
    'denmark-art-and-craft-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6333',
    '',
    'WA',
    '6333',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'f35b9a37-1dcf-478f-b073-7f9ab3275118',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'BELMONT WA ROTAMART Weekend Market',
    'belmont-wa-rotamart-weekend-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'Cloverdale WA 6105',
    'Cloverdale',
    'WA',
    '6105',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);
INSERT INTO markets (
    id, owner_id, name, slug, description, address, city, state, postcode, country,
    lat, lng, amenities, requirements, status, created_at, updated_at
) VALUES (
    'dce7bb88-500e-4db5-bf5a-d2e0b39d1cb5',
    '00000000-0000-0000-0000-000000000000',  -- Replace with actual system user UUID
    'Central Park Farmers'' Market',
    'central-park-farmers-market',
    'Australian Markets & Fairs Magazine carries a wealth of information, ideas and articles on all aspects of the market industry in a format available nowhere else, and is uniquely geared to carry display and classified advertising that reaches stallholders and the market-going public.',
    'WA 6000',
    '',
    'WA',
    '6000',
    'Australia',
    NULL,
    NULL,
    '{}'::jsonb,
    '{}'::jsonb,
    'draft',
    NOW(),
    NOW()
);

-- Total: 149 unclaimed markets ready to import
-- Remember to replace '00000000-0000-0000-0000-000000000000' with an actual user UUID before running!

-- After import, organizers can claim markets through your application
-- You may want to add a 'claimed' boolean field or transfer ownership mechanism