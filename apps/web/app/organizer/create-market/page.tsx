'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { useToast } from '@/components/ui/use-toast'
import { ArrowLeft, MapPin, Calendar, Users, FileText, AlertCircle, ExternalLink } from 'lucide-react'
import { DashboardShell } from '@/components/dashboard/dashboard-shell'
import Link from 'next/link'

export default function CreateMarketPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    city: '',
    state: '',
    postcode: '',
    country: 'Australia',
    lat: '',
    lng: '',
    amenities: {
      parking: false,
      toilets: false,
      power: false,
      water: false,
      waste_disposal: false,
      security: false,
      first_aid: false,
      storage: false
    },
    requirements: {
      public_liability: false,
      food_licence: false,
      business_registration: false,
      product_insurance: false
    }
  })

  // Nearby markets state
  const [nearbyMarkets, setNearbyMarkets] = useState([])
  const [isLoadingNearby, setIsLoadingNearby] = useState(false)
  const [showClaimModal, setShowClaimModal] = useState(false)
  const [selectedMarket, setSelectedMarket] = useState(null)

  const australianStates = [
    { value: 'NSW', label: 'New South Wales' },
    { value: 'VIC', label: 'Victoria' },
    { value: 'QLD', label: 'Queensland' },
    { value: 'WA', label: 'Western Australia' },
    { value: 'SA', label: 'South Australia' },
    { value: 'TAS', label: 'Tasmania' },
    { value: 'ACT', label: 'Australian Capital Territory' },
    { value: 'NT', label: 'Northern Territory' }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [amenity]: checked
      }
    }))
  }

  const handleRequirementChange = (requirement: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      requirements: {
        ...prev.requirements,
        [requirement]: checked
      }
    }))
  }

  // Check for nearby unclaimed markets
  const checkNearbyMarkets = useCallback(async (lat: number, lng: number) => {
    if (!lat || !lng) return
    
    setIsLoadingNearby(true)
    try {
      const response = await fetch(`/api/markets/nearby-unclaimed?lat=${lat}&lng=${lng}&radius=5`)
      const data = await response.json()
      
      if (response.ok && data.markets) {
        setNearbyMarkets(data.markets)
      } else {
        setNearbyMarkets([])
      }
    } catch (error) {
      console.error('Error fetching nearby markets:', error)
      setNearbyMarkets([])
    } finally {
      setIsLoadingNearby(false)
    }
  }, [])

  // Effect to check nearby markets when coordinates change
  useEffect(() => {
    const lat = parseFloat(formData.lat)
    const lng = parseFloat(formData.lng)
    
    if (lat && lng) {
      checkNearbyMarkets(lat, lng)
    } else {
      setNearbyMarkets([])
    }
  }, [formData.lat, formData.lng, checkNearbyMarkets])

  const handleClaimMarket = (market: any) => {
    setSelectedMarket(market)
    setShowClaimModal(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Convert coordinates to numbers if provided
      const marketData = {
        ...formData,
        lat: formData.lat ? parseFloat(formData.lat) : undefined,
        lng: formData.lng ? parseFloat(formData.lng) : undefined,
      }

      const response = await fetch('/api/markets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(marketData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create market')
      }

      toast({
        title: "Market created!",
        description: `${formData.name} has been successfully created.`,
      })

      // Redirect to markets page or specific market page
      router.push('/organizer/markets')
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || 'Failed to create market',
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <DashboardShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/organizer/markets">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Markets
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Create New Market</h1>
            <p className="text-muted-foreground">
              Set up your farmers market to start accepting vendor applications.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Basic Information
              </CardTitle>
              <CardDescription>
                Provide the essential details about your market.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Market Name *</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Brisbane Riverside Farmers Market"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <select
                    id="state"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    required
                  >
                    <option value="">Select state...</option>
                    {australianStates.map(state => (
                      <option key={state.value} value={state.value}>
                        {state.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your market, what makes it special, and what vendors/visitors can expect..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Location Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Location Details
              </CardTitle>
              <CardDescription>
                Help vendors and visitors find your market.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Street Address *</Label>
                <Input
                  id="address"
                  placeholder="e.g., 123 Main Street or Brisbane City Park"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City/Suburb *</Label>
                  <Input
                    id="city"
                    placeholder="e.g., Brisbane"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postcode">Postcode</Label>
                  <Input
                    id="postcode"
                    placeholder="e.g., 4000"
                    value={formData.postcode}
                    onChange={(e) => handleInputChange('postcode', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    disabled
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="lat">Latitude (Optional)</Label>
                  <Input
                    id="lat"
                    type="number"
                    step="any"
                    placeholder="e.g., -27.4698"
                    value={formData.lat}
                    onChange={(e) => handleInputChange('lat', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lng">Longitude (Optional)</Label>
                  <Input
                    id="lng"
                    type="number"
                    step="any"
                    placeholder="e.g., 153.0251"
                    value={formData.lng}
                    onChange={(e) => handleInputChange('lng', e.target.value)}
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                💡 Tip: You can find coordinates by searching your location on Google Maps and clicking to get lat/lng coordinates.
              </p>
            </CardContent>
          </Card>

          {/* Nearby Unclaimed Markets */}
          {(nearbyMarkets.length > 0 || isLoadingNearby) && (
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <AlertCircle className="w-5 h-5" />
                  Nearby Unclaimed Markets
                </CardTitle>
                <CardDescription className="text-orange-700">
                  We found {nearbyMarkets.length} unclaimed market{nearbyMarkets.length !== 1 ? 's' : ''} within 5km of your location. 
                  You can claim an existing market instead of creating a new one.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoadingNearby ? (
                  <div className="text-center py-4 text-orange-600">
                    Checking for nearby markets...
                  </div>
                ) : (
                  <div className="space-y-3">
                    {nearbyMarkets.map((market: any) => (
                      <div key={market.id} className="flex items-start justify-between p-4 bg-white rounded-lg border border-orange-200">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{market.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {market.address}, {market.city}, {market.state}
                          </p>
                          <p className="text-sm text-orange-600 mt-1">
                            {market.distance?.toFixed(1)}km away
                          </p>
                          {market.description && (
                            <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                              {market.description}
                            </p>
                          )}
                        </div>
                        <div className="ml-4 flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleClaimMarket(market)}
                          >
                            Claim Market
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Amenities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Market Amenities
              </CardTitle>
              <CardDescription>
                Select the facilities available at your market.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries({
                  parking: 'Parking Available',
                  toilets: 'Public Toilets',
                  power: 'Power Supply',
                  water: 'Water Access',
                  waste_disposal: 'Waste Disposal',
                  security: 'Security',
                  first_aid: 'First Aid',
                  storage: 'Storage Facilities'
                }).map(([key, label]) => (
                  <div key={key} className="flex items-center space-x-2">
                    <Checkbox
                      id={key}
                      checked={formData.amenities[key as keyof typeof formData.amenities]}
                      onCheckedChange={(checked) => handleAmenityChange(key, checked as boolean)}
                    />
                    <Label htmlFor={key} className="text-sm font-normal">
                      {label}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Vendor Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Vendor Requirements
              </CardTitle>
              <CardDescription>
                Select the documents/certifications vendors need to participate.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries({
                  public_liability: 'Public Liability Insurance',
                  food_licence: 'Food Handling License',
                  business_registration: 'Business Registration',
                  product_insurance: 'Product Insurance'
                }).map(([key, label]) => (
                  <div key={key} className="flex items-center space-x-2">
                    <Checkbox
                      id={key}
                      checked={formData.requirements[key as keyof typeof formData.requirements]}
                      onCheckedChange={(checked) => handleRequirementChange(key, checked as boolean)}
                    />
                    <Label htmlFor={key} className="text-sm font-normal">
                      {label}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" asChild>
              <Link href="/organizer/markets">Cancel</Link>
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Creating Market...' : 'Create Market'}
            </Button>
          </div>
        </form>

        {/* Claim Market Modal */}
        {showClaimModal && selectedMarket && (
          <ClaimMarketModal 
            market={selectedMarket}
            onClose={() => {
              setShowClaimModal(false)
              setSelectedMarket(null)
            }}
            onSuccess={() => {
              setShowClaimModal(false)
              setSelectedMarket(null)
              toast({
                title: "Claim submitted!",
                description: "Your market claim request has been submitted for review.",
              })
            }}
          />
        )}
      </div>
    </DashboardShell>
  )
}

// Simple claim modal component
function ClaimMarketModal({ market, onClose, onSuccess }: {
  market: any
  onClose: () => void
  onSuccess: () => void
}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [claimData, setClaimData] = useState({
    businessName: '',
    businessAddress: '',
    contactPhone: '',
    experience: '',
    reason: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/markets/claim', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          marketId: market.id,
          ...claimData
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to submit claim')
      }

      onSuccess()
    } catch (error: any) {
      console.error('Error submitting claim:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <Card>
          <CardHeader>
            <CardTitle>Claim Market: {market.name}</CardTitle>
            <CardDescription>
              Submit your request to claim ownership of this market. This will be reviewed by our admin team.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium">Market Details</h4>
                <p className="text-sm text-gray-600 mt-1">
                  {market.address}, {market.city}, {market.state}
                </p>
                <p className="text-sm text-gray-500 mt-2">{market.description}</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name *</Label>
                <Input
                  id="businessName"
                  value={claimData.businessName}
                  onChange={(e) => setClaimData(prev => ({ ...prev, businessName: e.target.value }))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessAddress">Business Address</Label>
                <Input
                  id="businessAddress"
                  value={claimData.businessAddress}
                  onChange={(e) => setClaimData(prev => ({ ...prev, businessAddress: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPhone">Contact Phone</Label>
                <Input
                  id="contactPhone"
                  type="tel"
                  value={claimData.contactPhone}
                  onChange={(e) => setClaimData(prev => ({ ...prev, contactPhone: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Market Management Experience</Label>
                <Textarea
                  id="experience"
                  placeholder="Describe your experience with managing markets, events, or similar..."
                  value={claimData.experience}
                  onChange={(e) => setClaimData(prev => ({ ...prev, experience: e.target.value }))}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Claiming *</Label>
                <Textarea
                  id="reason"
                  placeholder="Why do you want to claim this market? What are your plans..."
                  value={claimData.reason}
                  onChange={(e) => setClaimData(prev => ({ ...prev, reason: e.target.value }))}
                  rows={4}
                  required
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Claim Request'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}