import { Metadata } from 'next';
import Image from 'next/image';
import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';

import Logo from '~/images/assets/rklogo_black.png';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn more about our company, mission, and the team behind our innovative solutions.',
};

export default function AboutUsPage() {
  return (
    <section className='bg-white'>
      <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12'>
        <div className='w-full max-w-4xl text-center'>
          <Image
            src={Logo}
            alt='Logo'
            className='mx-auto h-16 w-auto object-contain'
            width={0}
            height={0}
            sizes='100vw'
            priority
          />
          <h1 className='mt-4'>About Us</h1>
          <p className='mt-6 text-lg text-gray-700'>
            We are a passionate team dedicated to creating innovative solutions
            that make a difference in people's lives.
          </p>
        </div>

        {/* Mission Section */}
        <div className='mt-16 w-full max-w-6xl'>
          <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-3'>
            <div className='text-center'>
              <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100'>
                <svg
                  className='h-8 w-8 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-semibold text-gray-900'>
                Innovation
              </h3>
              <p className='text-gray-600'>
                We constantly push the boundaries of what's possible, creating
                cutting-edge solutions for tomorrow's challenges.
              </p>
            </div>

            <div className='text-center'>
              <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100'>
                <svg
                  className='h-8 w-8 text-green-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-semibold text-gray-900'>
                Collaboration
              </h3>
              <p className='text-gray-600'>
                We believe that the best results come from working together,
                fostering an environment of open communication and teamwork.
              </p>
            </div>

            <div className='text-center'>
              <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100'>
                <svg
                  className='h-8 w-8 text-purple-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='mb-2 text-xl font-semibold text-gray-900'>
                Quality
              </h3>
              <p className='text-gray-600'>
                Excellence is not just a goal, but a standard we maintain in
                every project we undertake.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className='mt-20 w-full max-w-4xl text-center'>
          <h2 className='mb-8 text-3xl font-bold text-gray-900'>Our Story</h2>
          <div className='space-y-6 text-left text-gray-700'>
            <p className='text-lg leading-relaxed'>
              Founded with a vision to bridge the gap between technology and
              human needs, our company has grown from a small startup to a
              trusted partner for businesses worldwide.
            </p>
            <p className='leading-relaxed'>
              Our journey began when we recognized that many organizations
              struggled to leverage technology effectively. We set out to create
              solutions that are not only powerful but also intuitive and
              accessible to everyone.
            </p>
            <p className='leading-relaxed'>
              Today, we continue to innovate and evolve, always keeping our core
              values at the heart of everything we do. We're not just building
              products; we're crafting experiences that empower people and
              organizations to achieve their goals.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className='mt-16 text-center'>
          <h3 className='mb-4 text-2xl font-semibold text-gray-900'>
            Ready to work with us?
          </h3>
          <p className='mb-8 text-gray-600'>
            We'd love to hear about your project and explore how we can help.
          </p>
          <div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
            <ButtonLink href='/contact' variant='primary'>
              Get in Touch
            </ButtonLink>
            <ButtonLink href='/projects' variant='outline'>
              View Our Work
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
