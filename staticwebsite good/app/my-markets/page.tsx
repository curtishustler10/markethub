import Link from "next/link"
import { Building2, Settings, FileText, Users, Calendar, DollarSign, Eye } from "lucide-react"

export default function MyMarketsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
              <Link href="/organizer-dashboard" className="text-gray-600 hover:text-green-600 transition-colors">
                Dashboard
              </Link>
              <Link href="/my-markets" className="text-green-600 font-semibold flex items-center gap-2">
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
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">My Markets</h1>
                <p className="text-gray-600">Manage and monitor your market operations</p>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                Create New Market
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Downtown Farmers Market - Updated design */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 relative">
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 text-xs bg-white text-green-800 rounded font-semibold">Active</span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Downtown Farmers Market</h3>
                  <p className="text-green-100 text-sm">Main Street Plaza</p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                      <Users size={16} />
                      <span className="text-xs">Vendors</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">45</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                      <FileText size={16} />
                      <span className="text-xs">Requests</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">3</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                      <DollarSign size={16} />
                      <span className="text-xs">Revenue</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">$2.4k</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                      <span className="text-xs">Status</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mb-1"></div>
                      <span className="text-xs text-orange-600 font-medium">needs attention</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Calendar size={16} />
                  <span>Next Event: Aug 15, 8:00 AM</span>
                </div>
                <div className="flex gap-2">
                  <Link
                    href="/market-management"
                    className="flex-1 bg-green-600 text-white text-center py-2 px-3 rounded-md hover:bg-green-700 transition-colors text-sm"
                  >
                    Manage
                  </Link>
                  <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    <Eye size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Artisan Craft Fair - Updated design */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative">
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 text-xs bg-white text-blue-800 rounded font-semibold">Active</span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Artisan Craft Fair</h3>
                  <p className="text-blue-100 text-sm">Community Center</p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                      <Users size={16} />
                      <span className="text-xs">Vendors</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">30</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                      <FileText size={16} />
                      <span className="text-xs">Requests</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">1</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                      <DollarSign size={16} />
                      <span className="text-xs">Revenue</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">$1.8k</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                      <span className="text-xs">Status</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mb-1"></div>
                      <span className="text-xs text-green-600 font-medium">all good</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Calendar size={16} />
                  <span>Next Event: Aug 22, 10:00 AM</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white text-center py-2 px-3 rounded-md hover:bg-blue-700 transition-colors text-sm">
                    Manage
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    <Eye size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Night Market Special - Updated design */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 relative">
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 text-xs bg-white text-purple-800 rounded font-semibold">Upcoming</span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Night Market Special</h3>
                  <p className="text-purple-100 text-sm">Riverside Park</p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                      <Users size={16} />
                      <span className="text-xs">Vendors</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">20</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                      <FileText size={16} />
                      <span className="text-xs">Requests</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">0</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                      <DollarSign size={16} />
                      <span className="text-xs">Revenue</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">$0</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-600 mb-1">
                      <span className="text-xs">Status</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mb-1"></div>
                      <span className="text-xs text-blue-600 font-medium">preparing</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Calendar size={16} />
                  <span>Next Event: Aug 29, 5:00 PM</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-purple-600 text-white text-center py-2 px-3 rounded-md hover:bg-purple-700 transition-colors text-sm">
                    Manage
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    <Eye size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
