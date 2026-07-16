"use client";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function WhatsAppWidget() {
    const phoneNumber = "923442013217"; 
    const message = "Hello! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group relative z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
            <MessageCircle className="w-8 h-8 text-slate-900 fill-current" />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-black shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100 translate-y-0">
                WhatsApp Us
            </span>

            {/* Pulse Effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10"></span>
        </motion.a>
    );
}
