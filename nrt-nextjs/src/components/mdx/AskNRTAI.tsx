"use client";
import React from 'react';
import { Bot, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

interface AskNRTAIProps {
  topic?: string;
}

export const AskNRTAI = ({ topic = "this topic" }: AskNRTAIProps) => {
  const handleAsk = () => {
    toast.success("AI Assistant Initializing...", {
      description: "The NRT conversational agent is being loaded. Please wait.",
      icon: <Bot className="w-5 h-5 text-primary" />
    });
  };

  return (
    <div className="my-12 p-8 rounded-2xl bg-slate-900 text-white relative overflow-hidden group">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay" />
      <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <Bot className="w-8 h-8 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-1">Still have questions about {topic}?</h3>
            <p className="text-slate-400">Ask our AI for instant, context-aware answers.</p>
          </div>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAsk}
          className="shrink-0 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] transition-all"
        >
          <MessageSquare className="w-5 h-5" />
          Ask NRT AI
        </motion.button>
      </div>
    </div>
  );
};
