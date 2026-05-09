import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, Zap, Award, Users } from "lucide-react";
import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { Testimonials } from "../components/Testimonials";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { InteractiveHero3D } from "../components/ui/InteractiveHero3D";

export function About() {
  const ctaLinks = {
    test: "/contact?type=test",
    started: "/contact?type=full"
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0B1B35] overflow-x-hidden">
      <SEO 
        title="About Us" 
        description="Learn more about Next Revolution Tech, your dedicated technology partner. We eliminate technical bottlenecks for growing businesses with 24/7 operations."
      />

      {/* SECTION 1: INTRO - Dark Hero */}
      <section className="pt-32 pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#0B1B35] text-white relative overflow-hidden">
        <InteractiveHero3D />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F58220]/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-4xl"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F58220] mb-8">Who We Are</div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-10 tracking-tighter leading-[0.9]">
              We are your <br />
              <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] to-[#FF4D00]">dedicated</span> <br />
              tech partner.
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-white/50 leading-relaxed max-w-2xl">
              We solve real technical problems for growing businesses — so you don’t have to manage multiple developers or deal with constant issues.
            </p>
          </motion.div>
        </div>
      </section>
      {/* SECTION 2: MISSION & VALUES */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up" distance={40}>
            <div className="grid md:grid-cols-2 gap-10 mb-40">
              <div className="relative overflow-hidden rounded-[3rem] bg-white p-12 sm:p-16 shadow-xl border border-black/5 group">
                <div className="w-20 h-20 bg-[#F8F9FA] rounded-2xl flex items-center justify-center text-orange mb-12 shadow-sm border border-black/5">
                  <Zap className="w-10 h-10" />
                </div>
                <h2 className="text-4xl font-black mb-8 tracking-tighter">Our Mission</h2>
                <p className="text-lg font-bold text-[#0B1B35]/60 mb-10 leading-relaxed">
                  To provide growing businesses with reliable, ongoing technical support without the overhead of hiring full-time developers.
                </p>
                <ul className="space-y-6">
                  {[
                    "Eliminate technical bottlenecks",
                    "Provide predictable tech costs",
                    "Be a long-term partner in growth"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-5 font-bold">
                      <CheckCircle2 className="w-6 h-6 text-orange flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-[3rem] bg-white p-12 sm:p-16 shadow-xl border border-black/5 group">
                <div className="w-20 h-20 bg-[#F8F9FA] rounded-2xl flex items-center justify-center text-orange mb-12 shadow-sm border border-black/5">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-black mb-6 sm:mb-8 tracking-tighter text-[#0B1B35]">Why Us</h2>
                <p className="text-base sm:text-lg font-bold text-[#0B1B35]/60 mb-10 leading-relaxed">
                  We don't just fix bugs. We learn your system inside out, so we can suggest improvements and prevent future issues.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                  <motion.div 
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="p-8 bg-gradient-to-br from-[#0057FF] to-[#00A3FF] rounded-[2rem] border border-white/10 shadow-lg group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] pointer-events-none" />
                    <div className="text-5xl font-black text-white mb-2 tracking-tighter relative z-10">100%</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] font-black text-white/60 relative z-10">Remote First</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="p-8 bg-gradient-to-br from-[#F58220] to-[#FF4D00] rounded-[2rem] border border-white/10 shadow-lg group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] pointer-events-none" />
                    <div className="text-5xl font-black text-white mb-2 tracking-tighter relative z-10">24/7</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] font-black text-white/60 relative z-10">Operations</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Leader Section - LIGHT */}
          <ScrollReveal direction="down">
            <div className="bg-white border border-black/5 rounded-[3rem] p-16 lg:p-24 relative overflow-hidden mb-40 shadow-sm">
              <div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                  <div>
                     <h2 className="text-4xl sm:text-6xl font-black mb-10 sm:mb-12 tracking-tighter leading-tight text-[#0B1B35]">Human-led <br />development.</h2>
                     <blockquote className="text-2xl sm:text-3xl font-medium italic mb-10 sm:mb-12 border-l-4 border-orange pl-6 sm:pl-10 text-[#0B1B35]/80 leading-relaxed font-italic-serif">
                        "We are your internal tech team, available whenever you need us. No more hunting for unreliable freelancers."
                     </blockquote>
                     <div className="flex items-center gap-6 mb-12 lg:mb-0">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F8F9FA] flex items-center justify-center overflow-hidden border-4 border-black/5 shadow-sm">
                           <img src="https://res.cloudinary.com/de4oqb7rz/image/upload/v1777994678/nrt_team/ceo.png" alt="Founder" className="w-full h-full object-cover object-top" />
                        </div>
                        <div>
                           <div className="text-xl sm:text-2xl font-black text-[#0B1B35]">Founder & CEO</div>
                           <div className="text-orange font-bold uppercase tracking-widest text-[10px]">Next Revolution Tech</div>
                        </div>
                     </div>
                  </div>
                  <div className="block">
                      <div className="grid grid-cols-2 gap-4 sm:gap-8">
                         <motion.div 
                            whileHover={{ y: -10, scale: 1.05 }}
                            className="p-8 sm:p-12 bg-gradient-to-br from-[#F58220] to-[#FF4D00] rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl group relative overflow-hidden"
                         >
                            <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] pointer-events-none" />
                            <Award className="w-8 h-8 sm:w-12 sm:h-12 mb-6 sm:mb-8 text-white relative z-10" />
                            <div className="text-4xl sm:text-6xl font-black mb-2 tracking-tighter text-white relative z-10">50+</div>
                            <div className="text-[10px] font-black text-white/50 uppercase tracking-[0.4em] relative z-10 leading-tight">Fixes Delivered</div>
                         </motion.div>
                         <motion.div 
                            whileHover={{ y: -10, scale: 1.05 }}
                            className="p-8 sm:p-12 bg-gradient-to-br from-[#0057FF] to-[#9900FF] rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl group relative overflow-hidden"
                         >
                            <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] pointer-events-none" />
                            <Users className="w-8 h-8 sm:w-12 sm:h-12 mb-6 sm:mb-8 text-white relative z-10" />
                            <div className="text-4xl sm:text-6xl font-black mb-2 tracking-tighter text-white relative z-10">15+</div>
                            <div className="text-[10px] font-black text-white/50 uppercase tracking-[0.4em] relative z-10 leading-tight">Growing Brands</div>
                         </motion.div>
                      </div>
                  </div>
               </div>
            </div>
          </ScrollReveal>

          {/* Team Section - Transparent Blur Redesign */}
          <section className="py-24 mb-40 bg-[#0B1B35]/80 backdrop-blur-3xl rounded-[3rem] relative overflow-hidden border border-white/10 mx-4 sm:mx-6 lg:mx-12 xl:mx-24 shadow-2xl">
             <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('/noise.svg')]" />
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F58220]/10 rounded-full blur-[120px] pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

             <div className="text-center mb-16 relative z-10 px-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                   <Users className="w-4 h-4 text-[#F58220]" />
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">The Collective</span>
                </div>
                <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-white">
                   Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] to-[#FF4D00]">Engineers.</span>
                </h2>
             </div>

             <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 px-6 sm:px-8 relative z-10 pb-8">
                 {[
                   { name: "Ahsan Khan", role: "Founder & Lead", tech: "Architecture", img: "https://res.cloudinary.com/de4oqb7rz/image/upload/c_fill,g_face,w_500,h_500/v1777994668/nrt_team/ahsan_new.jpg", pos: "object-top", color: "from-blue-500" },
                   { name: "Ayan", role: "Full Stack Engineer", tech: "Mobile / React", img: "https://res.cloudinary.com/de4oqb7rz/image/upload/c_fill,g_face,w_500,h_500/v1777994671/nrt_team/ayan.jpg", pos: "object-center", color: "from-purple-500" },
                   { name: "Fahad", role: "Full Stack Engineer", tech: "DevOps / Cloud", img: "https://res.cloudinary.com/de4oqb7rz/image/upload/c_fill,g_face,w_500,h_500,e_contrast:30,e_vibrance:20/v1777994672/nrt_team/fahad.jpg", pos: "object-top", color: "from-orange-500" },
                   { name: "Muzamil", role: "Marketing & Dev", tech: "Growth / SEO", img: "https://res.cloudinary.com/de4oqb7rz/image/upload/c_fill,g_face,w_500,h_500/v1777994673/nrt_team/muzamil.jpg", pos: "object-center", color: "from-emerald-500" },
                   { name: "Taha", role: "Full Stack Engineer", tech: "AI / Python", img: "https://res.cloudinary.com/de4oqb7rz/image/upload/c_fill,g_face,w_500,h_500/v1777994674/nrt_team/taha.jpg", pos: "object-center", color: "from-red-500" },
                 ].map((member, i) => (
                   <motion.div 
                     key={i}
                     whileHover={{ y: -8 }}
                     className="bg-white/5 backdrop-blur-xl rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-5 border border-white/10 text-center group relative overflow-hidden transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 shadow-2xl"
                   >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-b from-white/5 to-transparent" />
                      
                      <div className="relative w-20 h-20 sm:w-28 sm:h-28 mx-auto mb-4 sm:mb-6">
                         <div className={`absolute inset-0 bg-gradient-to-br ${member.color} to-transparent rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
                         <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-white/10 group-hover:border-[#F58220] transition-colors duration-500 shadow-2xl z-10 bg-[#0B1B35]">
                            <img 
                              src={member.img} 
                              alt={member.name} 
                              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${(member as any).pos || 'object-center'}`} 
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${member.color}/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                         </div>
                      </div>

                      <h3 className="text-sm sm:text-base font-black tracking-tight text-white mb-1 uppercase line-clamp-1">{member.name}</h3>
                      <div className="text-[#F58220] text-[8px] font-black uppercase tracking-[0.15em] mb-4 line-clamp-1">{member.role}</div>
                      
                      <div className="relative flex flex-col gap-2">
                         <div className="text-[8px] font-bold text-white/30 uppercase tracking-widest bg-white/5 rounded-lg px-2 py-1.5 border border-white/5 transition-colors group-hover:bg-white/10 group-hover:text-white/60">
                            {member.tech}
                         </div>
                      </div>
                   </motion.div>
                 ))}
             </div>
          </section>

          <Testimonials />

          {/* Final CTA Section - Dark */}
          <ScrollReveal direction="up">
            <div className="text-center mt-32 sm:mt-40 bg-[#0B1B35]/80 backdrop-blur-3xl rounded-[4rem] p-16 sm:p-32 border border-white/10 relative overflow-hidden shadow-2xl mb-32 mx-4 sm:mx-6 lg:mx-12 xl:mx-24">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-7xl lg:text-[8rem] font-black mb-16 tracking-tighter leading-[0.9] text-white">Ready to <br /><span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] to-[#FF4D00]">Rule</span> Your Tech?</h2>
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                  <Link to={ctaLinks.started} className="bg-[#F58220] text-white py-6 sm:py-8 px-10 sm:px-16 text-xl sm:text-2xl font-black rounded-2xl shadow-[0_30px_60px_rgba(245,130,32,0.4)] hover:scale-105 transition-all">
                    Get Started Now
                  </Link>
                  <Link to={ctaLinks.test} className="bg-white/5 border-2 border-white/20 text-white py-6 sm:py-8 px-10 sm:px-16 text-xl sm:text-2xl font-black rounded-2xl hover:bg-white hover:text-[#0B1B35] transition-all">
                    Small Paid Test
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="h-24 bg-gradient-to-b from-[#F8F9FA] to-[#0B1B35]" />
    </div>
  );
}