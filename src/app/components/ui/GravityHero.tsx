import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Globe, Smartphone, Palette, Search, Bot, Brain, Workflow } from "lucide-react";

interface FloatingElement {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    Icon: React.ElementType;
    color: string;
}

export function GravityHero() {
    const [elements, setElements] = useState<FloatingElement[]>([]);

    useEffect(() => {
        const iconConfig = [
            { component: Globe, color: "#38bdf8" }, // Sky blue
            { component: Smartphone, color: "#a855f7" }, // Purple
            { component: Palette, color: "#f472b6" }, // Pink
            { component: Search, color: "#fbbf24" }, // Amber
            { component: Bot, color: "#34d399" }, // Emerald
            { component: Brain, color: "#818cf8" }, // Indigo
            { component: Workflow, color: "#f87171" }, // Red
        ];

        // Generate random floating elements
        const newElements = Array.from({ length: 15 }).map((_, i) => {
            const config = iconConfig[i % iconConfig.length];
            return {
                id: i,
                x: Math.random() * 100, // percentage
                y: Math.random() * 100, // percentage
                size: Math.random() * 30 + 30, // size in px (30-60px) - Increased for visibility
                duration: Math.random() * 15 + 15, // Slower duration for elegance
                delay: Math.random() * 5,
                Icon: config.component,
                color: config.color,
            };
        });
        setElements(newElements);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    className="absolute"
                    style={{
                        left: `${el.x}%`,
                        top: `${el.y}%`,
                        color: el.color,
                        filter: `drop-shadow(0 0 8px ${el.color})`, // Neon glow effect
                    }}
                    animate={{
                        y: [0, -40, 0], // Reduced movement range for stability
                        x: [0, Math.random() * 30 - 15, 0],
                        opacity: [0.6, 1, 0.6], // Increased opacity for better visibility
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: el.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: el.delay,
                        y: {
                            duration: el.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                        x: {
                            duration: el.duration * 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                        opacity: {
                            duration: el.duration / 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }
                    }}
                >
                    <el.Icon size={el.size} strokeWidth={1.5} />
                </motion.div>
            ))}
            {/* Gradient overlay - adaptive */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/30 to-transparent dark:from-background/40 dark:to-transparent" />
        </div>
    );
}
