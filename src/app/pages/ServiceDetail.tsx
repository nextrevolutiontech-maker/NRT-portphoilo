import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { API_BASE_URL } from "../../config";
import { motion } from "motion/react";

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
        <div className="min-h-screen bg-[#F8FAFC] text-[#0B1B35] overflow-x-hidden">
            <Helmet>
                <title>{service.title} | Next Revolution Tech</title>
            </Helmet>

            {/* SECTION 1: INTRO - Dark Hero */}
            <section className="pt-32 pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#0B1B35] text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F58220]/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
              <div className="mx-auto max-w-7xl relative z-10">
                <Link to="/services" className="inline-flex items-center gap-2 font-black text-white/40 hover:text-[#F58220] mb-12 transition-colors uppercase tracking-widest text-[10px]">
                    <ArrowLeft className="w-4 h-4" /> Back to Services
                </Link>

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F58220] mb-8">Service Details</div>
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-10 tracking-tighter leading-[0.9]">{service.title}</h1>
                        <p className="text-2xl font-bold text-[#F58220] mb-8 italic font-italic-serif">{extra.subtitle}</p>
                        <p className="text-xl font-bold text-white/50 leading-relaxed mb-12 max-w-xl">{extra.longDescription}</p>
                        <Link to="/contact" className="bg-[#F58220] text-white px-10 py-5 rounded-2xl text-xl font-black shadow-2xl hover:scale-105 transition-all inline-block">
                            Get Started
                        </Link>
                    </div>
                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B35] to-transparent opacity-40 z-10" />
                        <ImageWithFallback src={service.image_url} alt={service.title} className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000" />
                    </div>
                </div>
              </div>
            </section>

            {/* Benefits - Light */}
            <div className="py-40 text-center container mx-auto px-4">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F58220] mb-6">Efficiency</div>
                <h2 className="text-5xl sm:text-7xl font-black mb-24 tracking-tighter text-[#0B1B35]">Key Benefits</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {extra.benefits.map((benefit: string, index: number) => (
                        <motion.div 
                          key={index} 
                          whileHover={{ y: -10 }}
                          className="bg-white p-10 rounded-[2.5rem] border border-[#0B1B35]/5 shadow-xl text-left"
                        >
                            <div className="w-14 h-14 bg-[#F8FAFC] rounded-2xl flex items-center justify-center text-[#F58220] mb-8 border border-[#0B1B35]/5">
                               <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <p className="text-xl font-black tracking-tighter text-[#0B1B35] leading-tight">{benefit}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA - Dark */}
            <section className="px-4 py-20 bg-[#F8FAFC]">
                <div className="bg-[#060E1B] rounded-[4rem] p-16 lg:p-32 text-center relative overflow-hidden shadow-2xl border border-white/5">
                     <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F58220]/10 rounded-full blur-[120px] pointer-events-none" />
                     <div className="relative z-10">
                       <h2 className="text-5xl sm:text-7xl font-black mb-10 tracking-tighter text-white leading-tight">Ready to <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] to-[#FF4D00]">scale</span>?</h2>
                       <p className="text-xl sm:text-2xl font-bold text-white/50 mb-16 max-w-xl mx-auto leading-relaxed">
                          Let's discuss how {service.title} can transform your business operations.
                       </p>
                       <div className="flex flex-wrap justify-center gap-8">
                          <Link to="/contact" className="bg-[#F58220] text-white px-12 py-6 rounded-2xl text-xl font-black shadow-[0_30px_60px_rgba(245,130,32,0.4)] hover:scale-105 transition-all">Get Started Now</Link>
                          <Link to="/pricing" className="bg-white/5 border-2 border-white/20 text-white px-12 py-6 rounded-2xl text-xl font-black hover:bg-white hover:text-[#0B1B35] transition-all">View Pricing</Link>
                       </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
