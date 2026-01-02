import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
const logoImage = "/logo.png";

export function Footer() {
  return (
    <footer className="bg-card text-muted-foreground border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-start gap-2 mb-4">
              <img src={logoImage} alt="Next Revolution Tech" className="h-20 sm:h-32 w-auto object-contain dark:brightness-0 dark:invert transition-all" />
              <span className="text-xl font-bold text-foreground">Next Revolution Tech</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Engineering Scalable Digital Solutions for a Connected World
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com/nextrevolutiontech-maker" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-foreground transition-colors">Our Process</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground">Custom Software Development</li>
              <li className="text-muted-foreground">SaaS Development</li>
              <li className="text-muted-foreground">AI & Automation</li>
              <li className="text-muted-foreground">Cloud & DevOps</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-muted-foreground">Operating from Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Next Revolution Tech. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link to="/gdpr-compliance" className="hover:text-foreground transition-colors">GDPR Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}