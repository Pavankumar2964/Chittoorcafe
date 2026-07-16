import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import menu from '../data/menu';

const MenuSlider = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setAutoPlay(false);
    };
    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
        setAutoPlay(false);
    };

    // Auto-scroll effect
    useEffect(() => {
        if (!autoPlay) return;
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, [autoPlay]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    const item = items[currentIndex];

    return (
        <div className="relative group" onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(true)}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="bg-gradient-to-br from-black/40 to-black/60 rounded-3xl border border-amber-500/20 overflow-hidden flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 h-full min-h-[350px] md:min-h-[400px] shadow-2xl shadow-amber-500/10 hover:shadow-amber-500/20 transition-shadow duration-300"
                >
                    <div className="w-full md:w-1/2 h-64 md:h-[400px] relative rounded-2xl overflow-hidden shadow-2xl">
                        {item.image ? (
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center text-gray-500 italic">
                                Image Coming Soon
                            </div>
                        )}
                        <div className="absolute top-4 left-4">
                            <span title={item.veg ? "Vegetarian" : "Non-Vegetarian"} className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-lg shadow-lg hover:scale-105 transition-transform">
                                {item.veg ? "🟢 Veg" : "🔴 Non-Veg"}
                            </span>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-center p-2 md:p-4">
                        <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 line-clamp-2">{item.name}</h4>
                        <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-4 md:mb-6"></div>
                        <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 italic line-clamp-3">
                            {item.description || "A delicious house specialty made with the freshest local ingredients and authentic Andhra spices."}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">₹{item.price}</span>
                            <div className="text-xs md:text-sm text-gray-400 bg-black/40 px-3 py-1 rounded-full">
                                {currentIndex + 1} / {items.length}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {items.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-amber-500 hover:text-black text-white p-2 md:p-3 rounded-full backdrop-blur-md border border-amber-500/30 transition-all opacity-0 group-hover:opacity-100 z-10 md:inline-flex hidden md:flex"
                        aria-label="Previous item"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-amber-500 hover:text-black text-white p-2 md:p-3 rounded-full backdrop-blur-md border border-amber-500/30 transition-all opacity-0 group-hover:opacity-100 z-10 md:inline-flex hidden md:flex"
                        aria-label="Next item"
                    >
                        <ChevronRight size={24} />
                    </button>
                    
                    {/* Mobile controls */}
                    <div className="md:hidden flex justify-center gap-2 mt-4">
                        <button
                            onClick={prev}
                            className="bg-amber-500 hover:bg-amber-600 text-black p-2 rounded-full transition-all"
                            aria-label="Previous item"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={next}
                            className="bg-amber-500 hover:bg-amber-600 text-black p-2 rounded-full transition-all"
                            aria-label="Next item"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </>
            )}

            {/* Progress indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 md:gap-2">
                {items.map((_, idx) => (
                    <motion.div
                        key={idx}
                        className={`h-1 rounded-full transition-all ${
                            idx === currentIndex ? 'bg-amber-500 w-8' : 'bg-white/20 w-2'
                        }`}
                        animate={{ width: idx === currentIndex ? 32 : 8 }}
                    />
                ))}
            </div>
        </div>
    );
};

const MenuSection = ({ preview = false }) => {
    // For preview mode, we'll pick specific popular items
    const previewItems = (() => {
        const popularNames = ["Mango Juice", "Orange Juice", "Mango Ice Cream", "Rose Falooda", "Pistachio Falooda"];
        const foundItems = [];

        // Flatten the menu to search
        menu.forEach(category => {
            category.items.forEach(item => {
                if (popularNames.includes(item.name)) {
                    foundItems.push(item);
                }
            });
        });

        // Sort by the order in popularNames if possible, or just return found
        return foundItems.sort((a, b) => popularNames.indexOf(a.name) - popularNames.indexOf(b.name));
    })();

    const displayData = preview ? [{ category: "Popular Favorites", items: previewItems }] : menu;

    return (
        <section id="menu" className="py-16 md:py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-amber-500 font-semibold tracking-wider uppercase text-xs md:text-sm inline-block px-4 py-1 bg-amber-500/10 rounded-full"
                    >
                        {preview ? "Taste the Best" : "Explore Our Flavors"}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-4 text-3xl md:text-5xl font-display font-bold text-white"
                    >
                        {preview ? "Customer Favorites" : "Our Full Menu"}
                    </motion.h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="space-y-12 md:space-y-20">
                    {displayData.map((section, index) => (
                        <div key={index}>
                            {!preview && (
                                <motion.h3
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="text-2xl md:text-3xl font-bold text-amber-500 mb-6 md:mb-8 border-l-4 border-amber-500 pl-4"
                                >
                                    {section.category}
                                </motion.h3>
                            )}
                            <MenuSlider items={section.items} />
                        </div>
                    ))}
                </div>

                {preview ? (
                    <div className="text-center mt-16 md:mt-20">
                        <Link to="/menu" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all transform hover:scale-105 shadow-xl shadow-amber-500/30">
                            View Full Menu <ArrowRight size={20} />
                        </Link>
                    </div>
                ) : (
                    <div className="text-center mt-16 md:mt-20">
                        <Link to="/" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg transition-all border border-white/10">
                            <X size={20} /> Exit Menu
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MenuSection;
