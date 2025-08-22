import Link from "next/link"
import { Settings, Building2, FileText, Eye } from "lucide-react"

export default function OrganizerDashboardPage() {
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
              <Link href="/organizer-dashboard" className="text-green-600 font-semibold">
                Dashboard
              </Link>
              <Link
                href="/my-markets"
                className="text-gray-600 hover:text-green-600 transition-colors flex items-center gap-2"
              >
                <Building2 size={16} />
                My Markets
              </Link>
              <Link
                href="/applications"
                className="text-gray-600 hover:text-green-600 transition-colors flex items-center gap-2"
              >
                <FileText size={16} />
                Applications
              </Link>
              <Link href="/organizer-messagerie" className="text-gray-600 hover:text-green-600 transition-colors">
                Messages
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors flex items-center gap-2">
                <Settings size={16} />
              </Link>
              <div className="relative">
                <button className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                  👤 Demo Organizer
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section with View Calendar Button */}
          <div className="mb-8 flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Demo Organizer! 👋</h1>
              <p className="text-gray-600">Here's an overview of your markets and recent activity.</p>
            </div>
            <Link
              href="/market-management"
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              <Eye size={16} />
              View Calendar
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Stats Cards in 2x2 grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Markets</p>
                    <p className="text-2xl font-bold">3</p>
                  </div>
                  <span className="text-blue-600 text-2xl">🏪</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Vendors</p>
                    <p className="text-2xl font-bold">95</p>
                  </div>
                  <span className="text-green-600 text-2xl">👥</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pending Applications</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <span className="text-orange-600 text-2xl">📋</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Applications</p>
                    <p className="text-2xl font-bold">247</p>
                  </div>
                  <span className="text-purple-600 text-2xl">⏰</span>
                </div>
              </div>
            </div>

            {/* My Markets Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">My Markets</h3>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-sm">Downtown Farmers Market</h4>
                    <p className="text-xs text-gray-600">45 active vendors</p>
                  </div>
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Active</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-sm">Artisan Craft Fair</h4>
                    <p className="text-xs text-gray-600">30 active vendors</p>
                  </div>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Active</span>
                </div>
              </div>
            </div>

            {/* Recent Activity Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
                <p className="text-sm text-gray-600 mt-1">Latest updates across your markets</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm">
                        <strong>Sarah Martinez</strong> was approved for Downtown Farmers Market
                      </p>
                      <p className="text-xs text-gray-600">2 hours ago</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm">
                        New application received for <strong>Artisan Craft Fair</strong>
                      </p>
                      <p className="text-xs text-gray-600">4 hours ago</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm">Document expiry reminder sent to 3 vendors</p>
                      <p className="text-xs text-gray-600">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events and Pending Applications sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">📅 Upcoming Events</h2>
                <p className="text-sm text-gray-600 mt-1">Your scheduled market events</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 border-l-4 border-green-500 bg-green-50">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">15</div>
                      <div className="text-xs text-gray-600">AUG</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Downtown Farmers Market</h4>
                      <p className="text-sm text-gray-600">8:00 AM - 2:00 PM • Main Street Plaza</p>
                      <p className="text-xs text-green-600">45 vendors confirmed</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 border-l-4 border-blue-500 bg-blue-50">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">22</div>
                      <div className="text-xs text-gray-600">AUG</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Artisan Craft Fair</h4>
                      <p className="text-sm text-gray-600">10:00 AM - 6:00 PM • Community Center</p>
                      <p className="text-xs text-blue-600">30 vendors confirmed</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 border-l-4 border-purple-500 bg-purple-50">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">29</div>
                      <div className="text-xs text-gray-600">AUG</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Night Market Special</h4>
                      <p className="text-sm text-gray-600">5:00 PM - 10:00 PM • Riverside Park</p>
                      <p className="text-xs text-purple-600">20 vendors confirmed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Pending Applications</h2>
                  <p className="text-sm text-gray-600 mt-1">Review and approve vendor applications</p>
                </div>
                <span className="px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded">12 new</span>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">FV</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Fresh Valley Produce</h4>
                        <p className="text-sm text-gray-600">Downtown Farmers Market • Applied 2 days ago</p>
                        <div className="flex gap-2 mt-1">
                          <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Organic Produce</span>
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">Local</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
                        Review
                      </button>
                      <button className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">
                        Approve
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-semibold">HP</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Handmade Pottery Co</h4>
                        <p className="text-sm text-gray-600">Artisan Craft Fair • Applied 1 day ago</p>
                        <div className="flex gap-2 mt-1">
                          <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded">Ceramics</span>
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">Handmade</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
                        Review
                      </button>
                      <button className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">
                        Approve
                      </button>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <Link href="/applications" className="text-green-600 hover:text-green-700 font-medium text-sm">
                      View All Applications
                    </Link>
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
