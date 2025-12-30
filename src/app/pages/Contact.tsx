import { useState } from "react";
import { Mail, Phone, MapPin, Send, Shield, Lock, FileCheck } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const offices = [
    {
      city: "San Francisco",
      address: "123 Tech Street, Suite 500",
      state: "California, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@revolutiontech.com",
    },
    {
      city: "New York",
      address: "456 Innovation Ave, Floor 12",
      state: "New York, NY 10001",
      phone: "+1 (555) 234-5678",
      email: "ny@revolutiontech.com",
    },
    {
      city: "London",
      address: "789 Digital Boulevard",
      state: "London, UK EC1A 1BB",
      phone: "+44 20 1234 5678",
      email: "london@revolutiontech.com",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6">Get In Touch</h1>
            <p className="text-xl text-primary-foreground/90">
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
            <div>
              <h2 className="mb-4 sm:mb-6 text-primary text-2xl sm:text-3xl">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>

                {/* Privacy Note */}
                <div className="bg-secondary/30 p-4 rounded-lg">
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
            <div>
              <h2 className="mb-6 text-primary">Contact Information</h2>

              {/* General Contact */}
              <div className="bg-secondary/30 p-8 rounded-lg mb-8">
                <h3 className="mb-6 text-foreground">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="text-foreground">info@revolutiontech.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="text-foreground">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Headquarters</div>
                      <div className="text-foreground">San Francisco, CA</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg">
                  <Lock className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-foreground">NDA Protection</div>
                    <div className="text-sm text-muted-foreground">Your project details are secure</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-foreground">GDPR Compliant</div>
                    <div className="text-sm text-muted-foreground">Full data protection compliance</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg">
                  <FileCheck className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-foreground">ISO 27001 Certified</div>
                    <div className="text-sm text-muted-foreground">Information security management</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-primary">Our Offices</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Global presence with local expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-card p-8 rounded-lg border border-border">
                <h3 className="mb-4 text-primary">{office.city}</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>{office.address}</p>
                  <p>{office.state}</p>
                  <div className="pt-4 border-t border-border space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">{office.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-primary">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-border pb-6">
              <h4 className="mb-2 text-foreground">What is your typical response time?</h4>
              <p className="text-muted-foreground">We respond to all inquiries within 24 hours during business days. For urgent matters, please call our hotline.</p>
            </div>
            <div className="border-b border-border pb-6">
              <h4 className="mb-2 text-foreground">Do you sign NDAs?</h4>
              <p className="text-muted-foreground">Yes, we are happy to sign NDAs to protect your confidential information before discussing project details.</p>
            </div>
            <div className="border-b border-border pb-6">
              <h4 className="mb-2 text-foreground">What industries do you serve?</h4>
              <p className="text-muted-foreground">We serve enterprises across all industries including finance, healthcare, retail, manufacturing, and technology sectors.</p>
            </div>
            <div>
              <h4 className="mb-2 text-foreground">How do you price your services?</h4>
              <p className="text-muted-foreground">We offer flexible pricing models including fixed-price, time and materials, and dedicated team options based on your project needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}