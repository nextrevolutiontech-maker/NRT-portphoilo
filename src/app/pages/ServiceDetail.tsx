
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { API_BASE_URL } from "../../config";

// Enhanced content map for SEO and depth
const enhancedContent: Record<string, any> = {
    "custom-software-development": {
        subtitle: "Tailored Solutions for Complex Enterprise Challenges",
        longDescription: "Off-the-shelf software often fails to meet unique business needs. Our custom software development service provides you with a perfectly fitted solution, built from the ground up to streamline your operations, integrate with existing systems, and scale with your growth.",
        benefits: [
            "Full ownership of code and IP",
            "Seamless integration with legacy systems",
            "Scalable architecture for future growth",
            "Automated workflows to reduce manual errors"
        ],
        process: ["Discovery & Architecture", "Agile Development", "Testing & QA", "Deployment & Support"]
    },
    "saas-development": {
        subtitle: "From Concept to Market-Leading SaaS Product",
        longDescription: "Building a SaaS product requires more than just code; it needs a strategy. We help startups and enterprises build multi-tenant, secure, and scalable SaaS platforms that users love.",
        benefits: [
            "Multi-tenant architecture",
            "Subscription & billing integration",
            "High availability & uptime",
            "Secure data isolation"
        ],
        process: ["MVP Strategy", "UX/UI Design", "Cloud Native Build", "Growth Scaling"]
    },
    "ai-automation": {
        subtitle: "Leverage the Power of Artificial Intelligence",
        longDescription: "Automate repetitive tasks and gain predictive insights with our custom AI solutions. From Chatbots to Predictive Analytics, we bring the power of LLMs and Machine Learning to your business.",
        benefits: [
            "24/7 Customer Support via AI Agents",
            "Data-driven decision making",
            "Reduced operational costs",
            "Predictive maintenance models"
        ],
        process: ["Data Assessment", "Model Training", "Integration", "Monitoring"]
    }
};

export function ServiceDetail() {
    const { slug } = useParams();
    const [service, setService] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 1. Fetch all services
        fetch(`${API_BASE_URL}/api/services`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    // 2. Find matching service by slugifying the title
                    const found = data.find((s: any) =>
                        s.title.toLowerCase().replace(/\s+/g, '-') === slug
                    );
                    setService(found || null);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [slug]);

    if (loading) return <div className="pt-32 text-center">Loading...</div>;
    if (!service) return (
        <div className="pt-32 text-center">
            <h1 className="text-2xl font-bold">Service Not Found</h1>
            <Link to="/services" className="text-primary hover:underline mt-4 block">Back to Services</Link>
        </div>
    );

    const extra = enhancedContent[slug || ""] || {
        subtitle: "Global-Standard Technology Services",
        longDescription: service.description,
        benefits: Array.isArray(service.features) ? service.features : [],
        process: ["Consultation", "Strategy", "Execution", "Delivery"]
    };

    return (
        <div className="min-h-screen pt-20">
            <Helmet>
                <title>{service.title} - Next Revolution Tech</title>
                <meta name="description" content={`Expert ${service.title} services. ${extra.subtitle}`} />
            </Helmet>

            {/* Hero Section */}
            <section className="bg-secondary/10 py-20 border-b border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Link to="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Services
                    </Link>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">{service.title}</h1>
                            <p className="text-xl md:text-2xl text-foreground font-medium mb-4">{extra.subtitle}</p>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{extra.longDescription}</p>
                            <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors shadow-lg inline-flex items-center gap-2">
                                Get Started <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                        <div>
                            <ImageWithFallback
                                src={service.image_url}
                                alt={service.title}
                                className="rounded-xl shadow-2xl w-full h-auto border border-border"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-background py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16 text-foreground">Key Benefits</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {extra.benefits.map((benefit: string, index: number) => (
                            <div key={index} className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors shadow-sm">
                                <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                                <p className="text-lg font-medium text-card-foreground">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-secondary/5 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16 text-foreground">Our Process for {service.title}</h2>
                    <div className="grid md:grid-cols-4 gap-4 relative">
                        {/* Connecting Line (Mobile Hidden) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10 translate-y-[-50%]"></div>

                        {extra.process.map((step: string, index: number) => (
                            <div key={index} className="flex flex-col items-center text-center bg-background p-6 rounded-xl border border-border shadow-sm">
                                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-md">
                                    {index + 1}
                                </div>
                                <h3 className="font-bold text-lg">{step}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary text-primary-foreground py-20 text-center">
                <div className="mx-auto max-w-4xl px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale with {service.title}?</h2>
                    <p className="text-xl mb-8 opacity-90">Let's discuss your specific requirements and build a roadmap to success.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/estimator" className="bg-background text-primary px-8 py-3 rounded-md font-bold hover:bg-muted transition-colors">
                            Calculate Cost
                        </Link>
                        <Link to="/contact" className="bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-md font-bold hover:bg-primary-foreground/10 transition-colors">
                            Book Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
