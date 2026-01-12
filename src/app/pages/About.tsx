
import { useRef, useEffect } from "react";
import { Target, Eye, Heart, Globe, Users, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.2
      });

      // Mission/Vision
      gsap.from(".mission-card", {
        scrollTrigger: {
          trigger: ".mission-section",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });

      // Timeline
      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: ".timeline-section",
          start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });

      // Values
      gsap.from(".value-card", {
        scrollTrigger: {
          trigger: ".values-section",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });

      // Global Presence
      gsap.from(".global-text", {
        scrollTrigger: {
          trigger: ".global-section",
          start: "top 80%",
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
      gsap.from(".global-image", {
        scrollTrigger: {
          trigger: ".global-section",
          start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Integrity",
      description: "Trust and transparency are at the core of everything we do.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Remote & Agile",
      description: "We work as a globally distributed team, ensuring 24/7 productivity and flexibility.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies to solve complex challenges.",
    },
  ];

  const timeline = [
    { year: "Late 2025", event: "Founded as a Global Remote Agency" },
    { year: "2025", event: "Launched SaaS & Food Nutrition Platforms" },
    { year: "2025", event: "Developed Bidding App & Baba App" },
    { year: "2025", event: "Expanded into Ecommerce & Advanced UI/UX Design" },
    { year: "2025", event: "Delivering Real-World Solutions Globally" },
  ];

  return (
    <div className="pt-20" ref={containerRef}>
      <Helmet>
        <title>About Us - Next Revolution Tech | Global Technology Partner</title>
        <meta name="description" content="Learn about Next Revolution Tech, our mission, vision, and our journey in delivering world-class technology solutions." />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-background text-foreground py-12 sm:py-16 md:py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="hero-text mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-6xl text-primary font-bold tracking-tight">About Next Revolution Tech</h1>
            <p className="hero-text text-lg sm:text-xl text-muted-foreground leading-relaxed">
              A <strong>borderless</strong> technology partner engineering the <strong>future</strong> of digital business. We are more than developers; we are <strong>innovators</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background py-20 mission-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-secondary/30 p-12 rounded-lg mission-card border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                  <Target className="h-8 w-8" />
                </div>
                <h2 className="text-primary">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To deliver <strong>world-class</strong> technology solutions that drive measurable business value, enabling our clients to achieve their strategic objectives through <strong>innovation</strong>, <strong>excellence</strong>, and partnership.
              </p>
            </div>
            <div className="bg-secondary/30 p-12 rounded-lg mission-card border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                  <Eye className="h-8 w-8" />
                </div>
                <h2 className="text-primary">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the most <strong>trusted</strong> technology partner for enterprises worldwide, setting the standard for <strong>quality</strong> and <strong>client success</strong> in the digital transformation era.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Timeline */}
      <section className="bg-secondary/10 py-20 timeline-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-primary">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rapid growth and innovation in enterprise technology since late 2025
            </p>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 items-start timeline-item"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-background border-4 border-primary rounded-full flex items-center justify-center shadow-[0_0_15px_-5px_var(--color-primary)]">
                  <span className="text-primary font-bold text-center text-sm px-2">{item.year}</span>
                </div>
                <div className="flex-grow bg-card p-6 rounded-lg border border-border mt-4 shadow-sm hover:border-primary/50 transition-colors">
                  <p className="text-card-foreground font-medium">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-background py-20 values-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-primary">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-lg border border-border hover:shadow-lg transition-shadow bg-card value-card hover:border-primary/50"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="mb-3 text-card-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-primary text-primary-foreground py-20 global-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="global-text">
              <h2 className="mb-6 text-3xl md:text-4xl font-bold">Borderless Innovation, <span className="text-background bg-primary px-2 rounded">Global Impact</span></h2>
              <p className="text-xl text-primary-foreground/90 mb-6 leading-relaxed">
                We operate as a fully remote, <strong>globally distributed</strong> team, collaborating seamlessly across time zones to deliver <strong>world-class</strong> solutions.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <div className="text-4xl mb-2 font-bold">100%</div>
                  <div className="text-primary-foreground/90">Remote First</div>
                </div>
                <div>
                  <div className="text-4xl mb-2 font-bold">Global</div>
                  <div className="text-primary-foreground/90">Client Base</div>
                </div>
                <div>
                  <div className="text-4xl mb-2 font-bold">24/7</div>
                  <div className="text-primary-foreground/90">Operations</div>
                </div>
                <div>
                  <div className="text-4xl mb-2 font-bold">Multiple</div>
                  <div className="text-primary-foreground/90">Success Stories</div>
                </div>
              </div>
            </div>
            <div className="global-image">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1571741699053-2d078c8f282a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc2Njk1MzU5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Global Presence"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}