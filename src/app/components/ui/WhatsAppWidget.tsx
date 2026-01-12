import { useState } from "react";
import { MessageCircle, QrCode, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function WhatsAppWidget() {
    const phoneNumber = "923442013217"; // Updated with user number
    const message = "Hello! I'm interested in your services.";
    const [showQr, setShowQr] = useState(false);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(whatsappUrl)}`;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

            {/* QR Code Popup */}
            <AnimatePresence>
                {showQr && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        className="bg-white p-4 rounded-lg shadow-xl border border-gray-200 mb-2 relative"
                    >
                        <button
                            onClick={() => setShowQr(false)}
                            className="absolute -top-2 -right-2 bg-gray-100 hover:bg-gray-200 rounded-full p-1 text-gray-600 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                        <p className="text-xs font-bold text-center text-gray-800 mb-2">Scan to Chat</p>
                        <img src={qrUrl} alt="WhatsApp QR Code" className="w-32 h-32 rounded" />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex items-center gap-3">
                {/* QR Toggle Button (Mini) */}
                <motion.button
                    onClick={() => setShowQr(!showQr)}
                    className="bg-white text-gray-700 p-2 rounded-full shadow-md hover:shadow-lg border border-gray-100 hover:bg-gray-50 transition-all"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.1 }}
                    title="Show QR Code"
                >
                    <QrCode className="w-5 h-5" />
                </motion.button>

                {/* Main WhatsApp Button */}
                <motion.a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow group relative"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <MessageCircle className="w-8 h-8 text-white fill-current" />

                    {/* Tooltip */}
                    {!showQr && (
                        <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            Chat with us
                        </span>
                    )}

                    {/* Pulse Effect */}
                    <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10"></span>
                </motion.a>
            </div>
        </div>
    );
}
