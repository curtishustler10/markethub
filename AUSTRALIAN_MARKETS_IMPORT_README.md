# Australian Markets Import Script

## Overview

This SQL script imports real Australian markets from the `australian_markets.csv` file into the MarketHub database. It creates 24 authentic markets across all Australian states and territories, complete with proper organizer profiles, coordinates, and sample events.

## What This Script Does

### 1. Creates Market Organizer Profiles
- **10 Organizer Profiles** covering all Australian states/territories:
  - Northern Territory Markets Association (Darwin)
  - ACT Capital Markets Group (Canberra) 
  - Queensland Markets Collective (Brisbane)
  - Gold Coast Markets Network
  - Sunshine Coast Markets Co-op
  - Sydney Markets Alliance (NSW)
  - Western Australia Markets Group (Perth)
  - South Australia Markets Inc (Adelaide)
  - Tasmania Markets Association (Hobart)
  - Victoria Markets Federation (Melbourne)

### 2. Imports 24 Real Australian Markets
Based on the CSV data, including famous markets like:
- **Mindil Beach Sunset Markets** (Darwin, NT)
- **Salamanca Market** (Hobart, TAS) 
- **Fremantle Markets** (Fremantle, WA)
- **Adelaide Central Market** (Adelaide, SA)
- **Old Bus Depot Markets** (Canberra, ACT)
- **Sydney Fish Market** (Sydney, NSW)
- **Brisbane City Markets** (Brisbane, QLD)
- And many more authentic Australian markets

### 3. Adds Geographic Data
- Proper latitude/longitude coordinates for each city
- Accurate addresses where known
- Proper Australian postcodes and state abbreviations

### 4. Creates Sample Events
- 8 upcoming events across major markets
- Realistic timing (markets typically run mornings/evenings)
- Proper timezone handling for Australian Eastern Time

### 5. Market Features & Amenities
Each market includes realistic amenities based on their type:
- **Parking, toilets, power, water** availability
- **Special features** like waterfront access, historic buildings, etc.
- **Requirements** like food licenses, public liability, etc.

## Database Structure Compliance

The script fully respects the existing database structure:

### Markets Table Fields
- ✅ **id**: Auto-generated with 'au-market-' prefix
- ✅ **owner_id**: Links to appropriate state organizer
- ✅ **name**: Exact names from CSV
- ✅ **slug**: Auto-generated URL-friendly slugs
- ✅ **description**: Detailed descriptions from CSV
- ✅ **address**: Realistic Australian addresses
- ✅ **city/state/postcode**: Proper Australian location data
- ✅ **lat/lng**: Accurate coordinates for major cities
- ✅ **amenities**: JSON object with market facilities
- ✅ **requirements**: JSON object with vendor requirements
- ✅ **status**: All set to 'live' (ready to accept vendors)

### Events Table Fields (Enhanced)
Uses the upgraded events table structure:
- ✅ **title**: Descriptive event names
- ✅ **start_at/end_at**: Proper timestamps with realistic times
- ✅ **all_day**: Set to false with specific hours
- ✅ **location**: Specific venue details
- ✅ **visibility**: All public events

## How to Use

### Prerequisites
1. Database with the initial schema applied
2. Events table upgrade migration applied
3. Supabase connection available

### Running the Script

#### Option 1: Direct SQL Execution
```sql
-- Connect to your Supabase database and run:
\i /path/to/import_australian_markets.sql
```

#### Option 2: Supabase CLI
```bash
supabase db reset --db-url "your-database-url"
cat import_australian_markets.sql | supabase db push --db-url "your-database-url"
```

#### Option 3: Copy & Paste
Copy the SQL content and paste it into your Supabase SQL editor.

### Verification
The script includes verification queries at the end:
- Shows total markets created
- Lists markets by state
- Displays upcoming events

Expected output:
```
IMPORT SUMMARY: 24 markets, 8 states/territories, 10 organizers
```

## Sample Data Created

### Markets by State/Territory:
- **NT**: 5 markets (Darwin area)
- **ACT**: 7 markets (Canberra area) 
- **QLD**: 4 markets (Brisbane area)
- **NSW**: 3 markets (Sydney area)
- **WA**: 2 markets (Fremantle area)
- **SA**: 1 market (Adelaide)
- **TAS**: 1 market (Hobart)
- **VIC**: 1 market (Melbourne area)

### Market Types Covered:
- 🌅 **Sunset/Evening Markets** (Mindil Beach)
- 🥕 **Farmers Markets** (Capital Region, Carseldine)
- 🎨 **Arts & Crafts Markets** (Old Bus Depot, Handmade)
- 🐟 **Specialty Markets** (Sydney Fish Market)
- 🏛️ **Historic Markets** (Fremantle, Salamanca)
- 🌏 **Multicultural Markets** (Parap Village)
- 🏙️ **City Centre Markets** (Brisbane City)

## Features Included

### Realistic Market Characteristics
- **Operating schedules** based on real market days
- **Venue types** (outdoor, indoor, historic buildings)
- **Specialty focuses** (organic, artisan, seafood, etc.)
- **Tourist vs. local** market classifications

### Australian Context
- **Proper timezone handling** (Australia/Brisbane)
- **Australian address formats**
- **Local phone number formats**
- **State-specific organizer contacts**

### Vendor-Ready Markets
All markets are set to 'live' status and ready to:
- Accept vendor applications
- Display in the public market directory
- Host events and manage calendars
- Support the full MarketHub workflow

## Integration with MarketHub

This data integrates seamlessly with all MarketHub features:

### For Market Organizers
- ✅ Ready-to-use market profiles
- ✅ Events management system available
- ✅ Vendor application processing ready
- ✅ Profile management functional

### For Vendors
- ✅ 24 markets available for applications
- ✅ Geographic diversity across Australia
- ✅ Various market types and focuses
- ✅ Realistic requirements and amenities

### For the Platform
- ✅ Geographic search functionality
- ✅ Market directory population
- ✅ Event calendar functionality
- ✅ Application matching system

## Notes

- All email addresses use example.com domain (update for production)
- Phone numbers follow Australian format but are fictional
- Coordinates are accurate for the cities/areas mentioned
- Market descriptions are based on real market information
- Some addresses are generalized (update with exact addresses if needed)

## Next Steps

After running this script, you can:
1. **Update contact details** with real organizer information
2. **Add more specific addresses** for exact market locations
3. **Create additional events** using the events management system
4. **Test vendor applications** to these markets
5. **Customize market requirements** based on local regulations

This provides a solid foundation of realistic Australian market data for testing and demonstration of the MarketHub platform.
