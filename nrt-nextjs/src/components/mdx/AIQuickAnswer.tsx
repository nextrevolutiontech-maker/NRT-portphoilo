"use client";
import React from 'react';
import { Bot, Clock, ChevronRight } from 'lucide-react';

interface AIQuickAnswerProps {
  summary: string;
  takeaways?: string[];
  readTime?: number;
  persona?: string[];
}

export const AIQuickAnswer = ({ summary, takeaways, readTime, persona }: AIQuickAnswerProps) => {
  if (!summary) return null;

  return (
    <div className="my-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-primary font-bold">
          <Bot className="w-5 h-5" />
          <span>AI Quick Answer</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          {readTime && (
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{readTime} Min Read</span>
            </div>
          )}
          {persona && persona.length > 0 && (
            <div className="flex items-center gap-1.5">
              <span>For: {persona.join(', ')}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-lg text-slate-800 font-medium leading-relaxed mb-6">
          {summary}
        </p>

        {takeaways && takeaways.length > 0 && (
          <div>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Key Takeaways</h4>
            <ul className="space-y-3">
              {takeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <div className="mt-1 flex-shrink-0">
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
