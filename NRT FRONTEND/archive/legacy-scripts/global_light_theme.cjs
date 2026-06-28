const fs = require('fs');
const path = require('path');

const dirsToScan = [
  path.join(__dirname, 'src', 'app', 'pages'),
  path.join(__dirname, 'src', 'app', 'components')
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Core Backgrounds
  content = content.replace(/bg-\[#0F172A\]/g, 'bg-white');
  content = content.replace(/bg-\[#020617\]/g, 'bg-white'); // Just in case any are left

  // 2. Borders
  // The old dark theme used border-black/5, border-[#0F172A]/10, etc.
  content = content.replace(/border-black\/5/g, 'border-slate-300');
  content = content.replace(/border-black\/10/g, 'border-slate-300');
  content = content.replace(/border-\[#0F172A\]\/5/g, 'border-slate-300');
  content = content.replace(/border-\[#0F172A\]\/10/g, 'border-slate-300');
  
  // 3. Modals / Translucent bgs
  content = content.replace(/bg-\[#0F172A\]\/40/g, 'bg-slate-900/40'); // Overlay bg should still be dark!
  
  // Inner cards that were slightly lighter than dark background
  content = content.replace(/bg-\[#0F172A\]\/5/g, 'bg-white');
  content = content.replace(/bg-\[#0F172A\]\/10/g, 'bg-slate-50');

  // 4. Hovers
  content = content.replace(/hover:bg-\[#0F172A\]\/5/g, 'hover:bg-slate-50');
  content = content.replace(/hover:bg-\[#0F172A\]\/10/g, 'hover:bg-slate-100');
  content = content.replace(/hover:bg-\[#0F172A\]\/90/g, 'hover:bg-slate-100');
  content = content.replace(/hover:bg-\[#0F172A\]/g, 'hover:bg-slate-50');

  // 5. Text colors
  // Many elements had text-[#0F172A] which is good for light theme.
  content = content.replace(/text-\[#0F172A\]\/70/g, 'text-slate-600');
  content = content.replace(/text-\[#0F172A\]\/40/g, 'text-slate-400');
  content = content.replace(/text-\[#0F172A\]/g, 'text-slate-900');

  // Any stray text-white that should be slate-900?
  // We can't globally replace text-white because it's used on the primary orange buttons!
  // E.g., `bg-orange-600 text-white` is correct.

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Processed:', path.basename(filePath));
  }
}

function traverseDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

dirsToScan.forEach(dir => traverseDir(dir));
console.log('Global light theme update complete!');
