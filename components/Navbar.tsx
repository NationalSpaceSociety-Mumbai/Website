'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ChevronRight, Search } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-[#000000]/90 backdrop-blur-xl border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center cursor-pointer group">
            <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center">
              <img
                src={`${process.env.NODE_ENV === 'production' ? '/Website' : ''}/images/nss-mumbai-logo.png`}
                alt="NSS Mumbai Logo"
                className="w-10 h-10 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-semibold transition-all border-b-2 border-transparent hover:border-blue-400">
              Home
            </Link>
            
            <Link href="/events" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-semibold transition-all border-b-2 border-transparent hover:border-blue-400">
              Events
            </Link>

            <div className="relative group">
              <button className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-semibold transition-all flex items-center gap-1 border-b-2 border-transparent group-hover:border-blue-400">
                Resources <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-[#0a0e27]/98 backdrop-blur-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-blue-500/30 shadow-xl">
                <Link href="/explore/magazine" className="block px-5 py-3 text-gray-300 hover:bg-blue-500/10 hover:text-blue-400 rounded-t-xl transition-colors">
                  Magazine
                </Link>
                <Link href="/explore/webinar" className="block px-5 py-3 text-gray-300 hover:bg-blue-500/10 hover:text-blue-400 transition-colors">
                  Webinars
                </Link>
                <a href="https://open.spotify.com/show/57Nh01m6jJgAqhCTOaQjsJ" target="_blank" rel="noopener noreferrer" className="block px-5 py-3 text-gray-300 hover:bg-blue-500/10 hover:text-blue-400 transition-colors">
                  Podcast
                </a>
                <a href="https://nssmumbai.blogspot.com/" target="_blank" rel="noopener noreferrer" className="block px-5 py-3 text-gray-300 hover:bg-blue-500/10 hover:text-blue-400 rounded-b-xl transition-colors">
                  Blog
                </a>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-semibold transition-all flex items-center gap-1 border-b-2 border-transparent group-hover:border-blue-400">
                About <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-[#0a0e27]/98 backdrop-blur-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-blue-500/30 shadow-xl">
                <Link href="/about" className="block px-5 py-3 text-gray-300 hover:bg-blue-500/10 hover:text-blue-400 rounded-t-xl transition-colors">
                  Mission & Vision
                </Link>
                <Link href="/about/team" className="block px-5 py-3 text-gray-300 hover:bg-blue-500/10 hover:text-blue-400 transition-colors">
                  Our Team
                </Link>
                <Link href="/about/advisory" className="block px-5 py-3 text-gray-300 hover:bg-blue-500/10 hover:text-blue-400 transition-colors">
                  Advisory Board
                </Link>
                <Link href="/about/collaboration" className="block px-5 py-3 text-gray-300 hover:bg-blue-500/10 hover:text-blue-400 transition-colors">
                  Collaboration
                </Link>
                <Link href="/gallery" className="block px-5 py-3 text-gray-300 hover:bg-blue-500/10 hover:text-blue-400 rounded-b-xl transition-colors">
                  Gallery
                </Link>
              </div>
            </div>

            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-300 hover:text-blue-400 p-2 transition-colors"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              href="/contact"
              className="px-5 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
            >
              JOIN NSS
            </Link>
          </div>

          {/* Mobile/Tablet Actions */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-300 hover:text-blue-400 p-2 transition-colors"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile Optimized */}
        {searchOpen && (
          <div className="py-3 sm:py-4 border-t border-blue-500/20">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events, articles..."
                className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 search-cosmic rounded-lg text-white placeholder-gray-500 focus:outline-none text-sm sm:text-base"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu - Hamburger with Dropdowns */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e27]/98 backdrop-blur-xl border-t border-blue-500/20 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-6 space-y-2">
            {/* Home */}
            <Link 
              href="/" 
              className="block text-white hover:text-blue-400 font-semibold py-3 px-4 rounded-lg hover:bg-blue-500/10 transition-colors" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Events */}
            <Link 
              href="/events" 
              className="block text-white hover:text-blue-400 font-semibold py-3 px-4 rounded-lg hover:bg-blue-500/10 transition-colors" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            
            {/* Resources Dropdown */}
            <div>
              <button
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className="w-full flex items-center justify-between text-white hover:text-blue-400 font-semibold py-3 px-4 rounded-lg hover:bg-blue-500/10 transition-colors"
              >
                <span>Resources</span>
                <ChevronRight className={`w-5 h-5 transition-transform ${mobileResourcesOpen ? 'rotate-90' : ''}`} />
              </button>
              {mobileResourcesOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-blue-500/30 pl-4">
                  <Link 
                    href="/explore/magazine" 
                    className="block text-gray-300 hover:text-blue-400 py-2.5 px-4 hover:bg-blue-500/5 rounded-lg transition-colors text-sm" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Magazine
                  </Link>
                  <Link 
                    href="/explore/webinar" 
                    className="block text-gray-300 hover:text-blue-400 py-2.5 px-4 hover:bg-blue-500/5 rounded-lg transition-colors text-sm" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Webinars
                  </Link>
                  <a 
                    href="https://open.spotify.com/show/57Nh01m6jJgAqhCTOaQjsJ" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-gray-300 hover:text-blue-400 py-2.5 px-4 hover:bg-blue-500/5 rounded-lg transition-colors text-sm"
                  >
                    Podcast
                  </a>
                  <a 
                    href="https://nssmumbai.blogspot.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-gray-300 hover:text-blue-400 py-2.5 px-4 hover:bg-blue-500/5 rounded-lg transition-colors text-sm"
                  >
                    Blog
                  </a>
                </div>
              )}
            </div>
            
            {/* About Dropdown */}
            <div>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex items-center justify-between text-white hover:text-blue-400 font-semibold py-3 px-4 rounded-lg hover:bg-blue-500/10 transition-colors"
              >
                <span>About</span>
                <ChevronRight className={`w-5 h-5 transition-transform ${mobileAboutOpen ? 'rotate-90' : ''}`} />
              </button>
              {mobileAboutOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-blue-500/30 pl-4">
                  <Link 
                    href="/about" 
                    className="block text-gray-300 hover:text-blue-400 py-2.5 px-4 hover:bg-blue-500/5 rounded-lg transition-colors text-sm" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mission & Vision
                  </Link>
                  <Link 
                    href="/about/team" 
                    className="block text-gray-300 hover:text-blue-400 py-2.5 px-4 hover:bg-blue-500/5 rounded-lg transition-colors text-sm" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Team
                  </Link>
                  <Link 
                    href="/about/advisory" 
                    className="block text-gray-300 hover:text-blue-400 py-2.5 px-4 hover:bg-blue-500/5 rounded-lg transition-colors text-sm" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Advisory Board
                  </Link>
                  <Link 
                    href="/about/collaboration" 
                    className="block text-gray-300 hover:text-blue-400 py-2.5 px-4 hover:bg-blue-500/5 rounded-lg transition-colors text-sm" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Collaboration
                  </Link>
                  <Link 
                    href="/gallery" 
                    className="block text-gray-300 hover:text-blue-400 py-2.5 px-4 hover:bg-blue-500/5 rounded-lg transition-colors text-sm" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Gallery
                  </Link>
                </div>
              )}
            </div>
            
            {/* Contact */}
            <Link 
              href="/contact" 
              className="block text-white hover:text-blue-400 font-semibold py-3 px-4 rounded-lg hover:bg-blue-500/10 transition-colors" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            {/* JOIN NSS Button */}
            <div className="pt-4 mt-4 border-t border-blue-500/20">
              <Link 
                href="/contact" 
                className="block px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-center rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)]" 
                onClick={() => setMobileMenuOpen(false)}
              >
                JOIN NSS
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Search Bar - Mobile/Desktop */}
      {searchOpen && (
        <div className="border-t border-blue-500/20 bg-[#0a0e27]/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events, articles, resources..."
                className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 search-cosmic rounded-lg text-white placeholder-gray-500 focus:outline-none text-sm sm:text-base"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
