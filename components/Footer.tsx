'use client'

import { Linkedin, Twitter, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] border-t border-gray-800 py-6 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6">
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            <a href="https://www.linkedin.com/company/nssusamumbai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0B3D91] hover:border-[#38BDF8] transition border border-gray-800">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/nss_mumbai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0B3D91] hover:border-[#38BDF8] transition border border-gray-800">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/NSSUSA.Mumbai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0B3D91] hover:border-[#38BDF8] transition border border-gray-800">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/nationalspacesociety_mumbai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0B3D91] hover:border-[#38BDF8] transition border border-gray-800">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://open.spotify.com/show/57Nh01m6jJgAqhCTOaQjsJ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0B3D91] hover:border-[#38BDF8] transition border border-gray-800">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@nationalspacesociety_mumbai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0B3D91] hover:border-[#38BDF8] transition border border-gray-800">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://chat.whatsapp.com/I56FM6B8zaRA0ETvwKSDHf" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0B3D91] hover:border-[#38BDF8] transition border border-gray-800">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm">
          © 2026 NSS Mumbai Chapter. <span className="text-[#4B9CD3]">Ad Astra.</span>
        </div>
      </div>
    </footer>
  )
}
