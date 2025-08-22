import Link from "next/link"

export default function VendorDashboardPage() {
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
              <Link href="/vendor-dashboard" className="text-green-600 font-semibold">
                Dashboard
              </Link>
              <Link href="/markets" className="text-gray-600 hover:text-green-600 transition-colors">
                Browse Markets
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                Documents
              </Link>
              <div className="relative">
                <button className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                  👤 Demo Vendor
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Demo Vendor! 👋</h1>
            <p className="text-gray-600">Here's what's happening with your market applications and business.</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Applications</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <span className="text-green-600 text-2xl">📄</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Approved Markets</p>
                  <p className="text-2xl font-bold">2</p>
                </div>
                <span className="text-green-600 text-2xl">⭐</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Documents Status</p>
                  <p className="text-2xl font-bold text-green-600">✓ Valid</p>
                </div>
                <span className="text-green-600 text-2xl">📋</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Profile Views</p>
                  <p className="text-2xl font-bold">127</p>
                </div>
                <span className="text-green-600 text-2xl">👥</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recent Applications */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-900">Recent Applications</h2>
                    <Link
                      href="/markets"
                      className="px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50"
                    >
                      Browse Markets
                    </Link>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Track the status of your market applications</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">Downtown Farmers Market</h3>
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Approved</span>
                      </div>
                      <p className="text-sm text-gray-600">Applied 5 days ago • Response in 2 days</p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">Artisan Craft Fair</h3>
                        <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">Under Review</span>
                      </div>
                      <p className="text-sm text-gray-600">Applied 2 days ago • Expected response in 3-5 days</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Upcoming Market Events</h2>
                  <p className="text-sm text-gray-600 mt-1">Your scheduled market appearances</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="text-green-600 font-bold text-center">
                        <div className="text-sm">JAN</div>
                        <div className="text-2xl">20</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Downtown Farmers Market</h3>
                        <p className="text-sm text-gray-600">Saturday, 8:00 AM - 2:00 PM</p>
                        <p className="text-sm text-gray-600">123 Main St, Downtown</p>
                      </div>
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Confirmed</span>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="text-blue-600 font-bold text-center">
                        <div className="text-sm">JAN</div>
                        <div className="text-2xl">27</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Artisan Craft Fair</h3>
                        <p className="text-sm text-gray-600">Sunday, 10:00 AM - 4:00 PM</p>
                        <p className="text-sm text-gray-600">456 Oak Ave, Midtown</p>
                      </div>
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Pending Setup</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
                </div>
                <div className="p-6 space-y-3">
                  <Link
                    href="/markets"
                    className="block w-full bg-green-600 text-white text-center py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                  >
                    Find New Markets
                  </Link>
                  <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors">
                    Upload Documents
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors">
                    Update Profile
                  </button>
                </div>
              </div>

              {/* Document Status */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Document Status</h3>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Business License</span>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Valid</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Insurance Certificate</span>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Valid</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Health Permit</span>
                    <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">Expires in 45 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Product Menu</span>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Updated</span>
                  </div>
                </div>
              </div>

              {/* Performance Insights */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Application Success Rate</span>
                    <span className="font-semibold text-green-600">85%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Average Response Time</span>
                    <span className="font-semibold">2.3 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Profile Completeness</span>
                    <span className="font-semibold text-green-600">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
