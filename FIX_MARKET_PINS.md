# 🗺️ Fix Missing Market Pins on Map

## Problem
The MarketHub website shows "Loading map..." but no market pins appear. This happens because the database is empty - there are no markets to display.

## Root Cause
The API endpoint `/api/markets` returns an empty array:
```json
{"markets":[],"total":0,"page":1,"limit":20}
```

This means the database has no markets, so the interactive map component has nothing to display.

## Solution

### Option 1: Run the Database Population Script (Recommended)

1. **Install dependencies** (if not already done):
   ```bash
   npm install @supabase/supabase-js dotenv
   ```

2. **Set up environment variables** in `.env.local`:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

3. **Run the population script**:
   ```bash
   node populate_sample_markets.js
   ```

This will create:
- ✅ 4 market organizer profiles
- ✅ 5 sample markets across Brisbane/Gold Coast
- ✅ All markets with proper coordinates (lat/lng)
- ✅ Markets marked as 'live' status

### Option 2: Manual SQL Import

If you prefer to run SQL directly in Supabase:

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `create_sample_markets.sql`
4. Run the script

### Option 3: Use Existing SQL Files

The project includes several SQL files for importing markets:
- `create_sample_markets.sql` - 8 sample markets
- `import_australian_markets.sql` - Australian markets data
- `setup_and_import_all.sql` - Complete setup

## Expected Result

After running any of the above solutions, you should see:

1. **API returns markets**: `curl https://markethub-web.vercel.app/api/markets`
   ```json
   {
     "markets": [
       {
         "name": "South Bank Weekend Markets",
         "city": "Brisbane",
         "state": "QLD",
         "lat": -27.4750,
         "lng": 153.0200
       }
       // ... more markets
     ],
     "total": 5,
     "page": 1,
     "limit": 20
   }
   ```

2. **Map shows pins**: The interactive map will display market markers at their coordinates

3. **Homepage works**: Users can search and browse markets

## Verification

Check if markets are now visible:

1. **API endpoint**: `https://markethub-web.vercel.app/api/markets`
2. **Homepage map**: `https://markethub-web.vercel.app/`
3. **Markets page**: `https://markethub-web.vercel.app/markets`

## Troubleshooting

### If markets still don't appear:

1. **Check database connection**: Verify Supabase credentials
2. **Check market status**: Ensure markets have `status = 'live'`
3. **Check coordinates**: Verify `lat` and `lng` are not null
4. **Check API response**: Use browser dev tools to see network requests

### Common issues:

- **Missing environment variables**: Check `.env.local` file
- **Database permissions**: Ensure service role key has write access
- **Market status**: Markets must be 'live' to appear in API
- **Coordinates**: Markets need valid lat/lng for map display

## Next Steps

Once markets are visible:

1. **Add Mapbox token** for full interactive map functionality
2. **Import vendor data** using `import_all_vendors_fixed.sql`
3. **Test search functionality** on the markets page
4. **Verify mobile responsiveness**

## Support

If you continue to have issues:
1. Check the browser console for JavaScript errors
2. Verify the Supabase database has the expected tables
3. Ensure RLS policies allow reading from the markets table
4. Check the deployment logs for any errors
