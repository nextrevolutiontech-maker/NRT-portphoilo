import React, { useState, useEffect } from 'react';
import { ShieldCheck, AlertTriangle, FileText, Activity, Link as LinkIcon, Database, CheckCircle2, TrendingUp, TrendingDown, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';
import { getAllContent } from '../../core/content-engine/loader';

export function ContentOpsDashboard() {
  const [metrics, setMetrics] = useState<any>(null);
  const [debt, setDebt] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const allContent = await getAllContent();
        
        // Attempt to load generated knowledge debt (if it exists)
        try {
           const debtData = await import('../../../.cache/knowledge-debt.json');
           setDebt(debtData.default || debtData);
        } catch (e) {
           console.log("Knowledge debt not found, it may not have been generated yet.");
        }

        let published = 0;
        let totalScore = 0;
        const industries: Record<string, { count: number, maturityScore: number }> = {};
        
        // Asset Grader Analytics
        let grades = { A: 0, B: 0, C: 0, F: 0 };

        allContent.forEach(item => {
          const m = item.metadata;
          if (m.status === 'Published') published++;
          
          // Industry Coverage Calculation (ACI)
          if (m.industry) {
            m.industry.forEach((ind: string) => {
              if (!industries[ind]) industries[ind] = { count: 0, maturityScore: 0 };
              industries[ind].count += 1;
              
              // Maturity adds to coverage score
              let matScore = 1;
              if (m.maturityLevel === 'Flagship') matScore = 5;
              else if (m.maturityLevel === 'Authority') matScore = 4;
              else if (m.maturityLevel === 'Evidence Backed') matScore = 3;
              else if (m.maturityLevel === 'Validated') matScore = 2;
              
              industries[ind].maturityScore += matScore;
            });
          }

          // Grader
          const trust = m.trustScore || 0;
          if (trust >= 90) grades.A++;
          else if (trust >= 75) grades.B++;
          else if (trust >= 50) grades.C++;
          else grades.F++;
          
          totalScore += trust;
        });

        // ACI Calculation (Target: 5 Flagship, 20 Auth, 50 Evidence = roughly 250 maturity points)
        const ACI_TARGET = 250; 
        const aciData = Object.entries(industries).map(([name, data]) => {
           return {
             name,
             coverage: Math.min(100, Math.round((data.maturityScore / ACI_TARGET) * 100))
           };
        }).sort((a, b) => b.coverage - a.coverage);

        const avgScore = allContent.length > 0 ? Math.round(totalScore / allContent.length) : 0;

        setMetrics({
          total: allContent.length,
          published,
          avgScore,
          grades,
          aciData
        });
      } catch (err) {
        console.error("Failed to load content metrics", err);
      }
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center font-bold text-primary">Analyzing Knowledge Graph...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20">
      <SEO title="Knowledge Control Center | NRT CPS" description="Internal content production system dashboard." />
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2 flex items-center gap-3">
              <Database className="w-8 h-8 text-primary" />
              Content Production System
            </h1>
            <p className="text-slate-500 font-medium">Enterprise Governance & Trust Operations.</p>
          </div>
          
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-6">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Platform Trust Score</div>
              <div className="text-3xl font-black text-emerald-600">{metrics.avgScore}/100</div>
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center bg-emerald-50">
              <ShieldCheck className="w-8 h-8 text-emerald-600" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Authority Coverage Index (ACI) */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
             <h3 className="text-xl font-black mb-6 flex items-center gap-2">
               <TrendingUp className="w-6 h-6 text-primary" /> Authority Coverage Index (ACI)
             </h3>
             <div className="space-y-6">
               {metrics.aciData.map((ind: any, idx: number) => (
                 <div key={idx}>
                    <div className="flex justify-between items-end mb-2">
                       <span className="font-bold text-slate-700">{ind.name}</span>
                       <span className="text-lg font-black text-slate-900">{ind.coverage}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                       <div 
                         className={`h-full ${ind.coverage > 80 ? 'bg-emerald-500' : ind.coverage > 40 ? 'bg-amber-500' : 'bg-rose-500'}`} 
                         style={{ width: `${ind.coverage}%` }} 
                       />
                    </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Knowledge Debt Tracker */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col">
             <h3 className="text-xl font-black mb-6 flex items-center gap-2 text-rose-400">
               <TrendingDown className="w-6 h-6" /> Knowledge Debt
             </h3>
             
             {debt ? (
               <div className="space-y-6 flex-1">
                 <div className="flex justify-between items-center pb-4 border-b border-white/10">
                   <span className="text-slate-400 font-medium">Outdated Assets</span>
                   <span className="text-2xl font-black text-rose-400">{debt.outdatedArticles}</span>
                 </div>
                 <div className="flex justify-between items-center pb-4 border-b border-white/10">
                   <span className="text-slate-400 font-medium">Low Trust Assets</span>
                   <span className="text-2xl font-black text-amber-400">{debt.lowTrustAssets}</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <span className="text-slate-400 font-medium">Broken References</span>
                   <span className="text-2xl font-black text-rose-500">{debt.brokenReferences}</span>
                 </div>
               </div>
             ) : (
               <div className="flex-1 flex flex-col items-center justify-center text-slate-500">
                 <CheckCircle2 className="w-12 h-12 mb-2 text-emerald-500/50" />
                 <p>No Debt Detected</p>
               </div>
             )}

             <div className="mt-8 pt-6 border-t border-white/10">
                <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-colors">
                  Run Debt Audit
                </button>
             </div>
          </div>
        </div>

        {/* Asset Grader */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
           <h3 className="text-xl font-black mb-6 flex items-center gap-2">
             <BookOpen className="w-6 h-6 text-primary" /> Asset Quality Grader
           </h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100 flex flex-col items-center justify-center text-center">
                <div className="text-4xl font-black text-emerald-600 mb-2">A</div>
                <div className="text-sm font-bold text-slate-500 uppercase">Production Ready</div>
                <div className="mt-2 text-lg font-bold">{metrics.grades.A} Assets</div>
              </div>
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col items-center justify-center text-center">
                <div className="text-4xl font-black text-blue-600 mb-2">B</div>
                <div className="text-sm font-bold text-slate-500 uppercase">Needs Minor Updates</div>
                <div className="mt-2 text-lg font-bold">{metrics.grades.B} Assets</div>
              </div>
              <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100 flex flex-col items-center justify-center text-center">
                <div className="text-4xl font-black text-amber-600 mb-2">C</div>
                <div className="text-sm font-bold text-slate-500 uppercase">Lacking Evidence</div>
                <div className="mt-2 text-lg font-bold">{metrics.grades.C} Assets</div>
              </div>
              <div className="p-6 rounded-2xl bg-rose-50 border border-rose-100 flex flex-col items-center justify-center text-center">
                <div className="text-4xl font-black text-rose-600 mb-2">F</div>
                <div className="text-sm font-bold text-slate-500 uppercase">Do Not Publish</div>
                <div className="mt-2 text-lg font-bold">{metrics.grades.F} Assets</div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
