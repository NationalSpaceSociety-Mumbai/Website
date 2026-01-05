'use client'

import Starfield from '@/components/Starfield'
import { BookOpen, Download, ExternalLink } from 'lucide-react'

export default function MagazinePage() {
  const magazines = [
    { volume: 8, title: 'Volume 8 - Latest Edition', featured: true },
    { volume: 7, title: 'Volume 7' },
    { volume: 6, title: 'Volume 6' },
    { volume: 5, title: 'Volume 5' },
    { volume: 4, title: 'Volume 4' },
    { volume: 3, title: 'Volume 3' },
    { volume: 2, title: 'Volume 2' },
    { volume: 1, title: 'Volume 1' }
  ]

  return (
    <>
      <Starfield />
      
      <div className="relative z-10 pt-32 pb-20 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-base text-[#38BDF8] font-semibold tracking-wide uppercase">Publications</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Cosmic Web Magazine
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
              Explore our collection featuring in-depth articles about space exploration and technology.
            </p>
          </div>

          {/* Latest Issue */}
          <div className="mb-16">
            <div className="bg-glass p-12 rounded-2xl border-2 border-[#38BDF8] shadow-2xl shadow-blue-900/20">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="aspect-[3/4] bg-gradient-to-br from-[#0B3D91]/30 to-[#38BDF8]/20 rounded-xl flex items-center justify-center border border-[#4B9CD3]/20">
                    <div className="text-center">
                      <BookOpen className="w-24 h-24 text-[#38BDF8] mx-auto mb-4" />
                      <div className="text-6xl font-bold text-white mb-2">08</div>
                      <div className="text-xl text-gray-300">Latest</div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="inline-block px-4 py-1 bg-[#38BDF8] rounded-full text-white text-sm font-semibold mb-4">
                    Latest Edition
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">Volume 8 Now Available</h2>
                  <p className="text-gray-300 text-lg mb-6">
                    Latest insights in space exploration, technology developments, and exclusive interviews.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-3 bg-[#38BDF8] hover:bg-[#0EA5E9] rounded-full text-white font-semibold transition-all flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download Now
                    </button>
                    <button className="px-6 py-3 border border-gray-600 hover:border-[#38BDF8] hover:text-[#38BDF8] rounded-full text-white font-semibold transition-all flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Read Online
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Archive */}
          <h2 className="text-3xl font-bold mb-12 text-white border-l-4 border-[#38BDF8] pl-6">Archive</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {magazines.slice(1).map((magazine) => (
              <div key={magazine.volume} className="bg-glass p-6 rounded-xl hover:border-[#38BDF8] transition-all border border-gray-800 group">
                <div className="aspect-[3/4] bg-gradient-to-br from-[#0B3D91]/20 to-black rounded-xl mb-6 flex items-center justify-center border border-gray-800">
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 text-[#38BDF8] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-5xl font-bold text-white">{String(magazine.volume).padStart(2, '0')}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{magazine.title}</h3>
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-[#0B3D91] rounded-full text-white text-sm font-semibold hover:bg-[#38BDF8] transition-all">
                    Download
                  </button>
                  <button className="flex-1 px-4 py-2 border border-gray-600 rounded-full text-white text-sm font-semibold hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
