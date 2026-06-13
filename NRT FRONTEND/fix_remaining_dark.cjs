const fs = require('fs');

// 1. Fix ServicesShowcase.tsx
let services = fs.readFileSync('src/app/components/ui/ServicesShowcase.tsx', 'utf8');

// Section bg
services = services.replace(/bg-\[#020617\] relative overflow-hidden text-white/g, 'bg-white relative overflow-hidden text-slate-900 border-y border-slate-900');

// Title text
services = services.replace(/text-white tracking-tight leading-\[1\.1\]/g, 'text-slate-900 tracking-tight leading-[1.1]');
services = services.replace(/<span className="text-white">\.<\/span>/g, '<span className="text-slate-900">.</span>');

// Hover slide background
services = services.replace(/bg-\[#0f172a\] transform/g, 'bg-white border-2 border-slate-900 shadow-[0_10px_0_0_rgba(15,23,42,1)] transform');
// Also adjust scaling so borders don't look weird when scale-x-0
services = services.replace(/scale-x-0 group-hover:scale-x-100/g, 'opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100');
services = services.replace(/scale-x-100/g, 'scale-x-100 opacity-100');

// Text colors inside list
services = services.replace(/'font-black text-white translate-x-2'/g, "'font-black text-slate-900 translate-x-2'");
services = services.replace(/'font-bold text-slate-400 group-hover:text-slate-200'/g, "'font-bold text-slate-400 group-hover:text-slate-900'");

// Remove the orange/black laptop background so it fits light theme better
services = services.replace(/bg-\[#111\]/g, 'bg-slate-100');
services = services.replace(/bg-\[#1a1a1a\]/g, 'bg-slate-200');
services = services.replace(/border-\[#222\]/g, 'border-slate-300');
services = services.replace(/border-\[#333\]/g, 'border-slate-300');

fs.writeFileSync('src/app/components/ui/ServicesShowcase.tsx', services, 'utf8');

// 2. Fix Footer.tsx
let footer = fs.readFileSync('src/app/components/Footer.tsx', 'utf8');
footer = footer.replace(/bg-\[#020617\]/g, 'bg-white border-t border-slate-900');
footer = footer.replace(/text-slate-400/g, 'text-slate-600');
footer = footer.replace(/text-slate-300/g, 'text-slate-900');
footer = footer.replace(/text-white/g, 'text-slate-900');
footer = footer.replace(/bg-white\/5 border border-white\/10/g, 'bg-white border-2 border-slate-900');
footer = footer.replace(/bg-white\/10 text-white/g, 'bg-slate-900 text-white');
// Ensure NRT logo is black, not white
footer = footer.replace(/<span className="text-2xl font-black text-white tracking-tighter">/g, '<span className="text-2xl font-black text-slate-900 tracking-tighter">');
fs.writeFileSync('src/app/components/Footer.tsx', footer, 'utf8');

// 3. Fix Founder Avatar in Home.tsx
let home = fs.readFileSync('src/app/pages/Home.tsx', 'utf8');
// "bg-slate-900" inside the founder avatar wrapper
home = home.replace(/rounded-full overflow-hidden border-4 border-orange-600 shadow-2xl mb-8 bg-slate-900/g, 
  'rounded-full overflow-hidden border-4 border-orange-600 shadow-2xl mb-8 bg-white');
// also fix the description text in ServicesShowcase active list
services = services.replace(/text-slate-600/g, 'text-slate-600'); // already slate-600, fine.
fs.writeFileSync('src/app/pages/Home.tsx', home, 'utf8');

console.log('Fixed ServicesShowcase, Footer, and Founder avatar');
