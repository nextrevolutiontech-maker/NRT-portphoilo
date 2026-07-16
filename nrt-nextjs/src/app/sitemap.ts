import { MetadataRoute } from 'next'
import { getAllContent } from '@/core/content-engine/loader'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nextrevolutiontech.tech'
  
  // Static Routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/portfolio',
    '/process',
    '/pricing',
    '/privacy-policy',
    '/terms',
    '/case-studies',
    '/blog'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic MDX Content (Blog & Case Studies)
  const allContent = getAllContent()
  
  const contentRoutes = allContent.map((content) => {
    const isCaseStudy = content.path.includes('case-studies');
    const prefix = isCaseStudy ? '/case-studies' : '/blog';
    
    return {
      url: `${baseUrl}${prefix}/${content.slug}`,
      lastModified: content.metadata.updatedAt ? new Date(content.metadata.updatedAt) : new Date(content.metadata.publishedAt || Date.now()),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  })

  // Dynamic Services
  const services = [
    "custom-software-development",
    "saas-development",
    "ai-automation"
  ].map(slug => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
  }))

  return [...staticRoutes, ...services, ...contentRoutes]
}
