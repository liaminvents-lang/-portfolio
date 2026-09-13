import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const line1 = 'Architecture';
const line2 = 'Robotics';
const line3 = 'Research';

function getRandomSpeed() {
  return 0.8 + Math.random() * 0.7;
}

function getRandomRotation() {
  return Math.random() * 60 - 30;
}

function LetterDisplay({ word }: { word: string }) {
  return word.split('').map((letter, index) => (
    <div
      key={index}
      className="letter text-[64px] font-semibold leading-[0.88] xs:text-[78px] md:text-[105px] lg:text-[135px] xl:text-[165px] 2xl:text-[190px]"
      data-speed={getRandomSpeed()}
      data-rotation={getRandomRotation()}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </div>
  ));
}

export function LetterCollision() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray<HTMLElement>('.letter');

      /*
        One continuous scroll-controlled timeline.

        1. Letters explode.
        2. Whole exploded group moves upward.
        3. Reverse happens immediately when scrolling upward.
      */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=850',
          scrub: 0.45,
          invalidateOnRefresh: true
        }
      });

      /*
        LETTER EXPLOSION
      */

      letters.forEach((letter) => {
        const speed = parseFloat(letter.dataset.speed || '1');
        const rotation = parseFloat(letter.dataset.rotation || '0');

        timeline.to(
          letter,
          {
            y: (1 - speed) * window.innerHeight,
            rotation,
            ease: 'none',
            duration: 0.45
          },
          0
        );
      });

      /*
        PULL THE ENTIRE EXPLODED FIELD OFF SCREEN

        Starts before the explosion is completely finished,
        so the letters never sit frozen above the video.
      */

      timeline.to(
        textRef.current,
        {
          y: -window.innerHeight * 1.15,
          ease: 'none',
          duration: 0.55
        },
        0.35
      );

      /*
        Fade slightly as it exits.
      */

      timeline.to(
        textRef.current,
        {
          opacity: 0,
          ease: 'none',
          duration: 0.2
        },
        0.8
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <div
        ref={textRef}
        className="absolute bottom-[22vh] left-6 sm:left-10 md:left-14 lg:left-20"
      >
        <div className="flex flex-wrap">
          <LetterDisplay word={line1} />
        </div>

        <div className="flex flex-wrap">
          <LetterDisplay word={line2} />
        </div>

        <div className="flex flex-wrap">
          <LetterDisplay word={line3} />
        </div>
      </div>
    </div>
  );
}