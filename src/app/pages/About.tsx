import { Target, Eye, Heart, Globe, Users, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Integrity",
      description: "Trust and transparency are at the core of everything we do.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Remote & Agile",
      description: "We work as a globally distributed team, ensuring 24/7 productivity and flexibility.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies to solve complex challenges.",
    },
  ];

  const timeline = [
    { year: "Late 2025", event: "Founded as a Global Remote Agency" },
    { year: "2025", event: "Launched SaaS & Food Nutrition Platforms" },
    { year: "2025", event: "Developed Bidding App & Baba App" },
    { year: "2025", event: "Expanded into Ecommerce & Advanced UI/UX Design" },
    { year: "2025", event: "Delivering Real-World Solutions Globally" },
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>About Us - Next Revolution Tech | Global Technology Partner</title>
        <meta name="description" content="Learn about Next Revolution Tech, our mission, vision, and our journey in delivering world-class technology solutions." />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-primary-foreground py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl">About Next Revolution Tech</h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90">
              A global, fully remote technology partner committed to engineering innovative solutions that empower businesses to thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-secondary/30 p-12 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                  <Target className="h-8 w-8" />
                </div>
                <h2 className="text-primary">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                To deliver world-class technology solutions that drive measurable business value, enabling our clients to achieve their strategic objectives through innovation, excellence, and partnership.
              </p>
            </div>
            <div className="bg-secondary/30 p-12 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                  <Eye className="h-8 w-8" />
                </div>
                <h2 className="text-primary">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                To be the most trusted technology partner for enterprises worldwide, setting the standard for innovation, quality, and client success in the digital transformation era.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Timeline */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-primary">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rapid growth and innovation in enterprise technology since late 2025
            </p>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-background border-4 border-primary rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-center text-sm px-2">{item.year}</span>
                </div>
                <div className="flex-grow bg-background p-6 rounded-lg border border-border mt-4">
                  <p className="text-foreground font-medium">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-primary">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-lg border border-border hover:shadow-lg transition-shadow bg-card"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="mb-3 text-card-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Borderless Innovation, Global Impact</h2>
              <p className="text-xl text-primary-foreground/90 mb-6">
                We operate as a fully remote, globally distributed team, collaborating seamlessly across time zones to deliver world-class solutions.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <div className="text-4xl mb-2">100%</div>
                  <div className="text-primary-foreground/90">Remote First</div>
                </div>
                <div>
                  <div className="text-4xl mb-2">Global</div>
                  <div className="text-primary-foreground/90">Client Base</div>
                </div>
                <div>
                  <div className="text-4xl mb-2">24/7</div>
                  <div className="text-primary-foreground/90">Operations</div>
                </div>
                <div>
                  <div className="text-4xl mb-2">Multiple</div>
                  <div className="text-primary-foreground/90">Success Stories</div>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1571741699053-2d078c8f282a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc2Njk1MzU5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Global Presence"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}