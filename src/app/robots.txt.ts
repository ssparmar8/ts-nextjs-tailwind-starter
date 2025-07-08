import { MetadataRoute } from 'next';

import { siteConfig } from '@/constant/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
