import Link from "next/link"

export default function MarketsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900">MarketHub</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/markets" className="text-green-600 font-semibold">
                Find Markets
              </Link>
              <Link href="/login" className="text-gray-600 hover:text-green-600 transition-colors">
                Sign In
              </Link>
              <Link
                href="/register"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Join MarketHub
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Page Header */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Local Markets</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find farmers markets, craft fairs, and food festivals in your area. Apply with confidence using your
                pre-verified documents.
              </p>
            </div>

            {/* Search Filters */}
            <div className="max-w-4xl mx-auto">
              
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-[ao]">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-3xl mb-2">🔍</div>
                <h3 className="font-semibold">Find markets</h3>
                <p className="text-sm text-gray-600">In a click, find the local markets near you</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-3xl mb-2">📧</div>
                <h3 className="font-semibold">Apply</h3>
                <p className="text-sm text-gray-600">Market applications just made easier,send application and get approuve</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-3xl mb-2">🫱🏻‍🫲🏾</div>
                <h3 className="font-semibold">Collaborate</h3>
                <p className="text-sm text-gray-600">Get seen by event organizer and manage your offers in one plateform</p>
              </div>
            </div>
        </section>

        {/* Markets Layout with Sidebar and Map */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Available Markets</h2>
                <p className="text-gray-600">3 markets found</p>
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                  📋 List View
                </button>
                <button className="px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-700">
                  ⊞ Grid View
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Sidebar - Markets List */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Markets Near You</h3>
                    <p className="text-sm text-gray-600">Closest markets first</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <h4 className="font-semibold text-gray-900">Downtown Farmers Market</h4>
                        <p className="text-sm text-gray-600">Saturdays, 8:00 AM - 2:00 PM</p>
                        <p className="text-sm text-gray-600">123 Main St, Downtown</p>
                        <div className="mt-2 flex gap-2">
                          <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Organic</span>
                          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Local</span>
                        </div>
                      </div>

                      <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <h4 className="font-semibold text-gray-900">Artisan Craft Fair</h4>
                        <p className="text-sm text-gray-600">Sundays, 10:00 AM - 4:00 PM</p>
                        <p className="text-sm text-gray-600">456 Oak Ave, Midtown</p>
                        <div className="mt-2 flex gap-2">
                          <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded">Handmade</span>
                          <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">Arts</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Interactive Map */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">Interactive Map</h3>
                      <button className="px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-700">
                        📍 Near Me
                      </button>
                    </div>
                    <p className="text-sm text-gray-600">Click on markets to see details</p>
                  </div>
                  <div className="p-6">
                    <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-4">🗺️</div>
                        <p className="text-gray-600 mb-2">Interactive Map Loading...</p>
                        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                          Load Map
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Market Categories</h2>
              <p className="text-xl text-gray-600">Explore different types of markets available on MarketHub</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-3xl mb-2">🥕</div>
                <h3 className="font-semibold">Farmers Markets</h3>
                <p className="text-sm text-gray-600">Fresh produce & local goods</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-3xl mb-2">🎨</div>
                <h3 className="font-semibold">Craft Fairs</h3>
                <p className="text-sm text-gray-600">Handmade arts & crafts</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-3xl mb-2">🍕</div>
                <h3 className="font-semibold">Food Festivals</h3>
                <p className="text-sm text-gray-600">Culinary experiences</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-3xl mb-2">💎</div>
                <h3 className="font-semibold">Jewelry Shows</h3>
                <p className="text-sm text-gray-600">Fine & handmade jewelry</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-3xl mb-2">🎪</div>
                <h3 className="font-semibold">Street Fairs</h3>
                <p className="text-sm text-gray-600">Community celebrations</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-3xl mb-2">🏺</div>
                <h3 className="font-semibold">Artisan Markets</h3>
                <p className="text-sm text-gray-600">Unique handcrafted items</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't see your perfect market?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              New markets are added regularly. Create your vendor profile now and get notified when markets matching
              your criteria become available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register?role=vendor"
                className="bg-green-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Create Vendor Profile
              </Link>
              <Link
                href="#"
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Request Market Addition
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <span className="text-xl font-bold">MarketHub</span>
              </div>
              <p className="text-gray-400">
                Connecting local markets with quality vendors through innovative technology.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/markets" className="hover:text-white">
                    Find Markets
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MarketHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
