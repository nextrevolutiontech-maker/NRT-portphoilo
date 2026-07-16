import React from 'react';
import { DynamicCTA } from './DynamicCTA';
import { AIQuickAnswer } from './AIQuickAnswer';
import { AskNRTAI } from './AskNRTAI';
import { RelatedContent } from './RelatedContent';
import { ExploreTopic } from './ExploreTopic';
import { ROICalculator } from './ROICalculator';

export const ROI = ({ timeSaved, costReduction, complianceImprovement }: any) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div className="bg-primary/10 p-6 rounded-xl border border-primary/20 text-center">
      <h4 className="text-3xl font-bold text-primary mb-2">{timeSaved}</h4>
      <p className="text-foreground/70">Time Saved</p>
    </div>
    <div className="bg-primary/10 p-6 rounded-xl border border-primary/20 text-center">
      <h4 className="text-3xl font-bold text-primary mb-2">{costReduction}</h4>
      <p className="text-foreground/70">Cost Reduction</p>
    </div>
    <div className="bg-primary/10 p-6 rounded-xl border border-primary/20 text-center">
      <h4 className="text-3xl font-bold text-primary mb-2">{complianceImprovement}</h4>
      <p className="text-foreground/70">Compliance Improvement</p>
    </div>
  </div>
);

export const ComparisonTable = ({ headers, rows }: any) => (
  <div className="overflow-x-auto my-8">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          {headers.map((h: string, i: number) => (
            <th key={i} className="border-b-2 border-primary/30 p-4 font-semibold">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row: string[], i: number) => (
          <tr key={i} className="hover:bg-foreground/5 transition-colors">
            {row.map((cell: string, j: number) => (
              <td key={j} className="border-b border-foreground/10 p-4">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const FAQ = () => (
  <div className="my-8">
    <p className="italic text-foreground/70">FAQ Component will be dynamically rendered here based on metadata.</p>
  </div>
);

export const mdxComponents = {
  ROI,
  ComparisonTable,
  FAQ,
  DynamicCTA,
  AIQuickAnswer,
  AskNRTAI,
  RelatedContent,
  ExploreTopic,
  ROICalculator,
  h1: (props: any) => <h1 className="text-4xl md:text-5xl font-bold mt-12 mb-6 tracking-tight" {...props} />,
  h2: (props: any) => <h2 className="text-3xl md:text-4xl font-semibold mt-10 mb-5" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-semibold mt-8 mb-4" {...props} />,
  p: (props: any) => <p className="text-lg leading-relaxed text-foreground/80 mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-foreground/80" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg text-foreground/80" {...props} />,
  li: (props: any) => <li {...props} />,
  strong: (props: any) => <strong className="font-bold text-foreground" {...props} />,
};
