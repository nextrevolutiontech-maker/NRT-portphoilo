const fs = require('fs');
const path = require('path');

const pages = [
  {
    source: 'Contact.tsx',
    name: 'Contact',
    route: 'contact',
    title: 'Contact Us | Next Revolution Tech',
    desc: 'Get in touch with Next Revolution Tech to discuss your enterprise software, AI automation, or custom business solutions.',
    type: 'ContactPage',
    schema: `"url": "https://www.nextrevolutiontech.tech/contact",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+92-344-201-3217",
            "contactType": "customer service",
            "email": "nextrevolutiontech@gmail.com",
            "areaServed": "Global"
          }`
  },
  {
    source: 'Portfolio.tsx',
    name: 'Portfolio',
    route: 'portfolio',
    title: 'Our Portfolio & Case Studies | Next Revolution Tech',
    desc: 'Explore our portfolio of successful enterprise ERP systems, AI automation solutions, and custom software projects.',
    type: 'CollectionPage',
    schema: `"url": "https://www.nextrevolutiontech.tech/portfolio",
          "name": "NRT Case Studies and Projects"`
  },
  {
    source: 'Process.tsx',
    name: 'Process',
    route: 'process',
    title: 'Our Process | Next Revolution Tech',
    desc: 'Discover our proven agile methodology for designing, developing, and deploying enterprise software and AI solutions.',
    type: 'WebPage',
    schema: `"url": "https://www.nextrevolutiontech.tech/process",
          "name": "NRT Software Development Process"`
  },
  {
    source: 'Pricing.tsx',
    name: 'Pricing',
    route: 'pricing',
    title: 'Pricing & Packages | Next Revolution Tech',
    desc: 'Transparent pricing for custom software development, AI automation, and dedicated engineering teams.',
    type: 'WebPage',
    schema: `"url": "https://www.nextrevolutiontech.tech/pricing",
          "name": "NRT Pricing and Packages"`
  },
  {
    source: 'policies/PrivacyPolicy.tsx',
    name: 'PrivacyPolicy',
    route: 'privacy-policy',
    title: 'Privacy Policy | Next Revolution Tech',
    desc: 'Read our Privacy Policy to understand how Next Revolution Tech collects, uses, and protects your data.',
    type: 'WebPage',
    schema: `"url": "https://www.nextrevolutiontech.tech/privacy-policy",
          "name": "NRT Privacy Policy"`
  },
  {
    source: 'policies/TermsOfService.tsx',
    name: 'TermsOfService',
    route: 'terms',
    title: 'Terms of Service | Next Revolution Tech',
    desc: 'Read the Terms of Service for using Next Revolution Tech software and websites.',
    type: 'WebPage',
    schema: `"url": "https://www.nextrevolutiontech.tech/terms",
          "name": "NRT Terms of Service"`
  },
  {
    source: 'CaseStudies.tsx',
    name: 'CaseStudies',
    route: 'case-studies',
    title: 'Case Studies | Next Revolution Tech',
    desc: 'Detailed case studies of business transformations through our AI and ERP solutions.',
    type: 'CollectionPage',
    schema: `"url": "https://www.nextrevolutiontech.tech/case-studies",
          "name": "NRT Detailed Case Studies"`
  }
];

const frontendDir = path.join(__dirname, '..', 'NRT FRONTEND', 'src', 'app', 'pages');
const nextjsDir = __dirname;
const componentsPagesDir = path.join(nextjsDir, 'src', 'components', 'pages');
const appPublicDir = path.join(nextjsDir, 'src', 'app', '(public)');

if (!fs.existsSync(componentsPagesDir)) fs.mkdirSync(componentsPagesDir, { recursive: true });

pages.forEach(p => {
  const sourcePath = path.join(frontendDir, p.source);
  if (!fs.existsSync(sourcePath)) {
    console.log(`Source not found: ${sourcePath}`);
    return;
  }

  let buf = fs.readFileSync(sourcePath);
  let content = buf.toString('utf8');
  if (content.indexOf('\u0000') !== -1) {
    content = buf.toString('utf16le');
  }

  // Next.js Transformations
  if (!content.includes('"use client"')) content = '"use client";\n' + content;
  
  if (!content.includes('import Image from "next/image"')) {
    content = content.replace('import Link from "next/link";', 'import Link from "next/link";\nimport Image from "next/image";');
    if (!content.includes('import Image from "next/image"')) {
        content = content.replace('import { Link } from "react-router-dom";', 'import Link from "next/link";\nimport Image from "next/image";');
    }
    if (!content.includes('import Image from "next/image"')) {
        content = content.replace('import {', 'import Image from "next/image";\nimport {');
    }
  }

  content = content.replace(/import\s+\{\s*SEO\s*\}\s+from\s+["'].*?["'];?/g, '');
  content = content.replace(/<SEO[^>]*\/>/g, '');

  const functionRegex = new RegExp(`export\\s+function\\s+${p.name}\\s*\\(`);
  content = content.replace(functionRegex, `export function ${p.name}Client(`);
  // Just in case it's a default export or arrow function
  content = content.replace(new RegExp(`const\\s+${p.name}\\s*=`), `const ${p.name}Client =`);
  content = content.replace(new RegExp(`export\\s+default\\s+${p.name};`), `export default ${p.name}Client;`);

  content = content.replace(/import\s+\{\s*Link\s*\}\s+from\s+["']react-router-dom["'];/g, 'import Link from "next/link";');
  content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');
  content = content.replace(/import\.meta\.env\.DEV/g, "(process.env.NODE_ENV === 'development')");
  content = content.replace(/import\.meta\.env\.VITE_/g, "process.env.NEXT_PUBLIC_");
  content = content.replace(/@\/app\/components\//g, '@/components/');
  content = content.replace(/\.\.\/\.\.\/config/g, '@/config');
  content = content.replace(/\.\.\/components\//g, '@/components/');
  content = content.replace(/\.\.\/\.\.\/components\//g, '@/components/');

  // Fix React 19 refs
  const refRegex = /ref=\{([a-zA-Z0-9_]+)\s*=>\s*([^\{]+?)\}/g;
  content = content.replace(refRegex, (match, param, body) => {
    if (body.trim().startsWith('{')) return match;
    return `ref={${param} => { ${body.trim()}; }}`;
  });

  // Optimize Images (Simple width/height injection to satisfy Next.js types without breaking layout)
  content = content.replace(/<img([^>]+)>/g, (match, attrs) => {
    if (attrs.includes('fill') || attrs.includes('width=')) return `<Image${attrs} />`;
    return `<Image${attrs} width={1200} height={800} />`;
  });

  const destComponent = path.join(componentsPagesDir, `${p.name}Client.tsx`);
  fs.writeFileSync(destComponent, content, 'utf8');
  console.log(`Created Component: ${destComponent}`);

  // Create App Router Page
  const routeDir = path.join(appPublicDir, p.route);
  if (!fs.existsSync(routeDir)) fs.mkdirSync(routeDir, { recursive: true });

  const pageContent = `import { ${p.name}Client } from "@/components/pages/${p.name}Client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${p.title}",
  description: "${p.desc}",
  alternates: {
    canonical: "https://www.nextrevolutiontech.tech/${p.route}",
  },
};

export default function ${p.name}Page() {
  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "${p.type}",
          ${p.schema}
        }) }} 
      />
      <${p.name}Client />
    </>
  );
}
`;

  const destPage = path.join(routeDir, 'page.tsx');
  fs.writeFileSync(destPage, pageContent, 'utf8');
  console.log(`Created Route: ${destPage}`);
});

console.log('Migration script finished!');
