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

const componentsDir = path.join(__dirname, 'src', 'components', 'pages');
const files = walkSync(componentsDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Fix Helmet
  if (content.includes('react-helmet-async')) {
    content = content.replace(/import\s+\{\s*Helmet\s*\}\s+from\s+["']react-helmet-async["'];?/g, '');
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
    changed = true;
  }

  // Fix Image syntax: <Image... / width={1200} height={800} /> -> <Image... width={1200} height={800} />
  if (content.includes('/ width={1200} height={800} />')) {
    content = content.replace(/\/\s*width=\{1200\}\s*height=\{800\}\s*\/>/g, ' width={1200} height={800} />');
    changed = true;
  }
  
  // Actually, let's just make it robust:
  // if attrs ended with `/`, the script made it `/ width=1200 />`. Let's fix that globally.
  content = content.replace(/\/\s*width=\{/g, ' width={');

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed errors in: ${file}`);
  }
});
