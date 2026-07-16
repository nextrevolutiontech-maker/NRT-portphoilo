const fs = require('fs');
const path = require('path');

const filesToFix = [
  path.join(__dirname, 'src/components/pages/AboutClient.tsx'),
  path.join(__dirname, 'src/components/pages/ServicesClient.tsx')
];

filesToFix.forEach(file => {
  if (!fs.existsSync(file)) return;
  let buf = fs.readFileSync(file);
  let content = buf.toString('utf8');

  // If it's UTF-16 LE
  if (content.indexOf('\u0000') !== -1) {
    content = buf.toString('utf16le');
  }

  // 1. Add "use client"
  if (!content.includes('"use client"')) {
    content = '"use client";\n' + content;
  }

  // 2. Remove SEO
  content = content.replace(/import\s+\{\s*SEO\s*\}\s+from\s+["'].*?["'];?/g, '');
  content = content.replace(/<SEO[^>]*\/>/g, '');

  // 3. Rename export
  if (file.includes('AboutClient')) {
    content = content.replace(/export function About\(\) \{/, 'export function AboutClient() {');
  } else if (file.includes('ServicesClient')) {
    content = content.replace(/export function Services\(\) \{/, 'export function ServicesClient() {');
  }

  // 4. Fix Links
  content = content.replace(/import \{ Link \} from "react-router-dom";/g, 'import Link from "next/link";');
  content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');

  // 5. Fix Env
  content = content.replace(/import\.meta\.env\.DEV/g, "(process.env.NODE_ENV === 'development')");
  content = content.replace(/import\.meta\.env\.VITE_/g, "process.env.NEXT_PUBLIC_");

  // 6. Fix paths
  content = content.replace(/@\/app\/components\//g, '@/components/');
  content = content.replace(/\.\.\/\.\.\/config/g, '@/config');
  content = content.replace(/\.\.\/components\//g, '@/components/');

  // 7. Fix Ref callback for React 19
  const refRegex = /ref=\{([a-zA-Z0-9_]+)\s*=>\s*([^\{]+?)\}/g;
  content = content.replace(refRegex, (match, param, body) => {
    if (body.trim().startsWith('{')) return match;
    return `ref={${param} => { ${body.trim()}; }}`;
  });

  // Write back
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Fixed: ${file}`);
});
