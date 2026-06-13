const fs = require('fs');

let home = fs.readFileSync('src/app/pages/Home.tsx', 'utf8');

// Fix duplicate border classes that break the black outline
home = home.replace(/border-2 border-slate-900 border-black\/15/g, 'border-2 border-slate-900');
home = home.replace(/border-2 border-slate-900 border-orange-600/g, 'border-2 border-slate-900');

fs.writeFileSync('src/app/pages/Home.tsx', home, 'utf8');
console.log('Cleaned up borders');
