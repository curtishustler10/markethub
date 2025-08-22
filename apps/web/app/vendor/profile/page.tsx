'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { User, Save, Camera, Upload, FileText } from 'lucide-react'
import { DashboardShell } from '@/components/dashboard/dashboard-shell'

export default function VendorProfilePage() {
  const [profile, setProfile] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    website: '',
    description: '',
    category: '',
    address: '',
    city: '',
    state: '',
    postcode: '',
    abn: '',
    siteSize: '3x3',
    powerRequired: false,
    waterRequired: false
  })
  
  const [documents, setDocuments] = useState([
    { type: 'food_licence', uploaded: false, required: true },
    { type: 'public_liability', uploaded: false, required: true },
    { type: 'abn_certificate', uploaded: false, required: false }
  ])
  
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      // TODO: Implement profile update API call
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch (error) {
      console.error('Error saving profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const categories = [
    'Fresh Produce', 'Baked Goods', 'Artisan Foods', 'Beverages',
    'Crafts & Gifts', 'Plants & Flowers', 'Prepared Foods', 'Other'
  ]

  const siteSizes = ['3x3', '3x6', '6x3', '6x6', '9x3', 'Custom']

  return (
    <DashboardShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Vendor Profile</h1>
          <p className="text-muted-foreground">
            Manage your vendor profile and business information for market applications.
          </p>
        </div>

        <div className="grid gap-6">
          {/* Profile Photo Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5" />
                Business Logo & Photos
              </CardTitle>
              <CardDescription>
                Upload your business logo and photos of your products or stall setup.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <Button variant="outline" size="sm">
                    Upload Logo
                  </Button>
                  <p className="text-sm text-muted-foreground mt-1">
                    JPG, PNG up to 2MB
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-medium mb-2">Product Photos</h4>
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-200">
                      <Upload className="w-6 h-6 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Information */}
          <Card>
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
              <CardDescription>
                Your business details and contact information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      value={profile.businessName}
                      onChange={(e) => setProfile(prev => ({ ...prev, businessName: e.target.value }))}
                      placeholder="Your business name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="ownerName">Owner/Contact Name *</Label>
                    <Input
                      id="ownerName"
                      value={profile.ownerName}
                      onChange={(e) => setProfile(prev => ({ ...prev, ownerName: e.target.value }))}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="(07) 1234 5678"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Business Category *</Label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={profile.category}
                      onChange={(e) => setProfile(prev => ({ ...prev, category: e.target.value }))}
                      required
                    >
                      <option value="">Select category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="abn">ABN (if applicable)</Label>
                    <Input
                      id="abn"
                      value={profile.abn}
                      onChange={(e) => setProfile(prev => ({ ...prev, abn: e.target.value }))}
                      placeholder="12 345 678 901"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    type="url"
                    value={profile.website}
                    onChange={(e) => setProfile(prev => ({ ...prev, website: e.target.value }))}
                    placeholder="https://yourbusiness.com"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Business Description *</Label>
                  <Textarea
                    id="description"
                    value={profile.description}
                    onChange={(e) => setProfile(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe your business, products, and what makes you unique..."
                    rows={4}
                    required
                  />
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Market Requirements */}
          <Card>
            <CardHeader>
              <CardTitle>Market Requirements</CardTitle>
              <CardDescription>
                Your typical requirements for market stalls.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="siteSize">Preferred Site Size</Label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={profile.siteSize}
                    onChange={(e) => setProfile(prev => ({ ...prev, siteSize: e.target.value }))}
                  >
                    {siteSizes.map(size => (
                      <option key={size} value={size}>{size} meters</option>
                    ))}
                  </select>
                </div>

                <div className="flex gap-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={profile.powerRequired}
                      onChange={(e) => setProfile(prev => ({ ...prev, powerRequired: e.target.checked }))}
                      className="rounded"
                    />
                    <span>Power required</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={profile.waterRequired}
                      onChange={(e) => setProfile(prev => ({ ...prev, waterRequired: e.target.checked }))}
                      className="rounded"
                    />
                    <span>Water access required</span>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Location */}
          <Card>
            <CardHeader>
              <CardTitle>Business Location</CardTitle>
              <CardDescription>
                Your business address (used for application processing).
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="address">Street Address</Label>
                  <Input
                    id="address"
                    value={profile.address}
                    onChange={(e) => setProfile(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="123 Business Street"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={profile.city}
                      onChange={(e) => setProfile(prev => ({ ...prev, city: e.target.value }))}
                      placeholder="Brisbane"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={profile.state}
                      onChange={(e) => setProfile(prev => ({ ...prev, state: e.target.value }))}
                      placeholder="QLD"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="postcode">Postcode *</Label>
                    <Input
                      id="postcode"
                      value={profile.postcode}
                      onChange={(e) => setProfile(prev => ({ ...prev, postcode: e.target.value }))}
                      placeholder="4000"
                      required
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Required Documents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Required Documents
              </CardTitle>
              <CardDescription>
                Upload the necessary documents for market applications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documents.map((doc) => (
                  <div key={doc.type} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="font-medium">
                          {doc.type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          {doc.required && <span className="text-red-500 ml-1">*</span>}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {doc.type === 'food_licence' && 'Current food handling/business licence'}
                          {doc.type === 'public_liability' && 'Public liability insurance certificate'}
                          {doc.type === 'abn_certificate' && 'Australian Business Number certificate'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {doc.uploaded ? (
                        <Badge className="bg-green-100 text-green-800">Uploaded</Badge>
                      ) : (
                        <Badge variant="outline">Not uploaded</Badge>
                      )}
                      <Button variant="outline" size="sm">
                        {doc.uploaded ? 'Replace' : 'Upload'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button 
              onClick={handleSave}
              disabled={loading}
              className="min-w-[100px]"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Saving...
                </>
              ) : saved ? (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Saved!
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Profile
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}