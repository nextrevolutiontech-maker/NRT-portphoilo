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

  // React 19 strict ref callback fix: el => ref.current[index] = el TO el => { ref.current[index] = el; }
  const regex = /ref=\{([a-zA-Z0-9_]+)\s*=>\s*([^\{]+?)\}/g;
  content = content.replace(regex, (match, param, body) => {
    // If it already has curly braces, ignore
    if (body.trim().startsWith('{')) return match;
    changed = true;
    return `ref={${param} => { ${body.trim()}; }}`;
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed refs in: ${file}`);
  }
});
