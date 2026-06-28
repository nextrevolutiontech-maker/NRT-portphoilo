const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Background replacements
  content = content.replace(/bg-\[#0B0F19\]/g, 'bg-white');
  content = content.replace(/bg-\[#131A2A\]/g, 'bg-slate-50');
  content = content.replace(/bg-\[#080B11\]/g, 'bg-white');
  content = content.replace(/bg-\[#060B19\]/g, 'bg-slate-50');
  content = content.replace(/bg-[#1E293B]/g, 'bg-white');
  
  content = content.replace(/bg-slate-950/g, 'bg-slate-50');
  content = content.replace(/bg-slate-900/g, 'bg-slate-100');
  content = content.replace(/bg-slate-800/g, 'bg-slate-100');

  // Text color replacements
  // First protect text-white in buttons by changing them to a temporary placeholder
  content = content.replace(/btn-primary-nrt([^>]*)text-white/g, 'btn-primary-nrt$1TEXT_WHITE_PROTECTED');
  content = content.replace(/bg-\[#3A5CCC\]([^>]*)text-white/g, 'bg-[#3A5CCC]$1TEXT_WHITE_PROTECTED');
  
  content = content.replace(/text-white(\/[0-9]+)?/g, (match, p1) => {
    return p1 ? `text-slate-900${p1}` : 'text-slate-900';
  });
  
  // Restore protected text-white
  content = content.replace(/TEXT_WHITE_PROTECTED/g, 'text-white');

  content = content.replace(/text-slate-200(\/[0-9]+)?/g, (match, p1) => {
    return p1 ? `text-slate-700${p1}` : 'text-slate-700';
  });
  content = content.replace(/text-slate-300(\/[0-9]+)?/g, (match, p1) => {
    return p1 ? `text-slate-600${p1}` : 'text-slate-600';
  });
  content = content.replace(/text-slate-400(\/[0-9]+)?/g, (match, p1) => {
    return p1 ? `text-slate-500${p1}` : 'text-slate-500';
  });

  // Border colors
  content = content.replace(/border-white(\/[0-9]+)?/g, (match, p1) => {
    return p1 ? `border-black${p1}` : 'border-slate-200';
  });

  // Noise image might look bad on white background, reducing its opacity or removing it.
  content = content.replace(/opacity-\[0\.02\]/g, 'opacity-[0.01]');
  content = content.replace(/opacity-\[0\.03\]/g, 'opacity-[0.01]');

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
console.log('Done!');
