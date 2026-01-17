import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { HoverModal } from "./ui/HoverModal";
import { API_BASE_URL } from "../../config";
const logoImage = "/logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoverModalOpen, setHoverModalOpen] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const location = useLocation();

  useEffect(() => {
    // Fetch case studies for preview
    fetch(`${API_BASE_URL}/api/projects`)
      .then(res => res.json())
      .then(data => {
        const formatted = Array.isArray(data) ? data : [];
        setCaseStudies(formatted.slice(0, 3)); // Show first 3 case studies
      })
      .catch(err => {
        console.error("Failed to load case studies", err);
        // Fallback dummy data
        setCaseStudies([
          { title: "Pulse Portal", industry: "MedSpa & Wellness SaaS", image_url: "/pulse-admin.png" },
          { title: "Global FinTech Platform", industry: "Finance", image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400" },
          { title: "Healthcare Analytics", industry: "Healthcare", image_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400" }
        ]);
      });

    // Fetch services for preview
    fetch(`${API_BASE_URL}/api/services`)
      .then(res => res.json())
      .then(data => {
        const formatted = Array.isArray(data) ? data : [];
        setServices(formatted.slice(0, 4)); // Show first 4 services
      })
      .catch(err => {
        console.error("Failed to load services", err);
        setServices([]);
      });
  }, []);

  const navigation = [
    { 
      name: "Home", 
      href: "/",
      description: "Welcome to Next Revolution Tech - Your trusted partner for enterprise software solutions."
    },
    { 
      name: "About", 
      href: "/about",
      description: "Learn about our mission, vision, and the team behind Next Revolution Tech."
    },
    { 
      name: "Services", 
      href: "/services",
      description: "Explore our comprehensive range of software development services and solutions."
    },
    { 
      name: "Case Studies", 
      href: "/case-studies",
      description: "Discover how we've helped businesses achieve success through our innovative solutions."
    },
    { 
      name: "Process", 
      href: "/process",
      description: "Understand our proven development process and how we deliver exceptional results."
    },
    { 
      name: "Blog", 
      href: "/blog",
      description: "Read our latest insights, tech trends, and industry updates."
    },
    { 
      name: "Estimate Cost", 
      href: "/estimator",
      description: "Get an instant estimate for your project with our cost calculator."
    },
    { 
      name: "Contact", 
      href: "/contact",
      description: "Get in touch with our team to discuss your project requirements."
    },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[100px] items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <motion.img
              src={logoImage}
              alt="Next Revolution Tech Logo"
              className="h-16 sm:h-24 w-auto object-contain drop-shadow-md transition-all"
              onError={(e) => {
                console.error('Logo failed to load:', logoImage);
                (e.target as HTMLImageElement).style.display = 'none';
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            />
            <span className="text-lg sm:text-2xl font-bold text-foreground relative -top-[3px] sm:-top-[5px] leading-tight">Next Revolution Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex xl:items-center xl:gap-x-6">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => setHoveredNavItem(item.name)}
                onMouseLeave={() => setHoveredNavItem(null)}
              >
                <Link
                  to={item.href}
                  className={`transition-colors relative text-sm font-medium ${isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                    }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-[1.4rem] left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
                <HoverModal
                  isOpen={hoveredNavItem === item.name}
                  onMouseEnter={() => setHoveredNavItem(item.name)}
                  onMouseLeave={() => setHoveredNavItem(null)}
                  position="bottom"
                  align="center"
                  className={`!z-[10001] ${
                    item.name === "Case Studies" || item.name === "Services" 
                      ? "min-w-[500px] max-w-[600px]" 
                      : item.name === "Home" || item.name === "About" || item.name === "Process"
                      ? "min-w-[400px] max-w-[500px]"
                      : "min-w-[300px] max-w-[400px]"
                  }`}
                >
                  {item.name === "Home" ? (
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg mb-2">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Stats Preview */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-secondary/10 p-3 rounded-lg border border-border">
                          <div className="text-2xl font-bold text-primary mb-1">50+</div>
                          <div className="text-xs text-muted-foreground">Projects Delivered</div>
                        </div>
                        <div className="bg-secondary/10 p-3 rounded-lg border border-border">
                          <div className="text-2xl font-bold text-primary mb-1">98%</div>
                          <div className="text-xs text-muted-foreground">Client Retention</div>
                        </div>
                        <div className="bg-secondary/10 p-3 rounded-lg border border-border">
                          <div className="text-2xl font-bold text-primary mb-1">10+</div>
                          <div className="text-xs text-muted-foreground">Countries Served</div>
                        </div>
                        <div className="bg-secondary/10 p-3 rounded-lg border border-border">
                          <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                          <div className="text-xs text-muted-foreground">Support</div>
                        </div>
                      </div>
                      
                      <Link
                        to={item.href}
                        className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-4 py-2.5 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium mt-4"
                        onClick={() => setHoveredNavItem(null)}
                      >
                        Explore Home
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  ) : item.name === "About" ? (
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg mb-2">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* About Highlights */}
                      <div className="space-y-2">
                        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/10 transition-colors">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                            <span className="text-xs font-bold">✓</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">Proven Expertise</div>
                            <div className="text-xs text-muted-foreground">Decades of combined experience</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/10 transition-colors">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                            <span className="text-xs font-bold">✓</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">Dedicated Team</div>
                            <div className="text-xs text-muted-foreground">Expert developers & consultants</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/10 transition-colors">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                            <span className="text-xs font-bold">✓</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">Security First</div>
                            <div className="text-xs text-muted-foreground">Enterprise-grade security</div>
                          </div>
                        </div>
                      </div>
                      
                      <Link
                        to={item.href}
                        className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-4 py-2.5 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium mt-4"
                        onClick={() => setHoveredNavItem(null)}
                      >
                        Learn More About Us
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  ) : item.name === "Services" ? (
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg mb-2">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Services Preview */}
                      <div className="space-y-2 max-h-[400px] overflow-y-auto">
                        {services.length > 0 ? (
                          services.map((service, idx) => (
                            <Link
                              key={idx}
                              to={`/services/${service.title?.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block group"
                              onClick={() => setHoveredNavItem(null)}
                            >
                              <div className="flex gap-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/10 transition-all">
                                {service.image_url && (
                                  <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                                    <img 
                                      src={service.image_url} 
                                      alt={service.title}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                      onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                      }}
                                    />
                                  </div>
                                )}
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
                                    {service.title}
                                  </h4>
                                  {service.description && (
                                    <p className="text-xs text-muted-foreground line-clamp-2">
                                      {service.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </Link>
                          ))
                        ) : (
                          <div className="text-sm text-muted-foreground text-center py-4">
                            Loading services...
                          </div>
                        )}
                      </div>
                      
                      <Link
                        to={item.href}
                        className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-4 py-2.5 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium mt-4"
                        onClick={() => setHoveredNavItem(null)}
                      >
                        View All Services
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  ) : item.name === "Case Studies" ? (
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg mb-2">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Case Studies Preview */}
                      <div className="space-y-3 max-h-[400px] overflow-y-auto">
                        {caseStudies.length > 0 ? (
                          caseStudies.map((study, idx) => (
                            <Link
                              key={idx}
                              to={`/case-studies#${study.title?.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block group"
                              onClick={() => setHoveredNavItem(null)}
                            >
                              <div className="flex gap-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/10 transition-all">
                                {study.image_url && (
                                  <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                                    <img 
                                      src={study.image_url} 
                                      alt={study.title}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                      onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                      }}
                                    />
                                  </div>
                                )}
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
                                    {study.title}
                                  </h4>
                                  {study.industry && (
                                    <p className="text-xs text-muted-foreground">{study.industry}</p>
                                  )}
                                  {study.challenge && (
                                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                      {study.challenge}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </Link>
                          ))
                        ) : (
                          <div className="text-sm text-muted-foreground text-center py-4">
                            Loading case studies...
                          </div>
                        )}
                      </div>
                      
                      <Link
                        to={item.href}
                        className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-4 py-2.5 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium mt-4"
                        onClick={() => setHoveredNavItem(null)}
                      >
                        View All Case Studies
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  ) : item.name === "Process" ? (
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg mb-2">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Process Steps Preview */}
                      <div className="space-y-2">
                        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/10 transition-colors">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0 text-xs font-bold">
                            01
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">Discovery & Analysis</div>
                            <div className="text-xs text-muted-foreground">Understanding your requirements</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/10 transition-colors">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0 text-xs font-bold">
                            02
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">Design & Planning</div>
                            <div className="text-xs text-muted-foreground">Architecture and roadmap</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/10 transition-colors">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0 text-xs font-bold">
                            03
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">Development</div>
                            <div className="text-xs text-muted-foreground">Agile development process</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/10 transition-colors">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0 text-xs font-bold">
                            04
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">Testing & Launch</div>
                            <div className="text-xs text-muted-foreground">Quality assurance & deployment</div>
                          </div>
                        </div>
                      </div>
                      
                      <Link
                        to={item.href}
                        className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-4 py-2.5 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium mt-4"
                        onClick={() => setHoveredNavItem(null)}
                      >
                        View Full Process
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  ) : item.name === "Blog" ? (
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg mb-2">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Blog Preview */}
                      <div className="space-y-3">
                        <div className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/10 transition-all">
                          <div className="text-sm font-medium text-foreground mb-1">Latest Tech Trends</div>
                          <div className="text-xs text-muted-foreground">Stay updated with industry insights</div>
                        </div>
                        <div className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/10 transition-all">
                          <div className="text-sm font-medium text-foreground mb-1">Development Best Practices</div>
                          <div className="text-xs text-muted-foreground">Expert tips and strategies</div>
                        </div>
                        <div className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/10 transition-all">
                          <div className="text-sm font-medium text-foreground mb-1">Case Study Insights</div>
                          <div className="text-xs text-muted-foreground">Learn from real projects</div>
                        </div>
                      </div>
                      
                      <Link
                        to={item.href}
                        className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-4 py-2.5 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium mt-4"
                        onClick={() => setHoveredNavItem(null)}
                      >
                        Read Our Blog
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  ) : item.name === "Estimate Cost" ? (
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg mb-2">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Calculator Features */}
                      <div className="space-y-2">
                        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/10 transition-colors">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                            <span className="text-xs">💰</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">Instant Estimates</div>
                            <div className="text-xs text-muted-foreground">Get quick project cost estimates</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/10 transition-colors">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                            <span className="text-xs">📊</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">Customizable Options</div>
                            <div className="text-xs text-muted-foreground">Adjust features and requirements</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/10 transition-colors">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                            <span className="text-xs">⚡</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">Transparent Pricing</div>
                            <div className="text-xs text-muted-foreground">No hidden costs or surprises</div>
                          </div>
                        </div>
                      </div>
                      
                      <Link
                        to={item.href}
                        className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-4 py-2.5 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium mt-4"
                        onClick={() => setHoveredNavItem(null)}
                      >
                        Calculate Cost
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  ) : item.name === "Contact" ? (
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg mb-2">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Contact Info */}
                      <div className="space-y-2">
                        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/10 transition-colors">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                            <span className="text-xs">📧</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">Email Us</div>
                            <div className="text-xs text-muted-foreground">support@nextrevolutiontech.tech</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/10 transition-colors">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                            <span className="text-xs">🌍</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">Global Presence</div>
                            <div className="text-xs text-muted-foreground">Operating from Pakistan</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/10 transition-colors">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                            <span className="text-xs">💬</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">24/7 Support</div>
                            <div className="text-xs text-muted-foreground">Always here to help</div>
                          </div>
                        </div>
                      </div>
                      
                      <Link
                        to={item.href}
                        className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-4 py-2.5 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium mt-4"
                        onClick={() => setHoveredNavItem(null)}
                      >
                        Get in Touch
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground text-sm">{item.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                      <Link
                        to={item.href}
                        className="block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium mt-3"
                        onClick={() => setHoveredNavItem(null)}
                      >
                        Learn More
                      </Link>
                    </div>
                  )}
                </HoverModal>
              </motion.div>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Login/Dashboard Button */}
            <div className="hidden xl:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {localStorage.getItem('token') ? (
                  <Link
                    to="/admin/dashboard"
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    to="/admin/login"
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Login
                  </Link>
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
              onMouseEnter={() => setHoverModalOpen(true)}
              onMouseLeave={() => setHoverModalOpen(false)}
            >
              <Link
                to={localStorage.getItem('token') ? "/contact" : "/admin/login"}
                onClick={(e) => {
                  if (!localStorage.getItem('token')) {
                    e.preventDefault();
                    window.location.href = '/contact';
                  }
                }}
                className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg font-medium text-sm"
              >
                Book a Call
              </Link>
              
              <HoverModal
                isOpen={hoverModalOpen}
                onMouseEnter={() => setHoverModalOpen(true)}
                onMouseLeave={() => setHoverModalOpen(false)}
                position="bottom"
                align="end"
              >
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground text-sm">Get Started Today!</h3>
                  <p className="text-xs text-muted-foreground">
                    Schedule a free consultation call with our team to discuss your project.
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium mt-3"
                  >
                    Contact Us
                  </Link>
                </div>
              </HoverModal>
            </motion.div>
          </div>



          {/* Mobile menu button */}
          <button
            type="button"
            className="xl:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            className="xl:hidden border-t border-gray-200 py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors px-2 py-1 ${isActive(item.href)
                    ? "text-primary bg-primary/10 rounded"
                    : "text-muted-foreground hover:text-primary"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors text-center shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>

            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}