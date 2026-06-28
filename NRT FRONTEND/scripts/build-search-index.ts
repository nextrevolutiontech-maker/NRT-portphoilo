import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');
const outputFile = path.join(process.cwd(), 'generated', 'search-index.json');

interface SearchEntry {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  type: string;
  category: string[];
}

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else if (file.endsWith('.mdx') || file.endsWith('.json')) {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

function buildSearchIndex() {
  const files = getAllFiles(contentDir);
  const searchIndex: SearchEntry[] = [];

  for (const filePath of files) {
    if (filePath.endsWith('.mdx')) {
      const rawContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(rawContent);
      
      if (data.id && data.title) {
        // Simple text extraction from markdown
        const cleanText = content
          .replace(/<[^>]*>?/gm, '') // Remove HTML/JSX tags
          .replace(/[#*`_\[\]]/g, '') // Remove markdown syntax
          .replace(/\n+/g, ' ')
          .substring(0, 1000); // Take first 1000 chars for indexing
        
        // Determine type based on folder
        const relPath = path.relative(contentDir, filePath);
        const type = relPath.split(path.sep)[0];
          
        searchIndex.push({
          id: data.id,
          title: data.title,
          slug: data.slug || data.id,
          description: data.description || '',
          content: cleanText,
          type: type,
          category: data.industry || data.service || []
        });
      }
    }
  }

  // Ensure generated directory exists
  const genDir = path.dirname(outputFile);
  if (!fs.existsSync(genDir)) {
    fs.mkdirSync(genDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, JSON.stringify(searchIndex, null, 2));
  console.log(`✅ Search index generated with ${searchIndex.length} entries.`);
}

buildSearchIndex();
