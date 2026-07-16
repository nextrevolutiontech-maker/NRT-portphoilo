"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "ERP Systems",
    description: "Centralize data, streamline workflows, and eliminate operational bottlenecks with custom-built enterprise resource planning solutions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    deviceType: "desktop",
  },
  {
    id: "02",
    title: "AI Automation",
    description: "Reduce manual repetitive tasks, qualify leads instantly, and accelerate customer support with advanced agentic LLM workflows.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    deviceType: "laptop",
  },
  {
    id: "03",
    title: "Custom Business Software",
    description: "From scalable SaaS platforms to internal portals, we engineer high-performance web applications tailored to your specific workflows.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    deviceType: "tablet",
  },
  {
    id: "04",
    title: "Dedicated Development Teams",
    description: "Scale your engineering capacity instantly with our specialized squads of developers, designers, and project managers.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
    deviceType: "laptop",
  }
];

export function ServicesShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  // Smooth parallax effect for the device
  useEffect(() => {
    const container = containerRef.current;
    if (!container || window.matchMedia("(hover: none)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);

      frameRef.current = requestAnimationFrame(() => {
        const { left, top, width, height } = containerRef.current!.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePos({ x, y });
      });
    };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const activeService = services[activeIdx];

  return (
    <section 
      ref={containerRef}
      className="py-24 sm:py-32 bg-white relative overflow-hidden text-slate-900 border-y border-slate-300"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none transition-all duration-1000" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Side: 3D Device Mockup Showcase */}
        <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] lg:h-[650px] flex items-center justify-center perspective-[2000px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15, rotateX: 10 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotateY: mousePos.x * 10, 
                rotateX: -mousePos.y * 10,
                y: [0, -10, 0]
              }}
              exit={{ opacity: 0, scale: 0.9, rotateY: 15, transition: { duration: 0.3 } }}
              transition={{ 
                opacity: { duration: 0.5 },
                scale: { type: "spring", stiffness: 100, damping: 20 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              className="relative w-full max-w-[600px] aspect-[16/10] z-10"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Laptop/Desktop Frame Simulation */}
              <div className="absolute inset-0 bg-slate-100 rounded-2xl sm:rounded-[2rem] border-4 sm:border-8 border-slate-300 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden">
                {/* Inner Screen */}
                <div className="absolute inset-1 sm:inset-2 bg-black rounded-xl sm:rounded-2xl overflow-hidden">
                   <motion.img 
                     src={activeService.image} 
                     alt={activeService.title}
                     initial={{ scale: 1.1 }}
                     animate={{ scale: 1 }}
                     transition={{ duration: 1.5, ease: "easeOut" }}
                     className="w-full h-full object-cover opacity-90"
                   />
                   <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                </div>
                {/* Glossy reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-xl sm:rounded-2xl" />
              </div>
              
              {/* Keyboard Base Simulation (Bottom Lip) */}
              <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 w-[110%] h-6 sm:h-8 bg-slate-200 rounded-b-3xl sm:rounded-b-[2rem] shadow-2xl transform translate-z-12 flex justify-center items-start pt-1 border-t border-slate-300">
                 <div className="w-1/4 h-1 sm:h-1.5 bg-[#0a0a0a] rounded-b-xl" />
              </div>

              {/* Floating Accents */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 sm:-right-12 top-1/4 w-24 h-32 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-slate-300 flex items-center justify-center p-4 transform translate-z-24"
              >
                <div className="w-full space-y-2">
                  <div className="h-2 w-1/2 bg-slate-200 rounded-full" />
                  <div className="h-2 w-3/4 bg-slate-200 rounded-full" />
                  <div className="h-16 w-full bg-orange-500/10 rounded-lg border border-orange-500/20" />
                </div>
              </motion.div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Interactive Services List */}
        <div className="w-full lg:w-1/2 space-y-0 relative z-20">
          <div className="mb-10 sm:mb-16">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Capabilities</span>
            <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Engineering that <br/><span className="text-orange-500">Accelerates</span><span className="text-slate-900">.</span>
            </h2>
          </div>

          <div className="flex flex-col border-t border-slate-200">
            {services.map((service, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div 
                  key={service.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className="group relative border-b border-slate-200 cursor-pointer overflow-hidden transition-all duration-500"
                >
                  {/* Active Hover Background Slide */}
                  <div 
                    className={`absolute inset-0 bg-white border border-slate-300 shadow-[0_10px_0_0_rgba(15,23,42,1)] transform origin-left transition-transform duration-500 ease-out ${
                      isActive ? "scale-x-100 opacity-100" : "opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 opacity-100"
                    }`} 
                  />

                  <div className={`relative z-10 px-6 sm:px-8 py-8 transition-all duration-500 ${isActive ? 'py-10' : ''}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 sm:gap-10">
                        <span className={`text-sm sm:text-lg font-mono transition-colors duration-300 ${isActive ? 'text-orange-500 font-bold' : 'text-slate-400'}`}>
                          {service.id}
                        </span>
                        <h3 className={`text-2xl sm:text-4xl transition-all duration-300 tracking-tight ${
                          isActive 
                            ? 'font-black text-slate-900 translate-x-2' 
                            : 'font-bold text-slate-400 group-hover:text-slate-900'
                        }`}>
                          {service.title}
                        </h3>
                      </div>
                      
                      {/* Animated Arrow */}
                      <motion.div 
                        animate={{ x: isActive ? 0 : -10, opacity: isActive ? 1 : 0 }}
                        className="hidden sm:flex w-12 h-12 rounded-full bg-orange-500 items-center justify-center text-white shadow-lg shadow-orange-500/30"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>

                    {/* Expanding Description */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pl-14 sm:pl-20 pr-4 sm:pr-16 pt-4 text-slate-600 text-lg leading-relaxed">
                            {service.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
