"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState<"market_organizer" | "vendor" | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const roleParam = searchParams.get("role") as "market_organizer" | "vendor"
    if (roleParam) {
      setSelectedRole(roleParam)
    }
  }, [searchParams])

  const benefits = {
    market_organizer: [
      "Streamlined vendor application management",
      "Automated document verification",
      "Real-time application tracking",
      "Email notification system",
      "Vendor performance analytics",
    ],
    vendor: [
      "Discover new market opportunities",
      "One-click applications with verified docs",
      "Application status tracking",
      "Document expiry reminders",
      "Market recommendation engine",
    ],
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">M</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Create your MarketHub account</h1>
          <p className="text-gray-600 mt-2">Join thousands of market organizers and vendors</p>
        </div>

        {/* Registration Form */}
        <form className="space-y-4">
          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">I am a...</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedRole("market_organizer")}
                className={`text-left p-4 rounded-md border-2 transition-colors ${
                  selectedRole === "market_organizer"
                    ? "border-green-600 bg-green-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <div className="font-semibold mb-1">Market Organizer</div>
                <div className="text-sm text-gray-600">I manage farmers markets, craft fairs, or festivals</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole("vendor")}
                className={`text-left p-4 rounded-md border-2 transition-colors ${
                  selectedRole === "vendor" ? "border-green-600 bg-green-50" : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <div className="font-semibold mb-1">Vendor</div>
                <div className="text-sm text-gray-600">I sell products at markets and events</div>
              </button>
            </div>
          </div>

          {/* Personal Information */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Business Information (shown for vendors) */}
          {selectedRole === "vendor" && (
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                Business Name
              </label>
              <input
                id="businessName"
                name="businessName"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your business name"
              />
            </div>
          )}

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="Create a password (min. 8 characters)"
              required
              minLength={8}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="Confirm your password"
              required
              minLength={8}
            />
          </div>

          {/* Terms and Privacy */}
          <div>
            <label className="flex items-start gap-3">
              <input type="checkbox" required className="mt-1" />
              <span className="text-sm text-gray-600">
                I agree to the{" "}
                <Link href="#" className="text-green-600 hover:text-green-500">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-green-600 hover:text-green-500">
                  Privacy Policy
                </Link>
              </span>
            </label>
          </div>

          <div>
            <label className="flex items-start gap-3">
              <input type="checkbox" />
              <span className="text-sm text-gray-600">Send me updates about new markets and features (optional)</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors font-medium"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Already have an account? </span>
          <Link href="/login" className="font-medium text-green-600 hover:text-green-500">
            Sign in
          </Link>
        </div>
      </div>

      {/* Role Benefits */}
      {selectedRole && (
        <div className="fixed bottom-4 left-4 max-w-sm">
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">
              {selectedRole === "market_organizer" ? "Organizer Benefits" : "Vendor Benefits"}
            </h3>
            <ul className="text-sm text-green-700 space-y-1">
              {benefits[selectedRole].map((benefit, index) => (
                <li key={index}>• {benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
