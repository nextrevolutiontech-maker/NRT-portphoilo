import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Magnetic } from "./ui/Magnetic";

const logoImage = "/logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "SERVICES", href: "/services" },
    { name: "CASE STUDIES", href: "/case-studies" },
    { name: "PRICING", href: "/pricing" },
    { name: "PROCESS", href: "/process" },
    { name: "ABOUT", href: "/about" },
    { name: "BLOG", href: "/blog" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "bg-white/90 backdrop-blur-2xl py-3 border-b border-[#0B1B35]/5 shadow-2xl" : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logoImage}
              alt="Next Revolution Tech"
              className={`h-10 sm:h-12 w-auto object-contain transition-all group-hover:scale-105 ${!scrolled && 'brightness-0 invert'}`}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-[10px] font-black tracking-[0.2em] px-5 py-2.5 rounded-full transition-all uppercase ${
                  scrolled ? "text-[#0B1B35]/50 hover:text-[#0B1B35] hover:bg-[#0B1B35]/5" : "text-white/50 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <a href="https://wa.me/923442013217" target="_blank" rel="noopener noreferrer" className={`hidden xl:flex items-center gap-2 text-[11px] font-black transition-colors tracking-widest uppercase ${
              scrolled ? "text-[#25D366] hover:text-[#25D366]/80" : "text-white hover:text-[#25D366]"
            }`}>
              <span className={`w-2 h-2 rounded-full animate-pulse ${scrolled ? "bg-[#25D366]" : "bg-white"}`} />
              0344-2013217
            </a>
            <Link to="/contact?type=test" className={`text-[11px] font-black px-6 py-3 border-2 rounded-full transition-all tracking-wider uppercase ${
              scrolled ? "text-[#F58220] border-[#F58220] hover:bg-[#F58220] hover:text-white" : "text-white border-white/20 hover:bg-white hover:text-[#0B1B35]"
            }`}>
              Try a Test Task
            </Link>
            <Magnetic>
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-[#F58220] to-[#FF4D00] text-white px-8 py-3.5 rounded-full text-[12px] font-black shadow-xl hover:scale-105 transition-all uppercase tracking-wider"
              >
                Get Started
              </Link>
            </Magnetic>
          </div>

          <button
            className={`lg:hidden p-3 rounded-xl transition-colors ${scrolled ? "text-[#0B1B35] hover:bg-[#0B1B35]/5" : "text-white hover:bg-white/10"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden mt-6 bg-[#0B1B35] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl backdrop-blur-3xl"
            >
              <div className="p-10 space-y-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-2xl font-black tracking-tighter text-white hover:text-[#F58220] transition-colors uppercase"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-8 border-t border-white/5 space-y-6">
                  <Link to="/contact?type=test" className="block text-xl font-black text-white text-center" onClick={() => setMobileMenuOpen(false)}>
                    Try a Test Task
                  </Link>
                  <Link to="/contact" className="block w-full bg-[#F58220] text-white text-center py-6 rounded-2xl font-black text-lg shadow-xl" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}