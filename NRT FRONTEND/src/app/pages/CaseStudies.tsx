import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Globe, 
  ShoppingCart, 
  Cpu, 
  Layout, 
  ShieldCheck,
  TrendingUp,
  Zap,
  ArrowUpRight,
  Bot,
  Smartphone,
  Gavel,
  Baby,
  UtensilsCrossed,
  Factory,
  Sparkles
} from "lucide-react";
import { InteractiveHero3D } from "../components/ui/InteractiveHero3D";

export function CaseStudies() {
  const studies = [
    {
      title: "Pulse Healthcare ERP",
      category: "Enterprise / SaaS / ERP",
      client: "Healthcare Provider • USA",
      result: "Built a multi-tenant platform handling 50,000+ patient records with 99.9% uptime.",
      impact: "Reduced overhead by 40%.",
      image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1777422316/nrt-portfolio/ev6sddad59sg3uij5e89.png",
      color: "from-[#0057FF] to-[#00A3FF]",
      icon: <Cpu className="w-10 h-10" />
    },
    {
      title: "BabyBloom eCommerce",
      category: "Marketplace / Web Design",
      client: "eCommerce Brand • UK",
      result: "A premium baby product store featuring advanced filtering, a seamless checkout flow, and a custom admin panel.",
      impact: "45% Increase in mobile conversions.",
      image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1777422324/nrt-portfolio/fxrl8jxwne52fpd0vq1t.png",
      color: "from-[#27324A] to-[#27324A]",
      icon: <Baby className="w-10 h-10" />
    },
    {
      title: "Textile Mill POS",
      category: "Industrial / FinTech / API",
      client: "Textile Manufacturer • Pakistan",
      result: "Integrated local tax authority (FBR) APIs with a custom Textile Mill POS for real-time automated invoicing.",
      impact: "Automated 10k+ invoices/mo.",
      image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1777422328/nrt-portfolio/gun48fjit8uqvh2phurv.png",
      color: "from-[#4D00FF] to-[#9900FF]",
      icon: <Factory className="w-10 h-10" />
    },
    {
      title: "IraqBid: Auction App",
      category: "Mobile App / Real-time",
      client: "Auction House • Iraq",
      result: "Developed a high-performance real-time auction app with OTP verification and live bidding systems.",
      impact: "Zero-latency real-time bidding.",
      image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1777422323/nrt-portfolio/ynlxrffuhffwgf0zl60v.png",
      color: "from-[#0F172A] to-[#161F33]",
      icon: <Gavel className="w-10 h-10" />
    },
    {
      title: "Autonomous AI Agent",
      category: "Agentic AI / Automation",
      client: "SaaS Startup • Global",
      result: "Deployed an autonomous agent that handles lead qualification and meeting scheduling 24/7.",
      impact: "300% Lead Generation Boost.",
      image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1777422319/nrt-portfolio/gz4oq5ldtbqnas3dfpsn.jpg",
      color: "from-[#8E2DE2] to-[#4A00E0]",
      icon: <Bot className="w-10 h-10" />
    },
    {
      title: "Ghar Jaisa: Food Web",
      category: "On-Demand / Local Delivery",
      client: "Food Tech Startup • Pakistan",
      result: "A hyper-local food delivery platform focusing on home-cooked meals with real-time order tracking.",
      impact: "500+ Daily Active Orders.",
      image: "https://res.cloudinary.com/de4oqb7rz/image/upload/v1777422326/nrt-portfolio/sdbt9yae0i4iorczinon.png",
      color: "from-[#11998E] to-[#38EF7D]",
      icon: <UtensilsCrossed className="w-10 h-10" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#0F172A] overflow-hidden">
      <Helmet>
        <title>Success Stories | Next Revolution Tech</title>
      </Helmet>

      {/* SECTION 1: INTRO - Dark Hero */}
      <section className="pt-32 pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#0F172A] text-white relative overflow-hidden">
        <InteractiveHero3D />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3A5CCC]/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="mx-auto max-w-7xl relative z-10">
           <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3A5CCC] mb-12">Case Studies</div>
           <h1 className="text-5xl sm:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-[1] sm:leading-[0.8] mb-12">
              Technical <br className="hidden sm:block" />
              <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3A5CCC] to-[#27324A]">Success</span> <br className="hidden sm:block" />
              Stories.
           </h1>
           <p className="text-xl sm:text-3xl font-bold text-white/50 leading-tight max-w-3xl">
              We solve complex problems for global partners. Explore our gallery of world-class engineering results.
           </p>
        </div>
      </section>

      {/* Project Grid - VIBRANT & MASSIVE */}
      <section className="py-40 px-4 sm:px-6 lg:px-12 xl:px-24">
         <div className="mx-auto max-w-7xl space-y-48">
            {studies.map((study, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="group relative"
              >
                 <div className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-32 items-center`}>
                    {/* Visual Card */}
                    <div className="w-full lg:w-[60%]">
                       <motion.div 
                          whileHover={{ scale: 1.02 }}
                          className={`relative aspect-[16/10] rounded-3xl sm:rounded-[5rem] bg-gradient-to-br ${study.color} shadow-[0_40px_80px_-20px_rgba(11,27,53,0.3)] p-8 sm:p-20 flex items-center justify-center border border-white/10`}
                       >
                          <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                          <img 
                            src={study.image} 
                            alt={study.title} 
                            className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-1000 shadow-2xl" 
                          />
                          {/* Floating Icon */}
                          <div className="absolute -top-5 -left-5 sm:-top-10 sm:-left-10 w-12 h-12 sm:w-24 sm:h-24 rounded-xl sm:rounded-[2rem] bg-white text-[#0F172A] shadow-2xl flex items-center justify-center border border-black/5">
                             <div className="scale-75 sm:scale-100">{study.icon}</div>
                          </div>
                       </motion.div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-[40%] text-center lg:text-left">
                       <div className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.3em] sm:tracking-[0.6em] text-[#3A5CCC] mb-4 sm:mb-10">{study.category}</div>
                       <h2 className="text-4xl sm:text-7xl xl:text-8xl font-black mb-6 sm:mb-12 tracking-tighter leading-[1.1] sm:leading-[0.9]">{study.title}</h2>
                       <p className="text-lg sm:text-2xl font-bold text-[#0F172A]/60 mb-8 sm:mb-16 leading-relaxed max-w-2xl mx-auto lg:mx-0">{study.result}</p>
                       
                       <div className="bg-[#0F172A]/5 px-4 py-2 rounded-xl border border-black/5 mb-8 w-fit mx-auto lg:mx-0">
                          <div className="text-[9px] font-black uppercase tracking-[0.2em] text-[#3A5CCC] mb-1">Partner</div>
                          <div className="text-sm font-black tracking-tight">{study.client}</div>
                       </div>
                       
                       <div className="flex items-center gap-4 sm:gap-6 p-5 sm:p-8 bg-white rounded-2xl sm:rounded-[3rem] border border-black/5 mb-8 sm:mb-16 shadow-lg group-hover:shadow-2xl transition-all w-fit mx-auto lg:mx-0">
                          <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-[#3A5CCC]/10 flex items-center justify-center text-[#3A5CCC]">
                             <TrendingUp className="w-5 h-5 sm:w-8 sm:h-8" />
                          </div>
                          <div className="text-left">
                             <div className="text-[9px] sm:text-[11px] font-black uppercase tracking-widest text-black/30">Primary Impact</div>
                             <div className="text-xl sm:text-2xl font-black tracking-tighter">{study.impact}</div>
                          </div>
                       </div>

                       <Link to="/contact" className="inline-flex items-center justify-center gap-4 sm:gap-5 bg-[#0F172A] text-white px-8 py-5 sm:px-12 sm:py-6 rounded-xl sm:rounded-[2rem] text-xl sm:text-2xl font-black hover:bg-[#3A5CCC] transition-all group/btn w-full sm:w-fit">
                          Discuss Similar Build
                          <ArrowUpRight className="w-5 h-5 sm:w-7 sm:h-7 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                       </Link>
                    </div>
                 </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Massive Final CTA - Dark */}
      <section className="py-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#080B11] relative overflow-hidden">
         <InteractiveHero3D />
         <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
         <div className="mx-auto max-w-7xl xl:max-w-[1400px] relative z-10">
            <div className="bg-white/[0.02] backdrop-blur-3xl rounded-3xl sm:rounded-[6rem] p-12 sm:p-24 lg:p-48 text-center border border-white/5 shadow-2xl overflow-hidden relative">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3A5CCC]/10 rounded-full blur-[120px] pointer-events-none" />
               <h2 className="text-5xl sm:text-[10rem] font-black text-white leading-[1] sm:leading-[0.8] mb-12 sm:mb-20 relative z-10">
                  Ready to be <br /><span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3A5CCC] to-[#4F7FFF]">Next?</span>
               </h2>
               <div className="flex flex-wrap justify-center gap-12 relative z-10">
                  <Link to="/contact" className="bg-[#3A5CCC] text-white px-12 py-6 sm:px-20 sm:py-10 rounded-2xl sm:rounded-[2.5rem] text-2xl sm:text-4xl font-black shadow-[0_30px_60px_rgba(58,92,204,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-4 sm:gap-6 group w-full sm:w-fit">
                     Start My Project <ArrowRight className="w-7 h-7 sm:w-10 sm:h-10 group-hover:translate-x-2 transition-transform" />
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
