const fs = require('fs');
let f = fs.readFileSync('src/app/components/Footer.tsx', 'utf8');

// Update background
f = f.replace(/bg-\[#0F172A\]/g, 'bg-[#020617]');

// Update text colors to white/slate-300
f = f.replace(/text-slate-900(\/[0-9]+)?/g, (m, p1) => {
  return p1 ? 'text-slate-300' + p1 : 'text-white';
});

// Update borders to white
f = f.replace(/border-black(\/[0-9]+)?/g, (m, p1) => {
  return p1 ? 'border-white' + p1 : 'border-white/10';
});

// Remove the inline logo inversion since background is black, we might want the white logo (invert) or orange. The current logo is black by default, so brightness-0 invert makes it white. Keep it.
fs.writeFileSync('src/app/components/Footer.tsx', f, 'utf8');
console.log('Fixed Footer.tsx');
