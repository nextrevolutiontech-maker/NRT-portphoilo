import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, MessageSquare, Zap, Clock, ShieldCheck, ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { InteractiveHero3D } from "../components/ui/InteractiveHero3D";
import { SEO } from "../components/SEO";

export function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'weekly'>('monthly');

  const packages = [
    {
      name: "Starter",
      price: billingCycle === 'monthly' ? "$1,000" : "$299",
      period: billingCycle === 'monthly' ? "/month" : "/week",
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
      price: billingCycle === 'monthly' ? "$1,500" : "$449",
      period: billingCycle === 'monthly' ? "/month" : "/week",
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
      price: billingCycle === 'monthly' ? "$2,000" : "$599",
      period: billingCycle === 'monthly' ? "/month" : "/week",
      desc: "Perfect for scaling businesses needing full-stack firepower.",
      color: "from-[#3A5CCC] to-[#27324A]",
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
      price: billingCycle === 'monthly' ? "$2,500" : "$749",
      period: billingCycle === 'monthly' ? "/month" : "/week",
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
      price: billingCycle === 'monthly' ? "$3,500" : "$999",
      period: billingCycle === 'monthly' ? "/month" : "/week",
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
      color: "bg-white border-2 border-slate-900",
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
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SEO
        title="Pricing"
        description="Transparent weekly and monthly pricing for website, eCommerce, API, automation, and dedicated engineering support from Next Revolution Tech."
      />

      {/* Hero - Dark Hero */}
      <section className="pt-32 pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-slate-900 relative overflow-hidden">
        <InteractiveHero3D />
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="mx-auto max-w-7xl relative z-10 text-center">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-8">Investment Plans</div>
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-10">
            Pricing that fits <br /><span className="text-orange-600">real</span> workloads.
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-slate-900/50 max-w-2xl mx-auto leading-relaxed">
            Start with a small task, choose weekly support, or build a custom team around your website, app, API, or automation work.
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12 bg-white border-b border-slate-300">
        <div className="mx-auto max-w-7xl px-4 flex flex-col items-center">
          <div className="bg-white p-1.5 rounded-2xl flex items-center shadow-lg border border-slate-300">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${
                billingCycle === 'monthly' 
                ? "bg-orange-600 text-white shadow-lg" 
                : "text-slate-400 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('weekly')}
              className={`px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${
                billingCycle === 'weekly' 
                ? "bg-orange-600 text-white shadow-lg" 
                : "text-slate-400 hover:text-slate-900"
              }`}
            >
              Weekly
            </button>
          </div>
          <div className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">
            {billingCycle === 'monthly' ? "Save 15% with monthly billing" : "Short-term commitment"}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 xl:px-24 bg-white">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-[2rem] p-6 sm:p-8 flex flex-col shadow-xl bg-gradient-to-br ${pkg.color} ${pkg.highlight ? 'scale-105 z-10 border-4 border-black/20' : 'border border-slate-300'}`}
            >
              <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                {pkg.highlight && (
                  <div className="bg-white text-orange-600 rounded-full px-3 py-1 text-[8px] font-black uppercase tracking-widest mb-4 w-fit shadow-xl">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-lg font-black mb-1 text-slate-900 uppercase tracking-tighter`}>{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-4 text-slate-900">
                  <span className="text-2xl font-black tracking-tighter">{pkg.price}</span>
                  <span className="text-[10px] font-bold opacity-60">{pkg.period}</span>
                </div>
                <p className="text-[12px] font-bold text-slate-900/70 mb-6 leading-tight line-clamp-2">{pkg.desc}</p>

                <ul className="space-y-2 mb-8 flex-grow">
                  {pkg.features.map((feat, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-slate-900/90">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                      <span className="text-[12px] font-bold leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full py-3.5 rounded-xl text-center font-black text-base transition-all shadow-xl hover:scale-105 ${pkg.highlight ? 'bg-white text-slate-900' : 'bg-white text-slate-900'}`}
                >
                  {pkg.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white px-4 sm:px-6 lg:px-8 xl:px-24 border-y border-slate-300">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4">Common Questions</div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-slate-900">Everything you <br /><span className="text-orange-600">need</span> to know</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-[2rem] overflow-hidden border border-slate-300">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-slate-300 transition-transform ${openFaq === i ? 'rotate-180 bg-white text-slate-900' : ''}`}>
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
                      <p className="text-lg font-bold text-slate-900/60 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-white rounded-[3.5rem] text-center text-slate-900 relative overflow-hidden shadow-2xl border border-slate-300">
            <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
            <h3 className="text-3xl font-black mb-6 tracking-tighter relative z-10">Still have questions?</h3>
            <p className="text-slate-900/50 text-xl font-bold mb-10 relative z-10">We're here to help. Reach out to us via WhatsApp or Email.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <a href="https://wa.me/923442013217" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-slate-900 px-10 py-5 rounded-2xl text-lg font-black shadow-xl hover:scale-105 transition-all">WhatsApp Us</a>
              <Link to="/contact" className="bg-white/5 border border-slate-300 text-slate-900 px-10 py-5 rounded-2xl text-lg font-black shadow-xl hover:bg-white hover:text-slate-900 transition-all">Contact Form</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Row */}
      <section className="py-24 border-t border-slate-300">
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
