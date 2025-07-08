'use client';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

import FirstPrinciple from './FirstPrinciple';
import MessageFromCEO from './MessageFromCEO';

type SlideProps = {
  isActive: boolean;
  children: React.ReactNode;
};

const Slide: React.FC<SlideProps> = ({ isActive, children }) => (
  <div
    className={`transition-all duration-700 ease-in-out ${
      isActive
        ? 'opacity-100 z-10'
        : 'opacity-0 absolute top-0 left-0 right-0 pointer-events-none z-0'
    }`}
    style={{
      transform: isActive ? 'translateX(0)' : 'translateX(100%)',
    }}
  >
    {children}
  </div>
);

export default function AboutUspageSlider() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const slides = [
    {
      id: '1',
      title: 'From Reports to Real-Time Engagement',
      content: <FirstPrinciple />,
    },
    {
      id: '2',
      title: 'From Siloed to Scaled Impact',
      content: <MessageFromCEO />,
    },
  ];

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating, slides.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating, slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className='relative w-full overflow-hidden min-h-[500px] md:min-h-0'>
      <div className='container mx-auto relative z-10 px-4 sm:px-6 lg:px-8'>
        {/* Desktop slider */}
        <div className='relative mx-auto hidden md:block'>
          <div className='relative'>
            {slides.map((slide, index) => (
              <Slide key={slide.id} isActive={activeSlide === index}>
                <div className='pb-16 sm:pb-20 md:pb-8'>{slide.content}</div>
              </Slide>
            ))}
          </div>
        </div>

        {/* Mobile view */}
        <div className='md:hidden'>
          {slides.map((slide) => (
            <div key={slide.id} className='pb-16 sm:pb-20 md:pb-8'>
              {slide.content}
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className='navigation-controls hidden md:flex'>
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className='absolute left-4 md:left-6 lg:left-8 bottom-4 md:top-1/2 md:-translate-y-1/2 
            text-black dark:text-white w-10 h-10 md:w-12 md:h-12 flex justify-center items-center z-20 
            shadow-lg transition-all duration-300 border-2 border-[#FF512F] dark:border-[#FF512F] 
            rounded-full dark:bg-gray-800 hover:scale-105 active:scale-95 group'
            aria-label='Previous Slide'
          >
            <Image
              src='/images/assets/Arrow logo.png'
              alt='Previous'
              width={40}
              height={40}
              className='rotate-[210deg] w-[67.5%] top-2 right-1 object-contain absolute'
            />
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className='absolute right-4 md:right-6 lg:right-8 bottom-4 md:top-1/2 md:-translate-y-1/2 
            text-black dark:text-white w-10 h-10 md:w-12 md:h-12 flex justify-center items-center z-20 
            shadow-lg transition-all duration-300 border-2 border-[#FF512F] dark:border-[#FF512F] 
            rounded-full dark:bg-gray-800 hover:scale-105 active:scale-95 group'
            aria-label='Next Slide'
          >
            <Image
              src='/images/assets/Arrow logo.png'
              alt='Next'
              width={40}
              height={40}
              className='rotate-[28deg] w-[67.5%] bottom-2 left-[6px] object-contain absolute'
            />
          </button>
        </div>
      </div>
    </div>
  );
}
