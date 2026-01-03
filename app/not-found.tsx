'use client'

import { Rocket, Home, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated Rocket */}
        <div className="mb-8 animate-float">
          <Rocket className="w-32 h-32 mx-auto text-blue-400 transform rotate-45" />
        </div>

        {/* 404 Text */}
        <h1 className="text-9xl font-bold mb-4 gradient-text">404</h1>
        
        <h2 className="text-4xl font-bold text-white mb-4">
          Lost in Space
        </h2>
        
        <p className="text-xl text-gray-300 mb-8">
          Looks like this page drifted into a black hole. Don't worry, we'll help you navigate back to familiar territory.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Return Home
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full text-white font-semibold hover:bg-white/20 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 glass p-6 rounded-2xl">
          <p className="text-gray-300 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/about" className="text-blue-400 hover:text-blue-300 transition-colors">
              About Us
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/explore/magazine" className="text-blue-400 hover:text-blue-300 transition-colors">
              Magazine
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/explore/webinar" className="text-blue-400 hover:text-blue-300 transition-colors">
              Webinars
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
