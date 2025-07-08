# SEO Implementation Guide

This guide covers the comprehensive SEO implementation in this Next.js starter template, including server-side rendering, dynamic metadata, and advanced optimization techniques.

## 🚀 Overview

This starter template includes a production-ready SEO implementation with:

- **Server-Side Rendering (SSR)** - Built-in with Next.js App Router
- **Dynamic Metadata Generation** - Per-page `<title>` and `<meta>` tags
- **Structured Data (JSON-LD)** - Rich snippets and enhanced search understanding
- **OpenGraph & Twitter Cards** - Beautiful social media sharing
- **Automatic Sitemap Generation** - Dynamic XML sitemaps
- **Breadcrumb Navigation** - With structured data markup
- **Canonical URLs** - Prevent duplicate content issues

## 📁 File Structure

```text
src/
├── lib/
│   ├── seo.ts          # Core SEO utilities and configurations
│   └── sitemap.ts      # Sitemap generation utilities
├── app/
│   ├── layout.tsx      # Root layout with global SEO
│   ├── sitemap.xml/    # Dynamic sitemap API route
│   ├── robots.txt/     # Dynamic robots.txt API route
│   └── [pages]/        # Individual pages with metadata
└── constant/
    └── config.ts       # Site configuration
```

## 🛠 Core Functions

### 1. `generateSEO()`

The main function for creating Next.js Metadata objects:

```typescript
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Page Title',
  description: 'Page description for SEO',
  keywords: ['keyword1', 'keyword2'],
  canonical: 'https://example.com/page',
  breadcrumbs: [
    { name: 'Home', url: 'https://example.com' },
    { name: 'Page', url: 'https://example.com/page' },
  ],
  structuredData: {
    '@type': 'WebPage',
    name: 'Page Title',
  },
});
```

### 2. `generateMetadata()` for Dynamic Routes

For dynamic routes that need server-side data fetching:

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const data = await fetchPageData(params.slug);

  return generateSEO({
    title: data.title,
    description: data.description,
    canonical: \`\${siteConfig.url}/\${params.slug}\`
  });
}
```

### 3. `createBlogPostSEO()`

Specialized function for blog posts with enhanced article markup:

```typescript
export const metadata: Metadata = generateSEO(
  createBlogPostSEO({
    title: 'Blog Post Title',
    description: 'Blog post description',
    author: 'Author Name',
    publishedTime: '2024-01-01T00:00:00.000Z',
    tags: ['tag1', 'tag2'],
    category: 'Technology',
    slug: 'blog-post-slug',
  })
);
```

## 🎯 Implementation Examples

### Static Pages

```typescript
// src/app/about/page.tsx
import { Metadata } from 'next';
import { generateSEO, pageSEOConfigs } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  ...pageSEOConfigs.about,
});
```

### Dynamic Pages

```typescript
// src/app/blog/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await fetchBlogPost(params.slug);

  return generateSEO(
    createBlogPostSEO({
      ...post,
      slug: params.slug,
    })
  );
}
```

## ✅ What's Already Working

Your Next.js application already has comprehensive SEO implementation:

1. **Server-Side Rendering** - All pages render on the server by default ✅
2. **Per-Page Metadata** - Each page has customized `<title>` and `<meta>` tags ✅
3. **Dynamic Routes** - Blog posts use `generateMetadata()` for server-side SEO ✅
4. **Structured Data** - JSON-LD markup for rich snippets ✅
5. **Social Media** - OpenGraph and Twitter Card support ✅
6. **Breadcrumbs** - Navigation with structured data ✅
7. **Sitemaps** - Multiple sitemap generation systems:
   - Next.js built-in: `/sitemap.xml` (using `src/app/sitemap.ts`) ✅
   - next-sitemap: Additional sitemap generation for complex sites ✅
8. **Robots.txt** - SEO-friendly crawler instructions at `/robots.txt` ✅
9. **Performance** - Optimized Core Web Vitals and caching ✅
10. **Accessibility** - Skip links, ARIA labels, semantic HTML ✅

## 🚀 Test Your SEO

Visit these pages to see the SEO implementation in action:

- **Home**: `/` - Static metadata with structured data
- **About**: `/about-us` - Static page with breadcrumbs
- **Blog Index**: `/blog` - Blog listing with collection schema
- **Blog Posts**: `/blog/[slug]` - Dynamic metadata with article schema
- **SEO Demo**: `/seo-demo` - Comprehensive SEO showcase
- **Sitemap**: `/sitemap.xml` - Auto-generated XML sitemap
- **Robots**: `/robots.txt` - Search engine instructions

## 🛠 Customization

To customize for your needs:

1. Update `siteConfig` in `/src/constant/config.ts`
2. Modify `pageSEOConfigs` in `/src/lib/seo.ts`
3. Add your social media URLs to the organization schema
4. Customize structured data for your content types

---

Your SEO implementation is production-ready! 🎉
