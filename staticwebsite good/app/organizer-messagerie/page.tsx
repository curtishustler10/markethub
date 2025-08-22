"use client"

import Link from "next/link"
import { useState } from "react"
import { Building2, FileText, Settings, Search, Send, Phone, Video, MoreVertical, ChevronDown } from "lucide-react"

export default function OrganizerMessageriePage() {
  const [selectedMarket, setSelectedMarket] = useState("Downtown Farmers Market")
  const [selectedConversation, setSelectedConversation] = useState("Sarah Martinez")
  const [showVendorInfo, setShowVendorInfo] = useState(true)

  const markets = ["Downtown Farmers Market", "Artisan Craft Fair", "Night Market Special"]

  const conversations = {
    "Downtown Farmers Market": [
      {
        name: "Sarah Martinez",
        lastMessage: "Thanks for approving my application!",
        time: "2h",
        unread: 0,
        status: "online",
      },
      {
        name: "Mike's Bakery",
        lastMessage: "Can I change my stall location?",
        time: "4h",
        unread: 2,
        status: "offline",
      },
      {
        name: "Fresh Valley Produce",
        lastMessage: "Payment confirmation attached",
        time: "1d",
        unread: 0,
        status: "online",
      },
    ],
    "Artisan Craft Fair": [
      {
        name: "Handmade Pottery Co",
        lastMessage: "Looking forward to the event!",
        time: "3h",
        unread: 1,
        status: "online",
      },
      {
        name: "Jewelry by Jane",
        lastMessage: "Do you have power outlets available?",
        time: "6h",
        unread: 0,
        status: "offline",
      },
    ],
    "Night Market Special": [
      {
        name: "Street Food Express",
        lastMessage: "What are the setup requirements?",
        time: "5h",
        unread: 3,
        status: "online",
      },
    ],
  }

  const vendorInfo = {
    "Sarah Martinez": {
      business: "Fresh Farm Produce",
      email: "sarah@freshfarm.com",
      phone: "+1 (555) 123-4567",
      category: "Organic Produce",
      joinDate: "March 2024",
      totalEvents: 12,
      rating: 4.9,
      documents: "Valid",
      payment: "Up to date",
    },
  }

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
              <Link href="/organizer-messagerie" className="text-green-600 font-semibold">
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

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Market Selector & Conversations Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          {/* Market Selector */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <select
                value={selectedMarket}
                onChange={(e) => setSelectedMarket(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                {markets.map((market) => (
                  <option key={market} value={market}>
                    {market}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {conversations[selectedMarket]?.map((conversation) => (
              <div
                key={conversation.name}
                onClick={() => setSelectedConversation(conversation.name)}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                  selectedConversation === conversation.name ? "bg-green-50 border-l-4 border-l-green-500" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-gray-600">
                        {conversation.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                        conversation.status === "online" ? "bg-green-500" : "bg-gray-400"
                      }`}
                    ></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-gray-900 truncate">{conversation.name}</h3>
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && (
                    <div className="w-5 h-5 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">
                      {conversation.unread}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className={`flex-1 flex flex-col ${showVendorInfo ? "mr-80" : ""}`}>
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="font-semibold text-gray-600">
                  {selectedConversation
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">{selectedConversation}</h2>
                <p className="text-sm text-green-600">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                <Phone size={18} />
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                <Video size={18} />
              </button>
              <button
                onClick={() => setShowVendorInfo(!showVendorInfo)}
                className="p-2 text-gray-500 hover:bg-gray-100 rounded-full"
              >
                <MoreVertical size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="max-w-xs bg-white p-3 rounded-lg shadow-sm">
                  <p className="text-sm">
                    Hi! I just submitted my application for the Downtown Farmers Market. When can I expect to hear back?
                  </p>
                  <span className="text-xs text-gray-500 mt-1 block">10:30 AM</span>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="max-w-xs bg-green-600 text-white p-3 rounded-lg">
                  <p className="text-sm">
                    Thanks for your application! I've reviewed it and everything looks great. You're approved!
                  </p>
                  <span className="text-xs text-green-100 mt-1 block">10:45 AM</span>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="max-w-xs bg-white p-3 rounded-lg shadow-sm">
                  <p className="text-sm">Thanks for approving my application! I'm excited to be part of the market.</p>
                  <span className="text-xs text-gray-500 mt-1 block">2 hours ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <button className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Vendor Information Sidebar */}
        {showVendorInfo && vendorInfo[selectedConversation] && (
          <div className="w-80 bg-white border-l border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Vendor Information</h3>

            <div className="space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="font-semibold text-gray-600 text-xl">
                    {selectedConversation
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h4 className="font-semibold">{selectedConversation}</h4>
                <p className="text-sm text-gray-600">{vendorInfo[selectedConversation].business}</p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Contact</label>
                  <p className="text-sm">{vendorInfo[selectedConversation].email}</p>
                  <p className="text-sm">{vendorInfo[selectedConversation].phone}</p>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Category</label>
                  <p className="text-sm">{vendorInfo[selectedConversation].category}</p>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Member Since</label>
                  <p className="text-sm">{vendorInfo[selectedConversation].joinDate}</p>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Events</label>
                  <p className="text-sm">{vendorInfo[selectedConversation].totalEvents}</p>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Rating</label>
                  <p className="text-sm">⭐ {vendorInfo[selectedConversation].rating}/5.0</p>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Documents</label>
                  <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                    {vendorInfo[selectedConversation].documents}
                  </span>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Payment Status</label>
                  <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                    {vendorInfo[selectedConversation].payment}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
