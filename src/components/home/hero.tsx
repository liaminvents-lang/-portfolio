'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-black">
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
    </section>
  );
}