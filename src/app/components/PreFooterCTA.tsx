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
    <section className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#0B1B35] text-white overflow-hidden">
      <InteractiveHero3D />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
      
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#F58220]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <ScrollReveal direction="up" distance={60}>
          <div className="bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-3xl rounded-[3.5rem] sm:rounded-[4.5rem] p-8 sm:p-16 lg:p-20 border border-white/10 relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.4)] transition-all duration-700 hover:border-white/20">
            <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F58220]/5 rounded-full blur-3xl group-hover:bg-[#F58220]/10 transition-colors duration-700" />
            
            <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md">
                   <div className="w-2 h-2 rounded-full bg-[#F58220] animate-pulse" />
                   <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#F58220]">NRT Collective Operations : Online</span>
                </div>

                <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] mb-10 text-white">
                   {headline || (
                     <>
                       Ready to <br />
                       <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] to-[#FF4D00]">Dominate</span> <br />
                       Your Tech?
                     </>
                   )}
                </h2>

                <p className="text-xl sm:text-2xl text-white/40 font-bold max-w-xl leading-relaxed mb-12">
                   {subtext}
                </p>

                <div className="flex flex-wrap items-center gap-8">
                   <Link to="/contact" className="relative group/btn">
                      <div className="absolute inset-0 bg-[#F58220] blur-2xl opacity-40 group-hover/btn:opacity-60 transition-opacity" />
                      <div className="relative bg-[#F58220] text-white px-10 py-6 sm:px-12 sm:py-7 rounded-2xl text-xl sm:text-2xl font-black flex items-center gap-5 transition-transform group-hover/btn:scale-105">
                         {buttonText} 
                         <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </div>
                   </Link>

                   <div className="hidden sm:flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-[10px] font-black text-white/50 uppercase tracking-widest">
                         <CheckCircle2 className="w-3 h-3 text-[#F58220]" /> No long-term contracts
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-black text-white/50 uppercase tracking-widest">
                         <CheckCircle2 className="w-3 h-3 text-[#F58220]" /> Dedicated Engineers
                      </div>
                   </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-5">
                 {[
                   { icon: <Globe className="w-8 h-8" />, title: "Worldwide", desc: "Global Engineering Squad" },
                   { icon: <ShieldCheck className="w-8 h-8" />, title: "Secure", desc: "Mission-Critical Guard" },
                   { icon: <Zap className="w-8 h-8" />, title: "Rapid", desc: "High-Velocity Shipping" }
                 ].map((item, i) => (
                   <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 p-6 sm:p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 group/card shadow-xl"
                   >
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F58220]/20 to-transparent flex items-center justify-center text-[#F58220] border border-[#F58220]/10 group-hover/card:scale-110 transition-transform">
                         {item.icon}
                      </div>
                      <div>
                         <div className="text-xl font-black tracking-tight text-white mb-1 uppercase">{item.title}</div>
                         <div className="text-xs font-bold text-white/30 uppercase tracking-widest">{item.desc}</div>
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
