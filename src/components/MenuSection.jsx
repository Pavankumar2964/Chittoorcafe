import React from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import menu from '../data/menu';

const MenuSection = ({ preview = false }) => {
    // For preview mode, we'll pick specific popular items
    const previewItems = (() => {
        const popularNames = ["Andhra Veg Meals", "Dosa", "Idli", "Chicken Biryani", "Filter Coffee"];
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
        <section id="menu" className="py-20 bg-neutral-900">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-yellow-500 font-semibold tracking-wider uppercase text-sm">
                        {preview ? "Taste the Best" : "Our Menu"}
                    </span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold text-white">
                        {preview ? "Customer Favorites" : "Full Menu"}
                    </h2>
                    <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="space-y-8">
                    {displayData.map((section, index) => (
                        <div key={index} className="bg-black/40 p-6 rounded-2xl border border-white/5">
                            {!preview && (
                                <h3 className="text-2xl font-bold text-yellow-500 mb-6 border-b border-white/10 pb-2">
                                    {section.category}
                                </h3>
                            )}

                            <div className="space-y-4">
                                {section.items.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 rounded-lg transition-colors">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-medium text-gray-200">
                                                {item.name}
                                            </span>
                                            <span title={item.veg ? "Vegetarian" : "Non-Vegetarian"} className="cursor-help">
                                                {item.veg ? "🟢" : "🔴"}
                                            </span>
                                        </div>
                                        <span className="text-yellow-400 font-bold text-lg">
                                            ₹{item.price}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {preview ? (
                    <div className="text-center mt-12">
                        {/* In a real app, this would link to /menu or expand the view */}
                        <Link to="/menu" className="bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
                            View Full Menu <ArrowRight size={18} />
                        </Link>
                    </div>
                ) : (
                    <div className="text-center mt-12 mb-8">
                        <Link to="/" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 border border-white/10">
                            <X size={20} /> Exit Menu
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MenuSection;
