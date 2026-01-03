'use client'

import { Linkedin, Twitter, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">NSS</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">NSS Mumbai</div>
                <div className="text-gray-400 text-xs">National Space Society</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering humanity's journey to the stars. A chapter of the National Space Society (USA) dedicated to advancing space exploration and education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://nssmumbai.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="/explore/magazine" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Magazine
                </a>
              </li>
              <li>
                <a href="/explore/webinar" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Webinars
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Connect With Us</h3>
            <p className="text-gray-400 text-sm mb-4">
              Mumbai, Maharashtra<br />
              India - 421301
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/company/nssusamumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com/nss_mumbai?s=08"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-400 transition-all transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/NSSUSA.Mumbai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/nationalspacesociety_mumbai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-all transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.youtube.com/@nationalspacesociety_mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-all transform hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://open.spotify.com/show/57Nh01m6jJgAqhCTOaQjsJ?si=881c8327b42944eb&nd=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-all transform hover:scale-110"
                aria-label="Spotify Podcast"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
              <a
                href="https://chat.whatsapp.com/I56FM6B8zaRA0ETvwKSDHf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-all transform hover:scale-110"
                aria-label="WhatsApp Community"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} National Space Society - Mumbai Chapter. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              A chapter of the National Space Society (USA)
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
