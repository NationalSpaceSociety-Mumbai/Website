'use client'

import Starfield from '@/components/Starfield'
import { Play, ExternalLink } from 'lucide-react'

export default function WebinarPage() {
  return (
    <>
      <Starfield />
      
      <div className="relative z-10 pt-32 pb-20 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-base text-[#38BDF8] font-semibold tracking-wide uppercase">Knowledge</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Webinars & Podcasts
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
              Join interactive sessions featuring leading experts discussing space exploration and technology.
            </p>
          </div>

          {/* Featured Podcasts */}
          <h3 className="text-2xl font-bold mb-8 text-white border-l-4 border-[#38BDF8] pl-6">Featured Podcasts</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <a
              href="https://spotifycreators-web.app.link/e/pr8WiUfArYb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-glass rounded-2xl p-6 hover:border-[#38BDF8] transition-all border border-gray-800 group"
            >
              <div className="aspect-video bg-gradient-to-br from-[#0B3D91]/20 to-black rounded-lg mb-4 flex items-center justify-center border border-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#38BDF8]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Play className="w-16 h-16 text-[#38BDF8] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#38BDF8] transition text-white">
                Becoming a Spacefaring Civilization with Isaac Arthur
              </h3>
              <p className="text-gray-400">By Peregrination</p>
            </a>

            <a
              href="https://open.spotify.com/episode/6xdh1cEJwy5arHxC3Ydw4H?si=hp9Q3oMrRn2RC4fhGyVtlg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-glass rounded-2xl p-6 hover:border-[#38BDF8] transition-all border border-gray-800 group"
            >
              <div className="aspect-video bg-gradient-to-br from-[#0B3D91]/20 to-black rounded-lg mb-4 flex items-center justify-center border border-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#38BDF8]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Play className="w-16 h-16 text-[#38BDF8] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#38BDF8] transition text-white">
                Isomorphism in Astrophysics
              </h3>
              <p className="text-gray-400">With Dr. Parisee Shirke</p>
            </a>
          </div>

          {/* Upcoming Webinars */}
          <h3 className="text-2xl font-bold mb-8 text-white border-l-4 border-[#38BDF8] pl-6">Upcoming Webinars</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-glass p-8 rounded-xl border-2 border-[#0B3D91] hover:border-[#38BDF8] transition">
              <span className="px-3 py-1 bg-[#0B3D91] rounded-full text-white text-sm font-semibold">Upcoming</span>
              <h3 className="text-2xl font-bold text-white my-4">Future of Commercial Space Travel</h3>
              <p className="text-gray-400 mb-6">
                Exploring latest developments in commercial spaceflight and space tourism.
              </p>
              <a
                href="https://linktr.ee/NSS_USA_Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#38BDF8] rounded-full text-white font-semibold hover:bg-[#0EA5E9] transition-all"
              >
                Register Now <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-glass p-8 rounded-xl border-2 border-[#0B3D91] hover:border-[#38BDF8] transition">
              <span className="px-3 py-1 bg-[#0B3D91] rounded-full text-white text-sm font-semibold">Upcoming</span>
              <h3 className="text-2xl font-bold text-white my-4">Deep Space Exploration</h3>
              <p className="text-gray-400 mb-6">
                Cutting-edge propulsion systems and life support technologies for deep space missions.
              </p>
              <a
                href="https://linktr.ee/NSS_USA_Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#38BDF8] rounded-full text-white font-semibold hover:bg-[#0EA5E9] transition-all"
              >
                Register Now <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
