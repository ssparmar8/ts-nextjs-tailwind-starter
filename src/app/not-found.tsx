import { Metadata } from 'next';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import { generateSEO, pageSEOConfigs } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  ...pageSEOConfigs.notFound,
});

export default function NotFound() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <RiAlarmWarningFill
            size={60}
            className='drop-shadow-glow animate-flicker text-red-500'
          />
          <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
          <a href='/'>Back to home</a>
        </div>
      </section>
    </main>
  );
}
