'use client'

import Starfield from '@/components/Starfield'

export default function TeamPage() {
  const teamMembers = [
    { name: 'Prathmesh Barapatre', role: 'President', initials: 'PB' },
    { name: 'Sharvil Joglekar', role: 'Vice President', initials: 'SJ' },
    { name: 'Rutuja Pilgar', role: 'Secretary', initials: 'RP' },
    { name: 'Shiva Yadav', role: 'Treasurer', initials: 'SY' }
  ]

  return (
    <>
      <Starfield />
      
      <div className="relative z-10 pt-32 pb-20 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#38BDF8] font-bold tracking-widest uppercase text-sm">Leadership</span>
            <h2 className="text-3xl font-extrabold text-white sm:text-5xl mt-2">Mission Control</h2>
            <p className="mt-4 text-xl text-gray-400">The team guiding our trajectory.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-glass p-8 rounded-2xl text-center border border-transparent hover:border-[#38BDF8] transition-all group"
              >
                <div className="h-28 w-28 mx-auto rounded-full bg-gradient-to-b from-[#0B3D91] to-black border-2 border-[#38BDF8] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(11,61,145,0.5)] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-shadow">
                  <span className="text-3xl font-bold text-white">{member.initials}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-[#38BDF8] font-medium text-sm mt-1 mb-4 uppercase tracking-wider">{member.role}</p>
                <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4h-16c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 4l-8 5-8-5v-2l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Global Connections */}
          <div className="mt-20">
            <h2 className="text-3xl font-extrabold text-white mb-12 border-l-4 border-[#38BDF8] pl-6">
              Global Connections
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-glass p-8 rounded-xl border border-gray-800 hover:border-[#38BDF8] transition">
                <h3 className="text-2xl font-bold mb-4 text-white">"Connecting on Global Level"</h3>
                <p className="text-gray-300">
                  Prathmesh Barapatre (President) and Sharvil Joglekar (Vice President) with ROSCOMOS representative at IAC 2021 Dubai.
                </p>
              </div>
              <div className="bg-glass p-8 rounded-xl border border-gray-800 hover:border-[#38BDF8] transition">
                <h3 className="text-2xl font-bold mb-4 text-white">"US-India Space Cooperation"</h3>
                <p className="text-gray-300">
                  Prathmesh Barapatre (President), Eric Garcetti (US Ambassador to India), and Mike Hankey (US Consul General).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
