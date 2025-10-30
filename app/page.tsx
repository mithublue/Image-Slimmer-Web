import PublicUploader from '@/components/PublicUploader'
import Link from 'next/link'
import { Zap, Shield, TrendingUp, Code } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Speed Up Your WooCommerce Store
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Convert your images to WebP format and reduce file sizes by up to 80%.
              <span className="font-semibold text-primary-700"> Get 500 free conversions every month!</span>
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/register"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 font-medium text-lg transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/dashboard"
                className="bg-white text-primary-700 border-2 border-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 font-medium text-lg transition-colors"
              >
                View Dashboard
              </Link>
            </div>
          </div>

          {/* Try It Now Section */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Try It Now - No Sign Up Required
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              Upload an image and see the magic happen instantly
            </p>
            <PublicUploader />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose WebP Converter?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Reduce image sizes by up to 80% without losing quality. Your site loads faster, ranking higher on Google.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                Converted images expire after 10 minutes. We never permanently store your data.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SEO Optimized</h3>
              <p className="text-gray-600">
                Faster page loads mean better Google rankings. WebP is recommended by Google PageSpeed Insights.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Integration</h3>
              <p className="text-gray-600">
                Simple REST API for WooCommerce plugins and bulk conversion tools. Get your API key instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Start with our generous free tier. Perfect for small WooCommerce stores.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary-500">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Forever</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-primary-600">500</span>
                  <span className="text-gray-600 ml-2">conversions/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  500 conversions per month
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  API access with unique key
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Up to 10MB per image
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No credit card required
                </li>
              </ul>
              <Link
                href="/register"
                className="block w-full bg-primary-600 text-white text-center py-3 rounded-lg hover:bg-primary-700 font-medium transition-colors"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Speed Up Your WooCommerce Store?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of e-commerce stores optimizing their images with WebP
          </p>
          <Link
            href="/register"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-100 font-medium text-lg transition-colors"
          >
            Start Converting for Free
          </Link>
        </div>
      </section>
    </div>
  )
}
