'use client'

import { Linkedin, Twitter, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] border-t border-[#4B9CD3]/20 py-16 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/images/nss-mumbai-logo.png"
                  alt="NSS Mumbai Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">NSS Mumbai</h3>
                <p className="text-xs text-[#38BDF8]">National Space Society</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Promoting space expansion and building a hopeful future for humanity through space advocacy and STEAM outreach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#38BDF8] transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="text-gray-400 hover:text-[#38BDF8] transition-colors text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/explore/magazine" className="text-gray-400 hover:text-[#38BDF8] transition-colors text-sm">
                  Magazine
                </Link>
              </li>
              <li>
                <Link href="/explore/webinar" className="text-gray-400 hover:text-[#38BDF8] transition-colors text-sm">
                  Webinars
                </Link>
              </li>
              <li>
                <a href="https://nssmumbai.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#38BDF8] transition-colors text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Connect</h4>
            <div className="grid grid-cols-4 gap-3 mb-6">
              <a
                href="https://www.linkedin.com/company/nssusamumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0B3D91] hover:border-[#38BDF8] transition-all group"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="https://twitter.com/nss_mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0B3D91] hover:border-[#38BDF8] transition-all group"
                title="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="https://www.facebook.com/NSSUSA.Mumbai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0B3D91] hover:border-[#38BDF8] transition-all group"
                title="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="https://www.instagram.com/nationalspacesociety_mumbai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0B3D91] hover:border-[#38BDF8] transition-all group"
                title="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="https://open.spotify.com/show/57Nh01m6jJgAqhCTOaQjsJ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0B3D91] hover:border-[#38BDF8] transition-all group"
                title="Spotify Podcast"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@nationalspacesociety_mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0B3D91] hover:border-[#38BDF8] transition-all group"
                title="YouTube"
              >
                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="https://chat.whatsapp.com/I56FM6B8zaRA0ETvwKSDHf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0B3D91] hover:border-[#38BDF8] transition-all group"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
            <p className="text-sm text-gray-500">
              <span className="inline-flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Mumbai, Maharashtra, India
              </span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 NSS Mumbai Chapter. <span className="text-[#4B9CD3]">Ad Astra.</span>
            </p>
            <p className="text-sm text-gray-600">
              A chapter of the National Space Society (USA)
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
