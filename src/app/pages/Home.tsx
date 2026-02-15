import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Cloud, Cpu, BarChart3, Shield, Zap, CheckCircle2, Users, Award, TrendingUp, Database, Smartphone, Globe, Blocks, Workflow } from "lucide-react";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { GravityHero } from "../components/ui/GravityHero";
import { VideoHero } from "../components/ui/VideoHero";
import { TechStackMarquee } from "../components/ui/TechStackMarquee";
import { HoverModal } from "../components/ui/HoverModal";
import { BentoGrid, BentoGridItem } from "../components/ui/BentoGrid";
import { CyberGrid } from "../components/ui/CyberGrid";
import { API_BASE_URL } from "../../config";
import { toast } from "sonner";

// Helper to map icon names to components
const getIcon = (name: string) => {
  const icons: any = {
    Code, Cloud, Cpu, BarChart3, Shield, Zap, CheckCircle2, Users, Award, TrendingUp, Database, Smartphone, Globe, Blocks, Workflow
  };
  return icons[name] || Code;
};

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image_url: string;
}

interface Testimonial {
  id: number;
  author: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image_url: string;
}

export function Home() {
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoverModalOpen, setHoverModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      const tl = gsap.timeline();
      tl.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5 // Wait for page load a bit
      });

      // Stats Scroll Reveal
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });

      // Section Headers Reveal
      gsap.utils.toArray(".section-header").forEach((header: any) => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      });

      // Service Cards Reveal
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });

      // Why Choose Us Reveal
      gsap.from(".reason-item", {
        scrollTrigger: {
          trigger: ".reasons-grid",
          start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });

      gsap.from(".why-image", {
        scrollTrigger: {
          trigger: ".reasons-grid",
          start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE_URL}/api/services`),
      fetch(`${API_BASE_URL}/api/testimonials`)
    ])
      .then(([resServices, resTestimonials]) => Promise.all([resServices.json(), resTestimonials.json()]))
      .then(([dataServices, dataTestimonials]) => {
        setServices(Array.isArray(dataServices) ? dataServices : []);
        setTestimonials(Array.isArray(dataTestimonials) ? dataTestimonials : []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load home data", err);
        setLoading(false);
      });
  }, []);

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Retention" },
    { value: "10+", label: "Countries Served" },
    { value: "24/7", label: "Support & Monitoring" },
  ];

  const reasons = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Proven Expertise",
      description: "Decades of combined experience in enterprise software development.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Dedicated Team",
      description: "Expert developers, architects, and consultants committed to your success.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalable Solutions",
      description: "Built for growth with modern, future-proof technology stacks.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security First",
      description: "Enterprise-grade security and compliance built into every solution.",
    },
  ];

  return (
    <div className="pt-16 sm:pt-20 xl:pt-[90px] transition-all duration-300" ref={containerRef}>
      <Helmet>
        <title>Home - Next Revolution Tech | Enterprise Software Solutions</title>
        <meta name="description" content="Next Revolution Tech delivers enterprise-grade software solutions, acting as your global technology partner to drive business growth through innovation." />
        <meta name="keywords" content="Software Development, Enterprise Solutions, AI, SaaS, Cloud Computing, Next Revolution Tech, Enterprise Software USA, Software Development UK, IT Staff Augmentation Canada, B2B Tech Partner Europe, Global Tech Partner" />
        <link rel="canonical" href="https://www.nextrevolutiontech.tech/" />
        <meta name="content-language" content="en" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="business.business" />
        <meta property="og:url" content="https://www.nextrevolutiontech.tech/" />
        <meta property="og:title" content="Next Revolution Tech | Enterprise Software & AI Partner" />
        <meta property="og:description" content="We build scalable, secure, and ready-to-scale software ecosystems for global enterprises. Your trusted technology partner in USA, UK, Canada & Europe." />
        <meta property="og:image" content="https://www.nextrevolutiontech.tech/logo.png" />
        <meta property="business:contact_data:country_name" content="United States" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.nextrevolutiontech.tech/" />
        <meta property="twitter:title" content="Next Revolution Tech | Enterprise Tech Partner" />
        <meta property="twitter:description" content="Global technology partner delivering enterprise-grade software solutions, AI innovations, and scalable cloud ecosystems." />
        <meta property="twitter:image" content="https://www.nextrevolutiontech.tech/logo.png" />

        {/* Organization Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Next Revolution Tech",
              "url": "https://www.nextrevolutiontech.tech",
              "logo": "https://www.nextrevolutiontech.tech/logo.png",
              "sameAs": [
                "https://facebook.com/nextrevolutiontech",
                "https://instagram.com/nextrevolutiontech",
                "https://linkedin.com/company/nextrevolutiontech",
                "https://tiktok.com/@nextrevolutiontech"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-0123",
                "contactType": "customer service",
                "areaServed": ["US", "GB", "CA", "EU"],
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              }
            }
          `}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-background text-foreground" style={{ overflow: 'visible' }}>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <GravityHero />
          {/* Subtle overlay to ensure text readability if needed */}
          <div className="absolute inset-0 bg-background/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32" style={{ overflow: 'visible' }}>

          <div className="max-w-4xl mx-auto text-center relative z-20">
            <h1 className="hero-text mb-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-tight">
              Building <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-sm">Scalable</span> Digital Solutions
            </h1>
            <p className="hero-text mb-8 text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We partner with global enterprises to <strong>transform ideas</strong> into fascinating, <strong>secure</strong>, and ready-to-scale software ecosystems.
            </p>
            <div className="hero-text flex flex-col sm:flex-row gap-4 justify-center" style={{ overflow: 'visible', position: 'relative', zIndex: 1 }}>
              <div
                className="relative inline-block"
                style={{ overflow: 'visible', position: 'relative', zIndex: 1000 }}
                onMouseEnter={() => setHoverModalOpen(true)}
                onMouseLeave={() => setHoverModalOpen(false)}
              >
                <Link
                  to={localStorage.getItem('token') ? "/contact" : "/admin/login"}
                  onClick={(e) => {
                    if (!localStorage.getItem('token')) {
                      e.preventDefault();
                      toast.info("Login Required", {
                        description: "Please login to schedule a consultation.",
                        action: {
                          label: "Go to Login",
                          onClick: () => window.location.href = '/admin/login'
                        }
                      });
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105 text-center font-medium shadow-[0_0_30px_-5px_var(--color-primary)] hover:shadow-[0_0_40px_-5px_var(--color-primary)]"
                >
                  Book Strategy Call
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <HoverModal
                  isOpen={hoverModalOpen}
                  onMouseEnter={() => setHoverModalOpen(true)}
                  onMouseLeave={() => setHoverModalOpen(false)}
                  position="bottom"
                  align="start"
                  className="!z-[10000]"
                >
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground text-sm">Strategic Consultation</h3>
                    <p className="text-xs text-muted-foreground">
                      Book a free strategy call to discuss your business goals and how we can help you achieve them.
                    </p>
                    <Link
                      to="/contact"
                      className="block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium mt-3"
                    >
                      Schedule Now
                    </Link>
                  </div>
                </HoverModal>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-background/50 backdrop-blur-sm border border-primary/30 text-foreground px-8 py-4 rounded-full hover:bg-primary/10 hover:border-primary transition-all hover:scale-105 text-center font-medium"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Slider Section */}
      <VideoHero />

      {/* Stats Section */}
      <section className="bg-background border-b border-border stats-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center stat-item">
                <div className="text-4xl lg:text-5xl text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-secondary/20 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 section-header">
            <h2 className="mb-6 text-primary font-mono text-sm tracking-wider uppercase">Our Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Comprehensive <span className="text-primary">Technology Solutions</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed for enterprise scale, performance, and future-readiness.
            </p>
          </div>

          <BentoGrid className="services-grid">
            {services.slice(0, 6).map((service, index) => {
              const Icon = getIcon(service.icon);
              return (
                <BentoGridItem
                  key={service.id || index}
                  title={service.title}
                  description={service.description}
                  header={
                    <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl items-center justify-center transition-all duration-300 group-hover/bento:scale-[1.02]
                      ${index % 4 === 0 ? "bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-blue-500/5 group-hover/bento:from-violet-500/30 group-hover/bento:via-purple-500/20" : ""}
                      ${index % 4 === 1 ? "bg-gradient-to-br from-pink-500/20 via-rose-500/10 to-orange-500/5 group-hover/bento:from-pink-500/30 group-hover/bento:via-rose-500/20" : ""}
                      ${index % 4 === 2 ? "bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-indigo-500/5 group-hover/bento:from-cyan-500/30 group-hover/bento:via-blue-500/20" : ""}
                      ${index % 4 === 3 ? "bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-teal-500/5 group-hover/bento:from-emerald-500/30 group-hover/bento:via-green-500/20" : ""}
                    `}>
                      <div className="relative">
                        <div className={`absolute inset-0 blur-2xl opacity-20 group-hover/bento:opacity-40 transition-opacity duration-500
                          ${index % 4 === 0 ? "bg-violet-500" : ""}
                          ${index % 4 === 1 ? "bg-pink-500" : ""}
                          ${index % 4 === 2 ? "bg-cyan-500" : ""}
                          ${index % 4 === 3 ? "bg-emerald-500" : ""}
                        `} />
                        <Icon className={`h-16 w-16 transition-all duration-300 group-hover/bento:scale-110 group-hover/bento:rotate-3
                          ${index % 4 === 0 ? "text-violet-400 drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" : ""}
                          ${index % 4 === 1 ? "text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" : ""}
                          ${index % 4 === 2 ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" : ""}
                          ${index % 4 === 3 ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" : ""}
                        `} strokeWidth={1.5} />
                      </div>
                    </div>
                  }
                  className={index === 3 || index === 6 ? "md:col-span-2" : ""}
                  icon={
                    <div className={`p-2 rounded-full w-fit
                      ${index % 4 === 0 ? "bg-violet-500/10 text-violet-400" : ""}
                      ${index % 4 === 1 ? "bg-pink-500/10 text-pink-400" : ""}
                      ${index % 4 === 2 ? "bg-cyan-500/10 text-cyan-400" : ""}
                      ${index % 4 === 3 ? "bg-emerald-500/10 text-emerald-400" : ""}
                    `}>
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </div>
                  }
                  link="/services"
                />
              );
            })}
          </BentoGrid>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-foreground bg-primary/10 hover:bg-primary/20 px-6 py-3 rounded-full transition-colors border border-primary/20 hover:border-primary/50"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <TechStackMarquee />

      {/* Why Choose Us Section */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center reasons-grid">
            <div>
              <div className="section-header">
                <h2 className="mb-6 text-primary text-3xl md:text-4xl">Why Leaders Choose Us</h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  We don't just write code; we engineer <strong>business value</strong>. Our approach combines technical depth with strategic foresight.
                </p>
              </div>
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex gap-4 reason-item">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="mb-2 text-foreground">{reason.title}</h4>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative why-image">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25 animate-pulse"></div>
                <CyberGrid />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-header">
            <h2 className="mb-4 text-primary">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading enterprises worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id || index} className="bg-card p-8 rounded-lg border border-border service-card">
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4 flex items-center gap-4">
                  {testimonial.image_url && (
                    <img
                      src={testimonial.image_url}
                      alt={testimonial.author}
                      className="w-10 h-10 object-cover rounded-full bg-secondary"
                    />
                  )}
                  <div>
                    <div className="text-card-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      {/* Final CTA Section - Premium Dark Tech Design */}
      <section className="relative py-24 overflow-hidden">
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
          {/* Glowing Orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-30 blur-3xl pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-screen animate-pulse" />
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent-secondary rounded-full mix-blend-screen animate-pulse delay-1000" />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-panel p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can help you build <span className="text-indigo-400 font-semibold">scalable</span>, <span className="text-purple-400 font-semibold">secure</span>, and <span className="text-pink-400 font-semibold">innovative</span> technology solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-[0_0_20px_-5px_var(--color-primary)] transition-all duration-300"
              >
                Schedule a Consultation
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/estimator"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-foreground hover:bg-white/5 border border-white/10 transition-colors"
              >
                Estimate Project Cost
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}