import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, FileCheck, MapPin, Search } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">MarketHub</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/markets" className="text-gray-600 hover:text-gray-900">
              Apply to markets
            </Link>
            <Link href="/login">
              <Button className="bg-green-600 hover:bg-green-700">Sign in</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">Stallio.</h1>
          <p className="text-2xl text-gray-700 mb-12">Find, Connect, Manage.</p>

          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-full shadow-lg border border-gray-200 p-2 flex items-center">
              <div className="flex-1 flex">
                <div className="flex-1 px-6 py-4 border-r border-gray-200">
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-900 mb-1">Where</div>
                    <input
                      type="text"
                      placeholder="Search in a specific location"
                      className="w-full text-gray-600 placeholder-gray-400 border-none outline-none bg-transparent"
                    />
                  </div>
                </div>
                <div className="flex-1 px-6 py-4 border-r border-gray-200">
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-900 mb-1">What</div>
                    <input
                      type="text"
                      placeholder="Specific"
                      className="w-full text-gray-600 placeholder-gray-400 border-none outline-none bg-transparent"
                    />
                  </div>
                </div>
                <div className="flex-1 px-6 py-4">
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-900 mb-1">Check out</div>
                    <input
                      type="text"
                      placeholder="Add dates"
                      className="w-full text-gray-600 placeholder-gray-400 border-none outline-none bg-transparent"
                    />
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 rounded-full w-14 h-14 p-0 ml-2">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register?role=market_organizer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 rounded-full">
                I'm an organiser
              </Button>
            </Link>
            <Link href="/register?role=vendor">
              <Button size="lg" variant="outline" className="px-8 bg-white border-gray-300 rounded-full">
                I'm a vendor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything you need to manage markets and vendors</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Streamline your market operations with our comprehensive platform designed for both organizers and
              vendors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold">Market Directory</h3>
              </div>
              <p className="text-gray-600">
                Discover local markets in your area with detailed information about schedules, locations, and vendor
                requirements.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold">Document Verification</h3>
              </div>
              <p className="text-gray-600">
                Automated document parsing and validation for licenses, insurance, and compliance documents with OCR
                technology.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold">Application Management</h3>
              </div>
              <p className="text-gray-600">
                Streamlined vendor application process with automated workflows and real-time status updates.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How MarketHub Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How MarketHub Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get started with MarketHub</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* For Market Organizers */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">For Market Organizers</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Create Your Market Profile</h4>
                    <p className="text-gray-600">
                      Set up your market with location, schedule, and vendor requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Receive Applications</h4>
                    <p className="text-gray-600">Vendors apply with pre-verified documents and business information.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Manage Vendors</h4>
                    <p className="text-gray-600">
                      Review, approve, and manage your vendor relationships all in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Vendors */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">For Vendors</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Upload Your Documents</h4>
                    <p className="text-gray-600">
                      Upload licenses, insurance, and business documents for verification.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Discover Markets</h4>
                    <p className="text-gray-600">
                      Browse and search for markets that match your business type and location.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Apply & Get Accepted</h4>
                    <p className="text-gray-600">
                      Submit applications with one click and track your status in real-time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-12">Trusted by Markets and Vendors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-green-100">Active Markets</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2,500+</div>
                <div className="text-green-100">Registered Vendors</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-green-100">Applications Processed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-green-100">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of market organizers and vendors who trust MarketHub to streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/markets">
              <Button size="lg" variant="outline" className="px-8 bg-transparent">
                Browse Markets
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
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
