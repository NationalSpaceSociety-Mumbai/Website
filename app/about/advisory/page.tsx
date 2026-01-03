'use client'

import { GraduationCap, Star, Users } from 'lucide-react'

export default function AdvisoryPage() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-6">
            <Star className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl font-bold mb-6 gradient-text">
            Advisory Board
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our advisory board consists of distinguished experts from aerospace, academia, and industry who guide our mission and strategic direction.
          </p>
        </div>

        {/* Featured Quote */}
        <div className="glass p-12 rounded-2xl mb-16 text-center max-w-4xl mx-auto">
          <div className="text-5xl text-blue-400 mb-4">"</div>
          <p className="text-2xl text-white italic mb-6 leading-relaxed">
            Space is the ultimate destination for humankind to orchestrate the creations of their heart and chisel the dreams within their minds.
          </p>
          <p className="text-xl text-blue-400 font-semibold">
            - Dr. Ravi Margasahayam
          </p>
          <p className="text-gray-400 mt-2">
            Advisory Board Member
          </p>
        </div>

        {/* Advisory Board Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass p-8 rounded-2xl text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Academic Excellence</h3>
            <p className="text-gray-300">
              Leading professors and researchers from top universities providing scientific guidance and educational insights.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Industry Expertise</h3>
            <p className="text-gray-300">
              Veterans from space agencies and aerospace companies bringing real-world experience and industry connections.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Strategic Vision</h3>
            <p className="text-gray-300">
              Policy makers and thought leaders shaping the future of space exploration and international cooperation.
            </p>
          </div>
        </div>

        {/* Board Responsibilities */}
        <div className="glass p-12 rounded-2xl mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">
            Board Responsibilities
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Strategic Guidance</h3>
                <p className="text-gray-300">
                  Providing direction on program development, partnerships, and long-term organizational goals aligned with space exploration advancement.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Educational Oversight</h3>
                <p className="text-gray-300">
                  Ensuring our educational programs, publications, and events maintain the highest standards of accuracy and relevance.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Network Development</h3>
                <p className="text-gray-300">
                  Leveraging connections to foster collaborations with academic institutions, space agencies, and industry partners globally.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Mentorship</h3>
                <p className="text-gray-300">
                  Guiding emerging leaders in the space community and providing expertise to students and young professionals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Join Advisory Board CTA */}
        <div className="glass p-12 rounded-2xl text-center">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Become an Advisor
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We welcome experts who are passionate about space exploration and education to join our advisory board.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
