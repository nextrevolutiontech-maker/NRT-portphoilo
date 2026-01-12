
import { useState, useEffect, useRef } from "react";
import { Code, Cloud, Cpu, Database, Shield, Zap, Smartphone, Globe, CheckCircle2, BarChart3, Users, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { API_BASE_URL } from "../../config";

// Helper to map icon names to components
const getIcon = (name: string) => {
  const icons: any = {
    Code, Cloud, Cpu, BarChart3, Shield, Zap, CheckCircle2, Users, Award, TrendingUp, Database, Smartphone, Globe
  };
  return icons[name] || <Code className="h-10 w-10" />;
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
  const containerRef = useRef<HTMLDivElement>(null);

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
        setServices(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch services", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-20" ref={containerRef}>
      <Helmet>
        <title>Services - Next Revolution Tech | Custom Software, SaaS & AI</title>
        <meta name="description" content="Explore Next Revolution Tech's services including Custom Software, SaaS Development, AI & Automation, and Cloud Solutions." />
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
                      {typeof Icon === 'function' ? <Icon className="h-10 w-10" /> : Icon}
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
      <section className="bg-primary text-primary-foreground py-20 cta-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-3xl md:text-4xl font-bold">Ready to <span className="text-background bg-primary px-2 rounded">Scale</span> Your Vision?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Don't settle for average. Partner with a team that delivers <strong>excellence</strong>.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-md hover:bg-muted transition-colors shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

