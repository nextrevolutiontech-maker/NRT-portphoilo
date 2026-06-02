import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Search, Map, FileCode, CheckCircle2, ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { InteractiveHero3D } from "../components/ui/InteractiveHero3D";

export function DiscoveryFramework() {
  const steps = [
    {
      num: "Phase 1",
      title: "Technical Audit & Deep Dive",
      desc: "We analyze your existing architecture, database schemas, and API constraints. We identify performance bottlenecks and technical debt before writing any code.",
      icon: <Search className="w-8 h-8" />,
      color: "from-[#0057FF] to-[#00A3FF]"
    },
    {
      num: "Phase 2",
      title: "Requirements Mapping",
      desc: "We translate your business objectives into strict technical requirements, defining the user flows, edge cases, and compliance constraints.",
      icon: <Map className="w-8 h-8" />,
      color: "from-[#8E2DE2] to-[#4A00E0]"
    },
    {
      num: "Phase 3",
      title: "Architecture Design",
      desc: "We design the new system architecture, selecting the right stack, database models, and cloud infrastructure required to scale securely.",
      icon: <FileCode className="w-8 h-8" />,
      color: "from-[#11998E] to-[#38EF7D]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#0F172A] overflow-hidden">
      <SEO
        title="Discovery Framework | NRT"
        description="Learn how Next Revolution Tech audits legacy systems and designs scalable architectures using our proprietary 3-phase discovery framework."
      />

      <section className="pt-32 pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#0F172A] text-white relative overflow-hidden">
        <InteractiveHero3D />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
        
        <div className="mx-auto max-w-7xl relative z-10 text-center">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Enterprise Methodology</span>
           </div>
           <h1 className="text-5xl sm:text-[7rem] lg:text-[9rem] font-black tracking-tighter leading-[1] sm:leading-[0.8] mb-10">
              The Discovery <br />
              <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3A5CCC] to-[#4F7FFF]">Framework.</span>
           </h1>
           <p className="text-xl sm:text-2xl font-bold text-white/50 leading-relaxed max-w-3xl mx-auto">
              We never guess. We audit, map, and architect before we build, ensuring your enterprise system is deployed without friction.
           </p>
        </div>
      </section>

      <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24">
         <div className="mx-auto max-w-7xl space-y-16">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] p-10 sm:p-16 border border-black/5 shadow-xl relative overflow-hidden group"
              >
                 <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${step.color} opacity-5 blur-[80px] group-hover:opacity-10 transition-opacity duration-1000`} />
                 
                 <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
                    <div className="lg:col-span-4">
                       <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3A5CCC] mb-4">{step.num}</div>
                       <h2 className="text-4xl font-black tracking-tighter text-[#0F172A] leading-tight mb-6">{step.title}</h2>
                       <div className="w-16 h-16 rounded-2xl bg-[#F3F4F6] flex items-center justify-center text-[#3A5CCC] border border-black/5">
                          {step.icon}
                       </div>
                    </div>
                    <div className="lg:col-span-8">
                       <p className="text-xl sm:text-2xl font-semibold text-[#0F172A]/70 leading-relaxed border-l-4 border-[#3A5CCC] pl-8">
                          {step.desc}
                       </p>
                    </div>
                 </div>
              </motion.div>
            ))}
         </div>
      </section>

      <section className="py-32 px-4 bg-[#080B11] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] bg-[url('/noise.svg')]" />
        <div className="relative z-10 max-w-4xl mx-auto">
           <h2 className="text-4xl sm:text-6xl font-black mb-8 tracking-tighter">Ready for a Technical Audit?</h2>
           <p className="text-xl text-white/50 mb-12">Let's discuss your current infrastructure and apply our discovery framework to your next big project.</p>
           <Link to="/contact" className="inline-flex items-center gap-4 bg-[#3A5CCC] text-white px-10 py-5 rounded-2xl text-xl font-black shadow-lg hover:bg-[#4F7FFF] transition-all">
             Start Discovery <ArrowRight className="w-6 h-6" />
           </Link>
        </div>
      </section>
    </div>
  );
}
