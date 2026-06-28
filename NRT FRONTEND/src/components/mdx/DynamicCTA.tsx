import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface DynamicCTAProps {
  industryContext?: string;
  defaultText?: string;
}

export const DynamicCTA = ({ industryContext, defaultText }: DynamicCTAProps) => {
  // Logic to dynamically generate the CTA text based on context
  let ctaText = defaultText || "Book a Digital Transformation Assessment";
  let ctaSubtitle = "Talk to our enterprise architects today.";
  
  if (industryContext) {
    const lower = industryContext.toLowerCase();
    if (lower.includes('manufacturing')) {
      ctaText = "Book a Manufacturing ERP Consultation";
      ctaSubtitle = "Talk to a Manufacturing ERP Specialist";
    } else if (lower.includes('hospital') || lower.includes('healthcare') || lower.includes('pharma')) {
      ctaText = "Talk to a Healthcare Software Specialist";
      ctaSubtitle = "Ensure compliance and streamline operations today.";
    } else if (lower.includes('retail')) {
      ctaText = "Schedule a Retail Digital Transformation Assessment";
      ctaSubtitle = "Scale your retail operations effortlessly.";
    }
    // Add more personalized text based on industry array
  }

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="my-12 p-8 md:p-12 rounded-2xl bg-primary text-primary-foreground relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 z-0" />
      
      {/* Animated abstract background elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-black opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
            {ctaText}
          </h3>
          <p className="text-primary-foreground/80 text-lg">
            {ctaSubtitle}
          </p>
        </div>
        
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 hover:shadow-xl transition-all shrink-0"
        >
          Get Started <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </motion.div>
  );
};
