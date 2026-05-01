import { SEO } from "../components/SEO";
import { Testimonials } from "../components/Testimonials";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
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
  ZapIcon
} from "lucide-react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { ScrollReveal } from "../components/ui/ScrollReveal";

export function Home() {
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
    <div className="relative min-h-screen bg-[#F8F9FA] pt-24 overflow-x-hidden text-[#0B1B35]">
      <SEO 
        title="Your Dedicated Tech Partner"
        description="Stop hiring developers for everything. Get a full dedicated team for a flat monthly fee. Specialized in eCommerce, APIs, and AI automation."
      />

      {/* Hero Section - PIXEL-PERFECT ALIGNMENT */}
      <section className="relative pt-12 sm:pt-20 pb-48 px-4 sm:px-6 lg:px-12 xl:px-24 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#F58220]/20 to-transparent rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0057FF]/10 to-transparent rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />
        
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-8 relative"
            >
               <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black leading-[0.85] tracking-tighter mb-8 sm:mb-12 heading-brand text-[#0B1B35]">
                 Stop Hiring <br className="hidden sm:block" />
                 Developers for <br className="hidden sm:block" />
                 <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] to-[#FF4D00]">everything</span>.
               </h1>
              <p className="text-lg sm:text-xl xl:text-2xl text-[#0B1B35]/70 font-bold mb-10 sm:mb-12 max-w-[500px] leading-tight">
                Get a full dedicated team for a flat monthly fee. No hiring, no overhead, just results.
              </p>
               <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16">
                <Link to={ctaLinks.test} className="bg-[#0B1B35] text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-black shadow-[0_20px_50px_rgba(11,27,53,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center sm:justify-start gap-4 group">
                  Try NRT for $499
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                     <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </Link>
                <Link to="/process" className="bg-white border-2 border-[#0B1B35]/5 text-[#0B1B35] px-8 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-black hover:bg-[#F8F9FA] active:scale-95 transition-all flex items-center justify-center sm:justify-start gap-4">
                  See Workflow
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 border-t border-[#0B1B35]/5 pt-10 sm:pt-12">
                 <div className="flex -space-x-3 sm:-space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.img 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        src={`https://i.pravatar.cc/100?img=${i+20}`} 
                        alt="User" 
                        className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-4 border-white shadow-xl" 
                      />
                    ))}
                 </div>
                 <div className="text-base sm:text-lg font-bold text-[#0B1B35]/40 italic">"The most reliable team we've ever worked with."</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:col-span-4 relative mt-8 lg:mt-6"
            >
              {/* Floating Dashboard Snippet */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 rounded-3xl sm:rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(11,27,53,0.3)] border border-white/5"
              >
                 <div className="aspect-[0.8/1] bg-gradient-to-br from-[#0B1B35] to-[#1A365D] p-6 sm:p-14 flex flex-col justify-between">
                    <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                    <div className="relative z-10">
                       <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#F58220] flex items-center justify-center text-white mb-4 sm:mb-10 shadow-lg shadow-[#F58220]/30">
                          <ZapIcon className="w-5 h-5 sm:w-8 sm:h-8 fill-current" />
                       </div>
                       <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter leading-[0.9] mb-3 sm:mb-8">NRT <br />Dedicated <br />Partner.</h2>
                       <p className="text-base sm:text-xl font-bold text-white/50 leading-relaxed max-w-[240px] sm:max-w-[280px]">
                          Your mission-critical tech handled by experts 24/7.
                       </p>
                    </div>
                    <div className="relative z-10 space-y-5 sm:space-y-8">
                       <div className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-[2.5rem] p-5 sm:p-8 border border-white/10">
                          <div className="flex items-center justify-between mb-3 sm:mb-6">
                             <div className="text-[9px] sm:text-[11px] font-black uppercase tracking-widest text-[#F58220]">Active Tasks</div>
                             <div className="text-white text-base sm:text-xl font-black">04</div>
                          </div>
                          <div className="space-y-2 sm:space-y-3">
                             <div className="h-1 sm:h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: "70%" }} transition={{ duration: 2 }} className="h-full bg-[#F58220]" />
                             </div>
                             <div className="h-1 sm:h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: "40%" }} transition={{ duration: 2, delay: 0.5 }} className="h-full bg-blue-500" />
                             </div>
                          </div>
                       </div>
                       <Link to="/estimator" className="block w-full bg-[#F58220] text-white text-center py-4 sm:py-6 rounded-xl sm:rounded-[2rem] font-black text-lg sm:text-2xl hover:scale-[1.02] transition-all shadow-2xl">
                          Check Project Pricing
                       </Link>
                    </div>
                 </div>
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute bottom-0 -right-10 w-40 h-40 bg-[#F58220] rounded-full blur-[100px] opacity-10" />
              <div className="absolute top-0 -left-10 w-40 h-40 bg-blue-500 rounded-full blur-[100px] opacity-5" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section - INFINITE MARQUEE WITH LOGOS */}
      <ScrollReveal>
        <section className="py-16 bg-white border-y border-black/5 mb-24 overflow-hidden">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0B1B35]/20 text-center mb-12">
             Trusted by businesses built on
          </div>
          <div className="relative flex overflow-x-hidden">
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
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <img src={brand.logo} alt={brand.name} className="h-8 sm:h-10 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                  <span className="text-xl sm:text-2xl font-black tracking-tighter text-[#0B1B35]/20 group-hover:text-[#0B1B35] transition-colors uppercase">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* What We Handle Section - SCALED DOWN */}
      <ScrollReveal>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 sm:mb-16">
               <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-[#F58220] mb-4">Expertise</div>
               <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-[#0B1B35] max-w-2xl leading-[1] sm:leading-[0.95]">
                  Specialized in <br /><span className="text-[#F58220]">Mission Critical</span> <br className="hidden sm:block" />Development.
               </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* eCommerce Card */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-[3rem] aspect-[4/5] bg-gradient-to-br from-[#FFD600] to-[#FF9900] p-10 flex flex-col justify-end group shadow-xl"
              >
                 <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                 <motion.div 
                   animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-10 left-6 right-6 bg-white rounded-[2rem] p-6 shadow-xl border border-black/5 scale-[0.9] origin-top"
                 >
                    <div className="flex items-center gap-3 mb-4">
                       <div className="w-8 h-8 rounded-full bg-[#F58220]/10 flex items-center justify-center text-[#F58220]"><ShoppingCart className="w-4 h-4" /></div>
                       <div className="text-[9px] font-black uppercase text-black/40">Order Confirmed</div>
                    </div>
                    <div className="space-y-2">
                       <div className="h-1.5 w-full bg-black/5 rounded-full" />
                       <div className="h-1.5 w-3/4 bg-[#F58220]/20 rounded-full" />
                    </div>
                 </motion.div>
                 <div className="relative z-10">
                    <h3 className="text-3xl sm:text-4xl font-black text-[#0B1B35] mb-4 tracking-tighter uppercase leading-none">eCommerce</h3>
                    <p className="text-base sm:text-lg font-bold text-[#0B1B35]/70 leading-snug">Handling store bugs, speed optimization, and custom Shopify/Woo themes.</p>
                 </div>
              </motion.div>
  
              {/* Integrations Card */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-[3rem] aspect-[4/5] bg-gradient-to-br from-[#0057FF] to-[#9900FF] p-10 flex flex-col justify-end group shadow-xl"
              >
                 <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                 <motion.div 
                   animate={{ y: [0, -6, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-10 left-6 right-6 bg-[#0B1B35] rounded-[2rem] p-6 shadow-xl border border-white/10 scale-[0.9] origin-top"
                 >
                    <div className="text-[#F58220] text-[9px] font-mono mb-3">{">"} API Bridge Active</div>
                    <div className="space-y-1.5">
                       <div className="h-1 w-full bg-white/10 rounded-full" />
                       <div className="h-1 w-full bg-white/10 rounded-full" />
                       <div className="h-1 w-1/2 bg-[#F58220] rounded-full" />
                    </div>
                 </motion.div>
                 <div className="relative z-10 text-white">
                    <h3 className="text-3xl sm:text-4xl font-black mb-4 tracking-tighter uppercase leading-none">Integrations</h3>
                    <p className="text-base sm:text-lg font-bold opacity-70 leading-snug">Custom API builds, Stripe/PayPal setup, and complex system bridges.</p>
                 </div>
              </motion.div>
  
              {/* AI & Automation Card */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-[3rem] aspect-[4/5] bg-gradient-to-br from-[#FF4D00] to-[#FF005C] p-10 flex flex-col justify-end group shadow-xl"
              >
                 <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                 <motion.div 
                   animate={{ scale: [1, 1.03, 1], rotate: [0, -1, 0] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-10 left-6 right-6 bg-white rounded-[2rem] p-6 shadow-xl flex flex-col items-center justify-center text-center scale-[0.9] origin-top"
                 >
                    <div className="w-12 h-12 rounded-full bg-[#FF4D00]/10 flex items-center justify-center text-[#FF4D00] mb-3">
                       <Bot className="w-6 h-6" />
                    </div>
                    <div className="text-[9px] font-black uppercase text-black/20 tracking-[0.2em] mb-1">Agent Neural</div>
                    <div className="text-xs font-black text-black">BOT_ONLINE</div>
                 </motion.div>
                 <div className="relative z-10 text-white">
                    <h3 className="text-3xl sm:text-4xl font-black mb-4 tracking-tighter uppercase leading-none">AI & Automation</h3>
                    <p className="text-base sm:text-lg font-bold opacity-70 leading-snug">Building autonomous AI agents, backend systems, and automated workflows.</p>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Testimonials />

      {/* Simple Process - SCALED DOWN & FIXED OVERFLOW */}
      <ScrollReveal direction="down">
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 sm:mb-16">
               <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-[#F58220] mb-4">How it works</div>
               <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-[#0B1B35] leading-[1] sm:leading-[0.95]">Simple Process. <br />Vibrant Results.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
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
                    <h3 className="text-5xl sm:text-6xl font-black text-[#0B1B35]/10 mb-2 tracking-tighter absolute -bottom-4 left-0 select-none pointer-events-none">Subscribe</h3>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0B1B35] mb-3 tracking-tighter uppercase leading-none relative z-20">Subscribe</h3>
                    <p className="text-sm sm:text-base font-bold text-[#0B1B35]/70 leading-snug relative z-20">Choose a plan or start with a small test task to begin your partnership.</p>
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
                    <h3 className="text-5xl sm:text-6xl font-black text-white/10 mb-2 tracking-tighter absolute -bottom-4 left-0 select-none pointer-events-none">Request</h3>
                    <h3 className="text-2xl sm:text-3xl font-black mb-3 tracking-tighter uppercase leading-none relative z-20">Request</h3>
                    <p className="text-sm sm:text-base font-bold opacity-70 leading-snug relative z-20">Add as many tasks as you like to your dedicated board with zero friction.</p>
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
                    <h3 className="text-5xl sm:text-6xl font-black text-white/10 mb-2 tracking-tighter absolute -bottom-4 left-0 select-none pointer-events-none">Receive</h3>
                    <h3 className="text-2xl sm:text-3xl font-black mb-3 tracking-tighter uppercase leading-none relative z-20">Receive</h3>
                    <p className="text-sm sm:text-base font-bold opacity-70 leading-snug relative z-20">Get high-quality technical results in just 2-3 business days on average.</p>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Pricing Section - VIBRANT MODERN SaaS STYLE */}
      <ScrollReveal direction="left">
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 sm:mb-20">
               <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-[#F58220] mb-4">Pricing Plans</div>
               <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-[#0B1B35] leading-tight mb-6">Flexible Plans for <br />Every Business Need</h2>
               <p className="text-lg sm:text-xl font-bold text-[#0B1B35]/50 max-w-2xl mx-auto">Whether you need ongoing development or a one-time project, we’ve got you covered.</p>
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Card 1: Starter */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#6366f1] to-[#a855f7] p-10 sm:p-12 flex flex-col justify-between group shadow-xl aspect-[4/5]"
              >
                 <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                 <div className="relative z-10 h-full flex flex-col">
                    <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-[10px] font-black text-white uppercase tracking-widest mb-4 w-fit border border-white/10">Small ongoing needs</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-white mb-1">Starter</h3>
                      <div className="text-3xl font-black text-white mb-6">$1000<span className="text-xs font-bold opacity-60">/mo</span></div>
                      <ul className="space-y-3 mb-8">
                        {["Ongoing fixes & tasks", "Basic integrations", "Dedicated developer", "Reliable turnaround"].map((feat, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-bold text-white/80">
                            <CheckCircle2 className="w-4 h-4 text-white" /> {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link to="/contact" className="block w-full bg-white text-[#6366f1] py-4 rounded-2xl text-center font-black text-lg hover:scale-105 transition-all mt-auto">Choose Starter</Link>
                 </div>
              </motion.div>
  
              {/* Card 2: Growth (HIGHLIGHTED) */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#F58220] to-[#FF4D00] p-10 sm:p-12 flex flex-col justify-between group shadow-2xl scale-105 z-20 border-4 border-white/20 aspect-[4/5]"
              >
                 <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-[50px] group-hover:scale-150 transition-transform" />
                 <div className="relative z-10 h-full flex flex-col">
                    <div className="bg-white text-[#F58220] rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest mb-4 w-fit shadow-lg">Most Popular</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-white mb-1">Growth</h3>
                      <div className="text-3xl font-black text-white mb-6">$2000<span className="text-xs font-bold opacity-60">/mo</span></div>
                      <ul className="space-y-3 mb-8">
                        {["Priority support", "API integrations", "Regular improvements", "More dedicated time"].map((feat, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-bold text-white">
                            <CheckCircle2 className="w-4 h-4 text-white" /> {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link to="/contact" className="block w-full bg-[#0B1B35] text-white py-4 rounded-2xl text-center font-black text-lg hover:scale-105 transition-all shadow-xl mt-auto">Choose Growth</Link>
                 </div>
              </motion.div>
  
              {/* Card 3: Scale */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#0ea5e9] to-[#2563eb] p-10 sm:p-12 flex flex-col justify-between group shadow-xl aspect-[4/5]"
              >
                 <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                 <div className="relative z-10 h-full flex flex-col">
                    <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-[10px] font-black text-white uppercase tracking-widest mb-4 w-fit border border-white/10">Scaling businesses</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-white mb-1">Scale</h3>
                      <div className="text-3xl font-black text-white mb-6">$3500<span className="text-xs font-bold opacity-60">/mo</span></div>
                      <ul className="space-y-3 mb-8">
                        {["Full system handling", "Continuous optimization", "Fastest turnaround", "Dedicated focus"].map((feat, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-bold text-white/80">
                            <CheckCircle2 className="w-4 h-4 text-white" /> {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link to="/contact" className="block w-full bg-white text-[#2563eb] py-4 rounded-2xl text-center font-black text-lg hover:scale-105 transition-all mt-auto">Choose Scale</Link>
                 </div>
              </motion.div>
  
              {/* Card 4: Project */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#ec4899] to-[#8b5cf6] p-10 sm:p-12 flex flex-col justify-between group shadow-xl aspect-[4/5]"
              >
                 <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                 <div className="relative z-10 h-full flex flex-col">
                    <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-[10px] font-black text-white uppercase tracking-widest mb-4 w-fit border border-white/10">One-off needs</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-white mb-1">Project</h3>
                      <div className="text-3xl font-black text-white mb-6">Custom<span className="text-xs font-bold opacity-60"> Quote</span></div>
                      <ul className="space-y-3 mb-8">
                        {["Fixed-scope project", "Single feature build", "Custom integrations", "One-time delivery"].map((feat, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-bold text-white/80">
                            <CheckCircle2 className="w-4 h-4 text-white" /> {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link to="/contact" className="block w-full bg-white text-[#ec4899] py-4 rounded-2xl text-center font-black text-lg hover:scale-105 transition-all mt-auto">Get a Quote</Link>
                 </div>
              </motion.div>
            </div>
  
            <div className="text-center">
               <p className="text-xl font-bold text-[#0B1B35]/40 mb-12 italic">“Submit your tasks, we handle everything — no need to hire or manage developers.”</p>
               <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link to="/contact?type=test" className="bg-[#F58220] text-white px-10 py-5 rounded-2xl text-xl font-black shadow-xl hover:scale-105 transition-all">Start a Small Paid Test</Link>
                  <Link to="/contact" className="bg-white border-2 border-[#0B1B35] text-[#0B1B35] px-10 py-5 rounded-2xl text-xl font-black hover:bg-[#0B1B35] hover:text-white transition-all">Book a Quick Call</Link>
               </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Case Studies Section - SCALED DOWN */}
      <ScrollReveal>
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 sm:mb-24">
               <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter text-[#0B1B35] leading-[0.85] mb-8">
                  Technical <br />
                  <span className="text-[#F58220] italic font-italic-serif font-normal">Success</span> <br />
                  Stories.
               </h2>
               <p className="text-xl sm:text-2xl font-bold text-[#0B1B35]/40 max-w-2xl leading-tight">
                  We solve complex problems for global partners.
               </p>
            </div>
  
             <div className="grid lg:grid-cols-3 gap-12">
                {featuredProjects.map((project, i) => (
                  <motion.div 
                     key={i} 
                     whileHover={{ y: -8 }}
                     className="group"
                  >
                     <Link to="/case-studies" className="block">
                        <div className={`relative aspect-[16/10] rounded-[3rem] overflow-hidden mb-8 ${project.color} shadow-xl`}>
                           <div className="absolute inset-0 opacity-20 bg-[url('/noise.svg')]" />
                           <div className="absolute inset-0 flex items-center justify-center p-10">
                              <img 
                                 src={project.image} 
                                 alt={project.title} 
                                 className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-1000" 
                              />
                           </div>
                           <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B35]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                              <div className="text-white text-2xl font-black tracking-tighter">View Success Story</div>
                           </div>
                        </div>
                        <div className="flex justify-between items-start gap-4 px-2">
                           <div>
                              <div className="text-[9px] font-black uppercase tracking-[0.2em] text-[#F58220] mb-2">{project.category}</div>
                              <h3 className="text-xl sm:text-2xl font-black tracking-tighter text-[#0B1B35] group-hover:text-[#F58220] transition-colors">{project.title}</h3>
                           </div>
                           <div className="bg-[#0B1B35]/5 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-[#0B1B35]/60 whitespace-nowrap">
                              {project.impact}
                           </div>
                        </div>
                     </Link>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Team Section - SCALED DOWN */}
      <ScrollReveal direction="right">
        <section className="py-24 bg-[#F8F9FA]">
           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="bg-[#0B1B35] rounded-[3rem] sm:rounded-[4rem] p-10 sm:p-20 relative overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                 <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                       <div className="inline-flex items-center gap-2 bg-[#F58220] rounded-full px-5 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-white mb-8">Team as a Service</div>
                       <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tighter leading-[0.95] mb-8">Your Dedicated <br /><span className="text-[#F58220]">Tech Partner.</span></h2>
                       <p className="text-lg font-bold text-white/50 mb-10 leading-relaxed max-w-lg">Skip the recruitment cycles. Get immediate access to a full stack of engineering and design talent.</p>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-12">
                          {teamRoles.map((role, i) => (
                            <div key={i} className="flex items-center gap-4 text-white">
                               <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F58220] border border-white/5">{role.icon}</div>
                               <span className="text-base font-black tracking-tight">{role.role}</span>
                            </div>
                          ))}
                       </div>
                       <Link to="/contact" className="bg-[#F58220] text-white px-10 py-5 rounded-xl text-lg font-black shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center sm:justify-start gap-4 group w-full sm:w-fit">Assemble My Team <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
                    </div>
                    <div className="hidden lg:block relative">
                       <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] p-12 border border-white/10 shadow-xl">
                          <div className="space-y-8">
                             {["UI/UX Design", "Frontend Dev", "Backend Dev", "DevOps", "QA Testing"].map((item) => (
                               <div key={item} className="flex items-center justify-between group cursor-default">
                                  <span className="text-white text-xl font-black tracking-tighter group-hover:text-[#F58220] transition-colors">{item}</span>
                                  <div className="w-8 h-8 rounded-full bg-[#F58220]/20 flex items-center justify-center text-[#F58220] group-hover:bg-[#F58220] group-hover:text-white transition-all">
                                     <CheckCircle className="w-5 h-5" />
                                  </div>
                               </div>
                             ))}
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </ScrollReveal>

      {/* Expertise Marquee - MORE STYLISH WITH ICONS */}
      <section className="py-32 bg-[#0B1B35] overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
        <div className="flex gap-16 animate-infinite-scroll whitespace-nowrap items-center">
           {[...services, ...services].map((skill, i) => (
             <div key={i} className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F58220] group-hover:bg-[#F58220] group-hover:text-white transition-all duration-500">
                   <Zap className="w-6 h-6" />
                </div>
                <div className="text-white/30 text-5xl font-black tracking-tighter hover:text-white transition-colors cursor-default select-none uppercase">
                   {skill}
                </div>
                <div className="mx-8 text-[#F58220] opacity-30">/</div>
             </div>
           ))}
        </div>
      </section>
      <PreFooterCTA />
    </div>
  );
}