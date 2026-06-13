import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const reels = [
    {
        id: 1,
        title: "SaaS Launch",
        category: "Product Promo",
        videoUrl: "/videos/circuit.mp4",
        posterUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 2,
        title: "Brand Identity",
        category: "Rebranding",
        videoUrl: "/videos/network.mp4",
        posterUrl: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 3,
        title: "App Reveal",
        category: "Mobile Design",
        videoUrl: "/videos/coding.mp4",
        posterUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 4,
        title: "Enterprise Solutions",
        category: "Corporate",
        videoUrl: "/videos/globe.mp4",
        posterUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600"
    }
];

export function CinematicReelsShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const reelsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Horizontal Scroll Parallax for reels if needed, or simple reveal
            gsap.from(".reel-card", {
                scrollTrigger: {
                    trigger: ".reels-container",
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            });

            // Floating animation for urgency CTA
            gsap.to(".urgency-cta", {
                y: -10,
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative py-32 overflow-hidden bg-white border-y border-slate-300"
        >
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3A5CCC]/5 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-orange-600/10 blur-[120px] rounded-full point-events-none opacity-30" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Aggressive Copy & Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-600/10 border border-orange-600/20 rounded-full text-orange-600 text-xs font-semibold tracking-wide mb-6">
                            <Sparkles className="w-4 h-4" />
                            <span>Showcasing Digital Excellence</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                            Enterprise Innovations.
                        </h2>
                        <p className="text-lg text-slate-900/60 leading-relaxed font-bold">
                            Explore our curated portfolio of high-performance digital solutions, engineered to drive measurable growth and scale industry leaders.
                        </p>
                    </div>

                    <div className="shrink-0 flex items-center justify-start md:justify-end w-full md:w-auto">
                        <Link
                            to="/case-studies"
                            className="urgency-cta group relative inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm text-slate-900 border border-slate-300 px-8 py-4 rounded-full font-black hover:bg-white/10 transition-all duration-300 hover:scale-105"
                        >
                            <span className="relative z-10">View Full Portfolio</span>
                            <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* Reels Grid */}
                <div className="reels-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reels.map((reel, index) => (
                        <div
                            key={reel.id}
                            ref={el => reelsRef.current[index] = el}
                            className="reel-card group relative aspect-[9/16] rounded-2xl overflow-hidden border border-slate-300 shadow-2xl bg-white/5 cursor-pointer"
                        >
                            {/* Video Element */}
                            <video
                                src={reel.videoUrl}
                                poster={reel.posterUrl}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-black/20 group-hover:bg-orange-600 group-hover:border-orange-600 transition-colors">
                                        <Play className="w-5 h-5 text-slate-900 ml-1" />
                                    </div>
                                    <span className="text-orange-600 text-xs font-bold tracking-wider uppercase mb-2 block">{reel.category}</span>
                                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900 leading-tight">{reel.title}</h3>
                                </div>
                            </div>

                            {/* Glowing Border effect on hover */}
                            <div className="absolute inset-0 border-2 border-orange-600/0 group-hover:border-orange-600/50 transition-colors duration-300 rounded-2xl" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
