import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Globe, Smartphone, Palette, Search, Bot, Brain, Workflow, Code2, Database, Cloud, Lock } from "lucide-react";

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
            { component: Globe, color: "var(--color-primary)" },
            { component: Smartphone, color: "#a855f7" }, // Purple
            { component: Palette, color: "#f472b6" }, // Pink
            { component: Search, color: "#fbbf24" }, // Amber
            { component: Bot, color: "#34d399" }, // Emerald
            { component: Brain, color: "#FF7E00" }, // Orange
            { component: Workflow, color: "#f87171" }, // Red
            { component: Code2, color: "#60a5fa" }, // Blue
            { component: Database, color: "#c084fc" }, // Violet
            { component: Cloud, color: "#2dd4bf" }, // Teal
            { component: Lock, color: "#facc15" }, // Yellow
        ];

        // Generate more random floating elements for a richer background
        const newElements = Array.from({ length: 20 }).map((_, i) => {
            const config = iconConfig[i % iconConfig.length];
            return {
                id: i,
                x: Math.random() * 100, // percentage
                y: Math.random() * 100, // percentage
                size: Math.random() * 40 + 20, // size in px (20-60px)
                duration: Math.random() * 20 + 20, // Very slow duration for elegance
                delay: Math.random() * 5,
                Icon: config.component,
                color: config.color,
            };
        });
        setElements(newElements);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/30 blur-[100px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/30 blur-[100px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '7s' }} />
            </div>

            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    className="absolute opacity-50 dark:opacity-60"
                    style={{
                        left: `${el.x}%`,
                        top: `${el.y}%`,
                        color: el.color,
                        filter: `drop-shadow(0 0 4px ${el.color})`, // Sharper glow
                    }}
                    animate={{
                        y: [0, -60, 0],
                        x: [0, Math.random() * 40 - 20, 0],
                        opacity: [0.4, 1, 0.4], // Much higher visibility
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
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
                    <el.Icon size={el.size} strokeWidth={2} />
                </motion.div>
            ))}

            {/* Gradient overlay - smoother fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
    );
}
