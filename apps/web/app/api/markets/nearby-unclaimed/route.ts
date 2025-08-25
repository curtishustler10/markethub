import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// Calculate distance between two points in kilometers
function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const lat = parseFloat(searchParams.get('lat') || '0')
    const lng = parseFloat(searchParams.get('lng') || '0')
    const radius = parseInt(searchParams.get('radius') || '5') // Default 5km

    if (!lat || !lng) {
      return NextResponse.json(
        { error: 'Latitude and longitude are required' },
        { status: 400 }
      )
    }

    const supabase = createClient()

    // Get all unclaimed markets (no owner)
    const { data: unclaimedMarkets, error } = await supabase
      .from('markets')
      .select('*')
      .is('owner_id', null)
      .eq('status', 'draft')
      .not('lat', 'is', null)
      .not('lng', 'is', null)

    if (error) {
      throw error
    }

    // Filter by distance
    const nearbyMarkets = unclaimedMarkets
      ?.filter(market => {
        const distance = getDistanceFromLatLonInKm(lat, lng, market.lat!, market.lng!)
        return distance <= radius
      })
      .map(market => ({
        ...market,
        distance: getDistanceFromLatLonInKm(lat, lng, market.lat!, market.lng!)
      }))
      .sort((a, b) => a.distance - b.distance) || []

    return NextResponse.json({
      markets: nearbyMarkets,
      total: nearbyMarkets.length,
      center: { lat, lng },
      radius
    })
  } catch (error) {
    console.error('Error fetching nearby unclaimed markets:', error)
    return NextResponse.json(
      { error: 'Failed to fetch nearby unclaimed markets' },
      { status: 500 }
    )
  }
}