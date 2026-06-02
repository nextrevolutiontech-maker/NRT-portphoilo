import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Globe, RefreshCw, ExternalLink, ShieldCheck, Database, Layers, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SEO } from "../components/SEO";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { toast } from "sonner";
import { API_BASE_URL } from "../../config";

interface Project {
  id?: number;
  title: string;
  industry: string; // Category
  challenge: string; // Description
  solution: string; // Tech Stack as string
  tech_stack?: string[]; // Tech Stack as array
  image_url: string;
  live_url: string;
}

// Fallback static dataset in case the API call returns empty or fails (ensures 100% uptime)
const fallbackProjects: Project[] = [
  {
    title: "Feni Finance",
    live_url: "https://feni.finance/",
    industry: "FinTech",
    challenge: "Decentralized yield optimization and multi-chain liquidity management dashboard.",
    solution: "Ethers.js, Solidity Smart Contracts, React, TailwindCSS, Node.js",
    image_url: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "TrueCV Builder",
    live_url: "https://truecv.com/",
    industry: "SaaS",
    challenge: "AI-driven professional CV builder and career profile optimizer with export tools.",
    solution: "Next.js, OpenAI API, Node.js, Express, PostgreSQL, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "The AusTrades",
    live_url: "https://www.theaustrades.com/",
    industry: "Enterprise",
    challenge: "Australian B2B trade hub connecting verified material suppliers and global shippers.",
    solution: "React, Node.js, Express, PostgreSQL, Mapbox API, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "BYO Test Portal",
    live_url: "https://byo-testing.vercel.app/",
    industry: "Operations & On-Demand",
    challenge: "Internal automated regression testing panel and build status monitor portal.",
    solution: "Vite, React, Firebase, TailwindCSS, Automated testing integrations",
    image_url: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Sachdeva Stocks",
    live_url: "https://sachdeva-stocks.com/",
    industry: "FinTech",
    challenge: "Real-time stock market analysis, charting, and equity portfolio advisory portal.",
    solution: "React, Chart.js, FastAPI, PostgreSQL, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "MainStreet Dental",
    live_url: "http://mainstreetdental.com.au/",
    industry: "Healthcare",
    challenge: "Australian dental clinic booking portal and medical appointment synchronization calendar.",
    solution: "React, Express, Google Calendar API integration, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Capital 40 Advisory",
    live_url: "http://capital40.com/",
    industry: "FinTech",
    challenge: "Asset management portal and high-volume equity investment advisory tracking platform.",
    solution: "React, Node.js, MongoDB, TailwindCSS, Financial metrics engine",
    image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Golden Age Healings",
    live_url: "https://www.goldenagehealings.com/",
    industry: "Healthcare",
    challenge: "Wellness advisory booking platform with customer assessment portals.",
    solution: "React, Stripe API, Node.js, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "BookMyTask",
    live_url: "https://bookmytask.in/",
    industry: "Operations & On-Demand",
    challenge: "Indian local service booking platform linking verified maintenance contractors and users.",
    solution: "React Native, React, Node.js, PostgreSQL, Google Maps API",
    image_url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "TrueHRIS Portal",
    live_url: "https://truehris.com/",
    industry: "SaaS",
    challenge: "Enterprise HR information system covering attendance trackers, leaf ledgers, and payslip runs.",
    solution: "React, TypeScript, Node.js, PostgreSQL",
    image_url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Gulf Electricals",
    live_url: "https://gulf-el.com/",
    industry: "Enterprise",
    challenge: "Middle-East industrial electrical equipment catalog and wholesale inquiry dispatch portal.",
    solution: "React, Express, Node.js, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Sellyt Marketplace",
    live_url: "https://sellyt.com/",
    industry: "eCommerce",
    challenge: "Peer-to-peer electronics trade marketplace with built-in device condition assessment tool.",
    solution: "Next.js, React, Node.js, PostgreSQL, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "LearningConnect Construction",
    live_url: "https://learningconnectconstruction.co.uk/",
    industry: "EdTech",
    challenge: "UK construction safety certification course portal and virtual exam processor.",
    solution: "React, Express, PostgreSQL, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1590402498589-068840b5bb5d?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "LearningConnect LMS",
    live_url: "https://learningconnect.co.uk/",
    industry: "EdTech",
    challenge: "Complete corporate LMS platform with video lessons, quiz engines, and compliance certificates.",
    solution: "React, Express, PostgreSQL, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "VLS Sourcing",
    live_url: "https://vlssourcing.com/",
    industry: "Enterprise",
    challenge: "Global logistics material sourcing directory and wholesale supply chain coordinator.",
    solution: "React, Express, Node.js, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Alirok Logistics",
    live_url: "https://alirok.com/",
    industry: "Logistics",
    challenge: "End-to-end global freight comparison engine and shipping label generator.",
    solution: "Next.js, React, Google Maps API, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "WayLight Portfolio",
    live_url: "https://waylight.me/",
    industry: "SaaS",
    challenge: "Personal branding ecosystem and digital portfolio aggregator for freelance consultants.",
    solution: "Vite, React, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Neemb Workspaces",
    live_url: "https://neemb.work/",
    industry: "SaaS",
    challenge: "Co-working space booking portal, hot-desk scheduler, and billing dashboard.",
    solution: "React, TypeScript, Node.js, PostgreSQL",
    image_url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "NeuraHub AI",
    live_url: "https://www.neurahub.app/",
    industry: "Agentic AI",
    challenge: "AI model aggregator and generative image prompt builder dashboard.",
    solution: "Vite, React, TailwindCSS, Replicate API integration",
    image_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Pulse Portal",
    live_url: "https://pulse-portal.com/login",
    industry: "Healthcare",
    challenge: "HIPAA-compliant health records portal for patient logins and diagnostic history.",
    solution: "React, Node.js, PostgreSQL, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1504813184591-01552ff75805?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Kidilo Toys",
    live_url: "https://www.kidilo.com/",
    industry: "eCommerce",
    challenge: "UK baby toys and accessories eCommerce webstore with multi-category filters.",
    solution: "React, Express, Stripe API, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "The HomeMade",
    live_url: "https://the-home-made.vercel.app/",
    industry: "eCommerce",
    challenge: "Home-cooked food subscription delivery scheduler with custom daily menu selections.",
    solution: "React, TypeScript, Node.js, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "BabyShop UK",
    live_url: "https://baby-shop-eta-weld.vercel.app/",
    industry: "eCommerce",
    challenge: "Mobile-responsive infant accessories and baby wear storefront with rapid checkout.",
    solution: "React, TypeScript, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "AlHarmain Foods",
    live_url: "https://alharmain-dun.vercel.app/",
    industry: "eCommerce",
    challenge: "Pakistani wholesale spices and dry fruits delivery and sales order portal.",
    solution: "React, TypeScript, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Vytrion Tech",
    live_url: "https://vytrion-technologies.vercel.app/",
    industry: "SaaS",
    challenge: "Cloud infrastructure status monitor and automated performance metrics dashboard.",
    solution: "React, Chart.js, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Mazaadati Auctions",
    live_url: "https://mazaadati.com/#dashboard",
    industry: "Operations & On-Demand",
    challenge: "Middle-East high-end commercial asset auction and bidder dashboard.",
    solution: "Next.js, React, Socket.io, PostgreSQL",
    image_url: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Enterprise POS & Inventory",
    live_url: "https://enterprise-pos-inventory-system.vercel.app/",
    industry: "SaaS",
    challenge: "Multi-warehouse real-time POS terminal and barcoded stock transfer catalog.",
    solution: "React, TypeScript, Node.js, PostgreSQL",
    image_url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "EP-M Engineering",
    live_url: "https://www.ep-m.com/",
    industry: "Enterprise",
    challenge: "Industrial manufacturing parts catalog and global wholesale quotation engine.",
    solution: "React, Express, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "McLean Plastering & Painting",
    live_url: "https://mcleanplastering-painting.com.au/",
    industry: "Enterprise",
    challenge: "Australian construction contractor profile and service request booking portal.",
    solution: "React, Express, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Ithaca Crisis Center",
    live_url: "https://ithacacrisis.org/",
    industry: "Healthcare",
    challenge: "Emergency help registry, crisis counselor directory, and support hotline dashboard.",
    solution: "React, Express, PostgreSQL, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1469571486040-7a9b13de3d75?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Advanced Sistima",
    live_url: "https://advancedsistima.com/",
    industry: "Enterprise",
    challenge: "Industrial engineering pipeline controls and automated system monitoring panels.",
    solution: "React, Node.js, InfluxDB, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Liberty Aerotech",
    live_url: "https://www.libertyaerotech.com/",
    industry: "Enterprise",
    challenge: "Aviation components manufacturer catalog and compliance verification directory.",
    solution: "React, Express, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Top Traders Academy",
    live_url: "https://toptraders.pro/",
    industry: "FinTech",
    challenge: "Professional crypto and equity trading education community portal.",
    solution: "React, Node.js, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Totus Software Services",
    live_url: "https://totus-ss.com/",
    industry: "SaaS",
    challenge: "Multi-tenant cloud infrastructure and automated software deployment pipeline monitor.",
    solution: "React, Express, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "BookRecord Services",
    live_url: "https://bookrecordservices.com/",
    industry: "SaaS",
    challenge: "Online bookkeeper platform, ledger audits, and financial reporting dashboards.",
    solution: "React, Express, PostgreSQL, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Thompson Clinic",
    live_url: "https://thompsonclinic.ca/",
    industry: "Healthcare",
    challenge: "Canadian private healthcare medical consultations and patient reminders registry.",
    solution: "React, Google Calendar API, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Saba Jojo Saloon",
    live_url: "https://saba-jojo-saloon.vercel.app/",
    industry: "Operations & On-Demand",
    challenge: "Beauty saloon appointment booking application and staff shift manager portal.",
    solution: "React, Firebase, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "MedSpa Clinic",
    live_url: "https://medspa-frontend.vercel.app/",
    industry: "Healthcare",
    challenge: "Cosmetic medicine treatments booking catalog and customer profile manager.",
    solution: "React, TypeScript, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
  }
];

const categories = ["All", "FinTech", "SaaS", "eCommerce", "EdTech", "Healthcare", "Enterprise", "Operations & On-Demand"];

export function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Track refresh state for each card url to show loading spinners on individual cards
  const [refreshingUrls, setRefreshingUrls] = useState<Record<string, boolean>>({});
  const [syncing, setSyncing] = useState(false);

  const fetchProjects = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/projects`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      
      // If backend has projects, use them. Otherwise, seed from fallback.
      if (data && data.length > 0) {
        setProjects(data);
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
    toast.loading("Capturing fresh homepage screenshot...", { id: `refresh-${url}` });

    try {
      const res = await fetch(`${API_BASE_URL}/api/projects/refresh-screenshot`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
      });

      if (!res.ok) throw new Error("Server failed to refresh");
      const data = await res.json();

      // Update locally
      setProjects(prev => prev.map(p => {
        if (p.live_url === url) {
          return { ...p, image_url: data.project.image_url };
        }
        return p;
      }));

      toast.success("Screenshot refreshed successfully!", { 
        id: `refresh-${url}`,
        description: "Cloudinary upload completed and database record synced."
      });
    } catch (err: any) {
      toast.error("Screenshot refresh failed", { 
        id: `refresh-${url}`,
        description: "Check backend connection or site online status." 
      });
    } finally {
      setRefreshingUrls(prev => ({ ...prev, [url]: false }));
    }
  };

  const handleTriggerSync = async () => {
    setSyncing(true);
    toast.loading("Batch screenshots sync dispatched in background...", { id: "sync" });

    try {
      const res = await fetch(`${API_BASE_URL}/api/projects/sync`, { method: "POST" });
      if (!res.ok) throw new Error();
      
      toast.success("Sync task dispatched successfully!", {
        id: "sync",
        description: "Headless browser is running screenshots updates in the background. Refresh in 2 mins."
      });
    } catch (err) {
      toast.error("Failed to trigger dataset sync", { id: "sync" });
    } finally {
      setSyncing(false);
    }
  };

  const filteredProjects = projects.filter(project => {
    if (activeCategory === "All") return true;
    return project.industry.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#0F172A] overflow-x-hidden">
      <SEO 
        title="Our Complete Automated Project Portfolio"
        description="Browse our real production work automated from client URLs. Featuring screenshot generators and Cloudinary sync systems."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-48 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3A5CCC]/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="mx-auto max-w-7xl relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 font-black uppercase text-xs tracking-widest transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3A5CCC] mb-4">Automated Portfolio</div>
              <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] mb-6">
                Client Project <br />
                <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3A5CCC] to-[#14B8A6]">Deployments</span>
              </h1>
              <p className="text-lg text-white/50 font-semibold max-w-2xl leading-relaxed">
                A live, self-generating showcase of {projects.length}+ production client systems. Fully automated screenshot capture (Puppeteer/Playwright) and Cloudinary media management.
              </p>
            </div>
            
            <button 
              onClick={handleTriggerSync}
              disabled={syncing}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-[#3A5CCC] hover:border-transparent text-white px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-wider transition-all disabled:opacity-50 cursor-pointer shadow-xl"
            >
              <Database className="w-4 h-4 animate-pulse" />
              Sync Datasets
            </button>
          </div>
        </div>
      </section>

      {/* Category filters & Cards Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24 relative z-20">
        <div className="mx-auto max-w-7xl">
          
          {/* Category Filter list */}
          <div className="flex flex-wrap items-center gap-3 mb-16 pb-4 border-b border-black/5">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat 
                    ? "bg-[#0F172A] text-white shadow-lg"
                    : "bg-white border border-black/5 text-[#0F172A]/50 hover:bg-black/5 hover:text-[#0F172A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="py-32 flex flex-col items-center justify-center gap-4 text-[#0F172A]/40 font-bold">
              <RefreshCw className="w-10 h-10 animate-spin text-[#3A5CCC]" />
              <span>Fetching and rendering live screenshots...</span>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, i) => {
                  const techStack = project.tech_stack || (project.solution ? project.solution.split(',').map(s => s.trim()) : []);
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
                          onError={(e) => {
                            // Fallback if image fails to load
                            e.currentTarget.src = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80";
                          }}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Action buttons overlay */}
                        <div className="absolute top-4 right-4 flex gap-2">
                          <button
                            onClick={() => handleRefreshScreenshot(project.live_url, project.id)}
                            disabled={isRefreshing}
                            title="Regenerate Screenshot"
                            className="w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md text-white border border-white/10 flex items-center justify-center hover:bg-[#3A5CCC] hover:border-transparent transition-all cursor-pointer disabled:opacity-50"
                          >
                            <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
                          </button>
                          <a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md text-white border border-white/10 flex items-center justify-center hover:bg-[#3A5CCC] hover:border-transparent transition-all"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                        
                        {/* Category Badge */}
                        <span className="absolute bottom-4 left-4 bg-[#3A5CCC] text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-lg shadow-lg">
                          {project.industry}
                        </span>
                      </div>

                      {/* Info body area */}
                      <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold tracking-tight text-[#0F172A]">
                            {project.title}
                          </h3>
                          <p className="text-sm text-[#0F172A]/60 font-semibold leading-relaxed">
                            {project.challenge}
                          </p>
                        </div>

                        {/* Tech Stack list tags */}
                        <div className="space-y-4 pt-4 border-t border-black/5">
                          <div className="flex flex-wrap gap-1.5">
                            {techStack.slice(0, 4).map((tech, idx) => (
                              <span 
                                key={idx}
                                className="bg-[#F3F4F6] text-[#0F172A]/70 text-[10px] font-black px-3 py-1 rounded-md border border-[#0F172A]/5"
                              >
                                {tech}
                              </span>
                            ))}
                            {techStack.length > 4 && (
                              <span className="bg-[#F3F4F6] text-[#0F172A]/70 text-[10px] font-black px-2.5 py-1 rounded-md">
                                +{techStack.length - 4}
                              </span>
                            )}
                          </div>

                          <div className="flex justify-between items-center text-[10px] font-bold text-[#0F172A]/30">
                            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#14B8A6]" /> SSL Verified</span>
                            <span className="flex items-center gap-1"><Layers className="w-3.5 h-3.5 text-[#3A5CCC]" /> Active Build</span>
                          </div>
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

      <PreFooterCTA 
        headline="Have a project that needs building or automating?"
        subtext="Book a free consultation and let's map out your custom ERP, SaaS, or workflow automation."
      />
    </div>
  );
}
