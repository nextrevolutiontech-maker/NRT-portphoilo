const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Remove 2px thickness and use 1px
  content = content.replace(/border-2 border-slate-900/g, 'border border-slate-300');
  
  // 2. Change 1px solid black to a lighter border
  content = content.replace(/border-slate-900/g, 'border-slate-300');

  // Also catch border-black which is sometimes used
  // content = content.replace(/border-black/g, 'border-black/20');
  
  // Fix focus rings
  content = content.replace(/focus:border-slate-300/g, 'focus:border-slate-900'); // keep active state dark
  
  // If the border is used on hover, we might want it slightly darker than default
  content = content.replace(/hover:border-slate-300/g, 'hover:border-slate-400');
  
  // Text colors might have accidentally been replaced if they were text-slate-900. Wait!
  // I only replaced "border-slate-900", so "text-slate-900" is untouched! Good.

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Lightened borders in:', filePath);
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
console.log('Done lightening borders!');
