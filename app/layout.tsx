import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NSS Mumbai | National Space Society',
  description: 'Empowering humanity\'s journey to the stars. Creating a spacefaring civilization.',
  keywords: 'space, NSS, National Space Society, Mumbai, space exploration, space education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen" style={{ 
          background: 'linear-gradient(to bottom right, #0a0e27, #1a1f3a, #0a0e27)',
          color: 'white'
        }}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
