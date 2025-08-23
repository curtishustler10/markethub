'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Users, FileCheck, MapPin, Search, Store, User } from 'lucide-react'
import { LayoutProvider } from '@/components/providers/layout-provider'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import MapWithList from '@/components/ui/map-with-list'

export default function HomePage() {
  const [searchMode, setSearchMode] = useState<'vendor' | 'market'>('market')
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = () => {
    if (!searchQuery.trim()) return
    
    if (searchMode === 'market') {
      router.push(`/markets?search=${encodeURIComponent(searchQuery)}`)
    } else {
      // For vendor search, we'll redirect to markets page for now
      // TODO: Implement dedicated vendor search page
      router.push(`/markets?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <LayoutProvider showHeader={true} showFooter={true}>
      <div className="min-h-screen bg-background">
        <main>
          {/* Hero Section */}
          <section className="py-20 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Markets meet Vendors. Effortlessly.</h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">Find the right market to sell at—or discover verified vendors for your market.</p>
                
                <div className="flex justify-center items-center bg-white p-2 rounded-lg shadow-md max-w-xl mx-auto mb-6">
                  <div className="flex border border-gray-200 rounded-md">
                    <button 
                      onClick={() => setSearchMode('vendor')}
                      className={`px-4 py-2 rounded-l-md font-semibold whitespace-nowrap transition-all duration-200 ${
                        searchMode === 'vendor' 
                          ? 'bg-green-600 text-white shadow-sm' 
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      Find a Vendor
                    </button>
                    <button 
                      onClick={() => setSearchMode('market')}
                      className={`px-4 py-2 rounded-r-md font-semibold whitespace-nowrap transition-all duration-200 ${
                        searchMode === 'market' 
                          ? 'bg-green-600 text-white shadow-sm' 
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      Find a Market
                    </button>
                  </div>
                  <div className="flex-grow relative ml-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input 
                      className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200" 
                      placeholder={searchMode === 'market' ? 'Search for markets by name or location' : 'Search for vendors by category or name'}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                  </div>
                  <Button 
                    onClick={handleSearch}
                    className="ml-2 bg-green-600 hover:bg-green-700 px-6"
                    disabled={!searchQuery.trim()}
                  >
                    Search
                  </Button>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full mb-6">
                  {searchMode === 'market' ? (
                    <><Store className="mr-2 w-4 h-4" /><span>Searching Markets</span></>
                  ) : (
                    <><User className="mr-2 w-4 h-4" /><span>Searching Vendors</span></>
                  )}
                </div>
                <MapWithList 
                  searchMode={searchMode}
                  searchQuery={searchQuery}
                  className="w-full"
                />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything you need to manage markets and vendors</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Streamline your market operations with our comprehensive platform designed for both organizers and
                vendors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold">Market Directory</h3>
                </div>
                <p className="text-gray-600">
                  Discover local markets in your area with detailed information about schedules, locations, and vendor
                  requirements.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileCheck className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold">Document Verification</h3>
                </div>
                <p className="text-gray-600">
                  Automated document parsing and validation for licenses, insurance, and compliance documents with OCR
                  technology.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold">Application Management</h3>
                </div>
                <p className="text-gray-600">
                  Streamlined vendor application process with automated workflows and real-time status updates.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <Store className="text-3xl text-green-600 mr-4 w-8 h-8" />
                  <h3 className="text-2xl font-semibold text-gray-900">For Market Organizers</h3>
                </div>
                <p className="text-gray-600">Publish your market, receive applications, or proactively contact vetted vendors.</p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <User className="text-3xl text-green-600 mr-4 w-8 h-8" />
                  <h3 className="text-2xl font-semibold text-gray-900">For Vendors</h3>
                </div>
                <p className="text-gray-600">Browse markets, verify your documents once, and apply with confidence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Markets & Vendors</h2>
            <p className="text-gray-600 mb-12">Join our growing community.</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600">4.8 <span className="text-yellow-400">★</span></p>
                <p className="text-gray-600 mt-1">Average Rating</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600">50+</p>
                <p className="text-gray-600 mt-1">Active Markets</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600">500+</p>
                <p className="text-gray-600 mt-1">Registered Vendors</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900">How does MarketHub work for vendors?</h3>
                <p className="text-gray-600 mt-2">Vendors can create a profile, upload documents for verification (like insurance or permits), browse a directory of markets, and apply to them with a single click.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900">What are the benefits for market organizers?</h3>
                <p className="text-gray-600 mt-2">Organizers can list their market to attract vendors, manage applications in one place, and search a database of pre-vetted vendors to invite to their events, saving time and ensuring quality.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900">Is my data secure?</h3>
                <p className="text-gray-600 mt-2">Yes, we use industry-standard security practices to protect all user data and documents. Your privacy and security are our top priorities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of market organizers and vendors who trust MarketHub to streamline their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register?role=market_organizer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8">
                  I'm an Organizer
                </Button>
              </Link>
              <Link href="/auth/register?role=vendor">
                <Button size="lg" variant="outline" className="px-8 bg-white border-gray-300">
                  I'm a Vendor
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      </div>
    </LayoutProvider>
  )
}