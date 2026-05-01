import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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
    { name: "PROCESS", href: "/process" },
    { name: "ABOUT", href: "/about" },
    { name: "BLOG", href: "/blog" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-[0_10px_40px_-15px_rgba(11,27,53,0.1)]" : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between">
          {/* Logo - INCREASED SIZE FOR PROMINENCE */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logoImage}
              alt="Next Revolution Tech"
              className="h-10 sm:h-12 w-auto object-contain transition-all group-hover:scale-105"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-[10px] font-black tracking-[0.2em] text-[#0B1B35]/60 hover:text-[#0B1B35] hover:bg-black/5 px-5 py-2.5 rounded-full transition-all uppercase"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <Link to="/contact?type=test" className="text-[11px] font-black text-[#F58220] px-6 py-3 border-2 border-[#F58220] rounded-full hover:bg-[#F58220] hover:text-white transition-all tracking-wider uppercase shadow-[0_5px_15px_rgba(245,130,32,0.1)]">
              Small Paid Test
            </Link>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-[#F58220] to-[#FF4D00] text-white px-8 py-3.5 rounded-full text-[12px] font-black shadow-[0_10px_25px_-5px_rgba(245,130,32,0.5)] hover:scale-105 hover:shadow-[0_15px_30px_-5px_rgba(245,130,32,0.6)] transition-all uppercase tracking-wider"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 text-[#0B1B35] hover:bg-black/5 rounded-xl transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-6 bg-white rounded-[2.5rem] overflow-hidden border border-black/5 shadow-2xl"
            >
              <div className="p-10 space-y-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-2xl font-black tracking-tighter hover:text-orange transition-colors text-[#0B1B35]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-8 border-t border-black/5 space-y-6">
                  <Link to="/contact?type=test" className="block text-xl font-black text-center" onClick={() => setMobileMenuOpen(false)}>
                    Small Paid Test
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
  );
}