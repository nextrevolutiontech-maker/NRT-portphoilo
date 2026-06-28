import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Target, AlertTriangle, Lightbulb, TrendingUp, CheckCircle } from "lucide-react";
import { SEO } from "../components/SEO";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { MDXProvider } from '@mdx-js/react';
import { getContentBySlug } from '../../core/content-engine/loader';
import { mdxComponents } from '../../components/mdx';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export function BusinessProblemDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProblem = async () => {
      setLoading(true);
      if (slug) {
        const fetchedContent = await getContentBySlug(slug, 'problem');
        setContent(fetchedContent);
      }
      setLoading(false);
    };
    loadProblem();
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center font-bold text-primary">Loading Knowledge Graph...</div>;
  }

  if (!content) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-900 p-6">
        <h1 className="text-4xl font-black mb-4">Problem Not Found</h1>
        <p className="text-lg mb-8 text-slate-500">The business problem you are looking for does not exist in our library.</p>
        <Link to="/" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold">
          <ArrowLeft className="w-5 h-5" /> Return Home
        </Link>
      </div>
    );
  }

  const { metadata, MDXComponent } = content;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden pt-28">
      <SEO title={`${metadata.title} | Business Problem Library`} description={metadata.description} />

      <div className="container mx-auto px-4 max-w-6xl pb-20">
        
        {/* Header */}
        <div className="mb-12">
           <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-6 font-bold text-sm tracking-wider uppercase">
            <ArrowLeft className="w-4 h-4" /> Business Problem Library
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">{metadata.title}</h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">{metadata.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Context */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Symptoms */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
               <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                 <AlertTriangle className="w-6 h-6 text-rose-500" />
                 Symptoms
               </h3>
               <ul className="space-y-4">
                 {metadata.symptoms?.map((symptom: string, idx: number) => (
                   <li key={idx} className="flex items-start gap-3 text-slate-700">
                     <div className="mt-1 shrink-0"><AlertTriangle className="w-4 h-4 text-rose-300" /></div>
                     <span className="text-lg font-medium">{symptom}</span>
                   </li>
                 ))}
               </ul>
            </div>

            {/* Root Causes */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
               <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                 <Target className="w-6 h-6 text-orange-500" />
                 Root Causes
               </h3>
               <ul className="space-y-4">
                 {metadata.rootCauses?.map((cause: string, idx: number) => (
                   <li key={idx} className="flex items-start gap-3 text-slate-700">
                     <div className="mt-1 shrink-0"><div className="w-2 h-2 rounded-full bg-orange-400" /></div>
                     <span className="text-lg font-medium">{cause}</span>
                   </li>
                 ))}
               </ul>
            </div>

            {/* Solutions & ROI */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
               <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                 <Lightbulb className="w-6 h-6 text-emerald-400" />
                 How NRT Solves This
               </h3>
               <div className="mb-8">
                 <ul className="space-y-4">
                   {metadata.solutions?.map((solution: string, idx: number) => (
                     <li key={idx} className="flex items-start gap-3 text-slate-300">
                       <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                       <span className="text-lg">{solution}</span>
                     </li>
                   ))}
                 </ul>
               </div>

               <div className="border-t border-slate-700 pt-8">
                 <h4 className="text-lg font-bold text-slate-400 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" /> Expected ROI
                 </h4>
                 <div className="grid sm:grid-cols-2 gap-4">
                    {metadata.roi?.map((roi: string, idx: number) => (
                      <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 font-medium text-emerald-300">
                        {roi}
                      </div>
                    ))}
                 </div>
               </div>
            </div>

            {/* In-depth Article / MDX */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm prose prose-lg prose-slate max-w-none">
                <MDXProvider components={mdxComponents}>
                  <MDXComponent />
                </MDXProvider>
            </div>
            
          </div>

          {/* Sidebar / Knowledge Graph Pull */}
          <div className="lg:col-span-1">
             <div className="sticky top-24">
                <mdxComponents.ExploreTopic currentId={metadata.id} />
             </div>
          </div>
          
        </div>
      </div>
      
      <PreFooterCTA 
        headline="Stop treating the symptoms."
        subtext="Let's build a custom software solution that eliminates the root cause permanently."
      />
    </div>
  );
}
