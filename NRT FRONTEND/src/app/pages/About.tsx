import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, Zap, LineChart, Server, Cpu, Building2, Factory, ShoppingCart, Truck, GraduationCap, Coffee, Briefcase, Box, Users } from "lucide-react";
import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { Testimonials } from "../components/Testimonials";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { FOUNDER } from "../../config/brand";

export function About() {
  const ctaLinks = {
    strategy: "/contact",
    solutions: "/services"
  };

  const industries = [
    { name: "Healthcare", icon: <Building2 className="w-6 h-6" /> },
    { name: "Manufacturing", icon: <Factory className="w-6 h-6" /> },
    { name: "Retail", icon: <ShoppingCart className="w-6 h-6" /> },
    { name: "Logistics", icon: <Truck className="w-6 h-6" /> },
    { name: "Education", icon: <GraduationCap className="w-6 h-6" /> },
    { name: "Food & Beverage", icon: <Coffee className="w-6 h-6" /> },
    { name: "Professional Services", icon: <Briefcase className="w-6 h-6" /> },
    { name: "Distribution", icon: <Box className="w-6 h-6" /> },
  ];

  const expertise = [
    "ERP Systems",
    "AI Automation",
    "Custom Business Software",
    "Workflow Automation",
    "Dashboard & Reporting Systems",
    "Dedicated Technology Teams"
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#0F172A] overflow-x-hidden">
      <SEO 
        title="Business Transformation Partner | NRT" 
        description="Next Revolution Tech helps businesses streamline operations, automate workflows and scale through ERP systems, AI automation and custom business software."
      />

      {/* SECTION 1: HERO - Enterprise Transformation */}
      <section className="pt-32 pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3A5CCC]/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <div className="mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-5xl"
          >
            <div className="flex flex-wrap gap-3 mb-8">
               {["ERP Systems", "AI Automation", "Business Systems", "Dedicated Technology Teams"].map(tag => (
                  <div key={tag} className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3A5CCC] bg-[#3A5CCC]/10 px-4 py-2 rounded-full border border-[#3A5CCC]/20">
                     {tag}
                  </div>
               ))}
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-[1.1]">
              Transforming Operations Through <br className="hidden lg:block" />
              <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3A5CCC] to-[#4F7FFF]">ERP, AI & Business Systems.</span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-white/60 leading-relaxed max-w-3xl">
              Next Revolution Tech helps businesses streamline operations, automate workflows and scale through ERP systems, AI automation and custom business software.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24">
        <div className="mx-auto max-w-7xl">
          
          {/* SECTION 2: WHY NRT EXISTS */}
          <ScrollReveal direction="up" distance={40}>
            <div className="bg-white border border-black/5 shadow-xl rounded-[2.5rem] p-12 lg:p-20 mb-32">
              <div className="max-w-3xl">
                 <h2 className="text-4xl sm:text-5xl font-black mb-8 tracking-tighter text-[#0F172A]">Why NRT Exists</h2>
                 <p className="text-xl sm:text-2xl font-medium text-[#0F172A]/70 leading-relaxed mb-8">
                    Businesses should not be limited by spreadsheets, disconnected systems, and inefficient manual processes.
                 </p>
                 <p className="text-lg font-medium text-[#0F172A]/50 leading-relaxed">
                    Our mission is to help organizations improve visibility, automate operations, and scale efficiently through modern, integrated business systems. We bridge the gap between operational strategy and technical execution.
                 </p>
              </div>
            </div>
          </ScrollReveal>

          {/* SECTION 3: WHY NRT (Strategic Pillars) */}
          <ScrollReveal direction="up">
            <div className="mb-32">
               <div className="text-center mb-16">
                 <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#0F172A]">Our Strategic Pillars</h2>
               </div>
               <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "ERP Systems", desc: "Centralize your operations, eliminate data silos, and gain real-time visibility into every aspect of your business.", icon: <Server className="w-8 h-8" /> },
                    { title: "AI Automation", desc: "Replace repetitive manual tasks with intelligent workflows that reduce operational costs and accelerate delivery.", icon: <Cpu className="w-8 h-8" /> },
                    { title: "Business Process Optimization", desc: "We audit and refine your existing processes before digitizing them, ensuring you scale efficiency, not chaos.", icon: <LineChart className="w-8 h-8" /> },
                    { title: "Dedicated Technology Teams", desc: "Scale your engineering capabilities with our pre-vetted experts who integrate directly into your operational workflow.", icon: <Users className="w-8 h-8" /> }
                  ].map((pillar, i) => (
                    <div key={i} className="bg-white p-10 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-md transition-shadow group">
                       <div className="w-14 h-14 bg-[#F3F4F6] rounded-xl flex items-center justify-center text-[#3A5CCC] mb-8 group-hover:scale-110 transition-transform">
                          {pillar.icon}
                       </div>
                       <h3 className="text-2xl font-black text-[#0F172A] mb-4">{pillar.title}</h3>
                       <p className="text-[#0F172A]/60 font-medium leading-relaxed">{pillar.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
          </ScrollReveal>

          {/* SECTION 4: FOUNDER STORY */}
          <ScrollReveal direction="down">
            <div className="bg-[#0F172A] text-white border border-white/5 rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden mb-32 shadow-2xl">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3A5CCC]/20 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
              
              <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
                  <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                     <div className="w-48 h-48 rounded-2xl bg-[#F3F4F6] overflow-hidden border-4 border-white/10 shadow-2xl mb-6">
                        <img 
                           src={FOUNDER.imageUrl} 
                           alt={FOUNDER.name} 
                           className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500" 
                        />
                     </div>
                     <div className="text-2xl font-black text-white">{FOUNDER.name}</div>
                     <div className="text-sm font-bold text-[#3A5CCC] uppercase tracking-widest mb-4">{FOUNDER.title}</div>
                     <a 
                       href={FOUNDER.linkedInUrl} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-semibold"
                     >
                       Connect on LinkedIn <Zap className="w-4 h-4" />
                     </a>
                  </div>
                  
                  <div className="lg:col-span-8">
                     <h2 className="text-3xl sm:text-5xl font-black mb-8 tracking-tighter leading-tight text-white">
                        From Software Delivery To <br />
                        <span className="text-[#3A5CCC]">Business Transformation.</span>
                     </h2>
                     <div className="space-y-6 text-lg text-white/70 font-medium leading-relaxed">
                        <p>
                           "NRT wasn't built just to write code. After years of observing the market, I realized that most businesses don't actually have a software problem—they have an operations problem. They struggle with disconnected tools, manual data entry, and processes that break under scale."
                        </p>
                        <p>
                           "That's why our focus shifted entirely toward ERP systems and AI automation. We saw that modern businesses don't need another generic app; they need deeply integrated systems that act as the central nervous system for their operations."
                        </p>
                        <p>
                           "Our approach is simple: We map your bottlenecks, align with your business goals, and deploy transformational technology that delivers measurable operational efficiency."
                        </p>
                     </div>
                  </div>
               </div>
            </div>
          </ScrollReveal>

          {/* SECTION 5: HOW WE WORK */}
          <ScrollReveal direction="up">
             <div className="mb-32">
                <div className="text-center mb-16">
                  <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#0F172A]">How We Work</h2>
                  <p className="text-xl text-[#0F172A]/50 font-medium mt-4">A proven framework for business transformation.</p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6">
                   {[
                     { step: "01", title: "Discover", desc: "Understand operations, bottlenecks and objectives." },
                     { step: "02", title: "Design", desc: "Design systems and workflows aligned with business goals." },
                     { step: "03", title: "Build", desc: "Develop ERP systems, automation and custom software." },
                     { step: "04", title: "Optimize", desc: "Continuously improve performance and operational efficiency." }
                   ].map((phase, i) => (
                      <div key={i} className="relative p-8 bg-white border border-black/5 rounded-[2rem] shadow-sm">
                         <div className="text-[10px] font-black text-[#3A5CCC] uppercase tracking-[0.2em] mb-4">Step {phase.step}</div>
                         <h3 className="text-2xl font-black text-[#0F172A] mb-3">{phase.title}</h3>
                         <p className="text-[#0F172A]/60 font-medium">{phase.desc}</p>
                      </div>
                   ))}
                </div>
             </div>
          </ScrollReveal>

          {/* SECTION 6: OUR EXPERTISE */}
          <ScrollReveal direction="up">
            <div className="mb-32 bg-white rounded-[2.5rem] p-12 lg:p-20 border border-black/5 shadow-xl text-center">
               <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#0F172A] mb-12">Our Expertise</h2>
               <div className="flex flex-wrap justify-center gap-4">
                  {expertise.map((item, i) => (
                    <div key={i} className="px-6 py-4 bg-[#F3F4F6] text-[#0F172A] rounded-full font-bold text-lg border border-black/5 hover:border-[#3A5CCC]/30 hover:bg-[#3A5CCC]/5 transition-colors">
                       {item}
                    </div>
                  ))}
               </div>
            </div>
          </ScrollReveal>

          {/* SECTION 7: INDUSTRIES WE SUPPORT */}
          <ScrollReveal direction="up">
             <div className="mb-32">
                <div className="text-center mb-16">
                  <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#0F172A]">Industries We Support</h2>
                  <p className="text-xl text-[#0F172A]/50 font-medium mt-4">Delivering operational excellence across diverse sectors.</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {industries.map((ind, i) => (
                      <div key={i} className="flex flex-col items-center justify-center p-8 bg-white border border-black/5 rounded-2xl text-center group hover:shadow-lg transition-all hover:border-[#3A5CCC]/20">
                         <div className="text-[#3A5CCC] mb-4 group-hover:-translate-y-1 transition-transform">
                            {ind.icon}
                         </div>
                         <div className="font-bold text-[#0F172A]">{ind.name}</div>
                      </div>
                   ))}
                </div>
             </div>
          </ScrollReveal>

          {/* SECTION 8: TESTIMONIALS */}
          <div className="mb-32">
             <div className="text-center mb-8">
               <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-[#0F172A]">Business Outcomes & Partnerships</h2>
               <p className="text-lg text-[#0F172A]/50 font-medium mt-2 max-w-2xl mx-auto">Hear from leaders who transformed their operations with our systems.</p>
             </div>
             <Testimonials />
          </div>

          {/* FINAL CTA SECTION */}
          <ScrollReveal direction="up">
            <div className="text-center bg-[#0B0F19] rounded-[2.5rem] p-16 sm:p-24 border border-white/5 relative overflow-hidden shadow-2xl mb-24">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#3A5CCC]/10 blur-[120px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tighter text-white">
                   Ready To Improve <span className="text-[#3A5CCC]">Operations?</span>
                </h2>
                <p className="text-xl sm:text-2xl font-medium text-white/60 mb-12 max-w-3xl mx-auto">
                   Let's identify bottlenecks, automate workflows and build systems that support long-term business growth.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to={ctaLinks.strategy} className="bg-[#3A5CCC] hover:bg-[#27324A] text-white px-10 py-5 rounded-full font-black uppercase tracking-wider text-sm shadow-md hover:shadow-lg transition-all">
                    Book Strategy Call
                  </Link>
                  <Link to={ctaLinks.solutions} className="bg-transparent border border-white/20 text-white hover:bg-white hover:text-[#0F172A] px-10 py-5 rounded-full font-black uppercase tracking-wider text-sm transition-all">
                    Explore Solutions
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