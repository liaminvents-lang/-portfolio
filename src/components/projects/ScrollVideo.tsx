'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type ScrollVideoProps = {
  src: string;
};

export default function ScrollVideo({ src }: ScrollVideoProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    let tween: gsap.core.Tween | null = null;
    let trigger: ScrollTrigger | null = null;

    const setup = () => {
      if (!video.duration || Number.isNaN(video.duration)) return;

      video.pause();
      video.currentTime = 0;

      tween = gsap.to(video, {
        currentTime: video.duration,
        ease: 'none',
        paused: true
      });

      trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=3000',
        pin: true,
        scrub: true,
        anticipatePin: 1,

        onUpdate: (self) => {
          if (!tween) return;

          tween.progress(self.progress);
        }
      });

      ScrollTrigger.refresh();
    };

    if (video.readyState >= 1) {
      setup();
    } else {
      video.addEventListener('loadedmetadata', setup, {
        once: true
      });
    }

    return () => {
      video.removeEventListener('loadedmetadata', setup);

      trigger?.kill();
      tween?.kill();
    };
  }, [src]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-center bg-white"
    >
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        className="block h-full w-full object-contain"
      />
    </section>
  );
}

