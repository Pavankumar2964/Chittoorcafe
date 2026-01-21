import React from 'react';
import { Star } from 'lucide-react';

const MenuSection = () => {
    const items = [
        {
            id: 1,
            name: 'Special Mixed Non Veg Mandi',
            price: '₹950',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1931&auto=format&fit=crop',
            tag: 'Bestseller'
        },
        {
            id: 2,
            name: 'Chittoor Cafe Special Biryani',
            price: '₹350',
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2010&auto=format&fit=crop',
            tag: 'Must Try'
        },
        {
            id: 3,
            name: 'Japan Chicken',
            price: '₹280',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1606756810864-77ae38361ab6?q=80&w=2070&auto=format&fit=crop',
            tag: 'Chef Choice'
        },
        {
            id: 4,
            name: 'Lemon Chicken',
            price: '₹260',
            rating: 4.3,
            image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=2070&auto=format&fit=crop'
        }
    ];

    return (
        <section id="menu" className="py-20 bg-neutral-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-yellow-500 font-semibold tracking-wider uppercase text-sm">Our Menu</span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold text-white">Popular Dishes</h2>
                    <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item) => (
                        <div key={item.id} className="bg-neutral-800 rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {item.tag && (
                                    <div className="absolute top-4 left-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                                        {item.tag}
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-white leading-tight">{item.name}</h3>
                                    <span className="text-yellow-400 font-bold">{item.price}</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-400 mt-3">
                                    <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                                    <span>{item.rating} (50+ reviews)</span>
                                </div>
                                <button className="w-full mt-6 border border-white/20 hover:bg-yellow-500 hover:border-yellow-500 hover:text-black text-white py-2 rounded-lg transition-colors font-medium text-sm">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="text-yellow-500 hover:text-yellow-400 font-semibold border-b-2 border-yellow-500 pb-1 transition-colors">
                        View Full Menu
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
