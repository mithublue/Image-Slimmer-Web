'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { Key, TrendingUp, Copy, CheckCircle, LogOut, Loader2 } from 'lucide-react'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

interface User {
  id: string
  email: string
  apiKey: string | null
  plan: string
  monthlyCredits: number
  creditsUsed: number
  creditsRemaining: number
}

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token')
        if (!token) {
          router.push('/login')
          return
        }

        const response = await axios.get(`${API_URL}/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        setUser(response.data)
      } catch (error) {
        console.error('Failed to fetch user data:', error)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        router.push('/login')
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [router])

  const handleCopyApiKey = () => {
    if (user?.apiKey) {
      navigator.clipboard.writeText(user.apiKey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/')
  }

  const getCreditsPercentage = () => {
    if (!user || user.monthlyCredits === 0) return 0
    return (user.creditsUsed / user.monthlyCredits) * 100
  }

  const getCreditsRemaining = () => {
    if (!user) return 0
    return user.creditsRemaining ?? user.monthlyCredits - user.creditsUsed
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
      </div>
    )
  }

  if (!user) {
    return null
  }

  const isPro = user.plan === 'pro'

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, {user.email}</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <TrendingUp className="h-4 w-4" />
              <span>{user.creditsUsed} used</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Credits Usage */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Monthly Credits</h2>
              <TrendingUp className="h-6 w-6 text-primary-600" />
            </div>
            <div className="mb-4">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">{getCreditsRemaining()}</span>
                <span className="text-gray-600 ml-2">/ {user.monthlyCredits}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">conversions remaining</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all ${
                  getCreditsPercentage() > 80 ? 'bg-red-500' : 'bg-primary-600'
                }`}
                style={{ width: `${getCreditsPercentage()}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {user.creditsUsed} conversions used this month
            </p>
          </div>

          {/* Plan Info */}
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg shadow-md p-6 text-white">
            <h2 className="text-lg font-semibold mb-4">Your Plan</h2>
            <div className="mb-4">
              <span className="text-4xl font-bold capitalize">{user.plan}</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                500 conversions per month
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                {isPro ? 'Full API access' : 'Upgrade to Pro for API access'}
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Up to 10MB per image
              </li>
            </ul>
            {!isPro && (
              <button
                onClick={() => router.push('/contact')}
                className="mt-6 inline-flex items-center justify-center px-4 py-2 bg-white text-primary-600 font-medium rounded-md hover:bg-primary-50 transition-colors"
              >
                Upgrade to Pro
              </button>
            )}
          </div>
        </div>

        {/* API Access Card */}
        {isPro && user.apiKey ? (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Key className="h-6 w-6 text-primary-600" />
                <h2 className="text-lg font-semibold text-gray-900">Your API Key</h2>
              </div>
              <button
                onClick={handleCopyApiKey}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                {copied ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy Key</span>
                  </>
                )}
              </button>
            </div>
            <div className="bg-gray-50 rounded-md p-4 font-mono text-sm break-all border border-gray-200">
              {user.apiKey}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Keep your API key secure. Do not share it publicly.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Key className="h-6 w-6 text-primary-600" />
              <h2 className="text-lg font-semibold text-gray-900">API Access</h2>
            </div>
            <p className="text-sm text-gray-600">API access is available on the Pro plan. Upgrade to unlock REST integrations.</p>
            <button
              onClick={() => router.push('/contact')}
              className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              Talk to Sales
            </button>
          </div>
        )}

        {/* API Documentation */}
        {isPro && user.apiKey ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">API Documentation</h2>
            <p className="text-gray-600 mb-4">
              Use the following endpoints to integrate WebP conversion into your WooCommerce store or application:
            </p>

            <div className="space-y-6">
              {/* Convert Endpoint */}
              <div>
                <h3 className="text-md font-semibold text-gray-900 mb-2">1. Queue Image Conversion</h3>
                <div className="bg-gray-50 rounded-md p-4 border border-gray-200">
                  <pre className="text-sm overflow-x-auto">
{`POST ${API_URL}/api/v1/convert
Headers:
  x-api-key: ${user.apiKey}
  Content-Type: multipart/form-data

Body:
  image: [Your image file (JPG/PNG)]

Response:
{
  "success": true,
  "jobId": "uuid-here",
  "message": "Image conversion job queued successfully"
}`}
                  </pre>
                </div>
              </div>

              {/* Status Endpoint */}
              <div>
                <h3 className="text-md font-semibold text-gray-900 mb-2">2. Check Job Status & Get Converted Image</h3>
                <div className="bg-gray-50 rounded-md p-4 border border-gray-200">
                  <pre className="text-sm overflow-x-auto">
{`GET ${API_URL}/api/v1/status/{jobId}
Headers:
  x-api-key: ${user.apiKey}

Response (if pending):
{
  "status": "pending",
  "message": "Image conversion is in progress"
}

Response (if complete):
  Returns the WebP image file with headers:
  Content-Type: image/webp
  X-Original-Size: [bytes]
  X-Converted-Size: [bytes]`}
                  </pre>
                </div>
              </div>

              {/* User Info Endpoint */}
              <div>
                <h3 className="text-md font-semibold text-gray-900 mb-2">3. Get Your Account Info</h3>
                <div className="bg-gray-50 rounded-md p-4 border border-gray-200">
                  <pre className="text-sm overflow-x-auto">
{`GET ${API_URL}/api/v1/user/me
Headers:
  x-api-key: ${user.apiKey}

Response:
{
  "user": {
    "id": "...",
    "email": "${user.email}",
    "plan": "${user.plan}",
    "monthlyCredits": ${user.monthlyCredits},
    "creditsUsed": ${user.creditsUsed},
    "creditsRemaining": ${getCreditsRemaining()}
  }
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* cURL Example */}
            <div className="mt-6 p-4 bg-primary-50 border border-primary-200 rounded-md">
              <h3 className="text-md font-semibold text-gray-900 mb-2">Example cURL Command</h3>
              <div className="bg-white rounded-md p-3 border border-primary-300">
                <pre className="text-xs overflow-x-auto">
{`curl -X POST ${API_URL}/api/v1/convert \
  -H "x-api-key: ${user.apiKey}" \
  -F "image=@/path/to/your/image.jpg"`}
                </pre>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">API Documentation</h2>
            <p className="text-gray-600">
              API access and developer documentation are included with the Pro plan. Upgrade to unlock advanced integrations and automation.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
