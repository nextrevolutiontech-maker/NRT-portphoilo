"use client";
import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import Link from "next/link";

interface RelatedContentProps {
  relatedIds: string[];
}

export const RelatedContent = ({ relatedIds }: RelatedContentProps) => {
  if (!relatedIds || relatedIds.length === 0) return null;

  // In a real implementation, we would fetch the actual content metadata based on these IDs
  // For the proof-of-concept, we'll mock the data resolved from the IDs
  const mockResolvedArticles = relatedIds.map(id => ({
    id,
    title: id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    slug: id,
    readTime: 5,
    type: id.includes('erp') ? 'Industry' : 'Article'
  }));

  return (
    <div className="my-12">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-primary" />
        Further Reading
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mockResolvedArticles.map((article, idx) => (
          <Link 
            key={idx}
            href={`/knowledge/${article.slug}`}
            className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-primary/50 hover:shadow-lg transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                {article.type}
              </div>
              <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h4>
            </div>
            <div className="mt-6 flex items-center justify-between text-sm font-medium text-slate-500">
              <span>{article.readTime} min read</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
