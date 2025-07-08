import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import * as React from 'react';

import {
  createBlogPostSEO,
  DynamicMetadataProps,
  generateSEO,
} from '@/lib/seo';

// Mock blog post data - in a real app, this would come from a CMS or database
const blogPosts = {
  'advanced-seo-nextjs': {
    title: 'Advanced SEO with Next.js 14 App Router',
    description:
      'Learn how to implement advanced SEO techniques using Next.js 14 App Router with server-side rendering, dynamic metadata, and structured data.',
    author: 'SEO Expert',
    publishedTime: '2024-01-15T10:00:00.000Z',
    modifiedTime: '2024-01-15T10:00:00.000Z',
    tags: ['SEO', 'Next.js', 'App Router', 'Metadata', 'Structured Data'],
    category: 'Web Development',
    content: `
      <h2>Introduction to Advanced SEO</h2>
      <p>Search Engine Optimization (SEO) is crucial for web applications. With Next.js 14 App Router, we can implement sophisticated SEO strategies using server-side rendering and dynamic metadata generation.</p>
      
      <h2>Key SEO Features</h2>
      <ul>
        <li>Dynamic metadata generation with generateMetadata()</li>
        <li>Structured data (JSON-LD) for rich snippets</li>
        <li>OpenGraph and Twitter Card optimization</li>
        <li>Canonical URLs for duplicate content prevention</li>
        <li>Breadcrumb navigation for better site structure</li>
      </ul>
      
      <h2>Implementation Benefits</h2>
      <p>By implementing these SEO techniques, your website will:</p>
      <ul>
        <li>Rank higher in search engine results</li>
        <li>Display rich snippets in search results</li>
        <li>Provide better social media sharing experience</li>
        <li>Improve user navigation and accessibility</li>
      </ul>
    `,
  },
  'typescript-best-practices': {
    title: 'TypeScript Best Practices for Next.js',
    description:
      'Discover the best practices for using TypeScript in Next.js applications, including type safety, performance optimization, and maintainable code patterns.',
    author: 'TypeScript Developer',
    publishedTime: '2024-01-10T14:30:00.000Z',
    modifiedTime: '2024-01-12T09:15:00.000Z',
    tags: [
      'TypeScript',
      'Next.js',
      'Best Practices',
      'Type Safety',
      'Performance',
    ],
    category: 'Programming',
    content: `
      <h2>Why TypeScript with Next.js?</h2>
      <p>TypeScript provides excellent developer experience and type safety for Next.js applications. Here are the key benefits and best practices.</p>
      
      <h2>Essential TypeScript Patterns</h2>
      <ul>
        <li>Proper typing for API routes and middleware</li>
        <li>Component prop interfaces and generics</li>
        <li>Custom hooks with proper return types</li>
        <li>Server component and client component distinctions</li>
      </ul>
      
      <h2>Performance Considerations</h2>
      <p>Learn how to optimize TypeScript compilation and bundle size in Next.js applications.</p>
    `,
  },
} as const;

// Dynamic metadata generation - this runs on the server for each request
export async function generateMetadata({
  params,
}: DynamicMetadataProps): Promise<Metadata> {
  const slug = params?.slug as string;

  // In a real app, you might fetch this data from an API or database
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  // Generate enhanced SEO metadata for this specific blog post
  return generateSEO(
    createBlogPostSEO({
      title: post.title,
      description: post.description,
      author: post.author,
      publishedTime: post.publishedTime,
      modifiedTime: post.modifiedTime,
      tags: [...post.tags], // Convert readonly array to mutable
      category: post.category,
      slug,
    })
  );
}

// Generate static params for static generation (optional)
export async function generateStaticParams() {
  // In a real app, you might fetch this from an API
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

interface BlogPostPageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <main>
      <section className='bg-white'>
        <div className='layout min-h-screen py-20'>
          {/* Breadcrumb Navigation */}
          <nav className='mb-8 text-sm text-gray-600'>
            <ol className='flex items-center space-x-2'>
              <li>
                <a href='/' className='hover:text-blue-600'>
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <a href='/blog' className='hover:text-blue-600'>
                  Blog
                </a>
              </li>
              <li>/</li>
              <li className='text-gray-900'>{post.title}</li>
            </ol>
          </nav>

          <article>
            <header className='mb-12'>
              <h1 className='text-5xl font-bold mb-6 text-gray-900'>
                {post.title}
              </h1>

              <div className='flex flex-wrap items-center gap-4 text-gray-600 mb-6'>
                <span>By {post.author}</span>
                <span>•</span>
                <time dateTime={post.publishedTime}>
                  {new Date(post.publishedTime).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>•</span>
                <span className='text-blue-600'>{post.category}</span>
              </div>

              {/* Tags */}
              <div className='flex flex-wrap gap-2'>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className='px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div
              className='prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700'
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <footer className='mt-12 pt-8 border-t border-gray-200'>
              <div className='text-sm text-gray-600'>
                <p>
                  Last updated:{' '}
                  {new Date(post.modifiedTime).toLocaleDateString()}
                </p>
              </div>
            </footer>
          </article>
        </div>
      </section>
    </main>
  );
}
