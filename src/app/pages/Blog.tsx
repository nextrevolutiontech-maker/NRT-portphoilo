import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { InteractiveHero3D } from "../components/ui/InteractiveHero3D";

export function Blog() {
  const posts = [
    {
      title: "Why Tech Subscriptions are the Future of Development",
      excerpt: "Traditional agencies are slow. Subscriptions are fast. Learn why businesses are switching to the tech partner model.",
      date: "Oct 24, 2025",
      readTime: "5 min read",
      category: "Strategy",
      color: "from-[#6366f1] to-[#a855f7]",
      accent: "bg-white/20"
    },
    {
      title: "Optimizing Your Shopify Store for Peak Performance",
      excerpt: "Simple fixes that can double your store speed and increase conversions by up to 20%.",
      date: "Oct 12, 2025",
      readTime: "8 min read",
      category: "eCommerce",
      color: "from-[#F58220] to-[#FF4D00]",
      accent: "bg-white/20"
    },
    {
      title: "Common API Integration Hurdles and How to Fix Them",
      excerpt: "A guide to navigating the complex world of payment gateways and custom API connections.",
      date: "Sep 28, 2025",
      readTime: "6 min read",
      category: "Tech",
      color: "from-[#11998E] to-[#38EF7D]",
      accent: "bg-white/20"
    },
    {
      title: "Why Pakistani Businesses Need a Website in 2025",
      excerpt: "The digital landscape in Pakistan is shifting. Learn why having a professional web presence is no longer optional.",
      date: "Nov 05, 2025",
      readTime: "7 min read",
      category: "Growth",
      color: "from-[#FF4D00] to-[#FF005C]",
      accent: "bg-white/20"
    },
    {
      title: "How to Hire a Dedicated Developer Without the Risk",
      excerpt: "Avoid the common pitfalls of hiring freelancers and discover the power of dedicated engineering partnerships.",
      date: "Nov 12, 2025",
      readTime: "6 min read",
      category: "Hiring",
      color: "from-[#0057FF] to-[#00A3FF]",
      accent: "bg-white/20"
    },
    {
      title: "eCommerce in Pakistan: What You Need to Know",
      excerpt: "From payment gateways like JazzCash to logistics, we break down the essentials of selling online in Pakistan.",
      date: "Nov 18, 2025",
      readTime: "10 min read",
      category: "eCommerce",
      color: "from-[#FFD600] to-[#FF9900]",
      accent: "bg-white/20"
    },
    {
      title: "Top 5 Tech Mistakes Small Businesses Make",
      excerpt: "Are you over-engineering or neglecting security? Here are the top mistakes that kill business growth.",
      date: "Dec 02, 2025",
      readTime: "5 min read",
      category: "Tech",
      color: "from-[#9900FF] to-[#FF00FF]",
      accent: "bg-white/20"
    },
    {
      title: "How NRT Helped a Karachi Business Scale Online",
      excerpt: "A deep dive into how we transformed a local retail shop into a national eCommerce success story.",
      date: "Dec 10, 2025",
      readTime: "8 min read",
      category: "Case Study",
      color: "from-[#00D2FF] to-[#3a7bd5]",
      accent: "bg-white/20"
    },
    {
      title: "The Rise of Agentic AI in Modern Business",
      excerpt: "Why autonomous AI agents are becoming the next big thing in workflow automation and customer support.",
      date: "Dec 18, 2025",
      readTime: "9 min read",
      category: "AI",
      color: "from-[#8E2DE2] to-[#4A00E0]",
      accent: "bg-white/20"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0B1B35] overflow-hidden">
      <Helmet>
        <title>Blog | Next Revolution Tech</title>
        <meta name="description" content="Tech insights, eCommerce strategies, and development tips for growing businesses." />
      </Helmet>

      {/* SECTION 1: INTRO - Dark Hero */}
      <section className="pt-32 pb-48 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#0B1B35] text-white relative overflow-hidden">
        <InteractiveHero3D />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F58220]/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="mx-auto max-w-7xl relative z-10 text-center sm:text-left">
           <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F58220] mb-8">NRT Insights</div>
           <h1 className="text-5xl sm:text-7xl lg:text-[8rem] font-black tracking-tighter leading-[0.85] mb-12">
              Latest <br />
              <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] to-[#FF4D00]">Insights</span> & <br />
              Strategies.
           </h1>
           <p className="text-xl sm:text-3xl font-bold text-white/50 leading-tight max-w-2xl">
              Thoughts on technology, business growth, and making development accessible for everyone.
           </p>
        </div>
      </section>
      {/* SECTION 2: BLOG GRID */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24 relative z-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 mb-32 sm:mb-40">
            {posts.map((post, i) => (
              <Link to="/contact" key={i} className="block group">
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
                    <div className="flex flex-col gap-0.5 text-[9px] font-black text-white/40 uppercase tracking-widest">
                      <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 group-hover:text-white transition-colors">
                       Read More +
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
            <div className="relative rounded-[3rem] sm:rounded-[4rem] bg-[#060E1B] text-white p-12 sm:p-20 lg:p-24 text-center overflow-hidden shadow-2xl border border-white/5">
               <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F58220]/10 rounded-full blur-[120px] pointer-events-none" />
               
               <div className="relative z-10">
                 <h2 className="text-4xl sm:text-7xl font-black mb-6 tracking-tighter leading-[0.9]">Stay <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] to-[#FF4D00]">Updated</span>.</h2>
                 <p className="text-lg sm:text-xl font-bold text-white/50 mb-12 max-w-xl mx-auto">
                    Get our latest tech insights and growth strategies delivered straight to your inbox.
                 </p>

                 <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                    <div className="flex-grow relative">
                       <input 
                         type="email" 
                         placeholder="Enter your email" 
                         className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-[#F58220]/50 transition-all placeholder:text-white/20 shadow-inner"
                       />
                    </div>
                    <button className="bg-[#F58220] text-white px-10 py-5 rounded-2xl text-lg font-black shadow-[0_20px_40px_rgba(245,130,32,0.3)] hover:scale-105 transition-all whitespace-nowrap">
                       Subscribe Now
                    </button>
                 </form>
               </div>
            </div>
          </div>

      <PreFooterCTA 
        headline="Ready to scale your content strategy?"
        subtext="Let's build a tech engine that powers your growth, from blog to backend."
      />
    </div>
  );
}
