import { Metadata } from 'next';
import Link from 'next/link';
import * as React from 'react';

import { generateSEO } from '@/lib/seo';

import ButtonLink from '@/components/links/ButtonLink';

import { siteConfig } from '@/constant/config';

// Enhanced SEO metadata for SEO demo page
export const metadata: Metadata = generateSEO({
  title: 'SEO Demo',
  description:
    'Demonstration of advanced SEO features including server-side rendering, dynamic metadata, structured data, and social media optimization.',
  keywords: [
    'SEO',
    'Server-Side Rendering',
    'Next.js',
    'Metadata',
    'OpenGraph',
    'Structured Data',
  ],
  canonical: `${siteConfig.url}/seo-demo`,
  breadcrumbs: [
    { name: 'Home', url: siteConfig.url },
    { name: 'SEO Demo', url: `${siteConfig.url}/seo-demo` },
  ],
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'SEO Demo',
    description: 'Demonstration of advanced SEO features in Next.js',
    url: `${siteConfig.url}/seo-demo`,
    mainEntity: {
      '@type': 'SoftwareApplication',
      name: 'Next.js SEO Starter',
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web Browser',
      description: 'Advanced SEO-optimized Next.js starter template',
    },
  },
});

export default function SEODemoPage() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout min-h-screen py-20'>
          {/* Breadcrumb Navigation */}
          <nav className='mb-8 text-sm text-gray-600'>
            <ol className='flex items-center space-x-2'>
              <li>
                <Link href='/' className='hover:text-blue-600'>
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className='text-gray-900'>SEO Demo</li>
            </ol>
          </nav>

          <header className='mb-12'>
            <h1 className='text-5xl font-bold mb-6 text-gray-900'>
              Advanced SEO Features
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl'>
              This page demonstrates the comprehensive SEO implementation in our
              Next.js starter, including server-side rendering, dynamic
              metadata, and structured data.
            </p>
          </header>

          <div className='space-y-12'>
            {/* SEO Features Overview */}
            <section>
              <h2 className='text-3xl font-bold mb-6 text-gray-900'>
                ✅ What's Already Implemented
              </h2>
              <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                <div className='p-6 bg-green-50 border border-green-200 rounded-lg'>
                  <div className='flex items-center mb-3'>
                    <span className='text-green-600 text-2xl mr-2'>🚀</span>
                    <h3 className='text-lg font-semibold text-green-900'>
                      Server-Side Rendering
                    </h3>
                  </div>
                  <p className='text-green-700'>
                    Built-in SSR with Next.js App Router. Every page is rendered
                    on the server for optimal SEO and performance.
                  </p>
                </div>

                <div className='p-6 bg-blue-50 border border-blue-200 rounded-lg'>
                  <div className='flex items-center mb-3'>
                    <span className='text-blue-600 text-2xl mr-2'>📝</span>
                    <h3 className='text-lg font-semibold text-blue-900'>
                      Dynamic Metadata
                    </h3>
                  </div>
                  <p className='text-blue-700'>
                    Per-page metadata using{' '}
                    <code className='bg-blue-100 px-1 rounded'>
                      generateMetadata()
                    </code>{' '}
                    for dynamic routes and static metadata for static pages.
                  </p>
                </div>

                <div className='p-6 bg-purple-50 border border-purple-200 rounded-lg'>
                  <div className='flex items-center mb-3'>
                    <span className='text-purple-600 text-2xl mr-2'>🔗</span>
                    <h3 className='text-lg font-semibold text-purple-900'>
                      Structured Data
                    </h3>
                  </div>
                  <p className='text-purple-700'>
                    JSON-LD structured data for rich snippets, breadcrumbs, and
                    enhanced search engine understanding.
                  </p>
                </div>

                <div className='p-6 bg-orange-50 border border-orange-200 rounded-lg'>
                  <div className='flex items-center mb-3'>
                    <span className='text-orange-600 text-2xl mr-2'>📱</span>
                    <h3 className='text-lg font-semibold text-orange-900'>
                      Social Media
                    </h3>
                  </div>
                  <p className='text-orange-700'>
                    Complete OpenGraph and Twitter Card support for beautiful
                    social media sharing experiences.
                  </p>
                </div>

                <div className='p-6 bg-indigo-50 border border-indigo-200 rounded-lg'>
                  <div className='flex items-center mb-3'>
                    <span className='text-indigo-600 text-2xl mr-2'>🧭</span>
                    <h3 className='text-lg font-semibold text-indigo-900'>
                      Navigation
                    </h3>
                  </div>
                  <p className='text-indigo-700'>
                    Automatic breadcrumb generation with structured data markup
                    for better site navigation.
                  </p>
                </div>

                <div className='p-6 bg-red-50 border border-red-200 rounded-lg'>
                  <div className='flex items-center mb-3'>
                    <span className='text-red-600 text-2xl mr-2'>📍</span>
                    <h3 className='text-lg font-semibold text-red-900'>
                      Canonical URLs
                    </h3>
                  </div>
                  <p className='text-red-700'>
                    Automatic canonical URL generation to prevent duplicate
                    content issues and improve search rankings.
                  </p>
                </div>
              </div>
            </section>

            {/* Implementation Examples */}
            <section>
              <h2 className='text-3xl font-bold mb-6 text-gray-900'>
                Implementation Examples
              </h2>

              <div className='space-y-8'>
                <div className='border border-gray-200 rounded-lg overflow-hidden'>
                  <div className='bg-gray-50 px-6 py-4 border-b border-gray-200'>
                    <h3 className='text-lg font-semibold'>
                      Static Metadata (Current Page)
                    </h3>
                  </div>
                  <div className='p-6'>
                    <pre className='bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto'>
                      {`export const metadata: Metadata = generateSEO({
  title: 'SEO Demo',
  description: 'Demonstration of advanced SEO features...',
  keywords: ['SEO', 'Server-Side Rendering', 'Next.js'],
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'SEO Demo', url: '/seo-demo' }
  ],
  structuredData: {
    '@type': 'WebPage',
    name: 'SEO Demo',
    description: 'Advanced SEO demonstration'
  }
});`}
                    </pre>
                  </div>
                </div>

                <div className='border border-gray-200 rounded-lg overflow-hidden'>
                  <div className='bg-gray-50 px-6 py-4 border-b border-gray-200'>
                    <h3 className='text-lg font-semibold'>
                      Dynamic Metadata (Blog Posts)
                    </h3>
                  </div>
                  <div className='p-6'>
                    <pre className='bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto'>
                      {`export async function generateMetadata({ params }) {
  const post = await fetchBlogPost(params.slug);
  
  return generateSEO(
    createBlogPostSEO({
      title: post.title,
      description: post.description,
      author: post.author,
      publishedTime: post.publishedTime,
      tags: post.tags,
      slug: params.slug
    })
  );
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            {/* SEO Benefits */}
            <section>
              <h2 className='text-3xl font-bold mb-6 text-gray-900'>
                SEO Benefits
              </h2>
              <div className='bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200'>
                <div className='grid gap-6 md:grid-cols-2'>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                      Search Engine Optimization
                    </h3>
                    <ul className='space-y-2 text-gray-700'>
                      <li className='flex items-center'>
                        <span className='text-green-600 mr-2'>✓</span>
                        Improved search rankings
                      </li>
                      <li className='flex items-center'>
                        <span className='text-green-600 mr-2'>✓</span>
                        Rich snippets in search results
                      </li>
                      <li className='flex items-center'>
                        <span className='text-green-600 mr-2'>✓</span>
                        Better indexing by search engines
                      </li>
                      <li className='flex items-center'>
                        <span className='text-green-600 mr-2'>✓</span>
                        Faster page load times
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                      User Experience
                    </h3>
                    <ul className='space-y-2 text-gray-700'>
                      <li className='flex items-center'>
                        <span className='text-green-600 mr-2'>✓</span>
                        Better social media sharing
                      </li>
                      <li className='flex items-center'>
                        <span className='text-green-600 mr-2'>✓</span>
                        Improved navigation
                      </li>
                      <li className='flex items-center'>
                        <span className='text-green-600 mr-2'>✓</span>
                        Accessible content structure
                      </li>
                      <li className='flex items-center'>
                        <span className='text-green-600 mr-2'>✓</span>
                        Mobile-friendly optimization
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Live Examples */}
            <section>
              <h2 className='text-3xl font-bold mb-6 text-gray-900'>
                Live Examples
              </h2>
              <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
                <ButtonLink href='/' className='text-center'>
                  🏠 Home Page
                </ButtonLink>
                <ButtonLink
                  href='/about-us'
                  variant='outline'
                  className='text-center'
                >
                  👥 About Us
                </ButtonLink>
                <ButtonLink href='/blog' className='text-center'>
                  📝 Blog Index
                </ButtonLink>
                <ButtonLink
                  href='/blog/advanced-seo-nextjs'
                  variant='outline'
                  className='text-center'
                >
                  📄 Blog Post
                </ButtonLink>
              </div>
            </section>

            {/* Technical Details */}
            <section>
              <h2 className='text-3xl font-bold mb-6 text-gray-900'>
                Technical Implementation
              </h2>
              <div className='bg-gray-50 p-6 rounded-lg'>
                <h3 className='text-lg font-semibold mb-4'>
                  Key Files & Functions
                </h3>
                <div className='space-y-3 text-sm'>
                  <div className='flex items-center'>
                    <code className='bg-white px-2 py-1 rounded mr-3 font-mono'>
                      src/lib/seo.ts
                    </code>
                    <span>Central SEO utility functions</span>
                  </div>
                  <div className='flex items-center'>
                    <code className='bg-white px-2 py-1 rounded mr-3 font-mono'>
                      generateSEO()
                    </code>
                    <span>Main function for creating Metadata objects</span>
                  </div>
                  <div className='flex items-center'>
                    <code className='bg-white px-2 py-1 rounded mr-3 font-mono'>
                      generateMetadata()
                    </code>
                    <span>Dynamic metadata for server components</span>
                  </div>
                  <div className='flex items-center'>
                    <code className='bg-white px-2 py-1 rounded mr-3 font-mono'>
                      createBlogPostSEO()
                    </code>
                    <span>Specialized function for blog post metadata</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Navigation */}
            <section className='border-t border-gray-200 pt-8'>
              <div className='flex flex-wrap gap-4'>
                <ButtonLink href='/'>← Back to Home</ButtonLink>
                <ButtonLink href='/blog'>View Blog →</ButtonLink>
                <ButtonLink href='/components' variant='ghost'>
                  Components Demo
                </ButtonLink>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
