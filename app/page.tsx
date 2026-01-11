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
      
      {/* Hero Section - Mobile Optimized */}
      <div className="relative z-10 min-h-[90vh] flex items-center justify-center text-center px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-5xl mx-auto animate-fadeIn relative z-10 w-full">
          <div className="mb-4 sm:mb-6 inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border-2 border-blue-500/50 bg-blue-500/10 text-blue-400 text-[10px] sm:text-xs font-bold tracking-wider uppercase backdrop-blur-sm animate-pulse-glow">
            <Rocket className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2" />
            Mission: Artemis Generation
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 sm:mb-6 leading-tight px-2">
            <span className="block text-white drop-shadow-2xl">CREATING A</span>
            <span className="block cosmic-gradient drop-shadow-2xl">SPACEFARING CIVILIZATION</span>
          </h1>
          
          <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-300 font-light leading-relaxed px-4">
            The Mumbai Chapter of the National Space Society.
          </p>
          
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-white italic font-light px-4">
            "Empowering humanity's journey to the stars"
          </p>
          
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <Link
              href="/events"
              className="group px-5 sm:px-6 py-3 btn-primary text-white font-bold rounded-lg text-sm transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4" />
              <span>Upcoming Events</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="px-5 sm:px-6 py-3 btn-secondary text-blue-300 font-bold rounded-lg text-sm transition-all hover:text-white w-full sm:w-auto"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats - Mobile Grid */}
      <div className="relative z-10 py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Calendar, label: 'Events Hosted', value: '50+', color: 'blue' },
              { icon: Users, label: 'Active Members', value: '1,200+', color: 'purple' },
              { icon: BookOpen, label: 'Publications', value: '8', color: 'cyan' },
              { icon: Rocket, label: 'Years Active', value: '5+', color: 'orange' }
            ].map((stat, i) => (
              <div key={i} className="glass-cosmic p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center card-cosmic transition-all border border-blue-500/20">
                <stat.icon className={`w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-2 sm:mb-3 text-${stat.color}-400`} />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-[10px] sm:text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events - Mobile Optimized */}
      <div className="relative z-10 py-12 sm:py-20 px-4 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold cosmic-gradient mb-2">Upcoming Events</h2>
              <p className="text-gray-400 text-xs sm:text-sm">Join us in our journey to the stars</p>
            </div>
            <Link href="/events" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-semibold text-xs sm:text-sm">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {upcomingEvents.map((event, i) => (
              <div key={i} className="glass-cosmic p-5 sm:p-6 rounded-xl border border-blue-500/20 hover:border-blue-400 transition-all card-cosmic">
                <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                  <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-blue-500/20 text-blue-400 rounded-full text-[10px] sm:text-xs font-bold border border-blue-500/30">
                    {event.type}
                  </span>
                  <span className="text-gray-500 text-[10px] sm:text-xs">{event.date}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 leading-snug">{event.title}</h3>
                <Link href="/events" className="text-blue-400 hover:text-blue-300 font-semibold text-xs sm:text-sm flex items-center gap-2">
                  Register <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section - Mobile Optimized */}
      <div className="relative z-10 py-12 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="glass-cosmic p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl border border-blue-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-600 rounded-full blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-purple-600 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-pulse-glow">
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 px-2">Join the Artemis Generation</h2>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-xl mx-auto px-4">
                  Get exclusive updates on space exploration, STEAM programs, and upcoming events.
                </p>
              </div>
              
              {!isSuccess ? (
                <form onSubmit={handleSubscribe} className="max-w-xl mx-auto">
                  <div className="flex flex-col gap-3 mb-3 sm:mb-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 sm:px-5 py-3 bg-[#0a0e27]/90 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50 text-sm sm:text-base"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group text-sm sm:text-base"
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
                  <p className="text-[10px] sm:text-xs text-gray-500 text-center px-4">
                    You'll receive a confirmation email. We respect your privacy.
                  </p>
                </form>
              ) : (
                <div className="max-w-lg mx-auto text-center py-4 sm:py-6 px-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-500/20 border-2 border-green-400 rounded-full mb-3 sm:mb-4">
                    <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Check Your Email!</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm">
                    We've sent a confirmation link. Click it to complete your subscription.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-blue-400 hover:text-blue-300 transition-colors text-xs sm:text-sm font-semibold underline"
                  >
                    Subscribe with another email
                  </button>
                </div>
              )}

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-blue-500/20 flex flex-wrap justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs">
                <a
                  href="https://nssmumbai.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-semibold flex items-center gap-1"
                >
                  <BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Past Newsletters
                </a>
                <span className="text-gray-700">•</span>
                <Link
                  href="/contact"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-semibold flex items-center gap-1"
                >
                  <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
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
