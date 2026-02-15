
import { useState, useEffect, useRef } from "react";
import { Code, Cloud, Cpu, Database, Shield, Zap, Smartphone, Globe, CheckCircle2, BarChart3, Users, Award, TrendingUp, ArrowRight, Blocks, Workflow, GraduationCap, FlaskConical, ShoppingCart, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { HoverModal } from "../components/ui/HoverModal";
import { API_BASE_URL } from "../../config";

// Helper to map icon names to components
const getIcon = (name: string) => {
  const icons: any = {
    Code, Cloud, Cpu, BarChart3, Shield, Zap, CheckCircle2, Users, Award, TrendingUp, Database, Smartphone, Globe, Blocks, Workflow,
    "GraduationCap": GraduationCap, "FlaskConical": FlaskConical, "ShoppingCart": ShoppingCart, "Briefcase": Briefcase
  };
  return icons[name] || Code;
};

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image_url: string;
}

export function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoverModalOpen, setHoverModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const staticServices: Service[] = [
    {
      id: 101,
      title: "Learning Management Systems (LMS)",
      description: "Empower education with robust platforms for course delivery, student tracking, and interactive learning experiences.",
      icon: "GraduationCap",
      features: ["Student Portals", "Live Class Integration", "Exam & Grading Modules"],
      image_url: "/assets/services/lms-platform.png"
    },
    {
      id: 102,
      title: "Laboratory Information Management (LIMS)",
      description: "Streamline lab workflows, sample tracking, and data compliance with precision-engineered LIMS solutions.",
      icon: "FlaskConical",
      features: ["Sample Tracking", "Workflow Automation", "Compliance Reporting"],
      image_url: "/assets/services/lims-lab.png"
    },
    {
      id: 103,
      title: "Modern POS & Inventory",
      description: "Transform retail and hospitality with cloud-based Point of Sale systems that sync inventory in real-time.",
      icon: "ShoppingCart",
      features: ["Multi-Store Sync", "Real-time Analytics", "CRM Integration"],
      image_url: "/assets/services/pos-system.png"
    },
    {
      id: 104,
      title: "Enterprise Resource Planning (ERP)",
      description: "Unify your business processes—finance, HR, supply chain—into a single, intelligent management system.",
      icon: "Briefcase",
      features: ["Financial Reporting", "HR Automation", "Supply Chain Optimization"],
      image_url: "/assets/services/erp-dashboard.png"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.2
      });

      // Services List
      gsap.utils.toArray(".service-item").forEach((item: any) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      });

      // Tech Stack
      gsap.from(".tech-item", {
        scrollTrigger: {
          trigger: ".tech-grid",
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out"
      });

      // CTA
      gsap.from(".cta-section", {
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });

    }, containerRef);
    return () => ctx.revert();
  }, [services]); // Re-run when services load to ensure ScrollTrigger finds them

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/services`)
      .then(res => res.json())
      .then(data => {
        // Merge API data with static "Enterprise Solutions"
        const apiData = Array.isArray(data) ? data : [];
        setServices([...staticServices, ...apiData]);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch services", err);
        // Fallback to static only on error
        setServices(staticServices);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-16 sm:pt-20 xl:pt-[90px] transition-all duration-300" ref={containerRef}>
      <Helmet>
        <title>Services - Next Revolution Tech | Custom Software, SaaS & AI</title>
        <meta name="description" content="Explore Next Revolution Tech's services including Custom Software, SaaS Development, AI & Automation, and Cloud Solutions." />
        <meta name="keywords" content="Custom Software, SaaS Development, AI, Automation, Cloud Solutions, Mobile App Development, Web3" />
        <link rel="canonical" href="https://www.nextrevolutiontech.tech/services" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nextrevolutiontech.tech/services" />
        <meta property="og:title" content="Services - Next Revolution Tech | Custom Software, SaaS & AI" />
        <meta property="og:description" content="Transform your business with our enterprise-grade software services: AI, Cloud, Mobile, and Web Development." />
        <meta property="og:image" content="https://www.nextrevolutiontech.tech/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.nextrevolutiontech.tech/services" />
        <meta property="twitter:title" content="Services - Next Revolution Tech | Custom Software, SaaS & AI" />
        <meta property="twitter:description" content="Transform your business with our enterprise-grade software services: AI, Cloud, Mobile, and Web Development." />
        <meta property="twitter:image" content="https://www.nextrevolutiontech.tech/logo.png" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Next Revolution Tech Services",
              "image": "https://www.nextrevolutiontech.tech/logo.png",
              "url": "https://www.nextrevolutiontech.tech/services",
              "telephone": "info@nextrevolutiontech.com",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "PK"
              },
              "serviceArea": {
                "@type": "GeoShape",
                "addressCountry": "Global"
              }
            }
          `}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="bg-background text-foreground py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="hero-text mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">Our Expertise</h1>
            <p className="hero-text text-xl text-muted-foreground leading-relaxed">
              End-to-End <strong>Digital Innovation</strong> for Market Leaders. We deliver precision-engineered software that <strong>scales</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = getIcon(service.icon);
              return (
                <div
                  key={service.id || index}
                  className={`grid lg:grid-cols-2 gap-12 items-center service-item ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 shadow-[0_0_20px_-5px_var(--color-primary)]">
                      <Icon className="h-10 w-10" />
                    </div>
                    <h2 className="mb-4 text-primary text-3xl font-bold">{service.title}</h2>
                    <p className="text-xl text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {Array.isArray(service.features) && service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-primary font-medium hover:underline inline-flex items-center gap-2"
                    >
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <ImageWithFallback
                      src={service.image_url}
                      alt={service.title}
                      className="rounded-lg shadow-2xl w-full h-auto border border-border/50 hover:border-primary/30 transition-colors"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-secondary/10 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-primary text-3xl md:text-4xl">Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Powering your vision with <strong>industry-standard</strong> protocols and <strong>state-of-the-art</strong> frameworks.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 tech-grid">
            {["React", "Node.js", "Python", "AWS", "Azure", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "TensorFlow", "GraphQL", "TypeScript"].map((tech, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-[0_0_15px_-5px_var(--color-primary)] transition-shadow tech-item hover:border-primary/50"
              >
                <div className="text-card-foreground font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section - Premium Dark Redesign */}
      <section className="relative py-24 overflow-hidden border-t border-white/5 cta-section">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[#020410]">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />
          {/* Tech Grid Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.5) 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-panel p-8 md:p-14 rounded-3xl border border-white/10 shadow-[0_0_50px_-12px_rgba(79,70,229,0.3)] backdrop-blur-xl relative overflow-hidden">
            {/* Glow Effects */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />

            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-white mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Scale</span> Your Vision?
            </h2>
            <p className="text-xl text-muted-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Don't settle for average. Partner with a team that delivers <strong className="text-foreground">excellence</strong>.
            </p>

            <div
              className="relative inline-block group"
              onMouseEnter={() => setHoverModalOpen(true)}
              onMouseLeave={() => setHoverModalOpen(false)}
            >
              <Link
                to="/contact"
                className="relative inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full font-medium hover:shadow-[0_0_30px_-5px_var(--color-primary)] transition-all duration-300 transform group-hover:scale-105"
              >
                <span>Get in Touch</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <HoverModal
                isOpen={hoverModalOpen}
                onMouseEnter={() => setHoverModalOpen(true)}
                onMouseLeave={() => setHoverModalOpen(false)}
                position="top"
                align="center"
                className="w-80"
              >
                <div className="space-y-3 p-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Zap className="h-4 w-4" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">Let's Build Together</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Ready to scale your vision? Get in touch with our team to discuss your project requirements.
                  </p>
                </div>
              </HoverModal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

