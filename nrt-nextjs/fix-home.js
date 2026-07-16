const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/components/pages/HomeClient.tsx');
let content = fs.readFileSync(file, 'utf8');

// 1. Add "use client"
if (!content.startsWith('"use client"')) {
  content = '"use client";\n' + content;
}

// 2. Fix imports
content = content.replace(/import \{ Link \} from "react-router-dom";/g, 'import Link from "next/link";');
content = content.replace(/from "\.\.\/components\//g, 'from "@/components/');
content = content.replace(/from "\.\.\/\.\.\/config/g, 'from "@/config');

// 3. Remove SEO usage
content = content.replace(/import \{ SEO \} from ".*?";\n/g, '');
content = content.replace(/<SEO\s+title="[^"]+"\s+description="[^"]+"\s*\/>/g, '');
content = content.replace(/<SEO[^>]*\/>/gs, '');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed HomeClient.tsx');
