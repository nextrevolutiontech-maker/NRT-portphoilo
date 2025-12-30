import { ArrowRight, Building2, TrendingUp, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CaseStudies() {
  const caseStudies = [
    {
      title: "Global Financial Platform Modernization",
      industry: "Financial Services",
      challenge: "Legacy system hindering growth and innovation, requiring complete modernization while maintaining 24/7 operations.",
      solution: "Phased migration to microservices architecture with zero downtime, implementing modern security protocols and scalable cloud infrastructure.",
      results: [
        "40% reduction in operational costs",
        "3x improvement in system performance",
        "99.99% uptime achieved",
        "Enhanced security compliance",
      ],
      image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjY4ODQxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Healthcare SaaS Platform",
      industry: "Healthcare Technology",
      challenge: "Need for HIPAA-compliant patient management system with real-time collaboration features for distributed medical teams.",
      solution: "Built enterprise-grade SaaS platform with end-to-end encryption, real-time sync, and comprehensive audit logging.",
      results: [
        "Serving 500+ healthcare facilities",
        "Processing 10M+ patient records",
        "HIPAA and SOC 2 compliant",
        "95% customer satisfaction rate",
      ],
      image: "https://images.unsplash.com/photo-1618758992242-2d4bc63a1be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MXx8fHwxNzY2OTQ4NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "AI-Powered Supply Chain Optimization",
      industry: "Logistics & Manufacturing",
      challenge: "Inefficient supply chain processes causing delays and increased costs across global operations.",
      solution: "Implemented AI/ML algorithms for demand forecasting, route optimization, and predictive maintenance with real-time dashboards.",
      results: [
        "30% reduction in delivery times",
        "25% decrease in operational costs",
        "$5M annual savings achieved",
        "Improved inventory accuracy to 98%",
      ],
      image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnxlbnwxfHx8fDE3NjY5MDM3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "E-Commerce Platform Scalability",
      industry: "Retail & E-Commerce",
      challenge: "Platform unable to handle peak traffic during sales events, resulting in lost revenue and poor customer experience.",
      solution: "Re-architected platform with auto-scaling infrastructure, CDN integration, and optimized database queries.",
      results: [
        "Handled 10x traffic increase",
        "50% improvement in page load times",
        "Zero downtime during peak sales",
        "200% increase in conversion rate",
      ],
      image: "https://images.unsplash.com/photo-1616386261012-8a328c89d5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwb2ZmaWNlfGVufDF8fHx8MTc2Njg3MTQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Enterprise Data Analytics Platform",
      industry: "Technology & Data",
      challenge: "Disparate data sources preventing unified business intelligence and real-time decision making.",
      solution: "Built centralized data warehouse with ETL pipelines, real-time analytics, and custom visualization dashboards.",
      results: [
        "Unified 50+ data sources",
        "Real-time insights delivery",
        "70% faster reporting",
        "Enhanced data-driven decisions",
      ],
      image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjY4ODQxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Banking Mobile App Transformation",
      industry: "Banking & Finance",
      challenge: "Outdated mobile banking app with poor UX leading to customer churn and negative reviews.",
      solution: "Complete redesign and rebuild of mobile app with modern UI/UX, biometric security, and enhanced features.",
      results: [
        "4.8-star app store rating",
        "60% increase in active users",
        "50% reduction in support tickets",
        "Industry-leading security features",
      ],
      image: "https://images.unsplash.com/photo-1618758992242-2d4bc63a1be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MXx8fHwxNzY2OTQ4NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6">Case Studies</h1>
            <p className="text-xl text-primary-foreground/90">
              Real-world success stories demonstrating how we've helped enterprises achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl transition-shadow"
              >
                <ImageWithFallback
                  src={study.image}
                  alt={study.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Building2 className="h-4 w-4" />
                    <span>{study.industry}</span>
                  </div>
                  <h3 className="mb-4 text-primary">{study.title}</h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm text-muted-foreground mb-2">Challenge</h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-muted-foreground mb-2">Solution</h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  <div className="bg-secondary/30 rounded-lg p-6 mb-6">
                    <h4 className="mb-4 text-foreground">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start gap-2 text-sm">
                          <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-primary">Impact Across Industries</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-primary mb-2">$100M+</div>
              <div className="text-muted-foreground">Client Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-md hover:bg-muted transition-colors"
          >
            Start Your Project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
