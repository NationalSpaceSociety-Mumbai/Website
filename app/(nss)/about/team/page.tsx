'use client'

import { Users, Linkedin, Mail } from 'lucide-react'

export default function TeamPage() {
  const leadership = [
    {
      name: 'Prathmesh Barapatre',
      role: 'President',
      description: 'Leading NSS Mumbai\'s vision for space education and international collaboration.',
      image: null
    },
    {
      name: 'Sharvil Joglekar',
      role: 'Vice President',
      description: 'Supporting strategic initiatives and community engagement programs.',
      image: null
    }
  ]

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl font-bold mb-6 gradient-text">
            Our Team
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the passionate individuals driving NSS Mumbai's mission to make humanity a spacefaring civilization.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((member, index) => (
              <div key={index} className="glass p-8 rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center border-2 border-white/20">
                  <Users className="w-16 h-16 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-400 text-center mb-4 font-semibold">
                  {member.role}
                </p>
                <p className="text-gray-300 text-center mb-6">
                  {member.description}
                </p>
                <div className="flex justify-center gap-3">
                  <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5 text-white" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* International Collaboration Highlight */}
        <div className="glass p-12 rounded-2xl mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">
            Global Connections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">
                International Aerospace Congress 2021
              </h3>
              <p className="text-gray-300">
                Prathmesh Barapatre (President) and Sharvil Joglekar (Vice President) represented NSS Mumbai at IAC 2021 in Dubai, meeting with ROSCOMOS representatives and fostering international space cooperation.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">
                US-India Space Cooperation
              </h3>
              <p className="text-gray-300">
                Prathmesh Barapatre engaged in high-level discussions with Eric Garcetti (US Ambassador to India) and Mike Hankey (US Consul General) to strengthen US-India space partnerships.
              </p>
            </div>
          </div>
        </div>

        {/* Join the Team CTA */}
        <div className="glass p-12 rounded-2xl text-center">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to contribute to space education and exploration.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  )
}
