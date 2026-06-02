import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SEO } from "../components/SEO";
import { Testimonials } from "../components/Testimonials";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { API_BASE_URL } from "../../config";
import { FOUNDER } from "../../config/brand";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  ShoppingCart,
  Workflow,
  Play,
  Clock,
  ShieldCheck,
  Award,
  Target,
  Settings,
  TrendingUp,
  Code2,
  Cpu,
  Layers,
  Globe,
  Terminal,
  Palette,
  Server,
  Cloud,
  CheckCircle,
  ExternalLink,
  Bot,
  Smartphone,
  Gavel,
  Baby,
  UtensilsCrossed,
  Sparkles,
  ZapIcon,
  Plus,
  Minus,
  MessageSquare
} from "lucide-react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { InteractiveHero3D } from "../components/ui/InteractiveHero3D";
import { Magnetic } from "../components/ui/Magnetic";
import { TiltCard } from "../components/ui/TiltCard";

interface CountUpProps {
  end: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function CountUp({ end, decimals = 0, suffix = "", prefix = "", duration = 1.5 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;
          
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / 1000;
            const percentage = Math.min(progress / duration, 1);
            
            // Easing out cubic: 1 - Math.pow(1 - x, 3)
            const easeProgress = 1 - Math.pow(1 - percentage, 3);
            
            const currentCount = easeProgress * end;
            setCount(currentCount);
            
            if (percentage < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={elementRef} className="font-mono">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  // Live pipeline task queue state
  const [pipelineTasks, setPipelineTasks] = useState([
    { name: "Deploy Vercel Edge Cache", status: "Active" as const, val: 88, color: "bg-[#3A5CCC]" },
    { name: "Optimize PostgreSQL queries", status: "Review" as const, val: 100, color: "bg-emerald-500" },
    { name: "Integrate Stripe billing flow", status: "Testing" as const, val: 65, color: "bg-purple-500" }
  ]);

  // Dashboard 3D Tilt state
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
    transformStyle: "preserve-3d"
  });
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isDashboardHovered, setIsDashboardHovered] = useState(false);

  // Simulate active work progress on pipeline tasks
  useEffect(() => {
    const interval = setInterval(() => {
      setPipelineTasks(prevTasks =>
        prevTasks.map(task => {
          if (task.status === "Active") {
            const nextVal = task.val >= 99 ? 60 : task.val + 1;
            return { ...task, val: nextVal };
          }
          if (task.status === "Testing") {
            const nextVal = task.val >= 95 ? 40 : task.val + 2;
            const nextStatus = nextVal > 85 ? ("Review" as const) : ("Testing" as const);
            return { ...task, val: nextVal, status: nextStatus };
          }
          if (task.status === "Review") {
            if (task.val < 100) return { ...task, val: 100 };
            if (Math.random() > 0.8) {
              return { ...task, status: "Active" as const, val: 50 };
            }
          }
          return task;
        })
      );
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const handleDashboardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = dashboardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized position from -0.5 to 0.5
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;

    const maxRotate = 10; // Subtle but noticeable 3D tilt
    const rotateX = -yPct * maxRotate;
    const rotateY = xPct * maxRotate;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease-out",
      transformStyle: "preserve-3d"
    });

    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleDashboardMouseEnter = () => {
    setIsDashboardHovered(true);
  };

  const handleDashboardMouseLeave = () => {
    setIsDashboardHovered(false);
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
      transformStyle: "preserve-3d"
    });
  };
  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    message: ""
  });
  const [leadStatus, setLeadStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadStatus('loading');
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadForm.name,
          email: leadForm.email,
          whatsapp: leadForm.whatsapp,
          company: leadForm.company,
          message: `[LEAD MAGNET: FREE SOFTWARE AUDIT] ${leadForm.message}`
        }),
      });
      if (!response.ok) throw new Error('Failed to send');
      setLeadStatus('success');
      toast.success("Audit Session Requested!", { 
        description: "Ahsan Khan or an NRT architect will reach out within 24 hours to schedule your session.",
        style: { background: '#0F172A', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }
      });
      setLeadForm({ name: "", email: "", whatsapp: "", company: "", message: "" });
      setIsAuditModalOpen(false);
    } catch (error) {
      setLeadStatus('error');
      toast.error("Transmission Error", { description: "Please try again or connect via WhatsApp directly." });
    } finally {
      setLeadStatus('idle');
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.5 } });

      tl.from(headlineRef.current, {
        y: 100,
        opacity: 0,
        skewY: 7,
        stagger: 0.2,
        delay: 0.5
      })
      .from(subtextRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2
      }, "-=1")
      .from(ctaRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2
      }, "-=1");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const ctaLinks = {
    test: "/contact?type=test",
    started: "/contact?type=full"
  };

  const services = [
    "JavaScript", "Frontend Development", "PHP", "Node.js", "Backend Development", 
    "API Development", "API Integration", "React.js", "Web Development", 
    "Payment Gateway Integration", "Next.js", "Tailwind CSS", "Web Design", 
    "Python", ".NET", "Graphic Design", "Mobile App Development", "Android", 
    "WordPress", "CSS", "User Interface / IA", "eCommerce", "ERP", "MySQL", 
    "HTML5", "HTML", "Shopify", "Software Development", "Laravel", 
    "Full Stack Development", "React Native", "Flutter", "React.js Framework", 
    "Shopify Development", "Figma", "Chatbot", "WordPress Design", "MERN Stack", 
    "NLP", "SaaS", "REST API", "Website Development", "AI Agents", "Agentic AI"
  ];

  const teamRoles = [
    { role: "Frontend Developer", icon: <Code2 className="w-6 h-6" /> },
    { role: "Backend Developer", icon: <Terminal className="w-6 h-6" /> },
    { role: "UI/UX Designer", icon: <Palette className="w-6 h-6" /> },
    { role: "DevOps Engineer", icon: <Cloud className="w-6 h-6" /> },
    { role: "Quality Engineer", icon: <ShieldCheck className="w-6 h-6" /> },
    { role: "Product Manager", icon: <Target className="w-6 h-6" /> }
  ];

  const featuredProjects = [
    {
      title: "Pulse Healthcare ERP",
      category: "Enterprise / SaaS",
      impact: "Reduced overhead by 40%",
      image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1777422316/nrt-portfolio/ev6sddad59sg3uij5e89.png",
      color: "bg-blue-600"
    },
    {
      title: "BabyBloom Marketplace",
      category: "eCommerce / Web",
      impact: "45% More Conversions",
      image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1777422324/nrt-portfolio/fxrl8jxwne52fpd0vq1t.png",
      color: "bg-[#3A5CCC]"
    },
    {
      title: "IraqBid: Auction App",
      category: "Mobile / Real-time",
      impact: "Zero-latency bidding",
      image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1777422323/nrt-portfolio/ynlxrffuhffwgf0zl60v.png",
      color: "bg-[#0F172A]"
    }
  ];

  const [billingCycle, setBillingCycle] = useState<'monthly' | 'weekly'>('monthly');

  const plans = [
    { name: "Starter", price: billingCycle === 'monthly' ? "$1,000" : "$299", period: billingCycle === 'monthly' ? "/mo" : "/wk", color: "from-[#6366f1] to-[#a855f7]", features: ["Unlimited Small Tasks", "Basic API Integrations", "Dedicated Project Manager", "48h Turnaround Time"] },
    { name: "Performance Pro", price: billingCycle === 'monthly' ? "$1,500" : "$449", period: billingCycle === 'monthly' ? "/mo" : "/wk", color: "from-[#11998E] to-[#38EF7D]", features: ["Core Web Vitals Boost", "Security & Firewall Audit", "24/7 Uptime Monitoring", "Database Optimization"] },
    { name: "Growth", price: billingCycle === 'monthly' ? "$2,000" : "$599", period: billingCycle === 'monthly' ? "/mo" : "/wk", color: "from-[#3A5CCC] to-[#27324A]", featured: true, features: ["Full Stack Development", "Custom API & Webhooks", "Weekly Strategy Calls", "Priority Support Queue"] },
    { name: "AI Automation", price: billingCycle === 'monthly' ? "$2,500" : "$749", period: billingCycle === 'monthly' ? "/mo" : "/wk", color: "from-[#8E2DE2] to-[#4A00E0]", features: ["Custom AI Agent Build", "Workflow Automation", "LLM Integration (GPT/Claude)", "AI-Driven Insights"] },
    { name: "Scale", price: billingCycle === 'monthly' ? "$3,500" : "$999", period: billingCycle === 'monthly' ? "/mo" : "/wk", color: "from-[#0ea5e9] to-[#2563eb]", features: ["Entire Technical Team", "Unlimited Complex Tasks", "Architectural Consulting", "Fastest 24h Turnaround"] },
    { name: "Custom Project", price: "Custom", period: "", color: "from-[#0F172A] to-[#161F33]", features: ["Fixed Scope Execution", "Zero-to-One MVP Build", "Legacy Code Migration", "Dedicated Sprint Team"] }
  ];

  return (
    <div className="relative min-h-screen bg-[#080B11] overflow-x-hidden text-white">
      <SEO 
        title="One Team. Every Solution. | Dedicated Developers for Scale"
        description="We provide dedicated developers and complete digital solutions so businesses can scale without repeatedly hiring freelancers for every new project."
      />

      {/* Hero Section - Restored Dark */}
      <section ref={heroRef} className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-12 xl:px-24 overflow-hidden bg-[#0B0F19]">
        <InteractiveHero3D />
        
        {/* Ambient Overlay - Neutralized */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-8">
               <h1 ref={headlineRef} className="text-4xl sm:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight mb-8 sm:mb-12 text-white">
                 We build and automate <br className="hidden sm:block" />
                 <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#7DD3FC] to-[#3A5CCC]">custom SaaS, ERPs, and AI workflows</span>.
               </h1>
              <p ref={subtextRef} className="text-lg sm:text-xl xl:text-2xl text-slate-200 text-nrt-body mb-10 sm:mb-12 max-w-[650px] leading-snug">
                Next Revolution Tech converts manual operations into streamlined systems. We design, deploy, and scale custom enterprise software, integrations, and automated workflows.
              </p>
               <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16">
                 <Magnetic>
                   <button 
                     onClick={() => setIsAuditModalOpen(true)}
                     className="btn-primary-nrt px-10 py-5 text-lg cursor-pointer flex items-center justify-center text-white"
                   >
                     Free ERP Planning Session
                     <ArrowRight className="w-5 h-5 ml-3 animate-pulse" />
                   </button>
                 </Magnetic>
                 <Magnetic>
                    <Link to="/portfolio" className="btn-secondary-nrt px-10 py-5 text-lg">
                      Explore Portfolio
                      <ArrowRight className="w-5 h-5 ml-3" />
                    </Link>
                  </Magnetic>
               </div>
               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 border-t border-white/10 pt-10 sm:pt-12">
                  <div className="flex -space-x-2 sm:-space-x-3">
                     {['A', 'J', 'S', 'M'].map((letter, i) => (
                       <div 
                         key={i} 
                         className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full border-4 border-[#0F172A] shadow-lg flex items-center justify-center text-xs sm:text-sm font-bold text-white ${
                           i === 0 ? 'bg-[#3A5CCC]' : 
                           i === 1 ? 'bg-emerald-500' : 
                           i === 2 ? 'bg-purple-500' : 
                           'bg-blue-400'
                         }`}
                       >
                          {letter}
                       </div>
                     ))}
                  </div>
                   <div className="space-y-1">
                      <div className="text-base sm:text-lg font-medium text-slate-200 italic">&ldquo;The most reliable technical partner we&apos;ve integrated.&rdquo;</div>
                      <div className="flex items-center gap-2 text-slate-300 text-nrt-label">
                         <span className="text-[#3A5CCC]">🇵🇰 Karachi Based</span>
                         <span>|</span>
                         <span>Global Delivery</span>
                      </div>
                   </div>      
                </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-4 w-full lg:mt-6"
            >
              {/* Premium Dashboard Panel Mockup */}
              <div 
                ref={dashboardRef}
                style={tiltStyle}
                onMouseMove={handleDashboardMouseMove}
                onMouseEnter={handleDashboardMouseEnter}
                onMouseLeave={handleDashboardMouseLeave}
                className="relative rounded-3xl border border-white/10 bg-[#161F33]/60 backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden group cursor-default select-none"
              >
                {/* Spotlight background glow */}
                {isDashboardHovered && (
                  <div 
                    className="absolute pointer-events-none rounded-full blur-[100px] opacity-40 transition-opacity duration-300"
                    style={{
                      width: '250px',
                      height: '250px',
                      background: 'radial-gradient(circle, rgba(58,92,204,0.3) 0%, rgba(20,184,166,0.1) 70%, transparent 100%)',
                      left: `${spotlightPos.x - 125}px`,
                      top: `${spotlightPos.y - 125}px`,
                      mixBlendMode: 'screen',
                    }}
                  />
                )}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.svg')] pointer-events-none" />
                
                {/* Header of the panel */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
                  </div>
                  <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">NRT_PIPELINE</div>
                </div>

                {/* Main metric */}
                <div className="space-y-1 mb-6">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#3A5CCC]">Sprint Capacity</div>
                  <div className="text-3xl font-black text-white tracking-tight flex items-baseline gap-2">
                    94.8% <span className="text-xs font-semibold text-emerald-400 animate-pulse">Optimal</span>
                  </div>
                </div>

                {/* Pipeline List */}
                <div className="space-y-4 mb-8">
                  <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">Current Queue</div>
                  {pipelineTasks.map((task, i) => (
                    <div 
                      key={i} 
                      className="relative bg-white/[0.01] border border-white/5 rounded-2xl p-4 space-y-3 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] cursor-pointer overflow-hidden group/card"
                    >
                      <div className="flex justify-between items-center text-xs font-semibold text-white/80 relative z-10">
                        <span>{task.name}</span>
                        <span className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full transition-all duration-300 ${
                          task.status === "Active" ? "bg-[#3A5CCC]/10 text-[#3A5CCC] border border-[#3A5CCC]/20" :
                          task.status === "Review" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 animate-pulse" :
                          "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                        }`}>{task.status}</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden relative z-10">
                        <motion.div 
                          animate={{ width: `${task.val}%` }} 
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                          className={`h-full ${task.color}`} 
                        />
                      </div>
                      {/* Glow Overlay border on hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl border border-white/10" 
                        style={{
                          boxShadow: task.status === "Active" ? "inset 0 0 12px rgba(58,92,204,0.15)" : 
                                     task.status === "Review" ? "inset 0 0 12px rgba(16,185,129,0.15)" : 
                                     "inset 0 0 12px rgba(168,85,247,0.15)"
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="text-center relative z-10">
                  <Link to="/estimator" className="inline-flex items-center text-xs font-black text-[#3A5CCC] uppercase tracking-[0.2em] hover:text-white transition-colors">
                    Check Pricing →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar - Redesigned Dark & Premium */}
      <ScrollReveal>
        <section className="py-8 sm:py-10 bg-[#131A2A] border-y border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_4px_20px_rgba(0,0,0,0.25)]">
           <div className="mx-auto max-w-7xl px-4 flex flex-wrap justify-center gap-12 sm:gap-24">
              {[
                { end: 150, decimals: 0, suffix: "+", label: "Projects Delivered" },
                { end: 45, decimals: 0, suffix: "", label: "Active Systems" },
                { end: 1.2, decimals: 1, suffix: "M+", label: "Automations Running" },
                { end: 99.9, decimals: 1, suffix: "%", label: "Client Satisfaction" }
              ].map((stat, i) => (
                <div key={i} className="text-center min-w-[140px]">
                   <div className="text-3xl sm:text-4xl font-black tracking-tighter text-white mb-2">
                     <CountUp end={stat.end} decimals={stat.decimals} suffix={stat.suffix} />
                   </div>
                   <div className="text-[11px] font-black uppercase tracking-widest text-slate-300">{stat.label}</div>
                </div>
              ))}
           </div>
        </section>
      </ScrollReveal>

      {/* Logo Marquee - Compact & Spaced */}
      <ScrollReveal>
        <section className="py-6 sm:py-8 overflow-hidden bg-[#0B0F19] relative border-b border-white/10">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
          <div className="text-nrt-eyebrow text-slate-300 text-center mb-5 relative z-10">
             Platforms we integrate
          </div>
          <div className="relative flex overflow-x-hidden z-10">
            <div className="flex animate-infinite-scroll whitespace-nowrap items-center gap-24 px-16">
              {[
                { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
                { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" },
                { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg" },
                { name: "PayPal", logo: "https://cdn.worldvectorlogo.com/logos/paypal-3.svg" },
                { name: "WooCommerce", logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg" }
              ].concat([
                { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
                { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" },
                { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg" },
                { name: "PayPal", logo: "https://cdn.worldvectorlogo.com/logos/paypal-3.svg" },
                { name: "WooCommerce", logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg" }
              ]).map((brand, i) => (
                <div key={i} className="flex items-center gap-3.5 group">
                  <img src={brand.logo} alt={brand.name} className="h-5 sm:h-6 w-auto brightness-0 invert opacity-30 group-hover:opacity-75 transition-all duration-500" />
                  <span className="text-sm font-semibold tracking-tighter text-slate-400 group-hover:text-slate-200 transition-colors uppercase">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 sm:py-24 relative overflow-hidden bg-[#131A2A] border-b border-white/10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3A5CCC]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
          
          <div className="mx-auto max-w-7xl xl:max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
               <div className="text-nrt-eyebrow text-[#3A5CCC] mb-6">Expertise</div>
               <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mb-8">
                 Real work, not just <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#7DD3FC] to-[#3A5CCC] italic font-italic-serif font-normal">pretty screens</span>.
               </h2>
               <p className="text-lg sm:text-xl text-nrt-body text-slate-200 max-w-2xl leading-relaxed">
                 The services clients usually come to us for: custom ERP portals, workflow automations that save real hours, responsive SaaS builds, and integrations that scale.
               </p>
            </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1: ERP & Business Automation - Large Bento Span */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1E293B]/70 p-8 sm:p-10 border border-white/10 shadow-2xl flex flex-col justify-between group col-span-1 md:col-span-2 lg:col-span-2 min-h-[400px] hover:-translate-y-1.5 hover:bg-[#1E293B] hover:border-slate-500 transition-all duration-500">
                 <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
                 
                 {/* Coded Visual Mockup */}
                 <div className="flex flex-col sm:flex-row gap-6 items-center w-full max-w-[550px] mx-auto mb-8 sm:mb-0">
                    {/* Invoice Panel */}
                    <div className="w-full sm:w-1/2 bg-slate-900/80 border border-white/10 rounded-2xl p-5 font-mono text-[10px] space-y-4">
                       <div className="flex justify-between border-b border-white/10 pb-3">
                          <span className="text-slate-400">Invoice #NRT-8842</span>
                          <span className="text-emerald-400 font-bold">PAID</span>
                       </div>
                       <div className="space-y-2">
                          <div className="flex justify-between">
                             <span className="text-slate-200">Premium Development</span>
                             <span className="text-white">$1,500.00</span>
                          </div>
                          <div className="flex justify-between text-slate-400 text-[9px]">
                             <span>Sprint Capacity (1 wk)</span>
                             <span>Included</span>
                          </div>
                       </div>
                       <div className="border-t border-white/10 pt-3 flex justify-between font-bold text-xs text-white">
                          <span>Total</span>
                          <span>$1,500.00</span>
                       </div>
                    </div>
                    {/* Sleek Credit Card */}
                    <div className="w-full sm:w-1/2 bg-gradient-to-tr from-[#3A5CCC] to-[#1d2d63] border border-white/15 rounded-2xl p-5 flex flex-col justify-between aspect-[1.58/1] shadow-2xl text-white">
                       <div className="flex justify-between items-start">
                          <ShoppingCart className="w-6 h-6 text-white" />
                          <span className="text-[8px] font-black tracking-widest uppercase opacity-80">Corporate</span>
                       </div>
                       <div className="space-y-2">
                          <div className="text-sm font-bold tracking-widest">•••• •••• •••• 8842</div>
                          <div className="flex justify-between text-[8px] uppercase tracking-widest opacity-80">
                             <span>Next Rev Tech</span>
                             <span>08/29</span>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="relative z-10 text-white mt-6">
                    <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase leading-none">ERP & Business Automation</h3>
                    <p className="text-sm font-medium text-slate-300 leading-relaxed max-w-xl">Eliminate manual spreadsheets and inventory leaks. We build customized ERPs, POS systems, and portal software that sync operations in real-time.</p>
                 </div>
              </div>
  
              {/* Card 2: Enterprise Integrations - Small Bento Span */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1E293B]/70 p-8 border border-white/10 shadow-2xl flex flex-col justify-between group col-span-1 min-h-[400px] hover:-translate-y-1.5 hover:bg-[#1E293B] hover:border-slate-500 transition-all duration-500">
                 <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
                 
                 {/* Coded Syntax Editor & Webhook Console */}
                 <div className="flex flex-col gap-3">
                    {/* IDE Editor Mockup */}
                    <div className="bg-slate-950/80 border border-white/10 rounded-2xl shadow-2xl font-mono text-[10px] leading-relaxed select-none overflow-hidden">
                       {/* Tab Bar */}
                       <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.02] border-b border-white/5">
                          <div className="flex items-center gap-1.5">
                             <div className="w-2 h-2 rounded-full bg-red-500/50" />
                             <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                             <div className="w-2 h-2 rounded-full bg-green-500/50" />
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.04] rounded-lg border border-white/5 text-[9px] font-semibold text-slate-300">
                             <span className="text-blue-400 text-[8px] font-bold">TS</span>
                             webhook.ts
                          </div>
                          <div className="w-12" />
                       </div>
                       {/* Code area */}
                       <div className="p-4 space-y-1 font-mono text-[9.5px]">
                          <div className="flex gap-3">
                             <span className="text-white/20 select-none text-right w-3">1</span>
                             <span><span className="text-purple-400">const</span> <span className="text-blue-400">webhook</span> = <span className="text-purple-400">async</span> (req, res) =&gt; &#123;</span>
                          </div>
                          <div className="flex gap-3">
                             <span className="text-white/20 select-none text-right w-3">2</span>
                             <span className="pl-4"><span className="text-purple-400">const</span> sig = req.headers[<span className="text-emerald-400">'sig'</span>];</span>
                          </div>
                          <div className="flex gap-3">
                             <span className="text-white/20 select-none text-right w-3">3</span>
                             <span className="pl-4"><span className="text-purple-400">const</span> event = stripe.construct(req.body, sig);</span>
                          </div>
                          <div className="flex gap-3">
                             <span className="text-white/20 select-none text-right w-3">4</span>
                             <span className="pl-4"><span className="text-purple-400">if</span> (event.type === <span className="text-emerald-400">'charge.success'</span>) &#123;</span>
                          </div>
                          <div className="flex gap-3">
                             <span className="text-white/20 select-none text-right w-3">5</span>
                             <span className="pl-8 text-yellow-300">await <span className="text-blue-300">db</span>.activateSprint();</span>
                          </div>
                          <div className="flex gap-3">
                             <span className="text-white/20 select-none text-right w-3">6</span>
                             <span className="pl-4">&#125;</span>
                          </div>
                          <div className="flex gap-3">
                             <span className="text-white/20 select-none text-right w-3">7</span>
                             <span>&#125;;</span>
                          </div>
                       </div>
                    </div>
                    {/* Mini Terminal / Console log */}
                    <div className="bg-slate-950 border border-white/10 rounded-xl p-3 sm:p-4 font-mono text-[9px] flex items-center justify-between shadow-lg">
                       <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-black">200 OK</span>
                          <span className="text-slate-300">POST /api/webhooks</span>
                       </div>
                       <span className="text-slate-400 font-semibold">12ms</span>
                    </div>
                 </div>

                 <div className="relative z-10 text-white mt-6">
                    <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase leading-none">Enterprise Integrations</h3>
                    <p className="text-sm font-medium text-slate-300 leading-relaxed">Secure payment gateways, local FBR tax APIs, CRMs, and legacy database connections with reliable queue management.</p>
                 </div>
              </div>
     
              {/* Card 3: AI Workflow Automation - Small Bento Span */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1E293B]/70 p-8 border border-white/10 shadow-2xl flex flex-col justify-between group col-span-1 min-h-[400px] hover:-translate-y-1.5 hover:bg-[#1E293B] hover:border-slate-500 transition-all duration-500">
                 <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
                 
                 {/* Visual Node Agent Canvas */}
                 <div className="bg-slate-950/80 border border-white/10 rounded-2xl p-5 shadow-2xl relative min-h-[160px] overflow-hidden flex flex-col justify-between">
                    <div className="absolute inset-0 opacity-[0.02] bg-[url('/noise.svg')]" />
                    
                    <div className="relative z-10 flex flex-col gap-3">
                       {/* Node 1: Input */}
                       <div className="flex items-center justify-between bg-white/[0.02] border border-white/5 rounded-xl p-3">
                          <div className="flex items-center gap-2 text-[9px] font-bold text-slate-200">
                             <span className="w-1.5 h-1.5 rounded-full bg-[#3A5CCC]" />
                             User Request Node
                          </div>
                          <span className="text-[8px] text-slate-400 font-mono">active</span>
                       </div>

                       {/* Connection Line */}
                       <div className="h-4 flex justify-center items-center">
                          <div className="w-0.5 h-full bg-gradient-to-b from-[#3A5CCC] to-purple-500" />
                       </div>

                       {/* Node 2: Agent LLM */}
                       <div className="flex items-center justify-between bg-[#3A5CCC]/10 border border-[#3A5CCC]/25 rounded-xl p-3">
                          <div className="flex items-center gap-2 text-[9px] font-bold text-white">
                             <Bot className="w-3.5 h-3.5 text-[#3A5CCC]" />
                             Agentic LLM router
                          </div>
                          <span className="text-[8px] text-emerald-400 font-bold uppercase tracking-wider">processing</span>
                       </div>
                    </div>
                 </div>

                 <div className="relative z-10 text-white mt-6">
                    <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase leading-none">AI Workflow Automation</h3>
                    <p className="text-sm font-medium text-slate-300 leading-relaxed">Automate manual customer support, lead qualification, email follow-ups, and automated CRM pipelines using agentic LLMs.</p>
                 </div>
              </div>
  
              {/* Card 4: Custom SaaS Development - Small Bento Span */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1E293B]/70 p-8 border border-white/10 shadow-2xl flex flex-col justify-between group col-span-1 min-h-[400px] hover:-translate-y-1.5 hover:bg-[#1E293B] hover:border-slate-500 transition-all duration-500">
                 <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
                 
                 {/* Coded Phone Mockup */}
                 <div className="mx-auto w-40 aspect-[9/16] bg-slate-950 border border-white/15 rounded-[1.8rem] p-3 flex flex-col justify-between shadow-2xl relative">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-20 flex items-center justify-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
                    </div>
                    <div className="flex justify-between items-center text-[6px] text-slate-400 font-mono pt-2 pb-1.5 border-b border-white/5">
                       <span>09:41</span>
                       <div className="flex items-center gap-1">
                          <span className="w-1 h-1 bg-white/40 rounded-full" />
                          <span className="w-1 h-1 bg-white/40 rounded-full" />
                          <span className="w-1.5 h-1 bg-white/40 rounded-sm" />
                       </div>
                    </div>
                    <div className="space-y-2 py-2 flex-1 flex flex-col justify-center">
                       <div className="bg-[#3A5CCC]/10 border border-[#3A5CCC]/25 rounded-xl p-2.5 space-y-1">
                          <div className="text-[5px] text-slate-400 uppercase font-black tracking-wider">Project Phase</div>
                          <div className="text-xs font-black text-white flex items-center justify-between">
                             <span>Build v1.2</span>
                             <span className="text-[#3A5CCC] text-[6px] bg-[#3A5CCC]/10 px-1 py-0.5 rounded font-mono font-bold">94%</span>
                          </div>
                       </div>
                       {/* SVG Mini Chart Mockup */}
                       <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2 h-12 flex flex-col justify-between">
                          <div className="text-[5.5px] text-slate-400 uppercase font-black tracking-widest">Velocity</div>
                          <svg viewBox="0 0 100 30" className="w-full h-8 overflow-visible">
                             <path d="M0,25 Q15,5 30,15 T60,5 T90,20" fill="none" stroke="#3A5CCC" strokeWidth="1.5" />
                             <circle cx="90" cy="20" r="2" fill="#3A5CCC" />
                          </svg>
                       </div>
                    </div>
                    <div className="h-1 w-12 bg-white/20 rounded-full mx-auto mt-1" />
                 </div>

                 <div className="relative z-10 text-white mt-6">
                    <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase leading-none">Custom SaaS Development</h3>
                    <p className="text-sm font-medium text-slate-300 leading-relaxed">From database architecture to responsive dashboards, we build scalable software products designed to sell.</p>
                 </div>
              </div>
  
              {/* Card 5: Cloud & DevOps - Small Bento Span */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1E293B]/70 p-8 sm:p-10 border border-white/10 shadow-2xl flex flex-col justify-between group col-span-1 min-h-[400px] hover:-translate-y-1.5 hover:bg-[#1E293B] hover:border-slate-500 transition-all duration-500">
                 <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
                 
                 {/* Visual Cluster Panel */}
                 <div className="flex flex-col gap-3.5 w-full max-w-[500px] mx-auto font-mono text-[9px] select-none text-slate-400 mb-8 sm:mb-0">
                    {[
                      { node: "neon-db-prod-cluster", lat: "9ms", status: "Active", col: "text-emerald-400 border-emerald-500/20" },
                      { node: "vercel-edge-middleware", lat: "4ms", status: "Active", col: "text-emerald-400 border-emerald-500/20" },
                      { node: "aws-s3-static-bucket", lat: "15ms", status: "Syncing", col: "text-amber-400 border-amber-500/20" }
                    ].map((srv, i) => (
                      <div key={i} className="flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                         <div className="flex items-center gap-2.5">
                            <span className={`w-1.5 h-1.5 rounded-full ${srv.status === "Active" ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
                            <span className="text-slate-200 font-bold">{srv.node}</span>
                         </div>
                         <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                            <span>Latency: {srv.lat}</span>
                            <span className={`px-2 py-0.5 border rounded-full text-[8px] uppercase tracking-wider ${srv.col}`}>{srv.status}</span>
                         </div>
                      </div>
                    ))}
                 </div>

                 <div className="relative z-10 text-white mt-6">
                    <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase leading-none">Cloud & DevOps</h3>
                    <p className="text-sm font-medium text-slate-300 leading-relaxed max-w-xl">Infrastructure as code, automated pipelines (CI/CD), security firewalls, and reliable edge scaling.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Featured Projects Section */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 bg-[#0B0F19] border-t border-white/10 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#14B8A6]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
              <div>
                <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#3A5CCC] mb-4">Portfolio Highlights</div>
                <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05]">
                  Featured <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#7DD3FC] to-[#3A5CCC] italic font-italic-serif font-normal">Client Showcase</span>
                </h2>
              </div>
              <Link 
                to="/portfolio" 
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white bg-[#1E293B] border border-white/15 hover:bg-[#3A5CCC] hover:border-transparent px-8 py-4 rounded-xl transition-all"
              >
                View Full Portfolio <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {featuredProjects.map((project, idx) => (
                <div key={idx} className="group bg-[#131A2A] rounded-[2rem] border border-white/10 overflow-hidden hover:border-[#14B8A6]/40 hover:bg-[#1E293B]/70 hover:shadow-[0_20px_45px_rgba(20,184,166,0.08)] transition-all duration-300 flex flex-col h-full shadow-2xl">
                  <div className="relative aspect-video overflow-hidden bg-slate-900 border-b border-white/10">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <span className="absolute bottom-4 left-4 bg-[#3A5CCC]/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-lg">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#14B8A6] transition-colors">{project.title}</h3>
                      <p className="text-sm text-slate-300 leading-relaxed font-medium">{project.impact}</p>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-white/10">
                      <Link to="/portfolio" className="text-xs font-black uppercase tracking-wider text-[#3A5CCC] hover:text-white transition-colors inline-flex items-center gap-1.5">
                        Inspect System <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Testimonials limit={6} theme="dark" />

      {/* Simple Process - Redesigned Premium Layout */}
      <ScrollReveal direction="down">
        <section className="py-20 sm:py-24 bg-[#0B0F19] border-t border-white/10">
          <div className="mx-auto max-w-7xl xl:max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center sm:text-left">
               <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#3A5CCC] mb-4">How it works</div>
               <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05]">Simple Process. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#7DD3FC] to-[#3A5CCC] italic font-italic-serif font-normal">Reliable</span> Results.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { step: "01", name: "Subscribe", desc: "Choose a customizable plan or start with a test task to begin your dedicated partnership." },
                { step: "02", name: "Submit Tasks", desc: "Add design, backend, frontend or DevOps tasks to your board. One backlog, pure efficiency." },
                { step: "03", name: "Fast Iterations", desc: "Watch active sprints advance daily. Track progress inside our dedicated Slack and Jira." },
                { step: "04", name: "Receive", desc: "Get production-grade deliverables in just 2-3 business days on average." },
                { step: "05", name: "Optimize", desc: "We continuously refine, test, and profile your application for speed and stability." },
                { step: "06", name: "Scale", desc: "Seamlessly expand your technical squad and system integrations as your operations grow." }
              ].map((item, i) => (
                <div key={i} className="bg-[#1E293B]/50 p-10 rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col justify-between min-h-[260px] hover:border-slate-500/50 hover:bg-[#1E293B]/70 transition-all duration-300">
                   <div className="text-5xl font-black text-[#3A5CCC]/20 font-mono mb-6">{item.step}</div>
                   <div>
                      <h3 className="text-xl font-bold tracking-tight text-white mb-3 uppercase">{item.name}</h3>
                      <p className="text-sm font-medium text-slate-300 leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Pricing Section - Restored Dark */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 bg-[#131A2A] border-y border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A5CCC] mb-6">Service Models</div>
               <h2 className="text-6xl sm:text-8xl font-black tracking-tight text-white leading-[1.05] mb-8">Engineering for <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#7DD3FC] to-[#3A5CCC] italic font-italic-serif font-normal">Every Stage</span>.</h2>
               <p className="text-xl font-medium text-slate-300 max-w-2xl mx-auto mb-16">
                  Select a predictable engagement model that scales with your technical requirements.
               </p>

               <div className="bg-[#1E293B]/40 p-1.5 rounded-2xl inline-flex items-center border border-white/10 backdrop-blur-md">
                 <button
                   onClick={() => setBillingCycle('monthly')}
                   className={`px-10 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                     billingCycle === 'monthly' 
                     ? "bg-[#3A5CCC] text-white shadow-xl" 
                     : "text-slate-400 hover:text-white"
                   }`}
                 >
                   Monthly
                 </button>
                 <button
                   onClick={() => setBillingCycle('weekly')}
                   className={`px-10 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                     billingCycle === 'weekly' 
                     ? "bg-[#3A5CCC] text-white shadow-xl" 
                     : "text-slate-400 hover:text-white"
                   }`}
                 >
                   Weekly
                 </button>
               </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plans.map((plan, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -6 }} 
                  className={`relative overflow-hidden rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between shadow-2xl border transition-all duration-300 ${
                    plan.featured 
                    ? 'bg-gradient-to-b from-[#1E293B] to-[#131A2A] border-[#3A5CCC]/60 shadow-[0_25px_60px_rgba(58,92,204,0.15)]' 
                    : 'bg-[#1E293B]/50 border-white/10 hover:border-slate-500/50'
                  }`}
                >
                   <div className="absolute inset-0 opacity-[0.02] bg-[url('/noise.svg')]" />
                   <div className="relative z-10">
                      <div className="flex justify-between items-center mb-3">
                         <h3 className="text-xs font-black text-white uppercase tracking-wider">{plan.name}</h3>
                         {plan.featured && (
                            <span className="text-[8px] font-bold uppercase tracking-widest text-[#3A5CCC] bg-[#3A5CCC]/10 border border-[#3A5CCC]/25 px-2.5 py-1 rounded-full">
                               Recommended
                            </span>
                         )}
                      </div>
                      <div className="text-3xl font-black text-white mb-8">
                         {plan.price}
                         <span className="text-xs font-semibold text-slate-400 ml-2 uppercase tracking-widest">{plan.period}</span>
                      </div>
                      <ul className="space-y-4 mb-10">
                        {plan.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                             <CheckCircle2 className="w-3.5 h-3.5 text-[#3A5CCC]" /> {f}
                          </li>
                        ))}
                      </ul>
                   </div>
                   <Link to="/contact" className={`block w-full py-4 rounded-2xl text-center font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                     plan.featured 
                     ? 'bg-[#14B8A6] text-white shadow-lg shadow-teal-500/20 hover:bg-[#14B8A6]/90 hover:scale-[1.02]' 
                     : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-slate-500'
                   }`}>
                      {plan.featured ? 'Get Started' : 'Select Plan'}
                   </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Team Section - Premium Upgrade */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 relative overflow-hidden bg-[#0B0F19] border-t border-white/10">
            {/* Floating Background Blobs - Optimized */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 translate-x-1/4 w-[500px] h-[500px] bg-[#3A5CCC]/5 rounded-full blur-[60px] pointer-events-none" />

           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="bg-[#131A2A] rounded-[4rem] p-12 sm:p-24 relative overflow-hidden border border-white/10 shadow-2xl">
                 {/* Noise & Grid Overlay */}
                 <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.svg')] pointer-events-none" />
                 <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                 <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                       <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-10 backdrop-blur-md">
                          <div className="w-2 h-2 rounded-full bg-[#3A5CCC] animate-pulse" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Team as a Service</span>
                       </div>
                       
                       <h2 className="text-6xl sm:text-8xl font-black text-white tracking-tight leading-[1.05] mb-10">
                          Your Dedicated <br />
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#7DD3FC] to-[#3A5CCC] italic font-italic-serif font-normal">Tech Partner.</span>
                       </h2>
                       
                       <p className="text-xl font-bold text-slate-300 mb-12 leading-relaxed max-w-lg">
                          Skip the recruitment cycles. Get immediate access to a full stack of elite engineering and design talent for a flat monthly fee.
                       </p>

                       <div className="flex flex-col sm:flex-row items-center gap-6">
                          <Link to="/contact" className="w-full sm:w-auto bg-[#3A5CCC] text-white px-12 py-6 rounded-2xl text-xl font-black shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center gap-4 group">
                             Assemble My Team <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                          </Link>
                          <div className="flex -space-x-3">
                             {[1, 2, 3, 4].map((i) => (
                               <img key={i} src={`https://i.pravatar.cc/100?img=${i+40}`} alt="Expert" className="w-12 h-12 rounded-full border-4 border-[#0F172A] shadow-xl" />
                             ))}
                             <div className="w-12 h-12 rounded-full bg-white/5 border-4 border-[#0F172A] flex items-center justify-center text-[10px] font-black text-white/40">+50</div>
                          </div>
                       </div>
                    </motion.div>

                    <div className="space-y-4">
                       {[
                         { label: "UI/UX Design", icon: <Palette className="w-5 h-5" />, desc: "High-end product design" },
                         { label: "Frontend Dev", icon: <Code2 className="w-5 h-5" />, desc: "React, Next.js, Vue" },
                         { label: "Backend Dev", icon: <Terminal className="w-5 h-5" />, desc: "Node, PHP, Python, Go" },
                         { label: "Cloud & DevOps", icon: <Cloud className="w-5 h-5" />, desc: "AWS, Azure, Docker" },
                         { label: "QA & Testing", icon: <ShieldCheck className="w-5 h-5" />, desc: "Manual & Automated" }
                       ].map((item, i) => (
                         <motion.div 
                           key={i} 
                           initial={{ opacity: 0, x: 30 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: i * 0.1 }}
                           whileHover={{ scale: 1.02, x: 10 }}
                           className="flex items-center justify-between p-6 bg-[#1E293B]/60 rounded-[2rem] border border-white/10 group hover:bg-[#1E293B] hover:border-slate-500 transition-all cursor-default backdrop-blur-sm shadow-xl"
                         >
                            <div className="flex items-center gap-5">
                               <div className="w-12 h-12 rounded-2xl bg-[#3A5CCC]/10 flex items-center justify-center text-[#3A5CCC] group-hover:bg-[#3A5CCC] group-hover:text-white transition-all shadow-lg">
                                  {item.icon}
                               </div>
                               <div className="flex flex-col">
                                  <span className="text-white text-lg font-bold tracking-tight uppercase leading-none mb-1">{item.label}</span>
                                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.desc}</span>
                               </div>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-white group-hover:border-[#3A5CCC] group-hover:bg-[#3A5CCC] transition-all">
                               <CheckCircle className="w-4 h-4" />
                            </div>
                         </motion.div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </ScrollReveal>

      {/* FAQ Section - High-End Dark Redesign */}
      <section className="py-20 sm:py-24 bg-[#131A2A] relative overflow-hidden border-t border-white/10">
         {/* Background Decorative Elements */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3A5CCC]/5 rounded-full blur-[120px] pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

         <div className="mx-auto max-w-5xl px-4 relative z-10">
            <div className="flex flex-col items-center text-center mb-16">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
               >
                  <MessageSquare className="w-4 h-4 text-[#3A5CCC]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Help Center</span>
               </motion.div>
               <h2 className="text-6xl sm:text-8xl font-black tracking-tight text-white leading-[1.05] mb-8">
                  Frequently Asked <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#7DD3FC] to-[#3A5CCC] italic font-italic-serif font-normal">Questions.</span>
               </h2>
               <p className="text-xl font-bold text-slate-300 max-w-2xl leading-relaxed">
                  Everything you need to know about our partnership process and technical capabilities.
               </p>
            </div>

            <div className="grid gap-6">
               {[
                 { q: "How is NRT different from hiring a freelancer?", a: "Unlike freelancers, our team works full-time, under one roof, with backup developers if needed. You get agency-level stability with freelancer-level speed." },
                 { q: "What if I'm not satisfied with the work?", a: "We offer a small paid test task before any long-term commitment. This ensures you only invest in a full plan once you've seen our world-class quality." },
                 { q: "Do you work with Pakistani businesses?", a: "Yes! We serve both local Pakistani market leaders and global clients with the same level of technical excellence and dedication." },
                 { q: "How do I contact you for a custom project?", a: "You can reach us directly via WhatsApp at 0344-2013217 or email us at nextrevolutiontech@gmail.com for a free consultation." }
               ].map((faq, i) => (
                 <FAQItem key={i} faq={faq} index={i} />
               ))}
            </div>
         </div>
      </section>

      {/* Founder Section */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 relative overflow-hidden bg-[#0B0F19] border-t border-white/10">
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#3A5CCC]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-[#131A2A] rounded-[4rem] border border-white/10 shadow-2xl p-12 sm:p-24 overflow-hidden relative">
              <div className="absolute inset-0 opacity-[0.02] bg-[url('/noise.svg')] pointer-events-none" />
              <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-[#3A5CCC] shadow-2xl mb-8 bg-[#1E293B]">
                    <img 
                      src={FOUNDER.imageUrl} 
                      alt={FOUNDER.name} 
                      className="w-full h-full object-cover object-center" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B11]/50 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2">{FOUNDER.name}</h3>
                  <p className="text-nrt-label text-[#3A5CCC] mb-4">{FOUNDER.title}</p>
                  <a 
                    href={FOUNDER.linkedInUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-nrt-label text-white bg-white/5 border border-white/10 hover:bg-[#3A5CCC] hover:border-transparent px-6 py-3 rounded-xl transition-all"
                  >
                    Connect on LinkedIn <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="space-y-8">
                  <div className="text-nrt-eyebrow text-teal-300">Founder&apos;s Note</div>
                  <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                    &ldquo;I built NRT to end the cycle of vanishing freelancers.&rdquo;
                  </h2>
                  <p className="text-lg text-nrt-body text-slate-200 leading-relaxed">
                    Having worked as an engineer for years, I saw first-hand how businesses get stuck. Freelancers disappear, and traditional agencies charge enterprise prices for junior work.
                  </p>
                  <p className="text-lg text-nrt-body text-slate-200 leading-relaxed">
                    At Next Revolution Tech, we act as your dedicated engineering partner. We take ownership of your custom SaaS, ERP integrations, and AI workflow automations, providing 24/7 reliability and clear communication. No excuses, just clean code that grows your business.
                  </p>
                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                    <div>
                      <div className="text-3xl font-black text-[#3A5CCC]">Daily</div>
                      <div className="text-nrt-label text-slate-300">LinkedIn Insights</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-[#3A5CCC]">100%</div>
                      <div className="text-nrt-label text-slate-300">Ownership & Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Inline Lead Magnet Section */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 bg-[#131A2A] relative overflow-hidden border-t border-white/10">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-b from-[#1E293B]/80 to-[#131A2A] rounded-[4rem] p-12 sm:p-24 border border-white/10 shadow-2xl relative">
              <div className="absolute inset-0 opacity-[0.02] bg-[url('/noise.svg')] pointer-events-none" />
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                     <Sparkles className="w-4 h-4 text-[#14B8A6]" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Free Consultation</span>
                  </div>
                  <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-8">
                    Get a Free <br />
                    <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#7DD3FC]">ERP & Software Audit</span>
                  </h2>
                  <p className="text-lg font-semibold text-slate-300 leading-relaxed mb-6">
                    Stop guessing. Let our technical team audit your current inventory Excel sheets, custom POS, or business processes and build a concrete automation plan.
                  </p>
                  <ul className="space-y-4 text-slate-300">
                    <li className="flex items-center gap-3 text-sm font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" /> Identification of system bottlenecks & data leaks
                    </li>
                    <li className="flex items-center gap-3 text-sm font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" /> Actionable migration blueprint from manual to custom ERP
                    </li>
                    <li className="flex items-center gap-3 text-sm font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" /> 30-minute architect consultation (worth $250)
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0B0F19]/80 border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-6 text-left">Claim Your Free Audit</h3>
                  <form onSubmit={handleLeadSubmit} className="space-y-6 text-left">
                    <div className="space-y-2">
                      <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Jane Doe"
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        className="w-full bg-slate-900/80 border border-white/15 rounded-2xl px-6 py-4 text-sm font-bold text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#3A5CCC] transition-all"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Work Email</label>
                        <input 
                          type="email" 
                          required 
                          placeholder="jane@company.com"
                          value={leadForm.email}
                          onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                          className="w-full bg-slate-900/80 border border-white/15 rounded-2xl px-6 py-4 text-sm font-bold text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#3A5CCC] transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">WhatsApp Number</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. 03442013217"
                          value={leadForm.whatsapp}
                          onChange={(e) => setLeadForm({ ...leadForm, whatsapp: e.target.value })}
                          className="w-full bg-slate-900/80 border border-white/15 rounded-2xl px-6 py-4 text-sm font-bold text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#3A5CCC] transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Company Name</label>
                      <input 
                        type="text" 
                        placeholder="Acme Corp"
                        value={leadForm.company}
                        onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
                        className="w-full bg-slate-900/80 border border-white/15 rounded-2xl px-6 py-4 text-sm font-bold text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#3A5CCC] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">What is your biggest manual/tech bottleneck?</label>
                      <textarea 
                        rows={3}
                        placeholder="e.g., Managing inventory via Excel is causing double entry errors..."
                        value={leadForm.message}
                        onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                        className="w-full bg-slate-900/80 border border-white/15 rounded-2xl px-6 py-4 text-sm font-bold text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#3A5CCC] transition-all resize-none"
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={leadStatus === 'loading'}
                      className="w-full bg-[#14B8A6] text-white py-5 rounded-2xl text-md font-black shadow-lg shadow-teal-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer"
                    >
                      {leadStatus === 'loading' ? 'Submitting Request...' : 'Get Free Session Now'}
                      <ArrowRight className="w-4 h-4 animate-none" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Lead Magnet Modal / Dialog */}
      <Dialog open={isAuditModalOpen} onOpenChange={setIsAuditModalOpen}>
        <DialogContent className="bg-[#131A2A] border-white/15 text-white max-w-lg p-8 sm:p-10 rounded-3xl shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black uppercase tracking-tight text-white text-left">Free ERP Planning Session</DialogTitle>
            <DialogDescription className="text-slate-400 text-sm font-semibold text-left">
              Fill out the details below to claim your 30-minute system architecture audit with Ahsan Khan.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleLeadSubmit} className="space-y-6 mt-6 text-left">
            <div className="space-y-1">
              <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Full Name</label>
              <input 
                type="text" 
                required 
                placeholder="Jane Doe"
                value={leadForm.name}
                onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                className="w-full bg-slate-900/80 border border-white/15 rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#3A5CCC] transition-all"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Work Email</label>
                <input 
                  type="email" 
                  required 
                  placeholder="jane@company.com"
                  value={leadForm.email}
                  onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                  className="w-full bg-slate-900/80 border border-white/15 rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#3A5CCC] transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">WhatsApp</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. 03442013217"
                  value={leadForm.whatsapp}
                  onChange={(e) => setLeadForm({ ...leadForm, whatsapp: e.target.value })}
                  className="w-full bg-slate-900/80 border border-white/15 rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#3A5CCC] transition-all"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Company Name</label>
              <input 
                type="text" 
                placeholder="Acme Corp"
                value={leadForm.company}
                onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
                className="w-full bg-slate-900/80 border border-white/15 rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#3A5CCC] transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Primary Bottleneck / Message</label>
              <textarea 
                rows={3}
                placeholder="Briefly describe your process bottleneck..."
                value={leadForm.message}
                onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                className="w-full bg-slate-900/80 border border-white/15 rounded-2xl px-5 py-3.5 text-sm font-bold text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#3A5CCC] transition-all resize-none"
              />
            </div>
            <button 
              type="submit" 
              disabled={leadStatus === 'loading'}
              className="w-full bg-[#3A5CCC] text-white py-4 rounded-2xl text-sm font-black shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {leadStatus === 'loading' ? 'Submitting Request...' : 'Book Free Audit Now'}
              <ArrowRight className="w-4 h-4 animate-none" />
            </button>
          </form>
        </DialogContent>
      </Dialog>

      <PreFooterCTA onBookSession={() => setIsAuditModalOpen(true)} />
    </div>
  );
}

function FAQItem({ faq, index }: { faq: any, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={false}
      className={`rounded-[2.5rem] border transition-all duration-700 overflow-hidden ${
        isOpen 
        ? 'bg-[#1E293B] border-white/15 shadow-2xl shadow-[#3A5CCC]/5' 
        : 'bg-[#1E293B]/50 border-white/10 hover:bg-[#1E293B]/70 hover:border-slate-500/50'
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 sm:p-12 flex items-start justify-between text-left group"
      >
        <div className="flex gap-8 sm:gap-12">
           <div className="relative">
              <span className={`text-4xl sm:text-5xl font-bold tracking-tighter transition-all duration-700 ${isOpen ? 'text-[#3A5CCC]' : 'text-slate-700/60'}`}>
                 {(index + 1).toString().padStart(2, '0')}
              </span>
              {isOpen && (
                <motion.div 
                  layoutId="glow"
                  className="absolute inset-0 bg-[#3A5CCC] blur-2xl opacity-20"
                />
              )}
           </div>
           <h3 className={`text-xl sm:text-3xl font-bold tracking-tight uppercase leading-tight mt-2 sm:mt-3 transition-colors duration-700 ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
              {faq.q}
           </h3>
        </div>
        <div className={`mt-3 sm:mt-4 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-700 ${isOpen ? 'bg-[#3A5CCC] border-transparent rotate-180 shadow-lg shadow-[#3A5CCC]/20' : 'bg-[#1E293B]/50 border border-white/10 group-hover:border-slate-500'}`}>
           {isOpen ? <Minus className="w-6 h-6 text-white" /> : <Plus className="w-6 h-6 text-slate-400" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-8 sm:px-12 pb-12 ml-20 sm:ml-32">
               <p className="text-xl font-bold text-slate-300 leading-relaxed max-w-3xl border-l-4 border-[#3A5CCC] pl-8">
                  {faq.a}
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}