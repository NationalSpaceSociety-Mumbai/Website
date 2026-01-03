'use client'

import { Video, Calendar, Users, ExternalLink, Clock } from 'lucide-react'

export default function WebinarPage() {
  const upcomingWebinars = [
    {
      title: 'Future of Commercial Space Travel',
      date: 'Coming Soon',
      duration: '90 minutes',
      speaker: 'Industry Expert',
      description: 'Exploring the latest developments in commercial spaceflight and what it means for space tourism.',
      status: 'upcoming'
    },
    {
      title: 'Deep Space Exploration Technologies',
      date: 'Coming Soon',
      duration: '60 minutes',
      speaker: 'Research Scientist',
      description: 'Diving into cutting-edge propulsion systems and life support technologies for deep space missions.',
      status: 'upcoming'
    }
  ]

  const pastWebinars = [
    {
      title: 'Becoming a Spacefaring Civilization',
      speaker: 'Isaac Arthur (via Peregrination)',
      description: 'An exploration of the technical, social, and philosophical aspects of becoming a multi-planetary species.',
      link: 'https://spotifycreators-web.app.link/e/pr8WiUfArYb'
    },
    {
      title: 'Isomorphism in Astrophysics',
      speaker: 'Dr. Parisee Shirke',
      description: 'Understanding mathematical structures and their applications in astrophysical research.',
      link: 'https://open.spotify.com/episode/6xdh1cEJwy5arHxC3Ydw4H?si=hp9Q3oMrRn2RC4fhGyVtlg'
    }
  ]

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-6">
            <Video className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl font-bold mb-6 gradient-text">
            Webinars & Events
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our interactive webinars featuring leading experts discussing cutting-edge topics in space exploration, technology, and the future of humanity.
          </p>
        </div>

        {/* Upcoming Webinars */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <div key={index} className="glass p-8 rounded-2xl border-2 border-blue-500/30 hover:border-blue-500/50 transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-white text-sm font-semibold">
                    Upcoming
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{webinar.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <span>{webinar.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span>Speaker: {webinar.speaker}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{webinar.description}</p>
                <a
                  href="https://linktr.ee/NSS_USA_Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  Register Now <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Past Webinars / Recordings */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Past Webinars & Recordings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastWebinars.map((webinar, index) => (
              <div key={index} className="glass p-8 rounded-2xl hover:bg-white/20 transition-all group">
                <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl mb-6 flex items-center justify-center border border-white/10">
                  <Video className="w-16 h-16 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{webinar.title}</h3>
                <p className="text-blue-400 mb-4">Speaker: {webinar.speaker}</p>
                <p className="text-gray-300 mb-6">{webinar.description}</p>
                <a
                  href={webinar.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-white font-semibold hover:bg-white/20 transition-all"
                >
                  Watch Recording <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Why Attend */}
        <div className="glass p-12 rounded-2xl mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Why Attend Our Webinars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Speakers</h3>
              <p className="text-gray-300">
                Learn from leading scientists, engineers, and thought leaders in the space industry.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Interactive Sessions</h3>
              <p className="text-gray-300">
                Engage in Q&A sessions and discussions with speakers and fellow space enthusiasts.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Flexible Access</h3>
              <p className="text-gray-300">
                Join live or watch recordings at your convenience. All sessions are accessible online.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="glass p-12 rounded-2xl text-center">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Stay Informed
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates about upcoming webinars, events, and space exploration news.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Subscribe Now
            </a>
            <a
              href="https://linktr.ee/NSS_USA_Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full text-white font-semibold hover:bg-white/20 transition-all"
            >
              View All Events <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
