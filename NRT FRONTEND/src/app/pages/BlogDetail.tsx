import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ChevronRight, CheckCircle2, User, MessageSquare } from "lucide-react";
import { SEO } from "../components/SEO";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { motion } from "motion/react";
import { FOUNDER } from "../../config/brand";

interface ArticleData {
  title: string;
  category: string;
  date: string;
  readTime: string;
  description: string;
  schemaType: string;
  body: React.ReactNode;
}

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();

  const articles: Record<string, ArticleData> = {
    "custom-erp-cost": {
      title: "Custom ERP Development Cost: The Ultimate Guide",
      category: "ERP & Automation",
      date: "May 28, 2026",
      readTime: "7 min read",
      description: "How much does it actually cost to build a custom ERP system? We break down database design, module costs, and comparison with off-the-shelf software.",
      schemaType: "TechArticle",
      body: (
        <div className="space-y-8 text-slate-900/80 font-medium text-lg leading-relaxed">
          <p>
            For any scaling business, managing operations across separate tools—one for inventory, another for invoices, and a third for logistics—becomes a bottleneck. This is when the question of custom ERP development arises. But how much does it actually cost to build a system from scratch?
          </p>
          
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-12 mb-4">Why Do Custom ERP Cost Structures Vary?</h2>
          <p>
            Unlike generic software, a custom ERP is mapped to your specific business workflows. The cost is determined by three main components: complexity of database relationships, third-party integrations (such as local tax authorities or payment gateways), and user role dashboards.
          </p>

          <div className="my-8 p-8 bg-white/5 border border-slate-300 rounded-3xl">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Typical ERP Cost Breakdown (Estimated Sprints)</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-slate-300 pb-2">
                <span>Database & Core API Architecture</span>
                <span className="font-bold text-orange-600">$2,500 - $4,000</span>
              </div>
              <div className="flex justify-between border-b border-slate-300 pb-2">
                <span>Inventory & Warehouse Module</span>
                <span className="font-bold text-orange-600">$2,000 - $3,500</span>
              </div>
              <div className="flex justify-between border-b border-slate-300 pb-2">
                <span>Invoicing & FBR/Tax API Integrations</span>
                <span className="font-bold text-orange-600">$1,500 - $3,000</span>
              </div>
              <div className="flex justify-between border-b border-slate-300 pb-2">
                <span>Role-Based Dashboards (Admin, Operator, Sales)</span>
                <span className="font-bold text-orange-600">$2,500 - $5,000</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-12 mb-4">Custom ERP vs. SaaS Subscriptions</h2>
          <p>
            Off-the-shelf software like SAP or Odoo seems cheaper upfront but charges recurring per-user licensing fees. For an agency or a mill with 50+ staff, monthly fees can easily scale to thousands of dollars. A custom ERP is a one-time intellectual property asset owned fully by your business.
          </p>

          <blockquote className="border-l-4 border-orange-600 pl-6 my-8 italic font-semibold text-slate-900/60">
            "A custom ERP is not an expense—it is a proprietary asset that directly reduces your operating overhead and scales with you without user licenses."
          </blockquote>

          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-12 mb-4">How to Minimize ERP Implementation Costs</h2>
          <p>
            Start with a Minimum Viable Product (MVP). Prioritize the most critical bottleneck first (e.g., inventory log sync) before adding advanced AI analytics or automated customer notifications. At NRT, we design in modular sprints so your business gets value from the very first month.
          </p>
        </div>
      )
    },
    "best-erp-manufacturing": {
      title: "Best ERP For Manufacturing Businesses: Why Excel is Costing You Millions",
      category: "Manufacturing",
      date: "May 20, 2026",
      readTime: "6 min read",
      description: "Excel sheets desync, cause double-entry errors, and lack FBR auto-invoicing. Learn how custom manufacturing ERPs solve inventory control.",
      schemaType: "TechArticle",
      body: (
        <div className="space-y-8 text-slate-900/80 font-medium text-lg leading-relaxed">
          <p>
            Many manufacturing clients in Pakistan and globally run multi-million dollar operations using Microsoft Excel or basic Google Sheets. While spreadsheet tools are great for simple tasks, relying on them for manufacturing tracking causes significant financial leaks.
          </p>
          
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-12 mb-4">The Danger of Excel Desynchronization</h2>
          <p>
            In a manufacturing environment, raw material inventory must sync with production runs and sales invoices. When multiple warehouse managers update separate offline Excel files, data desync occurs. This results in material shortages, delayed shipments, and double-entry discrepancies.
          </p>

          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-12 mb-4">Key Features of a Real Manufacturing ERP</h2>
          <div className="grid gap-6 my-8">
            <div className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Real-Time Bill of Materials (BOM)</h4>
                <p className="text-sm">Automatically deduct raw materials (e.g., yarn, packaging) from your inventory logs when a new production batch is approved.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Live Tax Authority (FBR) API Integration</h4>
                <p className="text-sm">Auto-generate compliant tax invoices directly from your dispatch logs to stay in line with regional regulatory requirements without manual bookkeeper lag.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Central Warehouse Tracking</h4>
                <p className="text-sm">Monitor multi-location transfers and raw goods status inside a single live dashboard accessible by operations managers.</p>
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 border-rose-500 pl-6 my-8 italic font-semibold text-slate-900/60">
            "We migrated a textile client from 15 offline Excel sheets to a custom central Web POS ERP. Within 90 days, raw material waste dropped by 18% and data errors were completely eliminated."
          </blockquote>

          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-12 mb-4">Our Verdict</h2>
          <p>
            If your factory processes more than 50 orders a day, Excel is no longer a tool—it is a liability. A custom ERP gives you back absolute control over material flow, sales invoicing, and dispatch efficiency.
          </p>
        </div>
      )
    },
    "odoo-vs-custom-erp": {
      title: "Odoo vs Custom ERP: Which Option Fits Your Business Growth?",
      category: "Strategy",
      date: "May 15, 2026",
      readTime: "8 min read",
      description: "Odoo is quick to start but licensing costs scale fast. Custom ERP is a one-time investment built for your exact workflow. We compare both options.",
      schemaType: "TechArticle",
      body: (
        <div className="space-y-8 text-slate-900/80 font-medium text-lg leading-relaxed">
          <p>
            When a business reaches the limit of spreadsheet tracking, the evaluation starts: Should we implement a ready-made suite like Odoo, or build a custom ERP tailored to our exact processes? Let’s break down the realities of both approaches.
          </p>
          
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-12 mb-4">Odoo: Pros and Cons</h2>
          <p>
            Odoo offers pre-built modules for CRM, sales, and accounting, making it fast to deploy for standard businesses. However, if your operation has unique logistics rules, custom tax templates, or specific production stages, Odoo requires expensive custom python developers. 
          </p>
          <p>
            Additionally, Odoo charges a monthly per-user licensing fee, meaning your operational software costs increase as your team grows.
          </p>

          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-12 mb-4">Custom ERP: Pros and Cons</h2>
          <p>
            A custom ERP takes time to develop initially, but it has zero licensing fees. It is built to adapt exactly to your existing workflow, rather than forcing your employees to learn complex, over-engineered software systems.
          </p>

          <div className="my-8 overflow-hidden rounded-2xl border border-slate-300 shadow-lg bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-white text-slate-900">
                <tr>
                  <th className="p-4">Feature</th>
                  <th className="p-4">Odoo</th>
                  <th className="p-4">Custom ERP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 text-slate-600">
                <tr>
                  <td className="p-4 font-bold">Licensing Cost</td>
                  <td className="p-4">Per-user monthly fee</td>
                  <td className="p-4 font-bold text-emerald-600">Zero (One-time asset)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Workflow Fit</td>
                  <td className="p-4">Generic modules</td>
                  <td className="p-4 font-bold text-emerald-600">100% Customized</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Integrations</td>
                  <td className="p-4">Requires paid apps</td>
                  <td className="p-4 font-bold text-emerald-600">Built-in directly</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Maintenance</td>
                  <td className="p-4">System updates may break code</td>
                  <td className="p-4 font-bold text-emerald-600">Dedicated squad control</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-12 mb-4">How to Decide?</h2>
          <p>
            If your operations are completely generic and your team is small (under 10 users), Odoo is a good fit. But if you have proprietary workflows, run a high-volume warehouse, require localized API syncs, and plan to scale your headcount, a custom ERP is the most cost-effective and scalable choice.
          </p>
        </div>
      )
    },
    "ai-automation-small-business": {
      title: "AI Automation For Small Businesses: How to Save 20+ Hours a Week",
      category: "AI & Workflows",
      date: "May 10, 2026",
      readTime: "5 min read",
      description: "Learn how small businesses are using autonomous AI agents to automate customer replies, qualify leads, and sync invoices in real-time.",
      schemaType: "TechArticle",
      body: (
        <div className="space-y-8 text-slate-900/80 font-medium text-lg leading-relaxed">
          <p>
            Artificial Intelligence has evolved from standard chatbots to autonomous workflow agents. For small businesses with limited human resource capacity, AI automations act as digital employees working 24/7.
          </p>
          
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-12 mb-4">Where Do the Hours Go?</h2>
          <p>
            Small business owners spend over 30% of their workweeks on administrative tasks: copying lead details from site forms to CRMs, answering repetitive emails, and scheduling client follow-ups. These manual operations slow down response rates and stall sales velocity.
          </p>

          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-12 mb-4">3 AI Workflows You Can Deploy Today</h2>
          <div className="space-y-6 my-8">
            <div className="p-6 bg-orange-600/5 border border-orange-600/10 rounded-2xl">
              <h4 className="font-bold text-slate-900 mb-2">1. AI Lead Qualification Routing</h4>
              <p className="text-sm">When a new inquiry is submitted, an AI agent reviews the payload, pulls company data, qualifies the lead, and schedules a meeting on Google Calendar, all in under 60 seconds.</p>
            </div>
            <div className="p-6 bg-orange-600/5 border border-orange-600/10 rounded-2xl">
              <h4 className="font-bold text-slate-900 mb-2">2. Inbox Auto-Responder Agents</h4>
              <p className="text-sm">Connect a semantic AI agent to your support email. It drafts replies based on your database documentation, only flagging complex requests for human review.</p>
            </div>
            <div className="p-6 bg-orange-600/5 border border-orange-600/10 rounded-2xl">
              <h4 className="font-bold text-slate-900 mb-2">3. Automated Invoice & Order Dispatch</h4>
              <p className="text-sm">AI checks payment confirmation notifications and automatically triggers shipping labels and invoice logs in your ERP database without manual approval.</p>
            </div>
          </div>

          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-12 mb-4">Getting Started</h2>
          <p>
            Do not try to automate your entire business at once. Pick a single, high-frequency manual task—like email sorting—and automate it. Once validated, expand the system step-by-step.
          </p>
        </div>
      )
    },
    "inventory-software-guide": {
      title: "Inventory Management Software: A Complete Guide for Pakistani Brands",
      category: "Logistics",
      date: "May 05, 2026",
      readTime: "8 min read",
      description: "From warehouse tracking to FBR API compliance, here is everything you need to know about setting up a reliable inventory dashboard in Pakistan.",
      schemaType: "TechArticle",
      body: (
        <div className="space-y-8 text-slate-900/80 font-medium text-lg leading-relaxed">
          <p>
            Pakistani retail and manufacturing brands face distinct logistics and compliance challenges: managing multi-city warehouse distributions, handling cash-on-delivery (COD) shipping statuses, and meeting local tax invoicing standards.
          </p>
          
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-12 mb-4">Why Local Brands Need Custom Inventory Dashboards</h2>
          <p>
            Foreign systems like Shopify inventory work well until you need to integrate local couriers (Leopards, TCS, BlueEx) or sync inventory logs with offline wholesale shops in Faisalabad or Karachi. A custom dashboard bridges the gap by pulling all offline and online sales channels into one database.
          </p>

          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-12 mb-4">Critical Features for Pakistan Logistics</h2>
          <ul className="space-y-4 my-8">
            <li className="flex gap-3 font-semibold text-slate-900/80">
              <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-1" />
              <span>Multi-Warehouse Stock Transfer tracking with barcode scanner support.</span>
            </li>
            <li className="flex gap-3 font-semibold text-slate-900/80">
              <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-1" />
              <span>Auto-Invoicing APIs connected directly to the FBR system to ensure automated tax compliance.</span>
            </li>
            <li className="flex gap-3 font-semibold text-slate-900/80">
              <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-1" />
              <span>COD Portal Reconciliation: Match courier payment sheets with order logs to eliminate missing shipment funds.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-12 mb-4">Conclusion</h2>
          <p>
            Relying on paper registers or manual tracking leads to lost stock and untracked payments. Investing in custom inventory software ensures you have complete visibility over your material logs and invoice channels.
          </p>
        </div>
      )
    }
  };

  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-900 p-6">
        <h1 className="text-4xl font-black mb-4">Article Not Found</h1>
        <p className="text-lg mb-8 text-slate-900/60">The article you are looking for does not exist or has been relocated.</p>
        <Link to="/blog" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all">
          <ArrowLeft className="w-5 h-5" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SEO
        title={`${article.title} | NRT Blog`}
        description={article.description}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="mx-auto max-w-4xl px-4 relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate-900/50 hover:text-slate-900 mb-8 font-black uppercase text-xs tracking-widest transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-orange-600/20 text-orange-600 border border-orange-600/30 rounded-full px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.2em]">
              {article.category}
            </span>
            <div className="flex items-center gap-4 text-slate-900/40 text-[9px] font-black uppercase tracking-widest">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight mb-8">
            {article.title}
          </h1>
          <div className="flex items-center gap-3 pt-6 border-t border-slate-300">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-300 shrink-0">
              <img src={FOUNDER.imageUrl} alt={FOUNDER.name} className="w-full h-full object-cover object-center" />
            </div>
            <div>
              <Link to="/author/muhammad-ahsan-khan" className="text-sm font-semibold text-slate-900 hover:text-orange-600 transition-colors">{FOUNDER.name}</Link>
              <div className="text-nrt-label text-slate-900/60">{FOUNDER.title}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 px-4 relative z-20">
        <div className="mx-auto max-w-4xl bg-white border border-slate-300 p-8 sm:p-16 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(11,27,53,0.06)]">
          {article.body}
          
          {/* Author info & Lead Magnet Callout */}
          <div className="mt-16 pt-12 border-t border-slate-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-300 shrink-0">
                <img 
                  src={FOUNDER.imageUrl} 
                  alt={FOUNDER.name} 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              <div>
                <Link to="/author/muhammad-ahsan-khan" className="text-base font-semibold text-slate-900 hover:text-orange-600 transition-colors block">{FOUNDER.name}</Link>
                <div className="text-xs font-medium text-slate-900/55 uppercase tracking-wider">{FOUNDER.title}</div>
              </div>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-orange-600/90 transition-all shadow-lg shadow-blue-500/10">
              Schedule Free Audit <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        {/* Related Assets Section */}
        <div className="mx-auto max-w-4xl mt-12 grid sm:grid-cols-2 gap-8">
           {/* Related Services */}
           <div className="bg-white p-8 rounded-[2rem] border border-slate-300 shadow-lg">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900/50 mb-6">Related Services</h3>
              <div className="flex flex-col gap-3">
                 <Link to="/services/custom-software-development" className="text-lg font-bold text-orange-600 hover:text-slate-900 transition-colors flex items-center justify-between group">
                    Custom ERP Development
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </Link>
                 <Link to="/services/ai-automation" className="text-lg font-bold text-orange-600 hover:text-slate-900 transition-colors flex items-center justify-between group">
                    AI Workflow Automation
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </Link>
              </div>
           </div>

           {/* Related Case Studies */}
           <div className="bg-white p-8 rounded-[2rem] border border-slate-300 shadow-lg text-slate-900">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900/50 mb-6">Related Case Studies</h3>
              <div className="flex flex-col gap-4">
                 <Link to="/case-studies/pulse-healthcare-erp" className="text-lg font-bold text-slate-900 hover:text-orange-600 transition-colors group flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                    Pulse Healthcare ERP
                 </Link>
                 <Link to="/case-studies/autonomous-ai-agent" className="text-lg font-bold text-slate-900 hover:text-orange-600 transition-colors group flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-900 mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                    Autonomous AI Agent
                 </Link>
              </div>
           </div>
        </div>
      </section>

      <PreFooterCTA 
        headline="Ready to build a reliable custom system?"
        subtext="Book a free consultation and let's map out your custom ERP, SaaS, or workflow automation."
      />
    </div>
  );
}
