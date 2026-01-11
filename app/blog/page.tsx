'use client'

import Starfield from '@/components/Starfield'
import { ExternalLink, Calendar, User, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Unveiling China's Reusable Rocket Revolution: The Long March 10's Journey to Lunar Dominance",
      excerpt: "Can you think of a reusable rocket? Starship? Yes, that's the right answer, but I am not talking about Starship. We have something newer and more interesting - China's reusable rockets. The China Aerospace Science and Technology Corporation (CASC) plans to launch their first-ever reusable rockets in 2025 and 2026.",
      author: "Mandavi Tiwari",
      date: "April 01, 2024",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVpuNs5yf_H3YPc_VPwtb5eUkmRMgwkTuAOdOc2sZOAf6Gew4HAdAS7toa2Ahlawjpza-6q2YBJ44s1ExttkwwSp34s9L4VDRFe4_m8TzL2fg5ZHsCElI3i2EwzMFcueQET-ZnNurhRtnS6AtVsH0PFtVw24cFfGfLV4D1QMqD0Twwzb8EBgzFULnhzBn2/w400-h334/IMG-20240331-WA0000.jpg",
      link: "https://nssmumbai.blogspot.com/2024/04/unveiling-chinas-reusable-rocket.html"
    },
    {
      title: "Chandrayaan 3: India's Triumph in Lunar Exploration",
      excerpt: "In the vast expanse of the cosmos, the moon has captivated humanity with its enigmatic allure. India, among many nations, has embarked on a remarkable journey of lunar exploration, with ISRO at the forefront. Today, as we witness the successful launch of Chandrayaan 3, let us delve into its significance.",
      author: "National Space Society - Mumbai",
      date: "July 14, 2023",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnlr7KMUIeQh20Rr5fcBbtl71MSQWTmSaLx_n3Y99N91AEtUEAnLGg_D4hRyJoD4-V7xjKVBeMlc9rrbljbb3qOxbqoEUcCf1WOaimk-cGQWoQGZ1MKscyjJwGkd42p8E6ZGRfKFI4pZf3hYceUh_GWBFr78totRwmrUU_I0SU9j3pGR8lZQWL_AJQHg/w598-h296/chandra3.gif",
      link: "https://nssmumbai.blogspot.com/2023/07/chandrayaan-3-indias-triumph-in-lunar.html"
    },
    {
      title: "Wonders of Perseverance Rover and Ingenuity Helicopter",
      excerpt: "Can you guess the name of the first drone that flew to another planet? If you are thinking of the Perseverance Mission, you are going in the right direction. It is the Ingenuity helicopter developed by NASA. Let's explore how this helicopter and its partner explorer achieved something that was almost impossible.",
      author: "Mandavi Tiwari",
      date: "May 15, 2023",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCYqqyyWNQ49uKGNS658gbn5lvg4ZIF9VNu6TRdHOkT1WqUnaYNL1oIxFIzsPxyOXtlWIDPAZUfr1e1v9uXpfEuWlL4QR1O9HVM5nBp9qe9pO6BEJ1OM3VE0jE_Wv9oiA3pIRaW7SVoptstJLJWXAgMTNYdeVO8cSk4af6yrC55keVFpDm2_hucy6oJQ/w640-h360/helicopter.gif",
      link: "https://nssmumbai.blogspot.com/2023/05/wonders-of-perseverance-rover-and.html"
    },
    {
      title: "Rosetta and the Philae Mission: An Amazing Story to be Told",
      excerpt: "Have you heard of Rosetta and Philae? Yes, I am talking about the famous interstellar love story of the Philae lander and its partner satellite, Rosetta. It was not just a mission but a story to be told as the Philae lander left an indelible mark in the hearts of people.",
      author: "Mandavi Tiwari",
      date: "March 06, 2023",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEim1WLunmElba4TOfgdiAvnnPckM1bZ0glhY_NWAb9-cyq7CrCM6nJUIFF4mf2augIUKm1L5RXaNJv34l4LoFcloZQIFHf0_IRwfEhQukws0thrkQBDBp1KYLW2WfwHmoAnOx5H1vON1zNwUE4d66JXX3w9o4FUxdSjlaF4ob3SLW72qDaEP2YZ5gBpDw/w640-h600/ESA_Rosetta_NavCam_20150131_Mosaic.jpg",
      link: "https://nssmumbai.blogspot.com/2023/03/rosetta-and-philae-mission-amazing.html"
    },
    {
      title: "MMX: JAXA's Mission For Planetary Probe",
      excerpt: "Martian Moons eXploration (MMX) is JAXA's mission to shed light on the history of the Martian moons and the evolution of the Mars region. The mission's objective includes observing Mars' two moons, Phobos and Deimos, and returning to Earth with a sample taken from one of them.",
      author: "Mandavi Tiwari",
      date: "January 09, 2023",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiP8oYbEkoCQnBneeDIiTFInEALBHXqidROpeyoTK6pLA6ttBPmwN31eO5HjCGeAFpla2twdh4k9hblJ6X4fS9naoORxNLVnt_k36zu8J2pI-BDs43l7EvtmnyaZKYGrXcbjaxeOGQWlT0RkEIl0IbdkDE9xqbuAX7Edu5ES8nq9gni4vmHWYZBvpGmgg/w400-h339/img_separation_mmx02.png",
      link: "https://nssmumbai.blogspot.com/2023/01/mmx-jaxas-mission-for-planetary-probe.html"
    }
  ]

  return (
    <>
      <Starfield />
      
      <div className="relative z-10 pt-24 sm:pt-32 pb-20 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold cosmic-gradient mb-4">
              NSS Mumbai Blog
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Exploring the cosmos through articles on space exploration, technology, and humanity's journey to the stars
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="glass-cosmic rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-400 transition-all card-cosmic group"
              >
                {/* Featured Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-blue-950/50 to-purple-950/50">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-3 text-xs sm:text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-xs sm:text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors group/link"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* View All on Blogspot */}
          <div className="text-center mt-12 sm:mt-16">
            <a
              href="https://nssmumbai.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] group"
            >
              <span>View All Articles</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Categories */}
          <div className="mt-16 sm:mt-20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center sm:text-left">Popular Topics</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
              {[
                'Space Exploration', 'ISRO', 'NASA', 'Chandrayaan 3', 'Rocket Science',
                'Deep Space Exploration', 'Lunar Exploration', 'Astrophysics', 'Moon Mission',
                'Space Technology', 'Exoplanet', 'Black Hole'
              ].map((tag, i) => (
                <a
                  key={i}
                  href={`https://nssmumbai.blogspot.com/search/label/${tag.replace(/ /g, '%20')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 transition-all text-xs sm:text-sm font-medium"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
