import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { getContentBySlug } from '../../core/content-engine/loader';
import { mdxComponents } from '../../components/mdx';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export function IndustryLanding() {
  const { industry } = useParams<{ industry: string }>();
  
  // Use the Content Engine to load the relevant MDX data
  const contentData = getContentBySlug(industry || '');

  if (!contentData) {
    return <Navigate to="/404" replace />;
  }

  const MDXComponent = contentData.component;
  const metadata = contentData.metadata;

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <ScrollReveal>
          {/* Metadata Display / Hero Section */}
          <div className="mb-12">
            <div className="flex gap-2 mb-4 flex-wrap">
              {metadata.industry.map((ind: string, idx: number) => (
                <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {ind}
                </span>
              ))}
              <span className="px-3 py-1 bg-secondary/10 text-secondary-foreground rounded-full text-sm font-medium">
                {metadata.version}
              </span>
            </div>
            
            <p className="text-xl text-foreground/70 mb-4">
              {metadata.description}
            </p>
            
            <div className="flex gap-4 text-sm text-foreground/50 border-t border-foreground/10 pt-4 mt-6">
              <span>Status: <span className="text-foreground">{metadata.status}</span></span>
              <span>Target: <span className="text-foreground">{metadata.persona.join(', ')}</span></span>
            </div>
          </div>

          {/* Dynamic MDX Content Rendered via React */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <MDXProvider components={mdxComponents}>
              <MDXComponent />
            </MDXProvider>
          </article>
        </ScrollReveal>
      </div>
    </div>
  );
}
