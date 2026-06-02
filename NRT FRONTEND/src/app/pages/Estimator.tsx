import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ChevronRight, ChevronLeft, Calculator, Globe, Smartphone, Sparkles, Cloud, Shield, Database, Blocks, Workflow, ArrowUpRight, Layers, Palette, Wand2, Key, CreditCard, LayoutDashboard, Bot, MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { API_BASE_URL } from "../../config";
import { toast } from "sonner";

interface Option {
    id: string;
    label: string;
    cost: number;
    icon?: React.ReactNode;
    description?: string;
    gradient?: string;
}

interface Step {
    id: number;
    title: string;
    description: string;
    options: Option[];
    multiSelect?: boolean;
}

const steps: Step[] = [
    {
        id: 1,
        title: "Service",
        description: "What service are you looking for?",
        options: [
            { id: "ai", label: "AI / Machine Learning", cost: 0, icon: <Sparkles className="h-6 w-6" />, description: "Chatbots, AI Agents", gradient: "from-purple-500/10 to-transparent" },
            { id: "web", label: "Full-Stack Web Dev", cost: 0, icon: <Globe className="h-6 w-6" />, description: "React, Next.js Apps", gradient: "from-blue-500/10 to-transparent" },
            { id: "cloud", label: "Cloud & DevOps", cost: 0, icon: <Cloud className="h-6 w-6" />, description: "AWS, Azure, Docker", gradient: "from-cyan-500/10 to-transparent" },
            { id: "security", label: "Cybersecurity", cost: 0, icon: <Shield className="h-6 w-6" />, description: "App Security", gradient: "from-red-500/10 to-transparent" },
            { id: "mobile", label: "Mobile App Development", cost: 0, icon: <Smartphone className="h-6 w-6" />, description: "iOS, Android Apps", gradient: "from-[#3A5CCC]/10 to-transparent" },
            { id: "data", label: "Data Engineering", cost: 0, icon: <Database className="h-6 w-6" />, description: "ETL, Pipelines", gradient: "from-indigo-500/10 to-transparent" },
            { id: "blockchain", label: "Blockchain & Web3", cost: 0, icon: <Blocks className="h-6 w-6" />, description: "Smart Contracts", gradient: "from-teal-500/10 to-transparent" },
            { id: "automation", label: "Automation / RPA", cost: 0, icon: <Workflow className="h-6 w-6" />, description: "Process Automation", gradient: "from-pink-500/10 to-transparent" },
        ]
    },
    {
        id: 2,
        title: "Design",
        description: "How should it look and feel?",
        options: [
            { id: "basic", label: "Basic / Template", cost: 200, icon: <Layers className="h-6 w-6" />, gradient: "from-gray-500/10 to-transparent" },
            { id: "custom", label: "Custom UI/UX", cost: 600, icon: <Palette className="h-6 w-6" />, gradient: "from-[#3A5CCC]/10 to-transparent" },
            { id: "premium", label: "Premium Animations", cost: 1200, icon: <Wand2 className="h-6 w-6" />, gradient: "from-purple-600/10 to-transparent" },
        ]
    },
    {
        id: 3,
        title: "Features",
        description: "What functionality do you need?",
        multiSelect: true,
        options: [
            { id: "auth", label: "User Auth", cost: 200, icon: <Key className="h-6 w-6" />, gradient: "from-blue-600/10 to-transparent" },
            { id: "payment", label: "Payments", cost: 350, icon: <CreditCard className="h-6 w-6" />, gradient: "from-green-600/10 to-transparent" },
            { id: "cms", label: "Admin Dashboard", cost: 500, icon: <LayoutDashboard className="h-6 w-6" />, gradient: "from-indigo-600/10 to-transparent" },
            { id: "ai", label: "AI Integration", cost: 800, icon: <Bot className="h-6 w-6" />, gradient: "from-purple-600/10 to-transparent" },
            { id: "chat", label: "Real-time Chat", cost: 400, icon: <MessageSquareText className="h-6 w-6" />, gradient: "from-cyan-600/10 to-transparent" },
        ]
    }
];

export function CostEstimator() {
    const [currentStep, setCurrentStep] = useState(0);
    const [selections, setSelections] = useState<Record<number, string[]>>({});
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSelect = (stepId: number, optionId: string, multi: boolean) => {
        setSelections(prev => {
            const current = prev[stepId] || [];
            if (multi) {
                return { ...prev, [stepId]: current.includes(optionId) ? current.filter(id => id !== optionId) : [...current, optionId] };
            }
            return { ...prev, [stepId]: [optionId] };
        });
        if (!multi) setTimeout(() => nextStep(), 400);
    };

    const calculateTotal = () => {
        let total = 0;
        steps.forEach(step => {
            (selections[step.id] || []).forEach(id => {
                const option = step.options.find(o => o.id === id);
                if (option) total += option.cost;
            });
        });
        return total;
    };

    const nextStep = () => {
        if (currentStep < steps.length - 1) setCurrentStep(c => c + 1);
        else setShowResult(true);
    };

    const prevStep = () => {
        if (currentStep > 0) setCurrentStep(c => c - 1);
    };

    const handleEstimateSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/api/estimate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, total: calculateTotal(), selections }),
            });
            if (response.ok) toast.success("Estimate sent to your email!");
        } catch (error) {
            toast.error("Failed to send estimate");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-20 min-h-screen bg-[#F3F4F6] text-[#0F172A] overflow-x-hidden">
            <SEO 
                title="Project Cost Estimator" 
                description="Get an instant estimate for your software development project. Whether it's AI, Web, or Mobile, our calculator helps you plan your budget."
            />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="pt-12 pb-24 text-center sm:text-left">
                    <h1 className="text-4xl sm:text-7xl lg:text-[8rem] font-black tracking-tighter leading-[0.95] sm:leading-[0.85] mb-10">
                       Project <br />
                       <span className="text-[#3A5CCC] italic font-italic-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#3A5CCC] to-[#27324A]">Estimator</span>.
                    </h1>
                    <p className="text-xl sm:text-3xl font-bold text-[#0F172A]/40 leading-tight max-w-2xl">
                       Get a rough idea of your project investment in seconds.
                    </p>
                </div>

                <div className="relative bg-white rounded-[3rem] sm:rounded-[4rem] shadow-2xl border border-black/5 p-8 sm:p-20 mb-32 overflow-hidden">
                    <div className="absolute inset-0 opacity-5 bg-[url('/noise.svg')] pointer-events-none" />
                    
                    {!showResult ? (
                        <div className="flex flex-col relative z-10">
                            {steps[currentStep] && (
                                <>
                                    <div className="w-full bg-[#F3F4F6] h-3 rounded-full mb-16 overflow-hidden border border-black/5">
                                        <motion.div 
                                            className="bg-gradient-to-r from-[#3A5CCC] to-[#27324A] h-full transition-all duration-500" 
                                            initial={{ width: 0 }}
                                            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                                        />
                                    </div>

                                    <div className="flex-grow">
                                        <AnimatePresence mode="wait">
                                            <motion.div 
                                                key={currentStep} 
                                                initial={{ opacity: 0, x: 20 }} 
                                                animate={{ opacity: 1, x: 0 }} 
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="text-[11px] font-black uppercase tracking-[0.4em] text-[#3A5CCC]">Step 0{currentStep + 1}</div>
                                                </div>
                                                <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tighter leading-none">{steps[currentStep].title}</h2>
                                                <p className="text-lg sm:text-2xl font-bold text-[#0F172A]/40 mb-12">{steps[currentStep].description}</p>

                                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                    {steps[currentStep].options.map(option => {
                                                        const isSelected = (selections[steps[currentStep].id] || []).includes(option.id);
                                                        return (
                                                            <motion.div
                                                                key={option.id}
                                                                whileHover={{ scale: 1.02, y: -4 }}
                                                                whileTap={{ scale: 0.98 }}
                                                                onClick={() => handleSelect(steps[currentStep].id, option.id, steps[currentStep].multiSelect || false)}
                                                                className={`relative p-8 rounded-[2rem] sm:rounded-[2.5rem] cursor-pointer transition-all duration-300 overflow-hidden group ${
                                                                    isSelected 
                                                                    ? "bg-white shadow-[0_20px_40px_-10px_rgba(58,92,204,0.2)] ring-2 ring-[#3A5CCC] border-transparent" 
                                                                    : "bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] border border-black/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] hover:shadow-xl hover:border-[#3A5CCC]/20"
                                                                }`}
                                                            >
                                                                <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} transition-opacity duration-500 ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-40"}`} />
                                                                <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl transition-all duration-500 ${isSelected ? "bg-[#3A5CCC]/20" : "bg-transparent group-hover:bg-[#3A5CCC]/10"}`} />

                                                                <div className="relative z-10">
                                                                    <div className="flex items-center justify-between mb-8">
                                                                       <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                                                                           isSelected 
                                                                           ? "bg-[#3A5CCC] text-white shadow-lg shadow-[#3A5CCC]/30" 
                                                                           : "bg-white text-[#0F172A] shadow-md group-hover:scale-110 group-hover:text-[#3A5CCC]"
                                                                       }`}>
                                                                          {option.icon || <Check className="w-6 h-6" />}
                                                                       </div>
                                                                       
                                                                       <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                                                                           isSelected 
                                                                           ? "bg-[#3A5CCC] border-[#3A5CCC] text-white scale-100 opacity-100 shadow-md" 
                                                                           : "border-black/10 text-transparent scale-90 opacity-50 group-hover:border-[#3A5CCC]/30 group-hover:scale-100"
                                                                       }`}>
                                                                          <Check className="w-4 h-4" strokeWidth={3} />
                                                                       </div>
                                                                    </div>
                                                                    
                                                                    <div className="space-y-2">
                                                                        <div className={`font-black text-2xl tracking-tight transition-colors duration-300 ${
                                                                            isSelected ? "text-[#0F172A]" : "text-[#0F172A]/70 group-hover:text-[#0F172A]"
                                                                        }`}>
                                                                            {option.label}
                                                                        </div>
                                                                        {option.description && (
                                                                            <p className={`text-sm font-bold transition-colors duration-300 ${
                                                                                isSelected ? "text-[#0F172A]/60" : "text-[#0F172A]/40 group-hover:text-[#0F172A]/50"
                                                                            }`}>
                                                                                {option.description}
                                                                            </p>
                                                                        )}
                                                                        {option.cost > 0 && (
                                                                            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-black transition-all duration-300 mt-3 ${
                                                                                isSelected 
                                                                                ? "bg-[#3A5CCC]/10 text-[#3A5CCC]" 
                                                                                : "bg-black/5 text-[#0F172A]/40 group-hover:bg-[#3A5CCC]/5 group-hover:text-[#3A5CCC]"
                                                                            }`}>
                                                                                + ${option.cost}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </motion.div>
                                                        );
                                                    })}
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    <div className="flex justify-between items-center mt-16 pt-12 border-t border-black/5">
                                        <button 
                                            onClick={prevStep} 
                                            disabled={currentStep === 0} 
                                            className="flex items-center gap-3 text-lg font-black text-[#0F172A]/40 hover:text-[#0F172A] disabled:opacity-0 transition-all uppercase tracking-widest"
                                        >
                                           <ChevronLeft className="w-6 h-6" /> Back
                                        </button>
                                        <button 
                                            onClick={nextStep} 
                                            disabled={!(selections[steps[currentStep].id]?.length > 0)} 
                                            className="bg-[#0F172A] text-white px-12 py-5 rounded-2xl text-xl font-black shadow-xl hover:bg-[#3A5CCC] disabled:opacity-30 transition-all flex items-center gap-4"
                                        >
                                           {currentStep === steps.length - 1 ? "Calculate Result" : "Continue"} <ChevronRight className="w-6 h-6" />
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    ) : (
                        <div className="text-center relative z-10 py-12">
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="w-24 h-24 bg-gradient-to-br from-[#3A5CCC] to-[#27324A] rounded-[2rem] flex items-center justify-center mx-auto mb-12 text-white shadow-2xl shadow-[#3A5CCC]/40"
                            >
                                <Calculator className="w-12 h-12" />
                            </motion.div>
                            <h2 className="text-4xl sm:text-6xl font-black mb-8 tracking-tighter">Estimated Investment</h2>
                            <div className="text-[6rem] sm:text-[10rem] font-black text-[#0F172A] mb-12 tracking-tighter leading-none">
                                ${calculateTotal().toLocaleString()}
                            </div>
                            <p className="text-xl sm:text-2xl font-bold text-[#0F172A]/40 mb-16 max-w-xl mx-auto">
                                This is a rough estimate based on your selections. Send us your details to get a fixed proposal.
                            </p>

                            <form onSubmit={handleEstimateSubmit} className="max-w-xl mx-auto space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6 text-left">
                                    <div>
                                        <label className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]/40 ml-4 mb-2 block">Your Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-[#F3F4F6] border border-black/5 rounded-2xl p-6 font-black text-lg focus:ring-2 focus:ring-[#3A5CCC] transition-all" value={name} onChange={e => setName(e.target.value)} required />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]/40 ml-4 mb-2 block">Work Email</label>
                                        <input type="email" placeholder="john@company.com" className="w-full bg-[#F3F4F6] border border-black/5 rounded-2xl p-6 font-black text-lg focus:ring-2 focus:ring-[#3A5CCC] transition-all" value={email} onChange={e => setEmail(e.target.value)} required />
                                    </div>
                                </div>
                                <button type="submit" disabled={loading} className="w-full bg-[#3A5CCC] text-white py-6 rounded-2xl text-2xl font-black shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-4 group">
                                    {loading ? "Sending..." : "Send Detailed Proposal"} <ArrowUpRight className="w-7 h-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>

                            <button onClick={() => { setShowResult(false); setCurrentStep(0); setSelections({}); }} className="mt-16 text-[#0F172A]/40 font-black uppercase tracking-[0.4em] text-xs hover:text-[#3A5CCC] transition-colors">
                                ← Recalculate Everything
                            </button>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="h-24 bg-gradient-to-b from-[#F3F4F6] to-[#0F172A]" />
        </div>
    );
}
