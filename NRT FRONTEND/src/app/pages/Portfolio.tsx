import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RefreshCw, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SEO } from "../components/SEO";
import { toast } from "sonner";
import { API_BASE_URL } from "../../config";

interface Project {
  id?: number;
  title: string;
  category: string; 
  industry_tag: string; 
  challenge: string;
  solution: string;
  outcome?: string;
  tech_stack?: string[]; 
  image_url: string;
  live_url: string;
}

const fallbackProjects: Project[] = [
  {
    title: "Retail Operations & Inventory Platform",
    live_url: "https://enterprise-pos-inventory-system.vercel.app/",
    category: "ERP Systems",
    industry_tag: "Retail",
    challenge: "The client struggled with operational visibility across departments, managing inventory through disconnected spreadsheets which caused stock discrepancies and reporting delays.",
    solution: "A custom ERP system designed to centralize inventory management, purchasing workflows, and real-time point-of-sale data into a single operational hub.",
    outcome: "Improved operational visibility, faster reporting cycles, and reduced manual administration across multiple warehouse locations.",
    tech_stack: ["ERP Development", "Business Intelligence", "Custom Software Development", "API Integrations"],
    image_url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "AI-Powered Creative Workflow Engine",
    live_url: "https://www.neurahub.app/",
    category: "AI Automation",
    industry_tag: "Marketing",
    challenge: "Marketing teams faced significant bottlenecks due to manual content creation processes and fragmented prompt engineering workflows.",
    solution: "An automated AI model aggregator that streamlines generative workflows and centralizes creative asset generation into a cohesive business system.",
    outcome: "Automated manual processes, centralized operations, and significantly improved workflow efficiency for creative teams.",
    tech_stack: ["AI Automation", "Workflow Automation", "API Integrations", "Custom Software Development"],
    image_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Enterprise HR & Payroll Platform",
    live_url: "https://truehris.com/",
    category: "Business Platforms",
    industry_tag: "Human Resources",
    challenge: "The organization experienced severe delays and errors due to manual attendance tracking and disconnected payroll processing systems.",
    solution: "A centralized business platform that automates attendance ledgers, compliance tracking, and payroll calculations into a single source of truth.",
    outcome: "Reduced manual processes, eliminated calculation errors, and improved overall operational efficiency.",
    tech_stack: ["Business Systems", "Workflow Automation", "Dashboard Systems", "Dedicated Technology Teams"],
    image_url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Industrial Pipeline Monitoring Dashboard",
    live_url: "https://advancedsistima.com/",
    category: "Enterprise Dashboards",
    industry_tag: "Manufacturing",
    challenge: "Factory floor managers lacked real-time visibility into industrial engineering pipelines, leading to reactive maintenance and workflow delays.",
    solution: "A centralized enterprise dashboard system that integrates directly with industrial hardware to provide real-time monitoring and proactive control.",
    outcome: "Faster reporting, improved operational visibility, and streamlined decision-making for facility managers.",
    tech_stack: ["Dashboard Systems", "Business Process Automation", "API Integrations"],
    image_url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Global Supply Chain Coordination System",
    live_url: "https://www.theaustrades.com/",
    category: "Business Platforms",
    industry_tag: "Logistics",
    challenge: "B2B material suppliers were struggling with disconnected logistics tracking and manual order dispatching, causing severe operational bottlenecks.",
    solution: "A custom business software hub connecting suppliers and global shippers securely, automating the entire procurement and tracking lifecycle.",
    outcome: "Centralized operations, improved workflow efficiency, and robust supply chain visibility.",
    tech_stack: ["Custom Business Software", "API Integrations", "Workflow Automation"],
    image_url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Automated Workforce Dispatching System",
    live_url: "https://bookmytask.in/",
    category: "Mobile Apps",
    industry_tag: "Operations",
    challenge: "The client faced constant miscommunications and workflow delays due to the manual dispatching of local contractors via legacy communication tools.",
    solution: "An on-demand mobile application integrated with a centralized administrative dashboard featuring automated dispatching logic.",
    outcome: "Automated manual processes, centralized contractor management, and improved operational efficiency.",
    tech_stack: ["Custom Software Development", "API Integrations", "Workflow Automation"],
    image_url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
  }
];

const categories = ["All", "ERP Systems", "AI Automation", "Business Platforms", "Enterprise Dashboards", "Mobile Apps", "Websites"];

export function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  
  const [refreshingUrls, setRefreshingUrls] = useState<Record<string, boolean>>({});

  const fetchProjects = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/projects`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      
      if (data && data.length > 0) {
        // Map backend generic data to ensure it renders safely
        const mappedData = data.map((p: any) => ({
           ...p,
           category: p.category || "General",
           industry_tag: p.industry_tag || p.industry || "Technology",
           challenge: p.challenge || "Optimizing operations and digital footprint.",
           solution: p.solution || p.description || "Custom business software integration.",
           outcome: p.outcome || "Improved workflow efficiency."
        }));
        setProjects(mappedData); 
      } else {
        setProjects(fallbackProjects);
      }
    } catch (e) {
      console.warn("Failed to fetch database projects. Using fallback dataset.");
      setProjects(fallbackProjects);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleRefreshScreenshot = async (url: string, projectId?: number) => {
    setRefreshingUrls(prev => ({ ...prev, [url]: true }));
    toast.loading("Capturing fresh system screenshot...", { id: `refresh-${url}` });

    try {
      const res = await fetch(`${API_BASE_URL}/api/projects/refresh-screenshot`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
      });

      if (!res.ok) throw new Error("Server failed to refresh");
      const data = await res.json();

      setProjects(prev => prev.map(p => {
        if (p.live_url === url) {
          return { ...p, image_url: data.project.image_url };
        }
        return p;
      }));

      toast.success("Screenshot refreshed successfully!", { 
        id: `refresh-${url}`,
      });
    } catch (err: any) {
      toast.error("Screenshot refresh failed", { 
        id: `refresh-${url}`,
      });
    } finally {
      setRefreshingUrls(prev => ({ ...prev, [url]: false }));
    }
  };

  const filteredProjects = projects.filter(project => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden">
      <SEO 
        title="Business Transformation Case Studies | NRT"
        description="Explore how Next Revolution Tech improves efficiency and automates workflows through ERP systems, AI automation, and custom business software."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3A5CCC]/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="mx-auto max-w-7xl relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 font-black uppercase text-xs tracking-widest transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="max-w-4xl">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3A5CCC] mb-4">Case Studies</div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] mb-6">
              Business Transformation In Action
            </h1>
            <p className="text-lg text-white/60 font-semibold max-w-3xl leading-relaxed mb-10">
              Explore how organizations improve efficiency, automate workflows and scale operations through ERP systems, AI automation and custom business software delivered by Next Revolution Tech.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
               <span className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors">ERP Systems</span>
               <span className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors">AI Automation</span>
               <span className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors">Business Process Optimization</span>
               <span className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors">Dedicated Technology Teams</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 border-b border-black/5 px-4 sm:px-6 lg:px-12 xl:px-24 sticky top-[80px] bg-white/80 backdrop-blur-xl z-30">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat 
                    ? "bg-[#0F172A] text-white shadow-lg"
                    : "bg-[#F8FAFC] border border-black/5 text-[#0F172A]/60 hover:bg-black/5 hover:text-[#0F172A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Alternate Stacked Layout (40% Content / 60% Image) */}
      <section className="py-24 relative z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-24">
          {loading ? (
            <div className="py-32 flex flex-col items-center justify-center gap-4 text-[#0F172A]/40 font-bold">
              <RefreshCw className="w-10 h-10 animate-spin text-[#3A5CCC]" />
              <span>Analyzing business systems...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => {
                  const techStack = project.tech_stack || (project.solution ? project.solution.split(',').map((s: string) => s.trim()) : []);
                  const isRefreshing = refreshingUrls[project.live_url] || false;

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      key={project.live_url}
                      className="group bg-white rounded-[2rem] border border-black/5 overflow-hidden shadow-[0_20px_40px_rgba(11,27,53,0.02)] flex flex-col h-full hover:shadow-2xl hover:border-black/10 transition-all duration-500"
                    >
                      {/* Image header area */}
                      <div className="relative aspect-video bg-[#0F172A] overflow-hidden">
                        <img 
                          src={project.image_url || "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"}
                          alt={`${project.title} screenshot`}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                        
                        <div className="absolute top-4 left-4 flex gap-2">
                           <span className="bg-white/90 backdrop-blur-md text-[#0F172A] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
                             {project.category}
                           </span>
                        </div>

                        <button
                          onClick={() => handleRefreshScreenshot(project.live_url, project.id)}
                          disabled={isRefreshing}
                          title="Regenerate Screenshot"
                          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/40 backdrop-blur-md text-white border border-white/10 flex items-center justify-center hover:bg-[#3A5CCC] hover:border-transparent transition-all cursor-pointer disabled:opacity-50 opacity-0 group-hover:opacity-100"
                        >
                          <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
                        </button>
                      </div>

                      {/* Info body area */}
                      <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold tracking-tight text-[#0F172A] border-b border-black/5 pb-4">
                            {project.title}
                          </h3>
                          
                          <div className="space-y-3">
                             <div className="text-sm">
                               <span className="font-bold text-[#0F172A] block mb-1">Challenge:</span>
                               <span className="text-[#0F172A]/70 line-clamp-2">{project.challenge}</span>
                             </div>
                             <div className="text-sm">
                               <span className="font-bold text-[#0F172A] block mb-1">Solution:</span>
                               <span className="text-[#0F172A]/70 line-clamp-2">{project.solution}</span>
                             </div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-black/5">
                          <a 
                            href={project.live_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[11px] font-black uppercase tracking-widest text-[#3A5CCC] hover:text-[#0F172A] transition-colors inline-flex items-center gap-1.5 group/link"
                          >
                            Inspect System <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Transformation Outcomes Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#F8FAFC] border-y border-[#0F172A]/5 text-center">
        <div className="mx-auto max-w-5xl">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3A5CCC] mb-4">The NRT Impact</div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-[#0F172A] leading-tight mb-16">
            Transformation Outcomes
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
             {[
               "Reduced Manual Work", 
               "Improved Visibility", 
               "Automated Reporting", 
               "Operational Efficiency", 
               "Faster Decision Making", 
               "Process Optimization",
               "Business Scalability"
             ].map((outcome, i) => (
               <div key={i} className="bg-white border border-[#0F172A]/5 px-8 py-5 rounded-2xl text-lg font-bold text-[#0F172A] shadow-sm hover:border-[#14B8A6] hover:shadow-md transition-all flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#14B8A6]" />
                  {outcome}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Industries We Support Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-center">
        <div className="mx-auto max-w-5xl">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0F172A]/40 mb-10">Industries We Support</div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
             {[
               "Healthcare", 
               "Manufacturing", 
               "Retail", 
               "Logistics", 
               "Education", 
               "Food & Beverage",
               "Professional Services",
               "E-Commerce"
             ].map((industry, i) => (
               <div key={i} className="text-lg font-bold text-[#0F172A]/70">
                  {industry}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24 text-center bg-[#0F172A] text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3A5CCC]/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
         
         <div className="mx-auto max-w-4xl relative z-10">
            <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-white leading-tight mb-8">
               Ready To Improve <br />Operations?
            </h2>
            <p className="text-xl font-medium text-slate-400 max-w-2xl mx-auto mb-16">
               Let's identify bottlenecks, automate workflows and build systems that support long-term business growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link to="/contact" className="bg-[#3A5CCC] text-white px-12 py-5 rounded-2xl text-xl font-black shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                  Book Strategy Call <ArrowRight className="w-5 h-5" />
               </Link>
               <Link to="/services" className="bg-white/5 border border-white/10 text-white px-12 py-5 rounded-2xl text-xl font-black hover:bg-white/10 transition-all flex items-center justify-center">
                  Explore Solutions
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
