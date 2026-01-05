'use client'

import Starfield from '@/components/Starfield'
import { Satellite, BookOpen, Users, Quote } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Starfield />
      
      <div className="relative z-10 pt-32 pb-20 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-base text-[#38BDF8] font-semibold tracking-wide uppercase">Profile</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Voice for Space in India
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
              Authorized in December 2019, NSS Mumbai is a platform for students, professionals, and enthusiasts to collaborate on the future of humanity in space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {/* Quote Box */}
            <div className="bg-glass p-8 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#0B3D91] rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <Quote className="text-[#38BDF8] w-8 h-8 mb-4" />
              <p className="text-lg text-gray-200 italic mb-6 leading-relaxed">
                "Space is the ultimate destination for humankind to orchestrate the creations of their heart and chisel the dreams within their minds."
              </p>
              <div className="flex items-center pt-4 border-t border-gray-700">
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-[#0B3D91] to-black border border-[#38BDF8] flex items-center justify-center text-white shadow-lg">
                  <Users className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-bold text-white">Dr. Ravi Margasahayam</div>
                  <div className="text-xs text-[#38BDF8] uppercase tracking-wider">Global Space Ambassador & Chief Mentor</div>
                </div>
              </div>
            </div>
            
            {/* Details */}
            <div className="space-y-6 flex flex-col justify-center">
              <div className="bg-glass p-6 rounded-xl flex items-start hover:border-[#38BDF8] transition-colors border border-transparent">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#0B3D91] text-white shadow-lg shadow-blue-900/50">
                    <Satellite className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-bold text-white">Technical Projects</h3>
                  <p className="mt-2 text-base text-gray-400">From CubeSats to Rover designs, we provide hands-on experience in space engineering and technical design.</p>
                </div>
              </div>
              
              <div className="bg-glass p-6 rounded-xl flex items-start hover:border-[#38BDF8] transition-colors border border-transparent">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#0B3D91] text-white shadow-lg shadow-blue-900/50">
                    <BookOpen className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-bold text-white">Outreach</h3>
                  <p className="mt-2 text-base text-gray-400">Webinars, the "Cosmic Web" magazine, and workshops to educate the masses and ignite curiosity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
