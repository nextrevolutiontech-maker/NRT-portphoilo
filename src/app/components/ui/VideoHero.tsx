
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// Using Cloudinary hosted videos for better performance
const videos = [
    "https://res.cloudinary.com/de4oqb7rz/video/upload/v1767171768/nrt-portfolio/fdsgv5zgrl4xmhhgbneh.mp4",
    "https://res.cloudinary.com/de4oqb7rz/video/upload/v1767171907/nrt-portfolio/umz6vfgdyvi5ijfapd97.mp4",
    "https://res.cloudinary.com/de4oqb7rz/video/upload/v1767171872/nrt-portfolio/lmjv112hnhsio07qzm7t.mp4",
    "https://res.cloudinary.com/de4oqb7rz/video/upload/v1767171878/nrt-portfolio/thrhubf3fxbwhset4se0.mp4"
];

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop";

export function VideoHero() {
    const [currentVideo, setCurrentVideo] = useState(0);

    useEffect(() => {
        // Preload videos if possible or just let browser handle it
        const timer = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
        }, 6000); // 6 seconds per video

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden bg-black border-y border-white/10 group">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentVideo}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={FALLBACK_IMAGE}
                        className="object-cover w-full h-full opacity-90"
                    >
                        <source src={videos[currentVideo]} type="video/mp4" />
                        <img
                            src={FALLBACK_IMAGE}
                            alt="Tech Background"
                            className="object-cover w-full h-full"
                        />
                    </video>
                </motion.div>
            </AnimatePresence>

            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

            {/* Tech Grid Overlay */}
            <div
                className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)', backgroundSize: '32px 32px' }}
            />

            {/* Optional: Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {videos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentVideo(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentVideo ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
                            }`}
                        aria-label={`Go to video ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
