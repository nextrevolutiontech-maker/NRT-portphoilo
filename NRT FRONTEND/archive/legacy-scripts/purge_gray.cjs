const fs = require('fs');

let content = fs.readFileSync('src/app/pages/Home.tsx', 'utf8');

// 1. Fix the Bento Cards (Enterprise Integrations, etc)
// From bg-[#1E293B]/70 to pure black bg-[#020617] with white text
content = content.replace(/bg-\[#1E293B\]\/70/g, 'bg-[#020617] text-white');
content = content.replace(/hover:bg-\[#1E293B\] hover:border-slate-500/g, 'hover:border-orange-600/50 hover:shadow-[0_0_30px_rgba(234,88,12,0.15)]');

// Update text inside the bento cards to be white
// 'text-slate-900 mt-6' -> 'text-white mt-6'
content = content.replace(/text-slate-900 mt-6/g, 'text-white mt-6');
content = content.replace(/text-slate-600 leading-relaxed/g, 'text-slate-400 leading-relaxed');

// The small internal gray cards inside bento cards (like the invoice and code IDE):
// bg-white/80 border border-black/10 -> bg-white border border-slate-200
content = content.replace(/bg-white\/80 border border-black\/10/g, 'bg-white border border-slate-200');

// The blue credit card (bg-blue-600/80) is fine if they want it blue, but let's change it to orange to match theme?
content = content.replace(/bg-blue-600\/80/g, 'bg-orange-600');

// The mini terminal
// bg-white border border-black/10 -> bg-white border-slate-200
content = content.replace(/bg-white border border-black\/10/g, 'bg-white border border-slate-200');


// 2. Fix Team List Pills (UI/UX Design, etc)
// bg-[#1E293B]/60 -> bg-white
// border-black/10 -> border-slate-200
content = content.replace(/bg-\[#1E293B\]\/60 rounded-\[2rem\] border border-black\/10/g, 
  'bg-white rounded-[2rem] border border-slate-200');
content = content.replace(/hover:bg-\[#1E293B\] hover:border-slate-500/g, 'hover:border-slate-900');


// 3. Fix FAQ Accordions
// In Home.tsx, FAQ is handled by <FAQItem .../>, let's look for FAQItem definition
content = content.replace(/bg-\[#1E293B\]\/50 border-black\/10/g, 'bg-white border-slate-200 hover:border-slate-900');
content = content.replace(/text-slate-900/g, 'text-[#0f172a]'); // Ensure crisp black text


// 4. Fix Audit Form Section (Founder Section)
// The wrapper might be bg-[#1E293B]
// "bg-white/80 border border-black/15 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl"
// Make the form card pure white
content = content.replace(/bg-white\/80 border border-black\/15/g, 'bg-white border-slate-200');

// The inputs inside the form:
// "bg-slate-100/80 border border-black/15 ... text-slate-100 placeholder:text-slate-500"
// Change inputs to pure white with slate border and slate-900 text
content = content.replace(/bg-slate-100\/80 border border-black\/15/g, 'bg-white border-slate-200 text-slate-900 focus:border-slate-900');
content = content.replace(/text-slate-100 placeholder:text-slate-500/g, 'text-slate-900 placeholder:text-slate-400');

// Replace any remaining focus:ring-[#3A5CCC] with focus:ring-slate-900
content = content.replace(/focus:ring-\[#3A5CCC\]/g, 'focus:ring-slate-900');

// Fix the founder image background (it was bg-[#1E293B])
content = content.replace(/bg-\[#1E293B\]/g, 'bg-slate-900');


// If there's an FAQ component inline:
content = content.replace(/function FAQItem/g, 'function FAQItem');

fs.writeFileSync('src/app/pages/Home.tsx', content, 'utf8');

// Now let's check if PreFooterCTA.tsx has the gray Audit form too
let ctaContent = fs.readFileSync('src/app/components/PreFooterCTA.tsx', 'utf8');
ctaContent = ctaContent.replace(/bg-\[#1E293B\]\/50/g, 'bg-slate-900');
ctaContent = ctaContent.replace(/bg-\[#1E293B\]/g, 'bg-slate-900');
ctaContent = ctaContent.replace(/bg-slate-100\/80/g, 'bg-white');
ctaContent = ctaContent.replace(/bg-white\/80/g, 'bg-white');
ctaContent = ctaContent.replace(/border-black\/15/g, 'border-slate-200');
ctaContent = ctaContent.replace(/text-slate-100 placeholder:text-slate-500/g, 'text-slate-900 placeholder:text-slate-400');
fs.writeFileSync('src/app/components/PreFooterCTA.tsx', ctaContent, 'utf8');

console.log('Fixed more gray elements!');
