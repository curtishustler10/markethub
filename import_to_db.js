/**
 * Script to import Australian markets data into the database
 * Run this in the browser console on your deployed MarketHub app
 * or use it as a Node.js script with proper Supabase credentials
 */

// Sample data structure - replace with your actual data
const sampleMarkets = [
  {
    name: "CAPITAL REGION FARMERS MARKET",
    description: "Australian Markets & Fairs Magazine carries a wealth of information...",
    address: "ACT 2600",
    city: "",
    state: "ACT", 
    postcode: "2600",
    country: "Australia",
    lat: null,
    lng: null
  }
  // ... more markets would be here
];

async function importMarkets() {
  console.log('Starting import of Australian markets...');
  
  try {
    // First, create or get the market organizer profile
    const organizerResponse = await fetch('/api/organizer/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Australian Markets Scraped Data',
        email: 'scraped.markets@markethub.com.au', 
        phone: '+61400000000'
      })
    });
    
    if (!organizerResponse.ok) {
      console.warn('Organizer profile might already exist or authentication required');
    }
    
    // Import markets one by one
    let imported = 0;
    let errors = 0;
    
    for (const market of sampleMarkets) {
      try {
        const response = await fetch('/api/markets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: market.name,
            description: market.description || '',
            address: market.address || '',
            city: market.city || market.state, // Use state as city if no city
            state: market.state || '',
            postcode: market.postcode || '',
            country: market.country || 'Australia',
            lat: market.lat || undefined,
            lng: market.lng || undefined,
            amenities: {},
            requirements: {}
          })
        });
        
        if (response.ok) {
          imported++;
          console.log(`✅ Imported: ${market.name}`);
        } else {
          errors++;
          const error = await response.text();
          console.warn(`❌ Failed to import ${market.name}: ${error}`);
        }
        
        // Small delay to avoid overwhelming the API
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (error) {
        errors++;
        console.error(`❌ Error importing ${market.name}:`, error);
      }
    }
    
    console.log(`\n📊 Import Summary:`);
    console.log(`✅ Successfully imported: ${imported} markets`);
    console.log(`❌ Errors: ${errors}`);
    
  } catch (error) {
    console.error('❌ Import failed:', error);
  }
}

// If running in Node.js, you would need to load the actual CSV data
// and replace sampleMarkets with the real data

console.log('🚀 Australian Markets Import Script Ready');
console.log('ℹ️  This is a sample script. You need to:');
console.log('1. Replace sampleMarkets with your actual CSV data');
console.log('2. Run this on your deployed MarketHub app with authentication');
console.log('3. Or use the SQL import method for direct database access');
console.log('\n💡 To start import, run: importMarkets()');

// Export for use in Node.js
if (typeof module !== 'undefined') {
  module.exports = { importMarkets };
}