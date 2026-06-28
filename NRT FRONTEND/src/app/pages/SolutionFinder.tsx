import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { ArrowRight, ArrowLeft, CheckCircle, Target, Briefcase, Users, LayoutDashboard, BrainCircuit, Loader2 } from 'lucide-react';
import mappingData from '../../../data/problem-mapping.json';
import { API_BASE_URL } from '../../config';
import { toast } from 'sonner';

const STEPS = [
  { id: 1, title: 'Industry', icon: Briefcase },
  { id: 2, title: 'Company Size', icon: Users },
  { id: 3, title: 'Business Problems', icon: Target },
  { id: 4, title: 'Current Tools', icon: LayoutDashboard },
  { id: 5, title: 'Primary Goal', icon: BrainCircuit }
];

export function SolutionFinder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: '',
    size: '',
    problems: [] as string[],
    tools: [] as string[],
    goal: ''
  });

  const [showResults, setShowResults] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [leadData, setLeadData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLeadSubmit = async () => {
    if (!leadData.name || !leadData.email) return;
    
    setIsSubmitting(true);
    try {
      const payload = {
        name: leadData.name,
        email: leadData.email,
        whatsapp: "Solution Finder",
        company: formData.size, // Pass size as company info
        phone: "",
        message: `SOLUTION FINDER LEAD:\nIndustry: ${formData.industry}\nCompany Size: ${formData.size}\nProblems: ${formData.problems.join(', ')}\nTools: ${formData.tools.join(', ')}\nPrimary Goal: ${formData.goal}\nScore: ${calculateResults().score}`
      };

      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Failed to send');

      setModalStep(2);
    } catch (error) {
      toast.error("Transmission Error", { description: "Failed to save roadmap. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(c => c + 1);
    else setShowResults(true);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(c => c - 1);
  };

  const toggleArrayItem = (field: 'problems' | 'tools', item: string) => {
    setFormData(prev => {
      const array = prev[field];
      return {
        ...prev,
        [field]: array.includes(item) ? array.filter(i => i !== item) : [...array, item]
      };
    });
  };

  // Generate Score based on selected problems mapping
  const calculateResults = () => {
    let score = 75; // Base score
    const recommendedSolutions = new Set<string>();
    const recommendedArticles = new Set<string>();
    let timeline = "12 Weeks";

    formData.problems.forEach(probId => {
      const mapping = mappingData.find(m => m.id === probId);
      if (mapping) {
        score -= 5; // Decrease maturity score for each problem
        mapping.solutions.forEach(s => recommendedSolutions.add(s));
        mapping.relatedArticles.forEach(a => recommendedArticles.add(a));
        if (mapping.estimatedTimeline.includes("12")) timeline = "14-16 Weeks"; // Rough estimate
      }
    });

    return {
      score: Math.max(20, score),
      solutions: Array.from(recommendedSolutions).slice(0, 4),
      articles: Array.from(recommendedArticles).slice(0, 3),
      timeline
    };
  };

  if (showResults) {
    const results = calculateResults();
    return (
      <div className="min-h-screen pt-28 pb-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary mb-6">
                <CheckCircle className="w-12 h-12" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Your AI Roadmap is Ready</h1>
              <p className="text-xl text-foreground/70">Based on your inputs, we've generated a custom digital transformation strategy.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card border border-border p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-2">Digital Maturity Score</h3>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-6xl font-black text-primary">{results.score}</span>
                  <span className="text-xl text-foreground/50 font-bold mb-1">/ 100</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Inventory & Operations</span>
                      <span className="font-bold">Needs Improvement</span>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                      <div className="bg-destructive w-[30%] h-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Finance & Automation</span>
                      <span className="font-bold">Average</span>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                      <div className="bg-yellow-500 w-[50%] h-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6">Recommended Solutions</h3>
                <ul className="space-y-4">
                  {results.solutions.map((sol, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">{sol}</span>
                    </li>
                  ))}
                  {results.solutions.length === 0 && <li>Enterprise ERP Base System</li>}
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl mb-12">
              <h3 className="text-xl font-bold mb-6">Suggested Implementation Plan</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-background rounded-xl border border-border">
                  <span className="text-primary font-bold text-sm mb-2 block">Phase 1 (Weeks 1-4)</span>
                  <p className="font-medium text-sm">System Audit & Foundation Setup</p>
                </div>
                <div className="p-4 bg-background rounded-xl border border-border">
                  <span className="text-primary font-bold text-sm mb-2 block">Phase 2 (Weeks 5-8)</span>
                  <p className="font-medium text-sm">Core Module Deployment & Automation</p>
                </div>
                <div className="p-4 bg-background rounded-xl border border-border">
                  <span className="text-primary font-bold text-sm mb-2 block">Phase 3 (Weeks 9-12)</span>
                  <p className="font-medium text-sm">AI Training & Team Handoff</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all inline-flex items-center gap-2"
              >
                Book Discovery Call <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Premium Lead Capture Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border border-slate-100 relative"
              >
                {/* Premium Close Button */}
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 p-2.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>

                <div className="p-8 sm:p-10">
                  {modalStep === 1 ? (
                    <>
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 text-primary rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <h3 className="text-3xl font-black mb-3 text-slate-900 tracking-tight">Save Your Roadmap</h3>
                      <p className="text-slate-500 mb-8 text-lg leading-relaxed">Enter your details to receive a copy of this strategy and schedule your free discovery call.</p>
                      
                      <div className="space-y-5 mb-10">
                        <div>
                          <label className="block text-sm font-bold mb-2 text-slate-700 uppercase tracking-wide">Full Name</label>
                          <input 
                            type="text" 
                            value={leadData.name}
                            onChange={(e) => setLeadData({...leadData, name: e.target.value})}
                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-slate-900 font-medium focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold mb-2 text-slate-700 uppercase tracking-wide">Work Email</label>
                          <input 
                            type="email" 
                            value={leadData.email}
                            onChange={(e) => setLeadData({...leadData, email: e.target.value})}
                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-slate-900 font-medium focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                          />
                        </div>
                      </div>

                      <button 
                        onClick={handleLeadSubmit}
                        disabled={isSubmitting || !leadData.name || !leadData.email}
                        className={`w-full py-4 rounded-2xl font-bold flex justify-center items-center gap-2 transition-all duration-300 ${(leadData.name && leadData.email && !isSubmitting) ? 'bg-primary text-primary-foreground hover:shadow-lg hover:-translate-y-0.5' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
                      >
                        {isSubmitting ? (
                          <><Loader2 className="w-5 h-5 animate-spin" /> Saving...</>
                        ) : (
                          <>Save & Continue <ArrowRight className="w-5 h-5" /></>
                        )}
                      </button>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-emerald-100">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-black mb-3 text-slate-900 tracking-tight">Roadmap Sent!</h3>
                      <p className="text-slate-500 mb-10 text-lg leading-relaxed">We've saved your preferences. Now, let's pick a time that works for you.</p>
                      
                      <a 
                        href="/contact" 
                        className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 transition-all flex justify-center items-center gap-2"
                      >
                        Select Calendar Time <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 bg-background flex flex-col">
      <div className="container mx-auto px-4 max-w-3xl flex-grow flex flex-col">
        
        {/* Progress Tracker */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = step.id === currentStep;
              const isPast = step.id < currentStep;
              return (
                <div key={step.id} className={`flex flex-col items-center gap-2 ${isActive ? 'text-primary' : isPast ? 'text-foreground' : 'text-foreground/30'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${isActive ? 'border-primary bg-primary/10' : isPast ? 'border-foreground bg-foreground text-background' : 'border-border'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold hidden sm:block">{step.title}</span>
                </div>
              );
            })}
          </div>
          <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary" 
              initial={{ width: '20%' }}
              animate={{ width: `${(currentStep / 5) * 100}%` }} 
            />
          </div>
        </div>

        {/* Form Area */}
        <div className="flex-grow flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold mb-8">What is your industry?</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {['Manufacturing', 'Retail', 'Healthcare', 'Logistics', 'Construction', 'Education'].map(ind => (
                      <button
                        key={ind}
                        type="button"
                        onClick={() => {
                          setFormData({...formData, industry: ind});
                          setTimeout(handleNext, 300);
                        }}
                        className={`p-6 text-left rounded-xl border-2 transition-all ${formData.industry === ind ? 'border-primary bg-primary/5 ring-2 ring-primary ring-offset-2' : 'border-border hover:border-foreground/30 hover:bg-secondary/50'}`}
                      >
                        <span className="font-bold text-lg">{ind}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold mb-8">How many employees do you have?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['1-10', '11-50', '51-200', '201-1000', '1000+'].map(size => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => {
                          setFormData({...formData, size});
                          setTimeout(handleNext, 300);
                        }}
                        className={`p-6 text-left rounded-xl border-2 transition-all ${formData.size === size ? 'border-primary bg-primary/5 ring-2 ring-primary ring-offset-2' : 'border-border hover:border-foreground/30 hover:bg-secondary/50'}`}
                      >
                        <span className="font-bold text-lg">{size}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold mb-2">What are your main business problems?</h2>
                  <p className="text-foreground/70 mb-8">Select all that apply.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {mappingData.map(mapping => (
                      <button
                        key={mapping.id}
                        type="button"
                        onClick={() => toggleArrayItem('problems', mapping.id)}
                        className={`p-4 text-left rounded-xl border-2 transition-all flex items-start gap-4 ${formData.problems.includes(mapping.id) ? 'border-primary bg-primary/5 ring-2 ring-primary ring-offset-2' : 'border-border hover:border-foreground/30 hover:bg-secondary/50'}`}
                      >
                        <div className={`w-6 h-6 rounded-full border flex-shrink-0 mt-0.5 ${formData.problems.includes(mapping.id) ? 'border-primary bg-primary' : 'border-foreground/30'}`}>
                           {formData.problems.includes(mapping.id) && <CheckCircle className="w-5 h-5 text-primary-foreground ml-0.5 mt-0.5" />}
                        </div>
                        <span className="font-medium">{mapping.problem}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold mb-2">What tools are you currently using?</h2>
                  <p className="text-foreground/70 mb-8">Select all that apply.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {['Excel / Spreadsheets', 'QuickBooks', 'Xero', 'SAP', 'Odoo', 'Tally', 'No System'].map(tool => (
                      <button
                        key={tool}
                        type="button"
                        onClick={() => toggleArrayItem('tools', tool)}
                        className={`p-4 text-left rounded-xl border-2 transition-all ${formData.tools.includes(tool) ? 'border-primary bg-primary/5 ring-2 ring-primary ring-offset-2' : 'border-border hover:border-foreground/30 hover:bg-secondary/50'}`}
                      >
                        <span className="font-medium text-sm">{tool}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold mb-8">What is your primary goal?</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {['Reduce Operational Costs', 'Increase Productivity & Sales', 'Automate Manual Tasks with AI', 'Complete Digital Transformation'].map(goal => (
                      <button
                        key={goal}
                        type="button"
                        onClick={() => {
                          setFormData({...formData, goal});
                          setTimeout(handleNext, 300);
                        }}
                        className={`p-6 text-left rounded-xl border-2 transition-all ${formData.goal === goal ? 'border-primary bg-primary/5 ring-2 ring-primary ring-offset-2' : 'border-border hover:border-foreground/30 hover:bg-secondary/50'}`}
                      >
                        <span className="font-bold text-lg">{goal}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Footer */}
        <div className="mt-12 pt-8 border-t border-border flex justify-between">
          <button 
            onClick={handleBack}
            className={`font-bold inline-flex items-center gap-2 ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'text-foreground/70 hover:text-foreground'}`}
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
          
          <button 
            onClick={handleNext}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            {currentStep === 5 ? 'Generate Report' : 'Next Step'} <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}
