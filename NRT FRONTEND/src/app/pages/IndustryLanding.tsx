import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Factory, GraduationCap, Stethoscope, Truck, Settings, ShieldCheck, HelpCircle, Star, MessageSquare } from "lucide-react";
import { SEO } from "../components/SEO";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { useState } from "react";
import { toast } from "sonner";
import { API_BASE_URL } from "../../config";
import { motion } from "motion/react";

interface LandingContent {
  metaTitle: string;
  metaDesc: string;
  badge: string;
  headline: string;
  headlineHighlight: string;
  subtext: string;
  painPointsTitle: string;
  painPoints: string[];
  featuresTitle: string;
  features: { title: string; desc: string }[];
  impactMetric: string;
  impactLabel: string;
  industryIcon: React.ReactNode;
  accentColor: string;
}

export function IndustryLanding() {
  const { industry } = useParams<{ industry: string }>();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    message: ""
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          company: formData.company,
          message: `[LANDING PAGE: ${industry?.toUpperCase()}] ${formData.message}`
        }),
      });

      if (!response.ok) throw new Error('Failed to send');

      setStatus('success');
      toast.success("Consultation Booked Successfully!", { 
        description: "Our solutions architect will review your bottleneck and schedule a session within 24 hours.",
        style: { background: '#0F172A', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }
      });
      setFormData({ name: "", email: "", whatsapp: "", company: "", message: "" });
    } catch (error) {
      setStatus('error');
      toast.error("Transmission Error", { description: "Connection failed. Please contact us via WhatsApp directly." });
    } finally {
      setStatus('idle');
    }
  };

  const industries: Record<string, LandingContent> = {
    "manufacturing-erp-uae": {
      metaTitle: "Custom Manufacturing ERP Systems in UAE",
      metaDesc: "Stop losing margins to inventory desync. Migrate to custom manufacturing ERPs in UAE with real-time stock logs and FTA VAT sync.",
      badge: "UAE Industrial Automation",
      headline: "Stop managing UAE production runs on ",
      headlineHighlight: "unstable Excel sheets",
      subtext: "We build custom ERPs for mills and factories in the UAE that sync raw goods inventory, auto-generate invoice logs, and automate FTA VAT integrations in real-time.",
      painPointsTitle: "Why spreadsheets are leaking your factory's profit margins in Dubai & Abu Dhabi:",
      painPoints: [
        "Inventory logs desync between freezone warehouses and mainland stores.",
        "Manual invoice creation delays shipping runs and billing cycles.",
        "FTA VAT compliance requires manual double-entry, risking audits.",
        "No live dashboard to track daily yield, raw waste, and operator shifts."
      ],
      featuresTitle: "Customized systems engineered for UAE industrial scale:",
      features: [
        { title: "Automated Bill of Materials (BOM)", desc: "Deduct yarn, packaging, and raw stock automatically when production batches move." },
        { title: "FTA VAT Automated Integration", desc: "Instantly register invoices with local tax authorities at the point of dispatch." },
        { title: "Multi-Warehouse GPS Ledger", desc: "Track raw materials across JAFZA, KIZAD, and mainland locations on one dashboard." }
      ],
      impactMetric: "70%",
      impactLabel: "Reduction in Manual Workflow Mistakes",
      industryIcon: <Factory className="w-12 h-12" />,
      accentColor: "from-[#FF0055] to-[#9900FF]"
    },
    "logistics-software-uae": {
      metaTitle: "Custom Logistics & Fleet Dashboards in UAE",
      metaDesc: "Real-time fleet tracking, barcode dispatch logs, and auto-dispatch routing built for logistics and shipping brands in the UAE.",
      badge: "UAE Logistics & Supply Chain",
      headline: "Track UAE dispatch logs and fleet status from ",
      headlineHighlight: "one central dashboard",
      subtext: "We build custom dispatch ledgers and logistics systems with barcode scanner integrations, order logs, and instant routing tools tailored for the UAE market.",
      painPointsTitle: "Logistical hurdles that eat into your delivery speed in the Emirates:",
      painPoints: [
        "Unreliable dispatch logs lead to missing parcels and lost items.",
        "Manual tracking of driver routes results in fuel waste and shipping delays.",
        "Reconciling Cash-on-Delivery (COD) logs with courier records takes days.",
        "No live dashboard showing status updates to customers across the GCC."
      ],
      featuresTitle: "High-performance modules designed for transport control:",
      features: [
        { title: "Barcode Scanner Integration", desc: "Instantly log items into databases during scan checkpoints at storage docks." },
        { title: "Fleet Dispatch Ledger", desc: "Monitor driver status, cargo logs, and delivery routes in real-time across the Emirates." },
        { title: "Auto-COD Reconciliation", desc: "Match courier payout sheets with database entries to catch discrepancy losses." }
      ],
      impactMetric: "80%",
      impactLabel: "Dispatched Inventory Log Accuracy Improvement",
      industryIcon: <Truck className="w-12 h-12" />,
      accentColor: "from-[#FF9900] to-[#FF5500]"
    },
    "healthcare-software-uk": {
      metaTitle: "NHS-Compliant Clinic & Patient Management Systems UK",
      metaDesc: "GDPR-compliant custom clinic management systems in the UK with direct patient scheduling, prescription portals, and billing integrations.",
      badge: "UK Healthcare Software",
      headline: "Secure patient logs and schedule appointments without ",
      headlineHighlight: "booking collisions",
      subtext: "We design GDPR & NHS-compliant clinic portals that manage electronic medical records (EMR), patient reminders, and secure billing receipts for UK practices.",
      painPointsTitle: "Risks of manual healthcare record systems in the UK:",
      painPoints: [
        "Patient booking collisions lead to long wait times and staff stress.",
        "Paper prescriptions and records risk patient privacy under GDPR.",
        "Billing, lab orders, and reports are scattered in offline systems.",
        "Compliance concerns due to unencrypted data files."
      ],
      featuresTitle: "Secure clinical modules engineered for UK medical professionals:",
      features: [
        { title: "Dynamic Schedule Sync", desc: "Smart calendars that prevent double bookings and automatically trigger SMS reminders." },
        { title: "Encrypted Patient Portals", desc: "Secure digital logs for prescriptions, lab results, and diagnostic histories." },
        { title: "Practice Cashflow Dashboard", desc: "Manage billing receipts, insurance validations, and vendor logs in real-time." }
      ],
      impactMetric: "99.9%",
      impactLabel: "GDPR Compliance & Secure Uptime Handled",
      industryIcon: <Stethoscope className="w-12 h-12" />,
      accentColor: "from-[#11998E] to-[#38EF7D]"
    },
    "ai-automation-usa": {
      metaTitle: "Custom AI Workflow Automation in the USA",
      metaDesc: "Deploy autonomous AI agents to qualify leads and automate enterprise workflows for businesses across the USA.",
      badge: "USA Enterprise AI",
      headline: "Automate your enterprise workflows with ",
      headlineHighlight: "autonomous AI agents",
      subtext: "We engineer and deploy custom Agentic AI solutions for US enterprises to handle lead qualification, data processing, and complex customer routing 24/7.",
      painPointsTitle: "Why manual operations are stifling your growth in the US market:",
      painPoints: [
        "SDRs spend hundreds of hours manually qualifying raw web leads.",
        "Hot leads drop off due to slow response times across multiple US time zones.",
        "Complex data entry between CRMs and ERPs causes human error.",
        "Customer support teams are overwhelmed by repetitive inquiries."
      ],
      featuresTitle: "Proprietary AI architectures designed for US scale:",
      features: [
        { title: "Autonomous Lead Routing", desc: "AI agents instantly qualify leads and book meetings directly into sales calendars." },
        { title: "Multi-Agent Orchestration", desc: "Deploy distinct agents for support, sales, and internal operations." },
        { title: "Secure LLM Integration", desc: "Private deployment of language models to ensure your proprietary data remains secure." }
      ],
      impactMetric: "300%",
      impactLabel: "Increase in Qualified Lead Conversion",
      industryIcon: <Settings className="w-12 h-12" />,
      accentColor: "from-[#3A5CCC] to-[#4F7FFF]"
    }
  };

  const data = industry ? industries[industry] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-900 p-6">
        <h1 className="text-4xl font-black mb-4">Solution Page Not Found</h1>
        <p className="text-lg mb-8 text-slate-900/60">The industry solutions page you are looking for does not exist.</p>
        <Link to="/" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all">
          Back to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SEO
        title={`${data.metaTitle} | Next Revolution Tech`}
        description={data.metaDesc}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-48 px-4 sm:px-6 lg:px-12 bg-white text-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="mx-auto max-w-7xl relative z-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-slate-300 rounded-full px-5 py-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900/80">{data.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-7xl font-black tracking-tight leading-[0.95] text-slate-900">
              {data.headline} <br />
              <span className={`${data.accentColor} text-orange-600`}>
                {data.headlineHighlight}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-900/50 font-medium max-w-2xl leading-relaxed">
              {data.subtext}
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-white/5 border border-slate-300 flex items-center justify-center text-slate-900 shadow-2xl backdrop-blur-md">
              {data.industryIcon}
            </div>
          </div>
        </div>
      </section>

      {/* Detail Operations Section */}
      <section className="py-32 px-4 relative z-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Pain points and Features */}
          <div className="lg:col-span-7 space-y-16">
            <div className="bg-white border border-slate-300 rounded-[2.5rem] p-10 sm:p-12 shadow-[0_20px_40px_rgba(11,27,53,0.02)]">
              <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">{data.painPointsTitle}</h3>
              <ul className="space-y-6">
                {data.painPoints.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-base font-semibold text-slate-600">
                    <span className="w-6 h-6 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0 font-bold mt-1 text-xs">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-300 rounded-[2.5rem] p-10 sm:p-12 shadow-[0_20px_40px_rgba(11,27,53,0.02)]">
              <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">{data.featuresTitle}</h3>
              <div className="space-y-8">
                {data.features.map((feature, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="w-10 h-10 rounded-xl bg-orange-600/10 text-orange-600 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg leading-tight mb-2 uppercase">{feature.title}</h4>
                      <p className="text-sm text-slate-900/60 font-semibold leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form and Stats Sidebar */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="bg-gradient-to-br bg-white border-2 border-slate-900 text-slate-900 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden border border-slate-300">
              <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.svg')] pointer-events-none" />
              <div className="relative z-10 text-center">
                <div className="text-6xl font-black text-slate-900 mb-2">{data.impactMetric}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-900/40 mb-6">{data.impactLabel}</div>
                <div className="border-t border-slate-300 pt-6 text-sm font-semibold text-slate-900/60">
                  Reliable engineering squad with HIPAA, FBR API, and ERP security integration experts ready.
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-300 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl">
              <h3 className="text-xl font-bold uppercase tracking-wider text-slate-900 mb-6">Schedule Your Free Audit</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/50 border border-slate-300 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#3A5CCC] transition-all"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Work Email</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/50 border border-slate-300 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#3A5CCC] transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">WhatsApp</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. 03442013217"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-white/50 border border-slate-300 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#3A5CCC] transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white/5 border border-slate-300 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#3A5CCC] transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Tell us about your biggest system issue</label>
                  <textarea 
                    rows={3}
                    placeholder="e.g. We have inventory leaks on manual excel journals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/50 border border-slate-300 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#3A5CCC] transition-all resize-none"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-white text-slate-900 py-5 rounded-2xl text-sm font-black shadow-lg shadow-black/10 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer hover:bg-orange-600"
                >
                  {status === 'loading' ? 'Submitting Request...' : 'Book Free Audit Now'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section - Related Case Studies */}
      <section className="py-24 px-4 bg-white relative z-20">
         <div className="mx-auto max-w-7xl">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 text-center">Proven Success</div>
            <h2 className="text-3xl sm:text-5xl font-black text-center mb-16 text-slate-900">Related Case Studies</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
               {industry === 'manufacturing-erp-uae' && (
                  <Link to="/case-studies/textile-mill-pos" className="group block bg-white rounded-[2rem] p-8 border border-slate-300 hover:shadow-xl transition-all max-w-sm mx-auto w-full">
                     <div className="w-12 h-12 bg-[#FF9900]/10 text-[#FF9900] rounded-xl flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-6 h-6" />
                     </div>
                     <h3 className="text-2xl font-black mb-3">Textile Mill POS</h3>
                     <p className="text-slate-900/60 font-medium mb-6">Automated 10k+ invoices/month with FBR API sync.</p>
                     <span className="inline-flex items-center gap-2 text-sm font-bold text-[#FF9900] group-hover:text-slate-900 transition-colors">
                        View Proof <ArrowRight className="w-4 h-4" />
                     </span>
                  </Link>
               )}
               {industry === 'healthcare-software-uk' && (
                  <Link to="/case-studies/pulse-healthcare-erp" className="group block bg-white rounded-[2rem] p-8 border border-slate-300 hover:shadow-xl transition-all max-w-sm mx-auto w-full">
                     <div className="w-12 h-12 bg-orange-600/10 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-6 h-6" />
                     </div>
                     <h3 className="text-2xl font-black mb-3">Pulse Healthcare ERP</h3>
                     <p className="text-slate-900/60 font-medium mb-6">Multi-tenant ERP system reducing overhead by 40%.</p>
                     <span className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 group-hover:text-slate-900 transition-colors">
                        View Proof <ArrowRight className="w-4 h-4" />
                     </span>
                  </Link>
               )}
               {industry === 'ai-automation-usa' && (
                  <Link to="/case-studies/autonomous-ai-agent" className="group block bg-white rounded-[2rem] p-8 border border-slate-300 hover:shadow-xl transition-all max-w-sm mx-auto w-full">
                     <div className="w-12 h-12 bg-slate-900/10 text-slate-900 rounded-xl flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-6 h-6" />
                     </div>
                     <h3 className="text-2xl font-black mb-3">Autonomous AI Agent</h3>
                     <p className="text-slate-900/60 font-medium mb-6">300% boost in lead qualification across global time zones.</p>
                     <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-slate-900 transition-colors">
                        View Proof <ArrowRight className="w-4 h-4" />
                     </span>
                  </Link>
               )}
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
