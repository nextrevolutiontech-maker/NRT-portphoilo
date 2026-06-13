import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import { 
  ShoppingCart, 
  Zap, 
  Workflow, 
  CheckCircle2, 
  ArrowRight,
  Target,
  Clock,
  Users,
  ShieldCheck,
  Smartphone,
  Layers,
  Settings,
  Globe,
  Palette,
  Server
} from "lucide-react";
import { motion } from "motion/react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { InteractiveHero3D } from "../components/ui/InteractiveHero3D";

export function Services() {
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "ERP Systems",
      desc: "Centralize operations, eliminate spreadsheet chaos, improve reporting and gain complete visibility across your business.",
      outcomes: ["Real-time visibility", "Faster decisions", "Improved operational control"],
      image: "/assets/services/erp-dashboard.png",
      color: "from-[#27324A] to-[#27324A]",
      accent: "bg-white/10"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Automation",
      desc: "Automate repetitive work, approvals, reporting and workflows using AI-powered systems.",
      outcomes: ["Reduced manual work", "Higher productivity", "Faster execution"],
      image: "/agentic_ai_dashboard.png",
      color: "from-[#0057FF] to-[#9900FF]",
      accent: "bg-white/10"
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Custom Business Software",
      desc: "Build software around your business processes instead of forcing your team to adapt to generic tools.",
      outcomes: ["Better efficiency", "Scalable operations", "Process optimization"],
      image: "/pulse-admin.png",
      color: "from-[#11998E] to-[#38EF7D]",
      accent: "bg-white/10"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Technology Teams",
      desc: "Extend your internal capabilities with dedicated developers, engineers and technology specialists.",
      outcomes: ["Faster delivery", "Flexible scaling", "Long-term support"],
      image: "/iraqbid-5.png",
      color: "from-[#3A5CCC] to-[#27324A]",
      accent: "bg-white/10"
    }
  ];

  const whyChooseUs = [
    { icon: <Target className="w-6 h-6" />, text: "Operational Efficiency", color: "from-[#0057FF] to-[#00A3FF]" },
    { icon: <Zap className="w-6 h-6" />, text: "Business Automation", color: "from-[#3A5CCC] to-[#27324A]" },
    { icon: <Settings className="w-6 h-6" />, text: "ERP Expertise", color: "from-[#6366f1] to-[#a855f7]" },
    { icon: <Users className="w-6 h-6" />, text: "Dedicated Teams", color: "from-[#11998E] to-[#38EF7D]" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SEO 
        title="Our Services" 
        description="Website, eCommerce, API, automation, mobile app, UI/UX, and cloud services from Next Revolution Tech in Karachi for businesses that need reliable delivery."
      />

      {/* SECTION 1: INTRO - Dark Hero */}
      <section className="pt-28 sm:pt-32 pb-28 sm:pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-[#0f172a] relative overflow-hidden">
        <InteractiveHero3D />
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-4xl"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-8">Solutions</div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-10">
               Business Systems That <br />
               <span className="text-orange-600">Drive Growth</span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-slate-900/50 leading-tight max-w-2xl mb-10">
              From ERP systems and AI automation to dedicated technology teams, we help businesses streamline operations, improve visibility and scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
               <Link to="/contact" className="btn-primary-nrt px-10 py-4 text-lg">
                  Book Strategy Call <ArrowRight className="w-5 h-5 ml-3" />
               </Link>
               <Link to="/portfolio" className="btn-secondary-nrt px-10 py-4 text-lg text-slate-900">
                  View Case Studies <ArrowRight className="w-5 h-5 ml-3" />
               </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: SERVICES CARDS - VIBRANT & COMPACT */}
      <ScrollReveal direction="up">
        <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24 relative z-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10, scale: 1.01 }}
                  className={`relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br ${service.color} p-5 sm:p-8 shadow-xl border border-slate-300 group flex flex-col justify-between`}
                >
                  <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] pointer-events-none" />
                  <div className="relative z-10">
                    <div className="mb-6 overflow-hidden rounded-2xl border border-black/15 bg-black/20 shadow-2xl [transform:rotateX(4deg)] hidden sm:block">
                      <img src={service.image} alt={service.title} className="aspect-[21/9] w-full object-cover opacity-90 transition duration-700 group-hover:scale-105" />
                    </div>
                    <div className={`w-12 h-12 ${service.accent} backdrop-blur-md rounded-xl flex items-center justify-center text-slate-900 mb-5 border border-black/20`}>
                      {service.icon}
                    </div>
                    <h2 className="text-xl sm:text-3xl font-black mb-3 tracking-tighter leading-tight text-slate-900">{service.title}</h2>
                    <p className="text-slate-900/70 text-sm font-bold mb-6 leading-relaxed">
                      {service.desc}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.outcomes.map((outcome, fi) => (
                        <li key={fi} className="flex items-center gap-2.5 text-[11px] font-black uppercase tracking-widest text-slate-900/90">
                          <CheckCircle2 className="w-4 h-4 text-slate-900" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contact" className="relative z-10 inline-flex items-center justify-center w-full bg-white text-slate-900 py-3.5 rounded-xl text-base font-black hover:scale-105 transition-all group">
                    Get Started <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SUPPORTING CAPABILITIES */}
      <ScrollReveal direction="up">
        <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white relative z-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16">
               <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4">Under the Hood</div>
               <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900 leading-tight">
                  Supporting Capabilities
               </h2>
               <p className="text-slate-900/60 mt-4 max-w-2xl text-lg font-medium">
                  The technical foundation that powers our business solutions. We maintain deep expertise in core development domains to deliver comprehensive results.
               </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Web Development", icon: <Globe className="w-6 h-6 text-orange-600" /> },
                { title: "Mobile Apps", icon: <Smartphone className="w-6 h-6 text-slate-900" /> },
                { title: "UI/UX Design", icon: <Palette className="w-6 h-6 text-[#9900FF]" /> },
                { title: "DevOps & Cloud", icon: <Server className="w-6 h-6 text-[#11998E]" /> }
              ].map((cap, i) => (
                <div key={i} className="flex flex-col items-center p-8 rounded-3xl bg-white border border-slate-300 hover:shadow-xl transition-all text-center group">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {cap.icon}
                  </div>
                  <h3 className="font-bold text-slate-900">{cap.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* INDUSTRIES WE SERVE */}
      <ScrollReveal direction="up">
        <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-slate-900/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
          
          <div className="mx-auto max-w-7xl relative z-10">
            <div className="mb-16 text-center">
               <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 mb-4">Global Reach</div>
               <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-slate-900 leading-tight">
                  Industries We Transform
               </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                "Healthcare", "E-Commerce", "Real Estate", "Logistics", "SaaS / Tech"
              ].map((industry, i) => (
                <div key={i} className="py-6 px-4 rounded-2xl border border-slate-300 bg-white/5 backdrop-blur-md text-center font-bold text-slate-600 hover:text-slate-900 hover:bg-white/10 transition-colors">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 3: WHY BUSINESSES CHOOSE US - Light */}
      <ScrollReveal direction="down">
        <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white border-y border-slate-300">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-20">
               <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6">Values</div>
               <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-slate-900 leading-tight">Why clients keep <br />coming back</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`flex flex-col gap-6 p-8 rounded-[2.5rem] bg-gradient-to-br ${item.color} shadow-lg group transition-all border border-slate-300 overflow-hidden relative`}
                >
                  <div className="absolute inset-0 opacity-5 bg-[url('/noise.svg')] pointer-events-none" />
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-slate-900 shadow-sm relative z-10">
                    {item.icon}
                  </div>
                  <span className="text-xl font-black tracking-tight text-slate-900 relative z-10 leading-tight">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 4: CTA (STRATEGY) - Light / Clean */}
      <ScrollReveal direction="up">
        <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24 text-center bg-transparent relative overflow-hidden border-t border-slate-300">
           <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
           <div className="mx-auto max-w-4xl relative z-10">
              <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-slate-900 leading-tight mb-8">
                 Ready to transform <br />your operations?
              </h2>
              <p className="text-xl font-medium text-slate-900/60 max-w-2xl mx-auto mb-16">
                 Let's discuss how ERP systems, AI automation, or a dedicated technology team can accelerate your business growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <Link to="/contact" className="bg-orange-600 text-white px-12 py-5 rounded-2xl text-xl font-black shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                    Book Strategy Call <ArrowRight className="w-5 h-5" />
                 </Link>
              </div>
           </div>
        </section>
      </ScrollReveal>

      <PreFooterCTA 
        headline="Scale without the operational chaos."
        subtext="Join the businesses that rely on Next Revolution Tech for their core enterprise systems and automation."
      />
    </div>
  );
}
