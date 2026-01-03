'use client'

import { Rocket, Globe, Users, BookOpen, Calendar, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Animated background stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="mb-8 animate-float">
            <Rocket className="w-20 h-20 mx-auto text-blue-400" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Creating Spacefaring Civilization
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
            "Empowering humanity's journey to the stars"
          </p>
          
          <p className="text-xl text-gray-400 mb-8 italic">
            "Future of Humanity is Space"
          </p>
          
          <div className="glass p-6 rounded-2xl max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-200 italic">
              "Space is the ultimate destination for humankind to orchestrate the creations of their heart and chisel the dreams within their minds."
            </p>
            <p className="text-blue-400 mt-2">- Dr. Ravi Margasahayam</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/explore" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Our Work
            </Link>
            <Link 
              href="/about" 
              className="px-8 py-4 glass rounded-full text-white font-semibold hover:bg-white/20 transition-all transform hover:scale-105"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Globe, label: 'Global Reach', value: 'International' },
              { icon: Users, label: 'Community', value: 'Growing' },
              { icon: BookOpen, label: 'Resources', value: '8 Volumes' },
              { icon: Calendar, label: 'Events', value: 'Regular' },
            ].map((stat, index) => (
              <div key={index} className="glass p-6 rounded-2xl text-center transform hover:scale-105 transition-all">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 gradient-text">
            Recent Activities and Events
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Event Registration */}
            <div className="glass p-8 rounded-2xl hover:bg-white/20 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Upcoming Events</h3>
              <p className="text-gray-300 mb-6">
                Join us for exciting workshops, webinars, and discussions about space exploration and technology.
              </p>
              <a
                href="https://linktr.ee/NSS_USA_Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-700 transition-all"
              >
                Register Now <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Magazine */}
            <div className="glass p-8 rounded-2xl hover:bg-white/20 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Latest Magazine</h3>
              <p className="text-gray-300 mb-6">
                Volume 8 of our magazine is now published! Explore the latest insights in space exploration and technology.
              </p>
              <Link
                href="/explore/magazine"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-full text-white font-semibold hover:bg-purple-700 transition-all"
              >
                Read Now <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Podcasts */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 gradient-text">
            Featured Podcasts
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">
                Becoming a Spacefaring Civilization with Isaac Arthur
              </h3>
              <div className="aspect-video bg-black/30 rounded-lg mb-4 flex items-center justify-center">
                <a
                  href="https://spotifycreators-web.app.link/e/pr8WiUfArYb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Listen on Spotify →
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">
                Isomorphism in Astrophysics with Dr. Parisee Shirke
              </h3>
              <div className="aspect-video bg-black/30 rounded-lg mb-4 flex items-center justify-center">
                <a
                  href="https://open.spotify.com/episode/6xdh1cEJwy5arHxC3Ydw4H?si=hp9Q3oMrRn2RC4fhGyVtlg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Listen on Spotify →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 gradient-text">
            Latest from Our Blog
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Unveiling China's Reusable Rocket Revolution",
                description: "The Long March 10's Journey to Lunar Dominance",
                link: "https://nssmumbai.blogspot.com/2024/04/unveiling-chinas-reusable-rocket.html"
              },
              {
                title: "Chandrayaan 3",
                description: "India's Triumph in Lunar Exploration",
                link: "https://nssmumbai.blogspot.com/2023/07/chandrayaan-3-indias-triumph-in-lunar.html"
              },
              {
                title: "Wonders of Perseverance Rover",
                description: "And Ingenuity Helicopter on Mars",
                link: "https://nssmumbai.blogspot.com/2023/05/wonders-of-perseverance-rover-and.html"
              },
            ].map((post, index) => (
              <a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-6 rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105 group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <p className="text-gray-400">{post.description}</p>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://nssmumbai.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              View All Articles <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Global Connections */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 gradient-text">
            Global Connections
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Connecting on Global Level
              </h3>
              <p className="text-gray-300">
                In Picture: Prathmesh Barapatre (President) and Sharvil Joglekar (Vice President) with ROSCOMOS representative at IAC 2021 Dubai.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                US-India Space Cooperation
              </h3>
              <p className="text-gray-300">
                In the picture: Prathmesh Barapatre (President), Eric Garcetti (US Ambassador to India), and Mike Hankey (US Consul General).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Stay Connected
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Stay up-to-date on the latest news and information about blogs, magazines, and more by subscribing to our newsletter.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            Subscribe Now
          </Link>
        </div>
      </section>
    </div>
  )
}
