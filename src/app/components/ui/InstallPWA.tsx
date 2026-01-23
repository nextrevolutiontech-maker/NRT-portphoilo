import { useState, useEffect } from "react";
import { Download, Smartphone } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "motion/react";

export function InstallPWA({ className = "", mobile = false }: { className?: string, mobile?: boolean }) {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isInstallable, setIsInstallable] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e: any) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            setDeferredPrompt(e);
            // Update UI notify the user they can install the PWA
            setIsInstallable(true);
            console.log("PWA Install Prompt captured");
        };

        const handleAppInstalled = () => {
            setIsInstallable(false);
            setDeferredPrompt(null);
            toast.success("App Installed Successfully!");
        };

        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        window.addEventListener("appinstalled", handleAppInstalled);

        return () => {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
            window.removeEventListener("appinstalled", handleAppInstalled);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) {
            if (import.meta.env.DEV) {
                toast.info("Install Prompt unavailable in Dev mode (Forced View)");
            }
            return;
        }
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        // We've used the prompt, and can't use it again, throw it away
        setDeferredPrompt(null);
        setIsInstallable(false);
    };

    // In development, we can force show it for layout testing, but functionally it needs the prompt
    const showButton = isInstallable || import.meta.env.DEV;

    if (!showButton) return null;

    if (mobile) {
        return (
            <button
                onClick={handleInstallClick}
                className={`w-full bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-md transition-all text-center shadow-lg font-medium flex items-center justify-center gap-2 ${className}`}
            >
                <Smartphone className="h-5 w-5" />
                Install App
            </button>
        );
    }

    return (
        <AnimatePresence>
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleInstallClick}
                className={`hidden 2xl:inline-flex items-center gap-2 bg-secondary/20 hover:bg-secondary/40 text-foreground border border-primary/20 hover:border-primary px-4 py-2.5 rounded-md transition-all font-medium text-sm ${className}`}
            >
                <Download className="h-4 w-4" />
                Install App
            </motion.button>
        </AnimatePresence>
    );
}
