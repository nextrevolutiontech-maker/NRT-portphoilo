const fs = require('fs');
const path = require('path');

const serviceFile = path.join(__dirname, 'src', 'components', 'pages', 'ServiceDetailClient.tsx');
if (fs.existsSync(serviceFile)) {
    let sContent = fs.readFileSync(serviceFile, 'utf8');
    
    // Remove Helmet import
    sContent = sContent.replace(/import\s+\{\s*Helmet\s*\}\s+from\s+["']react-helmet-async["'];?/g, '');
    
    // Replace ImageWithFallback with Image since migrate-service-detail didn't run fix-mdx-imports again
    sContent = sContent.replace(/import\s+\{\s*ImageWithFallback\s*\}\s+from\s+['"]@\/components\/figma\/ImageWithFallback['"];?/g, 'import Image from "next/image";');
    sContent = sContent.replace(/<ImageWithFallback/g, '<Image width={1200} height={800}');
    
    fs.writeFileSync(serviceFile, sContent, 'utf8');
    console.log('Fixed ServiceDetailClient cleanly.');
}
