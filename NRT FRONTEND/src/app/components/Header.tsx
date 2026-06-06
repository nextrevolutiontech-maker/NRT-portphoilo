import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
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
    { name: "SOLUTIONS", href: "/services" },
    { name: "CASE STUDIES", href: "/case-studies" },
    { name: "RESOURCES", href: "/resources" },
    { 
      name: "COMPANY", 
      href: "/about",
      dropdown: [
        { name: "About", href: "/about" },
        { name: "Process", href: "/process" },
        { name: "Live Portfolio", href: "/portfolio" },
        { name: "Founder", href: "/author/muhammad-ahsan-khan" },
        { name: "Contact", href: "/contact" }
      ]
    },
  ];


  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md py-2.5 border-b border-[#0F172A]/5 shadow-lg" 
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <motion.nav 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between">
          
          {/* Logo Brand area */}
          <Link to="/" className="flex items-center py-1.5 z-50">
            <img
              src={logoImage}
              alt="Next Revolution Tech"
              className={`h-14 sm:h-16 w-auto object-contain transition-all duration-500 ease-out hover:scale-105 hover:opacity-90 ${
                !scrolled && 'brightness-0 invert'
              }`}
            />
          </Link>

          {/* Center Navigation Links - Balanced spacing */}
          <div className="hidden xl:flex items-center gap-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`text-nrt-nav px-4 py-2 rounded-full transition-all flex items-center gap-1.5 ${
                    scrolled 
                      ? "text-[#0F172A]/70 hover:text-[#0F172A] hover:bg-[#0F172A]/5" 
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
                </Link>
                {item.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="bg-white rounded-2xl shadow-xl border border-black/5 p-3 min-w-[200px] flex flex-col gap-1">
                      {item.dropdown.map((subItem) => (
                        <Link 
                          key={subItem.name}
                          to={subItem.href}
                          className="px-4 py-3 text-sm font-bold text-[#0F172A]/70 hover:text-[#3A5CCC] hover:bg-[#F3F4F6] rounded-xl transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right CTA Area - Clear Hierarchy */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Secondary CTA */}
            <Magnetic>
              <Link 
                to="/dedicated-teams" 
                className={`px-5 py-3 rounded-full text-nrt-nav font-black uppercase tracking-wider text-sm transition-all border ${
                  scrolled 
                    ? "border-[#0F172A]/10 text-[#0F172A] hover:bg-[#0F172A]/5" 
                    : "border-white/20 text-white hover:bg-white/10"
                }`}
              >
                Hire Dedicated Team
              </Link>
            </Magnetic>
            {/* Primary CTA */}
            <Magnetic>
              <Link 
                to="/contact" 
                className="bg-[#3A5CCC] hover:bg-[#27324A] text-white px-6 py-3 rounded-full text-nrt-nav shadow-md hover:shadow-lg transition-all font-black uppercase tracking-wider text-sm"
              >
                Book Technical Audit
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className={`xl:hidden p-2 rounded-xl transition-colors z-50 ${
              scrolled ? "text-[#0F172A] hover:bg-[#0F172A]/5" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden mt-4 bg-[#0F172A] rounded-3xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-lg"
            >
              <div className="p-8 space-y-6">
                {navigation.map((item) => (
                  <div key={item.name} className="space-y-4">
                    <Link
                      to={item.href}
                      className="block text-xl font-bold tracking-tight text-white hover:text-[#3A5CCC] transition-colors uppercase"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="pl-4 space-y-3 border-l-2 border-white/10">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block text-sm font-bold text-white/60 hover:text-white uppercase tracking-wider transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-6 border-t border-white/10 space-y-3">
                  <Link 
                    to="/dedicated-teams" 
                    className="block w-full border border-white/20 text-white hover:bg-white/10 text-center py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Hire Dedicated Team
                  </Link>
                  {/* Primary CTA */}
                  <Link 
                    to="/contact" 
                    className="block w-full bg-[#3A5CCC] hover:bg-[#3A5CCC]/90 text-white text-center py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Technical Audit
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