const fs = require('fs');

let content = fs.readFileSync('src/app/pages/Home.tsx', 'utf8');

// Fix "How it works" cards
content = content.replace(/bg-\[#1E293B\]\/50 p-10 rounded-\[2\.5rem\] border border-black\/10 shadow-2xl/g, 
  'bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl');
content = content.replace(/hover:bg-\[#1E293B\]\/70/g, 'hover:border-slate-900');
// The step number in how it works: text-orange-600/20 -> text-orange-600
content = content.replace(/text-orange-600\/20/g, 'text-orange-600');

// Fix Pricing toggle
content = content.replace(/bg-\[#1E293B\]\/40 p-1\.5 rounded-2xl inline-flex items-center border border-black\/10 backdrop-blur-md/g, 
  'bg-white p-1.5 rounded-2xl inline-flex items-center border border-slate-200 shadow-sm');
// Toggle button active text: text-slate-900 -> text-white (since bg is orange-600)
content = content.replace(/bg-orange-600 text-slate-900 shadow-xl/g, 'bg-orange-600 text-white shadow-md');

// Fix Pricing Cards
content = content.replace(/bg-gradient-to-b from-\[#1E293B\] to-\[#131A2A\]/g, 'bg-[#020617]');
content = content.replace(/bg-\[#1E293B\]\/50 border-black\/10 hover:border-slate-500\/50/g, 'bg-white border-slate-200 hover:border-slate-900');

// Fix text colors inside the black featured pricing card dynamically?
// The easiest way is to use a specific replacement for the plan.featured condition to assign text-white or text-slate-900.
content = content.replace(/<h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">\{plan\.name\}<\/h3>/g, 
  '<h3 className={`text-xs font-black uppercase tracking-wider ${plan.featured ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>');

content = content.replace(/<div className="text-3xl font-black text-slate-900 mb-8">/g, 
  '<div className={`text-3xl font-black mb-8 ${plan.featured ? "text-white" : "text-slate-900"}`}>');

content = content.replace(/<span className="text-xs font-semibold text-slate-500 ml-2 uppercase tracking-widest">\{plan\.period\}<\/span>/g, 
  '<span className={`text-xs font-semibold ml-2 uppercase tracking-widest ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>{plan.period}</span>');

content = content.replace(/<li key=\{j\} className="flex items-center gap-3 text-sm font-semibold text-slate-600">/g, 
  '<li key={j} className={`flex items-center gap-3 text-sm font-semibold ${plan.featured ? "text-slate-300" : "text-slate-600"}`}>');

// Pricing button for featured
content = content.replace(/bg-slate-900 text-slate-900 shadow-lg shadow-teal-500\/20 hover:bg-slate-900\/90/g, 
  'bg-orange-600 text-white shadow-lg shadow-orange-600/20 hover:bg-orange-700');

fs.writeFileSync('src/app/pages/Home.tsx', content, 'utf8');
console.log('Fixed gray cards in Home.tsx');
