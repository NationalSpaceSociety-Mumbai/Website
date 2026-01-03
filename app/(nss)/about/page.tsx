'use client'

import { Rocket, Target, Users, Globe } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 gradient-text">
            About NSS Mumbai
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A chapter of the National Space Society (USA), dedicated to advancing space exploration, education, and technology for the benefit of humanity.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass p-8 rounded-2xl">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To promote space exploration and development to benefit humanity through community engagement, education, and policy advocacy. We work to inspire the next generation of space explorers and innovators.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              Creating a spacefaring civilization where humanity expands beyond Earth, exploring and settling the solar system and beyond. We envision a future where space is accessible to all.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Community Engagement',
                description: 'Hosting workshops, conferences, and events to bring together space enthusiasts, professionals, and students.'
              },
              {
                icon: Globe,
                title: 'Education & Outreach',
                description: 'Providing educational resources, webinars, and publications to promote space literacy and awareness.'
              },
              {
                icon: Rocket,
                title: 'Policy & Advocacy',
                description: 'Working with policymakers and industry leaders to advance space exploration initiatives and cooperation.'
              }
            ].map((item, index) => (
              <div key={index} className="glass p-6 rounded-2xl hover:bg-white/20 transition-all text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="glass p-12 rounded-2xl">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Key Highlights
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-blue-400 mt-2"></div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">International Collaboration</h3>
                <p className="text-gray-300">
                  Active participation in international space conferences and collaboration with global space agencies including meetings with ROSCOMOS representatives.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-purple-400 mt-2"></div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">US-India Space Cooperation</h3>
                <p className="text-gray-300">
                  Fostering partnerships between US and Indian space communities, with connections to high-level diplomatic figures including the US Ambassador to India and US Consul General.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2"></div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Educational Initiatives</h3>
                <p className="text-gray-300">
                  Publishing magazines, hosting webinars, producing podcasts, and maintaining an active blog to educate and inspire the space community.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-pink-400 mt-2"></div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Student Programs</h3>
                <p className="text-gray-300">
                  Engaging with students and young professionals to nurture the next generation of space leaders and innovators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
