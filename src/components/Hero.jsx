import React from 'react';
import { ChevronRight } from 'lucide-react';
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
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-yellow-400 font-medium tracking-wider uppercase text-sm md:text-base mb-4 block">
                        Welcome to Chittoor Cafe
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                        Taste the Tradition of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                            Andhra Spice
                        </span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                        From our Special Mixed Non-Veg Mandi to the classic Veg Biryani,
                        experience culinary excellence in a premium setting.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                        <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
                            View Menu
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-yellow-500 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
