import { Search, Lightbulb, Code2, Rocket, HeadphonesIcon, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export function Process() {
  const steps = [
    {
      number: "01",
      icon: <Search className="h-8 w-8" />,
      title: "Discovery & Analysis",
      description: "We begin by thoroughly understanding your business objectives, technical requirements, and project constraints.",
      activities: [
        "Stakeholder interviews",
        "Requirements gathering",
        "Technical assessment",
        "Feasibility analysis",
      ],
    },
    {
      number: "02",
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Strategy & Planning",
      description: "Our team develops a comprehensive strategy and detailed project plan aligned with your goals.",
      activities: [
        "Solution architecture design",
        "Technology stack selection",
        "Project roadmap creation",
        "Risk mitigation planning",
      ],
    },
    {
      number: "03",
      icon: <Code2 className="h-8 w-8" />,
      title: "Development & Testing",
      description: "Agile development with continuous testing ensures quality and allows for iterative improvements.",
      activities: [
        "Sprint-based development",
        "Automated testing",
        "Code reviews",
        "Performance optimization",
      ],
    },
    {
      number: "04",
      icon: <Rocket className="h-8 w-8" />,
      title: "Deployment & Launch",
      description: "Seamless deployment with zero downtime and comprehensive launch support.",
      activities: [
        "Infrastructure setup",
        "Staged deployment",
        "Data migration",
        "Go-live support",
      ],
    },
    {
      number: "05",
      icon: <HeadphonesIcon className="h-8 w-8" />,
      title: "Support & Optimization",
      description: "Ongoing support and continuous improvement to ensure long-term success.",
      activities: [
        "24/7 monitoring",
        "Performance tuning",
        "Feature enhancements",
        "Technical support",
      ],
    },
  ];

  const methodologies = [
    {
      title: "Agile Development",
      description: "Iterative approach with regular feedback loops and flexible adaptation to change.",
    },
    {
      title: "DevOps Practices",
      description: "Automated CI/CD pipelines for faster, more reliable deployments.",
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing strategy including automated and manual QA.",
    },
    {
      title: "Security First",
      description: "Security built into every stage of the development lifecycle.",
    },
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>Our Process - Next Revolution Tech | How We Work</title>
        <meta name="description" content="Discover Next Revolution Tech's proven development process, from discovery and strategy to deployment and support." />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6">Our Process</h1>
            <p className="text-xl text-primary-foreground/90">
              A proven, systematic approach to delivering exceptional technology solutions on time and within budget.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-primary">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our structured approach ensures transparency, quality, and successful project delivery
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-[72px] top-32 w-0.5 h-32 bg-border" />
                )}
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Number and Icon */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-col items-center lg:items-start gap-4">
                      <div className="text-5xl text-muted-foreground/30">{step.number}</div>
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10 bg-secondary/30 rounded-lg p-8">
                    <h3 className="mb-4 text-primary">{step.title}</h3>
                    <p className="text-foreground mb-6 text-lg">{step.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {step.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-primary">Our Methodologies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Best practices and industry standards that drive our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((methodology, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <h3 className="mb-3 text-primary">{methodology.title}</h3>
                <p className="text-muted-foreground">{methodology.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-primary">Transparent Communication</h2>
              <p className="text-xl text-muted-foreground mb-6">
                We believe in complete transparency and open communication throughout the project lifecycle.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-foreground mb-1">Regular Status Updates</div>
                    <div className="text-muted-foreground">Weekly progress reports and monthly reviews</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-foreground mb-1">Dedicated Project Manager</div>
                    <div className="text-muted-foreground">Single point of contact for all communications</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-foreground mb-1">Collaborative Tools</div>
                    <div className="text-muted-foreground">Real-time access to project management platforms</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-foreground mb-1">Stakeholder Engagement</div>
                    <div className="text-muted-foreground">Regular demos and feedback sessions</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-secondary/30 p-12 rounded-lg">
              <h3 className="mb-6 text-primary">Project Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Discovery</span>
                  <span className="text-primary">1-2 weeks</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Planning</span>
                  <span className="text-primary">2-3 weeks</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Development</span>
                  <span className="text-primary">8-16 weeks</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Testing & QA</span>
                  <span className="text-primary">2-4 weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Deployment</span>
                  <span className="text-primary">1-2 weeks</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Timelines vary based on project scope and complexity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Start Your Project Today</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and how our process can deliver the results you need
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-background text-primary px-8 py-4 rounded-md hover:bg-muted transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
