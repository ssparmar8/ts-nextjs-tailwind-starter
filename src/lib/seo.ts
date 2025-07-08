import { Metadata } from 'next';

import { siteConfig } from '@/constant/config';

export type SEOProps = {
  title: string;
  description: string;
  siteName?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  locale?: string;
  alternateLocales?: string[];
  // Enhanced features
  breadcrumbs?: BreadcrumbItem[];
  structuredData?: Record<string, unknown>;
};

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export type DynamicMetadataProps = {
  params?: { [key: string]: string | string[] };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export function generateSEO({
  title,
  description,
  siteName = siteConfig.title,
  canonical,
  ogImage,
  ogType = 'website',
  noindex = false,
  keywords = [],
  author,
  publishedTime,
  modifiedTime,
  locale = 'en_US',
  alternateLocales = [],
  breadcrumbs,
  structuredData,
}: SEOProps): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  const url = canonical || siteConfig.url;

  // Use the local logo as default OG image
  const defaultOgImage = `${siteConfig.url}/images/rklogo_black.png`;
  const ogImageUrl = ogImage || defaultOgImage;

  // Build structured data
  const jsonLd: Record<string, unknown>[] = [];

  // Add WebSite structured data
  jsonLd.push({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteConfig.url,
    description: siteConfig.description,
  });

  // Add Organization structured data
  jsonLd.push({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteConfig.url,
    logo: defaultOgImage,
  });

  // Add breadcrumbs structured data
  if (breadcrumbs && breadcrumbs.length > 0) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    });
  }

  // Add custom structured data
  if (structuredData) {
    jsonLd.push(structuredData);
  }

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    authors: author ? [{ name: author }] : undefined,
    creator: author,
    publisher: siteName,
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteName}`,
        },
      ],
      locale,
      alternateLocale: alternateLocales,
      type: ogType,
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImageUrl],
      creator: author ? `@${author}` : undefined,
      site: siteName,
    },
    alternates: {
      canonical: url,
      languages: alternateLocales.reduce((acc, locale) => {
        acc[locale] = `${url}/${locale}`;
        return acc;
      }, {} as Record<string, string>),
    },
    other: {
      'apple-mobile-web-app-title': siteName,
      'application-name': siteName,
      'msapplication-TileColor': '#ffffff',
      'theme-color': '#ffffff',
      // Add structured data as JSON-LD
      'script:ld+json': JSON.stringify(jsonLd),
    },
  };
}

// Enhanced function for dynamic metadata generation
export async function generateDynamicSEO(
  baseConfig: Omit<SEOProps, 'title' | 'description'>,
  { params, searchParams }: DynamicMetadataProps,
  dataFetcher?: (
    params: unknown,
    searchParams: unknown
  ) => Promise<{ title: string; description: string; [key: string]: unknown }>
): Promise<SEOProps> {
  let dynamicData = { title: 'Page', description: 'Dynamic page content' };

  if (dataFetcher) {
    try {
      dynamicData = await dataFetcher(params, searchParams);
    } catch (error) {
      // Error handling for dynamic data fetching
      dynamicData = {
        title: 'Error Loading Page',
        description: 'There was an error loading this page.',
      };
    }
  }

  return {
    ...baseConfig,
    ...dynamicData,
    // Add canonical URL based on current path
    canonical:
      baseConfig.canonical || `${siteConfig.url}${getCurrentPath(params)}`,
  };
}

// Helper function to construct current path from params
function getCurrentPath(params?: { [key: string]: string | string[] }): string {
  if (!params) return '';

  const pathSegments = Object.values(params)
    .map((value) => {
      if (Array.isArray(value)) {
        return value.join('/');
      }
      return value;
    })
    .filter(Boolean);

  return '/' + pathSegments.join('/');
}

// Pre-configured SEO for different page types
export const pageSEOConfigs = {
  home: {
    title: 'Home',
    description:
      'Welcome to our Next.js starter template with TypeScript and Tailwind CSS. Build modern web applications with the best developer experience.',
    keywords: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'React',
      'Web Development',
      'Starter Template',
    ],
    ogType: 'website' as const,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Home',
      description:
        'Welcome to our Next.js starter template with TypeScript and Tailwind CSS.',
    },
  },
  about: {
    title: 'About Us',
    description:
      'Learn more about our company, mission, and the team behind our innovative solutions. Discover our story and values.',
    keywords: ['About', 'Company', 'Team', 'Mission', 'Values', 'Story'],
    ogType: 'website' as const,
    breadcrumbs: [
      { name: 'Home', url: siteConfig.url },
      { name: 'About Us', url: `${siteConfig.url}/about-us` },
    ],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Us',
      description:
        'Learn more about our company, mission, and the team behind our innovative solutions.',
    },
  },
  components: {
    title: 'Components',
    description:
      'Explore our comprehensive collection of pre-built React components with TypeScript support and Tailwind CSS styling.',
    keywords: [
      'Components',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'UI Library',
      'Design System',
    ],
    ogType: 'website' as const,
    breadcrumbs: [
      { name: 'Home', url: siteConfig.url },
      { name: 'Components', url: `${siteConfig.url}/components` },
    ],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Components',
      description:
        'Explore our comprehensive collection of pre-built React components.',
    },
  },
  notFound: {
    title: 'Page Not Found',
    description:
      'The page you are looking for does not exist. Please check the URL or return to the homepage.',
    keywords: ['404', 'Not Found', 'Error'],
    ogType: 'website' as const,
    noindex: true,
  },
};

export type BlogPostSEOProps = {
  title: string;
  description: string;
  author: string;
  publishedTime: string;
  modifiedTime?: string;
  tags?: string[];
  category?: string;
  ogImage?: string;
  canonical?: string;
  locale?: string;
  alternateLocales?: string[];
  slug?: string;
};

export function createBlogPostSEO({
  title,
  description,
  author,
  publishedTime,
  modifiedTime,
  tags = [],
  category,
  ogImage,
  canonical,
  locale = 'en_US',
  alternateLocales = [],
  slug,
}: BlogPostSEOProps): SEOProps {
  const blogUrl = slug ? `${siteConfig.url}/blog/${slug}` : canonical;

  return {
    title,
    description,
    siteName: siteConfig.title,
    canonical: blogUrl,
    ogImage,
    ogType: 'article',
    keywords: tags,
    author,
    publishedTime,
    modifiedTime,
    locale,
    alternateLocales,
    breadcrumbs: [
      { name: 'Home', url: siteConfig.url },
      { name: 'Blog', url: `${siteConfig.url}/blog` },
      { name: title, url: blogUrl || `${siteConfig.url}/blog` },
    ],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description,
      author: {
        '@type': 'Person',
        name: author,
      },
      publisher: {
        '@type': 'Organization',
        name: siteConfig.title,
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/images/rklogo_black.png`,
        },
      },
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': blogUrl,
      },
      image: ogImage || `${siteConfig.url}/images/rklogo_black.png`,
      articleSection: category,
      keywords: tags.join(', '),
    },
  };
}
