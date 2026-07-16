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

const appDir = path.join(__dirname, 'src', 'app', '(public)');
const files = walkSync(appDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (content.includes('generateMetadata({ params }')) {
    // Next 15: params is a promise
    content = content.replace(/generateMetadata\(\{\s*params\s*\}\s*:\s*\{\s*params\s*:\s*\{\s*slug\s*:\s*string\s*\}\s*\}\)/, 'async generateMetadata({ params }: { params: Promise<{ slug: string }> })');
    content = content.replace(/generateMetadata\(\{\s*params\s*\}\s*:\s*\{\s*params\s*:\s*Promise<\{\s*slug\s*:\s*string\s*\}>\s*\}\)/, 'async generateMetadata({ params }: { params: Promise<{ slug: string }> })');
    if (!content.includes('const { slug } = await params;')) {
        content = content.replace(/async generateMetadata\(\{\s*params\s*\}\s*:\s*\{\s*params\s*:\s*Promise<\{\s*slug\s*:\s*string\s*\}>\s*\}\)\s*:\s*Promise<Metadata>\s*\{/g, 'async generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {\n  const { slug } = await params;');
    }
    content = content.replace(/params\.slug/g, 'slug');
    changed = true;
  }
  
  if (content.includes('function BlogPostPage({ params }') || content.includes('function CaseStudyPage({ params }') || content.includes('function ServicePage({ params }')) {
    content = content.replace(/function ([A-Za-z]+)\(\{\s*params\s*\}\s*:\s*\{\s*params\s*:\s*\{\s*slug\s*:\s*string\s*\}\s*\}\)/, 'async function $1({ params }: { params: Promise<{ slug: string }> })');
    if (!content.includes('const { slug } = await params;')) {
         content = content.replace(/async function ([A-Za-z]+)\(\{\s*params\s*\}\s*:\s*\{\s*params\s*:\s*Promise<\{\s*slug\s*:\s*string\s*\}>\s*\}\)\s*\{/g, 'async function $1({ params }: { params: Promise<{ slug: string }> }) {\n  const { slug } = await params;');
    }
    content = content.replace(/params\.slug/g, 'slug');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed params in: ${file}`);
  }
});
