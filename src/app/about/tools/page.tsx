'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout';

const tools = Array.from({ length: 26 }, (_, index) => `m${index + 1}.png`);

const positions = [
  { left: '3%', top: '3%', width: 15, rotate: -8 },
  { left: '21%', top: '1%', width: 17, rotate: 4 },
  { left: '42%', top: '5%', width: 14, rotate: -3 },
  { left: '63%', top: '0%', width: 16, rotate: 7 },
  { left: '82%', top: '7%', width: 15, rotate: -5 },

  { left: '10%', top: '20%', width: 16, rotate: 5 },
  { left: '30%', top: '18%', width: 13, rotate: -7 },
  { left: '50%', top: '21%', width: 17, rotate: 3 },
  { left: '72%', top: '19%', width: 15, rotate: -4 },

  { left: '1%', top: '38%', width: 14, rotate: 6 },
  { left: '18%', top: '36%', width: 17, rotate: -3 },
  { left: '40%', top: '39%', width: 15, rotate: 5 },
  { left: '61%', top: '35%', width: 16, rotate: -6 },
  { left: '82%', top: '40%', width: 15, rotate: 3 },

  { left: '6%', top: '55%', width: 17, rotate: -5 },
  { left: '27%', top: '57%', width: 14, rotate: 6 },
  { left: '46%', top: '53%', width: 16, rotate: -2 },
  { left: '67%', top: '57%', width: 15, rotate: 5 },
  { left: '84%', top: '54%', width: 14, rotate: -7 },

  { left: '1%', top: '73%', width: 15, rotate: 3 },
  { left: '20%', top: '75%', width: 17, rotate: -6 },
  { left: '41%', top: '72%', width: 14, rotate: 5 },
  { left: '59%', top: '76%', width: 16, rotate: -3 },
  { left: '79%', top: '72%', width: 16, rotate: 7 },

  { left: '27%', top: '89%', width: 15, rotate: -4 },
  { left: '58%', top: '88%', width: 17, rotate: 4 },
];

export default function ToolsPage() {
  return (
    <Layout title="">
      <main className="w-full bg-white">
        {/* INTRO */}

        <section className="px-5 pb-10 pt-32 sm:px-8 lg:px-12 lg:pb-14 lg:pt-40">
          <div className="mx-auto grid w-full max-w-[1800px] gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="m-0 text-sm text-foreground/40">
                Equipment
              </p>
            </div>

            <div className="lg:col-span-7">
              <p className="m-0 max-w-[900px] text-3xl font-normal leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
                Tools are treated as part of the design process, supporting
                rapid prototyping, fabrication, assembly, modification, and
                on-site construction.
              </p>
            </div>
          </div>
        </section>

        {/* TOOL FIELD */}

        <section className="w-full pb-28 pt-4 lg:pb-40">
          {/* DESKTOP SCRAMBLE */}

          <div className="relative hidden h-[1750px] w-full overflow-visible lg:block">
            {tools.map((tool, index) => {
              const position = positions[index];

              return (
                <div
                  key={tool}
                  className="group absolute flex items-center justify-center"
                  style={{
                    left: position.left,
                    top: position.top,
                    width: `${position.width}%`,
                    transform: `rotate(${position.rotate}deg)`,
                  }}
                >
                  <div
                    className="
                      relative
                      flex
                      h-[280px]
                      w-full
                      cursor-pointer
                      items-center
                      justify-center
                      transition-transform
                      duration-300
                      ease-out
                      group-hover:z-50
                      group-hover:scale-[1.35]
                    "
                  >
                    <Image
                      src={`/images/${tool}`}
                      alt=""
                      fill
                      unoptimized
                      sizes="20vw"
                      className="
                        object-contain
                        mix-blend-multiply
                        transition-transform
                        duration-300
                        ease-out
                      "
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* TABLET */}

          <div className="hidden w-full grid-cols-3 gap-x-4 gap-y-12 px-4 sm:grid lg:hidden">
            {tools.map((tool) => (
              <div
                key={tool}
                className="group flex aspect-square items-center justify-center"
              >
                <div className="relative h-full w-full transition-transform duration-300 ease-out group-hover:z-30 group-hover:scale-[1.2]">
                  <Image
                    src={`/images/${tool}`}
                    alt=""
                    fill
                    unoptimized
                    sizes="33vw"
                    className="object-contain mix-blend-multiply"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE */}

          <div className="grid w-full grid-cols-2 gap-x-2 gap-y-8 px-3 sm:hidden">
            {tools.map((tool) => (
              <div
                key={tool}
                className="group flex aspect-square items-center justify-center"
              >
                <div className="relative h-full w-full transition-transform duration-300 ease-out group-hover:z-30 group-hover:scale-[1.15]">
                  <Image
                    src={`/images/${tool}`}
                    alt=""
                    fill
                    unoptimized
                    sizes="50vw"
                    className="object-contain mix-blend-multiply"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}