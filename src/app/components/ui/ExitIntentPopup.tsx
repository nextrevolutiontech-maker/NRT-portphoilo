
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
                    className="fixed inset-0 z-[20000] flex items-center justify-center p-4 bg-[#0B1B35]/40 backdrop-blur-md"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative bg-white border-2 border-[#F58220]/20 w-full max-w-lg rounded-[2.5rem] shadow-[0_30px_100px_rgba(11,27,53,0.4)] overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <div className="flex flex-col md:flex-row">
                            {/* Content */}
                             <div className="p-8 md:p-12 text-center">
                                 <div className="mx-auto w-20 h-20 bg-[#F58220]/10 rounded-full flex items-center justify-center mb-8">
                                     <Calendar className="h-10 w-10 text-[#F58220]" />
                                 </div>
 
                                 <h2 className="text-3xl md:text-4xl font-black text-[#0B1B35] mb-4 tracking-tighter">
                                     Wait! Before <br /><span className="text-[#F58220] italic font-italic-serif font-normal">you go...</span>
                                 </h2>
 
                                 <p className="text-[#0B1B35]/60 mb-10 text-lg font-bold leading-relaxed">
                                     Don't leave your project to chance. <br /><strong>Book a free 15-minute strategy call</strong> <br />with our lead architect.
                                 </p>

                                <div className="flex flex-col gap-3">
                                    <Link
                                        to="/contact"
                                        onClick={closePopup}
                                        className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_var(--color-primary)]"
                                    >
                                        Book Free Consultation
                                        <ArrowRight className="h-5 w-5" />
                                    </Link>
                                    <button
                                        onClick={closePopup}
                                        className="text-sm text-muted-foreground hover:text-foreground underline decoration-dotted underline-offset-4"
                                    >
                                        No thanks, I'll figure it out myself
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
