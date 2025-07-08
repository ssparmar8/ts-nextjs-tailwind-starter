'use client';

import * as React from 'react';
import { useState } from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import Logo from '~/svg/Logo.svg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Components', href: '/components' },
    { name: 'About Us', href: '/about-us' },
  ];

  return (
    <header className='sticky top-0 z-50 bg-white shadow-sm'>
      <div className='layout'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center'>
            <UnstyledLink href='/' className='flex items-center space-x-2'>
              <Logo className='h-8 w-8' />
              <span className='text-lg font-semibold text-gray-900'>
                NextJS Starter
              </span>
            </UnstyledLink>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex md:space-x-8'>
            {navigation.map((item) => (
              <UnstyledLink
                key={item.name}
                href={item.href}
                className='text-gray-700 hover:text-gray-900 transition-colors duration-200'
              >
                {item.name}
              </UnstyledLink>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              type='button'
              className='text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900'
              aria-label='Toggle menu'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className='h-6 w-6'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {isMenuOpen ? (
                  <path d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path d='M4 6h16M4 12h16M4 18h16' />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='border-t border-gray-200 pb-4 md:hidden'>
            <div className='space-y-1 pt-4'>
              {navigation.map((item) => (
                <UnstyledLink
                  key={item.name}
                  href={item.href}
                  className='block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-200'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </UnstyledLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
