
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
    <div className="pt-16 sm:pt-20 xl:pt-[90px] transition-all duration-300" ref={containerRef}>
      <Helmet>
        <title>About Us - Next Revolution Tech | Global Technology Partner</title>
        <meta name="description" content="Learn about Next Revolution Tech, our mission, vision, and our journey in delivering world-class technology solutions." />
        <meta name="keywords" content="About Next Revolution Tech, Technology Partner, Software Agency, Global Team, Remote First" />
        <link rel="canonical" href="https://www.nextrevolutiontech.tech/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nextrevolutiontech.tech/about" />
        <meta property="og:title" content="About Us - Next Revolution Tech | Global Technology Partner" />
        <meta property="og:description" content="We are a borderless technology partner engineering the future of digital business. Discover our mission and vision." />
        <meta property="og:image" content="https://www.nextrevolutiontech.tech/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.nextrevolutiontech.tech/about" />
        <meta property="twitter:title" content="About Us - Next Revolution Tech | Global Technology Partner" />
        <meta property="twitter:description" content="We are a borderless technology partner engineering the future of digital business. Discover our mission and vision." />
        <meta property="twitter:image" content="https://www.nextrevolutiontech.tech/logo.png" />
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

      {/* Leadership Section */}
      <section className="bg-background py-0 pb-20 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-[400px] lg:h-auto">
                <ImageWithFallback
                  src="/ceo.png"
                  alt="Founder & CEO"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent lg:hidden flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Founder</h3>
                    <p className="text-primary">Next Revolution Tech</p>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Visionary Leadership</h2>
                  <div className="h-1 w-20 bg-primary rounded-full"></div>
                </div>

                <blockquote className="text-xl md:text-2xl text-muted-foreground italic mb-8 leading-relaxed">
                  "We don't just write code; we architect the future. My vision for Next Revolution Tech is to be the bridge that connects ambitious enterprises with the transformative power of modern technology."
                </blockquote>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Founder & CEO</h3>
                    <p className="text-primary font-medium">Next Revolution Tech</p>
                  </div>
                </div>
              </div>
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

      {/* Global Presence - Premium Dark Redesign */}
      <section className="relative py-24 overflow-hidden border-t border-white/5">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[#020410]">
          <div className="absolute inset-0 bg-gradient-to-tl from-indigo-900/20 via-purple-900/10 to-pink-900/20" />
          {/* Tech Grid Overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(168, 85, 247, 0.4) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="global-text order-2 lg:order-1">
              <h2 className="mb-6 text-3xl md:text-5xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Borderless Innovation,</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Global Impact</span>
              </h2>
              <p className="text-xl text-muted-foreground/90 mb-8 leading-relaxed">
                We operate as a fully remote, <strong className="text-foreground">globally distributed</strong> team, collaborating seamlessly across time zones to deliver <strong className="text-foreground">world-class</strong> solutions.
              </p>

              <div className="grid grid-cols-2 gap-px bg-gradient-to-r from-transparent via-white/10 to-transparent p-px rounded-2xl overflow-hidden backdrop-blur-sm">
                <div className="bg-[#0A0A0A]/80 p-6 flex flex-col items-center text-center group hover:bg-[#111111] transition-colors">
                  <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-2 group-hover:scale-110 transition-transform">100%</div>
                  <div className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Remote First</div>
                </div>
                <div className="bg-[#0A0A0A]/80 p-6 flex flex-col items-center text-center group hover:bg-[#111111] transition-colors">
                  <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-2 group-hover:scale-110 transition-transform">Global</div>
                  <div className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Client Base</div>
                </div>
                <div className="bg-[#0A0A0A]/80 p-6 flex flex-col items-center text-center group hover:bg-[#111111] transition-colors">
                  <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-2 group-hover:scale-110 transition-transform">24/7</div>
                  <div className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Operations</div>
                </div>
                <div className="bg-[#0A0A0A]/80 p-6 flex flex-col items-center text-center group hover:bg-[#111111] transition-colors">
                  <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-2 group-hover:scale-110 transition-transform">Top</div>
                  <div className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Talent</div>
                </div>
              </div>
            </div>

            <div className="global-image order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-2xl blur-2xl -z-10 transform scale-105" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-transparent to-transparent opacity-60 z-10" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Global Team Collaboration"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}