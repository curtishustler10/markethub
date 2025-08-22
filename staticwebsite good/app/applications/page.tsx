import Link from "next/link"
import { Building2, Settings, FileText, Search, Filter, Eye, Check, X } from "lucide-react"

export default function ApplicationsPage() {
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
              <Link href="/organizer-dashboard" className="text-gray-600 hover:text-green-600 transition-colors">
                Dashboard
              </Link>
              <Link
                href="/my-markets"
                className="text-gray-600 hover:text-green-600 transition-colors flex items-center gap-2"
              >
                <Building2 size={16} />
                My Markets
              </Link>
              <Link href="/applications" className="text-green-600 font-semibold flex items-center gap-2">
                <FileText size={16} />
                Applications
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
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Vendor Applications</h1>
                <p className="text-gray-600">Review and manage vendor applications across all your markets</p>
              </div>
              <div className="flex gap-3">
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                  Bulk Approve
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                  Export Data
                </button>
              </div>
            </div>

            {/* Filters and Search */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search applications..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <select className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>All Markets</option>
                  <option>Downtown Farmers Market</option>
                  <option>Artisan Craft Fair</option>
                  <option>Night Market Special</option>
                </select>
                <select className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                </select>
                <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  <Filter size={20} />
                </button>
              </div>
            </div>

            {/* Status Tabs */}
            <div className="flex gap-1 mb-6">
              <button className="px-4 py-2 bg-orange-100 text-orange-800 rounded-md font-semibold">Pending (12)</button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">Approved (156)</button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">Rejected (23)</button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">All (191)</button>
            </div>
          </div>

          {/* Applications List */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-3 px-6 font-semibold text-gray-900">Vendor</th>
                    <th className="text-left py-3 px-6 font-semibold text-gray-900">Market</th>
                    <th className="text-left py-3 px-6 font-semibold text-gray-900">Category</th>
                    <th className="text-left py-3 px-6 font-semibold text-gray-900">Applied</th>
                    <th className="text-left py-3 px-6 font-semibold text-gray-900">Status</th>
                    <th className="text-left py-3 px-6 font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="font-semibold text-blue-600 text-sm">FV</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Fresh Valley Produce</div>
                          <div className="text-sm text-gray-600">freshvalley@email.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-900">Downtown Farmers Market</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Organic Produce</span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">2 days ago</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded">Pending</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <button className="p-1 text-gray-600 hover:text-blue-600 transition-colors">
                          <Eye size={16} />
                        </button>
                        <button className="p-1 text-gray-600 hover:text-green-600 transition-colors">
                          <Check size={16} />
                        </button>
                        <button className="p-1 text-gray-600 hover:text-red-600 transition-colors">
                          <X size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="font-semibold text-purple-600 text-sm">HP</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Handmade Pottery Co</div>
                          <div className="text-sm text-gray-600">pottery@email.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-900">Artisan Craft Fair</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded">Ceramics</span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">1 day ago</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded">Pending</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <button className="p-1 text-gray-600 hover:text-blue-600 transition-colors">
                          <Eye size={16} />
                        </button>
                        <button className="p-1 text-gray-600 hover:text-green-600 transition-colors">
                          <Check size={16} />
                        </button>
                        <button className="p-1 text-gray-600 hover:text-red-600 transition-colors">
                          <X size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                          <span className="font-semibold text-yellow-600 text-sm">SB</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Sunrise Bakery</div>
                          <div className="text-sm text-gray-600">sunrise@email.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-900">Downtown Farmers Market</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">Baked Goods</span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">3 days ago</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded">Pending</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <button className="p-1 text-gray-600 hover:text-blue-600 transition-colors">
                          <Eye size={16} />
                        </button>
                        <button className="p-1 text-gray-600 hover:text-green-600 transition-colors">
                          <Check size={16} />
                        </button>
                        <button className="p-1 text-gray-600 hover:text-red-600 transition-colors">
                          <X size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-600">Showing 1 to 10 of 12 applications</div>
              <div className="flex gap-2">
                <button
                  className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                  disabled
                >
                  Previous
                </button>
                <button className="px-3 py-1 bg-green-600 text-white rounded-md">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
