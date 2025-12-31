import { useState, useEffect } from "react";
import { Code, Cloud, Cpu, Database, Shield, Zap, Smartphone, Globe, CheckCircle2, BarChart3, Users, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { API_BASE_URL } from "../../config";

// Helper to map icon names to components
const getIcon = (name: string) => {
  const icons: any = {
    Code, Cloud, Cpu, BarChart3, Shield, Zap, CheckCircle2, Users, Award, TrendingUp, Database, Smartphone, Globe
  };
  return icons[name] || <Code className="h-10 w-10" />;
};

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image_url: string;
}

export function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {


    // ... inside the component
    fetch(`${API_BASE_URL}/api/services`)
      .then(res => res.json())
      .then(data => {
        setServices(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch services", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-20">
      <Helmet>
        <title>Services - Next Revolution Tech | Custom Software, SaaS & AI</title>
        <meta name="description" content="Explore Next Revolution Tech's services including Custom Software, SaaS Development, AI & Automation, and Cloud Solutions." />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = getIcon(service.icon);
              return (
                <div
                  key={service.id || index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                      {typeof Icon === 'function' ? <Icon className="h-10 w-10" /> : Icon}
                    </div>
                    <h2 className="mb-4 text-primary">{service.title}</h2>
                    <p className="text-xl text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {Array.isArray(service.features) && service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <ImageWithFallback
                      src={service.image_url}
                      alt={service.title}
                      className="rounded-lg shadow-xl w-full h-auto"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-primary">Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We work with industry-leading technologies and frameworks
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {["React", "Node.js", "Python", "AWS", "Azure", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "TensorFlow", "GraphQL", "TypeScript"].map((tech, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-card-foreground">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Let's Build Something Great Together</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discuss your project requirements with our expert team
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-md hover:bg-muted transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
