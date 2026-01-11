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
      
      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-4 pt-32 pb-16">
        <div className="max-w-5xl mx-auto animate-fadeIn relative z-10">
          <div className="mb-6 inline-flex items-center px-5 py-2 rounded-full border-2 border-blue-500/50 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wider uppercase backdrop-blur-sm animate-pulse-glow">
            <Rocket className="w-3.5 h-3.5 mr-2" />
            Mission: Artemis Generation
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
            <span className="block text-white drop-shadow-2xl">CREATING A</span>
            <span className="block cosmic-gradient drop-shadow-2xl">SPACEFARING CIVILIZATION</span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-gray-300 font-light leading-relaxed">
            The Mumbai Chapter of the National Space Society.
          </p>
          
          <p className="mt-4 text-lg md:text-xl text-white italic font-light">
            "Empowering humanity's journey to the stars"
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/events"
              className="group px-6 py-3 btn-primary text-white font-bold rounded-lg text-sm transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Upcoming Events
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 btn-secondary text-blue-300 font-bold rounded-lg text-sm transition-all hover:text-white"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Calendar, label: 'Events Hosted', value: '50+', color: 'blue' },
              { icon: Users, label: 'Active Members', value: '1,200+', color: 'purple' },
              { icon: BookOpen, label: 'Publications', value: '8', color: 'cyan' },
              { icon: Rocket, label: 'Years Active', value: '5+', color: 'orange' }
            ].map((stat, i) => (
              <div key={i} className="glass-cosmic p-6 rounded-2xl text-center card-cosmic transition-all border border-blue-500/20">
                <stat.icon className={`w-10 h-10 mx-auto mb-3 text-${stat.color}-400`} />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-xs">{stat.label}</div>
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
              <h2 className="text-3xl font-bold cosmic-gradient mb-2">Upcoming Events</h2>
              <p className="text-gray-400 text-sm">Join us in our journey to the stars</p>
            </div>
            <Link href="/events" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-semibold text-sm">
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
                  <span className="text-gray-500 text-xs">{event.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{event.title}</h3>
                <Link href="/events" className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center gap-2">
                  Register <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="glass-cosmic p-8 md:p-10 rounded-2xl border border-blue-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Join the Artemis Generation</h2>
                <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
                  Get exclusive updates on space exploration, STEAM programs, and upcoming events.
                </p>
              </div>
              
              {!isSuccess ? (
                <form onSubmit={handleSubscribe} className="max-w-xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      disabled={isSubmitting}
                      className="flex-1 px-5 py-3 bg-[#0a0e27]/90 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group min-w-[140px]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Subscribe</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    You'll receive a confirmation email. We respect your privacy.
                  </p>
                </form>
              ) : (
                <div className="max-w-lg mx-auto text-center py-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 border-2 border-green-400 rounded-full mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Check Your Email!</h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    We've sent a confirmation link. Click it to complete your subscription.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold underline"
                  >
                    Subscribe with another email
                  </button>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-blue-500/20 flex flex-wrap justify-center gap-4 text-xs">
                <a
                  href="https://nssmumbai.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-semibold flex items-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Past Newsletters
                </a>
                <span className="text-gray-700">•</span>
                <Link
                  href="/contact"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-semibold flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
