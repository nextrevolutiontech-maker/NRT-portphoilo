const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/components/pages/HomeClient.tsx');
let buf = fs.readFileSync(file);
let content = buf.toString('utf8');

// If it's UTF-16 LE
if (content.indexOf('\u0000') !== -1) {
  content = buf.toString('utf16le');
}

// Remove SEO
content = content.replace(/import\s+\{\s*SEO\s*\}\s+from\s+["'].*?["'];?/g, '');
content = content.replace(/<SEO[^>]*\/>/g, '');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed SEO import and normalized to UTF8');
