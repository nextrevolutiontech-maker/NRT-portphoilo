
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
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative bg-card border border-primary/20 w-full max-w-lg rounded-xl shadow-2xl overflow-hidden"
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
                            <div className="p-8 md:p-10 text-center">
                                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                    <Calendar className="h-8 w-8 text-primary" />
                                </div>

                                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                                    Wait! Before you go...
                                </h2>

                                <p className="text-muted-foreground mb-8 text-lg">
                                    Don't leave your project to chance. <strong>Book a free 15-minute strategy call</strong> with our lead architect.
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
