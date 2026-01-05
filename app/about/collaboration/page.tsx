'use client'

import Starfield from '@/components/Starfield'
import { Globe, Handshake, Rocket, BookOpen } from 'lucide-react'

export default function CollaborationPage() {
  return (
    <>
      <Starfield />
      
      <div className="relative z-10 pt-32 pb-20 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-base text-[#38BDF8] font-semibold tracking-wide uppercase">Partnerships</h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              <span className="text-[#38BDF8]">Artemis</span> Vision & Activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-glass p-8 rounded-2xl card-hover group relative overflow-hidden border border-gray-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-10 group-hover:opacity-20"></div>
              <div className="h-14 w-14 mb-6 text-[#38BDF8] group-hover:scale-110 transition-transform bg-white/5 rounded-full flex items-center justify-center">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Moon to Mars</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Supporting the Artemis Accords. We advocate for a sustainable human presence on the Moon as a critical proving ground for Mars.
              </p>
            </div>

            <div className="bg-glass p-8 rounded-2xl card-hover group relative overflow-hidden border border-gray-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-10 group-hover:opacity-20"></div>
              <div className="h-14 w-14 mb-6 text-[#4B9CD3] group-hover:scale-110 transition-transform bg-white/5 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Network</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Collaborating with Amateur Astronomy Club, Machine Learning India, and Naxxatra Science to broaden our impact.
              </p>
            </div>

            <div className="bg-glass p-8 rounded-2xl card-hover group relative overflow-hidden border border-gray-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-10 group-hover:opacity-20"></div>
              <div className="h-14 w-14 mb-6 text-[#4B9CD3] group-hover:scale-110 transition-transform bg-white/5 rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cosmic Education</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Publishing newsletters and hosting competitions to ignite curiosity in young minds across Mumbai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
