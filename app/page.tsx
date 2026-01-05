'use client'

import Starfield from '@/components/Starfield'
import Link from 'next/link'
import { Mail, Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create form data for Substack
      const formData = new FormData()
      formData.append('email', email)

      // Submit directly to Substack endpoint
      await fetch('https://nssmumbai.substack.com/api/v1/free', {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Required for cross-origin
      })

      // Show success (note: no-cors means we can't verify actual response)
      setIsSuccess(true)
      setEmail('')
      
      // Reset after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error('Subscription error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Starfield />
      
      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-4 pt-32 pb-16">
        <div className="max-w-5xl mx-auto animate-fadeIn">
          <div className="mb-6 inline-block px-4 py-1 rounded-full border border-[#38BDF8] bg-[#0B3D91]/30 text-[#38BDF8] text-sm font-semibold tracking-wider uppercase backdrop-blur-sm shadow-[0_0_10px_rgba(56,189,248,0.3)] animate-pulse">
            <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Mission: Artemis Generation
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-2xl">
            <span className="block text-white">CREATING A</span>
            <span className="block text-gradient">SPACEFARING CIVILIZATION</span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100 font-light">
            The Mumbai Chapter of the National Space Society. 
            Orchestrating the creations of the heart and chiseling the dreams within our minds.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
            <Link
              href="/about"
              className="px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-[#38BDF8] hover:bg-[#0EA5E9] md:py-4 md:text-lg transition-all shadow-lg hover:shadow-sky-500/50"
            >
              Explore Vision
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border border-[#4B9CD3] text-base font-bold rounded-md text-blue-100 hover:bg-[#4B9CD3] hover:text-black md:py-4 md:text-lg transition-all bg-[#0B3D91]/20 backdrop-blur-md"
            >
              Who We Are
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#020617]/60 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-[#4B9CD3]/20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B3D91] rounded-full blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#38BDF8] rounded-full blur-3xl opacity-5"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0B3D91] to-[#38BDF8] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(56,189,248,0.3)]">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">Join the Artemis Generation</h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Subscribe to our newsletter for the latest updates on space exploration, STEAM outreach programs, and exclusive content from NSS Mumbai.
                </p>
              </div>
              
              {/* Custom Substack Form */}
              {!isSuccess ? (
                <form onSubmit={handleSubscribe} className="max-w-xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-4 bg-[#020617]/80 border border-[#4B9CD3]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/20 transition-all disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] text-white font-bold rounded-lg hover:from-[#0EA5E9] hover:to-[#0284C7] transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group min-w-[140px]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Subscribe</span>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    You'll receive a confirmation email to verify your subscription. We respect your privacy and will never share your email.
                  </p>
                </form>
              ) : (
                <div className="max-w-xl mx-auto text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 border-2 border-green-500 rounded-full mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Almost There!</h3>
                  <p className="text-gray-300 mb-4">
                    Please check your email and click the confirmation link to complete your subscription.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-[#38BDF8] hover:text-[#0EA5E9] transition-colors text-sm underline"
                  >
                    Subscribe with another email
                  </button>
                </div>
              )}

              {/* Quick Links */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="https://nssmumbai.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#38BDF8] hover:text-[#0EA5E9] transition-colors underline"
                >
                  View Previous Newsletters
                </a>
                <span className="text-gray-600">•</span>
                <Link
                  href="/contact"
                  className="text-sm text-[#38BDF8] hover:text-[#0EA5E9] transition-colors underline"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
