'use client'

import Starfield from '@/components/Starfield'
import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function HomePage() {
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
          <div className="bg-glass p-8 md:p-12 rounded-2xl border border-[#4B9CD3]/30">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0B3D91] to-[#38BDF8] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Stay Connected</h2>
              <p className="text-gray-300 text-lg">
                Subscribe to our newsletter for the latest updates on space exploration, events, and exclusive content.
              </p>
            </div>
            
            {/* Substack Embed */}
            <div className="relative w-full" style={{ paddingBottom: '53%', height: 0, overflow: 'hidden' }}>
              <iframe 
                src="https://nssmumbai.substack.com/embed" 
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0" 
                scrolling="no"
                title="Subscribe to NSS Mumbai Newsletter"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
