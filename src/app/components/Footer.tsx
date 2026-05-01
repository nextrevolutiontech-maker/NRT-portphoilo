import { Link } from "react-router-dom";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  ArrowUp, 
  Globe,
  MessageSquare,
  ChevronRight
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    services: [
      { name: "eCommerce Tech", href: "/services" },
      { name: "API Integrations", href: "/services" },
      { name: "Automation & Systems", href: "/services" },
      { name: "Custom Solutions", href: "/services" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Process", href: "/process" },
      { name: "Success Stories", href: "/case-studies" },
      { name: "Latest Insights", href: "/blog" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "GDPR Compliance", href: "/gdpr-compliance" },
    ]
  };

  return (
    <footer className="bg-[#0B1B35] text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Background Polish */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.svg')]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#F58220]/50 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 pr-0 lg:pr-12">
            <Link to="/" className="inline-block mb-8 group">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-12 sm:h-14 w-auto group-hover:scale-105 transition-transform brightness-110" 
              />
            </Link>
            <p className="text-white/40 text-lg font-bold leading-relaxed mb-10 max-w-sm">
               We solve real technical problems for growing businesses through dedicated engineering partnerships.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/nextrevolutiontech" },
                { icon: <Github className="w-5 h-5" />, href: "https://github.com/nextrevolutiontech-maker" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-[#F58220] hover:text-white hover:border-[#F58220] transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F58220] mb-8">Solutions</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-white/50 hover:text-white text-base font-bold transition-colors flex items-center gap-2 group">
                      <ChevronRight className="w-3.5 h-3.5 text-[#F58220] opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F58220] mb-8">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-white/50 hover:text-white text-base font-bold transition-colors flex items-center gap-2 group">
                      <ChevronRight className="w-3.5 h-3.5 text-[#F58220] opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F58220] mb-8">Connect</h4>
            <div className="space-y-6">
               <a href="mailto:support@nextrevolutiontech.tech" className="group block p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F58220]/50 transition-all">
                  <div className="flex items-center gap-4 mb-2">
                    <Mail className="w-5 h-5 text-[#F58220]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Email Support</span>
                  </div>
                  <div className="text-base font-black text-white group-hover:text-[#F58220] transition-colors truncate">
                    support@nextrevolutiontech.tech
                  </div>
               </a>
               <div className="group block p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-4 mb-2">
                    <MessageSquare className="w-5 h-5 text-[#F58220]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Priority Chat</span>
                  </div>
                  <div className="text-base font-black text-white">
                    24/7 Global Ops
                  </div>
               </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
            © {currentYear} Next Revolution Tech. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
             {footerLinks.legal.map((link) => (
               <Link key={link.name} to={link.href} className="hover:text-[#F58220] transition-colors">{link.name}</Link>
             ))}
          </div>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#F58220] transition-all shadow-xl group"
          >
             <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}