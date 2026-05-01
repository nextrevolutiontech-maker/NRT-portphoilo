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
  ShieldCheck
} from "lucide-react";
import { motion } from "motion/react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { ScrollReveal } from "../components/ui/ScrollReveal";

export function Services() {
  const services = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "eCommerce Tech",
      desc: "Fix your store issues, improve speed, and keep everything running smoothly without interruptions.",
      features: ["Bug fixing", "Speed optimization", "Theme customization"],
      color: "from-[#FFD600] to-[#FF9900]",
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
      color: "from-[#FF4D00] to-[#FF005C]",
      accent: "bg-white/10"
    }
  ];

  const whyChooseUs = [
    { icon: <Users className="w-6 h-6" />, text: "No need to hire multiple developers", color: "from-[#0057FF] to-[#00A3FF]" },
    { icon: <Clock className="w-6 h-6" />, text: "Fast turnaround on tasks", color: "from-[#F58220] to-[#FF4D00]" },
    { icon: <Target className="w-6 h-6" />, text: "Long-term technical partner", color: "from-[#6366f1] to-[#a855f7]" },
    { icon: <ShieldCheck className="w-6 h-6" />, text: "Reliable and consistent support", color: "from-[#11998E] to-[#38EF7D]" }
  ];

  return (
    <div className="pt-20 min-h-screen bg-[#F8F9FA] text-[#0B1B35] overflow-x-hidden">
      <SEO 
        title="Our Services" 
        description="Comprehensive technical services including eCommerce development, API integrations, and AI automation. We provide dedicated engineering support for growing brands."
      />

      {/* SECTION 1: INTRO */}
      <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F58220]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] sm:leading-[0.85] mb-8">
               What We <span className="text-[#F58220] italic font-italic-serif font-normal">Handle</span> <br />For You.
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-[#0B1B35]/50 leading-tight max-w-2xl">
              We solve real technical problems for growing businesses — so you don’t have to manage multiple developers or deal with constant issues.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: SERVICES CARDS - VIBRANT & COMPACT */}
      <ScrollReveal direction="up">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${service.color} p-8 sm:p-10 shadow-xl border border-white/10 group flex flex-col justify-between`}
                >
                  <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] pointer-events-none" />
                  <div className="relative z-10">
                    <div className={`w-14 h-14 ${service.accent} backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 border border-white/20`}>
                      {service.icon}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black mb-4 tracking-tighter leading-tight text-white">{service.title}</h2>
                    <p className="text-white/70 text-base font-bold mb-8 leading-relaxed">
                      {service.desc}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feat, fi) => (
                        <li key={fi} className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-widest text-white/60">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contact" className="relative z-10 inline-flex items-center justify-center w-full bg-white text-[#0B1B35] py-4 rounded-xl text-lg font-black hover:scale-105 transition-all group">
                    Get Started <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 3: WHY BUSINESSES CHOOSE US - VIBRANT */}
      <ScrollReveal direction="down">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-black/5">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4 text-[#0B1B35]">Why Businesses Choose Us</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg group transition-all border border-white/10 overflow-hidden relative`}
                >
                  <div className="absolute inset-0 opacity-5 bg-[url('/noise.svg')] pointer-events-none" />
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#0B1B35] shadow-sm relative z-10">
                    {item.icon}
                  </div>
                  <span className="text-base font-black tracking-tight text-white relative z-10 leading-tight">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 4: CTA (CHOOSE SETUP) */}
      <ScrollReveal direction="up">
        <section className="py-24 px-4 sm:px-6 lg:px-8 text-center bg-[#F8F9FA] relative">
           <div className="mx-auto max-w-4xl">
              <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-[#0B1B35] leading-tight mb-12">
                 Choose the Right Setup <br />for Your Business
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <Link to="/estimator" className="bg-[#0B1B35] text-white px-12 py-5 rounded-2xl text-xl font-black shadow-xl hover:scale-105 transition-all">
                    View Pricing
                 </Link>
                 <Link to="/contact?type=test" className="bg-white border-2 border-[#0B1B35] text-[#0B1B35] px-12 py-5 rounded-2xl text-xl font-black hover:bg-[#0B1B35] hover:text-white transition-all">
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
