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

  if (content.includes('async function async async generateMetadata')) {
      content = content.replace(/export async function async async generateMetadata/g, 'export async function generateMetadata');
      changed = true;
  }
  
  if (content.includes('async function async async')) {
      content = content.replace(/export async function async async/g, 'export async function');
      changed = true;
  }
  
  if (content.includes('async async generateMetadata')) {
      content = content.replace(/export async async generateMetadata/g, 'export async function generateMetadata');
      changed = true;
  }

  // Fallback catch-all for any async async async...
  content = content.replace(/async\s+async\s+/g, 'async ');

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Cleaned up async syntax in: ${file}`);
  }
});
