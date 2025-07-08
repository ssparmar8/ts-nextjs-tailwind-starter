import { siteConfig } from '@/constant/config';

export type SitemapEntry = {
  url: string;
  lastModified?: string;
  changeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  priority?: number;
};

// Legacy functions for custom sitemap generation (if needed)
// Note: The app now uses Next.js built-in sitemap.ts functionality

// Generate sitemap entries for static pages
export function getStaticSitemapEntries(): SitemapEntry[] {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/about-us`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/components`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/seo-demo`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}

// Generate sitemap entries for blog posts
export function getBlogSitemapEntries(): SitemapEntry[] {
  // In a real app, you would fetch this from your CMS or database
  const blogPosts = [
    {
      slug: 'advanced-seo-nextjs',
      lastModified: '2024-01-15T10:00:00.000Z',
    },
    {
      slug: 'typescript-best-practices',
      lastModified: '2024-01-12T09:15:00.000Z',
    },
    {
      slug: 'example-post',
      lastModified: '2024-01-01T00:00:00.000Z',
    },
  ];

  return blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
}

// Generate complete sitemap (legacy - now handled by src/app/sitemap.ts)
export function generateSitemap(): SitemapEntry[] {
  return [...getStaticSitemapEntries(), ...getBlogSitemapEntries()];
}
