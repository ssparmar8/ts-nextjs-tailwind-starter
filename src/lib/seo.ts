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
}: SEOProps): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  const url = canonical || siteConfig.url;

  // Use the local logo as default OG image
  const defaultOgImage = `${siteConfig.url}/images/rklogo_black.png`;
  const ogImageUrl = ogImage || defaultOgImage;

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
    },
  };
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
  },
  about: {
    title: 'About Us',
    description:
      'Learn more about our company, mission, and the team behind our innovative solutions. Discover our story and values.',
    keywords: ['About', 'Company', 'Team', 'Mission', 'Values', 'Story'],
    ogType: 'website' as const,
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
};

export function createBlogPostSEO({
  title,
  description,
  author,
  publishedTime,
  modifiedTime,
  tags = [],
  category: _category,
  ogImage,
  canonical,
  locale = 'en_US',
  alternateLocales = [],
}: BlogPostSEOProps): SEOProps {
  return {
    title,
    description,
    siteName: siteConfig.title,
    canonical,
    ogImage,
    ogType: 'article',
    keywords: tags,
    author,
    publishedTime,
    modifiedTime,
    locale,
    alternateLocales,
  };
}
