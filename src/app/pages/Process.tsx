
import { useRef, useEffect, useState } from "react";
import { Search, Lightbulb, Code2, Rocket, HeadphonesIcon, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EngagementModels } from "../components/ui/EngagementModels";
import { HoverModal } from "../components/ui/HoverModal";

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoverModalOpen, setHoverModalOpen] = useState(false);

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

      // Process Steps
      gsap.utils.toArray(".process-step").forEach((step: any, index) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
          },
          x: index % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      });

      // Methodologies
      gsap.from(".method-card", {
        scrollTrigger: {
          trigger: ".methods-grid",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });

      // Collaboration
      gsap.from(".collab-item", {
        scrollTrigger: {
          trigger: ".collab-section",
          start: "top 80%",
        },
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      });

      // Animated Connecting Lines
      gsap.utils.toArray(".process-line-fill").forEach((line: any) => {
        gsap.to(line, {
          scrollTrigger: {
            trigger: line.parentElement,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 0.5,
          },
          scaleY: 1,
          ease: "none"
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: "01",
      icon: <Search className="h-8 w-8" />,
      title: "Discovery & Analysis",
      description: "We begin by thoroughly understanding your business objectives, technical requirements, and project constraints.",
      activities: [
        "Stakeholder interviews",
        "Requirements gathering",
        "Technical assessment",
        "Feasibility analysis",
      ],
    },
    {
      number: "02",
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Strategy & Planning",
      description: "Our team develops a comprehensive strategy and detailed project plan aligned with your goals.",
      activities: [
        "Solution architecture design",
        "Technology stack selection",
        "Project roadmap creation",
        "Risk mitigation planning",
      ],
    },
    {
      number: "03",
      icon: <Code2 className="h-8 w-8" />,
      title: "Development & Testing",
      description: "Agile development with continuous testing ensures quality and allows for iterative improvements.",
      activities: [
        "Sprint-based development",
        "Automated testing",
        "Code reviews",
        "Performance optimization",
      ],
    },
    {
      number: "04",
      icon: <Rocket className="h-8 w-8" />,
      title: "Deployment & Launch",
      description: "Seamless deployment with zero downtime and comprehensive launch support.",
      activities: [
        "Infrastructure setup",
        "Staged deployment",
        "Data migration",
        "Go-live support",
      ],
    },
    {
      number: "05",
      icon: <HeadphonesIcon className="h-8 w-8" />,
      title: "Support & Optimization",
      description: "Ongoing support and continuous improvement to ensure long-term success.",
      activities: [
        "24/7 monitoring",
        "Performance tuning",
        "Feature enhancements",
        "Technical support",
      ],
    },
  ];

  const methodologies = [
    {
      title: "Agile Development",
      description: "Iterative approach with regular feedback loops and flexible adaptation to change.",
    },
    {
      title: "DevOps Practices",
      description: "Automated CI/CD pipelines for faster, more reliable deployments.",
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing strategy including automated and manual QA.",
    },
    {
      title: "Security First",
      description: "Security built into every stage of the development lifecycle.",
    },
  ];

  return (
    <div className="pt-20" ref={containerRef}>
      <Helmet>
        <title>Our Process - Next Revolution Tech | How We Work</title>
        <meta name="description" content="Discover Next Revolution Tech's proven development process, from discovery and strategy to deployment and support." />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-background text-foreground py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="hero-text mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">Our Process</h1>
            <p className="hero-text text-xl text-muted-foreground leading-relaxed">
              A <strong>proven, systematic</strong> approach to delivering exceptional technology solutions on time and within budget.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-primary text-3xl md:text-4xl">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our structured approach ensures <strong>transparency</strong>, <strong>quality</strong>, and successful project delivery.
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative process-step"
              >
                {/* Animated Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-[31px] top-[64px] h-[calc(100%+2rem)] w-[2px] bg-secondary/30 z-0 overflow-hidden">
                    <div className="w-full h-full bg-primary origin-top scale-y-0 process-line-fill" />
                  </div>
                )}
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Number and Icon */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-col items-center lg:items-start gap-4">
                      <div className="text-5xl text-muted-foreground/30 font-bold">{step.number}</div>
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary shadow-[0_0_15px_-5px_var(--color-primary)]">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10 bg-secondary/10 rounded-lg p-8 border border-border hover:border-primary/30 transition-colors">
                    <h3 className="mb-4 text-primary text-2xl font-bold">{step.title}</h3>
                    <p className="text-foreground mb-6 text-lg leading-relaxed">{step.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {step.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="bg-secondary/10 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-primary text-3xl md:text-4xl">Our Methodologies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Best practices and <strong>industry standards</strong> that drive our success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 methods-grid">
            {methodologies.map((methodology, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover:shadow-[0_0_20px_-5px_var(--color-primary)] transition-shadow method-card"
              >
                <h3 className="mb-3 text-primary text-xl font-bold">{methodology.title}</h3>
                <p className="text-muted-foreground">{methodology.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="bg-background py-20 collab-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-primary">Transparent Communication</h2>
              <p className="text-xl text-muted-foreground mb-6">
                We believe in complete transparency and open communication throughout the project lifecycle.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 collab-item">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-foreground mb-1">Regular Status Updates</div>
                    <div className="text-muted-foreground">Weekly progress reports and monthly reviews</div>
                  </div>
                </li>
                <li className="flex items-start gap-3 collab-item">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-foreground mb-1">Dedicated Project Manager</div>
                    <div className="text-muted-foreground">Single point of contact for all communications</div>
                  </div>
                </li>
                <li className="flex items-start gap-3 collab-item">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-foreground mb-1">Collaborative Tools</div>
                    <div className="text-muted-foreground">Real-time access to project management platforms</div>
                  </div>
                </li>
                <li className="flex items-start gap-3 collab-item">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-foreground mb-1">Stakeholder Engagement</div>
                    <div className="text-muted-foreground">Regular demos and feedback sessions</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-secondary/10 p-12 rounded-lg border border-border">
              <h3 className="mb-6 text-primary">Project Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Discovery</span>
                  <span className="text-primary">1-2 weeks</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Planning</span>
                  <span className="text-primary">2-3 weeks</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Development</span>
                  <span className="text-primary">8-16 weeks</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Testing & QA</span>
                  <span className="text-primary">2-4 weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Deployment</span>
                  <span className="text-primary">1-2 weeks</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Timelines vary based on project scope and complexity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <EngagementModels />

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20 relative" style={{ overflow: 'visible', zIndex: 1 }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Start Your Project Today</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and how our process can deliver the results you need
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
              Get Started
            </Link>
            <HoverModal
              isOpen={hoverModalOpen}
              onMouseEnter={() => setHoverModalOpen(true)}
              onMouseLeave={() => setHoverModalOpen(false)}
              position="top"
              align="center"
            >
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground text-sm">Start Your Project Today</h3>
                <p className="text-xs text-muted-foreground">
                  Let's discuss your requirements and how our proven process can deliver the results you need.
                </p>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium mt-3"
                >
                  Contact Us
                </Link>
              </div>
            </HoverModal>
          </div>
        </div>
      </section>
    </div>
  );
}

