import { useState } from "react";
import { Mail, Send, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { toast } from "sonner";
import { motion } from "motion/react";
import { API_BASE_URL } from "../../config";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      toast.success("Message sent!", { description: "We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    } catch (error) {
      setStatus('error');
      toast.error("Failed to send message", { description: "Please check if the backend is running or try again." });
    } finally {
      setStatus('idle');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20 min-h-screen bg-[#F8F9FA] text-[#0B1B35] overflow-x-hidden">
      <SEO 
        title="Contact Us" 
        description="Ready to stop dealing with tech hurdles? Get in touch with Next Revolution Tech for reliable fixes, custom integrations, and 24/7 dedicated support."
      />

      <section className="pt-12 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl mb-24 text-center sm:text-left">
            <h1 className="text-4xl sm:text-7xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.95] sm:leading-[0.85] mb-10">
               Ready to stop <br />
               <span className="text-[#F58220] italic font-italic-serif font-normal">dealing</span> with tech?
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-[#0B1B35]/40 leading-tight max-w-2xl">
              Fill out the form below or start with a small paid test. We respond to all inquiries within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[3rem] p-8 sm:p-12 shadow-2xl border border-black/5 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-5 bg-[url('/noise.svg')] pointer-events-none" />
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-[#0B1B35]/40 ml-4">Full Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#F8F9FA] border border-black/5 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#F58220]/50 font-bold transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-[#0B1B35]/40 ml-4">Work Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#F8F9FA] border border-black/5 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#F58220]/50 font-bold transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-[#0B1B35]/40 ml-4">Company Name</label>
                  <input
                    name="company"
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-[#F8F9FA] border border-black/5 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#F58220]/50 font-bold transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-[#0B1B35]/40 ml-4">Your Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your tech hurdles..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#F8F9FA] border border-black/5 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-[#F58220]/50 font-bold transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#F58220] text-white py-6 rounded-2xl text-xl font-black shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-4 group"
                >
                  {status === 'loading' ? 'Sending Strategy...' : 'Send Message'} 
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* Info Cards */}
            <div className="space-y-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-[#0B1B35] to-[#1A365D] rounded-[3rem] p-10 sm:p-12 text-white shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] pointer-events-none" />
                <h3 className="text-3xl font-black mb-10 tracking-tighter">Direct Channels</h3>
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#F58220] border border-white/10 group-hover:bg-[#F58220] group-hover:text-white transition-all shadow-xl">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">General Inquiries</div>
                      <a href="mailto:support@nextrevolutiontech.tech" className="text-lg sm:text-xl font-black hover:text-[#F58220] transition-colors break-all">support@nextrevolutiontech.tech</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#F58220] border border-white/10 group-hover:bg-[#F58220] group-hover:text-white transition-all shadow-xl">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">Response Guarantee</div>
                      <div className="text-lg sm:text-xl font-black">Within 24 Business Hours</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-[#F58220] to-[#FF4D00] rounded-[3rem] p-10 sm:p-12 text-white shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-10 bg-[url('/noise.svg')] pointer-events-none" />
                <ShieldCheck className="w-16 h-16 mb-8 text-white relative z-10" />
                <h3 className="text-3xl font-black mb-6 tracking-tighter relative z-10">Secure & Confidential</h3>
                <p className="text-white/80 text-lg font-bold leading-relaxed relative z-10">
                  We sign NDAs by default for all major projects. Your data and codebase are 100% secure with our internal team.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-24 bg-gradient-to-b from-[#F8F9FA] to-[#0B1B35]" />
    </div>
  );
}