import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-black">
      <iframe
        src="https://player.vimeo.com/video/1196188195?autoplay=1&loop=1&background=1&muted=1&controls=0&title=0&byline=0&portrait=0"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.77777778vh] min-w-full -translate-x-1/2 -translate-y-1/2"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </section>
  );
}