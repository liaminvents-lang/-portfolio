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
    src: 'DSC03168-Enhanced-NR.jpg',
    href: '/projects/robotic-steam-bending'
  },
  {
    color: 'white',
    src: 'robotmadepart2.JPG',
    href: '/projects/robot-made-2025-uoft'
  },
  {
    color: 'white',
    src: 'final demonstrators-12 2.PNG',
    href: '/projects/robotic-steam-bending'
  },
  {
    color: 'white',
    src: 'Aeolian.jpg',
    href: '/projects/aeolian-soundscapes-timber-tectonics'
  },
  {
    color: 'white',
    src: 'CASSANO_A2-2-14 2.PNG',
    href: '/projects/robotic-steam-bending'
  },
  {
    color: 'white',
    src: 'geosphere.JPG',
    href: '/projects/geosphere'
  },
  {
    color: 'white',
    src: 'DSC09652 copy.jpg',
    href: '/projects/learning-through-london-mews'
  },
  {
    color: 'white',
    src: 'lucid.jpg',
    href: '/projects/lucid-frequencies'
  },
  {
    color: 'white',
    src: '280tower.jpeg',
    href: '/projects/solar-responsive-tower'
  },
  {
    color: 'white',
    src: 'DSC03407.jpg',
    href: '/projects/robot-made-2025-ubc-sala'
  },
  {
    color: 'white',
    src: 'woodnrock.png',
    href: '/projects/readymade'
  },
  {
    color: 'white',
    src: 'RSGC-0421 3.JPG',
    href: '/projects/lucid-frequencies'
  }
];

const slider2 = [
  {
    color: 'white',
    src: 'UBCsalafront.JPG',
    href: '/projects/robot-made-2025-ubc-sala'
  },
  {
    color: 'white',
    src: 'final demonstrators-13 2.PNG',
    href: '/projects/robotic-steam-bending'
  },
  {
    color: 'white',
    src: 'mirrorwall.png',
    href: '/projects/imago-machina'
  },
  {
    color: 'white',
    src: 'CASSANO_A2-2-15 2.PNG',
    href: '/projects/robotic-steam-bending'
  },
  {
    color: 'white',
    src: 'robotmadeuoft.JPG',
    href: '/projects/robot-made-2024-uoft'
  },
  {
    color: 'white',
    src: 'mews.JPG',
    href: '/projects/learning-through-london-mews'
  },
  {
    color: 'white',
    src: 'rebartie.png',
    href: '/projects/robotic-wire-tying'
  },
  {
    color: 'white',
    src: 'acadia.JPG',
    href: '/projects/robotic-steam-bending'
  },
  {
    color: 'white',
    src: 'Picture3.png',
    href: '/projects/reversible-wood-composites'
  },
  {
    color: 'white',
    src: 'thegripper.PNG',
    href: '/side-projects'
  },
  {
    color: 'white',
    src: 'Picture2.png',
    href: '/projects/reversible-wood-composites'
  },
  {
    color: 'white',
    src: 'Picture1.jpg',
    href: '/projects/reversible-wood-composites'
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