import React from 'react';
import { Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                    alt="Restaurant Ambiance"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 gradient-mask-b-0"></div>
                <div className="pointer-events-none absolute right-8 top-16 hidden xl:block">
                    <div className="relative w-56 h-72">
                        <div className="absolute -left-6 top-10 w-24 h-24 rounded-full bg-amber-500/15 blur-2xl"></div>
                        <div className="absolute right-0 top-0 w-36 h-48 rounded-[40px] border border-amber-300/30 bg-white/10 shadow-[0_24px_80px_rgba(251,191,36,0.15)]"></div>
                        <div className="absolute left-1/2 top-10 -translate-x-1/2 w-24 h-32 rounded-full bg-amber-300/15"></div>
                        <div className="absolute left-1/2 top-6 -translate-x-1/2 w-10 h-20 rounded-full bg-amber-200/40"></div>
                        <div className="absolute left-1/2 top-16 -translate-x-1/2 w-16 h-24 rounded-full bg-white/20"></div>
                        <div className="absolute left-1/2 top-40 -translate-x-1/2 w-20 h-6 rounded-full bg-amber-300/10"></div>
                    </div>
                </div>
                <div className="pointer-events-none absolute left-10 top-32 hidden lg:block">
                    <div className="flex flex-col gap-3">
                        <span className="block w-3 h-3 rounded-full bg-amber-300 shadow-lg shadow-amber-400/30"></span>
                        <span className="block w-4 h-4 rounded-full bg-emerald-300 shadow-lg shadow-emerald-300/30"></span>
                        <span className="block w-2 h-2 rounded-full bg-red-400 shadow-lg shadow-red-400/30"></span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                            ⭐ 4.1 | 700+ Reviews
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-2 leading-tight">
                        TARA CAFE <br />
                        <span className="text-3xl md:text-5xl font-normal text-amber-400 block mt-2">
                            తార కేఫ్
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 mt-4 font-medium italic tracking-wide">
                        "Fresh juices, dreamy ice creams, and decadent falooda crafted for every craving."
                    </p>
                    <p className="max-w-2xl mx-auto text-gray-400 mt-4 text-sm md:text-base">
                        Discover a futuristic dessert lounge where bold flavors meet premium refreshment.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                        <a
                            href="tel:+919347157442"
                            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-amber-500/20"
                        >
                            <Phone size={20} />
                            Call Now
                        </a>

                        <a
                            href="https://www.google.com/maps/dir//TARA+CAFE,32-802,Bengaluru-Tirupati+Hwy,Murukampattu,Andhra+Pradesh+517127"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                        >
                            <MapPin size={20} />
                            Get Directions
                        </a>
                    </div>

                    <div className="mt-8">
                        <a href="#menu" className="text-gray-400 hover:text-white flex items-center justify-center gap-1 text-sm font-medium transition-colors">
                            View Menu <ArrowRight size={14} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
