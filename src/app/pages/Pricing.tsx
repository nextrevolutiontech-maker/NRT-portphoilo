import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, MessageSquare, Zap, Clock, ShieldCheck, ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { InteractiveHero3D } from "../components/ui/InteractiveHero3D";

export function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const packages = [
    {
      name: "Starter",
      price: "$1,000",
      period: "/month",
      desc: "Ideal for small ongoing maintenance and routine technical tasks.",
      color: "from-[#6366f1] to-[#a855f7]",
      features: [
        "Unlimited Small Tasks",
        "Basic API Integrations",
        "Dedicated Project Manager",
        "48h Turnaround Time",
        "Weekly Progress Reports"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Performance Pro",
      price: "$1,500",
      period: "/month",
      desc: "Dedicated to speed, security, and technical infrastructure health.",
      color: "from-[#11998E] to-[#38EF7D]",
      features: [
        "Core Web Vitals Boost",
        "Security & Firewall Audit",
        "24/7 Uptime Monitoring",
        "Database Optimization",
        "Server Health Checks"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Growth",
      price: "$2,000",
      period: "/month",
      desc: "Perfect for scaling businesses needing full-stack firepower.",
      color: "from-[#F58220] to-[#FF4D00]",
      features: [
        "Full Stack Development",
        "Custom API & Webhooks",
        "Weekly Strategy Calls",
        "Priority Support Queue",
        "Daily Progress Updates"
      ],
      cta: "Get Started",
      highlight: true
    },
    {
      name: "AI Automation",
      price: "$2,500",
      period: "/month",
      desc: "Specialized in autonomous agents and AI-driven workflows.",
      color: "from-[#8E2DE2] to-[#4A00E0]",
      features: [
        "Custom AI Agent Build",
        "Workflow Automation",
        "LLM Integration (GPT/Claude)",
        "Automated Support Setup",
        "AI-Driven Data Insights"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Scale",
      price: "$3,500",
      period: "/month",
      desc: "Enterprise-grade builds and high-level technical architecture.",
      color: "from-[#0ea5e9] to-[#2563eb]",
      features: [
        "Entire Technical Team",
        "Unlimited Complex Tasks",
        "Architectural Consulting",
        "Fastest 24h Turnaround",
        "Dedicated Senior Developer"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Custom Project",
      price: "Let's Talk",
      period: "",
      desc: "A custom team or fixed-scope build dedicated to your vision.",
      color: "from-[#0B1B35] to-[#1A365D]",
      features: [
        "Fixed Scope Execution",
        "Zero-to-One MVP Build",
        "Legacy Code Migration",
        "Dedicated Sprint Team",
        "Project Manager Assigned"
      ],
      cta: "Book a Call",
      highlight: false
    }
  ];

  const faqs = [
    {
      q: "Is there a contract?",
      a: "No long-term contracts. We work on a month-to-month basis, so you can cancel or pause anytime."
    },
    {
      q: "Can I upgrade/downgrade?",
      a: "Yes, you can change your plan anytime with just 7 days notice."
    },
    {
      q: "What timezone do you work in?",
      a: "We are flexible. Our team adjusts to your timezone (EST, PST, GMT, etc.) to ensure smooth communication."
    },
    {
      q: "How do I get started?",
      a: "The best way to start is with a small paid test task. This allows you to experience our quality without any long-term commitment."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0B1B35] overflow-x-hidden">
      <Helmet>
        <title>Pricing | Next Revolution Tech</title>
        <meta name="description" content="Transparent pricing for dedicated engineering teams. Choose the plan that fits your growth." />
      </Helmet>

      {/* Hero - Dark Hero */}
      <section className="pt-32 pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#0B1B35] text-white relative overflow-hidden">
        <InteractiveHero3D />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F58220]/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="mx-auto max-w-7xl relative z-10 text-center">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F58220] mb-8">Investment Plans</div>
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-10">
            Simple Pricing. <br /><span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] to-[#FF4D00]">Infinite</span> Growth.
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-white/50 max-w-2xl mx-auto leading-relaxed">
            Choose a dedicated developer plan or assemble a custom team. No hiring fees, no overhead, just elite engineering.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 xl:px-24 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-[2rem] p-6 sm:p-8 flex flex-col shadow-xl bg-gradient-to-br ${pkg.color} ${pkg.highlight ? 'scale-105 z-10 border-4 border-white/20' : 'border border-black/5'}`}
            >
              <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                {pkg.highlight && (
                  <div className="bg-white text-[#F58220] rounded-full px-3 py-1 text-[8px] font-black uppercase tracking-widest mb-4 w-fit shadow-xl">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-lg font-black mb-1 text-white uppercase tracking-tighter`}>{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-4 text-white">
                  <span className="text-2xl font-black tracking-tighter">{pkg.price}</span>
                  <span className="text-[10px] font-bold opacity-60">{pkg.period}</span>
                </div>
                <p className="text-[12px] font-bold text-white/70 mb-6 leading-tight line-clamp-2">{pkg.desc}</p>

                <ul className="space-y-2 mb-8 flex-grow">
                  {pkg.features.map((feat, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-white/90">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                      <span className="text-[12px] font-bold leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full py-3.5 rounded-xl text-center font-black text-base transition-all shadow-xl hover:scale-105 ${pkg.highlight ? 'bg-[#0B1B35] text-white' : 'bg-white text-[#0B1B35]'}`}
                >
                  {pkg.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white px-4 sm:px-6 lg:px-8 xl:px-24 border-y border-[#0B1B35]/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F58220] mb-4">Common Questions</div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-[#0B1B35]">Everything you <br /><span className="text-[#F58220] italic font-italic-serif font-normal">need</span> to know</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#F8FAFC] rounded-[2rem] overflow-hidden border border-[#0B1B35]/5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-[#0B1B35]/5 transition-colors"
                >
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0B1B35]">{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-[#0B1B35]/10 transition-transform ${openFaq === i ? 'rotate-180 bg-[#0B1B35] text-white' : ''}`}>
                    {openFaq === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <p className="text-lg font-bold text-[#0B1B35]/60 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-[#060E1B] rounded-[3.5rem] text-center text-white relative overflow-hidden shadow-2xl border border-white/5">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
            <h3 className="text-3xl font-black mb-6 tracking-tighter relative z-10">Still have questions?</h3>
            <p className="text-white/50 text-xl font-bold mb-10 relative z-10">We're here to help. Reach out to us via WhatsApp or Email.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <a href="https://wa.me/923442013217" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl text-lg font-black shadow-xl hover:scale-105 transition-all">WhatsApp Us</a>
              <Link to="/contact" className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl text-lg font-black shadow-xl hover:bg-white hover:text-[#0B1B35] transition-all">Contact Form</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Row */}
      <section className="py-24 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 flex flex-wrap justify-center gap-12 sm:gap-24 opacity-40">
          <div className="text-center">
            <div className="text-3xl font-black tracking-tighter">Month-to-month</div>
            <div className="text-[10px] uppercase font-black tracking-widest mt-1">No long-term contracts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black tracking-tighter">7-Day Notice</div>
            <div className="text-[10px] uppercase font-black tracking-widest mt-1">Cancel or Scale anytime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black tracking-tighter">100% IP</div>
            <div className="text-[10px] uppercase font-black tracking-widest mt-1">You own all the code</div>
          </div>
        </div>
      </section>
    </div>
  );
}
