import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  Globe, 
  ShieldCheck, 
  Zap,
  CheckCircle2
} from "lucide-react";
import { motion } from "motion/react";
import { InteractiveHero3D } from "./ui/InteractiveHero3D";
import { ScrollReveal } from "./ui/ScrollReveal";

interface PreFooterCTAProps {
  headline?: React.ReactNode;
  subtext?: string;
  buttonText?: string;
}

export function PreFooterCTA({ 
  headline, 
  subtext = "Join the forward-thinking brands scaling with NRT. From MVP builds to enterprise-grade infrastructure, your dedicated squad is ready to deploy today.",
  buttonText = "Assemble My Team"
}: PreFooterCTAProps) {
  return (
    <section className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#0F172A] text-white overflow-hidden">
      <InteractiveHero3D />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
      
      {/* Decorative Glows - Simplified for performance */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3A5CCC]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <ScrollReveal direction="up" distance={60}>
          <div className="bg-white/[0.04] backdrop-blur-xl rounded-[3.5rem] sm:rounded-[4.5rem] p-8 sm:p-16 lg:p-20 border border-white/10 relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.4)] transition-all duration-700 hover:border-white/20">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.svg')]" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3A5CCC]/5 rounded-full blur-2xl group-hover:bg-[#3A5CCC]/10 transition-colors duration-700" />
            
            <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-10 backdrop-blur-md">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#3A5CCC]" />
                   <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#3A5CCC]">NRT Systems : Deployment Ready</span>
                </div>

                <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.85] mb-10 text-white">
                   {headline || (
                     <>
                       Ready to <br />
                       <span className="font-italic-serif italic font-normal text-[#3A5CCC]">Scale</span> <br />
                       Your Tech?
                     </>
                   )}
                </h2>

                <p className="text-xl sm:text-2xl text-white/40 font-medium max-w-xl leading-relaxed mb-12">
                   {subtext}
                </p>

                <div className="flex flex-wrap items-center gap-8">
                   <Link to="/contact" className="relative group/btn">
                      <div className="relative bg-[#3A5CCC] text-white px-10 py-6 sm:px-12 sm:py-7 rounded-2xl text-xl sm:text-2xl font-bold flex items-center gap-5 transition-transform group-hover/btn:scale-105 shadow-2xl">
                         {buttonText} 
                         <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </div>
                   </Link>

                   <div className="hidden sm:flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                         <CheckCircle2 className="w-3 h-3 text-[#3A5CCC]" /> Predictable Engagement
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                         <CheckCircle2 className="w-3 h-3 text-[#3A5CCC]" /> Dedicated Squad
                      </div>
                   </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-5">
                 {[
                   { icon: <Globe className="w-8 h-8" />, title: "Distributed", desc: "Global Engineering Talent" },
                   { icon: <ShieldCheck className="w-8 h-8" />, title: "Reliable", desc: "Mission-Critical Guard" },
                   { icon: <Zap className="w-8 h-8" />, title: "High-Velocity", desc: "Accelerated Delivery" }
                 ].map((item, i) => (
                   <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 p-6 sm:p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 group/card shadow-xl"
                   >
                      <div className="w-16 h-16 rounded-2xl bg-[#3A5CCC]/10 flex items-center justify-center text-[#3A5CCC] group-hover/card:bg-[#3A5CCC] group-hover/card:text-white transition-all">
                         {item.icon}
                      </div>
                      <div>
                         <div className="text-xl font-bold tracking-tight text-white mb-1 uppercase">{item.title}</div>
                         <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{item.desc}</div>
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
