import { Metadata } from 'next';
import Link from 'next/link';
import * as React from 'react';

import { generateSEO } from '@/lib/seo';

import { siteConfig } from '@/constant/config';

// Static metadata for the blog index page
export const metadata: Metadata = generateSEO({
  title: 'Blog',
  description:
    'Read our latest articles about web development, Next.js, TypeScript, and modern frontend technologies.',
  keywords: [
    'Blog',
    'Articles',
    'Web Development',
    'Next.js',
    'TypeScript',
    'Frontend',
  ],
  canonical: `${siteConfig.url}/blog`,
  breadcrumbs: [
    { name: 'Home', url: siteConfig.url },
    { name: 'Blog', url: `${siteConfig.url}/blog` },
  ],
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog',
    description:
      'Read our latest articles about web development and modern technologies.',
    url: `${siteConfig.url}/blog`,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.title,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/rklogo_black.png`,
      },
    },
  },
});

// Mock blog post data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    slug: 'advanced-seo-nextjs',
    title: 'Advanced SEO with Next.js 14 App Router',
    description:
      'Learn how to implement advanced SEO techniques using Next.js 14 App Router with server-side rendering, dynamic metadata, and structured data.',
    author: 'SEO Expert',
    publishedTime: '2024-01-15T10:00:00.000Z',
    tags: ['SEO', 'Next.js', 'App Router'],
    category: 'Web Development',
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for Next.js',
    description:
      'Discover the best practices for using TypeScript in Next.js applications, including type safety, performance optimization, and maintainable code patterns.',
    author: 'TypeScript Developer',
    publishedTime: '2024-01-10T14:30:00.000Z',
    tags: ['TypeScript', 'Next.js', 'Best Practices'],
    category: 'Programming',
  },
  {
    slug: 'example-post',
    title: 'Example Blog Post',
    description:
      'This is an example blog post demonstrating the enhanced SEO capabilities of our Next.js starter template.',
    author: 'Your Name',
    publishedTime: '2024-01-01T00:00:00.000Z',
    tags: ['SEO', 'Next.js', 'Content'],
    category: 'Web Development',
  },
];

export default function BlogPage() {
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
              <li className='text-gray-900'>Blog</li>
            </ol>
          </nav>

          <header className='mb-12'>
            <h1 className='text-5xl font-bold mb-6 text-gray-900'>Blog</h1>
            <p className='text-xl text-gray-600 max-w-3xl'>
              Read our latest articles about web development, Next.js,
              TypeScript, and modern frontend technologies.
            </p>
          </header>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className='bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200'
              >
                <div className='p-6'>
                  <div className='mb-4'>
                    <span className='text-sm text-blue-600 font-medium'>
                      {post.category}
                    </span>
                    <time
                      className='block text-sm text-gray-500 mt-1'
                      dateTime={post.publishedTime}
                    >
                      {new Date(post.publishedTime).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }
                      )}
                    </time>
                  </div>

                  <h2 className='text-xl font-bold text-gray-900 mb-3'>
                    <Link
                      href={`/blog/${post.slug}`}
                      className='hover:text-blue-600 transition-colors'
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className='text-gray-600 mb-4 line-clamp-3'>
                    {post.description}
                  </p>

                  <div className='flex flex-wrap gap-2 mb-4'>
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className='px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-500'>
                      By {post.author}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className='text-blue-600 hover:text-blue-800 text-sm font-medium'
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
