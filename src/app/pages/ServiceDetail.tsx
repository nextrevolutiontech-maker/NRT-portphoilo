import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { API_BASE_URL } from "../../config";

const enhancedContent: Record<string, any> = {
    "custom-software-development": {
        subtitle: "Tailored Solutions for Complex Challenges",
        longDescription: "Off-the-shelf software often fails to meet unique business needs. Our custom software development service provides you with a perfectly fitted solution.",
        benefits: ["Full ownership of code", "Seamless integration", "Scalable architecture", "Automated workflows"],
        process: ["Discovery", "Development", "Testing", "Support"]
    },
    "saas-development": {
        subtitle: "From Concept to Market Leader",
        longDescription: "Building a SaaS product requires strategy. We help you build multi-tenant, secure, and scalable platforms.",
        benefits: ["Multi-tenant architecture", "Subscription billing", "High availability", "Secure isolation"],
        process: ["MVP Strategy", "UX Design", "Build", "Scale"]
    },
    "ai-automation": {
        subtitle: "Leverage Artificial Intelligence",
        longDescription: "Automate repetitive tasks and gain predictive insights with our custom AI solutions.",
        benefits: ["24/7 AI Support", "Data-driven decisions", "Reduced costs", "Predictive models"],
        process: ["Assessment", "Training", "Integration", "Monitoring"]
    }
};

export function ServiceDetail() {
    const { slug } = useParams();
    const [service, setService] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/services`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    const found = data.find((s: any) => s.title.toLowerCase().replace(/\s+/g, '-') === slug);
                    setService(found || null);
                }
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [slug]);

    if (loading) return <div className="pt-32 text-center">Loading...</div>;
    if (!service) return (
        <div className="pt-32 text-center min-h-screen bg-[#F2F2F2]">
            <h1 className="text-4xl font-black mb-8">Service Not Found</h1>
            <Link to="/services" className="btn-glossy">Back to Services</Link>
        </div>
    );

    const extra = enhancedContent[slug || ""] || {
        subtitle: "Premium Technology Services",
        longDescription: service.description,
        benefits: Array.isArray(service.features) ? service.features : [],
        process: ["Consultation", "Strategy", "Execution", "Delivery"]
    };

    return (
        <div className="min-h-screen pt-32 bg-[#F2F2F2] text-[#0B1B35]">
            <Helmet>
                <title>{service.title} | Next Revolution Tech</title>
            </Helmet>

            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <Link to="/services" className="inline-flex items-center gap-2 font-bold text-muted-foreground hover:text-primary mb-12 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Services
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
                        <div>
                            <h1 className="hero-heading mb-8">{service.title}</h1>
                            <p className="text-2xl font-bold text-primary mb-6 italic font-italic-serif">{extra.subtitle}</p>
                            <p className="text-lg font-bold text-muted-foreground leading-relaxed mb-10">{extra.longDescription}</p>
                            <Link to="/contact" className="btn-glossy px-10 py-5 text-xl">
                                Get Started
                            </Link>
                        </div>
                        <div className="premium-card bg-white p-0 overflow-hidden shadow-2xl">
                            <ImageWithFallback src={service.image_url} alt={service.title} className="w-full h-auto" />
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-40 text-center">
                        <h2 className="text-5xl font-black mb-20 tracking-tighter">Key Benefits</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {extra.benefits.map((benefit: string, index: number) => (
                                <div key={index} className="premium-card bg-white text-left">
                                    <div className="w-12 h-12 bg-[#F2F2F2] rounded-xl flex items-center justify-center text-primary mb-6">
                                       <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <p className="text-lg font-black tracking-tighter leading-tight">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="premium-card bg-[#0B1B35] text-white p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl">
                         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -mr-40 -mt-40" />
                         <h2 className="text-6xl font-black mb-8 tracking-tighter">Ready to <span className="text-primary italic font-italic-serif">scale</span>?</h2>
                         <p className="text-xl font-bold text-white/60 mb-12 max-w-xl mx-auto">
                            Let's discuss how {service.title} can transform your business operations.
                         </p>
                         <div className="flex flex-wrap justify-center gap-8">
                            <Link to="/contact" className="btn-card-white w-auto px-12">Get Started Now</Link>
                            <Link to="/estimator" className="btn-outline-nrt border-white/20 text-white hover:bg-white/10">Calculate Cost</Link>
                         </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
