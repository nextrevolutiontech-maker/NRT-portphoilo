const fs = require('fs');

let home = fs.readFileSync('src/app/pages/Home.tsx', 'utf8');

// 1. Fix the main dark section background
home = home.replace(/bg-gradient-to-b from-\[#1E293B\]\/80 to-\[#131A2A\] rounded-\[4rem\] p-12 sm:p-24 border border-black\/10 shadow-2xl relative/g, 
  'bg-white rounded-[4rem] p-12 sm:p-24 border-2 border-slate-900 shadow-[0_20px_0_0_rgba(15,23,42,1)] relative');

// 2. Fix the Audit form card
home = home.replace(/bg-white border-slate-200 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl/g, 
  'bg-white border-2 border-slate-900 rounded-3xl p-8 sm:p-10 shadow-xl backdrop-blur-xl');

// 3. Fix the inputs to actually have the "border" class and a black outline
home = home.replace(/bg-white border-slate-200 text-slate-900 focus:border-slate-900/g, 
  'bg-white border-2 border-slate-900 text-slate-900 focus:border-orange-600');

// 4. Also fix PreFooterCTA inputs just in case it's there
let cta = fs.readFileSync('src/app/components/PreFooterCTA.tsx', 'utf8');
if (cta.includes('bg-white border-slate-200')) {
  cta = cta.replace(/bg-white border-slate-200/g, 'bg-white border-2 border-slate-900');
  fs.writeFileSync('src/app/components/PreFooterCTA.tsx', cta, 'utf8');
}

fs.writeFileSync('src/app/pages/Home.tsx', home, 'utf8');
console.log('Fixed audit section backgrounds and input borders');
