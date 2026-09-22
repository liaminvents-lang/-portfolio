'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* =====================================================
          MOBILE
          Taller cinematic crop, but not full-screen
      ===================================================== */}

      <div className="relative h-[62svh] w-full overflow-hidden sm:hidden">
        <iframe
          src="https://player.vimeo.com/video/1229056451?background=1&autoplay=1&loop=1&muted=1&controls=0&badge=0&autopause=0"
          allow="autoplay; fullscreen; picture-in-picture"
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.77777778vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
          title="Homepage Hero Video"
        />
      </div>

      {/* =====================================================
          DESKTOP
      ===================================================== */}

      <div className="relative hidden h-screen w-full overflow-hidden sm:block">
        <iframe
          src="https://player.vimeo.com/video/1229056451?background=1&autoplay=1&loop=1&muted=1&controls=0&badge=0&autopause=0"
          allow="autoplay; fullscreen; picture-in-picture"
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.77777778vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
          title="Homepage Hero Video"
        />
      </div>
    </section>
  );
}