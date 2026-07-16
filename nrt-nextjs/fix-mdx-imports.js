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

// 1. Fix MDX Components
const mdxFiles = walkSync(path.join(__dirname, 'src', 'components', 'mdx'));
mdxFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/import\s+\{\s*Link\s*\}\s+from\s+['"]react-router-dom['"];?/g, 'import Link from "next/link";');
  
  if (file.endsWith('ExploreTopic.tsx')) {
    // Stub the recommendation index or remove the import if it's missing
    content = content.replace(/const recIndex = await import\('\.\.\/\.\.\/\.\.\/\.cache\/recommendation-index\.json'\);/g, 'const recIndex = { default: [] };');
  }
  
  fs.writeFileSync(file, content, 'utf8');
});

// 2. Fix ServiceDetailClient
const serviceFile = path.join(__dirname, 'src', 'components', 'pages', 'ServiceDetailClient.tsx');
if (fs.existsSync(serviceFile)) {
    let sContent = fs.readFileSync(serviceFile, 'utf8');
    // Replace ImageWithFallback with standard img/Image
    sContent = sContent.replace(/import\s+\{\s*ImageWithFallback\s*\}\s+from\s+['"]@\/components\/figma\/ImageWithFallback['"];?/g, 'import Image from "next/image";');
    sContent = sContent.replace(/<ImageWithFallback/g, '<Image width={1200} height={800}');
    fs.writeFileSync(serviceFile, sContent, 'utf8');
}
