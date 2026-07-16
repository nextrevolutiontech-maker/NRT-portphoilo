const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const componentsDir = path.join(__dirname, 'src', 'components');
const files = walkSync(componentsDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (content.includes('import { useState') || content.includes('import { useEffect') || content.includes('import { useRef') || content.includes('gsap') || content.includes('motion') || content.includes('Three')) {
    if (!content.includes('"use client"')) {
      content = '"use client";\n' + content;
      changed = true;
    }
  }

  if (content.includes('import { Link } from "react-router-dom";')) {
    content = content.replace(/import \{ Link \} from "react-router-dom";/g, 'import Link from "next/link";');
    changed = true;
  }
  
  if (content.includes('to=')) {
    // Next.js Link uses href instead of to, but we only want to change it on Link components
    content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');
    changed = true;
  }

  // Fix relative imports pointing to ../../config or ../config
  if (content.match(/from "\.\.[\.\/]*config/)) {
    content = content.replace(/from "\.\.[\.\/]*config(\/brand)?"/g, (match, brand) => {
      return `from "@/config${brand || ''}"`;
    });
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed: ${file}`);
  }
});
