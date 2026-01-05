'use client'

import Starfield from '@/components/Starfield'
import { Star, Users } from 'lucide-react'

export default function AdvisoryPage() {
  return (
    <>
      <Starfield />
      
      <div className="relative z-10 pt-32 pb-20 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-base text-[#38BDF8] font-semibold tracking-wide uppercase">Leadership</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Advisory Board
            </p>
          </div>

          <div className="bg-glass p-12 rounded-2xl mb-16 text-center max-w-4xl mx-auto border border-gray-800">
            <div className="text-5xl text-[#38BDF8] mb-4">"</div>
            <p className="text-2xl text-white italic mb-6 leading-relaxed">
              Space is the ultimate destination for humankind to orchestrate the creations of their heart and chisel the dreams within their minds.
            </p>
            <p className="text-xl text-[#38BDF8] font-semibold">- Dr. Ravi Margasahayam</p>
            <p className="text-gray-400 mt-2">Global Space Ambassador & Chief Mentor</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-glass p-8 rounded-xl text-center border border-gray-800 hover:border-[#38BDF8] transition card-hover">
              <div className="w-16 h-16 bg-[#0B3D91] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-900/50">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Academic Excellence</h3>
              <p className="text-gray-300">Leading professors and researchers providing scientific guidance and educational insights.</p>
            </div>

            <div className="bg-glass p-8 rounded-xl text-center border border-gray-800 hover:border-[#38BDF8] transition card-hover">
              <div className="w-16 h-16 bg-[#0B3D91] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-900/50">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Industry Expertise</h3>
              <p className="text-gray-300">Veterans from space agencies and aerospace companies bringing real-world experience.</p>
            </div>

            <div className="bg-glass p-8 rounded-xl text-center border border-gray-800 hover:border-[#38BDF8] transition card-hover">
              <div className="w-16 h-16 bg-[#0B3D91] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-900/50">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Strategic Vision</h3>
              <p className="text-gray-300">Policy makers shaping the future of space exploration and international cooperation.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
