import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const contentDirectory = path.join(process.cwd(), 'content');

export interface BaseMetadata {
  id: string;
  slug: string;
  title: string;
  description: string;
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
  cluster?: string;
  contentStage?: string;
  aiSummary?: string;
  keyTakeaways?: string[];
  estimatedReadTime?: number;
  persona?: string;
  [key: string]: any;
}

export interface LoadedContent {
  path: string;
  slug: string;
  metadata: BaseMetadata;
  content: string; // The raw MDX string
}

const getFilesRecursive = (dir: string): string[] => {
  if (!fs.existsSync(dir)) return [];
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursive(file));
    } else {
      if (file.endsWith('.mdx') || file.endsWith('.md')) {
        results.push(file);
      }
    }
  });
  return results;
};

export const getAllContent = (): LoadedContent[] => {
  const mdxFiles = getFilesRecursive(contentDirectory);
  const contentList: LoadedContent[] = [];

  for (const filePath of mdxFiles) {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Auto-calculate reading time
    const stats = readingTime(content);
    
    // Resolve slug (fallback to filename without extension)
    const slug = data.slug || path.basename(filePath).replace(/\.mdx?$/, '');
    
    contentList.push({
      path: filePath,
      slug,
      metadata: {
        id: data.id || slug,
        slug,
        title: data.title || '',
        description: data.description || '',
        publishedAt: data.publishedAt,
        updatedAt: data.updatedAt,
        author: data.author,
        cluster: data.cluster,
        contentStage: data.contentStage,
        aiSummary: data.aiSummary,
        keyTakeaways: data.keyTakeaways,
        estimatedReadTime: data.estimatedReadTime || Math.ceil(stats.minutes),
        persona: data.persona,
        ...data
      },
      content
    });
  }
  
  // Sort by publishedAt if available
  return contentList.sort((a, b) => {
    if (a.metadata.publishedAt && b.metadata.publishedAt) {
      return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    }
    return 0;
  });
};

export const getContentBySlug = (slug: string, type?: string): LoadedContent | undefined => {
  const allContent = getAllContent();
  return allContent.find(c => {
     if (type) {
         // If a type filter is provided, enforce it (e.g., 'article', 'case-study')
         // Content type could be inferred by parent folder name
         const folderName = path.basename(path.dirname(c.path));
         if (folderName === type || (folderName === 'articles' && type === 'article') || (folderName === 'case-studies' && type === 'case-study')) {
             return c.slug === slug;
         }
         return false;
     }
     return c.slug === slug;
  });
};

export const getSlugsByType = (type: string): string[] => {
    const all = getAllContent();
    return all.filter(c => {
         const folderName = path.basename(path.dirname(c.path));
         return folderName === type || (folderName === 'articles' && type === 'article') || (folderName === 'case-studies' && type === 'case-study') || (folderName === 'services' && type === 'service');
    }).map(c => c.slug);
};
