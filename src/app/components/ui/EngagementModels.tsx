
import { CheckCircle2, Clock, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function EngagementModels() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Ensure elements are visible initially if JS fails, 
            // but GSAP from() handles this. 
            // We use clearProps to ensure no residual styles break layout.
            gsap.from(".model-card", {
                scrollTrigger: {
                    trigger: ".models-grid",
                    start: "top 85%", // Trigger a bit earlier
                },
                y: 30, // Reduced distance
                opacity: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out",
                clearProps: "all" // Clear inline styles after animation
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const models = [
        {
            title: "Fixed Price",
            icon: <ShieldCheck className="h-10 w-10" />,
            subtitle: "Best for MVPs & Defined Scope",
            description: "Ideal when you have clear requirements and a specific budget. We deliver the complete project at a pre-agreed price.",
            features: [
                "Definite budget & timeline",
                "Clear deliverables",
                "No hidden costs",
                "Milestone-based payments"
            ],
            highlight: false
        },
        {
            title: "Dedicated Team",
            icon: <Users className="h-10 w-10" />,
            subtitle: "Best for Scale & Long-term",
            description: "Hire a full team of experts who work exclusively on your project. Acts as an extension of your in-house team.",
            features: [
                "Full control over team",
                "Direct communication",
                "Scalable resources",
                "Monthly flat rate"
            ],
            highlight: true
        },
        {
            title: "Time & Materials",
            icon: <Clock className="h-10 w-10" />,
            subtitle: "Best for R&D & Evolving Scope",
            description: "Perfect for projects with changing requirements or research phases. Pay only for the hours worked.",
            features: [
                "Maximum flexibility",
                "Start immediately",
                "Pivot direction anytime",
                "Detailed time tracking"
            ],
            highlight: false
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-white" ref={containerRef}>
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    alt="Network Background"
                    className="w-full h-full object-cover opacity-[0.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="mb-4 text-[#0F172A] text-4xl sm:text-5xl font-black tracking-tighter uppercase">Engagement Models</h2>
                    <p className="text-xl text-[#0F172A]/60 max-w-2xl mx-auto leading-relaxed font-bold italic">
                        Flexible cooperation models tailored to your business stage and goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 models-grid">
                    {models.map((model, index) => (
                        <div
                            key={index}
                            className={`relative rounded-[2.5rem] p-10 border transition-all duration-300 model-card flex flex-col ${model.highlight
                                ? "bg-white border-[#3A5CCC] shadow-[0_20px_50px_-12px_rgba(58,92,204,0.15)] scale-105 z-10"
                                : "bg-[#F3F4F6] border-[#0F172A]/5 hover:border-[#3A5CCC]/30 hover:shadow-xl"
                                }`}
                        >
                            {model.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#3A5CCC] text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8 w-20 h-20 bg-[#3A5CCC]/10 rounded-2xl flex items-center justify-center text-[#3A5CCC] mx-auto">
                                {model.icon}
                            </div>

                            <h3 className="text-3xl font-black text-center text-[#0F172A] mb-2 tracking-tighter uppercase">{model.title}</h3>
                            <div className="text-[#3A5CCC] text-[10px] font-black text-center mb-8 uppercase tracking-widest">{model.subtitle}</div>

                            <p className="text-[#0F172A]/60 text-center mb-10 leading-relaxed font-bold italic">
                                {model.description}
                            </p>

                            <div className="space-y-4 mb-10 flex-grow">
                                {model.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-[#3A5CCC] flex-shrink-0 mt-0.5" />
                                        <span className="text-sm font-bold text-[#0F172A]/80">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                to="/contact"
                                className={`w-full py-5 px-8 rounded-2xl text-center font-black text-lg transition-all ${model.highlight
                                    ? "bg-[#3A5CCC] text-white hover:scale-105 shadow-xl"
                                    : "bg-[#0F172A]/5 text-[#0F172A] hover:bg-[#0F172A]/10"
                                    }`}
                            >
                                Get a Quote
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
