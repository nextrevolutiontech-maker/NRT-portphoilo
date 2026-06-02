import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { InteractiveHero3D } from "../components/ui/InteractiveHero3D";
import { SEO } from "../components/SEO";

export function Blog() {
  const posts = [
    {
      slug: "custom-erp-cost",
      title: "Custom ERP Development Cost: The Ultimate Guide",
      excerpt: "How much does it actually cost to build a custom ERP system? We break down database design, module costs, and comparison with off-the-shelf software.",
      date: "May 28, 2026",
      readTime: "7 min read",
      category: "ERP & Automation",
      color: "from-[#6366f1] to-[#a855f7]"
    },
    {
      slug: "best-erp-manufacturing",
      title: "Best ERP For Manufacturing Businesses: Why Excel is Costing You Millions",
      excerpt: "Excel sheets desync, cause double-entry errors, and lack FBR auto-invoicing. Learn how custom manufacturing ERPs solve inventory control.",
      date: "May 20, 2026",
      readTime: "6 min read",
      category: "Manufacturing",
      color: "from-[#3A5CCC] to-[#27324A]"
    },
    {
      slug: "odoo-vs-custom-erp",
      title: "Odoo vs Custom ERP: Which Option Fits Your Business Growth?",
      excerpt: "Odoo is quick to start but licensing costs scale fast. Custom ERP is a one-time investment built for your exact workflow. We compare both options.",
      date: "May 15, 2026",
      readTime: "8 min read",
      category: "Strategy",
      color: "from-[#11998E] to-[#38EF7D]"
    },
    {
      slug: "ai-automation-small-business",
      title: "AI Automation For Small Businesses: How to Save 20+ Hours a Week",
      excerpt: "Learn how small businesses are using autonomous AI agents to automate customer replies, qualify leads, and sync invoices in real-time.",
      date: "May 10, 2026",
      readTime: "5 min read",
      category: "AI & Workflows",
      color: "from-[#27324A] to-[#3A5CCC]"
    },
    {
      slug: "inventory-software-guide",
      title: "Inventory Management Software: A Complete Guide for Pakistani Brands",
      excerpt: "From warehouse tracking to FBR API compliance, here is everything you need to know about setting up a reliable inventory dashboard in Pakistan.",
      date: "May 05, 2026",
      readTime: "8 min read",
      category: "Logistics",
      color: "from-[#0057FF] to-[#00A3FF]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#0F172A] overflow-hidden">
      <SEO
        title="NRT Blog | ERP, SaaS & Automation Insights"
        description="Practical writing on custom ERP cost, manufacturing software, AI workflow automation, and the decisions behind reliable digital products."
      />

      {/* SECTION 1: INTRO - Dark Hero */}
      <section className="pt-32 pb-48 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#0F172A] text-white relative overflow-hidden">
        <InteractiveHero3D />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3A5CCC]/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="mx-auto max-w-7xl relative z-10 text-center sm:text-left">
           <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3A5CCC] mb-8">NRT Insights</div>
           <h1 className="text-5xl sm:text-7xl lg:text-[8rem] font-black tracking-tighter leading-[0.85] mb-12">
              Notes on <br />
              <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3A5CCC] to-[#27324A]">building</span> better <br />
              systems.
           </h1>
           <p className="text-xl sm:text-3xl font-bold text-white/50 leading-tight max-w-2xl">
              Practical writing on websites, custom ERPs, business automations, and scaling software products.
           </p>
        </div>
      </section>

      {/* SECTION 2: BLOG GRID */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24 relative z-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 mb-32 sm:mb-40">
            {posts.map((post, i) => (
              <Link to={`/blog/${post.slug}`} key={i} className="block group">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, scale: 1.01 }}
                  className={`relative bg-gradient-to-br ${post.color} rounded-[2.5rem] p-8 sm:p-10 shadow-[0_30px_60px_-15px_rgba(11,27,53,0.3)] flex flex-col h-full overflow-hidden border border-white/10`}
                >
                  <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] pointer-events-none" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="flex items-center gap-3 mb-8 relative z-10">
                    <div className="bg-white/10 backdrop-blur-md rounded-full px-5 py-1.5 text-[9px] font-black uppercase tracking-[0.3em] text-white border border-white/20">
                      {post.category}
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black mb-5 tracking-tighter leading-[1.1] text-white relative z-10 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-base font-bold text-white/70 mb-10 leading-relaxed relative z-10 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-8 border-t border-white/10 relative z-10 mt-auto">
                    <div className="flex flex-col gap-0.5 text-[9px] font-black text-white/40 uppercase tracking-widest text-left">
                      <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors">
                       Read Article +
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA - Dark */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-24 mb-32">
        <div className="relative rounded-[3rem] sm:rounded-[4rem] bg-[#0F172A] text-white p-12 sm:p-20 lg:p-24 text-center overflow-hidden shadow-2xl border border-white/5">
           <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3A5CCC]/10 rounded-full blur-[120px] pointer-events-none" />
           
           <div className="relative z-10">
             <h2 className="text-4xl sm:text-7xl font-black mb-6 tracking-tighter leading-[0.9]">Stay <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3A5CCC] to-[#27324A]">Updated</span>.</h2>
             <p className="text-lg sm:text-xl font-bold text-white/50 mb-12 max-w-xl mx-auto">
                Get our latest technical articles and ERP workflow insights delivered straight to your inbox.
             </p>

             <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <div className="flex-grow relative">
                   <input 
                     type="email" 
                     placeholder="Enter your email" 
                     className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-[#3A5CCC]/50 transition-all placeholder:text-white/20 shadow-inner"
                   />
                </div>
                <button className="bg-[#3A5CCC] text-white px-10 py-5 rounded-2xl text-lg font-black shadow-[0_20px_40px_rgba(58,92,204,0.3)] hover:scale-105 transition-all whitespace-nowrap">
                   Subscribe Now
                </button>
             </form>
           </div>
        </div>
      </div>

      <PreFooterCTA 
        headline="Ready to improve the system behind your business?"
        subtext="Let's build the custom ERP, database integrations, and workflows your team can actually rely on."
      />
    </div>
  );
}
