import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Search, 
  Rocket, 
  RefreshCcw, 
  CheckCircle2, 
  MessageSquare,
  Zap,
  ArrowUpRight,
  Target,
  Settings,
  TrendingUp,
  Workflow
} from "lucide-react";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Strategy & Audit",
      desc: "We analyze your current tech stack, identify bottlenecks, and define clear goals for your project.",
      color: "from-[#FFD600] to-[#FF9900]",
      icon: <Target className="w-10 h-10" />,
      floating: (
        <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl">
           <div className="text-[10px] font-black uppercase text-[#F58220] mb-4">Initial Scan</div>
           <div className="space-y-3">
              <div className="h-2 w-full bg-white/20 rounded-full" />
              <div className="h-2 w-3/4 bg-white/20 rounded-full" />
              <div className="h-2 w-1/2 bg-[#F58220] rounded-full" />
           </div>
        </div>
      )
    },
    {
      num: "02",
      title: "Design & Proto",
      desc: "Our design team creates high-fidelity UI/UX mockups that focus on user engagement and conversion.",
      color: "from-[#0057FF] to-[#9900FF]",
      icon: <Workflow className="w-10 h-10" />,
      floating: (
        <div className="flex flex-wrap gap-3">
           {["UI/UX", "FIGMA", "PROTOTYPE"].map(t => (
             <div key={t} className="bg-white/10 border border-white/20 rounded-full px-5 py-2 text-[10px] font-black text-white">{t}</div>
           ))}
        </div>
      )
    },
    {
      num: "03",
      title: "Rapid Build",
      desc: "Our engineers execute the build with speed and precision, using modern frameworks and best practices.",
      color: "from-[#FF4D00] to-[#FF005C]",
      icon: <Rocket className="w-10 h-10" />,
      floating: (
        <div className="bg-white rounded-2xl p-4 shadow-2xl">
           <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
           </div>
           <div className="text-[9px] font-mono text-black/40">npm run deploy --production</div>
        </div>
      )
    },
    {
      num: "04",
      title: "Ongoing Support",
      desc: "We don't disappear after launch. Your dedicated team continues to monitor, improve, and scale your product monthly.",
      color: "from-[#00D2FF] to-[#3a7bd5]",
      icon: <RefreshCcw className="w-10 h-10" />,
      floating: (
        <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl">
           <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]"><ShieldCheck className="w-4 h-4" /></div>
              <div className="text-[10px] font-black uppercase text-white/40 tracking-widest">Uptime 99.9%</div>
           </div>
           <div className="space-y-2">
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                 <motion.div animate={{ width: ["0%", "100%"] }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-[#25D366]" />
              </div>
           </div>
        </div>
      )
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-[#F8F9FA] text-[#0B1B35] overflow-hidden">
      <Helmet>
        <title>Our Process | Next Revolution Tech</title>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-12 pb-24 px-4 sm:px-6 lg:px-12 xl:px-24 text-center">
        <div className="mx-auto max-w-5xl">
           <h1 className="text-5xl sm:text-[8rem] lg:text-[9xl] font-black tracking-tighter leading-[1] sm:leading-[0.85] mb-8">
              Engineering <br className="hidden sm:block" /><span className="text-[#F58220] italic font-italic-serif font-normal">Perfection</span> <br className="hidden sm:block" />Step by Step.
           </h1>
          <p className="text-xl sm:text-2xl font-bold text-[#0B1B35]/60 leading-relaxed max-w-3xl mx-auto mb-16 sm:mb-20">
             We've removed the friction from tech development. No long meetings, no hidden costs—just a high-speed engine for your business.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-40 px-4 sm:px-6 lg:px-12 xl:px-24">
         <div className="mx-auto max-w-7xl grid gap-16 lg:gap-32">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                 <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#F58220] mb-6 sm:mb-8">Step {step.num}</div>
                    <h2 className="text-4xl sm:text-7xl font-black mb-6 sm:mb-10 tracking-tighter leading-tight">{step.title}</h2>
                    <p className="text-lg sm:text-2xl font-bold text-[#0B1B35]/60 mb-10 sm:mb-14 leading-relaxed">{step.desc}</p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                       <div className="flex items-center gap-4 p-5 sm:p-6 bg-gradient-to-r from-[#0057FF] to-[#00A3FF] rounded-2xl sm:rounded-3xl border border-white/10 shadow-lg group hover:scale-105 transition-all">
                          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          <span className="font-black uppercase tracking-widest text-xs sm:text-sm text-white">Quality Guaranteed</span>
                       </div>
                       <div className="flex items-center gap-4 p-5 sm:p-6 bg-gradient-to-r from-[#F58220] to-[#FF4D00] rounded-2xl sm:rounded-3xl border border-white/10 shadow-lg group hover:scale-105 transition-all">
                          <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          <span className="font-black uppercase tracking-widest text-xs sm:text-sm text-white">High-Speed Execution</span>
                       </div>
                    </div>
                 </div>
                 <div className={`${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <motion.div 
                      whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 1 : -1 }}
                      className={`relative aspect-[16/10] rounded-3xl sm:rounded-[4rem] bg-gradient-to-br ${step.color} shadow-2xl p-10 sm:p-16 flex items-center justify-center`}
                    >
                       <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
                       <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-2xl sm:rounded-[2.5rem] bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl">
                          {step.icon}
                       </div>
                       {/* Floating UI */}
                       <motion.div 
                         animate={{ y: [0, -10, 0] }}
                         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                         className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-48 sm:w-64 z-20"
                       >
                          {step.floating}
                       </motion.div>
                    </motion.div>
                 </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-4 sm:px-6 lg:px-12 xl:px-24">
         <div className="mx-auto max-w-7xl">
            <div className="bg-[#0B1B35] rounded-3xl sm:rounded-[5rem] p-12 sm:p-24 lg:p-40 text-center relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
               <h2 className="text-5xl sm:text-[9rem] font-black text-white leading-[1] sm:leading-[0.8] tracking-tighter mb-12 sm:mb-16 relative z-10">
                  Ready to <br /><span className="text-[#F58220] italic font-italic-serif font-normal">accelerate?</span>
               </h2>
               <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 relative z-10">
                  <Link to="/contact" className="bg-[#F58220] text-white px-10 py-6 sm:px-16 sm:py-8 rounded-2xl sm:rounded-[2.5rem] text-xl sm:text-3xl font-black shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-4 sm:gap-5 group">
                     Start My Task <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/contact?type=test" className="bg-white/5 border-2 border-white/10 text-white px-10 py-6 sm:px-16 sm:py-8 rounded-2xl sm:rounded-[2.5rem] text-xl sm:text-3xl font-black hover:bg-white/10 transition-all">
                     Try a Test Task
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
