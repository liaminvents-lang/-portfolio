'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import SlidingImages from '@/components/home/SlidingImages';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';
import { LetterCollision } from '@/components/animations/textAnimations/scrollText';
import Magnetic from '@/components/animations/magnetic';
import Hero from '@/components/home/hero';

const slider1 = [
  {
    color: 'white',
    src: 'acadia.JPG'
  },
  {
    color: 'white',
    src: 'thegripper.PNG'
  },
  {
    color: 'white',
    src: 'woodnrock.png'
  },
  {
    color: 'white',
    src: 'Picture3.png'
  },
  {
    color: 'white',
    src: 'Picture2.png'
  },
  {
    color: 'white',
    src: 'Picture1.jpg'
  },
  {
    color: 'white',
    src: 'mirrorwall.png'
  }
];

const slider2 = [
  {
    color: 'white',
    src: 'robotmadepart2.JPG'
  },
  {
    color: 'white',
    src: 'UBCsalafront.JPG'
  },
  {
    color: 'white',
    src: 'robotmadeuoft.JPG'
  },
  {
    color: 'white',
    src: 'geosphere.JPG'
  },
  {
    color: 'white',
    src: 'Claywall.jpg'
  }
];

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(true);
  const scrollContainerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');

    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={scrollContainerRef} className="overflow-x-hidden">
      <LetterCollision />

      {showScrollButton && (
        <Magnetic>
          <div
            className="fixed bottom-4 right-8 flex cursor-pointer items-center space-x-2 text-3xl font-semibold sm:bottom-8"
            onClick={scrollToHero}
          >
            <p>Scroll</p>
            <ArrowDownRight strokeWidth={3} className="size-6" />
          </div>
        </Magnetic>
      )}

      <div id="hero" ref={heroRef}>
        <Hero />
      </div>

      <div className="pt-16 sm:pt-20 lg:pt-24">
        <SlidingImages slider1={slider1} slider2={slider2} />
      </div>

      <ContrastCursor isActive={false} text={'Go to project'} />
    </div>
  );
}