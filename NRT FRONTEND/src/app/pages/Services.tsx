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
      title: "eCommerce Tech",
      desc: "Fix your store issues, improve speed, and keep everything running smoothly without interruptions.",
      features: ["Bug fixing", "Speed optimization", "Theme customization"],
      color: "from-[#27324A] to-[#27324A]",
      accent: "bg-white/10"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "API Integrations",
      desc: "Connect your systems, fix broken APIs, and automate processes so your business runs without delays.",
      features: ["Custom API builds", "Stripe / PayPal setup", "Webhook automation"],
      color: "from-[#0057FF] to-[#9900FF]",
      accent: "bg-white/10"
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Automation & Systems",
      desc: "Reduce manual work and build smart systems that save time and scale your operations.",
      features: ["Workflow automation", "Backend management", "System health checks"],
      color: "from-[#27324A] to-[#3A5CCC]",
      accent: "bg-white/10"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Dev",
      desc: "Native and cross-platform mobile apps that provide a seamless experience for your users.",
      features: ["React Native", "Flutter builds", "App Store deployment"],
      color: "from-[#00D2FF] to-[#3a7bd5]",
      accent: "bg-white/10"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "UI/UX Design",
      desc: "Modern, high-converting designs that make your brand stand out and keep users engaged.",
      features: ["Figma prototypes", "User flow mapping", "Responsive design"],
      color: "from-[#9900FF] to-[#FF00FF]",
      accent: "bg-white/10"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "DevOps & Cloud",
      desc: "Secure, scalable cloud infrastructure that ensures your business stays online 24/7.",
      features: ["AWS / Azure setup", "Server maintenance", "Security auditing"],
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
        description="Comprehensive technical services including eCommerce development, API integrations, and AI automation. We provide dedicated engineering support for growing brands."
      />

      {/* SECTION 1: INTRO - Dark Hero */}
      <section className="pt-32 pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#0F172A] text-white relative overflow-hidden">
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
               Solutions That <br />
               <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3A5CCC] to-[#27324A]">Scale</span> Your <br />
               Business.
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-white/50 leading-tight max-w-2xl">
              We solve real technical problems for growing businesses — so you don’t have to manage multiple developers or deal with constant issues.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: SERVICES CARDS - VIBRANT & COMPACT */}
      <ScrollReveal direction="up">
        <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24 relative z-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10, scale: 1.01 }}
                  className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${service.color} p-6 sm:p-8 shadow-xl border border-white/10 group flex flex-col justify-between`}
                >
                  <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] pointer-events-none" />
                  <div className="relative z-10">
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
               <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-[#0F172A] leading-tight">Why Growing Brands <br />Partner With Us</h2>
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
                 Choose the Right Setup <br />for Your Business
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
