const fs = require('fs');

let home = fs.readFileSync('src/app/pages/Home.tsx', 'utf8');

// Fix Bento Cards
// From bg-[#020617] text-white to bg-white border border-slate-900 text-slate-900
home = home.replace(/bg-\[#020617\] text-white/g, 'bg-white border-2 border-slate-900 text-slate-900');
home = home.replace(/text-white mt-6/g, 'text-slate-900 mt-6');
home = home.replace(/text-slate-400 leading-relaxed/g, 'text-slate-600 leading-relaxed');

// Fix Pricing "Growth" Card
// Currently handled by plan.featured ternary:
// 'bg-[#020617] border-orange-600 shadow-2xl' or similar
home = home.replace(/bg-\[#020617\]/g, 'bg-white border-2 border-slate-900');
// text colors in pricing:
home = home.replace(/\$\{plan\.featured \? "text-white" : "text-slate-900"\}/g, 'text-slate-900');
home = home.replace(/\$\{plan\.featured \? "text-slate-300" : "text-slate-600"\}/g, 'text-slate-600');
home = home.replace(/\$\{plan\.featured \? "text-slate-400" : "text-slate-500"\}/g, 'text-slate-500');

// Fix "How it works" Cards outline to be stark black
home = home.replace(/bg-white p-10 rounded-\[2\.5rem\] border border-slate-200 shadow-xl/g, 
  'bg-white p-10 rounded-[2.5rem] border border-slate-900 shadow-xl');

// Fix Service pills border
home = home.replace(/bg-white rounded-\[2rem\] border border-slate-200/g, 'bg-white rounded-[2rem] border border-slate-900');

// Fix FAQ open state
// isOpen ? 'bg-[#020617] border-black/15 shadow-2xl' 
home = home.replace(/isOpen \n\s*\? 'bg-\[#020617\] border-black\/15 shadow-2xl' \n\s*: 'bg-white border-slate-200 hover:border-slate-900'/g, 
  "isOpen ? 'bg-white border-2 border-slate-900 shadow-2xl' : 'bg-white border border-slate-300 hover:border-slate-900'");
// text color inside FAQ
home = home.replace(/\$\{isOpen \? 'text-white' : 'text-slate-900 group-hover:text-orange-600'\}/g, 
  "${isOpen ? 'text-slate-900' : 'text-slate-700 group-hover:text-orange-600'}");
// Plus/Minus icon inside FAQ
home = home.replace(/<Minus className="w-6 h-6 text-white" \/>/g, '<Minus className="w-6 h-6 text-white" />'); // wait, the circle is orange, so icon is white, that's fine.

// Case Studies cards (black cards were requested earlier but user says "har card ka bg white rhy")
// group bg-[#0F172A] rounded-[2rem] -> group bg-white border border-slate-900 rounded-[2rem]
// Oh wait, my old code for Case studies was: group bg-white rounded-[2rem] border border-black/10
home = home.replace(/group bg-white rounded-\[2rem\] border border-black\/10/g, 'group bg-white rounded-[2rem] border border-slate-900');

fs.writeFileSync('src/app/pages/Home.tsx', home, 'utf8');

// Update Testimonials.tsx to have a black outline
let test = fs.readFileSync('src/app/components/Testimonials.tsx', 'utf8');
test = test.replace(/bg-white border-slate-200/g, 'bg-white border border-slate-900');
fs.writeFileSync('src/app/components/Testimonials.tsx', test, 'utf8');

// Update ServicesShowcase.tsx which had black bg `#020617` but wait, that's the full section background!
// The user said "har card ka bg white rhy" -> Every *card*. Not every section. But if they meant sections too... "pori web ki" outline black.
// Let's leave ServicesShowcase bg black unless they meant that too, but "card" explicitly refers to the blocks.
console.log("Forced white cards with black outlines!");
