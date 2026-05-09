import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  Globe, 
  ShieldCheck, 
  Zap 
} from "lucide-react";

interface PreFooterCTAProps {
  headline?: React.ReactNode;
  subtext?: string;
  buttonText?: string;
}

export function PreFooterCTA({ 
  headline, 
  subtext = "Join the ranks of international brands scaling their tech with NRT. Your dedicated engineering team is one click away.",
  buttonText = "Assemble My Team"
}: PreFooterCTAProps) {
  return (
    <section className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#0B1B35] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
      <div className="mx-auto max-w-7xl">
        <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] sm:rounded-[4rem] p-10 sm:p-20 lg:p-24 border border-white/10 relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')]" />
          <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-3 h-3 rounded-full bg-[#F58220] animate-ping" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F58220]">NRT Global Operations : Active</span>
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-12">
                 {headline || (
                   <>
                     Ready to <br />
                     <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] to-[#FF4D00]">Scale</span> Faster?
                   </>
                 )}
              </h2>
              <p className="text-xl sm:text-2xl text-white/50 font-bold max-w-2xl leading-relaxed mb-12">
                 {subtext}
              </p>
              <div className="flex flex-wrap gap-6">
                 <Link to="/contact" className="bg-[#F58220] text-white px-10 py-6 rounded-2xl text-xl font-black shadow-[0_30px_60px_rgba(245,130,32,0.4)] hover:scale-105 transition-all flex items-center gap-5 group">
                    {buttonText} 
                    <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </Link>
              </div>
            </div>
            <div className="lg:col-span-4 hidden lg:flex flex-col gap-6">
               {[
                 { icon: <Globe className="w-6 h-6" />, text: "Global Deployments" },
                 { icon: <ShieldCheck className="w-6 h-6" />, text: "Enterprise Security" },
                 { icon: <Zap className="w-6 h-6" />, text: "Ultra-Fast Delivery" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[#F58220]/20 flex items-center justify-center text-[#F58220]">
                       {item.icon}
                    </div>
                    <span className="text-lg font-black tracking-tight">{item.text}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
