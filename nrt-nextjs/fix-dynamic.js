const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/components/pages/HomeClient.tsx');
let content = fs.readFileSync(file, 'utf8');

// 1. Add next/dynamic import
if (!content.includes('import dynamic from "next/dynamic";')) {
  content = 'import dynamic from "next/dynamic";\n' + content;
}

// 2. Replace static imports with dynamic imports for heavy components
content = content.replace(/import \{ InteractiveHero3D \} from "@\/components\/ui\/InteractiveHero3D";/g, 'const InteractiveHero3D = dynamic(() => import("@/components/ui/InteractiveHero3D").then(mod => mod.InteractiveHero3D), { ssr: false });');

content = content.replace(/import \{ Testimonials \} from "@\/components\/Testimonials";/g, 'const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => mod.Testimonials), { ssr: false });');

content = content.replace(/import \{ ServicesShowcase \} from "@\/components\/ui\/ServicesShowcase";/g, 'const ServicesShowcase = dynamic(() => import("@/components/ui/ServicesShowcase").then(mod => mod.ServicesShowcase), { ssr: false });');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed dynamic imports in HomeClient.tsx');
