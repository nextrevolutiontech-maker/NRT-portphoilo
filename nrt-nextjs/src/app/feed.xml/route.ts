import { Feed } from 'feed';
import { getAllContent } from '@/core/content-engine/loader';

export async function GET() {
  const baseUrl = 'https://www.nextrevolutiontech.tech';
  
  const feed = new Feed({
    title: "Next Revolution Tech Knowledge Hub",
    description: "Enterprise software, custom ERPs, and AI automation insights.",
    id: baseUrl,
    link: baseUrl,
    language: "en",
    image: `${baseUrl}/nrt-logo.png`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Next Revolution Tech`,
    generator: "Feed for NRT Next.js",
    author: {
      name: "Muhammad Ahsan Khan",
      email: "nextrevolutiontech@gmail.com",
      link: baseUrl
    }
  });

  const allContent = getAllContent();

  allContent.forEach((content) => {
    const isCaseStudy = content.path.includes('case-studies');
    const prefix = isCaseStudy ? '/case-studies' : '/blog';
    
    feed.addItem({
      title: content.metadata.title,
      id: `${baseUrl}${prefix}/${content.slug}`,
      link: `${baseUrl}${prefix}/${content.slug}`,
      description: content.metadata.description,
      content: content.metadata.description, // Can be full content if needed
      author: [
        {
          name: content.metadata.author || "Next Revolution Tech",
        },
      ],
      date: new Date(content.metadata.publishedAt || Date.now()),
      image: content.metadata.coverImage ? `${baseUrl}${content.metadata.coverImage}` : undefined,
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
