const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Remove Blue gradients
  content = content.replace(/bg-gradient-to-r from-\[#3A5CCC\] to-\[#4F7FFF\]/g, 'bg-slate-900');
  content = content.replace(/bg-gradient-to-r from-\[#3A5CCC\] to-\[#27324A\]/g, 'bg-slate-900');
  content = content.replace(/bg-gradient-to-r from-\[#14B8A6\] to-\[#00E5FF\]/g, 'bg-slate-900');

  // 2. Primary Blues to Orange
  content = content.replace(/bg-\[#3A5CCC\]/g, 'bg-orange-600');
  content = content.replace(/hover:bg-\[#27324A\]/g, 'hover:bg-orange-700');
  content = content.replace(/text-\[#3A5CCC\]/g, 'text-orange-600');
  content = content.replace(/border-\[#3A5CCC\]/g, 'border-orange-600');
  content = content.replace(/bg-blue-600/g, 'bg-orange-600');
  content = content.replace(/text-blue-600/g, 'text-orange-600');
  content = content.replace(/text-blue-500/g, 'text-orange-500');

  // 3. Teals/Emeralds to Black/Slate (except where success/growth needs orange)
  // We'll replace the hardcoded ones with slate-900 generally, but I'll do a pass on Home.tsx to fix specific ones.
  content = content.replace(/bg-\[#14B8A6\]/g, 'bg-slate-900');
  content = content.replace(/text-\[#14B8A6\]/g, 'text-slate-900');
  content = content.replace(/border-\[#14B8A6\]/g, 'border-slate-900');
  content = content.replace(/text-\[#00E5FF\]/g, 'text-slate-800');
  content = content.replace(/text-emerald-400/g, 'text-orange-500');
  content = content.replace(/text-emerald-500/g, 'text-orange-500');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filePath);
  }
}

function traverseDir(dir) {
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

traverseDir(srcDir);
console.log('Done mapping primary and secondary colors!');
