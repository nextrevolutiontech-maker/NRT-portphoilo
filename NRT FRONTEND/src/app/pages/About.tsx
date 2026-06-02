import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, Zap, Award, Users } from "lucide-react";
import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { Testimonials } from "../components/Testimonials";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { InteractiveHero3D } from "../components/ui/InteractiveHero3D";
import { FOUNDER } from "../../config/brand";

export function About() {
  const ctaLinks = {
    test: "/contact?type=test",
    started: "/contact?type=full"
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#0F172A] overflow-x-hidden">
      <SEO 
        title="Our Mission & Team" 
        description="Learn more about Next Revolution Tech, your dedicated technology partner. We eliminate technical bottlenecks for growing businesses with high-end engineering expertise."
      />

      {/* SECTION 1: INTRO - Dark Hero */}
      <section className="pt-32 pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#0F172A] text-white relative overflow-hidden">
        <InteractiveHero3D />
        {/* Ambient Overlay - Neutralized */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
        
        <div className="mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-4xl"
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#3A5CCC] mb-8">Engineering Excellence</div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-10 tracking-tight leading-[0.95]">
              We are your <br />
              <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3A5CCC] to-[#4F7FFF]">Dedicated</span> <br />
              Tech Partner.
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-white/50 leading-snug max-w-2xl">
              Eliminating technical bottlenecks for high-growth companies through elite engineering and reliable operations.
            </p>
          </motion.div>
        </div>
      </section>
      {/* SECTION 2: MISSION & VALUES */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up" distance={40}>
            <div className="grid md:grid-cols-2 gap-8 mb-40">
              <div className="relative overflow-hidden rounded-[2rem] bg-white p-12 sm:p-14 shadow-[0_1px_3px_rgba(0,0,0,0.1)] border border-black/5 group">
                <div className="w-16 h-16 bg-[#F3F4F6] rounded-xl flex items-center justify-center text-[#3A5CCC] mb-10 shadow-sm border border-black/5">
                  <Zap className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-bold mb-6 tracking-tight">Our Mission</h2>
                <p className="text-lg font-medium text-[#0F172A]/50 mb-10 leading-relaxed">
                  To provide scaling businesses with reliable, ongoing technical leadership without the friction of hiring full-time internal teams.
                </p>
                <ul className="space-y-5">
                  {[
                    "Solve complex architectural challenges",
                    "Maintain high uptime and performance",
                    "Ensure seamless third-party integrations"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-5 font-semibold text-[#0F172A]/80">
                      <CheckCircle2 className="w-5 h-5 text-[#3A5CCC] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-[2rem] bg-white p-12 sm:p-14 shadow-[0_1px_3px_rgba(0,0,0,0.1)] border border-black/5 group">
                <div className="w-16 h-16 bg-[#F3F4F6] rounded-xl flex items-center justify-center text-[#3A5CCC] mb-10 shadow-sm border border-black/5">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-[#0F172A]">Why NRT</h2>
                <p className="text-base sm:text-lg font-medium text-[#0F172A]/50 mb-10 leading-relaxed">
                  We don't just write code. We integrate deeply with your team to understand your vision and prevent technical debt.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                  <div className="p-8 bg-[#F3F4F6] rounded-[1.5rem] border border-black/5">
                    <div className="text-4xl font-bold text-[#0F172A] mb-1 tracking-tight">100%</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#0F172A]/40">Remote First</div>
                  </div>
                  <div className="p-8 bg-[#3A5CCC] rounded-[1.5rem] border border-white/10 shadow-lg">
                    <div className="text-4xl font-bold text-white mb-1 tracking-tight">24/7</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60">Operations</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Leader Section - LIGHT */}
          <ScrollReveal direction="down">
            <div className="bg-white border border-black/5 rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden mb-40 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                     <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight leading-tight text-[#0F172A]">Human-led <br />Engineering.</h2>
                     <blockquote className="text-xl sm:text-2xl font-medium italic mb-10 border-l-2 border-[#3A5CCC] pl-6 sm:pl-8 text-[#0F172A]/60 leading-relaxed font-italic-serif">
                        "We act as your internal technical squad, available whenever complexity arises. Reliable, efficient, and consistent."
                     </blockquote>
                     <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-full bg-[#F3F4F6] flex items-center justify-center overflow-hidden border border-black/5 shadow-sm">
                           <img 
                              src={FOUNDER.imageUrl} 
                              alt={FOUNDER.name} 
                              className="w-full h-full object-cover object-center" 
                           />
                        </div>
                        <div>
                           <div className="text-lg font-bold text-[#0F172A]">{FOUNDER.name}</div>
                           <div className="text-sm font-semibold text-[#0F172A]/60 mb-1">{FOUNDER.title}</div>
                           <a 
                             href={FOUNDER.linkedInUrl} 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             className="text-[#3A5CCC] text-nrt-label hover:underline"
                           >
                             Connect on LinkedIn →
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-8 bg-[#F3F4F6] rounded-[1.5rem] border border-black/5">
                        <Award className="w-8 h-8 mb-6 text-[#3A5CCC]" />
                        <div className="text-4xl sm:text-5xl font-bold mb-1 tracking-tight text-[#0F172A]">50+</div>
                        <div className="text-[9px] font-bold text-[#0F172A]/40 uppercase tracking-widest">Successful Deliveries</div>
                     </div>
                     <div className="p-8 bg-[#F3F4F6] rounded-[1.5rem] border border-black/5">
                        <Users className="w-8 h-8 mb-6 text-[#3A5CCC]" />
                        <div className="text-4xl sm:text-5xl font-bold mb-1 tracking-tight text-[#0F172A]">15+</div>
                        <div className="text-[9px] font-bold text-[#0F172A]/40 uppercase tracking-widest">Scaling Brands</div>
                     </div>
                  </div>
               </div>
            </div>
          </ScrollReveal>

          {/* Team Section - Redesigned */}
          <section className="py-24 mb-40 bg-[#0F172A] rounded-[2.5rem] relative overflow-hidden border border-white/5 shadow-2xl">
             <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
             
             <div className="text-center mb-16 relative z-10 px-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                   <Users className="w-3.5 h-3.5 text-[#3A5CCC]" />
                   <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">Our Collective</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                   Core Engineering <span className="text-[#3A5CCC]">Squad.</span>
                </h2>
             </div>

             <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-6 sm:px-12 relative z-10">
                 {[
                   { name: "Lead Engineer", role: "Architecture", tech: "Core Systems", img: "/avatars/portrait-1.png" },
                   { name: "Full Stack", role: "Product", tech: "React / Node", img: "/avatars/portrait-2.png" },
                   { name: "DevOps", role: "Reliability", tech: "Cloud / Infra", img: "/avatars/portrait-3.png" },
                   { name: "AI Engineer", role: "Automation", tech: "Python / ML", img: "/avatars/portrait-4.png" },
                 ].map((member, i) => (
                   <motion.div 
                     key={i}
                     whileHover={{ y: -5 }}
                     className="bg-white/[0.02] rounded-[1.5rem] p-6 border border-white/5 text-center hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                   >
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6">
                         <div className="relative w-full h-full rounded-full flex items-center justify-center border border-white/10 shadow-2xl z-10 bg-[#161F33] text-xl font-mono font-bold text-[#3A5CCC]">
                            {member.name.charAt(0)}
                         </div>
                      </div>

                      <h3 className="text-sm font-bold tracking-tight text-white mb-1 uppercase">{member.name}</h3>
                      <div className="text-[#3A5CCC] text-[9px] font-bold uppercase tracking-widest mb-4">{member.role}</div>
                      <div className="text-[8px] font-bold text-white/30 uppercase tracking-[0.2em] bg-white/5 rounded-lg px-2 py-1.5 border border-white/5">
                        {member.tech}
                      </div>
                   </motion.div>
                 ))}
             </div>
          </section>

          <Testimonials />

          {/* Final CTA Section - Enterprise Style */}
          <ScrollReveal direction="up">
            <div className="text-center mt-32 bg-[#0B0F19] rounded-[2.5rem] p-16 sm:p-24 border border-white/5 relative overflow-hidden shadow-2xl mb-32">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-6xl font-bold mb-12 tracking-tight leading-[0.95] text-white">Scale your engineering <br /><span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3A5CCC] to-[#4F7FFF]">seamlessly</span>.</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to={ctaLinks.started} className="btn-primary-nrt px-12 py-6 text-xl">
                    Get Started Now
                  </Link>
                  <Link to={ctaLinks.test} className="btn-secondary-nrt px-12 py-6 text-xl bg-transparent border-white/20 text-white hover:bg-white hover:text-[#0F172A]">
                    Small Paid Test
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="h-24 bg-gradient-to-b from-[#F3F4F6] to-[#0F172A]" />
    </div>
  );
}