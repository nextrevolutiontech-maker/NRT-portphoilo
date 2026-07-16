"use client";
import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingDown, Clock, ArrowRight } from 'lucide-react';
import Link from "next/link";

export const ROICalculator = () => {
  const [invoicesPerMonth, setInvoicesPerMonth] = useState(1000);
  const [costPerInvoice, setCostPerInvoice] = useState(15);
  
  const currentMonthlyCost = invoicesPerMonth * costPerInvoice;
  const currentAnnualCost = currentMonthlyCost * 12;
  
  // NRT Intelligence Benchmarks: AI Automation reduces processing cost by 85%
  const automatedCostPerInvoice = costPerInvoice * 0.15;
  const futureMonthlyCost = invoicesPerMonth * automatedCostPerInvoice;
  const futureAnnualCost = futureMonthlyCost * 12;
  
  const annualSavings = currentAnnualCost - futureAnnualCost;
  const roiPercentage = ((annualSavings) / (futureAnnualCost || 1)) * 100;
  const paybackPeriod = 2.5; // Months, based on benchmark implementation time

  return (
    <div className="my-12 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="bg-slate-900 p-8 text-white">
        <h3 className="text-2xl font-black mb-2 flex items-center gap-3">
          <Calculator className="w-6 h-6 text-emerald-400" />
          AI Invoice Automation ROI Calculator
        </h3>
        <p className="text-slate-400">Powered by NRT Intelligence Database™</p>
      </div>

      <div className="p-8 grid md:grid-cols-2 gap-12">
        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Manual Invoices Processed (Per Month)</label>
            <input 
              type="range" 
              min="100" 
              max="10000" 
              step="100"
              value={invoicesPerMonth}
              onChange={(e) => setInvoicesPerMonth(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="mt-2 text-xl font-black text-slate-900">{invoicesPerMonth.toLocaleString()} invoices</div>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Estimated Labor Cost Per Invoice ($)</label>
            <input 
              type="range" 
              min="5" 
              max="50" 
              step="1"
              value={costPerInvoice}
              onChange={(e) => setCostPerInvoice(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="mt-2 text-xl font-black text-slate-900">${costPerInvoice}</div>
            <p className="text-xs text-slate-500 mt-1">Industry Average: $12 - $17</p>
          </div>
        </div>

        {/* Report Output */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
           <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Generated ROI Report</h4>
           
           <div className="grid grid-cols-2 gap-4 mb-6">
             <div>
               <div className="text-sm text-slate-500 mb-1">Current Annual Cost</div>
               <div className="text-2xl font-black text-rose-500">${currentAnnualCost.toLocaleString()}</div>
             </div>
             <div>
               <div className="text-sm text-slate-500 mb-1">Automated Cost</div>
               <div className="text-2xl font-black text-emerald-600">${futureAnnualCost.toLocaleString()}</div>
             </div>
           </div>

           <div className="border-t border-slate-200 pt-6 mb-6">
             <div className="text-sm text-slate-500 mb-1 flex items-center gap-2">
               <TrendingDown className="w-4 h-4 text-emerald-500" /> Annual Savings
             </div>
             <div className="text-4xl font-black text-emerald-500">${annualSavings.toLocaleString()}</div>
           </div>

           <div className="grid grid-cols-2 gap-4 mb-8">
             <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm text-center">
               <div className="text-xs text-slate-500 font-bold uppercase mb-1">Projected ROI</div>
               <div className="text-xl font-black text-primary">{roiPercentage.toFixed(0)}%</div>
             </div>
             <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm text-center">
               <div className="text-xs text-slate-500 font-bold uppercase mb-1 flex items-center justify-center gap-1">
                 <Clock className="w-3 h-3" /> Payback Period
               </div>
               <div className="text-xl font-black text-primary">{paybackPeriod} Months</div>
             </div>
           </div>

           <Link href="/contact" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors">
              Request Full Audit <ArrowRight className="w-4 h-4" />
           </Link>
        </div>
      </div>
    </div>
  );
};
