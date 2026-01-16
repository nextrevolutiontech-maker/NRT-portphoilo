import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Send, Shield, CheckCircle, Activity, Github } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
const logoImage = "/logo.png";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const emailValue = formData.get("email") as string || email;
    
    if (emailValue) {
      toast.success("Thanks for subscribing!", {
        description: `We'll send updates to ${emailValue}`,
        duration: 4000,
      });
      setEmail("");
      e.currentTarget.reset();
    }
  };

  return (
    <footer className="bg-card text-muted-foreground border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-start gap-2 mb-4">
              <img 
                src={logoImage} 
                alt="Next Revolution Tech" 
                className="h-20 sm:h-32 w-auto object-contain transition-all"
                onError={(e) => {
                  console.error('Logo failed to load:', logoImage);
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
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
            <div className="flex items-center gap-3 text-muted-foreground mb-4">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:support@nextrevolutiontech.tech" className="hover:text-primary transition-colors">support@nextrevolutiontech.tech</a>
            </div>
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

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1 border-t sm:border-t-0 border-border pt-8 sm:pt-0">
            <h3 className="text-foreground mb-4">Stay Ahead of the Curve</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get the latest tech trends and insights delivered to your inbox.
            </p>
            <form className="flex gap-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="bg-secondary/20 border border-border rounded px-4 py-2 text-sm w-full focus:outline-none focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50"
                required
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground p-2 rounded hover:bg-primary/90 transition-colors"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Trust Signals & Status */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4 border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full border border-border">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Secure & Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full border border-border">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">ISO Certified Processes</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full border border-border">
              <Activity className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-foreground">All Systems Operational</span>
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Next Revolution Tech. All rights reserved.
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