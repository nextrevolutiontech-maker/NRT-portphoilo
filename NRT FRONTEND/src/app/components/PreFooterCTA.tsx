import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  Globe, 
  ShieldCheck, 
  Zap
} from "lucide-react";
import { motion } from "motion/react";
import { InteractiveHero3D } from "./ui/InteractiveHero3D";
import { ScrollReveal } from "./ui/ScrollReveal";

interface PreFooterCTAProps {
  headline?: React.ReactNode;
  subtext?: string;
  buttonText?: string;
  onBookSession?: () => void;
}

export function PreFooterCTA({ 
  headline, 
  subtext = "Claim your free 30-minute system architecture audit with Ahsan Khan to identify bottlenecks & map your custom automation blueprint.",
  buttonText = "Book Strategy Call",
  onBookSession
}: PreFooterCTAProps) {
  return (
    <section className="relative pt-20 pb-28 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#0B0F19] text-white overflow-hidden border-t border-white/10">
      <InteractiveHero3D />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
      
      {/* Decorative Glows - Simplified for performance */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3A5CCC]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="mx-auto max-w-7xl xl:max-w-[1400px] relative z-10">
        <ScrollReveal direction="up" distance={60}>
          <div className="bg-[#131A2A] backdrop-blur-xl rounded-[3.5rem] sm:rounded-[4.5rem] p-8 sm:p-16 lg:p-20 border border-white/10 relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-white/20">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.svg')]" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3A5CCC]/5 rounded-full blur-2xl group-hover:bg-[#3A5CCC]/10 transition-colors duration-700" />
            
            <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 text-left">
                <div className="text-sm sm:text-base font-bold uppercase tracking-widest text-[#14B8A6] mb-4">
                   Free ERP Planning Session
                </div>

                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-white">
                   {headline || (
                      <>
                        Ready to Replace <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#7DD3FC] to-[#3A5CCC] italic font-italic-serif font-normal">Manual Operations?</span>
                      </>
                   )}
                </h2>

                <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-xl leading-relaxed mb-12">
                   {subtext}
                </p>

                <div className="flex flex-wrap items-center gap-6">
                   {onBookSession ? (
                      <button 
                        onClick={onBookSession}
                        className="bg-[#14B8A6] text-white px-10 py-5 sm:px-12 sm:py-6 rounded-2xl text-lg sm:text-xl font-bold flex items-center gap-4 transition-all hover:bg-[#14B8A6]/90 hover:scale-[1.02] shadow-2xl cursor-pointer"
                      >
                          {buttonText} 
                          <ArrowUpRight className="w-5 h-5 sm:w-6 h-6" />
                      </button>
                   ) : (
                      <Link 
                        to="/contact"
                        className="bg-[#14B8A6] text-white px-10 py-5 sm:px-12 sm:py-6 rounded-2xl text-lg sm:text-xl font-bold flex items-center gap-4 transition-all hover:bg-[#14B8A6]/90 hover:scale-[1.02] shadow-2xl"
                      >
                          {buttonText} 
                          <ArrowUpRight className="w-5 h-5 sm:w-6 h-6" />
                      </Link>
                   )}

                   <Link 
                     to="/case-studies"
                     className="bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-slate-500 px-10 py-5 sm:px-12 sm:py-6 rounded-2xl text-lg sm:text-xl font-bold flex items-center gap-4 transition-all"
                   >
                     View Case Studies
                   </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-5 w-full">
                 {[
                   { icon: <Globe className="w-8 h-8" />, title: "Distributed", desc: "Global Engineering Talent" },
                   { icon: <ShieldCheck className="w-8 h-8" />, title: "Reliable", desc: "Mission-Critical Guard" },
                   { icon: <Zap className="w-8 h-8" />, title: "High-Velocity", desc: "Accelerated Delivery" }
                 ].map((item, i) => (
                   <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 p-6 sm:p-8 rounded-[2rem] bg-[#1E293B]/60 border border-white/10 hover:bg-[#1E293B] hover:border-slate-500 transition-all duration-500 group/card shadow-xl text-left"
                   >
                      <div className="w-16 h-16 rounded-2xl bg-[#3A5CCC]/10 flex items-center justify-center text-[#3A5CCC] group-hover/card:bg-[#3A5CCC] group-hover/card:text-white transition-all shrink-0">
                         {item.icon}
                      </div>
                      <div>
                         <div className="text-xl font-bold tracking-tight text-white mb-1 uppercase">{item.title}</div>
                         <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.desc}</div>
                      </div>
                   </motion.div>
                 ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
