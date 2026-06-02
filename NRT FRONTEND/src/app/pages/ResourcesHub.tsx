import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { BookOpen, Code2, Rocket, Newspaper, ArrowUpRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { InteractiveHero3D } from "../components/ui/InteractiveHero3D";

export function ResourcesHub() {
  const resources = [
    {
      title: "Case Studies",
      desc: "Deep technical breakdowns of our past enterprise ERP and SaaS deployments.",
      icon: <Rocket className="w-10 h-10" />,
      link: "/case-studies",
      color: "from-[#0057FF] to-[#00A3FF]",
      metrics: "ROI & Architecture"
    },
    {
      title: "Technology Stack",
      desc: "Explore the frameworks, cloud infrastructure, and AI models we trust in production.",
      icon: <Code2 className="w-10 h-10" />,
      link: "/tech-stack",
      color: "from-[#8E2DE2] to-[#4A00E0]",
      metrics: "React / Node / AWS"
    },
    {
      title: "Discovery Framework",
      desc: "Our proprietary 4-week methodology for auditing legacy systems and scoping new builds.",
      icon: <BookOpen className="w-10 h-10" />,
      link: "/discovery-framework",
      color: "from-[#11998E] to-[#38EF7D]",
      metrics: "Audit & Planning"
    },
    {
      title: "Engineering Blog",
      desc: "Insights, guides, and tutorials on AI automation, software scaling, and team building.",
      icon: <Newspaper className="w-10 h-10" />,
      link: "/blog",
      color: "from-[#FF9900] to-[#FF5500]",
      metrics: "Thought Leadership"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#0F172A] overflow-hidden">
      <SEO
        title="Engineering Resources & Hub"
        description="Explore NRT's technical case studies, technology stack, discovery frameworks, and engineering insights."
      />

      <section className="pt-32 pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-[#0F172A] text-white relative overflow-hidden">
        <InteractiveHero3D />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3A5CCC]/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <div className="mx-auto max-w-7xl relative z-10">
           <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#3A5CCC] mb-12">Knowledge Hub</div>
           <h1 className="text-5xl sm:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-[1] sm:leading-[0.8] mb-12">
              Engineering <br className="hidden sm:block" />
              <span className="font-italic-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3A5CCC] to-[#27324A]">Resources.</span>
           </h1>
           <p className="text-xl sm:text-3xl font-bold text-white/50 leading-tight max-w-3xl">
              Frameworks, architectures, and deep dives into how we scale enterprise systems.
           </p>
        </div>
      </section>

      <section className="py-32 px-4 sm:px-6 lg:px-12 xl:px-24">
         <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8">
               {resources.map((res, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: i * 0.1 }}
                   viewport={{ once: true }}
                 >
                   <Link 
                     to={res.link}
                     className="block group relative p-10 sm:p-14 bg-white rounded-[2.5rem] border border-black/5 shadow-xl hover:shadow-2xl transition-all overflow-hidden h-full"
                   >
                      <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${res.color} opacity-5 blur-[80px] group-hover:opacity-20 transition-opacity duration-700`} />
                      
                      <div className="flex justify-between items-start mb-12">
                         <div className="w-16 h-16 rounded-2xl bg-[#F3F4F6] flex items-center justify-center text-[#3A5CCC] group-hover:scale-110 transition-transform duration-500 shadow-inner">
                            {res.icon}
                         </div>
                         <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-[#0F172A]/30 group-hover:bg-[#0F172A] group-hover:text-white transition-all">
                            <ArrowUpRight className="w-5 h-5" />
                         </div>
                      </div>

                      <div className="inline-block px-3 py-1 bg-[#F3F4F6] text-[#0F172A]/60 text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
                         {res.metrics}
                      </div>

                      <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tighter text-[#0F172A]">{res.title}</h2>
                      <p className="text-lg font-bold text-[#0F172A]/60 leading-relaxed">
                         {res.desc}
                      </p>
                   </Link>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
