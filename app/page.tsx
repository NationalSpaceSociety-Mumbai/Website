'use client'

import Starfield from '@/components/Starfield'
import Link from 'next/link'
import { Mail, Send, CheckCircle, Rocket, Calendar, BookOpen, Users, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append('email', email)
      await fetch('https://nssmumbai.substack.com/api/v1/free', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      })
      setIsSuccess(true)
      setEmail('')
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error('Subscription error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const upcomingEvents = [
    { title: 'Future of Commercial Space Travel', date: 'Jan 25, 2026', type: 'Webinar' },
    { title: 'Deep Space Exploration Tech', date: 'Feb 02, 2026', type: 'Workshop' },
    { title: 'Artemis Program Discussion', date: 'Feb 15, 2026', type: 'Panel' }
  ]

  return (
    <>
      <Starfield />
      
      {/* Hero Section with Video Background Option */}
      <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-4 pt-32 pb-16">
        {/* Optional: Add video background */}
        {/* <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-30 z-0">
          <source src="/videos/rocket-launch.mp4" type="video/mp4" />
        </video> */}
        
        <div className="max-w-6xl mx-auto animate-fadeIn relative z-10">
          <div className="mb-6 inline-flex items-center px-6 py-2 rounded-full border-2 border-blue-500/50 bg-blue-500/10 text-blue-400 text-sm font-bold tracking-wider uppercase backdrop-blur-sm animate-pulse-glow">
            <Rocket className="w-4 h-4 mr-2" />
            Mission: Artemis Generation
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tight mb-8 leading-none">
            <span className="block text-white drop-shadow-2xl">CREATING A</span>
            <span className="block cosmic-gradient drop-shadow-2xl">SPACEFARING</span>
            <span className="block cosmic-gradient drop-shadow-2xl">CIVILIZATION</span>
          </h1>
          
          <p className="mt-8 max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            The Mumbai Chapter of the National Space Society. 
            <span className="block mt-2 text-blue-300">Orchestrating the creations of the heart and chiseling the dreams within our minds.</span>
          </p>
          
          <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/events"
              className="group px-10 py-5 btn-primary text-white font-bold rounded-xl text-lg transition-all flex items-center justify-center gap-3"
            >
              <Calendar className="w-6 h-6" />
              Upcoming Events
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="px-10 py-5 btn-secondary text-blue-300 font-bold rounded-xl text-lg transition-all hover:text-white"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Calendar, label: 'Events Hosted', value: '50+', color: 'blue' },
              { icon: Users, label: 'Active Members', value: '1,200+', color: 'purple' },
              { icon: BookOpen, label: 'Publications', value: '8', color: 'cyan' },
              { icon: Rocket, label: 'Years Active', value: '5+', color: 'orange' }
            ].map((stat, i) => (
              <div key={i} className="glass-cosmic p-6 rounded-2xl text-center card-cosmic transition-all border border-blue-500/20">
                <stat.icon className={`w-12 h-12 mx-auto mb-4 text-${stat.color}-400`} />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events Preview */}
      <div className="relative z-10 py-20 px-4 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold cosmic-gradient mb-2">Upcoming Events</h2>
              <p className="text-gray-400">Join us in our journey to the stars</p>
            </div>
            <Link href="/events" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-semibold">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, i) => (
              <div key={i} className="glass-cosmic p-6 rounded-xl border border-blue-500/20 hover:border-blue-400 transition-all card-cosmic">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-bold border border-blue-500/30">
                    {event.type}
                  </span>
                  <span className="text-gray-500 text-sm">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{event.title}</h3>
                <Link href="/events" className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center gap-2">
                  Register <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-cosmic p-10 md:p-16 rounded-3xl border border-blue-500/30 relative overflow-hidden">
            {/* Animated cosmic orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Join the Artemis Generation</h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                  Get exclusive updates on space exploration, STEAM programs, upcoming events, and be part of humanity's journey to the cosmos.
                </p>
              </div>
              
              {/* Newsletter Form */}
              {!isSuccess ? (
                <form onSubmit={handleSubscribe} className="max-w-2xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-5 bg-[#0a0e27]/90 border-2 border-blue-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all disabled:opacity-50 text-lg"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group min-w-[180px] text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Subscribing...</span>
                        </>
                      ) : (
                        <>
                          <span>Subscribe</span>
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 text-center leading-relaxed">
                    By subscribing, you'll receive updates about events, publications, and space advocacy. 
                    <br className="hidden sm:block" />
                    Check your inbox for a confirmation email after subscribing.
                  </p>
                </form>
              ) : (
                <div className="max-w-xl mx-auto text-center py-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 border-3 border-green-400 rounded-full mb-6 animate-pulse">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">Check Your Email!</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    We've sent a confirmation link to your inbox. Click it to complete your subscription and join the cosmic community.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold underline"
                  >
                    Subscribe with another email
                  </button>
                </div>
              )}

              {/* Additional Info */}
              <div className="mt-10 pt-8 border-t border-blue-500/20 flex flex-wrap justify-center gap-6 text-sm">
                <a
                  href="https://nssmumbai.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-semibold flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  Read Past Newsletters
                </a>
                <span className="text-gray-700">•</span>
                <Link
                  href="/contact"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-semibold flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
