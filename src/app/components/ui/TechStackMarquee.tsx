
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import {
    Code, Cloud, Cpu, Database, Shield, Zap, Smartphone, Globe,
    Layers, Terminal, Server, Wifi, Monitor, Command, Hash, Braces
} from 'lucide-react';

const technologies = [
    { name: 'React', icon: Code },
    { name: 'Node.js', icon: Server },
    { name: 'Python', icon: Terminal },
    { name: 'AWS', icon: Cloud },
    { name: 'Docker', icon: Layers },
    { name: 'Kubernetes', icon: Cpu },
    { name: 'TypeScript', icon: Braces },
    { name: 'GraphQL', icon: Hash },
    { name: 'PostgreSQL', icon: Database },
    { name: 'MongoDB', icon: Database },
    { name: 'CyberSecurity', icon: Shield },
    { name: 'IoT', icon: Wifi },
];

export function TechStackMarquee() {
    const containerRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (marqueeRef.current) {
                const content = marqueeRef.current;
                const totalWidth = content.scrollWidth / 2; // Half because we duplicate logic

                gsap.to(content, {
                    x: -totalWidth,
                    duration: 20,
                    ease: "none",
                    repeat: -1,
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="py-20 overflow-hidden bg-background relative z-10" ref={containerRef}>
            <div className="text-center mb-16">
                <h2 className="mb-4 text-primary text-3xl font-bold">Powered By Modern Tech</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    We leverage the latest frameworks and tools to build robust solutions.
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden mask-gradient-x">
                {/* Inner Moving Part */}
                <div ref={marqueeRef} className="flex gap-16 w-max pl-16">
                    {[...technologies, ...technologies, ...technologies].map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <div key={index} className="flex flex-col items-center gap-4 group cursor-default">
                                <div className="w-20 h-20 bg-secondary/50 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:border-primary/60 group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_-5px_var(--color-primary)]">
                                    <Icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
                            </div>
                        );
                    })}
                </div>

                {/* Gradient Masks for Fade Effect */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            </div>
        </div>
    );
}
