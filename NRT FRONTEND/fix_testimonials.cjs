const fs = require('fs');

let content = fs.readFileSync('src/app/components/Testimonials.tsx', 'utf8');

// Fix card background
content = content.replace(/bg-\[#1E293B\]\/70 border-black\/10 hover:border-orange-600\/40 hover:bg-\[#1E293B\] shadow-2xl text-slate-900/g, 
  'bg-white border-slate-200 hover:border-slate-900 hover:bg-slate-50 shadow-xl text-slate-900');

// Fix avatars
content = content.replace(/bg-emerald-500 text-slate-900/g, 'bg-slate-900 text-white');
content = content.replace(/bg-purple-500 text-slate-900/g, 'bg-slate-800 text-white');
content = content.replace(/bg-blue-400 text-white/g, 'bg-slate-700 text-white');

// The star rating in dark theme says text-slate-900/10. Let's make it slate-200
content = content.replace(/theme === "dark" \? "text-slate-900\/10"/g, 'theme === "dark" ? "text-slate-200"');

// Write back
fs.writeFileSync('src/app/components/Testimonials.tsx', content, 'utf8');
console.log('Fixed Testimonials.tsx');
