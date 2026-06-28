import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, ArrowRight, BrainCircuit, Activity, MessageSquare } from 'lucide-react';

interface ExploreTopicProps {
  currentId: string;
}

export const ExploreTopic = ({ currentId }: ExploreTopicProps) => {
  const [recommendations, setRecommendations] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecs = async () => {
      try {
        // In a real build, we'd import the JSON or fetch it if served dynamically
        // Using a dynamic import to avoid failing if the file isn't generated yet during dev
        const recIndex = await import('../../../.cache/recommendation-index.json');
        
        // Ensure we are accessing the default export if using ES modules
        const data = recIndex.default || recIndex;
        
        if (data[currentId]) {
          setRecommendations(data[currentId]);
        }
      } catch (err) {
        console.warn("Recommendation index not found or loading failed.", err);
      }
      setLoading(false);
    };
    
    fetchRecs();
  }, [currentId]);

  if (loading) return <div className="animate-pulse bg-slate-100 h-64 rounded-3xl mt-12"></div>;
  if (!recommendations) return null;

  const hasLearning = recommendations.continueLearning?.length > 0;
  const hasResources = recommendations.businessResources?.length > 0;
  const hasCaseStudies = recommendations.caseStudies?.length > 0;

  if (!hasLearning && !hasResources && !hasCaseStudies) return null;

  return (
    <div className="my-16 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
      <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
        <BrainCircuit className="w-6 h-6 text-primary" />
        Explore This Topic
      </h3>

      <div className="space-y-10">
        
        {/* Continue Learning */}
        {hasLearning && (
          <div>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Continue Learning
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recommendations.continueLearning.slice(0, 4).map((item: any, idx: number) => (
                <Link key={idx} to={`/knowledge/${item.slug}`} className="group p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-primary hover:shadow-md transition-all">
                  <div className="text-[10px] font-black text-primary uppercase mb-2 tracking-wider">{item.intent || 'Learn'}</div>
                  <h5 className="font-bold text-slate-800 group-hover:text-primary transition-colors line-clamp-2 mb-2">{item.title}</h5>
                  <div className="flex justify-end"><ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" /></div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Business Resources / Problems */}
        {hasResources && (
          <div>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4" /> Related Business Problems
            </h4>
            <div className="flex flex-wrap gap-3">
              {recommendations.businessResources.map((item: any, idx: number) => (
                <Link key={idx} to={`/business-problems/${item.slug}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-700 font-semibold hover:bg-orange-600 hover:text-white transition-colors text-sm border border-orange-200 hover:border-orange-600">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Case Studies */}
        {hasCaseStudies && (
          <div>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Implementation Proof
            </h4>
            <div className="flex flex-col gap-3">
              {recommendations.caseStudies.slice(0, 2).map((item: any, idx: number) => (
                <Link key={idx} to={`/solutions/${item.slug}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-slate-700 group-hover:text-slate-900">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Talk to NRT */}
        <div className="pt-8 border-t border-slate-200">
           <div className="bg-slate-900 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-bold mb-1">Need specific advice?</h4>
                <p className="text-slate-400 text-sm">Talk to our enterprise architects about your unique challenges.</p>
              </div>
              <Link to="/contact" className="shrink-0 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors">
                <MessageSquare className="w-4 h-4" /> Talk to NRT
              </Link>
           </div>
        </div>

      </div>
    </div>
  );
};
