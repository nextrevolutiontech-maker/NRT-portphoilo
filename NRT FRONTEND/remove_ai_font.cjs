const fs = require('fs');
const path = require('path');

const srcDir = 'd:\\New folder\\NRT portpholio\\NRT FRONTEND\\src';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  const classNameRegex = /className=(?:["']([^"']*)["']|\{`([^`]*)`\})/g;
  
  content = content.replace(classNameRegex, (match, p1, p2) => {
    let classes = p1 !== undefined ? p1 : p2;
    if (classes && classes.includes('font-italic-serif')) {
      let classArray = classes.split(/\s+/);
      
      classArray = classArray.filter(c => {
        if (c === 'font-italic-serif') return false;
        if (c === 'italic') return false;
        if (c === 'font-normal') return false;
        if (c === 'text-transparent') return false;
        if (c === 'bg-clip-text') return false;
        if (c === 'bg-gradient-to-r') return false;
        if (c.startsWith('from-')) return false;
        if (c.startsWith('via-')) return false;
        if (c.startsWith('to-')) return false;
        if (c === 'text-primary') return false;
        if (c.startsWith('text-[')) return false; // remove any existing text color to override with our solid one
        return true;
      });
      
      // Add solid color
      classArray.push('text-[#3A5CCC]');
      
      let newClasses = classArray.join(' ').trim();
      
      if (p1 !== undefined) {
        return `className="${newClasses}"`;
      } else {
        return `className={\`${newClasses}\`}`;
      }
    }
    return match;
  });

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
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      processFile(fullPath);
    }
  }
}

traverseDir(srcDir);
console.log('Done!');
