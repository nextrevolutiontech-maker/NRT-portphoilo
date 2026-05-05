import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, Zap, Award, Users } from "lucide-react";
import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { Testimonials } from "../components/Testimonials";
import { ScrollReveal } from "../components/ui/ScrollReveal";

export function About() {
  const ctaLinks = {
    test: "/contact?type=test",
    started: "/contact?type=full"
  };

  return (
    <div className="pt-20 min-h-screen bg-[#F8F9FA] text-[#0B1B35] overflow-x-hidden">
      <SEO 
        title="About Us" 
        description="Learn more about Next Revolution Tech, your dedicated technology partner. We eliminate technical bottlenecks for growing businesses with 24/7 operations."
      />

      <section className="pt-12 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-4xl mb-20 sm:mb-32"
          >
            <h1 className="text-4xl sm:text-7xl lg:text-[6.5rem] font-black mb-8 sm:mb-10 tracking-tighter leading-[0.95] sm:leading-[0.9]">
              We are your <br />
              <span className="text-orange italic font-italic-serif font-normal">dedicated</span> <br />
              tech partner.
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-[#0B1B35]/60 leading-relaxed max-w-2xl">
              We started Next Revolution Tech because we saw too many growing businesses struggling with small technical hurdles that slowed them down.
            </p>
          </motion.div>

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
                           <img src="https://i.pravatar.cc/150?img=68" alt="Founder" className="w-full h-full object-cover" />
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

          {/* Team Section */}
          <section className="py-24 mb-40">
             <div className="text-center mb-20">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange mb-4">Meet the Brains</div>
                <h2 className="text-4xl sm:text-6xl font-black tracking-tighter">Our Core <span className="text-orange italic font-italic-serif font-normal">Team</span></h2>
             </div>
             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { name: "Muhammad Ahsan Khan", role: "Founder & CEO", tech: "Strategy / Architecture", img: "/ahsan.png" },
                  { name: "S. Hamza", role: "Senior Developer", tech: "Node.js / React / DevOps", img: "/team1.png" },
                  { name: "Ayesha Ahmed", role: "UI/UX Lead", tech: "Figma / Motion Design", img: "/team2.png" },
                  { name: "Bilal Raza", role: "Backend Engineer", tech: "Python / AI / APIs", img: "/team3.png" },
                  { name: "Sara Siddiqui", role: "QA Engineer", tech: "Automation / Testing", img: "https://i.pravatar.cc/150?img=5" },
                  { name: "Zubair Ali", role: "Frontend Developer", tech: "Next.js / Tailwind", img: "https://i.pravatar.cc/150?img=13" },
                  { name: "Mehak Fatima", role: "Project Manager", tech: "Agile / Communications", img: "https://i.pravatar.cc/150?img=25" },
                  { name: "Omar Farooq", role: "Mobile Developer", tech: "Flutter / React Native", img: "https://i.pravatar.cc/150?img=14" },
                ].map((member, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-[2.5rem] p-8 border border-black/5 shadow-xl text-center group"
                  >
                     <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-4 border-orange/10 group-hover:border-orange transition-colors shadow-lg">
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                     </div>
                     <h3 className="text-xl font-black tracking-tight mb-1">{member.name}</h3>
                     <div className="text-orange text-[10px] font-black uppercase tracking-widest mb-4">{member.role}</div>
                     <div className="text-[10px] font-bold text-black/40 uppercase tracking-widest bg-black/5 rounded-full px-4 py-2 inline-block">
                        {member.tech}
                     </div>
                  </motion.div>
                ))}
             </div>
          </section>

          <Testimonials />

          <ScrollReveal direction="up">
            <div className="text-center mt-32 sm:mt-40">
              <h2 className="text-4xl sm:text-7xl lg:text-[8rem] font-black mb-12 sm:mb-16 tracking-tighter leading-[0.95] sm:leading-[0.9]">Ready to <br /><span className="italic font-italic-serif text-orange">rule</span> the tech?</h2>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                <Link to={ctaLinks.started} className="bg-[#0B1B35] text-white py-6 sm:py-8 px-10 sm:px-16 text-xl sm:text-2xl font-black rounded-2xl shadow-xl hover:bg-orange transition-all">
                  Get Started
                </Link>
                <Link to={ctaLinks.test} className="bg-white border-2 border-[#0B1B35] text-[#0B1B35] py-6 sm:py-8 px-10 sm:px-16 text-xl sm:text-2xl font-black rounded-2xl hover:bg-[#0B1B35] hover:text-white transition-all">
                  Small Paid Test
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="h-24 bg-gradient-to-b from-[#F8F9FA] to-[#0B1B35]" />
    </div>
  );
}