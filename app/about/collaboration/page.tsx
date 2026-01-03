'use client'

import { Globe, HeartHandshake, Building2, Users, ExternalLink } from 'lucide-react'

export default function CollaborationPage() {
  const collaborations = [
    {
      icon: Globe,
      title: 'International Space Agencies',
      description: 'Partnerships with space agencies worldwide to foster knowledge exchange and collaborative missions.',
      examples: ['ROSCOSMOS', 'ISRO', 'NASA Collaborators']
    },
    {
      icon: Building2,
      title: 'Academic Institutions',
      description: 'Working with universities and research centers to advance space education and research.',
      examples: ['Leading Universities', 'Research Centers', 'Student Programs']
    },
    {
      icon: HeartHandshake,
      title: 'Industry Partners',
      description: 'Collaborating with aerospace companies and technology firms driving innovation.',
      examples: ['Aerospace Companies', 'Tech Startups', 'Space Industry']
    },
    {
      icon: Users,
      title: 'Government Relations',
      description: 'Engaging with diplomatic and government officials to strengthen space policy and cooperation.',
      examples: ['US Embassy', 'Consulate General', 'Policy Makers']
    }
  ]

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-6">
            <HeartHandshake className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl font-bold mb-6 gradient-text">
            Collaborations
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building bridges across nations, institutions, and industries to advance humanity's journey to the stars through meaningful partnerships and collaborations.
          </p>
        </div>

        {/* Collaboration Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {collaborations.map((collab, index) => (
            <div key={index} className="glass p-8 rounded-2xl hover:bg-white/20 transition-all">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6">
                <collab.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{collab.title}</h3>
              <p className="text-gray-300 mb-6">{collab.description}</p>
              <div className="flex flex-wrap gap-2">
                {collab.examples.map((example, i) => (
                  <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20">
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Collaborations */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Featured Partnerships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* US-India Space Cooperation */}
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">US-India Space Cooperation</h3>
              </div>
              <p className="text-gray-300 mb-6">
                NSS Mumbai plays a pivotal role in fostering US-India space cooperation through high-level engagements with diplomatic representatives and space community leaders from both nations.
              </p>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-sm text-gray-400 mb-2">Key Engagements:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Meeting with Eric Garcetti, US Ambassador to India</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Discussions with Mike Hankey, US Consul General</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Bilateral space policy advocacy</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* International Space Congress */}
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Global Space Events</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Active participation in premier international space conferences, fostering connections with global space agencies and organizations.
              </p>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-sm text-gray-400 mb-2">Recent Participation:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>International Astronautical Congress (IAC) 2021, Dubai</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Meeting with ROSCOSMOS representatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Global networking and knowledge exchange</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration Benefits */}
        <div className="glass p-12 rounded-2xl mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">
            Why Collaborate With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Expertise</h3>
              <p className="text-gray-300">
                Access to knowledgeable team members and advisory board with deep space sector experience.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Network</h3>
              <p className="text-gray-300">
                Connection to international space community, agencies, and industry leaders.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Platform</h3>
              <p className="text-gray-300">
                Reach through our events, publications, and community engagement programs.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="glass p-12 rounded-2xl text-center">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Partner With Us
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in collaborating with NSS Mumbai? Let's work together to advance space exploration and education.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 btn-primary"
            >
              Contact Us
            </a>
            <a
              href="https://linktr.ee/NSS_USA_Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-secondary glass"
            >
              Learn More <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
