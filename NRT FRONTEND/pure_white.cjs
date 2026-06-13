const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'app');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace light gray backgrounds with white to ensure pure white theme
  content = content.replace(/bg-\[#F3F4F6\]/g, 'bg-white');
  content = content.replace(/bg-\[#F8FAFC\]/g, 'bg-white');
  content = content.replace(/bg-slate-50/g, 'bg-white');
  content = content.replace(/bg-gray-50/g, 'bg-white');
  
  // Also fix gradients that might still be dark
  // like from-[#0F172A] to-[#161F33] in Pricing
  content = content.replace(/from-\[#0F172A\] to-\[#161F33\]/g, 'bg-white border-2 border-slate-900');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Made pure white:', path.basename(filePath));
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

traverseDir(srcDir);
console.log('Pure white pass complete!');
