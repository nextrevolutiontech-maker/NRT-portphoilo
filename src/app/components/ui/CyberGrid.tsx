import { motion } from "motion/react";

export const CyberGrid = () => {
    return (
        <div className="relative w-full h-[400px] bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-xl overflow-hidden border border-white/10 glass-panel">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />

            {/* Animated Glowing Lines */}
            <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"
                        style={{ top: `${(i + 1) * 20}%` }}
                        animate={{
                            x: ["-100%", "100%"],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.5,
                        }}
                    />
                ))}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={`v-${i}`}
                        className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent opacity-50"
                        style={{ left: `${(i + 1) * 20}%` }}
                        animate={{
                            y: ["-100%", "100%"],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.7,
                        }}
                    />
                ))}
            </div>

            {/* Central Abstract Element */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-32 h-32">
                    <div className="absolute inset-0 border-2 border-primary/50 rounded-full animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-2 border-2 border-purple-500/50 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full animate-pulse" />
                </div>
            </div>
        </div>
    );
};
