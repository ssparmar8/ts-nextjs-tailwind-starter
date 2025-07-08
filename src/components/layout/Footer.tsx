import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import Logo from '~/svg/Logo.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ],
    resources: [
      { name: 'Components', href: '/components' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Support', href: '/support' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/theodorusclarence/ts-nextjs-tailwind-starter',
      icon: (
        <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
          <path
            fillRule='evenodd'
            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: (
        <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
          <path
            fillRule='evenodd'
            d='M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className='bg-gray-50'>
      <div className='layout'>
        <div className='py-12'>
          {/* Main Footer Content */}
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5'>
            {/* Brand Section */}
            <div className='lg:col-span-2'>
              <div className='flex items-center space-x-2'>
                <Logo className='h-8 w-8' />
                <span className='text-lg font-semibold text-gray-900'>
                  NextJS Starter
                </span>
              </div>
              <p className='mt-4 text-sm text-gray-600 max-w-md'>
                A modern Next.js starter template with TypeScript, Tailwind CSS,
                and best practices for building fast, scalable web applications.
              </p>
              <div className='mt-6 flex space-x-4'>
                {socialLinks.map((item) => (
                  <UnstyledLink
                    key={item.name}
                    href={item.href}
                    className='text-gray-400 hover:text-gray-500 transition-colors duration-200'
                    aria-label={item.name}
                  >
                    {item.icon}
                  </UnstyledLink>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wider'>
                Company
              </h3>
              <ul className='mt-4 space-y-2'>
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <UnstyledLink
                      href={item.href}
                      className='text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200'
                    >
                      {item.name}
                    </UnstyledLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wider'>
                Resources
              </h3>
              <ul className='mt-4 space-y-2'>
                {footerLinks.resources.map((item) => (
                  <li key={item.name}>
                    <UnstyledLink
                      href={item.href}
                      className='text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200'
                    >
                      {item.name}
                    </UnstyledLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className='text-sm font-semibold text-gray-900 uppercase tracking-wider'>
                Legal
              </h3>
              <ul className='mt-4 space-y-2'>
                {footerLinks.legal.map((item) => (
                  <li key={item.name}>
                    <UnstyledLink
                      href={item.href}
                      className='text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200'
                    >
                      {item.name}
                    </UnstyledLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className='mt-8 pt-8 border-t border-gray-200'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
              <p className='text-sm text-gray-600'>
                © {currentYear} NextJS Starter. All rights reserved.
              </p>
              <p className='mt-2 md:mt-0 text-sm text-gray-600'>
                Built with ❤️ by{' '}
                <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
                  Theodorus Clarence
                </UnderlineLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
