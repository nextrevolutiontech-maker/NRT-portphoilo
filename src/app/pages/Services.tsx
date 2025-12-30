import { Code, Cloud, Cpu, Database, Shield, Zap, Smartphone, Globe, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Custom Software Development",
      description: "Enterprise-grade custom software solutions tailored to your unique business requirements.",
      features: [
        "Full-stack web applications",
        "Enterprise system integration",
        "Legacy system modernization",
        "Microservices architecture",
      ],
      image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjY4ODQxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "SaaS Development",
      description: "Build scalable SaaS products with modern architecture and best practices.",
      features: [
        "Multi-tenant architecture",
        "Subscription management",
        "API development",
        "Performance optimization",
      ],
      image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnxlbnwxfHx8fDE3NjY5MDM3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Web & Mobile Applications",
      description: "Responsive web and native mobile applications that deliver exceptional user experiences.",
      features: [
        "Progressive Web Apps (PWA)",
        "iOS and Android development",
        "Cross-platform solutions",
        "UI/UX design services",
      ],
      image: "https://images.unsplash.com/photo-1616386261012-8a328c89d5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwb2ZmaWNlfGVufDF8fHx8MTc2Njg3MTQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Cpu className="h-10 w-10" />,
      title: "AI & Automation",
      description: "Leverage artificial intelligence and automation to transform your business operations.",
      features: [
        "Machine learning models",
        "Process automation",
        "Natural language processing",
        "Predictive analytics",
      ],
      image: "https://images.unsplash.com/photo-1618758992242-2d4bc63a1be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MXx8fHwxNzY2OTQ4NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Cloud & DevOps",
      description: "Modern cloud infrastructure and DevOps practices for continuous delivery.",
      features: [
        "Cloud migration services",
        "Infrastructure as code",
        "CI/CD pipeline setup",
        "Container orchestration",
      ],
      image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnxlbnwxfHx8fDE3NjY5MDM3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Security & Compliance",
      description: "Comprehensive security solutions to protect your assets and ensure compliance.",
      features: [
        "Security audits",
        "Compliance consulting",
        "Penetration testing",
        "Data encryption",
      ],
      image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjY4ODQxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="pt-20">
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
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                    {service.icon}
                  </div>
                  <h2 className="mb-4 text-primary">{service.title}</h2>
                  <p className="text-xl text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                </div>
              </div>
            ))}
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
