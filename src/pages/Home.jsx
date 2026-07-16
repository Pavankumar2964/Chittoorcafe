import React from 'react';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import Reviews from '../components/Reviews';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <main className="bg-black min-h-screen">
            <Hero />

            {/* Short About Section */}
            <section id="about" className="py-12 md:py-16 bg-gradient-to-b from-black via-neutral-900 to-black border-b border-amber-500/10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-4 font-display">About TARA CAFE</h2>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        "TARA CAFE is a premium dessert lounge serving freshly crafted juices, silky ice creams, and signature faloodas in an unforgettable modern atmosphere."
                    </p>
                </motion.div>
            </section>

            {/* Menu Preview */}
            <MenuSection preview={true} />

            {/* Reviews Section */}
            <Reviews />

            {/* Contact Section */}
            <ContactSection />
        </main>
    );
};

export default Home;
