import { Metadata } from 'next';
import * as React from 'react';

import { createBlogPostSEO, generateSEO } from '@/lib/seo';

// Enhanced SEO metadata for blog post using helper function
export const metadata: Metadata = generateSEO(
  createBlogPostSEO({
    title: 'Example Blog Post',
    description:
      'This is an example blog post demonstrating the enhanced SEO capabilities of our Next.js starter template.',
    author: 'Your Name',
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    tags: ['SEO', 'Next.js', 'Content', 'Tutorial'],
    category: 'Web Development',
  })
);

export default function ExamplePostPage() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout min-h-screen py-20'>
          <article>
            <header className='mb-8'>
              <h1 className='text-4xl font-bold mb-4'>Example Blog Post</h1>
              <p className='text-gray-600'>Published on January 1, 2024</p>
            </header>

            <div className='prose max-w-none'>
              <p>
                This is an example blog post that demonstrates the enhanced SEO
                capabilities of our Next.js starter template. Each page now has
                comprehensive meta tags, Open Graph data, and Twitter Card
                support.
              </p>

              <h2>SEO Features</h2>
              <ul>
                <li>Comprehensive meta tags</li>
                <li>Open Graph protocol support</li>
                <li>Twitter Card integration</li>
                <li>Structured data markup</li>
                <li>Custom OG images using local logo</li>
              </ul>

              <p>
                The SEO implementation ensures that your content is properly
                indexed by search engines and displays beautifully when shared
                on social media platforms.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
