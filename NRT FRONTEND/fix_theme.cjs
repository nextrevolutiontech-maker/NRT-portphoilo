const fs = require('fs');

// Fix theme.css for brand colors and secondary button
let themeCSS = fs.readFileSync('src/styles/theme.css', 'utf8');
themeCSS = themeCSS.replace(/--brand: #0A1930;/g, '--brand: #ea580c; /* Orange 600 */');
themeCSS = themeCSS.replace(/--brand-secondary: #00E5FF;/g, '--brand-secondary: #f97316; /* Orange 500 */');
themeCSS = themeCSS.replace(/--brand-accent: #10B981;/g, '--brand-accent: #0f172a; /* Slate 900 */');

// Fix secondary button for light mode
themeCSS = themeCSS.replace(/\.btn-secondary-nrt \{\s*background: [^;]+;\s*color: var\(--text-primary\);\s*border: 1px solid var\(--border-bright\);/g, 
  '.btn-secondary-nrt {\n  background: transparent;\n  color: #0f172a;\n  border: 1px solid #0f172a;');
themeCSS = themeCSS.replace(/\.btn-secondary-nrt:hover \{\s*background: [^;]+;\s*border-color: [^;]+;/g, 
  '.btn-secondary-nrt:hover {\n  background: rgba(15, 23, 42, 0.05);\n  border-color: #0f172a;');
fs.writeFileSync('src/styles/theme.css', themeCSS, 'utf8');

// Fix Home.tsx avatars
let homeTsx = fs.readFileSync('src/app/pages/Home.tsx', 'utf8');
homeTsx = homeTsx.replace(/i === 1 \? 'bg-emerald-500' :/g, "i === 1 ? 'bg-slate-900' :");
homeTsx = homeTsx.replace(/i === 2 \? 'bg-purple-500' :/g, "i === 2 ? 'bg-slate-700' :");
homeTsx = homeTsx.replace(/'bg-blue-400'/g, "'bg-slate-500'");
fs.writeFileSync('src/app/pages/Home.tsx', homeTsx, 'utf8');

console.log('Fixed theme.css and Home.tsx avatars');
