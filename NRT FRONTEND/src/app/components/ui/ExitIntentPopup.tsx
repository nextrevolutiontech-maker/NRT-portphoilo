
import { useState, useEffect } from "react";
import { X, Calendar, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

export function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        // Check if already shown in this session
        const shownInSession = sessionStorage.getItem("exitPopupShown");
        if (shownInSession) {
            setHasShown(true);
            return;
        }

        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
                sessionStorage.setItem("exitPopupShown", "true");
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [hasShown]);

    const closePopup = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[20000] flex items-center justify-center p-4 bg-white/40 backdrop-blur-md"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative bg-white border-2 border-orange-600/10 w-full max-w-lg rounded-[2.5rem] shadow-[0_40px_120px_rgba(11,27,53,0.5)] overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-900 transition-all z-20"
                            aria-label="Close popup"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="flex flex-col">
                            {/* Content */}
                            <div className="p-8 md:p-10 text-center">
                                <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#3A5CCC]/20 to-[#3A5CCC]/5 rounded-2xl flex items-center justify-center mb-6 rotate-3 shadow-[0_15px_30px_-10px_rgba(58,92,204,0.3)]">
                                    <Calendar className="h-8 w-8 md:h-10 md:w-10 text-orange-600" />
                                </div>

                                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight leading-[1]">
                                    Wait! Your Vision <br />
                                    <span className="text-orange-600">Deserves a <span className="text-orange-600">Roadmap.</span></span>
                                </h2>

                                <p className="text-slate-600 mb-8 text-base md:text-lg font-medium leading-relaxed max-w-sm mx-auto">
                                    Don't leave your project to chance. Book a <span className="text-slate-900 font-bold text-base md:text-lg">Free 15-Minute Strategic Blueprint Call</span> with our Lead Architect.
                                </p>

                                <div className="flex flex-col gap-3">
                                    <Link
                                        to="/contact"
                                        onClick={closePopup}
                                        className="w-full bg-orange-600 text-white font-black text-base md:text-lg py-4 rounded-xl hover:bg-orange-600/90 transition-all flex items-center justify-center gap-2 shadow-[0_15px_30px_-8px_rgba(58,92,204,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(58,92,204,0.5)] hover:-translate-y-1 active:translate-y-0"
                                    >
                                        Claim My Free Session
                                        <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
                                    </Link>
                                    <button
                                        onClick={closePopup}
                                        className="text-[10px] md:text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest"
                                    >
                                        No thanks, I'll take the risk
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
