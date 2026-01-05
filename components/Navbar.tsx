'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-[#020617]/85 backdrop-blur-lg border-b border-[#4B9CD3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center cursor-pointer group">
            <div className="w-12 h-12 flex items-center justify-center">
              {/* Using inline SVG version of the logo for reliability */}
              <svg className="w-12 h-12 group-hover:scale-110 transition-transform" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer circle with text */}
                <circle cx="100" cy="100" r="95" fill="#1E5A9E" stroke="white" strokeWidth="2"/>
                
                {/* Inner white circle (moon/planet) */}
                <circle cx="100" cy="100" r="65" fill="white"/>
                
                {/* Rocket */}
                <path d="M100 40 L115 90 L100 100 L85 90 Z" fill="#E94B3C"/>
                <path d="M100 45 L110 85 L100 92 L90 85 Z" fill="#1E5A9E"/>
                
                {/* Orbital ring */}
                <ellipse cx="100" cy="100" rx="75" ry="30" fill="none" stroke="#E94B3C" strokeWidth="8" opacity="0.9"/>
                <ellipse cx="100" cy="100" rx="75" ry="30" fill="none" stroke="#F9A825" strokeWidth="4" opacity="0.7"/>
                
                {/* Craters/dots on planet */}
                <circle cx="85" cy="95" r="4" fill="#1E5A9E"/>
                <circle cx="110" cy="85" r="6" fill="#1E5A9E"/>
                <circle cx="95" cy="110" r="3" fill="#1E5A9E"/>
                <circle cx="115" cy="105" r="5" fill="#1E5A9E"/>
                
                {/* Stars around */}
                <path d="M160 65 L162 70 L167 70 L163 73 L165 78 L160 75 L155 78 L157 73 L153 70 L158 70 Z" fill="white"/>
                <path d="M175 120 L177 125 L182 125 L178 128 L180 133 L175 130 L170 133 L172 128 L168 125 L173 125 Z" fill="white"/>
                <path d="M40 75 L42 80 L47 80 L43 83 L45 88 L40 85 L35 88 L37 83 L33 80 L38 80 Z" fill="white"/>
                
                {/* Text at bottom */}
                <text x="100" y="190" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial">NSS USA - MUMBAI</text>
                
                {/* Text at top */}
                <path id="topArc" d="M 30 100 A 70 70 0 0 1 170 100" fill="none"/>
                <text fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial">
                  <textPath href="#topArc" startOffset="50%" textAnchor="middle">
                    NATIONAL SPACE SOCIETY
                  </textPath>
                </text>
              </svg>
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
