import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Users, FileCheck, Star } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-green-600">MarketHub</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/markets" className="text-gray-600 hover:text-green-600">
              Find Markets
            </Link>
            <Link href="/auth/login" className="text-gray-600 hover:text-green-600">
              Sign In
            </Link>
            <Button asChild>
              <Link href="/auth/register">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Connect Local Markets with Quality Vendors
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              MarketHub simplifies vendor management for market organizers and makes it easy for vendors to discover and apply to local markets with pre-verified documents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/auth/register?role=market_organizer">
                  I'm a Market Organizer
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/auth/register?role=vendor">
                  I'm a Vendor
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How MarketHub Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>For Market Organizers</CardTitle>
                  <CardDescription>
                    Create your market profile, upload required documents, and review vendor applications with confidence.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Set up your market profile</li>
                    <li>• Define vendor requirements</li>
                    <li>• Review pre-verified applications</li>
                    <li>• Manage vendor communications</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <FileCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>Document Verification</CardTitle>
                  <CardDescription>
                    Automatic verification of licenses, insurance, and compliance documents with expiry tracking.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• OCR document parsing</li>
                    <li>• Automatic expiry tracking</li>
                    <li>• Email notifications</li>
                    <li>• Compliance monitoring</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>For Vendors</CardTitle>
                  <CardDescription>
                    Discover local markets, complete your profile once, and apply to multiple markets seamlessly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Find markets near you</li>
                    <li>• One-time profile setup</li>
                    <li>• Quick market applications</li>
                    <li>• Track application status</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Trusted by Markets Across Australia
            </h2>
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-2xl font-bold">4.8</span>
                <span className="text-gray-600">Average Rating</span>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-gray-600">Active Markets</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-gray-600">Registered Vendors</div>
              </div>
            </div>
            <Button size="lg" asChild>
              <Link href="/markets">Browse Markets</Link>
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join MarketHub today and streamline your market operations or discover new opportunities for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/auth/register">Create Account</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/markets">Explore Markets</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">MarketHub</span>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/support" className="text-gray-400 hover:text-white">
                Support
              </Link>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 MarketHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}