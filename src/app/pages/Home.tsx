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
      color: "bg-[#F58220]"
    },
    {
      title: "IraqBid: Auction App",
      category: "Mobile / Real-time",
      impact: "Zero-latency bidding",
      image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1777422323/nrt-portfolio/ynlxrffuhffwgf0zl60v.png",
      color: "bg-[#0B1B35]"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] overflow-x-hidden text-[#0B1B35]">
      <SEO 
        title="Your Dedicated Tech Partner"
        description="Stop hiring developers for everything. Get a full dedicated team for a flat monthly fee. Specialized in eCommerce, APIs, and AI automation."
      />

      {/* Hero Section - Restored Dark */}
      <section ref={heroRef} className="relative pt-32 sm:pt-40 pb-48 px-4 sm:px-6 lg:px-12 xl:px-24 overflow-hidden bg-[#060E1B]">
        <InteractiveHero3D />
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F58220]/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-8">
               <h1 ref={headlineRef} className="text-4xl sm:text-6xl xl:text-7xl font-black leading-[0.85] tracking-tighter mb-8 sm:mb-12 text-white">
                 Stop Hiring <br className="hidden sm:block" />
                 Developers for <br className="hidden sm:block" />
                 <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] to-[#FF4D00]">everything</span>.
               </h1>
              <p ref={subtextRef} className="text-lg sm:text-xl xl:text-2xl text-white/60 font-bold mb-10 sm:mb-12 max-w-[500px] leading-tight">
                Unlock an elite engineering squad for a predictable flat fee. We handle the code, you handle the growth.
              </p>
               <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16">
                <Magnetic>
                  <Link to={ctaLinks.test} className="bg-[#F58220] text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center sm:justify-start gap-4 group">
                    Try a Test Task
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                       <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link to="/process" className="bg-white/5 border border-white/10 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-black hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center sm:justify-start gap-4">
                    See Workflow
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  </Link>
                </Magnetic>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 border-t border-white/5 pt-10 sm:pt-12">
                 <div className="flex -space-x-3 sm:-space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <img 
                        key={i} 
                        src={`https://i.pravatar.cc/100?img=${i+20}`} 
                        alt="User" 
                        className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-4 border-[#060E1B] shadow-xl" 
                      />
                    ))}
                 </div>
                 <div className="space-y-1">
                    <div className="text-base sm:text-lg font-bold text-white/40 italic">"The most reliable team we've ever worked with."</div>
                    <div className="flex items-center gap-2 text-white/30 uppercase tracking-widest font-black text-[10px]">
                       <span className="text-[#F58220]">🇵🇰 Karachi Based</span>
                       <span>|</span>
                       <span>Serving Worldwide</span>
                    </div>
                 </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="lg:col-span-4 relative"
            >
              <div className="relative z-10 rounded-3xl sm:rounded-[4rem] overflow-hidden shadow-2xl border border-white/5 bg-[#0B1B35]/50 backdrop-blur-3xl p-8 sm:p-12">
                 <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#F58220] flex items-center justify-center text-white mb-8 shadow-xl shadow-[#F58220]/20">
                    <ZapIcon className="w-6 h-6 sm:w-8 sm:h-8 fill-current" />
                 </div>
                 <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tighter leading-[0.9] mb-6">NRT <br />Dedicated <br />Partner.</h2>
                 <p className="text-lg font-bold text-white/50 leading-relaxed mb-10">
                    Your mission-critical tech handled by experts 24/7.
                 </p>
                 <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
                    <div className="flex items-center justify-between mb-4">
                       <div className="text-[10px] font-black uppercase tracking-widest text-[#F58220]">Active Tasks</div>
                       <div className="text-white text-xl font-black">04</div>
                    </div>
                    <div className="space-y-2">
                       <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: "70%" }} className="h-full bg-[#F58220]" />
                       </div>
                       <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: "40%" }} className="h-full bg-blue-500" />
                       </div>
                    </div>
                 </div>
                 <Link to="/estimator" className="block w-full bg-white text-[#0B1B35] text-center py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl">
                    Check Project Pricing
                 </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <ScrollReveal>
        <section className="py-20 bg-white border-y border-[#0B1B35]/5">
           <div className="mx-auto max-w-7xl px-4 flex flex-wrap justify-center gap-12 sm:gap-24">
              {[
                { val: "5.0/5", label: "Rating" },
                { val: "15+", label: "Countries" },
                { val: "100%", label: "Success" },
                { val: "50+", label: "Experts" },
                { val: "🇵🇰", label: "Karachi Based" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                   <div className="text-4xl sm:text-5xl font-black tracking-tighter text-[#F58220] mb-2">{stat.val}</div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-[#0B1B35]/40">{stat.label}</div>
                </div>
              ))}
           </div>
        </section>
      </ScrollReveal>

      {/* Logo Marquee - Now Dark for Impact */}
      <ScrollReveal>
        <section className="py-24 overflow-hidden bg-[#0B1B35] relative">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 text-center mb-16 relative z-10">
             Trusted by businesses built on
          </div>
          <div className="relative flex overflow-x-hidden z-10">
            <div className="flex animate-infinite-scroll whitespace-nowrap items-center gap-16 px-8">
              {[
                { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
                { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" },
                { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg" },
                { name: "PayPal", logo: "https://cdn.worldvectorlogo.com/logos/paypal-3.svg" },
                { name: "WooCommerce", logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg" },
                { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
                { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" },
                { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg" },
                { name: "PayPal", logo: "https://cdn.worldvectorlogo.com/logos/paypal-3.svg" },
                { name: "WooCommerce", logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg" }
              ].map((brand, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <img src={brand.logo} alt={brand.name} className="h-8 sm:h-12 w-auto brightness-0 invert opacity-40 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-all duration-500" />
                  <span className="text-2xl font-black tracking-tighter text-white/10 group-hover:text-white transition-colors uppercase">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Expertise Section */}
      <ScrollReveal>
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-20">
               <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F58220] mb-6">Expertise</div>
               <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-[#0B1B35] max-w-3xl leading-[0.9]">
                  Specialized in <br /><span className="text-[#F58220]">Mission Critical</span> <br />Engineering.
               </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* eCommerce Card */}
              <TiltCard className="relative overflow-hidden rounded-[3rem] aspect-[4/5] bg-gradient-to-br from-[#FFD600] to-[#FF9900] p-10 group shadow-xl">
                 <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                 <motion.div 
                   animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-10 left-6 right-6 bg-white rounded-[2rem] p-6 shadow-xl border border-black/5 scale-[0.9] origin-top"
                 >
                    <div className="flex items-center justify-between mb-6">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#F58220]/10 flex items-center justify-center text-[#F58220]"><ShoppingCart className="w-4 h-4" /></div>
                          <div className="text-[10px] font-black uppercase text-black/40">Checkout</div>
                       </div>
                       <div className="text-[10px] font-black text-[#F58220]">$1,240.00</div>
                    </div>
                    <div className="space-y-4">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-black/5 rounded-xl shrink-0" />
                          <div className="space-y-2 w-full">
                             <div className="h-2 w-3/4 bg-black/10 rounded-full" />
                             <div className="h-1.5 w-1/2 bg-black/5 rounded-full" />
                          </div>
                       </div>
                       <div className="pt-4 border-t border-black/5">
                          <div className="flex justify-between items-center mb-2">
                             <div className="text-[8px] font-black uppercase text-black/20">Status: Shipped</div>
                             <div className="text-[8px] font-black text-emerald-500">92%</div>
                          </div>
                          <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                             <motion.div initial={{ width: 0 }} animate={{ width: "92%" }} className="h-full bg-emerald-500" />
                          </div>
                       </div>
                    </div>
                 </motion.div>
                 <div className="relative z-10 mt-auto">
                    <h3 className="text-3xl font-black text-[#0B1B35] mb-4 tracking-tighter uppercase leading-none">Digital Commerce</h3>
                    <p className="text-sm font-bold text-[#0B1B35]/70 leading-snug">Handling store bugs, speed optimization, and custom Shopify/Woo themes.</p>
                 </div>
              </TiltCard>
  
              {/* Integrations Card */}
              <TiltCard className="relative overflow-hidden rounded-[3rem] aspect-[4/5] bg-gradient-to-br from-[#0057FF] to-[#9900FF] p-10 group shadow-xl">
                 <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                 <motion.div 
                   animate={{ y: [0, -6, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-10 left-6 right-6 bg-[#0B1B35] rounded-[2rem] p-6 shadow-xl border border-white/10 scale-[0.9] origin-top font-mono"
                 >
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                       <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-500/50" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                          <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                       </div>
                       <div className="text-[8px] text-white/20 uppercase tracking-widest">api_bridge.v1</div>
                    </div>
                    <div className="space-y-2">
                       <div className="flex items-center gap-2">
                          <span className="text-[#F58220] text-[9px]">{">"}</span>
                          <div className="h-1.5 w-3/4 bg-white/10 rounded-full" />
                       </div>
                       <div className="flex items-center gap-2">
                          <span className="text-emerald-400 text-[9px]">{">"}</span>
                          <div className="h-1.5 w-full bg-white/5 rounded-full" />
                       </div>
                       <div className="pt-2">
                          <div className="flex justify-between text-[7px] text-white/40 mb-1.5 uppercase">
                             <span>Traffic Load</span>
                             <span className="text-[#F58220]">Stable</span>
                          </div>
                          <div className="flex gap-1">
                             {[1, 2, 3, 4, 5, 6].map((i) => (
                               <div key={i} className={`h-4 w-full rounded-sm ${i < 5 ? 'bg-[#F58220]/40' : 'bg-white/5'}`} />
                             ))}
                          </div>
                       </div>
                    </div>
                 </motion.div>
                 <div className="relative z-10 text-white mt-auto">
                    <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase leading-none">Integrations</h3>
                    <p className="text-sm font-bold opacity-70 leading-snug">Custom API builds, Stripe/PayPal setup, and complex system bridges.</p>
                 </div>
              </TiltCard>
  
              {/* AI & Automation Card */}
              <TiltCard className="relative overflow-hidden rounded-[3rem] aspect-[4/5] bg-gradient-to-br from-[#FF4D00] to-[#FF005C] p-10 group shadow-xl">
                 <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                 <motion.div 
                   animate={{ scale: [1, 1.03, 1], rotate: [0, -1, 0] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-10 left-6 right-6 bg-white rounded-[2rem] p-8 shadow-xl flex flex-col items-center justify-center text-center scale-[0.9] origin-top"
                 >
                    <div className="relative mb-6">
                       <div className="absolute inset-0 bg-[#FF4D00]/20 rounded-full blur-xl animate-pulse" />
                       <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF4D00] to-[#FF005C] flex items-center justify-center text-white relative z-10 shadow-lg">
                          <Bot className="w-8 h-8" />
                       </div>
                    </div>
                    <div className="space-y-3 w-full">
                       <div className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <div className="text-[10px] font-black uppercase text-black/40 tracking-widest">Neural Agent Active</div>
                       </div>
                       <div className="bg-black/5 rounded-xl p-3">
                          <div className="text-[8px] font-black text-black/20 uppercase mb-2 tracking-widest">Efficiency Boost</div>
                          <div className="text-xl font-black text-[#FF4D00]">+85%</div>
                       </div>
                    </div>
                 </motion.div>
                 <div className="relative z-10 text-white mt-auto">
                    <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase leading-none">AI & Automation</h3>
                    <p className="text-sm font-bold opacity-70 leading-snug">Building autonomous AI agents, backend systems, and automated workflows.</p>
                 </div>
              </TiltCard>

              {/* Mobile App Card */}
              <TiltCard className="relative overflow-hidden rounded-[3rem] aspect-[4/5] bg-gradient-to-br from-[#00D2FF] to-[#3a7bd5] p-10 group shadow-xl">
                 <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                 
                 {/* Phone Mockup - Vibrant & Centered */}
                 <motion.div 
                   animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-2 left-1/2 -translate-x-1/2 w-48 aspect-[9/16] bg-white rounded-[2.5rem] p-4 shadow-2xl border border-black/5 scale-[0.8] origin-top overflow-hidden"
                 >
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-4 px-2">
                       <div className="flex gap-1">
                          <div className="w-1 h-1 bg-black/20 rounded-full" />
                          <div className="w-1 h-1 bg-black/20 rounded-full" />
                       </div>
                       <div className="text-[6px] font-black opacity-30">12:42</div>
                       <div className="flex items-center gap-1">
                          <div className="w-4 h-1.5 bg-emerald-500/20 rounded-full border border-emerald-500/30" />
                       </div>
                    </div>
                    
                    {/* Vibrant Hero Section */}
                    <div className="relative h-24 rounded-2xl bg-gradient-to-br from-[#F58220] to-[#FF4D00] p-3 mb-4 overflow-hidden group/screen">
                       <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/20 rounded-full blur-xl animate-pulse" />
                       <div className="relative z-10">
                          <div className="text-[8px] font-black text-white/60 uppercase tracking-widest mb-1">New Sales</div>
                          <div className="text-sm font-black text-white tracking-tighter">$4,290</div>
                       </div>
                       <div className="absolute bottom-2 left-2 right-2 flex items-end gap-0.5 h-8">
                          {[30, 60, 45, 80, 55, 90, 40].map((h, i) => (
                            <motion.div 
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ delay: i * 0.1, duration: 1 }}
                              className="w-full bg-white/30 rounded-t-[2px]"
                            />
                          ))}
                       </div>
                    </div>

                    {/* Feature Cards - Vibrant Colors */}
                    <div className="space-y-3">
                       <div className="p-3 bg-blue-500/5 rounded-xl border border-blue-500/10 flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                             <Zap className="w-4 h-4 fill-current" />
                          </div>
                          <div className="flex flex-col gap-1.5 w-full">
                             <div className="w-3/4 h-1.5 bg-black/10 rounded-full" />
                             <div className="w-1/2 h-1 bg-black/5 rounded-full" />
                          </div>
                       </div>
                       <div className="p-3 bg-[#9900FF]/5 rounded-xl border border-[#9900FF]/10 flex items-center gap-3">
                          <div className="w-8 h-8 bg-[#9900FF] rounded-lg flex items-center justify-center text-white shadow-lg shadow-[#9900FF]/20">
                             <Target className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col gap-1.5 w-full">
                             <div className="w-2/3 h-1.5 bg-black/10 rounded-full" />
                             <div className="w-3/4 h-1 bg-black/5 rounded-full" />
                          </div>
                       </div>
                    </div>

                    {/* Floating Avatar Group */}
                    <div className="mt-4 flex -space-x-2 px-1">
                       {[1, 2, 3].map((i) => (
                         <div key={i} className={`w-5 h-5 rounded-full border-2 border-white bg-gradient-to-br ${i === 1 ? 'from-orange-400 to-red-500' : i === 2 ? 'from-blue-400 to-blue-600' : 'from-emerald-400 to-emerald-600'} shadow-sm`} />
                       ))}
                       <div className="w-5 h-5 rounded-full border-2 border-white bg-black/5 flex items-center justify-center text-[5px] font-black text-black/40">+8</div>
                    </div>

                    {/* Bottom Tab Bar */}
                    <div className="absolute bottom-2 left-2 right-2 h-10 bg-white/80 backdrop-blur-md rounded-xl border border-black/[0.03] flex items-center justify-around px-2">
                       {[1, 2, 3, 4].map((i) => (
                         <div key={i} className={`w-6 h-6 rounded-lg ${i === 1 ? 'bg-[#00D2FF] text-white' : 'bg-black/5'} flex items-center justify-center shadow-sm`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-white' : 'bg-black/20'}`} />
                         </div>
                       ))}
                    </div>
                 </motion.div>
                 <div className="relative z-10 text-white mt-auto">
                    <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase leading-none">Mobile Apps</h3>
                    <p className="text-sm font-bold opacity-70 leading-snug">Native and cross-platform mobile apps built with React Native and Flutter.</p>
                 </div>
              </TiltCard>

              {/* UI/UX Card */}
              <TiltCard className="relative overflow-hidden rounded-[3rem] aspect-[4/5] bg-gradient-to-br from-[#9900FF] to-[#FF00FF] p-10 group shadow-xl">
                 <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                 <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-10 left-6 right-6 bg-white/10 backdrop-blur-xl rounded-[2rem] p-6 border border-white/20 shadow-2xl scale-[0.9] origin-top overflow-hidden"
                 >
                    <div className="flex items-center justify-between mb-6">
                       <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-white/20" />
                          <div className="w-3 h-3 rounded-full bg-white/20" />
                       </div>
                       <Palette className="w-4 h-4 text-white/40" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                       <div className="aspect-square bg-gradient-to-br from-white/20 to-transparent rounded-xl border border-white/10" />
                       <div className="aspect-square bg-gradient-to-br from-white/10 to-transparent rounded-xl border border-white/5" />
                    </div>
                    <div className="space-y-2">
                       <div className="h-1.5 w-full bg-white/20 rounded-full" />
                       <div className="h-1.5 w-2/3 bg-white/10 rounded-full" />
                    </div>
                 </motion.div>
                 <div className="relative z-10 text-white mt-auto">
                    <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase leading-none">UI/UX Design</h3>
                    <p className="text-sm font-bold opacity-70 leading-snug">Conversion-focused designs that make your product look and feel premium.</p>
                 </div>
              </TiltCard>

              {/* DevOps Card */}
              <TiltCard className="relative overflow-hidden rounded-[3rem] aspect-[4/5] bg-gradient-to-br from-[#11998E] to-[#38EF7D] p-10 group shadow-xl">
                 <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                 <motion.div 
                   animate={{ scale: [1, 1.02, 1] }}
                   transition={{ duration: 4, repeat: Infinity }}
                   className="absolute top-10 left-6 right-6 bg-[#0B1B35] rounded-[2rem] p-6 shadow-xl border border-white/10 scale-[0.9] origin-top font-mono"
                 >
                    <div className="flex items-center gap-2 text-emerald-400 text-[9px] mb-4">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                       <span>{">"} SYSTEM_ONLINE</span>
                    </div>
                    <div className="space-y-3">
                       <div>
                          <div className="flex justify-between text-[7px] text-white/40 mb-1 uppercase">
                             <span>Server Load</span>
                             <span className="text-emerald-400">12%</span>
                          </div>
                          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                             <div className="h-full w-[12%] bg-emerald-500" />
                          </div>
                       </div>
                       <div>
                          <div className="flex justify-between text-[7px] text-white/40 mb-1 uppercase">
                             <span>Network</span>
                             <span className="text-emerald-400">Stable</span>
                          </div>
                          <div className="flex gap-1 h-8 items-end">
                             {[20, 40, 30, 60, 45, 80, 50, 90, 70].map((h, i) => (
                               <div key={i} className="w-full bg-emerald-500/20 rounded-t-[1px]" style={{ height: `${h}%` }} />
                             ))}
                          </div>
                       </div>
                    </div>
                 </motion.div>
                 <div className="relative z-10 text-white mt-auto">
                    <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase leading-none">Cloud & DevOps</h3>
                    <p className="text-sm font-bold opacity-70 leading-snug">Ensuring your systems stay online, secure, and ready for global traffic.</p>
                 </div>
              </TiltCard>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Testimonials limit={6} />

      {/* Simple Process */}
      <ScrollReveal direction="down">
        <section className="py-24 bg-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 sm:mb-16">
               <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-[#F58220] mb-4">How it works</div>
               <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-[#0B1B35] leading-[1] sm:leading-[0.95]">Simple Process. <br />Vibrant Results.</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1: Subscribe */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-[3rem] aspect-[4/5] bg-gradient-to-br from-[#FFD600] to-[#FF9900] p-8 flex flex-col justify-end group shadow-xl"
              >
                 <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                 <motion.div 
                   animate={{ y: [0, -10, 0] }} 
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-8 left-6 right-6 bg-black rounded-2xl p-6 shadow-xl border border-white/10"
                 >
                    <div className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-4">NRT Partner Plan</div>
                    <div className="text-3xl font-black text-white mb-6">$1,500<span className="text-xs text-white/40 font-bold">/mo</span></div>
                    <div className="space-y-2">
                       <div className="h-1 w-full bg-white/5 rounded-full" />
                       <div className="h-1 w-full bg-white/5 rounded-full" />
                       <div className="h-1 w-1/2 bg-[#F58220] rounded-full" />
                    </div>
                 </motion.div>
                 <div className="relative z-10">
                    <h3 className="text-5xl font-black text-[#0B1B35]/10 mb-2 tracking-tighter absolute -bottom-4 left-0 select-none pointer-events-none uppercase">Subscribe</h3>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0B1B35] mb-3 tracking-tighter uppercase leading-none relative z-20">Subscribe</h3>
                    <p className="text-sm font-bold text-[#0B1B35]/70 leading-snug relative z-20">Choose a plan or start with a small test task to begin your partnership.</p>
                 </div>
              </motion.div>
  
              {/* Card 2: Request */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-[3rem] aspect-[4/5] bg-gradient-to-br from-[#0057FF] to-[#9900FF] p-8 flex flex-col justify-end group shadow-xl"
              >
                 <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                 <div className="absolute top-8 left-6 right-6 flex flex-wrap gap-2">
                    {["API", "Bug", "React", "AI", "Dash"].map((tag, i) => (
                      <motion.div 
                        key={i}
                        animate={{ y: [0, -5, 0], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-3 py-1.5 text-[9px] font-black text-white uppercase tracking-[0.1em]"
                      >
                        {tag}
                      </motion.div>
                    ))}
                 </div>
                 <div className="relative z-10 text-white">
                    <h3 className="text-5xl font-black text-white/10 mb-2 tracking-tighter absolute -bottom-4 left-0 select-none pointer-events-none uppercase">Request</h3>
                    <h3 className="text-2xl sm:text-3xl font-black mb-3 tracking-tighter uppercase leading-none relative z-20">Request</h3>
                    <p className="text-sm font-bold opacity-70 leading-snug relative z-20">Add as many tasks as you like to your dedicated board with zero friction.</p>
                 </div>
              </motion.div>
  
              {/* Card 3: Receive */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-[3rem] aspect-[4/5] bg-gradient-to-br from-[#FF4D00] to-[#FF005C] p-8 flex flex-col justify-end group shadow-xl"
              >
                 <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                 <motion.div 
                   animate={{ rotate: [-1, 1, -1], y: [0, -10, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-8 left-6 right-6 bg-white rounded-2xl p-4 shadow-xl overflow-hidden"
                 >
                    <img src="https://res.cloudinary.com/de4oqb7rz/image/upload/v1777422324/nrt-portfolio/fxrl8jxwne52fpd0vq1t.png" alt="Delivery" className="w-full h-auto rounded-lg" />
                    <div className="mt-3 flex items-center justify-between px-1">
                       <div className="text-[8px] font-black uppercase text-black/40">Status: Complete</div>
                       <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white"><CheckCircle2 className="w-4 h-4" /></div>
                    </div>
                 </motion.div>
                 <div className="relative z-10 text-white">
                    <h3 className="text-5xl font-black text-white/10 mb-2 tracking-tighter absolute -bottom-4 left-0 select-none pointer-events-none uppercase">Receive</h3>
                    <h3 className="text-2xl sm:text-3xl font-black mb-3 tracking-tighter uppercase leading-none relative z-20">Receive</h3>
                    <p className="text-sm font-bold opacity-70 leading-snug relative z-20">Get high-quality technical results in just 2-3 business days on average.</p>
                 </div>
              </motion.div>

              {/* Card 4: Optimize */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-[3rem] aspect-[4/5] bg-gradient-to-br from-[#00D2FF] to-[#3a7bd5] p-8 flex flex-col justify-end group shadow-xl"
              >
                 <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                 <div className="absolute top-8 left-6 right-6 bg-white/10 backdrop-blur-3xl rounded-2xl p-4 border border-white/20">
                    <div className="text-[8px] font-black text-white/40 uppercase mb-2">Performance Score</div>
                    <div className="text-4xl font-black text-white">99%</div>
                 </div>
                 <div className="relative z-10 text-white">
                    <h3 className="text-5xl font-black text-white/10 mb-2 tracking-tighter absolute -bottom-4 left-0 select-none pointer-events-none uppercase">Optimize</h3>
                    <h3 className="text-2xl sm:text-3xl font-black mb-3 tracking-tighter uppercase leading-none relative z-20">Optimize</h3>
                    <p className="text-sm font-bold opacity-70 leading-snug relative z-20">We continuously refine your code for speed and scalability.</p>
                 </div>
              </motion.div>

              {/* Card 5: Scale */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-[3rem] aspect-[4/5] bg-gradient-to-br from-[#8E2DE2] to-[#4A00E0] p-8 flex flex-col justify-end group shadow-xl"
              >
                 <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                 <div className="absolute top-8 left-6 right-6 flex items-center justify-center">
                    <TrendingUp className="w-20 h-20 text-white opacity-20" />
                 </div>
                 <div className="relative z-10 text-white">
                    <h3 className="text-5xl font-black text-white/10 mb-2 tracking-tighter absolute -bottom-4 left-0 select-none pointer-events-none uppercase">Scale</h3>
                    <h3 className="text-2xl sm:text-3xl font-black mb-3 tracking-tighter uppercase leading-none relative z-20">Scale</h3>
                    <p className="text-sm font-bold opacity-70 leading-snug relative z-20">As you grow, we scale your team and systems with you seamlessly.</p>
                 </div>
              </motion.div>

              {/* Card 6: Support */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-[3rem] aspect-[4/5] bg-gradient-to-br from-[#11998E] to-[#38EF7D] p-8 flex flex-col justify-end group shadow-xl"
              >
                 <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                 <div className="absolute top-8 left-6 right-6 bg-[#0B1B35] rounded-2xl p-4 border border-white/10">
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                       <div className="text-[8px] font-black text-white/60 uppercase">Support Online</div>
                    </div>
                 </div>
                 <div className="relative z-10 text-white">
                    <h3 className="text-5xl font-black text-white/10 mb-2 tracking-tighter absolute -bottom-4 left-0 select-none pointer-events-none uppercase">Support</h3>
                    <h3 className="text-2xl sm:text-3xl font-black mb-3 tracking-tighter uppercase leading-none relative z-20">Support</h3>
                    <p className="text-sm font-bold opacity-70 leading-snug relative z-20">Direct access to your developers via Slack, WhatsApp, or Email.</p>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Pricing Section - Restored Dark */}
      <ScrollReveal>
        <section className="py-32 bg-[#060E1B] border-y border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
               <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F58220] mb-6">Pricing Plans</div>
               <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-white mb-8">Flexible Plans for <br />Every Business Need</h2>
               <p className="text-xl font-bold text-white/40 max-w-2xl mx-auto italic">“Submit your tasks, we handle everything — no need to hire or manage developers.”</p>
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Starter", price: "$1,000", color: "from-[#6366f1] to-[#a855f7]", features: ["Unlimited Small Tasks", "Basic API Integrations", "Dedicated Project Manager", "48h Turnaround Time"] },
                { name: "Performance Pro", price: "$1,500", color: "from-[#11998E] to-[#38EF7D]", features: ["Core Web Vitals Boost", "Security & Firewall Audit", "24/7 Uptime Monitoring", "Database Optimization"] },
                { name: "Growth", price: "$2,000", color: "from-[#F58220] to-[#FF4D00]", featured: true, features: ["Full Stack Development", "Custom API & Webhooks", "Weekly Strategy Calls", "Priority Support Queue"] },
                { name: "AI Automation", price: "$2,500", color: "from-[#8E2DE2] to-[#4A00E0]", features: ["Custom AI Agent Build", "Workflow Automation", "LLM Integration (GPT/Claude)", "AI-Driven Insights"] },
                { name: "Scale", price: "$3,500", color: "from-[#0ea5e9] to-[#2563eb]", features: ["Entire Technical Team", "Unlimited Complex Tasks", "Architectural Consulting", "Fastest 24h Turnaround"] },
                { name: "Custom Project", price: "Custom", color: "from-[#ec4899] to-[#8b5cf6]", features: ["Fixed Scope Execution", "Zero-to-One MVP Build", "Legacy Code Migration", "Dedicated Sprint Team"] }
              ].map((plan, i) => (
                <motion.div key={i} whileHover={{ y: -8 }} className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${plan.color} p-6 sm:p-7 flex flex-col justify-between shadow-2xl ${plan.featured ? 'scale-105 z-10 border-4 border-white/20' : 'border border-white/5'}`}>
                   <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                   <div className="relative z-10">
                      <h3 className="text-lg font-black text-white mb-0.5 uppercase tracking-tighter">{plan.name}</h3>
                      <div className="text-2xl font-black text-white mb-5">{plan.price}<span className="text-[10px] opacity-60">/mo</span></div>
                      <ul className="space-y-2 mb-6">
                        {plan.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-2.5 text-[12px] font-bold text-white/90"><CheckCircle2 className="w-3.5 h-3.5" /> {f}</li>
                        ))}
                      </ul>
                   </div>
                   <Link to="/contact" className="block w-full bg-white text-[#0B1B35] py-3.5 rounded-xl text-center font-black text-base hover:bg-white/90 transition-colors">Select Plan</Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Team Section - Premium Upgrade */}
      <ScrollReveal>
        <section className="py-32 relative overflow-hidden">
           {/* Floating Background Blobs */}
           <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
           <div className="absolute bottom-0 right-0 translate-x-1/4 w-[500px] h-[500px] bg-[#F58220]/10 rounded-full blur-[100px] pointer-events-none" />

           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="bg-[#0B1B35] rounded-[4rem] p-12 sm:p-24 relative overflow-hidden border border-white/5 shadow-2xl">
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
                          <div className="w-2 h-2 rounded-full bg-[#F58220] animate-pulse" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Team as a Service</span>
                       </div>
                       
                       <h2 className="text-5xl sm:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-10">
                          Your Dedicated <br />
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] to-[#FF4D00]">Tech Partner.</span>
                       </h2>
                       
                       <p className="text-xl font-bold text-white/40 mb-12 leading-relaxed max-w-lg">
                          Skip the recruitment cycles. Get immediate access to a full stack of elite engineering and design talent for a flat monthly fee.
                       </p>

                       <div className="flex flex-col sm:flex-row items-center gap-6">
                          <Link to="/contact" className="w-full sm:w-auto bg-[#F58220] text-white px-12 py-6 rounded-2xl text-xl font-black shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center gap-4 group">
                             Assemble My Team <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                          </Link>
                          <div className="flex -space-x-3">
                             {[1, 2, 3, 4].map((i) => (
                               <img key={i} src={`https://i.pravatar.cc/100?img=${i+40}`} alt="Expert" className="w-12 h-12 rounded-full border-4 border-[#0B1B35] shadow-xl" />
                             ))}
                             <div className="w-12 h-12 rounded-full bg-white/5 border-4 border-[#0B1B35] flex items-center justify-center text-[10px] font-black text-white/40">+50</div>
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
                               <div className="w-12 h-12 rounded-2xl bg-[#F58220]/10 flex items-center justify-center text-[#F58220] group-hover:bg-[#F58220] group-hover:text-white transition-all shadow-lg">
                                  {item.icon}
                               </div>
                               <div className="flex flex-col">
                                  <span className="text-white text-lg font-black tracking-tighter uppercase leading-none mb-1">{item.label}</span>
                                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{item.desc}</span>
                               </div>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-white group-hover:border-[#F58220] group-hover:bg-[#F58220] transition-all">
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
      <section className="py-32 bg-[#060E1B] relative overflow-hidden border-t border-white/5">
         {/* Background Decorative Elements */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F58220]/5 rounded-full blur-[120px] pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

         <div className="mx-auto max-w-5xl px-4 relative z-10">
            <div className="flex flex-col items-center text-center mb-24">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
               >
                  <MessageSquare className="w-4 h-4 text-[#F58220]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Help Center</span>
               </motion.div>
               <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-white mb-8">
                  Frequently Asked <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] to-[#FF4D00]">Questions.</span>
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
      className={`rounded-[2.5rem] border transition-all duration-700 overflow-hidden ${isOpen ? 'bg-gradient-to-br from-white/10 to-transparent border-white/20 shadow-2xl shadow-orange-500/5' : 'bg-white/5 border-white/5 hover:bg-white/[0.07] hover:border-white/10'}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 sm:p-12 flex items-start justify-between text-left group"
      >
        <div className="flex gap-8 sm:gap-12">
           <div className="relative">
              <span className={`text-4xl sm:text-5xl font-black tracking-tighter transition-all duration-700 ${isOpen ? 'text-[#F58220]' : 'text-white/5'}`}>
                 {(index + 1).toString().padStart(2, '0')}
              </span>
              {isOpen && (
                <motion.div 
                  layoutId="glow"
                  className="absolute inset-0 bg-[#F58220] blur-2xl opacity-20"
                />
              )}
           </div>
           <h3 className={`text-xl sm:text-3xl font-black tracking-tight uppercase leading-tight mt-2 sm:mt-3 transition-colors duration-700 ${isOpen ? 'text-white' : 'text-white/60'}`}>
              {faq.q}
           </h3>
        </div>
        <div className={`mt-3 sm:mt-4 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-700 ${isOpen ? 'bg-[#F58220] border-transparent rotate-180 shadow-lg shadow-orange-500/20' : 'bg-white/5 border-white/10 group-hover:border-white/20'}`}>
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
               <p className="text-xl font-bold text-white/40 leading-relaxed max-w-3xl border-l-4 border-[#F58220] pl-8">
                  {faq.a}
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}