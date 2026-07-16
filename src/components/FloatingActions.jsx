import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActions = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            {/* WhatsApp Button */}
            <a
                href="https://wa.me/919347157442"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-green-500/30 hover:scale-110 transition-transform duration-300 flex items-center justify-center hover:shadow-green-500/50"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
            >
                <MessageCircle size={28} />
            </a>

            {/* Call Button - Gold */}
            <a
                href="tel:+919347157442"
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-black p-4 rounded-full shadow-lg shadow-amber-500/30 hover:scale-110 transition-all duration-300 flex items-center justify-center hover:shadow-amber-500/50 animate-pulse"
                aria-label="Call Now"
                title="Call Now"
            >
                <Phone size={28} />
            </a>
        </div>
    );
};

export default FloatingActions;
