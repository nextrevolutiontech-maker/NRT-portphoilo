import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, MessageSquare, Zap, Clock, ShieldCheck, ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

export function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const packages = [
    {
      name: "Starter",
      price: "$1,000",
      period: "/month",
      desc: "For small ongoing needs and routine maintenance.",
      color: "from-[#6366f1] to-[#a855f7]",
      features: [
        "1 Dedicated Junior Developer",
        "Up to 40 hours/week",
        "eCommerce / API / Web tasks",
        "Weekly progress reports",
        "Email support"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Growth",
      price: "$2,000",
      period: "/month",
      desc: "Perfect for scaling businesses needing more firepower.",
      color: "from-[#F58220] to-[#FF4D00]",
      features: [
        "1 Dedicated Mid-Level Developer",
        "Up to 40 hours/week",
        "Complex builds & integrations",
        "Daily progress updates",
        "Priority email + WhatsApp support"
      ],
      cta: "Get Started",
      highlight: true
    },
    {
      name: "Scale",
      price: "$3,500",
      period: "/month",
      desc: "Enterprise-grade builds and high-level architecture.",
      color: "from-[#0ea5e9] to-[#2563eb]",
      features: [
        "1 Dedicated Senior Developer",
        "Up to 40 hours/week",
        "Architecture, AI, enterprise builds",
        "Real-time communication",
        "Dedicated Slack + WhatsApp",
        "Monthly strategy call"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Custom Team",
      price: "Let's Talk",
      period: "",
      desc: "A full team of experts dedicated to your vision.",
      color: "from-[#0B1B35] to-[#1A365D]",
      features: [
        "Multiple developers",
        "Full team under one roof",
        "Custom workflow",
        "Project manager assigned",
        "Daily stand-ups"
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
    <div className="pt-20 min-h-screen bg-[#F8F9FA] text-[#0B1B35] overflow-x-hidden">
      <Helmet>
        <title>Pricing | Next Revolution Tech</title>
        <meta name="description" content="Transparent pricing for dedicated engineering teams. Choose the plan that fits your growth." />
      </Helmet>

      {/* Hero */}
      <section className="pt-12 pb-24 px-4 sm:px-6 lg:px-12 xl:px-24 text-center">
        <div className="mx-auto max-w-5xl">
           <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F58220] mb-6">Investment Plans</div>
           <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-[1] sm:leading-[0.85] mb-10">
              Simple Pricing. <br /><span className="text-[#F58220] italic font-italic-serif font-normal">Infinite</span> Growth.
           </h1>
           <p className="text-xl sm:text-2xl font-bold text-[#0B1B35]/50 max-w-2xl mx-auto leading-relaxed">
              Choose a dedicated developer plan or assemble a custom team. No hiring fees, no overhead, just elite engineering.
           </p>
        </div>
      </section>

      {/* Packages */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8 xl:px-24">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {packages.map((pkg, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               whileHover={{ y: -10 }}
               className={`relative rounded-[3rem] p-10 sm:p-12 flex flex-col shadow-2xl bg-gradient-to-br ${pkg.color} ${pkg.highlight ? 'scale-105 z-10 border-4 border-white/20' : 'border border-black/5'}`}
             >
                <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full">
                   {pkg.highlight && (
                     <div className="bg-white text-[#F58220] rounded-full px-5 py-1.5 text-[10px] font-black uppercase tracking-widest mb-6 w-fit shadow-xl">
                        Most Popular
                     </div>
                   )}
                   <h3 className={`text-2xl font-black mb-1 text-white`}>{pkg.name}</h3>
                   <div className="flex items-baseline gap-1 mb-6 text-white">
                      <span className="text-4xl font-black tracking-tighter">{pkg.price}</span>
                      <span className="text-sm font-bold opacity-60">{pkg.period}</span>
                   </div>
                   <p className="text-base font-bold text-white/70 mb-10 leading-snug">{pkg.desc}</p>
                   
                   <ul className="space-y-4 mb-12 flex-grow">
                      {pkg.features.map((feat, fi) => (
                        <li key={fi} className="flex items-start gap-3 text-white/90">
                           <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                           <span className="text-sm font-bold leading-tight">{feat}</span>
                        </li>
                      ))}
                   </ul>

                   <Link 
                     to="/contact" 
                     className={`block w-full py-5 rounded-2xl text-center font-black text-xl transition-all shadow-xl hover:scale-105 ${pkg.highlight ? 'bg-[#0B1B35] text-white' : 'bg-white text-[#0B1B35]'}`}
                   >
                      {pkg.cta}
                   </Link>
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white px-4 sm:px-6 lg:px-8 xl:px-24">
         <div className="mx-auto max-w-4xl">
            <div className="text-center mb-20">
               <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F58220] mb-4">Common Questions</div>
               <h2 className="text-4xl sm:text-6xl font-black tracking-tighter">Everything you <br /><span className="text-[#F58220] italic font-italic-serif font-normal">need</span> to know</h2>
            </div>

            <div className="space-y-4">
               {faqs.map((faq, i) => (
                 <div key={i} className="bg-[#F8F9FA] rounded-[2rem] overflow-hidden border border-black/5">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full p-8 flex items-center justify-between text-left hover:bg-black/5 transition-colors"
                    >
                       <span className="text-xl sm:text-2xl font-black tracking-tight">{faq.q}</span>
                       <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-black/10 transition-transform ${openFaq === i ? 'rotate-180 bg-[#0B1B35] text-white' : ''}`}>
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

            <div className="mt-20 p-12 bg-[#0B1B35] rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] pointer-events-none" />
               <h3 className="text-3xl font-black mb-6 tracking-tighter relative z-10">Still have questions?</h3>
               <p className="text-white/50 text-xl font-bold mb-10 relative z-10">We're here to help. Reach out to us via WhatsApp or Email.</p>
               <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                  <a href="https://wa.me/923442013217" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl text-lg font-black shadow-xl hover:scale-105 transition-all">WhatsApp Us</a>
                  <Link to="/contact" className="bg-white text-[#0B1B35] px-10 py-5 rounded-2xl text-lg font-black shadow-xl hover:scale-105 transition-all">Contact Form</Link>
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
