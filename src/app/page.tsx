import { Metadata } from 'next';
import Image from 'next/image';
import * as React from 'react';
import '@/lib/env';

import { generateSEO, pageSEOConfigs } from '@/lib/seo';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import Logo from '~/images/assets/rklogo_black.png';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

// Enhanced SEO metadata for home page
export const metadata: Metadata = generateSEO({
  ...pageSEOConfigs.home,
});

export default function HomePage() {
  return (
    <section className='bg-white'>
      <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
        <Image
          src={Logo}
          alt='Logo'
          className='h-16 w-auto object-contain'
          width={0}
          height={0}
          sizes='100vw'
          priority
        />
        <h1 className='mt-4'>Next.js + Tailwind CSS + TypeScript Starter</h1>
        <p className='mt-2 text-sm text-gray-800'>
          A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
          Import, Seo, Link component, pre-configured with Husky{' '}
        </p>
        <p className='mt-2 text-sm text-gray-700'>
          <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
            See the repository
          </ArrowLink>
        </p>

        <div className='mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center'>
          <ButtonLink href='/components' variant='light'>
            See all components
          </ButtonLink>
          <ButtonLink href='/about-us' variant='outline'>
            About Us
          </ButtonLink>
        </div>

        <UnstyledLink
          href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter'
          className='mt-4'
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            width='92'
            height='32'
            src='https://vercel.com/button'
            alt='Deploy with Vercel'
          />
        </UnstyledLink>
      </div>
    </section>
  );
}
