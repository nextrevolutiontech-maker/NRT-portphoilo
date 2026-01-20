import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Cloud, Cpu, BarChart3, Shield, Zap, CheckCircle2, Users, Award, TrendingUp, Database, Smartphone, Globe, Blocks, Workflow } from "lucide-react";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { GravityHero } from "../components/ui/GravityHero";
import { VideoHero } from "../components/ui/VideoHero";
import { TechStackMarquee } from "../components/ui/TechStackMarquee";
import { HoverModal } from "../components/ui/HoverModal";
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
    <div className="pt-20" ref={containerRef}>
      <Helmet>
        <title>Home - Next Revolution Tech | Enterprise Software Solutions</title>
        <meta name="description" content="Next Revolution Tech delivers enterprise-grade software solutions, acting as your global technology partner to drive business growth through innovation." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-background text-foreground" style={{ overflow: 'visible' }}>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <GravityHero />
          {/* Subtle overlay to ensure text readability if needed */}
          <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32" style={{ overflow: 'visible' }}>

          <div className="max-w-3xl">
            <h1 className="hero-text mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
              Building <span className="text-primary">Scalable</span> Digital Solutions for a <span className="text-primary">Connected Future</span>
            </h1>
            <p className="hero-text mb-6 sm:mb-8 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We partner with global enterprises to <strong>transform ideas</strong> into powerful, <strong>secure</strong>, and ready-to-scale software ecosystems.
            </p>
            <div className="hero-text flex flex-col sm:flex-row gap-4" style={{ overflow: 'visible', position: 'relative', zIndex: 1 }}>
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
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-header">
            <h2 className="mb-4 text-primary">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions designed for enterprise scale and performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid">
            {services.slice(0, 6).map((service, index) => {
              const Icon = getIcon(service.icon);
              return (
                <div
                  key={service.id || index}
                  className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow service-card"
                >
                  <div className="text-primary mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-3 text-card-foreground text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              View All Services
              <ArrowRight className="h-5 w-5" />
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
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzY2OTAzMjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional Team"
                className="rounded-lg shadow-xl w-full h-auto"
              />
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
      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build scalable, secure, and innovative technology solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-md hover:bg-muted transition-colors"
          >
            Schedule a Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}