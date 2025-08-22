"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState<"password" | "magic-link">("password")
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    if (email === "vendor@demo.com" && password === "vendor123") {
      router.push("/vendor-dashboard")
    } else if (email === "organizer@demo.com" && password === "organizer123") {
      router.push("/organizer-dashboard")
    } else {
      setError("Invalid credentials. Please use the demo accounts provided.")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">M</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Sign in to MarketHub</h1>
          <p className="text-gray-600 mt-2">Enter your email and password to access your account</p>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setLoginMethod("password")}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              loginMethod === "password"
                ? "bg-green-600 text-white"
                : "border border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            Password
          </button>
          <button
            onClick={() => setLoginMethod("magic-link")}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              loginMethod === "magic-link"
                ? "bg-green-600 text-white"
                : "border border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            Magic Link
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleLogin}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-md text-sm">{error}</div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {loginMethod === "password" && (
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors font-medium disabled:opacity-50"
          >
            {isLoading ? "Signing in..." : loginMethod === "password" ? "Sign In" : "Send Magic Link"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Don't have an account? </span>
          <Link href="/register" className="font-medium text-green-600 hover:text-green-500">
            Sign up
          </Link>
        </div>

        <div className="mt-4 text-center">
          <Link href="#" className="text-sm text-gray-600 hover:text-green-600">
            Forgot your password?
          </Link>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 max-w-sm">
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Demo Credentials</h3>
          <p className="text-sm text-blue-700 mb-3">Try the demo with these test accounts:</p>

          <div className="space-y-3">
            <div className="bg-white p-2 rounded border">
              <div className="text-xs font-medium text-green-700 mb-1">🏪 Vendor Account</div>
              <div className="text-xs text-gray-600">
                <div>📧 vendor@demo.com</div>
                <div>🔑 vendor123</div>
              </div>
            </div>

            <div className="bg-white p-2 rounded border">
              <div className="text-xs font-medium text-blue-700 mb-1">🎪 Market Organizer</div>
              <div className="text-xs text-gray-600">
                <div>📧 organizer@demo.com</div>
                <div>🔑 organizer123</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
