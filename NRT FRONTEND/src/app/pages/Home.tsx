import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SEO } from "../components/SEO";
import { Testimonials } from "../components/Testimonials";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
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

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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
      <section ref={heroRef} className="relative pt-32 sm:pt-40 pb-48 px-4 sm:px-6 lg:px-12 xl:px-24 overflow-hidden bg-[#0F172A]">
        <InteractiveHero3D />
        
        {/* Ambient Overlay - Neutralized */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-8">
               <h1 ref={headlineRef} className="text-4xl sm:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight mb-8 sm:mb-12 text-white">
                 One Team. <br className="hidden sm:block" />
                 <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3A5CCC] to-[#4F7FFF]">Every Solution</span>.
               </h1>
              <p ref={subtextRef} className="text-lg sm:text-xl xl:text-2xl text-white/50 font-medium mb-10 sm:mb-12 max-w-[650px] leading-snug">
                We provide dedicated developers and complete digital solutions so businesses can scale without repeatedly hiring freelancers for every new project.
              </p>
               <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16">
                 <Magnetic>
                   <Link to={ctaLinks.test} className="btn-primary-nrt px-10 py-5 text-lg">
                     Start a Test Task
                     <ArrowRight className="w-5 h-5 ml-3" />
                   </Link>
                 </Magnetic>
                 <Magnetic>
                   <Link to="/process" className="btn-secondary-nrt px-10 py-5 text-lg">
                     View our Workflow
                     <Play className="w-4 h-4 ml-3 fill-current" />
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
                     <div className="text-base sm:text-lg font-semibold text-white/40 italic">"The most reliable technical partner we've integrated."</div>
                     <div className="flex items-center gap-2 text-white/30 uppercase tracking-[0.2em] font-bold text-[9px]">
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
              <div className="relative rounded-3xl border border-white/10 bg-[#161F33]/60 backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden group">
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
                    94.8% <span className="text-xs font-semibold text-emerald-400">Optimal</span>
                  </div>
                </div>

                {/* Pipeline List */}
                <div className="space-y-4 mb-8">
                  <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">Current Queue</div>
                  {[
                    { name: "Deploy Vercel Edge Cache", status: "Active", val: 88, color: "bg-[#3A5CCC]" },
                    { name: "Optimize PostgreSQL queries", status: "Review", val: 100, color: "bg-emerald-500" },
                    { name: "Integrate Stripe billing flow", status: "Testing", val: 65, color: "bg-purple-500" }
                  ].map((task, i) => (
                    <div key={i} className="bg-white/[0.01] border border-white/5 rounded-2xl p-4 space-y-3">
                      <div className="flex justify-between items-center text-xs font-semibold text-white/80">
                        <span>{task.name}</span>
                        <span className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          task.status === "Active" ? "bg-[#3A5CCC]/10 text-[#3A5CCC] border border-[#3A5CCC]/20" :
                          task.status === "Review" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                          "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                        }`}>{task.status}</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }} 
                          animate={{ width: `${task.val}%` }} 
                          transition={{ duration: 1.2, delay: 0.2 + i * 0.1 }}
                          className={`h-full ${task.color}`} 
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
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
        <section className="py-16 bg-[#0B0F19]/50 border-y border-white/5">
           <div className="mx-auto max-w-7xl px-4 flex flex-wrap justify-center gap-12 sm:gap-24">
              {[
                { val: "5.0/5", label: "Rating" },
                { val: "15+", label: "Countries" },
                { val: "100%", label: "Success" },
                { val: "50+", label: "Experts" },
                { val: "🇵🇰", label: "Karachi Based" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                   <div className="text-3xl sm:text-4xl font-black tracking-tighter text-white mb-2">{stat.val}</div>
                   <div className="text-[9px] font-black uppercase tracking-widest text-white/40">{stat.label}</div>
                </div>
              ))}
           </div>
        </section>
      </ScrollReveal>

      {/* Logo Marquee - Compact & Spaced */}
      <ScrollReveal>
        <section className="py-10 overflow-hidden bg-[#0F172A] relative border-b border-white/5">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
          <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20 text-center mb-8 relative z-10">
             Trusted by businesses built on
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
                  <img src={brand.logo} alt={brand.name} className="h-5 sm:h-6 w-auto brightness-0 invert opacity-20 group-hover:opacity-60 transition-all duration-500" />
                  <span className="text-sm font-black tracking-tighter text-white/5 group-hover:text-white/40 transition-colors uppercase">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section className="py-32 relative overflow-hidden bg-[#080B11]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3A5CCC]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
          
          <div className="mx-auto max-w-7xl xl:max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="mb-20">
               <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#3A5CCC] mb-6">Expertise</div>
               <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight mb-8">
                 Engineered for <br /><span className="text-[#3A5CCC] italic font-italic-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3A5CCC] to-[#4F7FFF]">Scale</span>.
               </h2>
               <p className="text-lg sm:text-xl font-bold text-white/50 max-w-2xl leading-relaxed">
                 From core infrastructure to complex product engineering, we provide the technical depth required for modern business.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1: Digital Commerce - Large Bento Span */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#161F33] p-8 sm:p-10 border border-white/5 shadow-2xl flex flex-col justify-between group col-span-1 md:col-span-2 lg:col-span-2 min-h-[400px] hover:-translate-y-1.5 transition-all duration-500">
                 <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
                 
                 {/* Coded Visual Mockup */}
                 <div className="flex flex-col sm:flex-row gap-6 items-center w-full max-w-[550px] mx-auto opacity-90 mb-8 sm:mb-0">
                    {/* Invoice Panel */}
                    <div className="w-full sm:w-1/2 bg-white/5 border border-white/10 rounded-2xl p-5 font-mono text-[10px] space-y-4">
                       <div className="flex justify-between border-b border-white/10 pb-3">
                          <span className="text-white/40">Invoice #NRT-8842</span>
                          <span className="text-emerald-400 font-bold">PAID</span>
                       </div>
                       <div className="space-y-2">
                          <div className="flex justify-between">
                             <span className="text-white/80">Premium Development</span>
                             <span className="text-white">$1,500.00</span>
                          </div>
                          <div className="flex justify-between text-white/50 text-[9px]">
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
                    <div className="w-full sm:w-1/2 bg-gradient-to-tr from-[#3A5CCC] to-[#1d2d63] border border-white/10 rounded-2xl p-5 flex flex-col justify-between aspect-[1.58/1] shadow-2xl text-white">
                       <div className="flex justify-between items-start">
                          <ShoppingCart className="w-6 h-6 opacity-80" />
                          <span className="text-[8px] font-black tracking-widest uppercase opacity-60">Corporate</span>
                       </div>
                       <div className="space-y-2">
                          <div className="text-sm font-bold tracking-widest">•••• •••• •••• 8842</div>
                          <div className="flex justify-between text-[8px] uppercase tracking-widest opacity-60">
                             <span>Next Rev Tech</span>
                             <span>08/29</span>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="relative z-10 text-white mt-6">
                    <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase leading-none">Digital Commerce</h3>
                    <p className="text-sm font-medium opacity-50 leading-relaxed max-w-xl">Scaling performance, real-time sync, and transaction security for high-volume enterprise platforms.</p>
                 </div>
              </div>
  
              {/* Card 2: Integrations - Small Bento Span */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0F172A] p-8 border border-white/5 shadow-2xl flex flex-col justify-between group col-span-1 min-h-[400px] hover:-translate-y-1.5 transition-all duration-500">
                 <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
                 
                 {/* Coded Syntax Editor & Webhook Console */}
                 <div className="flex flex-col gap-3">
                    {/* IDE Editor Mockup */}
                    <div className="bg-[#0B0F19] border border-white/10 rounded-2xl shadow-2xl font-mono text-[10px] leading-relaxed select-none overflow-hidden">
                       {/* Tab Bar */}
                       <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.02] border-b border-white/5">
                          <div className="flex items-center gap-1.5">
                             <div className="w-2 h-2 rounded-full bg-red-500/50" />
                             <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                             <div className="w-2 h-2 rounded-full bg-green-500/50" />
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.04] rounded-lg border border-white/5 text-[9px] font-semibold text-white/70">
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
                    <div className="bg-[#0B0F19]/90 border border-white/5 rounded-xl p-3 sm:p-4 font-mono text-[9px] flex items-center justify-between shadow-lg">
                       <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-black">200 OK</span>
                          <span className="text-white/60">POST /api/webhooks</span>
                       </div>
                       <span className="text-white/30 font-semibold">12ms</span>
                    </div>
                 </div>

                 <div className="relative z-10 text-white mt-6">
                    <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase leading-none">Integrations</h3>
                    <p className="text-sm font-medium opacity-50 leading-relaxed">Complex ecosystem connectivity and custom middleware APIs engineered for zero failure rates.</p>
                 </div>
              </div>
    
              {/* Card 3: AI & Automation - Small Bento Span */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0F172A] p-8 border border-white/5 shadow-2xl flex flex-col justify-between group col-span-1 min-h-[400px] hover:-translate-y-1.5 transition-all duration-500">
                 <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
                 
                 {/* Visual Node Agent Canvas */}
                 <div className="bg-[#0B0F19] border border-white/10 rounded-2xl p-5 shadow-2xl relative min-h-[160px] overflow-hidden flex flex-col justify-between">
                    <div className="absolute inset-0 opacity-[0.02] bg-[url('/noise.svg')]" />
                    
                    <div className="relative z-10 flex flex-col gap-3">
                       {/* Node 1: Input */}
                       <div className="flex items-center justify-between bg-white/[0.02] border border-white/5 rounded-xl p-3">
                          <div className="flex items-center gap-2 text-[9px] font-bold text-white/80">
                             <span className="w-1.5 h-1.5 rounded-full bg-[#3A5CCC]" />
                             User Request Node
                          </div>
                          <span className="text-[8px] text-white/30 font-mono">active</span>
                       </div>

                       {/* Connection Line */}
                       <div className="h-4 flex justify-center items-center">
                          <div className="w-0.5 h-full bg-gradient-to-b from-[#3A5CCC] to-purple-500" />
                       </div>

                       {/* Node 2: Agent LLM */}
                       <div className="flex items-center justify-between bg-[#3A5CCC]/10 border border-[#3A5CCC]/20 rounded-xl p-3">
                          <div className="flex items-center gap-2 text-[9px] font-bold text-white">
                             <Bot className="w-3.5 h-3.5 text-[#3A5CCC]" />
                             Agentic LLM router
                          </div>
                          <span className="text-[8px] text-emerald-400 font-bold uppercase tracking-wider">processing</span>
                       </div>
                    </div>
                 </div>

                 <div className="relative z-10 text-white mt-6">
                    <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase leading-none">AI & Automation</h3>
                    <p className="text-sm font-medium opacity-50 leading-relaxed">Building production-grade autonomous agent flows and custom LLM interfaces.</p>
                 </div>
              </div>
 
              {/* Card 4: Mobile Apps - Small Bento Span */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#161F33] p-8 border border-white/5 shadow-2xl flex flex-col justify-between group col-span-1 min-h-[400px] hover:-translate-y-1.5 transition-all duration-500">
                 <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
                 
                 {/* Coded Phone Mockup */}
                 <div className="mx-auto w-40 aspect-[9/16] bg-[#0B0F19] border border-white/15 rounded-[1.8rem] p-3 flex flex-col justify-between shadow-2xl relative">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-20 flex items-center justify-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
                    </div>
                    <div className="flex justify-between items-center text-[6px] text-white/40 font-mono pt-2 pb-1.5 border-b border-white/5">
                       <span>09:41</span>
                       <div className="flex items-center gap-1">
                          <span className="w-1 h-1 bg-white/40 rounded-full" />
                          <span className="w-1 h-1 bg-white/40 rounded-full" />
                          <span className="w-1.5 h-1 bg-white/40 rounded-sm" />
                       </div>
                    </div>
                    <div className="space-y-2 py-2 flex-1 flex flex-col justify-center">
                       <div className="bg-[#3A5CCC]/10 border border-[#3A5CCC]/25 rounded-xl p-2.5 space-y-1">
                          <div className="text-[5px] text-white/50 uppercase font-black tracking-wider">Project Phase</div>
                          <div className="text-xs font-black text-white flex items-center justify-between">
                             <span>Build v1.2</span>
                             <span className="text-[#3A5CCC] text-[6px] bg-[#3A5CCC]/10 px-1 py-0.5 rounded font-mono font-bold">94%</span>
                          </div>
                       </div>
                       {/* SVG Mini Chart Mockup */}
                       <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2 h-12 flex flex-col justify-between">
                          <div className="text-[5.5px] text-white/30 uppercase font-black tracking-widest">Velocity</div>
                          <svg viewBox="0 0 100 30" className="w-full h-8 overflow-visible">
                             <path d="M0,25 Q15,5 30,15 T60,5 T90,20" fill="none" stroke="#3A5CCC" strokeWidth="1.5" />
                             <circle cx="90" cy="20" r="2" fill="#3A5CCC" />
                          </svg>
                       </div>
                    </div>
                    <div className="h-1 w-12 bg-white/20 rounded-full mx-auto mt-1" />
                 </div>

                 <div className="relative z-10 text-white mt-6">
                    <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase leading-none">Mobile Apps</h3>
                    <p className="text-sm font-medium opacity-50 leading-relaxed">High-fidelity React Native and Flutter builds optimized for app store compliance.</p>
                 </div>
              </div>
 
              {/* Card 5: Cloud & DevOps - Small Bento Span */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#161F33] p-8 sm:p-10 border border-white/5 shadow-2xl flex flex-col justify-between group col-span-1 min-h-[400px] hover:-translate-y-1.5 transition-all duration-500">
                 <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
                 
                 {/* Visual Cluster Panel */}
                 <div className="flex flex-col gap-3.5 w-full max-w-[500px] mx-auto font-mono text-[9px] select-none text-white/40 mb-8 sm:mb-0">
                    {[
                      { node: "neon-db-prod-cluster", lat: "9ms", status: "Active", col: "text-emerald-400 border-emerald-500/20" },
                      { node: "vercel-edge-middleware", lat: "4ms", status: "Active", col: "text-emerald-400 border-emerald-500/20" },
                      { node: "aws-s3-static-bucket", lat: "15ms", status: "Syncing", col: "text-amber-400 border-amber-500/20" }
                    ].map((srv, i) => (
                      <div key={i} className="flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center bg-white/[0.01] border border-white/5 rounded-2xl p-4">
                         <div className="flex items-center gap-2.5">
                            <span className={`w-1.5 h-1.5 rounded-full ${srv.status === "Active" ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
                            <span className="text-white/80 font-bold">{srv.node}</span>
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
                    <p className="text-sm font-medium opacity-50 leading-relaxed max-w-xl">Infrastructure as code, automated pipelines (CI/CD), security firewalls, and reliable edge scaling.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Testimonials limit={6} theme="dark" />

      {/* Simple Process - Redesigned Premium Layout */}
      <ScrollReveal direction="down">
        <section className="py-32 bg-[#0B0F19] border-t border-white/5">
          <div className="mx-auto max-w-7xl xl:max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="mb-20 text-center sm:text-left">
               <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#3A5CCC] mb-4">How it works</div>
               <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1] sm:leading-[0.95]">Simple Process. <br /><span className="text-[#3A5CCC] italic font-italic-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3A5CCC] to-[#4F7FFF]">Reliable</span> Results.</h2>
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
                <div key={i} className="bg-white/[0.02] p-10 rounded-[2.5rem] border border-white/5 shadow-2xl flex flex-col justify-between min-h-[260px] hover:border-[#3A5CCC]/40 hover:bg-white/[0.04] transition-all duration-300">
                   <div className="text-5xl font-black text-[#3A5CCC]/20 font-mono mb-6">{item.step}</div>
                   <div>
                      <h3 className="text-xl font-bold tracking-tight text-white mb-3 uppercase">{item.name}</h3>
                      <p className="text-sm font-medium text-white/50 leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Pricing Section - Restored Dark */}
      <ScrollReveal>
        <section className="py-32 bg-[#0F172A] border-y border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
               <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A5CCC] mb-6">Service Models</div>
               <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-8">Engineering for <br /><span className="text-[#3A5CCC] italic font-italic-serif font-normal">Every Stage</span>.</h2>
               <p className="text-xl font-medium text-white/30 max-w-2xl mx-auto mb-16">
                  Select a predictable engagement model that scales with your technical requirements.
               </p>

               <div className="bg-white/[0.03] p-1.5 rounded-2xl inline-flex items-center border border-white/10 backdrop-blur-md">
                 <button
                   onClick={() => setBillingCycle('monthly')}
                   className={`px-10 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                     billingCycle === 'monthly' 
                     ? "bg-[#3A5CCC] text-white shadow-xl" 
                     : "text-white/40 hover:text-white"
                   }`}
                 >
                   Monthly
                 </button>
                 <button
                   onClick={() => setBillingCycle('weekly')}
                   className={`px-10 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                     billingCycle === 'weekly' 
                     ? "bg-[#3A5CCC] text-white shadow-xl" 
                     : "text-white/40 hover:text-white"
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
                    ? 'bg-white/[0.05] border-[#3A5CCC]/40' 
                    : 'bg-white/[0.02] border-white/5'
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
                         <span className="text-xs font-semibold text-white/30 ml-2 uppercase tracking-widest">{plan.period}</span>
                      </div>
                      <ul className="space-y-4 mb-10">
                        {plan.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-3 text-sm font-semibold text-white/50">
                             <CheckCircle2 className="w-3.5 h-3.5 text-[#3A5CCC]" /> {f}
                          </li>
                        ))}
                      </ul>
                   </div>
                   <Link to="/contact" className={`block w-full py-4 rounded-2xl text-center font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                     plan.featured 
                     ? 'bg-[#3A5CCC] text-white shadow-lg shadow-[#3A5CCC]/10 hover:bg-[#3A5CCC]/90' 
                     : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
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
        <section className="py-32 relative overflow-hidden">
            {/* Floating Background Blobs - Optimized */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 translate-x-1/4 w-[500px] h-[500px] bg-[#3A5CCC]/5 rounded-full blur-[60px] pointer-events-none" />

           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="bg-[#0F172A] rounded-[4rem] p-12 sm:p-24 relative overflow-hidden border border-white/5 shadow-2xl">
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
                       
                       <h2 className="text-5xl sm:text-7xl font-bold text-white tracking-tight leading-[0.9] mb-10">
                          Your Dedicated <br />
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A5CCC] to-[#27324A]">Tech Partner.</span>
                       </h2>
                       
                       <p className="text-xl font-bold text-white/40 mb-12 leading-relaxed max-w-lg">
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
                           className="flex items-center justify-between p-6 bg-white/5 rounded-[2rem] border border-white/10 group hover:bg-white/10 hover:border-white/20 transition-all cursor-default backdrop-blur-sm"
                         >
                            <div className="flex items-center gap-5">
                               <div className="w-12 h-12 rounded-2xl bg-[#3A5CCC]/10 flex items-center justify-center text-[#3A5CCC] group-hover:bg-[#3A5CCC] group-hover:text-white transition-all shadow-lg">
                                  {item.icon}
                               </div>
                               <div className="flex flex-col">
                                  <span className="text-white text-lg font-bold tracking-tight uppercase leading-none mb-1">{item.label}</span>
                                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{item.desc}</span>
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
      <section className="py-32 bg-[#0F172A] relative overflow-hidden border-t border-white/5">
         {/* Background Decorative Elements */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3A5CCC]/5 rounded-full blur-[120px] pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

         <div className="mx-auto max-w-5xl px-4 relative z-10">
            <div className="flex flex-col items-center text-center mb-24">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
               >
                  <MessageSquare className="w-4 h-4 text-[#3A5CCC]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Help Center</span>
               </motion.div>
               <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-8">
                  Frequently Asked <br />
                  <span className="text-[#3A5CCC] italic font-italic-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3A5CCC] to-[#4F7FFF]">Questions.</span>
               </h2>
               <p className="text-xl font-bold text-white/30 max-w-2xl leading-relaxed">
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

      <PreFooterCTA />
    </div>
  );
}

function FAQItem({ faq, index }: { faq: any, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={false}
      className={`rounded-[2.5rem] border transition-all duration-700 overflow-hidden ${isOpen ? 'bg-gradient-to-br from-white/10 to-transparent border-white/20 shadow-2xl shadow-[#3A5CCC]/5' : 'bg-white/5 border-white/5 hover:bg-white/[0.07] hover:border-white/10'}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 sm:p-12 flex items-start justify-between text-left group"
      >
        <div className="flex gap-8 sm:gap-12">
           <div className="relative">
              <span className={`text-4xl sm:text-5xl font-bold tracking-tighter transition-all duration-700 ${isOpen ? 'text-[#3A5CCC]' : 'text-white/5'}`}>
                 {(index + 1).toString().padStart(2, '0')}
              </span>
              {isOpen && (
                <motion.div 
                  layoutId="glow"
                  className="absolute inset-0 bg-[#3A5CCC] blur-2xl opacity-20"
                />
              )}
           </div>
           <h3 className={`text-xl sm:text-3xl font-bold tracking-tight uppercase leading-tight mt-2 sm:mt-3 transition-colors duration-700 ${isOpen ? 'text-white' : 'text-white/60'}`}>
              {faq.q}
           </h3>
        </div>
        <div className={`mt-3 sm:mt-4 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-700 ${isOpen ? 'bg-[#3A5CCC] border-transparent rotate-180 shadow-lg shadow-[#3A5CCC]/20' : 'bg-white/5 border-white/10 group-hover:border-white/20'}`}>
           {isOpen ? <Minus className="w-6 h-6 text-white" /> : <Plus className="w-6 h-6 text-white/40" />}
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
               <p className="text-xl font-bold text-white/40 leading-relaxed max-w-3xl border-l-4 border-[#3A5CCC] pl-8">
                  {faq.a}
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}