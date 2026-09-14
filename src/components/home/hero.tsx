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
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src="/videos/C5694_1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* =====================================================
          DESKTOP — UNCHANGED
      ===================================================== */}

      <div className="relative hidden h-screen w-full overflow-hidden sm:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/C5694_1.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}