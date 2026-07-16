const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, '..', 'NRT FRONTEND', 'src', 'app', 'pages', 'ServiceDetail.tsx');
const destFile = path.join(__dirname, 'src', 'components', 'pages', 'ServiceDetailClient.tsx');

let content = fs.readFileSync(srcFile, 'utf8');

// Add "use client"
content = '"use client";\n' + content;

// Rename component
content = content.replace(/export function ServiceDetail\(\) \{/, 'export function ServiceDetailClient({ slug: propSlug }: { slug?: string }) {');

// Fix useParams
content = content.replace(/import \{ useParams, Link \} from "react-router-dom";/, 'import { useParams } from "next/navigation";\nimport Link from "next/link";');
content = content.replace(/const \{ slug \} = useParams\(\);/, 'const params = useParams();\n    const slug = propSlug || (params?.slug as string);');

// Fix Helmet
content = content.replace(/import \{ Helmet \} from "react-helmet-async";\n/, '');
content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');

// Fix next/image imports and paths
content = content.replace(/import \{ ImageWithFallback \} from "\.\.\/components\/figma\/ImageWithFallback";/, 'import { ImageWithFallback } from "@/components/figma/ImageWithFallback";');
content = content.replace(/import \{ API_BASE_URL \} from "\.\.\/\.\.\/config";/, 'import { API_BASE_URL } from "@/config";');

// Fix link tags
content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');

fs.writeFileSync(destFile, content, 'utf8');
console.log('Migrated ServiceDetailClient.tsx');
