
import { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Shield, Lock, FileCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner";
import gsap from "gsap";
import { API_BASE_URL } from "../../config";

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.2
      });

      // Contact Form & Info
      gsap.from(".contact-form", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5
      });
      gsap.from(".contact-info", {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5
      });

      // Locations
      gsap.from(".location-card", {
        scrollTrigger: {
          trigger: ".locations-section",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleRealSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setStatus('success');
      toast.success("Message sent successfully!", {
        description: "We will get back to you shortly.",
        duration: 5000,
      });
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    } catch (error: any) {
      console.error(error);
      setStatus('error');
      toast.error("Failed to send message", {
        description: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setStatus('idle');
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20" ref={containerRef}>
      <Helmet>
        <title>Contact Us - Next Revolution Tech | Get in Touch</title>
        <meta name="description" content="Contact Next Revolution Tech for enterprise software solutions. Schedule a consultation or reach out to our global team." />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-background text-foreground py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="hero-text mb-6 text-4xl md:text-5xl font-bold text-primary">Get In Touch</h1>
            <p className="hero-text text-xl text-muted-foreground">
              Ready to transform your business with cutting-edge technology? Schedule a consultation with our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-background py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className="contact-form">
              <h2 className="mb-4 sm:mb-6 text-primary text-2xl sm:text-3xl">Send Us a Message</h2>
              <form onSubmit={handleRealSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 shadow-[0_0_20px_-5px_var(--color-primary)] hover:shadow-[0_0_30px_-5px_var(--color-primary)] transition-all"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>

                {/* Privacy Note */}
                <div className="bg-secondary/10 p-4 rounded-lg border border-border">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-muted-foreground">
                      <p className="mb-2">
                        We respect your privacy and are committed to protecting your personal information.
                      </p>
                      <p>
                        Your data is secure and will only be used to respond to your inquiry. We are GDPR compliant and never share your information with third parties.
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info">
              <h2 className="mb-6 text-primary">Contact Information</h2>

              {/* General Contact */}
              <div className="bg-secondary/10 p-8 rounded-lg mb-8 border border-border">
                <h3 className="mb-6 text-foreground text-xl font-medium">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Headquarters</div>
                      <div className="text-foreground">Operating from Pakistan</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <a href="mailto:support@nextrevolutiontech.tech" className="text-foreground hover:text-primary transition-colors">support@nextrevolutiontech.tech</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-lg border border-border">
                  <Lock className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-foreground font-medium">NDA Protection</div>
                    <div className="text-sm text-muted-foreground">Your project details are secure</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-lg border border-border">
                  <Shield className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-foreground font-medium">GDPR Compliant</div>
                    <div className="text-sm text-muted-foreground">Full data protection compliance</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-lg border border-border">
                  <FileCheck className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-foreground font-medium">ISO 27001 Certified</div>
                    <div className="text-sm text-muted-foreground">Information security management</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations (Simplified) */}
      <section className="bg-secondary/10 py-20 locations-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-primary">Global Presence</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Serving clients worldwide with 24/7 support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border location-card hover:border-primary/50 transition-colors">
              <h3 className="mb-4 text-primary font-medium text-lg">North America</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>Operating remotely to serve clients across US & Canada.</p>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border location-card hover:border-primary/50 transition-colors">
              <h3 className="mb-4 text-primary font-medium text-lg">Europe</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>Serving UK and EU markets with GDPR compliant solutions.</p>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border location-card hover:border-primary/50 transition-colors">
              <h3 className="mb-4 text-primary font-medium text-lg">Middle East</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>Strategic partnerships and localized support for MENA region.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-primary">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-border pb-6">
              <h4 className="mb-2 text-foreground font-medium">What is your typical response time?</h4>
              <p className="text-muted-foreground">We respond to all inquiries within 24 hours during business days.</p>
            </div>
            <div className="border-b border-border pb-6">
              <h4 className="mb-2 text-foreground font-medium">Do you sign NDAs?</h4>
              <p className="text-muted-foreground">Yes, we are happy to sign NDAs to protect your confidential information before discussing project details.</p>
            </div>
            <div className="border-b border-border pb-6">
              <h4 className="mb-2 text-foreground font-medium">What industries do you serve?</h4>
              <p className="text-muted-foreground">We serve enterprises across all industries including finance, healthcare, retail, manufacturing, and technology sectors.</p>
            </div>
            <div>
              <h4 className="mb-2 text-foreground font-medium">How do you price your services?</h4>
              <p className="text-muted-foreground">We offer flexible pricing models including fixed-price, time and materials, and dedicated team options based on your project needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}