import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Cloud, Cpu, BarChart3, Shield, Zap, CheckCircle2, Users, Award, TrendingUp, Database, Smartphone, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { GravityHero } from "../components/ui/GravityHero";
import { VideoHero } from "../components/ui/VideoHero";
import { API_BASE_URL } from "../../config";

// Helper to map icon names to components
const getIcon = (name: string) => {
  const icons: any = {
    Code, Cloud, Cpu, BarChart3, Shield, Zap, CheckCircle2, Users, Award, TrendingUp, Database, Smartphone, Globe
  };
  return icons[name] || <Code className="h-8 w-8" />;
};

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image_url: string;
}

interface Testimonial {
  id: number;
  author: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image_url: string;
}

export function Home() {
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([

      // ...
      fetch(`${API_BASE_URL}/api/services`),
      fetch(`${API_BASE_URL}/api/testimonials`)
    ])
      .then(([resServices, resTestimonials]) => Promise.all([resServices.json(), resTestimonials.json()]))
      .then(([dataServices, dataTestimonials]) => {
        setServices(Array.isArray(dataServices) ? dataServices : []);
        setTestimonials(Array.isArray(dataTestimonials) ? dataTestimonials : []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load home data", err);
        setLoading(false);
      });
  }, []);

  const stats = [
    { value: "200+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Enterprise Clients" },
    { value: "15+", label: "Years Experience" },
  ];

  const reasons = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Proven Expertise",
      description: "Decades of combined experience in enterprise software development.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Dedicated Team",
      description: "Expert developers, architects, and consultants committed to your success.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalable Solutions",
      description: "Built for growth with modern, future-proof technology stacks.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security First",
      description: "Enterprise-grade security and compliance built into every solution.",
    },
  ];

  // If no services yet (e.g. fresh DB), fallback to empty state or skip section?
  // We'll just render whatever we have. User can add data via Admin.

  return (
    <div className="pt-20">
      <Helmet>
        <title>Home - Next Revolution Tech | Enterprise Software Solutions</title>
        <meta name="description" content="Next Revolution Tech delivers enterprise-grade software solutions, acting as your global technology partner to drive business growth through innovation." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] dark:from-background dark:to-background text-white dark:text-foreground overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0">
          <GravityHero />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white dark:text-foreground">Engineering Scalable Digital Solutions for a Connected World</h1>
            <p className="mb-6 sm:mb-8 text-lg sm:text-xl text-blue-100 dark:text-muted-foreground">
              Transform your business with enterprise-grade software solutions. We build secure, scalable, and innovative technology that drives growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={localStorage.getItem('token') ? "/contact" : "/admin/login"}
                onClick={(e) => {
                  if (!localStorage.getItem('token')) {
                    e.preventDefault();
                    window.location.href = '/admin/login';
                    alert("Please login to schedule a consultation.");
                  }
                }}
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-primary text-[#1e3a8a] dark:text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-gray-100 dark:hover:bg-primary/90 transition-colors text-center"
              >
                Schedule Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white dark:border-primary text-white dark:text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-white/10 dark:hover:bg-primary/10 transition-colors text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Slider Section */}
      <VideoHero />

      {/* Stats Section */}
      <section className="bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-primary">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions designed for enterprise scale and performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => {
              const Icon = getIcon(service.icon);
              return (
                <div
                  key={service.id || index}
                  className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="text-primary mb-4">
                    {typeof Icon === 'function' ? <Icon className="h-8 w-8" /> : Icon}
                  </div>
                  <h3 className="mb-3 text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-primary">Why Choose Next Revolution Tech</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We partner with forward-thinking enterprises to deliver technology solutions that drive real business value.
              </p>
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="mb-2 text-foreground">{reason.title}</h4>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzY2OTAzMjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional Team"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-primary">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading enterprises worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id || index} className="bg-card p-8 rounded-lg border border-border">
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4 flex items-center gap-4">
                  {testimonial.image_url && (
                    <img
                      src={testimonial.image_url}
                      alt={testimonial.author}
                      className="w-10 h-10 object-cover rounded-full bg-secondary"
                    />
                  )}
                  <div>
                    <div className="text-card-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build scalable, secure, and innovative technology solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-md hover:bg-muted transition-colors"
          >
            Schedule a Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}