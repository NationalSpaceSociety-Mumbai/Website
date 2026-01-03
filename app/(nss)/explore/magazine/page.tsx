'use client'

import { BookOpen, Download, ExternalLink } from 'lucide-react'

export default function MagazinePage() {
  const magazines = [
    {
      volume: 8,
      title: 'Volume 8 - Latest Edition',
      description: 'Our newest edition featuring the latest in space exploration, technology, and interviews with industry leaders.',
      featured: true
    },
    {
      volume: 7,
      title: 'Volume 7',
      description: 'Exploring lunar missions, Mars colonization strategies, and breakthrough propulsion technologies.'
    },
    {
      volume: 6,
      title: 'Volume 6',
      description: 'Deep dive into commercial spaceflight, satellite technology, and space law developments.'
    },
    {
      volume: 5,
      title: 'Volume 5',
      description: 'Focus on international space cooperation, asteroid mining prospects, and space habitats.'
    },
    {
      volume: 4,
      title: 'Volume 4',
      description: 'Coverage of reusable rockets, space tourism, and the future of deep space exploration.'
    },
    {
      volume: 3,
      title: 'Volume 3',
      description: 'Examining robotic exploration, space station developments, and emerging space nations.'
    }
  ]

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl font-bold mb-6 gradient-text">
            NSS Mumbai Magazine
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our collection of magazines featuring in-depth articles, interviews, and insights about space exploration, technology, and the future of humanity among the stars.
          </p>
        </div>

        {/* Latest Issue - Featured */}
        <div className="mb-16">
          <div className="glass p-8 md:p-12 rounded-2xl border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-xl flex items-center justify-center border border-white/20">
                  <div className="text-center">
                    <BookOpen className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                    <div className="text-6xl font-bold text-white mb-2">08</div>
                    <div className="text-xl text-gray-300">Latest</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="inline-block px-4 py-1 bg-blue-600 rounded-full text-white text-sm font-semibold mb-4">
                  Latest Edition
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Volume 8 Now Available
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Our newest edition featuring the latest in space exploration, cutting-edge technology developments, exclusive interviews with industry leaders, and comprehensive analysis of recent missions and future prospects.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Now
                  </button>
                  <button className="px-6 py-3 glass rounded-full text-white font-semibold hover:bg-white/20 transition-all flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Read Online
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Volumes */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Previous Volumes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {magazines.slice(1).map((magazine) => (
              <div key={magazine.volume} className="glass p-6 rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105 group">
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl mb-6 flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-5xl font-bold text-white">{String(magazine.volume).padStart(2, '0')}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{magazine.title}</h3>
                <p className="text-gray-300 mb-6">{magazine.description}</p>
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-blue-600 rounded-full text-white text-sm font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                    <Download className="w-3 h-3" />
                    Download
                  </button>
                  <button className="flex-1 px-4 py-2 glass rounded-full text-white text-sm font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                    <ExternalLink className="w-3 h-3" />
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe CTA */}
        <div className="mt-16 glass p-12 rounded-2xl text-center">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Never Miss an Issue
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get notified when new magazine volumes are released.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </div>
  )
}
