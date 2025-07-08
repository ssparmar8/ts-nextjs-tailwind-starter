'use client';
import Image from 'next/image';
import React from 'react';

import CanvasDots from '../components/CanvasDots'; // keep path as is, adjust if your folder is actually named 'component'

const FirstPrinciple: React.FC = () => {
  return (
    <>
      <div className='hidden sm:block'>
        <CanvasDots />
      </div>

      {/* First Principles Section */}
      <section className='px-4 md:px-8 pt-16 md:pt-24 relative overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-4'>
              <span className='text-[#374151] dark:text-white'>Our</span>
              <span className='relative inline-block mx-3'>
                <span className='relative z-10 text-[#FF512F]'>
                  First Principles
                </span>
                <svg
                  className='absolute -bottom-2 left-0 w-full'
                  height='10'
                  viewBox='0 0 100 10'
                  preserveAspectRatio='none'
                >
                  <path
                    d='M0 5c30-5 70-5 100 0'
                    stroke='#FF512F'
                    strokeWidth='2'
                    fill='none'
                    className='transition-all duration-300'
                  />
                </svg>
              </span>
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
            {/* Repeat your cards below — I kept the same structure. */}
            {/* Instead of <img>, better to use <Image> from 'next/image' */}
            {/* For brevity, here’s one card as an example: */}

            <div className='bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 md:p-8 border border-[#FF512F]/20 shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden group'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#FF512F]/5 to-[#FF8A63]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative z-10'>
                <div className='flex items-center gap-2 md:gap-4 mb-3 md:mb-6'>
                  <div className='bg-gradient-to-br from-[#FF512F]/20 to-[#FF8A63]/20 p-2 md:p-3 rounded-xl'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 md:h-6 md:w-6 text-[#FF512F]'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <h4 className='text-lg md:text-xl font-semibold text-[#374151] dark:text-gray-100'>
                    People-First Leadership
                  </h4>
                </div>
                <div className='w-full bg-gradient-to-r from-[#FF512F]/20 to-[#FF8A63]/20 mb-3 md:mb-6 h-[2px]' />
                <div className='flex flex-col md:flex-row gap-3 md:gap-6'>
                  <div className='flex-1'>
                    <p className='text-base md:text-lg text-gray-600 dark:text-gray-400 pl-2 mb-2 md:mb-4'>
                      Our leadership team is grounded in a deep commitment to
                      the well-being of our employees, customers, and the
                      communities we serve...
                    </p>
                  </div>
                  <div className='w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0 border-2 border-[#FF512F]/20 shadow-[0_4px_12px_rgba(0,0,0,0.08)]'>
                    <div className='w-full h-full relative overflow-hidden'>
                      <Image
                        src='https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                        alt='People-First Leadership'
                        fill
                        className='object-cover'
                        sizes='(max-width: 768px) 96px, 128px'
                      />
                      <div className='absolute inset-0 bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10 mix-blend-multiply opacity-50'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Repeat your other cards exactly the same way (as you had) */}
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstPrinciple;
