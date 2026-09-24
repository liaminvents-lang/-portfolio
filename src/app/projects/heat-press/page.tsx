'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout';

/* =====================================================
   SPECIMENS
===================================================== */

const specimens = [
  { id: 'F5-1', image: '/images/fineseries-01.png' },
  { id: 'F5-2', image: '/images/fineseries-02.png' },
  { id: 'F10-1', image: '/images/fineseries-03.png' },
  { id: 'F10-2', image: '/images/fineseries-04.png' },
  { id: 'F15-1', image: '/images/fineseries-05.png' },
  { id: 'F15-2', image: '/images/fineseries-06.png' },
  { id: 'F20-1', image: '/images/fineseries-07.png' },
  { id: 'F20-2', image: '/images/fineseries-08.png' },

  { id: 'F25-1', image: '/images/fineseries-09.png' },
  { id: 'F25-2', image: '/images/fineseries-10.png' },
  { id: 'F30-1', image: '/images/fineseries-11.png' },
  { id: 'F30-2', image: '/images/fineseries-12.png' },
  { id: 'F35-1', image: '/images/fineseries-13.png' },
  { id: 'F35-2', image: '/images/fineseries-14.png' },
  { id: 'F40-1', image: '/images/fineseries-15.png' },
  { id: 'F40-2', image: '/images/fineseries-16.png' },

  { id: 'C5-1', image: '/images/coarseseries-01.png' },
  { id: 'C5-2', image: '/images/coarseseries-02.png' },
  { id: 'C10-1', image: '/images/coarseseries-03.png' },
  { id: 'C10-2', image: '/images/coarseseries-04.png' },
  { id: 'C15-1', image: '/images/coarseseries-05.png' },
  { id: 'C15-2', image: '/images/coarseseries-06.png' },
  { id: 'C20-1', image: '/images/coarseseries-07.png' },
  { id: 'C20-2', image: '/images/coarseseries-08.png' },

  { id: 'C25-1', image: '/images/coarseseries-09.png' },
  { id: 'C25-2', image: '/images/coarseseries-10.png' },
  { id: 'C30-1', image: '/images/coarseseries-11.png' },
  { id: 'C30-2', image: '/images/coarseseries-12.png' },
  { id: 'C35-1', image: '/images/coarseseries-13.png' },
  { id: 'C35-2', image: '/images/coarseseries-14.png' },
  { id: 'C40-1', image: '/images/coarseseries-15.png' },
  { id: 'C40-2', image: '/images/coarseseries-16.png' },
];

function getSpecimenData(id: string) {
  const fibre = id.startsWith('F') ? 'Fine Fibre' : 'Coarse Fibre';
  const match = id.match(/[FC](\d+)-/);
  const lignin = match ? Number(match[1]) : 0;

  return {
    fibre,
    fibreWeight: 30,
    lignin,
  };
}

const specimenRows = specimens.map((sample) => ({
  ...sample,
  ...getSpecimenData(sample.id),
}));

/* =====================================================
   VIEWPORT VIDEO
===================================================== */

function ViewportVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: [0, 0.55, 1],
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="block h-full w-full object-cover"
      muted
      loop
      playsInline
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

/* =====================================================
   PAGE
===================================================== */

export default function HeatPressPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="grid min-h-[560px] grid-cols-1 items-end gap-12 px-5 pb-20 pt-36 lg:grid-cols-12 lg:px-14">
          <div className="lg:col-span-7">
            <p className="mb-6 text-sm text-foreground/40">
              Material Processing Equipment
            </p>

            <h1 className="m-0 max-w-[900px] text-6xl font-normal leading-[0.92] tracking-tight md:text-7xl lg:text-[96px]">
              Heat
              <br />
              Press
            </h1>
          </div>

          <div className="lg:col-span-5 lg:pb-4">
            <p className="m-0 max-w-[620px] text-2xl font-medium leading-[1.3] tracking-tight lg:text-3xl">
              A custom 12-ton hydraulic heat press designed and fabricated for
              controlled thermal compression of composite material samples.
            </p>
          </div>
        </section>

        {/* =====================================================
            PROJECT INFO
        ===================================================== */}

        <section className="px-5 py-10 lg:px-14">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-5">
            <div>
              <p className="mb-3 text-xs text-foreground/40">
                Type
              </p>
              <p className="m-0 text-sm">
                Hydraulic Heat Press
              </p>
            </div>

            <div>
              <p className="mb-3 text-xs text-foreground/40">
                Capacity
              </p>
              <p className="m-0 text-sm">
                12 Ton
              </p>
            </div>

            <div>
              <p className="mb-3 text-xs text-foreground/40">
                Sample
              </p>
              <p className="m-0 text-sm">
                14 × 14 cm
              </p>
            </div>

            <div>
              <p className="mb-3 text-xs text-foreground/40">
                Fabrication
              </p>
              <p className="m-0 text-sm">
                Waterjet Cutting
                <br />
                Machining + Welding
              </p>
            </div>

            <div>
              <p className="mb-3 text-xs text-foreground/40">
                Application
              </p>
              <p className="m-0 text-sm">
                Thermal Compression
                <br />
                Composite Forming
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            01 SAMPLE FORMAT
        ===================================================== */}

        <section className="px-5 py-24 lg:px-14 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="m-0 text-sm text-foreground/40">
                01
              </p>

              <h2 className="mt-4 text-3xl font-normal tracking-tight">
                Sample Format
              </h2>

              <p className="mt-12 max-w-[700px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
                The press was designed around the production of 14 × 14 cm
                composite material samples.
              </p>

              <div className="mt-10 grid gap-6">
                <p className="m-0 max-w-[600px] text-base leading-[1.65] text-foreground/60">
                  The square sample format established the working area of the
                  machine and defined the dimensions of the platen and mold
                  assemblies.
                </p>

                <p className="m-0 max-w-[600px] text-base leading-[1.65] text-foreground/60">
                  The system was developed to provide repeatable compression
                  and controlled heating across the full sample area while
                  remaining compact enough for iterative material testing.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Image
                src="/images/coarseseries-03.png"
                alt="Square composite material sample"
                width={1200}
                height={1200}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            02 PRESS DESIGN
        ===================================================== */}

        <section className="grid gap-10 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              02
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Press Design
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              Hydraulic loading, heated platens, and electronic control were
              integrated into a single fabricated steel assembly.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                A welded steel frame surrounds the hydraulic system and creates
                a direct load path through the upper and lower platen
                assemblies.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The thermal, hydraulic, structural, and electronic components
                were developed as one system so that pressure and temperature
                could be controlled during each pressing cycle.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            EXPLODED ASSEMBLY
        ===================================================== */}

        <section className="px-5 py-12 lg:px-14 lg:py-20">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="mb-8 flex items-end justify-between gap-8">
              <div>
                <p className="mb-2 text-xs text-foreground/40">
                  System Assembly
                </p>

                <p className="m-0 text-sm">
                  Exploded Axonometric
                </p>
              </div>

              <p className="m-0 hidden max-w-[360px] text-right text-xs leading-[1.5] text-foreground/40 md:block">
                Structural, hydraulic, thermal, and electronic components
              </p>
            </div>

            <Image
              src="/images/Heat Axo.png"
              alt="Exploded axonometric drawing of the custom hydraulic heat press"
              width={2400}
              height={1600}
              className="h-auto w-full object-contain"
            />
          </div>
        </section>

        {/* =====================================================
            03 FRAME FABRICATION
        ===================================================== */}

        <section className="px-5 py-24 lg:px-14 lg:py-32">
          <div className="mb-20 lg:mb-28">
            <p className="m-0 text-sm text-foreground/40">
              03
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Frame Fabrication
            </h2>
          </div>

          {/* COLD-CUT SAW */}

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="max-w-[650px]">
              <p className="m-0 text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
                Steel tube was cut to length before being assembled into the
                primary press frame.
              </p>

              <p className="mt-10 max-w-[560px] text-base leading-[1.65] text-foreground/60">
                Structural steel tubing was cut on a cold-cut saw to produce
                the vertical members, base, and upper frame components. The
                remaining structural plates were waterjet cut from cold-rolled
                steel to produce the required mounting geometry and clearances.
              </p>
            </div>

            <div className="aspect-square w-full overflow-hidden">
              <ViewportVideo src="/videos/cutting%20frame.mp4" />
            </div>
          </div>

          {/* WELDING */}

          <div className="mt-24 grid items-center gap-12 lg:mt-36 lg:grid-cols-2 lg:gap-20">
            <div className="max-w-[650px] lg:order-2">
              <p className="m-0 text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
                The tube and plate components were welded into a rigid
                structural assembly.
              </p>

              <p className="mt-10 max-w-[560px] text-base leading-[1.65] text-foreground/60">
                The fabricated components were aligned and welded to create a
                continuous load path between the hydraulic jack, pressing
                assembly, vertical members, upper frame, and base.
              </p>
            </div>

            <div className="aspect-square w-full overflow-hidden lg:order-1">
              <ViewportVideo src="/videos/weldingframe.mp4" />
            </div>
          </div>
        </section>

        {/* =====================================================
            04 HYDRAULIC SYSTEM
        ===================================================== */}

        <section className="px-5 py-24 lg:px-14 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="m-0 text-sm text-foreground/40">
                04
              </p>

              <h2 className="mt-4 text-3xl font-normal tracking-tight">
                Hydraulic System
              </h2>

              <p className="mt-12 text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
                A 12-ton bottle jack was modified to provide both compressive
                force and measurable hydraulic pressure.
              </p>

              <div className="mt-10 grid gap-6">
                <p className="m-0 max-w-[560px] text-base leading-[1.65] text-foreground/60">
                  The bottle jack provides a compact manually operated
                  hydraulic system capable of generating the loads required for
                  composite forming. Its vertical configuration transfers force
                  directly into the lower platen and through the sample
                  assembly.
                </p>

                <p className="m-0 max-w-[560px] text-base leading-[1.65] text-foreground/60">
                  The jack was modified to incorporate a pressure gauge,
                  providing direct feedback from the hydraulic circuit during
                  pressing. This makes loading conditions measurable and easier
                  to reproduce between samples.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
              <div className="aspect-square overflow-hidden">
                <Image
                  src="/images/bottlejack.png"
                  alt="Original 12-ton hydraulic bottle jack"
                  fill={false}
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="aspect-square overflow-hidden">
                <Image
                  src="/images/IMG_2212.JPG"
                  alt="Modified hydraulic bottle jack with pressure gauge"
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            05 HEATED PLATENS
        ===================================================== */}

        <section className="px-5 py-24 lg:px-14 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="m-0 text-sm text-foreground/40">
                05
              </p>

              <h2 className="mt-4 text-3xl font-normal tracking-tight">
                Heated Platens
              </h2>

              <p className="mt-12 text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
                Milled aluminum platens integrate the heating elements directly
                into the compression assembly.
              </p>

              <div className="mt-10 grid gap-6">
                <p className="m-0 max-w-[600px] text-base leading-[1.65] text-foreground/60">
                  Pockets were machined into the aluminum platens to recess the
                  120 W heating elements within the assembly. Recessing the
                  pads isolates them from the direct compressive load generated
                  during pressing.
                </p>

                <p className="m-0 max-w-[600px] text-base leading-[1.65] text-foreground/60">
                  The pockets also position the heating elements closer to the
                  pressing surface, reducing the distance through which heat
                  must conduct before reaching the mold and sample.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="aspect-square w-full overflow-hidden">
                <Image
                  src="/images/IMG_2225%202.JPG"
                  alt="Milled aluminum platen showing the recessed heating element pocket"
                  width={1400}
                  height={1400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            06 CONTROL SYSTEM
        ===================================================== */}

        <section className="grid gap-10 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              06
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Control System
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              Integrated electronics provide control over the thermal system
              from a dedicated touchscreen interface.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The electronics are housed in a dedicated enclosure mounted
                alongside the press and supplied by a 24 V / 15 A power supply.
                The control system manages the heating elements and associated
                temperature sensing.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                A separate touchscreen interface provides access to the
                operating controls while keeping the electrical hardware
                enclosed and separated from the pressing area.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            07 PRESSED SAMPLES
        ===================================================== */}

        <section className="px-5 py-24 lg:px-14 lg:py-32">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="m-0 text-sm text-foreground/40">
                  07
                </p>

                <h2 className="mt-4 text-3xl font-normal tracking-tight">
                  Pressed Samples
                </h2>
              </div>

              <div className="lg:col-span-8 lg:col-start-5">
                <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
                  The completed press enabled a repeatable series of composite
                  samples to be produced under controlled thermal and
                  compressive conditions.
                </p>

                <div className="mt-12 grid gap-10 md:grid-cols-2">
                  <p className="m-0 text-base leading-[1.65] text-foreground/60">
                    Each 14 × 14 cm sample was formed using the same pressing
                    system, allowing changes in material composition to be
                    evaluated while maintaining consistent fabrication
                    conditions.
                  </p>

                  <p className="m-0 text-base leading-[1.65] text-foreground/60">
                    Fine and coarse wood-fibre samples were produced across a
                    range of lignin contents, creating a standardized specimen
                    series for subsequent material testing and comparison.
                  </p>
                </div>
              </div>
            </div>

            {/* SPECIMEN FIELD */}

            <div className="mt-16">

              {/* MOBILE */}

              <div className="grid grid-cols-4 gap-1 sm:hidden">
                {specimenRows.map((sample) => (
                  <div
                    key={`mobile-${sample.id}`}
                    className="relative aspect-square overflow-hidden"
                  >
                    <Image
                      src={sample.image}
                      alt={sample.id}
                      fill
                      sizes="25vw"
                      className="object-contain p-1.5"
                    />
                  </div>
                ))}
              </div>

              {/* TABLET + DESKTOP */}

              <div className="relative hidden aspect-[16/8.2] w-full overflow-hidden sm:block">
                <div className="grid h-full grid-cols-8 grid-rows-4">
                  {specimenRows.map((sample) => (
                    <div
                      key={sample.id}
                      className="group relative flex min-h-0 min-w-0 items-center justify-center overflow-hidden"
                    >
                      <Image
                        src={sample.image}
                        alt={sample.id}
                        fill
                        sizes="13vw"
                        className="object-contain p-3"
                      />

                      {/* HOVER INFO */}

                      <div className="pointer-events-none absolute inset-x-2 bottom-2 z-20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <div className="inline-block bg-background/95 px-3 py-2 text-[11px] leading-[1.4] backdrop-blur-sm">
                          <p className="m-0 font-medium">
                            {sample.id}
                          </p>

                          <p className="m-0 mt-1 text-foreground/60">
                            {sample.fibre}
                          </p>

                          <p className="m-0 text-foreground/60">
                            {sample.fibreWeight} g Fibre
                          </p>

                          <p className="m-0 text-foreground/60">
                            {sample.lignin} g Lignin
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            08 PRESSING PROCESS
        ===================================================== */}

        <section className="px-5 py-24 lg:px-14 lg:py-32">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="m-0 text-sm text-foreground/40">
                  08
                </p>

                <h2 className="mt-4 text-3xl font-normal tracking-tight">
                  Pressing Process
                </h2>
              </div>

              <div className="lg:col-span-8 lg:col-start-5">
                <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
                  Heat and compression are applied simultaneously through the
                  fabricated platen and hydraulic systems.
                </p>

                <p className="mt-10 max-w-[700px] text-base leading-[1.65] text-foreground/60">
                  The complete pressing cycle brings the structural, hydraulic,
                  thermal, and control systems together into a single material
                  forming process.
                </p>
              </div>
            </div>

            {/* FULL WIDTH WITHIN PAGE MARGINS */}

            <div className="mt-16 aspect-video w-full overflow-hidden">
              <ViewportVideo src="/videos/pressingprocess.mp4" />
            </div>

          </div>
        </section>

        {/* =====================================================
            RESEARCH PROJECT
        ===================================================== */}

        <section className="px-5 py-24 lg:px-14 lg:py-32">
          <div className="mx-auto w-full max-w-[1800px]">
            <p className="mb-6 text-sm text-foreground/40">
              Research Application
            </p>

            <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="m-0 max-w-[1050px] text-4xl font-normal leading-[1.05] tracking-tight md:text-5xl lg:text-7xl">
                  Reversible Wood Composites
                </h2>

                <p className="mt-8 max-w-[700px] text-base leading-[1.65] text-foreground/60">
                  The heat press was developed as fabrication infrastructure
                  for the production and testing of lignin-based wood composite
                  materials.
                </p>
              </div>

              <Link
                href="/projects/reversible-wood-composites"
                className="w-fit shrink-0 border-b border-foreground pb-1 text-sm transition-opacity hover:opacity-50"
              >
                View Research Project →
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECT NAVIGATION
        ===================================================== */}

        <section className="px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
          <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-3 sm:flex-row">
            <Link
              href="/development"
              className="group flex min-h-[56px] items-center justify-between gap-8 px-5 py-4 transition-opacity duration-300 hover:opacity-50"
            >
              <span className="text-sm">
                Development
              </span>

              <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
            </Link>

            <Link
              href="/projects"
              className="group flex min-h-[56px] items-center justify-between gap-8 px-5 py-4 transition-opacity duration-300 hover:opacity-50"
            >
              <span className="text-sm">
                Projects
              </span>

              <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
            </Link>
          </div>
        </section>

      </main>
    </Layout>
  );
}