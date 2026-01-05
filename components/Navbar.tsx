'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-[#020617]/85 backdrop-blur-lg border-b border-[#4B9CD3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="w-12 h-12 relative">
              <Image
                src="/images/nss-mumbai-logo.png"
                alt="NSS Mumbai Logo"
                width={48}
                height={48}
                className="object-contain group-hover:scale-110 transition-transform"
                unoptimized
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold tracking-wide text-white">
                NSS <span className="text-[#38BDF8]">MUMBAI</span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-[#38BDF8] px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-[#38BDF8]">
              Home
            </Link>
            
            <a href="https://nssmumbai.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#38BDF8] px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-[#38BDF8]">
              Blog
            </a>

            <div className="relative group">
              <button className="text-gray-300 hover:text-[#38BDF8] px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 border-b-2 border-transparent group-hover:border-[#38BDF8]">
                Explore <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#020617]/95 backdrop-blur-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-[#4B9CD3]/20">
                <Link href="/explore/magazine" className="block px-4 py-3 text-white hover:bg-[#0B3D91]/30 hover:text-[#38BDF8] rounded-t-lg">
                  Magazine
                </Link>
                <Link href="/explore/webinar" className="block px-4 py-3 text-white hover:bg-[#0B3D91]/30 hover:text-[#38BDF8]">
                  Webinar
                </Link>
                <a href="https://open.spotify.com/show/57Nh01m6jJgAqhCTOaQjsJ" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-white hover:bg-[#0B3D91]/30 hover:text-[#38BDF8] rounded-b-lg">
                  Podcast
                </a>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-300 hover:text-[#38BDF8] px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 border-b-2 border-transparent group-hover:border-[#38BDF8]">
                About Us <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#020617]/95 backdrop-blur-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-[#4B9CD3]/20">
                <Link href="/about" className="block px-4 py-3 text-white hover:bg-[#0B3D91]/30 hover:text-[#38BDF8] rounded-t-lg">
                  About NSS Mumbai
                </Link>
                <Link href="/about/team" className="block px-4 py-3 text-white hover:bg-[#0B3D91]/30 hover:text-[#38BDF8]">
                  Our Team
                </Link>
                <Link href="/about/advisory" className="block px-4 py-3 text-white hover:bg-[#0B3D91]/30 hover:text-[#38BDF8]">
                  Advisory Board
                </Link>
                <Link href="/about/collaboration" className="block px-4 py-3 text-white hover:bg-[#0B3D91]/30 hover:text-[#38BDF8] rounded-b-lg">
                  Collaboration
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="px-5 py-2 border border-[#38BDF8] text-[#38BDF8] rounded hover:bg-[#38BDF8] hover:text-white transition-all text-sm font-bold shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]"
            >
              JOIN NSS
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#020617]/95 border-t border-[#4B9CD3]/10">
          <div className="px-4 py-6 space-y-4">
            <Link href="/" className="block text-white hover:text-[#38BDF8]" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <a href="https://nssmumbai.blogspot.com/" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-[#38BDF8]">
              Blog
            </a>
            <Link href="/explore/magazine" className="block text-white hover:text-[#38BDF8]" onClick={() => setMobileMenuOpen(false)}>
              Magazine
            </Link>
            <Link href="/explore/webinar" className="block text-white hover:text-[#38BDF8]" onClick={() => setMobileMenuOpen(false)}>
              Webinar
            </Link>
            <Link href="/about" className="block text-white hover:text-[#38BDF8]" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/about/team" className="block text-white hover:text-[#38BDF8]" onClick={() => setMobileMenuOpen(false)}>
              Our Team
            </Link>
            <Link href="/contact" className="block text-white hover:text-[#38BDF8]" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
