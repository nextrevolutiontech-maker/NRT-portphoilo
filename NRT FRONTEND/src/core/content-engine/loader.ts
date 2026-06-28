import { BaseMetadata, BaseMetadataSchema } from './schema';

export interface MDXModule {
  default: React.ComponentType;
  frontmatter?: Record<string, any>;
}

export interface LoadedContent {
  path: string;
  slug: string;
  component: React.ComponentType;
  metadata: BaseMetadata;
}

export const getAllContent = (): LoadedContent[] => {
  // Use eager loading to statically bundle the content for now.
  const mdxFiles = import.meta.glob<MDXModule>('../../../content/**/*.mdx', { eager: true });
  
  const contentList: LoadedContent[] = [];
  
  for (const path in mdxFiles) {
    const file = mdxFiles[path];
    if (file.frontmatter) {
       try {
           const validated = BaseMetadataSchema.parse(file.frontmatter);
           contentList.push({
               path,
               slug: validated.slug,
               component: file.default,
               metadata: validated
           });
       } catch (err) {
           console.error(`Metadata validation failed for ${path}:`, err);
       }
    }
  }
  
  return contentList;
}

export const getContentBySlug = (slug: string, type?: string): LoadedContent | undefined => {
  const allContent = getAllContent();
  return allContent.find(c => c.slug === slug);
}
