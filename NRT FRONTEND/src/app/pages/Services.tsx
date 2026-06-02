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
  Layers
} from "lucide-react";
import { motion } from "motion/react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { InteractiveHero3D } from "../components/ui/InteractiveHero3D";

export function Services() {
  const services = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "ERP & Business Automation",
      desc: "Say goodbye to manual stock registers and inventory leaks. We build customized ERPs, POS systems, and admin portals that run your operations in real-time.",
      features: ["Custom ERP dashboards", "Inventory reconciliations", "Multi-warehouse sync"],
      image: "/assets/projects/babybloom/shop.png",
      color: "from-[#27324A] to-[#27324A]",
      accent: "bg-white/10"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Enterprise Integrations",
      desc: "Connect your payment gateways, local FBR tax APIs, CRM pipelines, and shipping couriers with stable fallback error handling.",
      features: ["Payment gateways", "FBR Tax API integrations", "Courier tracking sync"],
      image: "/assets/services/erp-dashboard.png",
      color: "from-[#0057FF] to-[#9900FF]",
      accent: "bg-white/10"
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "AI Workflow Automation",
      desc: "Automate repetitive daily tasks. We build intelligent agentic LLM flows that qualify website leads, process emails, and sync logs 24/7.",
      features: ["AI email sorting", "Lead qualification flows", "Autonomous agent systems"],
      image: "/agentic_ai_dashboard.png",
      color: "from-[#27324A] to-[#3A5CCC]",
      accent: "bg-white/10"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Custom SaaS Development",
      desc: "Turn your business idea into a market-ready web or mobile SaaS product. We manage the full cycle from database schema to responsive frontend.",
      features: ["Full-stack databases", "Dynamic admin consoles", "React Native & Flutter"],
      image: "/iraqbid-5.png",
      color: "from-[#00D2FF] to-[#3a7bd5]",
      accent: "bg-white/10"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "UI/UX Product Design",
      desc: "Modern, high-converting product designs engineered to maximize sales conversion and user operation speed.",
      features: ["Figma prototypes", "Interactive mockups", "UX friction audits"],
      image: "/babybloom-home.png",
      color: "from-[#9900FF] to-[#FF00FF]",
      accent: "bg-white/10"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "DevOps & Edge Scale",
      desc: "Secure, scalable cloud infrastructure that ensures your business systems stay online 24/7 with zero downtime.",
      features: ["CI/CD deploy pipelines", "Security firewall audits", "Database backup clocks"],
      image: "/pulse-admin.png",
      color: "from-[#11998E] to-[#38EF7D]",
      accent: "bg-white/10"
    }
  ];

  const whyChooseUs = [
    { icon: <Users className="w-6 h-6" />, text: "No need to hire multiple developers", color: "from-[#0057FF] to-[#00A3FF]" },
    { icon: <Clock className="w-6 h-6" />, text: "Fast turnaround on tasks", color: "from-[#3A5CCC] to-[#27324A]" },
    { icon: <Target className="w-6 h-6" />, text: "Long-term technical partner", color: "from-[#6366f1] to-[#a855f7]" },
    { icon: <ShieldCheck className="w-6 h-6" />, text: "Reliable and consistent support", color: "from-[#11998E] to-[#38EF7D]" }
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#0F172A] overflow-x-hidden">
      <SEO 
        title="Our Services" 
        description="Website, eCommerce, API, automation, mobile app, UI/UX, and cloud services from Next Revolution Tech in Karachi for businesses that need reliable delivery."
      />

      {/* SECTION 1: INTRO - Dark Hero */}
      <section className="pt-28 sm:pt-32 pb-28 sm:pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[radial-gradient(circle_at_18%_16%,rgba(20,184,166,0.16),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(58,92,204,0.18),transparent_34%),linear-gradient(135deg,#061014_0%,#0B1120_50%,#111827_100%)] text-white relative overflow-hidden">
        <InteractiveHero3D />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3A5CCC]/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-4xl"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3A5CCC] mb-8">What We Do</div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-10">
               Technical work that <br />
               <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#7DD3FC] to-[#3A5CCC]">actually</span> keeps <br />
               moving.
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-white/50 leading-tight max-w-2xl">
              We help businesses repair broken flows, improve speed, connect tools, and ship new features without juggling a different developer for every task.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: SERVICES CARDS - VIBRANT & COMPACT */}
      <ScrollReveal direction="up">
        <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24 relative z-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10, scale: 1.01 }}
                  className={`relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br ${service.color} p-5 sm:p-8 shadow-xl border border-white/10 group flex flex-col justify-between`}
                >
                  <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] pointer-events-none" />
                  <div className="relative z-10">
                    <div className="mb-6 overflow-hidden rounded-2xl border border-white/15 bg-black/20 shadow-2xl [transform:rotateX(4deg)]">
                      <img src={service.image} alt={service.title} className="aspect-[16/10] w-full object-cover opacity-90 transition duration-700 group-hover:scale-105" />
                    </div>
                    <div className={`w-12 h-12 ${service.accent} backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-5 border border-white/20`}>
                      {service.icon}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black mb-3 tracking-tighter leading-tight text-white">{service.title}</h2>
                    <p className="text-white/70 text-sm font-bold mb-6 leading-relaxed">
                      {service.desc}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feat, fi) => (
                        <li key={fi} className="flex items-center gap-2.5 text-[9px] font-black uppercase tracking-widest text-white/60">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contact" className="relative z-10 inline-flex items-center justify-center w-full bg-white text-[#0F172A] py-3.5 rounded-xl text-base font-black hover:scale-105 transition-all group">
                    Get Started <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 3: WHY BUSINESSES CHOOSE US - Light */}
      <ScrollReveal direction="down">
        <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white border-y border-[#0F172A]/5">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-20">
               <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3A5CCC] mb-6">Values</div>
               <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-[#0F172A] leading-tight">Why clients keep <br />coming back</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`flex flex-col gap-6 p-8 rounded-[2.5rem] bg-gradient-to-br ${item.color} shadow-lg group transition-all border border-white/10 overflow-hidden relative`}
                >
                  <div className="absolute inset-0 opacity-5 bg-[url('/noise.svg')] pointer-events-none" />
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#0F172A] shadow-sm relative z-10">
                    {item.icon}
                  </div>
                  <span className="text-xl font-black tracking-tight text-white relative z-10 leading-tight">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 4: CTA (CHOOSE SETUP) - Light / Clean */}
      <ScrollReveal direction="up">
        <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24 text-center bg-transparent relative overflow-hidden border-t border-[#0F172A]/5">
           <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
           <div className="mx-auto max-w-4xl relative z-10">
              <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-[#0F172A] leading-tight mb-16">
                 Choose the setup that <br />matches the job
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                 <Link to="/pricing" className="bg-[#3A5CCC] text-white px-12 py-6 rounded-2xl text-xl font-black shadow-2xl hover:scale-105 transition-all">
                    View Pricing Plans
                 </Link>
                 <Link to="/contact?type=test" className="bg-white border border-[#0F172A]/10 text-[#0F172A] px-12 py-6 rounded-2xl text-xl font-black hover:bg-[#0F172A] hover:text-white transition-all">
                    Start a Small Paid Test
                 </Link>
              </div>
           </div>
        </section>
      </ScrollReveal>

      <PreFooterCTA 
        headline="Ready to scale your tech operations?"
        subtext="Our dedicated engineering team is standing by to handle your development, integrations, and ongoing improvements."
      />
    </div>
  );
}
