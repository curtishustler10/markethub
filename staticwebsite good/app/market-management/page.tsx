"use client"

import Link from "next/link"
import { useState } from "react"
import { Building2, FileText, Settings, Edit, ChevronLeft, ChevronRight, Plus } from "lucide-react"

export default function MarketManagementPage() {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [calendarView, setCalendarView] = useState("week") // 'week', 'month', '3day'

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
          {/* Market Header */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="relative h-48 md:h-64 bg-gray-200">
              <img alt="Market cover photo" className="w-full h-full object-cover" src="/outdoor-farmers-market.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <button className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-900 px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
                <Edit size={16} />
                Edit
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900">Downtown Farmers Market</h2>
                  <p className="mt-2 text-gray-600 max-w-3xl">
                    Join us for a vibrant weekend of fresh produce, artisanal goods, and community fun. Located in the
                    heart of Anytown, this market brings together local farmers, food vendors, and craftspeople.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1.5">📍 123 Main Street, Anytown, USA</span>
                    <span className="flex items-center gap-1.5">⏰ Saturdays, 9:00 AM - 1:00 PM</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowEditModal(true)}
                  className="ml-4 px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                >
                  <Edit size={16} />
                  Edit Info
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Market Calendar</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex border border-gray-300 rounded-md">
                      <button
                        onClick={() => setCalendarView("3day")}
                        className={`px-3 py-1 text-sm ${calendarView === "3day" ? "bg-green-600 text-white" : "text-gray-600 hover:bg-gray-50"}`}
                      >
                        3 Day
                      </button>
                      <button
                        onClick={() => setCalendarView("week")}
                        className={`px-3 py-1 text-sm border-l border-gray-300 ${calendarView === "week" ? "bg-green-600 text-white" : "text-gray-600 hover:bg-gray-50"}`}
                      >
                        Week
                      </button>
                      <button
                        onClick={() => setCalendarView("month")}
                        className={`px-3 py-1 text-sm border-l border-gray-300 ${calendarView === "month" ? "bg-green-600 text-white" : "text-gray-600 hover:bg-gray-50"}`}
                      >
                        Month
                      </button>
                    </div>
                    <button className="p-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                      <ChevronLeft size={16} />
                    </button>
                    <button className="p-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                      <ChevronRight size={16} />
                    </button>
                    <button className="px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center gap-2">
                      <Plus size={16} />
                      Add Event
                    </button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-7 gap-2 mb-2">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 35 }, (_, i) => {
                      const date = i - 6 + 15 // Starting from Aug 15
                      const isToday = date === 15
                      const hasEvent = [15, 22, 29].includes(date)

                      return (
                        <div
                          key={i}
                          className={`aspect-square p-2 rounded-md text-sm ${
                            date < 1 || date > 31
                              ? "text-gray-300"
                              : isToday
                                ? "bg-green-600 text-white"
                                : hasEvent
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-white text-gray-900 hover:bg-gray-100"
                          } cursor-pointer flex items-center justify-center relative`}
                        >
                          {date > 0 && date <= 31 ? date : ""}
                          {hasEvent && (
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-current rounded-full"></div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Market Plan */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 relative">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Market Plan</h3>
                  <p className="text-sm text-gray-600 mt-1">Stall locations for the upcoming market day.</p>
                </div>
                <div className="h-96 bg-gray-100 rounded-b-lg relative">
                  <img
                    alt="Interactive map of market stalls"
                    className="w-full h-full object-cover rounded-b-lg blur-sm"
                    src="/market-layout-map.png"
                  />
                  <div
                    className="absolute inset-0 bg-black/10 flex items-center justify-center cursor-pointer"
                    onClick={() => setShowUpgradeModal(true)}
                  >
                    <div className="text-center">
                      <span className="text-4xl text-green-600 mb-2 block">🔒</span>
                      <p className="text-sm font-medium text-gray-900">Premium Feature</p>
                      <p className="text-xs text-gray-600">Click to upgrade</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scheduled Vendors */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900">Scheduled Vendors</h3>
                  <p className="text-sm text-gray-600 mt-1">Vendors scheduled for the next market event.</p>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="p-4 hover:bg-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="font-semibold text-green-600">FF</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Fresh Farm Produce</p>
                        <a href="#" className="text-sm text-green-600 hover:underline">
                          freshfarm.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 justify-end flex-wrap">
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Docs Valid</span>
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Paid</span>
                      <button className="text-gray-400 hover:text-gray-600">⋮</button>
                    </div>
                  </div>

                  <div className="p-4 hover:bg-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                        <span className="font-semibold text-orange-600">AB</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Artisan Breads Co.</p>
                        <a href="#" className="text-sm text-green-600 hover:underline">
                          @artisanbreads
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 justify-end flex-wrap">
                      <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">Docs Pending</span>
                      <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded">Unpaid</span>
                      <button className="text-gray-400 hover:text-gray-600">⋮</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Vendor Applications */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Vendor Applications</h3>
                <p className="text-sm text-gray-600 mt-1">New requests from vendors to join.</p>
              </div>
              <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                <div className="p-4 hover:bg-gray-50 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="font-semibold text-purple-600">CC</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Crafty Creations</p>
                        <a href="#" className="text-sm text-green-600 hover:underline">
                          craftycreations.etsy.com
                        </a>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Submitted</span>
                  </div>
                  <div className="flex justify-end gap-2">
                    <button className="px-3 py-1.5 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition-colors">
                      Reject
                    </button>
                    <button className="px-3 py-1.5 text-xs font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors">
                      Accept
                    </button>
                  </div>
                </div>

                <div className="p-4 hover:bg-gray-50 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                        <span className="font-semibold text-yellow-600">HB</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Honey Bee Farms</p>
                        <a href="#" className="text-sm text-green-600 hover:underline">
                          @honeybeefarms
                        </a>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Docs Valid</span>
                  </div>
                  <div className="flex justify-end gap-2">
                    <button className="px-3 py-1.5 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition-colors">
                      Reject
                    </button>
                    <button className="px-3 py-1.5 text-xs font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors">
                      Accept
                    </button>
                  </div>
                </div>

                <div className="p-6 text-center text-gray-600">
                  <div className="flex flex-col items-center">
                    <span className="text-5xl text-gray-400 mb-2">📥</span>
                    <p className="font-medium">No new applications</p>
                    <p className="text-sm">You've reviewed all incoming requests.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Vendors Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">All Vendors</h3>
                  <p className="text-sm text-gray-600 mt-1">Manage all vendors associated with this market.</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                    <input
                      className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder="Search vendors..."
                      type="text"
                    />
                  </div>
                  <button className="p-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">🔽</button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Vendor</th>
                    <th className="px-6 py-3">Link</th>
                    <th className="px-6 py-3">Document Status</th>
                    <th className="px-6 py-3">
                      Billing Status <span className="text-xs text-gray-500">(Pro)</span>
                    </th>
                    <th className="px-6 py-3">
                      Reliability Score <span className="text-xs text-gray-500">(Pro)</span>
                    </th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">The Salty Pretzel</th>
                    <td className="px-6 py-4">
                      <a href="#" className="text-green-600 hover:underline">
                        thesaltypretzel.com
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Valid</span>
                    </td>
                    <td className="px-6 py-4 relative">
                      <div className="blur-sm">
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Up to Date</span>
                      </div>
                      <div
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => setShowUpgradeModal(true)}
                      >
                        <span className="text-green-600">🔒</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 relative">
                      <div className="blur-sm">
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">95%</span>
                      </div>
                      <div
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => setShowUpgradeModal(true)}
                      >
                        <span className="text-green-600">🔒</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                          📧
                        </button>
                        <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                          ✏️
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-white border-b hover:bg-gray-50">
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Pete's Pizza Palace</th>
                    <td className="px-6 py-4">
                      <a href="#" className="text-green-600 hover:underline">
                        @petespizza
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded">Expired</span>
                    </td>
                    <td className="px-6 py-4 relative">
                      <div className="blur-sm">
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Up to Date</span>
                      </div>
                      <div
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => setShowUpgradeModal(true)}
                      >
                        <span className="text-green-600">🔒</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 relative">
                      <div className="blur-sm">
                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">78%</span>
                      </div>
                      <div
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => setShowUpgradeModal(true)}
                      >
                        <span className="text-green-600">🔒</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                          📧
                        </button>
                        <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">
                          ✏️
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Edit Market Info Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Edit Market Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Market Name</label>
                <input
                  type="text"
                  defaultValue="Downtown Farmers Market"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  defaultValue="Join us for a vibrant weekend of fresh produce, artisanal goods, and community fun. Located in the heart of Anytown, this market brings together local farmers, food vendors, and craftspeople."
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    defaultValue="123 Main Street, Anytown, USA"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Schedule</label>
                  <input
                    type="text"
                    defaultValue="Saturdays, 9:00 AM - 1:00 PM"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowEditModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowEditModal(false)}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center">
            <div className="mb-6">
              <span className="text-6xl text-green-600 mb-4 block">⭐</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Upgrade to Pro!</h2>
              <p className="text-gray-600">Unlock premium features to manage your markets like a pro.</p>
            </div>

            <div className="space-y-4 mb-6 text-left">
              <div className="flex items-center gap-3">
                <span className="text-green-600">✅</span>
                <span className="text-sm">Advanced Market Planning & Layout Tools</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600">✅</span>
                <span className="text-sm">Real-time Billing Status Tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600">✅</span>
                <span className="text-sm">Vendor Reliability Scoring System</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600">✅</span>
                <span className="text-sm">Priority Support & Analytics</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowUpgradeModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Maybe Later
              </button>
              <button
                onClick={() => {
                  alert("Redirecting to upgrade page...")
                  setShowUpgradeModal(false)
                }}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
              >
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
