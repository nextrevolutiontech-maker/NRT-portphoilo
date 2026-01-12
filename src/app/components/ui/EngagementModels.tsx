
import { CheckCircle2, Clock, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function EngagementModels() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".model-card", {
                scrollTrigger: {
                    trigger: ".models-grid",
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
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
        <section className="bg-background py-20" ref={containerRef}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="mb-4 text-primary text-3xl md:text-4xl">Engagement Models</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Flexible cooperation models tailored to your business stage and goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 models-grid">
                    {models.map((model, index) => (
                        <div
                            key={index}
                            className={`relative rounded-xl p-8 border transition-all duration-300 model-card flex flex-col ${model.highlight
                                    ? "bg-secondary/10 border-primary shadow-[0_0_30px_-10px_var(--color-primary)] scale-105 z-10"
                                    : "bg-card border-border hover:border-primary/50 hover:shadow-lg"
                                }`}
                        >
                            {model.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto">
                                {model.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-center text-foreground mb-2">{model.title}</h3>
                            <div className="text-primary text-sm font-medium text-center mb-6 uppercase tracking-wider">{model.subtitle}</div>

                            <p className="text-muted-foreground text-center mb-8 leading-relaxed">
                                {model.description}
                            </p>

                            <div className="space-y-4 mb-8 flex-grow">
                                {model.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-foreground/80">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                to="/contact"
                                className={`w-full py-3 px-6 rounded-md text-center font-medium transition-colors ${model.highlight
                                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
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
