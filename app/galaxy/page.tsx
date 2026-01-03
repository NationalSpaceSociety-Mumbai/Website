'use client'

import { Play, Coffee, ChevronLeft, ChevronRight, Gamepad2, Star, Rocket, Headset, Ticket } from 'lucide-react'
import Link from 'next/link'

export default function GalaxyPage() {
    return (
        <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden font-sans">
            {/* Custom Navbar for Galaxy VR */}
            <nav className="fixed w-full z-50 glass border-b border-white/10 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                            <Gamepad2 className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold tracking-wider">GALAXY VR</span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                        <a href="#home" className="hover:text-white transition-colors">Home</a>
                        <a href="#about" className="hover:text-white transition-colors">About Us</a>
                        <a href="#experiences" className="hover:text-white transition-colors">Experience</a>
                        <a href="#events" className="hover:text-white transition-colors">Events</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                        <a href="#about" className="hover:text-white transition-colors">About Us</a>
                    </div>
                    <button className="px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-all text-sm font-medium">
                        LOGIN
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <header id="home" className="relative h-screen flex items-center">
                {/* Background Image Placeholder - using a gradient/overlay for now */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Immersive <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Experiences</span> That <br />
                            Feel Like The Future
                        </h1>
                        <p className="text-gray-400 text-lg mb-10 max-w-lg">
                            Experience the thrill of space, the depths of the ocean, and the edges of reality with our state-of-the-art VR simulators.
                        </p>
                        <div className="flex items-center gap-6">
                            <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all">
                                Get Started
                            </button>
                            <button className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors group">
                                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-blue-400">
                                    <Play className="w-5 h-5 fill-current" />
                                </div>
                                <span className="font-medium">Watch Video</span>
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        {/* Astronaut Image would go here */}
                        {/* <img src="/astronaut.png" alt="Astronaut" className="w-full h-auto animate-float" /> */}
                    </div>
                </div>
            </header>

            {/* About Section */}
            <section id="about" className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">
                            You Can't Experience <br /> This Anywhere Else
                        </h2>
                        <div className="h-1 w-20 bg-blue-600 mb-8"></div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Our cutting-edge VR technology allows you to explore worlds beyond your imagination. From high-speed racing to interstellar warfare, we provide an immersion level that simply cannot be matched by home systems.
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Maybe you want to walk on the moon, or dive into the Mariana Trench. At Galaxy VR Cafe, the universe is at your fingertips.
                        </p>
                        <button className="px-8 py-3 border border-white/20 rounded-full hover:bg-blue-600/20 hover:border-blue-500 transition-all text-sm font-medium uppercase tracking-wide">
                            Read More
                        </button>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>
                        {/* Robot Arm Image Placeholder */}
                        <div className="relative z-10 border border-white/10 rounded-2xl p-4 glass bg-black/40">
                            <img
                                src="https://images.unsplash.com/photo-1622979135228-5b1ed37a4c65?q=80&w=2070&auto=format&fit=crop"
                                alt="VR Equipment"
                                className="w-full rounded-xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Experiences Carousel */}
            <section id="experiences" className="py-24 px-6 bg-[#0B0D1B]">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Experiences</h2>
                    <p className="text-xl text-gray-400">Discover Our Worlds</p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="relative group">
                        <div className="overflow-hidden rounded-3xl relative aspect-[2/1]">
                            <img
                                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2078&auto=format&fit=crop"
                                alt="VR Experience"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-12 text-center">
                                <h3 className="text-5xl font-bold mb-2 tracking-wider">VR X-SHIP</h3>
                                <p className="text-gray-300 mb-6">Multi-user motion Cinema VR Family Entertainment Solution</p>
                                <button className="px-8 py-3 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-700 transition-all">
                                    Discover
                                </button>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Gallery / Equipment */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-16">
                        Take A Look At What <br />
                        You'll Enjoy At Galaxy VR Cafe
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="group relative">
                                <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-4 hover:-translate-y-2 transition-transform duration-300">
                                    <img
                                        src={`https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop`}
                                        alt="VR Console"
                                        className="w-full h-48 object-cover rounded-xl mb-4"
                                    />
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
                                        <span className="px-4 py-1 bg-blue-600 rounded-full text-xs font-bold">VIEW MORE</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cafe Section */}
            <section className="py-24 px-6 bg-[#0B0D1B]">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="relative">
                        <div className="absolute inset-0 bg-orange-500/20 blur-[60px] rounded-full"></div>
                        <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/10 p-2">
                            <img
                                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
                                alt="Coffee"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-4xl font-bold mb-4">Galaxy VR Cafe <br /> Coffee Shop</h2>
                        <div className="h-1 w-20 bg-orange-500 mb-8 mx-auto md:mx-0"></div>
                        <p className="text-gray-400 mb-6">
                            Special Requests? Just Ask. Drinks will be frozen when you return from space.
                        </p>
                        <p className="text-gray-500 italic mb-8">
                            "The best coffee in the galaxy, guaranteed."
                        </p>
                        <button className="px-8 py-3 border border-white/20 rounded-full hover:bg-orange-500 hover:border-orange-500 transition-all text-sm font-medium uppercase">
                            View Menu
                        </button>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Standard Pass */}
                        <div className="bg-gradient-to-b from-blue-900/20 to-[#020617] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
                            <div className="absolute top-0 right-0 p-4">
                                <Ticket className="w-6 h-6 text-gray-500 group-hover:text-blue-400" />
                            </div>
                            <h3 className="text-blue-400 font-bold tracking-wider mb-2">VISITOR PASS</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold text-white">$25</span>
                                <span className="text-gray-500">/ hour</span>
                            </div>
                            <ul className="space-y-4 text-gray-400 mb-8 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Access to Main Hall</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> 1 Standard VR Experience</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Free Drink @ Cafe</li>
                            </ul>
                            <button className="w-full py-3 bg-white/5 hover:bg-blue-600 rounded-lg transition-colors font-medium">
                                Book Now
                            </button>
                        </div>

                        {/* VIP Pass */}
                        <div className="bg-gradient-to-b from-purple-900/20 to-[#020617] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-purple-500/50 transition-colors">
                            <div className="absolute top-0 right-0 p-4">
                                <Star className="w-6 h-6 text-yellow-500" />
                            </div>
                            <h3 className="text-purple-400 font-bold tracking-wider mb-2">GALAXY PASS</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold text-white">$45</span>
                                <span className="text-gray-500">/ hour</span>
                            </div>
                            <ul className="space-y-4 text-gray-400 mb-8 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> All Access Pass</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Unlimited VR Experiences</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Priority Queue</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Free Snacks & Drinks</li>
                            </ul>
                            <button className="w-full py-3 bg-white/5 hover:bg-purple-600 rounded-lg transition-colors font-medium">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section id="events" className="py-24 px-6 bg-[#0B0D1B]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        The Future Of Events & Entertainment
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Team Battles", date: "Every Friday", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop" },
                            { title: "Space Exploration", date: "Coming Soon", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop" },
                            { title: "Silent Disco VR", date: "Sat, Nov 12", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop" }
                        ].map((event, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-2xl mb-4 h-64">
                                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <p className="text-sm font-bold text-blue-400 uppercase mb-1">{event.date}</p>
                                        <h3 className="text-xl font-bold">{event.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all text-sm font-medium uppercase">
                            View All Events
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-6 bg-gradient-to-b from-[#0B0D1B] to-blue-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12">What People Say <br /> About Galaxy VR Cafe</h2>

                    <div className="relative glass p-12 rounded-3xl border border-white/10">
                        <div className="text-6xl text-blue-400 absolute top-8 left-8 opacity-50">"</div>

                        <p className="text-2xl font-light italic leading-relaxed mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                        </p>

                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" alt="User" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold">James Ferguson</h4>
                                <p className="text-sm text-gray-400">Gaming Enthusiast</p>
                            </div>
                        </div>

                        {/* Nav Buttons */}
                        <div className="absolute bottom-8 right-8 flex gap-2">
                            <button className="p-2 rounded-full bg-black/50 hover:bg-black transition-colors">
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button className="p-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-12 px-6 border-t border-white/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-gray-400">
                    <div>
                        <div className="flex items-center gap-2 text-white mb-6">
                            <div className="w-8 h-8 rounded bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                                <Gamepad2 className="w-5 h-5" />
                            </div>
                            <span className="font-bold tracking-wider">GALAXY VR</span>
                        </div>
                        <p>Immersive experiences that take you to the next level. Join us for the future of entertainment.</p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase">Services</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400">VR Gaming</a></li>
                            <li><a href="#" className="hover:text-blue-400">Cinema 4D</a></li>
                            <li><a href="#" className="hover:text-blue-400">Events</a></li>
                            <li><a href="#" className="hover:text-blue-400">Cafe</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
                            <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
                            <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase">Contact</h4>
                        <ul className="space-y-2">
                            <li>Mumbai, Maharashtra</li>
                            <li>+91 98765 43210</li>
                            <li>hello@galaxyvr.com</li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-xs">
                    <p>&copy; 2026 Galaxy VR Cafe. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
