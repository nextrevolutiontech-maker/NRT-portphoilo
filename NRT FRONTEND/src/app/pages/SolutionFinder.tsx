import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { ArrowRight, ArrowLeft, CheckCircle, Target, Briefcase, Users, LayoutDashboard, BrainCircuit } from 'lucide-react';
import mappingData from '../../../data/problem-mapping.json';

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
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all inline-flex items-center gap-2">
                Book Discovery Call <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </ScrollReveal>
        </div>
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
                        onClick={() => setFormData({...formData, industry: ind})}
                        className={`p-6 text-left rounded-xl border-2 transition-all ${formData.industry === ind ? 'border-primary bg-primary/5' : 'border-border hover:border-foreground/30'}`}
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
                        onClick={() => setFormData({...formData, size})}
                        className={`p-6 text-left rounded-xl border-2 transition-all ${formData.size === size ? 'border-primary bg-primary/5' : 'border-border hover:border-foreground/30'}`}
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
                        onClick={() => toggleArrayItem('problems', mapping.id)}
                        className={`p-4 text-left rounded-xl border-2 transition-all flex items-start gap-4 ${formData.problems.includes(mapping.id) ? 'border-primary bg-primary/5' : 'border-border hover:border-foreground/30'}`}
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
                        onClick={() => toggleArrayItem('tools', tool)}
                        className={`p-4 text-left rounded-xl border-2 transition-all ${formData.tools.includes(tool) ? 'border-primary bg-primary/5' : 'border-border hover:border-foreground/30'}`}
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
                        onClick={() => setFormData({...formData, goal})}
                        className={`p-6 text-left rounded-xl border-2 transition-all ${formData.goal === goal ? 'border-primary bg-primary/5' : 'border-border hover:border-foreground/30'}`}
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
