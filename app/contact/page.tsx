'use client'

import { Mail, MapPin, Send, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 gradient-text">
            Get In Touch
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
            <p className="text-gray-300 mb-6">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <p className="text-gray-300 mb-4">
                Click the button below to fill out our contact form:
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfH2qOT76ojoG0xK7gjjVw8yIG3deVGW4pCrTL_Os5fsQ2dgQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                <Send className="w-4 h-4" />
                Open Contact Form
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Location */}
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                  <p className="text-gray-300">
                    Mumbai, Maharashtra<br />
                    India - 421301
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Newsletter</h3>
                  <p className="text-gray-300 mb-3">
                    Stay up-to-date with our latest blogs, magazines, events, and space news.
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfH2qOT76ojoG0xK7gjjVw8yIG3deVGW4pCrTL_Os5fsQ2dgQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Subscribe Now →
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
              <p className="text-gray-300 mb-6">
                Follow us on social media for daily updates and space content
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/company/nssusamumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all transform hover:scale-110"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://twitter.com/nss_mumbai?s=08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-400 transition-all transform hover:scale-110"
                  title="Twitter"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.facebook.com/NSSUSA.Mumbai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all transform hover:scale-110"
                  title="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/nationalspacesociety_mumbai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-all transform hover:scale-110"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@nationalspacesociety_mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-all transform hover:scale-110"
                  title="YouTube"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://open.spotify.com/show/57Nh01m6jJgAqhCTOaQjsJ?si=881c8327b42944eb&nd=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-all transform hover:scale-110"
                  title="Spotify"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>
                <a
                  href="https://chat.whatsapp.com/I56FM6B8zaRA0ETvwKSDHf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-all transform hover:scale-110"
                  title="WhatsApp"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="mt-16 glass p-12 rounded-2xl text-center">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of a passionate community working towards making humanity a spacefaring civilization.
          </p>
          <a
            href="https://linktr.ee/NSS_USA_Mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            Register for Events
          </a>
        </div>
      </div>
    </div>
  )
}
