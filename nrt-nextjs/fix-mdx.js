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

const componentsDir = path.join(__dirname, 'src', 'components', 'mdx');
const files = walkSync(componentsDir);

files.forEach(file => {
  let buf = fs.readFileSync(file);
  let content = buf.toString('utf8');

  // If it's UTF-16 LE
  if (content.indexOf('\u0000') !== -1) {
    content = buf.toString('utf16le');
  }

  // 1. Add "use client"
  if (!content.includes('"use client"') && !file.endsWith('index.tsx')) {
    content = '"use client";\n' + content;
  }
  
  if (file.endsWith('index.tsx')) {
      // index.tsx can just be a server component exporting client components
      content = content.replace(/"use client";\n/g, '');
  }

  // 2. Fix Links
  content = content.replace(/import \{ Link \} from "react-router-dom";/g, 'import Link from "next/link";');
  content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');
  
  // 3. Replace a href= with Link if applicable? No, leave a tags alone for external.

  // Write back
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Fixed: ${file}`);
});
