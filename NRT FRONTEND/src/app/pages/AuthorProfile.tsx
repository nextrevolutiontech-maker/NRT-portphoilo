import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ExternalLink, Award, Code2, Rocket, BrainCircuit, CheckCircle2, LineChart } from "lucide-react";
import { SEO } from "../components/SEO";
import { InteractiveHero3D } from "../components/ui/InteractiveHero3D";

const AUTHORS: Record<string, {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  bio: string;
  specializations: Array<{ name: string; icon: React.ReactNode }>;
  experience: string[];
  caseStudies: Array<{ title: string; link: string }>;
  whyFounded: { title: string; content: string[] };
}> = {
  "muhammad-ahsan-khan": {
    name: "Muhammad Ahsan Khan",
    role: "Founder & Business Systems Architect",
    image: "/ahsan_new.jpg",
    linkedin: "https://www.linkedin.com/in/muhammad-ahsan-khan-founder-61a51032a",
    bio: "Muhammad Ahsan Khan is the Founder and Business Systems Architect at Next Revolution Tech. He specializes in designing enterprise ERP systems, deploying AI automation, and driving business process optimization to help organizations achieve operational efficiency and scalability.",
    specializations: [
      { name: "Enterprise ERP Systems", icon: <Award className="w-5 h-5 text-[#0057FF]" /> },
      { name: "Agentic AI Automation", icon: <BrainCircuit className="w-5 h-5 text-slate-900" /> },
      { name: "Business Process Optimization", icon: <LineChart className="w-5 h-5 text-[#E11D48]" /> },
      { name: "SaaS Architecture", icon: <Code2 className="w-5 h-5 text-[#8E2DE2]" /> },
      { name: "Cloud Infrastructure", icon: <Rocket className="w-5 h-5 text-[#FF9900]" /> }
    ],
    experience: [
      "Architected enterprise healthcare ERP systems, improving operational visibility and reducing manual administrative effort.",
      "Deployed autonomous AI agents for SaaS platforms, streamlining business workflows and enhancing lead qualification processes.",
      "Engineered retail operations platforms and custom business software with complex financial API integrations.",
      "Lead technical consultant and architect on 50+ successful business transformation projects."
    ],
    caseStudies: [
      { title: "Healthcare Operations ERP Platform", link: "/case-studies/pulse-healthcare-erp" },
      { title: "AI-Powered Workflow Automation System", link: "/case-studies/autonomous-ai-agent" },
      { title: "Retail Operations & Inventory Platform", link: "/case-studies/textile-mill-pos" }
    ],
    whyFounded: {
      title: "Why I Founded Next Revolution Tech",
      content: [
        "Throughout my career, I observed a recurring pattern: ambitious businesses were constantly being held back by their own internal operations. They were relying on fragile spreadsheets, disconnected legacy systems, and manual data entry that consumed thousands of hours.",
        "Most software agencies were focused on building isolated apps, not solving core operational bottlenecks. I realized that what businesses truly needed wasn't just code—they needed integrated business systems.",
        "I founded NRT to bridge this gap. Our focus on ERP Systems, AI Automation, and Business Process Optimization was born out of the necessity to give organizations complete visibility into their operations and the scalable infrastructure needed to grow without friction."
      ]
    }
  },
  "muzammil-khan": {
    name: "Muzammil Khan",
    role: "Sales Manager & UI/Frontend Designer",
    image: "/muzamil.jpg",
    linkedin: "https://www.linkedin.com/in/muzammil-khan-nrt",
    bio: "Muzammil Khan is the Sales Manager and UI/Frontend Designer at Next Revolution Tech. He bridges the gap between client requirements and technical execution, designing elegant user interfaces while driving growth and partnership strategies.",
    specializations: [
      { name: "UI/UX & Frontend Design", icon: <Award className="w-5 h-5 text-[#FF9900]" /> },
      { name: "B2B Sales & Development", icon: <LineChart className="w-5 h-5 text-[#0057FF]" /> },
      { name: "Client Relations & Strategy", icon: <BrainCircuit className="w-5 h-5 text-[#E11D48]" /> },
      { name: "Tailwind CSS & Web Design", icon: <Code2 className="w-5 h-5 text-slate-900" /> },
      { name: "Conversion Rate Optimization", icon: <Rocket className="w-5 h-5 text-[#8E2DE2]" /> }
    ],
    experience: [
      "Designed user-centric frontends for enterprise client portfolios and custom business dashboards.",
      "Managed business development pipelines, securing and onboarding key partnerships for the NRT agency.",
      "Facilitated client alignment workshops to translate operational needs into interactive frontend mockups.",
      "Led sales and outreach initiatives, expanding NRT's client base in retail and automation sectors."
    ],
    caseStudies: [
      { title: "Healthcare Operations ERP Platform", link: "/case-studies/pulse-healthcare-erp" },
      { title: "Retail Operations & Inventory Platform", link: "/case-studies/textile-mill-pos" }
    ],
    whyFounded: {
      title: "My Mission at Next Revolution Tech",
      content: [
        "In modern software development, a great backend system is only as good as the interface that exposes it. Users need to feel empowered, not confused, by the tools they use to run their businesses.",
        "Joining NRT allowed me to focus on creating frontend experiences that are not only beautiful but highly intuitive. I believe that enterprise software doesn't have to be clunky or boring; it can be sleek, responsive, and delightful to use.",
        "On the sales and growth side, my objective is to help business leaders understand the value of digital transformation. By matching their organizational goals with our custom ERP and AI automation capabilities, we ensure a partnership built on transparency and high return on investment."
      ]
    }
  },
  "taha-siraj": {
    name: "Taha Siraj",
    role: "Full Stack Engineer & Shopify Developer",
    image: "/taha_siraj.jpg",
    linkedin: "https://www.linkedin.com/in/taha-siraj-nrt",
    bio: "Taha Siraj is a Full Stack MERN Developer and Shopify Specialist at Next Revolution Tech, designing and building scalable web applications and e-commerce solutions for global clients across the UK, Uganda, and beyond.",
    specializations: [
      { name: "MERN Stack Development", icon: <Code2 className="w-5 h-5 text-[#8E2DE2]" /> },
      { name: "Shopify Store Development", icon: <Award className="w-5 h-5 text-[#0057FF]" /> },
      { name: "API Security & Auth (JWT/RBAC)", icon: <BrainCircuit className="w-5 h-5 text-slate-900" /> },
      { name: "Agile Delivery & Consulting", icon: <LineChart className="w-5 h-5 text-[#E11D48]" /> },
      { name: "ERP Module Engineering", icon: <Rocket className="w-5 h-5 text-[#FF9900]" /> }
    ],
    experience: [
      "Built scalable web applications and e-commerce solutions for international clients across the UK, Uganda, and globally.",
      "Designed and customized Shopify storefronts including theme customization, bulk product imports, and catalog management.",
      "Engineered REST APIs with secure JWT authentication and role-based access control (RBAC) for enterprise applications.",
      "Developed student management, exam tracking, and role-based dashboards for ERP-style platforms supporting 500+ users."
    ],
    caseStudies: [
      { title: "Healthcare Operations ERP Platform", link: "/case-studies/pulse-healthcare-erp" },
      { title: "Retail Operations & Inventory Platform", link: "/case-studies/textile-mill-pos" }
    ],
    whyFounded: {
      title: "My Mission at Next Revolution Tech",
      content: [
        "In a fast-paced digital economy, software needs to translate business requirements into working software seamlessly. My goal is to build end-to-end applications that are performant, robust, and secure.",
        "Whether launching a customized Shopify store to save setup time or engineering role-based dashboard access controls for enterprise platforms, I believe in combining tech execution with active client problem-solving.",
        "Working in NRT's Agile environment allows me to deliver value consistently, ensuring high code quality and on-time shipping for every client project."
      ]
    }
  }
};

export function AuthorProfile() {
  const { slug } = useParams();

  const author = slug ? AUTHORS[slug] : null;

  if (!author) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-900 p-6">
        <h1 className="text-4xl font-black mb-4">Author Not Found</h1>
        <Link to="/resources" className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold border border-slate-300 shadow-sm hover:shadow transition-shadow">Back to Resources</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SEO
        title={`${author.name} - ${author.role} | NRT`}
        description={author.bio}
        schemaType="Person"
      />

      <section className="pt-32 pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-slate-900 relative overflow-hidden">
        <InteractiveHero3D />
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
        
        <div className="mx-auto max-w-7xl relative z-10 grid lg:grid-cols-12 gap-16 items-center">
           <div className="lg:col-span-8">
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6">Author Profile</div>
              <h1 className="text-5xl sm:text-7xl font-black mb-4 tracking-tighter leading-tight">{author.name}</h1>
              <div className="text-xl sm:text-2xl font-bold text-slate-900/50 mb-8 text-orange-600">{author.role}</div>
              <p className="text-lg font-semibold text-slate-900/80 leading-relaxed max-w-2xl mb-10">
                 {author.bio}
              </p>
              <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#0A66C2] text-slate-900 px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-[#084e96] transition-colors">
                 Connect on LinkedIn <ExternalLink className="w-5 h-5" />
              </a>
           </div>

           <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-slate-300 shadow-2xl overflow-hidden p-2 bg-white/5 backdrop-blur-md">
                 <img src={author.image} alt={author.name} className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
           </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-12 xl:px-24">
         <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-16">
               <div className="bg-white p-10 sm:p-12 rounded-[2rem] border border-slate-300 shadow-xl">
                  <h2 className="text-3xl font-black tracking-tighter mb-8">Specializations</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                     {author.specializations.map((spec, i) => (
                       <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-xl border border-slate-300">
                          <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                             {spec.icon}
                          </div>
                          <span className="font-bold text-slate-900">{spec.name}</span>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="bg-white text-slate-900 p-10 sm:p-12 rounded-[2rem] border border-slate-300 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.01] bg-[url('/noise.svg')]" />
                  <div className="relative z-10">
                     <h2 className="text-3xl font-black tracking-tighter mb-8">{author.whyFounded.title}</h2>
                     <div className="space-y-6 text-lg font-medium text-slate-900/80 leading-relaxed">
                        {author.whyFounded.content.map((paragraph, i) => (
                           <p key={i}>{paragraph}</p>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="bg-white p-10 sm:p-12 rounded-[2rem] border border-slate-300 shadow-xl">
                  <h2 className="text-3xl font-black tracking-tighter mb-8">Track Record & Business Value</h2>
                  <ul className="space-y-6">
                     {author.experience.map((exp, i) => (
                       <li key={i} className="flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-slate-900 shrink-0 mt-0.5" />
                          <span className="text-lg font-semibold text-slate-900/80 leading-relaxed">{exp}</span>
                       </li>
                     ))}
                  </ul>
               </div>
            </div>

            <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-32">
               <div className="bg-gradient-to-br bg-white border-2 border-slate-900 text-slate-900 p-10 rounded-[2rem] shadow-2xl relative overflow-hidden border border-slate-300">
                  <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.svg')]" />
                  <div className="relative z-10">
                     <h3 className="text-2xl font-black mb-6 tracking-tighter">Enterprise Case Studies</h3>
                     <div className="space-y-4">
                        {author.caseStudies.map((cs, i) => (
                          <Link key={i} to={cs.link} className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-slate-300 rounded-xl transition-colors group">
                             <span className="font-bold">{cs.title}</span>
                             <ExternalLink className="w-4 h-4 text-slate-900/40 group-hover:text-slate-900 transition-colors shrink-0 ml-4" />
                          </Link>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-300 mt-8">
                  <h3 className="text-2xl font-black mb-6 tracking-tighter">Recent Articles</h3>
                  <div className="space-y-4">
                     <Link to="/blog/custom-erp-cost" className="flex flex-col p-4 bg-white hover:bg-white border border-slate-300 rounded-xl transition-colors group">
                        <span className="text-xs font-bold text-orange-600 uppercase mb-1">ERP & Automation</span>
                        <span className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">Custom ERP Development Cost: Ultimate Guide</span>
                     </Link>
                     <Link to="/blog/best-erp-manufacturing" className="flex flex-col p-4 bg-white hover:bg-white border border-slate-300 rounded-xl transition-colors group">
                        <span className="text-xs font-bold text-orange-600 uppercase mb-1">Manufacturing</span>
                        <span className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">Why Excel is Costing You Millions</span>
                     </Link>
                  </div>
               </div>

               <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-300 mt-8">
                  <h3 className="text-2xl font-black mb-6 tracking-tighter">Related Services</h3>
                  <div className="flex flex-col gap-3">
                     <Link to="/services/custom-software-development" className="text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors flex items-center justify-between p-3 border border-slate-300 rounded-lg">
                        ERP Systems Development
                        <ExternalLink className="w-4 h-4 text-black/30" />
                     </Link>
                     <Link to="/services/ai-automation" className="text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors flex items-center justify-between p-3 border border-slate-300 rounded-lg">
                        AI Workflow Automation
                        <ExternalLink className="w-4 h-4 text-black/30" />
                     </Link>
                     <Link to="/services/process-automation" className="text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors flex items-center justify-between p-3 border border-slate-300 rounded-lg">
                        Business Process Automation
                        <ExternalLink className="w-4 h-4 text-black/30" />
                     </Link>
                     <Link to="/services/custom-software-development" className="text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors flex items-center justify-between p-3 border border-slate-300 rounded-lg">
                        Custom Business Software
                        <ExternalLink className="w-4 h-4 text-black/30" />
                     </Link>
                     <Link to="/services/dedicated-teams" className="text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors flex items-center justify-between p-3 border border-slate-300 rounded-lg">
                        Dedicated Technology Teams
                        <ExternalLink className="w-4 h-4 text-black/30" />
                     </Link>
                  </div>
               </div>

            </div>

         </div>
      </section>
    </div>
  );
}
