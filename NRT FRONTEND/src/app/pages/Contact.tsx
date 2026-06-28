import { useState } from "react";
import { Mail, Send, ShieldCheck, Clock, ArrowRight, MessageSquare, Globe } from "lucide-react";
import { SEO } from "../components/SEO";
import { toast } from "sonner";
import { motion } from "motion/react";
import { API_BASE_URL } from "../../config";
import { InteractiveHero3D } from "../components/ui/InteractiveHero3D";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send');

      setStatus('success');
      toast.success("Message Sent Successfully!", { 
        description: "Our strategy team will review and respond within 24 hours.",
        style: { background: '#0F172A', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }
      });
      setFormData({ name: "", email: "", whatsapp: "", company: "", phone: "", message: "" });
    } catch (error) {
      setStatus('error');
      toast.error("Transmission Error", { description: "Please check your connection or contact us directly via WhatsApp." });
    } finally {
      setStatus('idle');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <SEO 
        title="Contact Us | Strategy Call" 
        description="Schedule a strategy session with Next Revolution Tech to discuss ERP implementation, AI automation, and business process optimization."
      />

      {/* SECTION 1: INTRO - Dark Hero */}
      <section className="pt-24 sm:pt-32 pb-24 sm:pb-40 px-4 sm:px-6 lg:px-12 xl:px-24 bg-white text-slate-900 relative overflow-hidden">
        <InteractiveHero3D />
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-4xl"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6 sm:mb-8">Strategy Session</div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] sm:leading-[0.9] mb-8 sm:mb-10">
               Ready To Improve <br />
               <span className="text-orange-600">Operations?</span>
            </h1>
            <p className="text-lg sm:text-2xl font-bold text-slate-900/50 leading-tight max-w-2xl">
              Let's identify bottlenecks, automate workflows, and build systems that support long-term business growth. We respond within 24 hours.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[100px] fill-[#F3F4F6]">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,51.11,1200,80V0Z" opacity=".1"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".2"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 xl:px-24 mb-32 sm:mb-40 mt-20 sm:mt-40 relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-3xl rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 shadow-[0_32px_64px_-16px_rgba(11,27,53,0.1)] border border-slate-200 relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-[0.01] bg-[url('/noise.svg')] pointer-events-none" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl group-hover:bg-orange-600/10 transition-colors duration-700" />
              
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Full Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/50 border border-slate-300 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#3A5CCC] font-bold transition-all shadow-sm hover:border-orange-600/20"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Work Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/50 border border-slate-300 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#3A5CCC] font-bold transition-all shadow-sm hover:border-orange-600/20"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Company Name</label>
                    <input
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white/50 border border-slate-300 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#3A5CCC] font-bold transition-all shadow-sm hover:border-orange-600/20"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">WhatsApp Number</label>
                    <input
                      name="whatsapp"
                      type="text"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full bg-white/50 border border-slate-300 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#3A5CCC] font-bold transition-all shadow-sm hover:border-orange-600/20"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Your Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/50 border border-slate-300 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#3A5CCC] font-bold transition-all resize-none shadow-sm hover:border-orange-600/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-orange-600 text-white py-4 sm:py-6 rounded-2xl text-lg sm:text-xl font-black shadow-[0_20px_40px_-10px_rgba(58,92,204,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 group disabled:opacity-50 disabled:hover:scale-100"
                >
                  {status === 'loading' ? 'Establishing Connection...' : 'Request Strategy Call'} 
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* Info Cards */}
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-[#0F172A] via-[#161f33] to-[#0F172A] rounded-[2rem] sm:rounded-[3rem] p-5 sm:p-12 text-slate-900 shadow-2xl relative overflow-hidden border border-slate-300 group"
              >
                <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.svg')] pointer-events-none" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-600/10 transition-colors" />
                
                <div className="bg-white/80 backdrop-blur-3xl rounded-[2.5rem] p-12 shadow-2xl border border-slate-200 mb-8">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-6">Headquarters</div>
                  <div className="text-2xl font-black text-slate-900 mb-2">Next Revolution Tech</div>
                  <div className="text-slate-900/80 font-medium mb-2">Karachi, Pakistan</div>
                  <div className="text-slate-900/60 text-sm font-medium">Serving clients globally from the heart of Pakistan's tech hub.</div>
                </div>

                <div className="space-y-6 sm:space-y-8 relative z-10">
                  <div className="flex items-center gap-4 sm:gap-6 group/item">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 rounded-2xl flex items-center justify-center text-orange-600 border border-slate-300 group-hover/item:bg-orange-600 group-hover/item:text-white transition-all shadow-xl">
                      <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Partnerships & Strategy</div>
                      <a href="mailto:nextrevolutiontech@gmail.com" className="text-sm sm:text-lg font-black text-white hover:text-orange-500 transition-colors break-all lg:break-all xl:break-normal">
                        nextrevolutiontech@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-6 group/item">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 rounded-2xl flex items-center justify-center text-[#25D366] border border-slate-300 group-hover/item:bg-[#25D366] group-hover/item:text-slate-900 transition-all shadow-xl">
                      <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Direct Line</div>
                      <a href="https://wa.me/923442013217" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-2xl font-black text-white hover:text-[#25D366] transition-colors">0344-2013217</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-6 group/item">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 rounded-2xl flex items-center justify-center text-[#3B82F6] border border-slate-300 group-hover/item:bg-[#3B82F6] group-hover/item:text-slate-900 transition-all shadow-xl">
                      <Globe className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Location</div>
                      <div className="text-lg sm:text-2xl font-black text-white">Karachi, Pakistan</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-[#3A5CCC] to-[#27324A] rounded-[2rem] sm:rounded-[3rem] p-5 sm:p-12 text-slate-900 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-y-1/2 translate-x-1/2" />
                <ShieldCheck className="w-16 h-16 mb-8 text-slate-900 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-3xl font-black mb-6 tracking-tighter relative z-10">Secure & Confidential</h3>
                <p className="text-slate-900/90 text-lg font-bold leading-relaxed relative z-10">
                  We sign NDAs by default for all enterprise engagements. Your operational data, trade secrets, and system architectures are strictly confidential.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

      <div className="h-24 bg-gradient-to-b from-[#F3F4F6] to-[#0F172A]" />
    </div>
  );
}