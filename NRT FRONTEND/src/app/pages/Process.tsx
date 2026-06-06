import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Search, 
  Network, 
  Code2, 
  LineChart, 
  CheckCircle2, 
  Zap,
  Target,
  Workflow,
  Server,
  Cpu,
  LayoutDashboard,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import { SEO } from "../components/SEO";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Process Audit",
      desc: "We analyze workflows, reporting structures, operational bottlenecks and business objectives to identify opportunities for improvement.",
      color: "from-[#27324A] to-[#27324A]",
      icon: <Search className="w-10 h-10" />,
      deliverables: [
        "Process Audit",
        "Requirements Mapping",
        "Operational Assessment",
        "Improvement Opportunities"
      ]
    },
    {
      num: "02",
      title: "Solution Architecture & System Design",
      desc: "We design ERP systems, automation workflows and technical roadmaps aligned with business goals.",
      color: "from-[#0057FF] to-[#9900FF]",
      icon: <Network className="w-10 h-10" />,
      deliverables: [
        "ERP Blueprint",
        "Workflow Design",
        "Automation Planning",
        "System Architecture",
        "Technical Roadmap"
      ]
    },
    {
      num: "03",
      title: "Build & Integration",
      desc: "Our team develops, integrates and deploys the systems required to support operational efficiency and business growth.",
      color: "from-[#27324A] to-[#3A5CCC]",
      icon: <Code2 className="w-10 h-10" />,
      deliverables: [
        "ERP Development",
        "AI Automation",
        "Business Dashboards",
        "System Integrations",
        "Custom Software"
      ]
    },
    {
      num: "04",
      title: "Optimization & Continuous Improvement",
      desc: "We continuously monitor, improve and expand systems to support long-term operational excellence.",
      color: "from-[#00D2FF] to-[#3a7bd5]",
      icon: <LineChart className="w-10 h-10" />,
      deliverables: [
        "Performance Monitoring",
        "Workflow Optimization",
        "Automation Expansion",
        "Strategic Technical Support",
        "Continuous Improvements"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#0F172A] overflow-hidden">
      <SEO
        title="Our Process | NRT"
        description="See how Next Revolution Tech scopes, designs, builds, and optimizes ERP systems, AI automation, and custom business software."
      />

      {/* SECTION 1: HERO - Dark */}
      <section className="pt-32 pb-32 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#0F172A] text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3A5CCC]/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
             {["ERP Systems", "AI Automation", "Business Process Optimization", "Custom Business Software", "Dedicated Technology Teams"].map(tag => (
                <div key={tag} className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3A5CCC] bg-[#3A5CCC]/10 px-4 py-2 rounded-full border border-[#3A5CCC]/20">
                   {tag}
                </div>
             ))}
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.1] sm:leading-[1] mb-10">
             From Operational Challenges <br className="hidden sm:block" />
             <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3A5CCC] to-[#27324A]">To Scalable Systems</span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-white/60 leading-relaxed max-w-3xl mx-auto">
             Every engagement begins with understanding your business processes, identifying bottlenecks and designing systems that improve efficiency, visibility and growth.
          </p>
        </div>
      </section>

      {/* SECTION 2: STEPS */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24">
         <div className="mx-auto max-w-6xl grid gap-12 lg:gap-20">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                 <div className={`bg-white rounded-[2rem] p-8 lg:p-12 shadow-lg border border-black/5 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3A5CCC] mb-4">Step {step.num}</div>
                    <h2 className="text-2xl sm:text-4xl font-black mb-4 tracking-tighter leading-tight text-[#0F172A]">{step.title}</h2>
                    <p className="text-base sm:text-lg font-medium text-[#0F172A]/60 mb-8 leading-relaxed">{step.desc}</p>
                    
                    <div className="bg-[#F8FAFC] rounded-xl p-5 border border-black/5">
                       <h4 className="text-xs font-black uppercase tracking-widest text-[#0F172A] mb-3">Deliverables:</h4>
                       <ul className="space-y-2">
                          {step.deliverables.map((item, idx) => (
                             <li key={idx} className="flex items-center gap-2 font-semibold text-[#0F172A]/80 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-[#3A5CCC]" />
                                {item}
                             </li>
                          ))}
                       </ul>
                    </div>
                 </div>
                 
                 <div className={`${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <motion.div 
                      whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 1 : -1 }}
                      className={`relative aspect-[4/3] rounded-[2rem] bg-gradient-to-br ${step.color} shadow-xl p-8 flex flex-col items-center justify-center text-center`}
                    >
                       <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                       <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-xl mb-6 relative z-10">
                          {step.icon}
                       </div>
                       <div className="text-xl sm:text-2xl font-black text-white relative z-10">{step.title}</div>
                    </motion.div>
                 </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* SECTION 3: TIMELINE (What Happens During Engagement) */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white border-y border-black/5">
         <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#0F172A] mb-16">What Happens During Engagement</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { time: "Week 1", title: "Discovery & Audit", icon: <Search className="w-6 h-6" /> },
                 { time: "Week 2", title: "Architecture & Planning", icon: <Target className="w-6 h-6" /> },
                 { time: "Week 3-8", title: "Development & Integration", icon: <Workflow className="w-6 h-6" /> },
                 { time: "Post Launch", title: "Optimization & Growth", icon: <TrendingUp className="w-6 h-6" /> }
               ].map((phase, i) => (
                  <div key={i} className="bg-[#F8FAFC] border border-black/5 p-8 rounded-3xl relative overflow-hidden group hover:border-[#3A5CCC]/30 hover:shadow-lg transition-all">
                     <div className="text-[#3A5CCC] bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-sm group-hover:scale-110 transition-transform">
                        {phase.icon}
                     </div>
                     <div className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]/40 mb-2">{phase.time}</div>
                     <h3 className="text-xl font-black text-[#0F172A]">{phase.title}</h3>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 4: SOLUTIONS DELIVERED */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#0F172A] text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
         <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16 relative z-10">
               <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">Solutions Delivered Through Our Process</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
               {[
                 { title: "ERP Systems", icon: <Server className="w-5 h-5" /> },
                 { title: "AI Automation", icon: <Cpu className="w-5 h-5" /> },
                 { title: "Business Dashboards", icon: <LayoutDashboard className="w-5 h-5" /> },
                 { title: "Workflow Automation", icon: <Workflow className="w-5 h-5" /> },
                 { title: "Custom Business Software", icon: <Code2 className="w-5 h-5" /> },
                 { title: "Dedicated Technology Teams", icon: <ShieldCheck className="w-5 h-5" /> }
               ].map((solution, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                     <div className="text-[#3A5CCC] bg-[#3A5CCC]/10 p-3 rounded-lg">
                        {solution.icon}
                     </div>
                     <div className="font-bold text-lg">{solution.title}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 5: WHY BUSINESSES CHOOSE THIS APPROACH */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#F8FAFC]">
         <div className="mx-auto max-w-5xl">
            <div className="text-center mb-16">
               <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#0F172A]">Why Businesses Choose This Approach</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
               {[
                 "Improved Visibility",
                 "Reduced Manual Work",
                 "Faster Reporting",
                 "Process Optimization",
                 "Operational Efficiency",
                 "Scalable Systems",
                 "Business Growth"
               ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 border-b border-black/5 pb-4">
                     <CheckCircle2 className="w-6 h-6 text-[#3A5CCC]" />
                     <span className="text-xl font-bold text-[#0F172A]">{benefit}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* FINAL CTA - Enterprise Dark */}
      <section className="py-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#080B11] relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
         <div className="mx-auto max-w-7xl relative z-10">
            <div className="bg-[#0F172A] rounded-3xl sm:rounded-[4rem] p-12 sm:p-24 text-center border border-white/5 shadow-2xl relative overflow-hidden">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3A5CCC]/20 rounded-full blur-[100px] pointer-events-none" />
               <h2 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-black text-white leading-[1] tracking-tighter mb-8 relative z-10">
                  Ready To Improve <br className="hidden sm:block" />
                  <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3A5CCC] to-[#4F7FFF]">Operations?</span>
               </h2>
               <p className="text-lg sm:text-2xl font-medium text-white/60 mb-12 max-w-3xl mx-auto relative z-10">
                  Let's identify bottlenecks, automate workflows and build systems that support long-term business growth.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                  <Link to="/contact" className="bg-[#3A5CCC] hover:bg-[#27324A] text-white px-10 py-6 rounded-full text-lg sm:text-xl font-black uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-3">
                     Book Strategy Call <ArrowRight className="w-6 h-6" />
                  </Link>
                  <Link to="/services" className="bg-transparent border border-white/20 text-white px-10 py-6 rounded-full text-lg sm:text-xl font-black uppercase tracking-widest hover:bg-white hover:text-[#0F172A] transition-all flex items-center justify-center">
                     Explore Solutions
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
