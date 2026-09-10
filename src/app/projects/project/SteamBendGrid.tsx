'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const bends = Array.from({ length: 33 }, (_, i) => ({
  src: `/images/bent wood grid-01-${String(i + 1).padStart(2, '0')}.png`,
}));

type HoveredPiece = {
  src: string;
  x: number;
  y: number;
  width: number;
};

export default function SteamBendGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  const [hovered, setHovered] = useState<HoveredPiece | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const rows =
        gsap.utils.toArray<HTMLElement>('.steam-bend-row');

      rows.forEach((row, index) => {
        gsap.fromTo(
          row,
          {
            x: index === 0 ? -80 : 80,
          },
          {
            x: index === 0 ? 80 : -80,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  const showHoveredPiece = (
    src: string,
    element: HTMLDivElement
  ) => {
    const rect = element.getBoundingClientRect();

    setHovered({
      src,
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      width: rect.width,
    });
  };

  const rowOne = bends.slice(0, 17);
  const rowTwo = bends.slice(17);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden py-10 sm:py-12 lg:py-14"
      >
        {/* =====================================================
            TOP ROW
        ===================================================== */}

        <div className="steam-bend-row relative flex w-[112%] -ml-[6%] items-center">
          {rowOne.map((bend, index) => (
            <div
              key={bend.src}
              className="relative flex min-w-0 flex-1 items-center justify-center"
              onMouseEnter={(event) =>
                showHoveredPiece(bend.src, event.currentTarget)
              }
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="relative flex aspect-square w-full items-center justify-center"
                style={{
                  translate:
                    index % 3 === 0
                      ? '0 -6px'
                      : index % 3 === 1
                        ? '0 6px'
                        : undefined,
                }}
              >
                <Image
                  src={bend.src}
                  alt=""
                  width={1200}
                  height={1200}
                  draggable={false}
                  sizes="7vw"
                  className="pointer-events-none h-auto w-[120%] max-w-none select-none"
                />
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM ROW
        ===================================================== */}

        <div className="steam-bend-row relative -mt-4 flex w-[112%] -ml-[6%] items-center">
          {rowTwo.map((bend, index) => (
            <div
              key={bend.src}
              className="relative flex min-w-0 flex-1 items-center justify-center"
              onMouseEnter={(event) =>
                showHoveredPiece(bend.src, event.currentTarget)
              }
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="relative flex aspect-square w-full items-center justify-center"
                style={{
                  translate:
                    index % 3 === 0
                      ? '0 6px'
                      : index % 3 === 1
                        ? '0 -6px'
                        : undefined,
                }}
              >
                <Image
                  src={bend.src}
                  alt=""
                  width={1200}
                  height={1200}
                  draggable={false}
                  sizes="7vw"
                  className="pointer-events-none h-auto w-[120%] max-w-none select-none"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          HOVERED IMAGE

          This exists OUTSIDE both rows.

          Nothing in either row can cover it.
          Cursor remains above at z-9999.
      ===================================================== */}

      {hovered && (
        <div
          className="pointer-events-none fixed z-[5000]"
          style={{
            left: hovered.x,
            top: hovered.y,
            width: hovered.width * 4,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Image
            src={hovered.src}
            alt=""
            width={1200}
            height={1200}
            draggable={false}
            sizes="30vw"
            className="h-auto w-full select-none"
          />
        </div>
      )}
    </>
  );
}