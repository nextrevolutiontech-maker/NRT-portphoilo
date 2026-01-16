
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ChevronRight, ChevronLeft, Calculator, Mail, Globe, Smartphone, Sparkles, ShoppingCart, Zap, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface Option {
    id: string;
    label: string;
    cost: number;
    icon?: React.ReactNode;
    description?: string;
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
        title: "Platform",
        description: "Where should your application live?",
        options: [
            { 
                id: "web", 
                label: "Web Application", 
                cost: 1500,
                icon: <Globe className="h-6 w-6" />,
                description: "Responsive web apps for all devices"
            },
            { 
                id: "mobile", 
                label: "Mobile App (iOS/Android)", 
                cost: 2500,
                icon: <Smartphone className="h-6 w-6" />,
                description: "Native mobile applications"
            },
            { 
                id: "both", 
                label: "Both (Web + Mobile)", 
                cost: 3500,
                icon: <Sparkles className="h-6 w-6" />,
                description: "Cross-platform solution"
            },
            { 
                id: "saas", 
                label: "SaaS MVP", 
                cost: 4000,
                icon: <Cloud className="h-6 w-6" />,
                description: "Scalable SaaS platform with multi-tenancy"
            },
            { 
                id: "ecommerce", 
                label: "E-commerce Platform", 
                cost: 3000,
                icon: <ShoppingCart className="h-6 w-6" />,
                description: "Full-featured online store"
            },
            { 
                id: "ai-automation", 
                label: "AI Automation", 
                cost: 3500,
                icon: <Zap className="h-6 w-6" />,
                description: "AI-powered automation solutions"
            },
        ]
    },
    {
        id: 2,
        title: "Design",
        description: "How should it look and feel?",
        options: [
            { id: "basic", label: "Basic / Template", cost: 500 },
            { id: "custom", label: "Custom UI/UX", cost: 1500 },
            { id: "premium", label: "Premium Animations & 3D", cost: 3000 },
        ]
    },
    {
        id: 3,
        title: "Features",
        description: "What functionality do you need? (Select all that apply)",
        multiSelect: true,
        options: [
            { id: "auth", label: "User Authentication", cost: 500 },
            { id: "payment", label: "Payment Integration", cost: 800 },
            { id: "cms", label: "Admin Dashboard / CMS", cost: 1200 },
            { id: "ai", label: "AI Integration", cost: 2000 },
            { id: "chat", label: "Chat / Messaging", cost: 1000 },
        ]
    }
];

import { API_BASE_URL } from "../../config";
import { toast } from "sonner";

export function CostEstimator() {
    const [currentStep, setCurrentStep] = useState(0);
    const [selections, setSelections] = useState<Record<number, string[]>>({});
    const [email, setEmail] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSelect = (stepId: number, optionId: string, multi: boolean) => {
        setSelections(prev => {
            const current = prev[stepId] || [];
            if (multi) {
                return {
                    ...prev,
                    [stepId]: current.includes(optionId)
                        ? current.filter(id => id !== optionId)
                        : [...current, optionId]
                };
            }
            return { ...prev, [stepId]: [optionId] };
        });
    };

    const calculateTotal = () => {
        let total = 0;
        steps.forEach(step => {
            const selectedIds = selections[step.id] || [];
            selectedIds.forEach(id => {
                const option = step.options.find(o => o.id === id);
                if (option) total += option.cost;
            });
        });
        return total;
    };

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(curr => curr + 1);
        } else {
            setShowResult(true);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(curr => curr - 1);
        }
    };

    const handleEstimateSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const totalCost = calculateTotal();

        try {
            const response = await fetch(`${API_BASE_URL}/api/estimate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    total: totalCost,
                    selections
                }),
            });

            if (!response.ok) throw new Error('Failed to send estimate');

            toast.success("Estimate sent to your email!", {
                description: "Our team will review your project details shortly."
            });
            setEmail("");
            // Optional: Redirect or show success state
        } catch (error) {
            console.error(error);
            toast.error("Failed to send estimate", {
                description: "Please try again later or contact us directly."
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-24 min-h-screen bg-secondary/5">
            <Helmet>
                <title>Project Cost Estimator - Next Revolution Tech</title>
                <meta name="description" content="Get an instant estimated range for your custom software project." />
            </Helmet>

            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary mb-4">Project Cost Estimator</h1>
                    <p className="text-muted-foreground text-lg">Calculate a rough estimate for your dream project in seconds.</p>
                </div>

                <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden p-8">
                    {!showResult ? (
                        <div className="flex flex-col h-[500px]">
                            {/* Progress Bar */}
                            <div className="w-full bg-secondary/20 h-2 rounded-full mb-8">
                                <div
                                    className="bg-primary h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                                />
                            </div>

                            {/* Step Content */}
                            <div className="flex-grow">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentStep}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h2 className="text-2xl font-bold text-foreground mb-2">{steps[currentStep].title}</h2>
                                        <p className="text-muted-foreground mb-6">{steps[currentStep].description}</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {steps[currentStep].options.map(option => {
                                                const isSelected = (selections[steps[currentStep].id] || []).includes(option.id);
                                                return (
                                                    <motion.div
                                                        key={option.id}
                                                        onClick={() => handleSelect(steps[currentStep].id, option.id, steps[currentStep].multiSelect || false)}
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${isSelected
                                                            ? "border-primary bg-primary/10 shadow-[0_0_20px_-8px_var(--color-primary)]"
                                                            : "border-border hover:border-primary/50 bg-card hover:bg-card/80"
                                                            }`}
                                                    >
                                                        <div className="flex items-start justify-between mb-3">
                                                            <div className="flex items-center gap-3">
                                                                {option.icon && (
                                                                    <div className={`p-2 rounded-lg ${isSelected ? "bg-primary/20 text-primary" : "bg-secondary/50 text-muted-foreground"}`}>
                                                                        {option.icon}
                                                                    </div>
                                                                )}
                                                                <div>
                                                                    <span className="font-semibold text-foreground block">{option.label}</span>
                                                                    {option.description && (
                                                                        <span className="text-xs text-muted-foreground mt-1 block">{option.description}</span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            {isSelected && (
                                                                <motion.div
                                                                    initial={{ scale: 0 }}
                                                                    animate={{ scale: 1 }}
                                                                    className="bg-primary text-primary-foreground rounded-full p-1"
                                                                >
                                                                    <Check className="h-4 w-4" />
                                                                </motion.div>
                                                            )}
                                                        </div>
                                                        <div className="text-sm font-bold text-primary mt-3 pt-3 border-t border-border/50">
                                                            <span className="text-xs text-muted-foreground font-normal mr-1">Starting from</span>
                                                            <span className="text-lg font-bold">${option.cost.toLocaleString()}</span>
                                                        </div>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Navigation */}
                            <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
                                <button
                                    onClick={prevStep}
                                    disabled={currentStep === 0}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${currentStep === 0 ? "text-muted-foreground opacity-50 cursor-not-allowed" : "text-foreground hover:bg-secondary/20"
                                        }`}
                                >
                                    <ChevronLeft className="h-5 w-5" /> Back
                                </button>
                                <button
                                    onClick={nextStep}
                                    disabled={!(selections[steps[currentStep].id] && selections[steps[currentStep].id].length > 0)}
                                    className={`flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all shadow-lg ${!(selections[steps[currentStep].id] && selections[steps[currentStep].id].length > 0)
                                        ? "opacity-50 cursor-not-allowed shadow-none"
                                        : "hover:bg-primary/90 hover:scale-105 shadow-[0_0_20px_-5px_var(--color-primary)]"
                                        }`}
                                >
                                    {currentStep === steps.length - 1 ? "Calculate" : "Next"} <ChevronRight className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring" }}
                            >
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Calculator className="h-10 w-10 text-primary" />
                                </div>
                                <h2 className="text-3xl font-bold text-foreground mb-2">Estimated Investment</h2>
                                <div className="text-5xl font-bold text-primary mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                                    ${calculateTotal().toLocaleString()} - ${(calculateTotal() * 1.5).toLocaleString()}
                                </div>
                                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                                    This is a rough estimate based on typical requirements. The final cost depends on specific details and complexity.
                                </p>

                                <div className="max-w-md mx-auto bg-secondary/20 p-6 rounded-xl mb-8">
                                    <h3 className="text-lg font-medium text-foreground mb-4">Get a Detailed Quote</h3>
                                    <form onSubmit={handleEstimateSubmit} className="space-y-4">
                                        <div className="flex gap-2">
                                            <Mail className="h-5 w-5 text-muted-foreground mt-2.5" />
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {loading ? "Sending..." : "Send Me a Proposal"}
                                        </button>
                                    </form>
                                </div>

                                <div className="flex justify-center gap-4">
                                    <button onClick={() => { setShowResult(false); setCurrentStep(0); setSelections({}); }} className="text-muted-foreground hover:text-foreground">
                                        Start Over
                                    </button>
                                    <span className="text-muted-foreground">|</span>
                                    <Link to="/contact" className="text-primary hover:underline">
                                        Talk to an Expert
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
