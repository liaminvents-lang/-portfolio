import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MutableRefObject, useEffect, useRef } from 'react';

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

const animateLettersOnScroll = (containerRef: MutableRefObject<any>) => {
  const lettersContainer = containerRef.current;
  const letterElements = lettersContainer?.querySelectorAll('.letter');

  letterElements.forEach((letter: Element) => {
    gsap.to(letter, {
      y: (i, el) =>
        (1 - parseFloat(el.getAttribute('data-speed') || '1')) *
        window.innerHeight,
      ease: 'power2.out',
      duration: 0.8,
      rotation: getRandomRotation(),
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=500',
        invalidateOnRefresh: true,
        scrub: 0.35
      }
    });
  });
};

function LetterDisplay({ word }: { word: string }) {
  return word.split('').map((letter, index) => (
    <div
      key={index}
      className="letter text-5xl font-semibold xs:text-[64px] xs:leading-none md:text-[84px] lg:text-[105px] xl:text-[130px]"
      data-speed={getRandomSpeed()}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </div>
  ));
}

export function LetterCollision() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    animateLettersOnScroll(containerRef);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="ml-20">
      <div className="flex h-screen flex-col justify-center translate-y-10">
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