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

const componentsDir = path.join(__dirname, 'src', 'components');
const files = walkSync(componentsDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (content.includes('import.meta.env.DEV')) {
    content = content.replace(/import\.meta\.env\.DEV/g, "(process.env.NODE_ENV === 'development')");
    changed = true;
  }
  
  if (content.includes('import.meta.env.VITE_')) {
    content = content.replace(/import\.meta\.env\.VITE_/g, "process.env.NEXT_PUBLIC_");
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed Vite env vars in: ${file}`);
  }
});
