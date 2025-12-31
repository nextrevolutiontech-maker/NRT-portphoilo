import { useState, useEffect } from "react";
import { ArrowRight, Building2, TrendingUp, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface Project {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image_url: string;
}

export function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => {
        // Map backend fields to frontend expected fields if necessary, 
        // essentially ensuring results is an array
        const formatted = (Array.isArray(data) ? data : []).map((p: any) => ({
          ...p,
          results: Array.isArray(p.results) ? p.results : []
        }));
        setCaseStudies(formatted);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load projects", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-black text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <Helmet>
        <title>Case Studies - Next Revolution Tech | Success Stories</title>
        <meta name="description" content="Read how Next Revolution Tech has helped global enterprises achieve their digital transformation goals." />
      </Helmet>
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
                  src={study.image_url || study.image}
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
