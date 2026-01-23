
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Building2, TrendingUp, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { HoverModal } from "../components/ui/HoverModal";
import { API_BASE_URL } from "../../config";

interface Project {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image_url: string;
  gallery?: { title: string; image: string }[];
}

// Internal component for handling gallery state
function CaseStudyCard({ study, index }: { study: Project; index: number }) {
  const [activeImage, setActiveImage] = useState<string>(study.image_url || '');

  // Update activeImage when study.image_url changes
  useEffect(() => {
    if (study.image_url && study.image_url !== activeImage) {
      setActiveImage(study.image_url);
    }
  }, [study.image_url, activeImage]);

  return (
    <div
      className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-[0_0_20px_-5px_var(--color-primary)] transition-all hover:scale-[1.02] case-study-card flex flex-col h-full"
    >
      <div className="overflow-hidden h-64 relative group bg-secondary/10">
        <ImageWithFallback
          src={activeImage || study.image_url || ''}
          alt={study.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          loading="eager"
          decoding="sync"
          style={{ opacity: 1 }}
        />
        {/* Overlay Badge for Gallery */}
        {study.gallery && (
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs px-2 py-1 rounded border border-white/10">
            {study.gallery.find(g => g.image === activeImage)?.title || "View"}
          </div>
        )}
      </div>

      {/* Gallery Thumbs */}
      {study.gallery && (
        <div className="flex gap-2 p-4 bg-secondary/5 border-b border-border overflow-x-auto">
          {study.gallery.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(item.image)}
              className={`relative flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all ${activeImage === item.image ? 'border-primary opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
              title={item.title}
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      <div className="p-8 flex-grow flex flex-col">
        <div className="flex items-center gap-2 text-sm text-primary mb-4 font-medium">
          <Building2 className="h-4 w-4" />
          <span>{study.industry}</span>
        </div>
        <h3 className="mb-4 text-card-foreground text-2xl font-semibold">{study.title}</h3>

        <div className="space-y-4 mb-6 flex-grow">
          <div>
            <h4 className="text-sm text-muted-foreground mb-2 font-medium uppercase tracking-wider">Challenge</h4>
            <p className="text-muted-foreground/80">{study.challenge}</p>
          </div>
          <div>
            <h4 className="text-sm text-muted-foreground mb-2 font-medium uppercase tracking-wider">Solution</h4>
            <p className="text-muted-foreground/80">{study.solution}</p>
          </div>
        </div>

        <div className="bg-secondary/10 rounded-lg p-6 mt-auto border border-border">
          <h4 className="mb-4 text-card-foreground font-medium">Results</h4>
          <ul className="space-y-2">
            {study.results.map((result, resultIndex) => (
              <li key={resultIndex} className="flex items-start gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoverModalOpen, setHoverModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);


  const dummyProjects: Project[] = [
    {
      title: "Pulse Portal",
      industry: "MedSpa & Wellness SaaS",
      challenge: "Fragmented administrative processes and lack of cohesive digital journey for wellness centers.",
      solution: "Centralized SaaS platform with client portals, comprehensive admin management, and seamless onboarding.",
      results: ["Streamlined Operations", "Enhanced Client Engagement", "Scalable Multi-Location Support"],
      image_url: "/pulse-admin.png",
      gallery: [
        { title: "Admin Dashboard", image: "/pulse-admin.png" },
        { title: "Reception View", image: "/pulse-reception.png" },
        { title: "Provider Portal", image: "/pulse-provider.png" },
        { title: "Client App", image: "/pulse-client.png" }
      ]
    },
    {
      title: "Global FinTech Platform",
      industry: "Finance",
      challenge: "Legacy infrastructure causing slow transaction times and scalability issues.",
      solution: "Cloud-native microservices architecture migration with real-time processing.",
      results: ["400% increase in transaction speed", "99.99% uptime", "Reduced operational costs by 60%"],
      image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080"
    },
    {
      title: "Healthcare Analytics Dashboard",
      industry: "Healthcare",
      challenge: "Fragmented patient data across multiple systems hindering diagnosis.",
      solution: "Unified data lake with AI-powered analytics and visualization dashboard.",
      results: ["30% faster diagnosis", "Secure HIPAA-compliant data sharing", "Real-time patient monitoring"],
      image_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1080"
    },
    {
      title: "E-Commerce AI Personalization",
      industry: "Retail",
      challenge: "Low conversion rates and lack of personalized user experiences.",
      solution: "Implemented machine learning recommendation engine.",
      results: ["50% increase in average order value", "25% boost in conversion rate", "Enhanced customer retention"],
      image_url: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=1080"
    }
  ];

  useEffect(() => {
    // Fetch data first
    fetch(`${API_BASE_URL}/api/projects`)
      .then(res => res.json())
      .then(data => {
        let formatted = (Array.isArray(data) ? data : []).map((p: any) => ({
          ...p,
          results: Array.isArray(p.results) ? p.results : [],
          image_url: p.image_url || p.image_url // Ensure image_url is preserved
        }));

        // Use dummy data if backend is empty
        if (formatted.length === 0) {
          formatted = dummyProjects;
        }

        setCaseStudies(formatted);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load projects", err);
        // Fallback to dummy data on error
        setCaseStudies(dummyProjects);
        setLoading(false);
      });
  }, []);

  // Animation effect - runs when loading is false
  useEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      // Refresh ScrollTrigger to ensure positions are correct after loading
      ScrollTrigger.refresh();

      // Cards - Set initial state first
      gsap.set(".case-study-card", { opacity: 1, y: 0 });

      // Then animate from hidden state
      gsap.from(".case-study-card", {
        scrollTrigger: {
          trigger: ".case-studies-grid",
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        immediateRender: false
      });

      // Stats
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".impact-section",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });

    }, containerRef);
    return () => ctx.revert();
  }, [loading]);

  if (loading) {
    return (
      <div className="pt-20 sm:pt-24 xl:pt-[120px] min-h-screen bg-background text-foreground">
        {/* Skeleton Hero */}
        <section className="py-8 border-b border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="h-12 w-3/4 bg-secondary/30 rounded animate-pulse" />
              <div className="h-6 w-full bg-secondary/20 rounded animate-pulse" />
              <div className="h-6 w-2/3 bg-secondary/20 rounded animate-pulse" />
            </div>
          </div>
        </section>

        {/* Skeleton Grid */}
        <section className="pt-8 pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[1, 2].map((i) => (
                <div key={i} className="bg-card rounded-lg border border-border overflow-hidden h-96 animate-pulse">
                  <div className="h-48 bg-secondary/30" />
                  <div className="p-8 space-y-4">
                    <div className="h-4 w-1/4 bg-secondary/20 rounded" />
                    <div className="h-8 w-3/4 bg-secondary/30 rounded" />
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-secondary/20 rounded" />
                      <div className="h-4 w-5/6 bg-secondary/20 rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20 sm:pt-24 xl:pt-[120px]" ref={containerRef}>
      <Helmet>
        <title>Case Studies - Next Revolution Tech | Success Stories</title>
        <meta name="description" content="Read how Next Revolution Tech has helped global enterprises achieve their digital transformation goals." />
        <meta name="keywords" content="Case Studies, Success Stories, Software Projects, Client Results, Digital Transformation" />
        <link rel="canonical" href="https://www.nextrevolutiontech.tech/case-studies" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nextrevolutiontech.tech/case-studies" />
        <meta property="og:title" content="Case Studies - Next Revolution Tech | Success Stories" />
        <meta property="og:description" content="See how we transform challenges into competitive advantages for global enterprises." />
        <meta property="og:image" content="https://www.nextrevolutiontech.tech/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.nextrevolutiontech.tech/case-studies" />
        <meta property="twitter:title" content="Case Studies - Next Revolution Tech | Success Stories" />
        <meta property="twitter:description" content="See how we transform challenges into competitive advantages for global enterprises." />
        <meta property="twitter:image" content="https://www.nextrevolutiontech.tech/logo.png" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-background text-white py-8 border-b border-border/50 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="case-hero-text mb-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight opacity-100">Success Stories</h1>
            <p className="case-hero-text text-xl text-gray-300 leading-relaxed opacity-100">
              Delivering <strong>Measurable Impact</strong> for Global Enterprises. See how we transform challenges into <strong>competitive advantages</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-background pt-8 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-3 case-studies-grid">
            {caseStudies.length === 3 ? (
              // If 3 items, show only first 2 for better visibility
              caseStudies.slice(0, 2).map((study, index) => (
                <CaseStudyCard key={index} study={study} index={index} />
              ))
            ) : (
              // Show all items if 2, 4, or more
              caseStudies.map((study, index) => (
                <CaseStudyCard key={index} study={study} index={index} />
              ))
            )}
            {caseStudies.length === 0 && (
              <div className="col-span-full text-center py-20 text-muted-foreground">
                No case studies found. Check back soon!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary/10 py-8 impact-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-primary text-3xl md:text-4xl font-bold">Impact by the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center stat-item">
              <div className="text-4xl text-primary mb-2 font-bold">10+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center stat-item">
              <div className="text-4xl text-primary mb-2 font-bold">5+</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
            <div className="text-center stat-item">
              <div className="text-4xl text-primary mb-2 font-bold">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center stat-item">
              <div className="text-4xl text-primary mb-2 font-bold">100%</div>
              <div className="text-muted-foreground">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20 relative" style={{ overflow: 'visible', zIndex: 1 }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-3xl md:text-4xl font-bold">Ready to Write Your <span className="text-background bg-primary px-2 rounded">Success Story</span>?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Partner with us to build technology that drives <strong>real results</strong>.
          </p>
          <div
            className="relative inline-block"
            onMouseEnter={() => setHoverModalOpen(true)}
            onMouseLeave={() => setHoverModalOpen(false)}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-md hover:bg-muted transition-colors shadow-lg"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </Link>
            <HoverModal
              isOpen={hoverModalOpen}
              onMouseEnter={() => setHoverModalOpen(true)}
              onMouseLeave={() => setHoverModalOpen(false)}
              position="top"
              align="center"
            >
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground text-sm">Start Your Success Story</h3>
                <p className="text-xs text-muted-foreground">
                  Ready to build technology that drives real results? Let's discuss your project and create something amazing together.
                </p>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium mt-3"
                >
                  Get Started
                </Link>
              </div>
            </HoverModal>
          </div>
        </div>
      </section>
    </div>
  );
}

