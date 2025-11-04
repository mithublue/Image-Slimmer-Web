import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WebP Converter - Speed Up Your WooCommerce Store',
  description: 'Convert your images to WebP format and get 500 free conversions every month. Perfect for WooCommerce and e-commerce websites.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <footer className="bg-gray-50 border-t mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-gray-600 text-sm">
              © 2024 WebP Converter. Built for WooCommerce & E-commerce Speed Optimization.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
