'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [exploreOpen, setExploreOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">NSS</span>
            </div>
            <div className="hidden md:block">
              <div className="text-white font-bold text-lg">NSS Mumbai</div>
              <div className="text-gray-400 text-xs">National Space Society</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors font-medium">
              Home
            </Link>

            <a 
              href="https://nssmumbai.blogspot.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors font-medium"
            >
              Blog
            </a>

            {/* Explore Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-blue-400 transition-colors font-medium flex items-center gap-1">
                Explore <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 glass rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/explore/magazine" className="block px-4 py-3 text-white hover:bg-white/10 rounded-t-lg transition-colors">
                  Magazine
                </Link>
                <Link href="/explore/webinar" className="block px-4 py-3 text-white hover:bg-white/10 transition-colors">
                  Webinar
                </Link>
                <a 
                  href="https://open.spotify.com/show/57Nh01m6jJgAqhCTOaQjsJ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-white hover:bg-white/10 rounded-b-lg transition-colors"
                >
                  Podcast
                </a>
              </div>
            </div>

            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-blue-400 transition-colors font-medium flex items-center gap-1">
                About Us <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 glass rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/about" className="block px-4 py-3 text-white hover:bg-white/10 rounded-t-lg transition-colors">
                  About NSS Mumbai
                </Link>
                <Link href="/about/team" className="block px-4 py-3 text-white hover:bg-white/10 transition-colors">
                  Our Team
                </Link>
                <Link href="/about/advisory" className="block px-4 py-3 text-white hover:bg-white/10 transition-colors">
                  Advisory Board
                </Link>
                <Link href="/about/collaboration" className="block px-4 py-3 text-white hover:bg-white/10 rounded-b-lg transition-colors">
                  Collaboration
                </Link>
              </div>
            </div>

            <Link href="/contact" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <Link href="/" className="block text-white hover:text-blue-400 transition-colors font-medium">
              Home
            </Link>

            <a 
              href="https://nssmumbai.blogspot.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-white hover:text-blue-400 transition-colors font-medium"
            >
              Blog
            </a>

            {/* Explore Section */}
            <div>
              <button 
                onClick={() => setExploreOpen(!exploreOpen)}
                className="w-full text-left text-white hover:text-blue-400 transition-colors font-medium flex items-center justify-between"
              >
                Explore <ChevronDown className={`w-4 h-4 transition-transform ${exploreOpen ? 'rotate-180' : ''}`} />
              </button>
              {exploreOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="/explore/magazine" className="block text-gray-300 hover:text-blue-400 transition-colors">
                    Magazine
                  </Link>
                  <Link href="/explore/webinar" className="block text-gray-300 hover:text-blue-400 transition-colors">
                    Webinar
                  </Link>
                  <a 
                    href="https://open.spotify.com/show/57Nh01m6jJgAqhCTOaQjsJ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Podcast
                  </a>
                </div>
              )}
            </div>

            {/* About Us Section */}
            <div>
              <button 
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full text-left text-white hover:text-blue-400 transition-colors font-medium flex items-center justify-between"
              >
                About Us <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="/about" className="block text-gray-300 hover:text-blue-400 transition-colors">
                    About NSS Mumbai
                  </Link>
                  <Link href="/about/team" className="block text-gray-300 hover:text-blue-400 transition-colors">
                    Our Team
                  </Link>
                  <Link href="/about/advisory" className="block text-gray-300 hover:text-blue-400 transition-colors">
                    Advisory Board
                  </Link>
                  <Link href="/about/collaboration" className="block text-gray-300 hover:text-blue-400 transition-colors">
                    Collaboration
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium text-center hover:from-blue-700 hover:to-purple-700 transition-all">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
