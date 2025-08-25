-- Markets data for NSW scraped from marketsandfairs.com.au
-- Generated on 2025-08-24 15:48:33

-- Insert market organizer profile for scraped data
INSERT INTO profiles (id, role, name, email, phone, created_at, updated_at)
VALUES ('org-scraped-nsw', 'market_organizer', 'NSW Markets Scraped Data', 'scraped.nsw@example.com', '+61400000000', NOW(), NOW())
ON CONFLICT (id) DO NOTHING;

-- Insert scraped markets
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
    status,
    created_at,
    updated_at
) VALUES
    ('scraped-nsw-001', 'org-scraped-nsw', 'BERRY RESERVE MARKET', 'berry-reserve-market', '', '', '', 'NSW', 'None', 'Australia', 'live', NOW(), NOW()),
    ('scraped-nsw-002', 'org-scraped-nsw', 'BONDI BEACH COMMUNITY MARKET', 'bondi-beach-community-market', '', '', '', 'NSW', 'None', 'Australia', 'live', NOW(), NOW()),
    ('scraped-nsw-003', 'org-scraped-nsw', 'Italian Forum Twilight Market', 'italian-forum-twilight-market', '', '', '', 'NSW', 'None', 'Australia', 'live', NOW(), NOW()),
    ('scraped-nsw-004', 'org-scraped-nsw', 'Lugarno Lions Community Fair 21st September 2025 (Previously Spring Festival)', 'lugarno-lions-community-fair-21st-september-2025-previously-spring-festival', '', '', '', 'NSW', 'None', 'Australia', 'live', NOW(), NOW()),
    ('scraped-nsw-005', 'org-scraped-nsw', 'Penrith Trash and Treasure Market', 'penrith-trash-and-treasure-market', '', '', '', 'NSW', 'None', 'Australia', 'live', NOW(), NOW()),
    ('scraped-nsw-006', 'org-scraped-nsw', 'Sydney City Night Market', 'sydney-city-night-market', '', '', '', 'NSW', 'None', 'Australia', 'live', NOW(), NOW()),
    ('scraped-nsw-007', 'org-scraped-nsw', 'The Concourse Artisan Market', 'the-concourse-artisan-market', '', '', '', 'NSW', 'None', 'Australia', 'live', NOW(), NOW()),
    ('scraped-nsw-008', 'org-scraped-nsw', 'Wednesday Pickers Bazaar', 'wednesday-pickers-bazaar', '', '', '', 'NSW', 'None', 'Australia', 'live', NOW(), NOW()),
    ('scraped-nsw-009', 'org-scraped-nsw', '@The HUB Markets', 'the-hub-markets', '', '', '', 'NSW', 'None', 'Australia', 'live', NOW(), NOW()),
    ('scraped-nsw-010', 'org-scraped-nsw', 'ADAMSTOWN MARKET', 'adamstown-market', '', '', '', 'NSW', 'None', 'Australia', 'live', NOW(), NOW()),
    ('scraped-nsw-011', 'org-scraped-nsw', 'Arcadia Market', 'arcadia-market', '', '', '', 'NSW', 'None', 'Australia', 'live', NOW(), NOW()),
    ('scraped-nsw-012', 'org-scraped-nsw', 'ARMIDALE MARKET', 'armidale-market', '', '', '', 'NSW', 'None', 'Australia', 'live', NOW(), NOW()),
    ('scraped-nsw-013', 'org-scraped-nsw', 'ART ON THE LEVEE - WAGGA', 'art-on-the-levee---wagga', '', '', '', 'NSW', 'None', 'Australia', 'live', NOW(), NOW()),
    ('scraped-nsw-014', 'org-scraped-nsw', 'ASHBY MARKET', 'ashby-market', '', '', '', 'NSW', 'None', 'Australia', 'live', NOW(), NOW()),
    ('scraped-nsw-015', 'org-scraped-nsw', 'AVOCA BEACHSIDE MARKETS', 'avoca-beachside-markets', '', '', '', 'NSW', 'None', 'Australia', 'live', NOW(), NOW()),
    ('scraped-nsw-016', 'org-scraped-nsw', 'BALLINA MARKET - returning on 19th July 2020', 'ballina-market---returning-on-19th-july-2020', '', '', '', 'NSW', 'None', 'Australia', 'live', NOW(), NOW()),
    ('scraped-nsw-017', 'org-scraped-nsw', 'BALMAIN MARKET', 'balmain-market', '', '', '', 'NSW', 'None', 'Australia', 'live', NOW(), NOW()),
    ('scraped-nsw-018', 'org-scraped-nsw', 'BANGALOW FARMERS MARKET', 'bangalow-farmers-market', '', '', '', 'NSW', 'None', 'Australia', 'live', NOW(), NOW()),
    ('scraped-nsw-019', 'org-scraped-nsw', 'BANGALOW VILLAGE MARKET', 'bangalow-village-market', '', '', '', 'NSW', 'None', 'Australia', 'live', NOW(), NOW()),
    ('scraped-nsw-020', 'org-scraped-nsw', 'BANKSTOWN SUNDAY MARKETS & BARGAIN BAZAAR', 'bankstown-sunday-markets-bargain-bazaar', '', '', '', 'NSW', 'None', 'Australia', 'live', NOW(), NOW())
ON CONFLICT (id) DO NOTHING;