'use client'

import Starfield from '@/components/Starfield'
import Link from 'next/link'
import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function HomePage() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Open Substack in new tab with email pre-filled
    window.open(`https://nssmumbai.substack.com/subscribe?email=${encodeURIComponent(email)}`, '_blank')
  }

  return (
    <>
      <Starfield />
      
      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-4 pt-32 pb-16">
        <div className="max-w-5xl mx-auto animate-fadeIn">
          <div className="mb-6 inline-block px-4 py-1 rounded-full border border-[#38BDF8] bg-[#0B3D91]/30 text-[#38BDF8] text-sm font-semibold tracking-wider uppercase backdrop-blur-sm shadow-[0_0_10px_rgba(56,189,248,0.3)] animate-pulse">
            <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Mission: Artemis Generation
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-2xl">
            <span className="block text-white">CREATING A</span>
            <span className="block text-gradient">SPACEFARING CIVILIZATION</span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100 font-light">
            The Mumbai Chapter of the National Space Society. 
            Orchestrating the creations of the heart and chiseling the dreams within our minds.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
            <Link
              href="/about"
              className="px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-[#38BDF8] hover:bg-[#0EA5E9] md:py-4 md:text-lg transition-all shadow-lg hover:shadow-sky-500/50"
            >
              Explore Vision
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border border-[#4B9CD3] text-base font-bold rounded-md text-blue-100 hover:bg-[#4B9CD3] hover:text-black md:py-4 md:text-lg transition-all bg-[#0B3D91]/20 backdrop-blur-md"
            >
              Who We Are
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-glass p-8 md:p-12 rounded-2xl border border-[#4B9CD3]/30 relative overflow-hidden">
            {/* Decorative blur elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0B3D91] rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#38BDF8] rounded-full blur-3xl opacity-10"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B3D91] to-[#38BDF8] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-900/50">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Join the Artemis Generation</h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Subscribe to our newsletter for the latest updates on space exploration, STEAM outreach programs, and exclusive content from NSS Mumbai.
                </p>
              </div>
              
              {/* Custom Newsletter Form */}
              <form onSubmit={handleSubscribe} className="max-w-xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-6 py-4 bg-black/40 border border-[#4B9CD3]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] text-white font-bold rounded-lg hover:from-[#0EA5E9] hover:to-[#0284C7] transition-all shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 flex items-center justify-center gap-2 group"
                  >
                    <span>Subscribe</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  By subscribing, you'll receive updates about our events, publications, and space advocacy initiatives.
                </p>
              </form>

              {/* Quick Links */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="https://nssmumbai.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#38BDF8] hover:text-[#0EA5E9] transition-colors underline"
                >
                  View Previous Newsletters
                </a>
                <span className="text-gray-600">•</span>
                <Link
                  href="/contact"
                  className="text-sm text-[#38BDF8] hover:text-[#0EA5E9] transition-colors underline"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
