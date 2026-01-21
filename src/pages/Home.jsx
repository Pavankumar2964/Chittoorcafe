import React from 'react';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import Reviews from '../components/Reviews';
import ContactSection from '../components/ContactSection';

const Home = () => {
    return (
        <main>
            <Hero />
            <MenuSection />
            {/* About Section Inline or component - Adding a brief about section here */}
            <section id="about" className="py-20 bg-black text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <span className="text-yellow-500 font-semibold tracking-wider uppercase text-sm">Our Story</span>
                    <h2 className="mt-2 text-3xl md:text-5xl font-display font-bold text-white mb-6">Legacy of Flavor</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Chittoor Cafe brings you the authentic essence of Andhra cuisine.
                        Located on the Bengaluru - Tirupati Hwy, we are the perfect pitstop for travelers and locals alike.
                        Whether it's our signature Mandi, spicy Biryanis, or refreshing beverages, every dish is crafted with passion.
                    </p>
                    <img
                        src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
                        alt="Restaurant Interior"
                        className="w-full h-80 object-cover rounded-2xl opacity-80 hover:opacity-100 transition-opacity duration-500"
                    />
                </div>
            </section>
            <Reviews />
            <ContactSection />
        </main>
    );
};

export default Home;
