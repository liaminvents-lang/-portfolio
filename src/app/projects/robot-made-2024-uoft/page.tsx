'use client';

import Layout from '@/components/layout';
import Image from 'next/image';

/* =====================================================
   PROJECT IMAGES
===================================================== */

const projectImages = [
  'IMG_9114.JPG',
  'IMG_9120 2.JPG',
  'IMG_9115 2.JPG',
  'IMG_9113.JPG',
  'IMG_9119.JPG',
  'IMG_9112.JPG',
  'IMG_9108 2.JPG',
  'IMG_9110.JPG',
  'IMG_9117.JPG',
  'IMG_9116.JPG',
  'IMG_9109.JPG',
  'IMG_9111 2.JPG',

  'Day 22.JPG',
  'Day 21.JPG',
  'Day 19.JPG',
  'Day 11.JPG',
  'Day 18.JPG',
  'Day 17.JPG',
  'Day 16.JPG',
  'Day 15.JPG',
  'Day 13.JPG',
  'Day 12.JPG',
];

const portraitImages = [
  'IMG_9113.JPG',
  'IMG_9119.JPG',
  'IMG_9117.JPG',
  'IMG_9116.JPG',
  'IMG_9109.JPG',
  'IMG_9111 2.JPG',
];

export default function RobotMade2024UofTPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="w-full px-5 pt-5 sm:px-8 sm:pt-8 lg:px-12 lg:pt-10">
          <div className="relative mx-auto aspect-[16/9] w-full max-w-[1800px] overflow-hidden bg-foreground/[0.04]">
            <Image
              src="/images/robotmadeuoft.JPG"
              alt="Robot Made 2024 at the University of Toronto"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="px-5 pb-16 pt-20 sm:px-8 lg:px-12 lg:pb-20 lg:pt-24">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">

              <div className="lg:col-span-7">
                <p className="m-0 text-sm text-foreground/40">
                  Design-Build
                </p>

                <h1 className="m-0 mt-4 max-w-[1200px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  Robot Made 2024 · U of T
                </h1>
              </div>

              <div className="flex items-end lg:col-span-5">
                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A collaborative full-scale design-build project developed
                  through computational design, robotic fabrication, and
                  hands-on assembly.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            METADATA
        ===================================================== */}

        <section className="border-y border-foreground/20 px-5 sm:px-8 lg:px-12">
          <div className="mx-auto grid w-full max-w-[1800px] grid-cols-2 lg:grid-cols-5">

            <div className="border-r border-foreground/20 py-5 pr-5">
              <p className="m-0 text-xs text-foreground/40">
                Type
              </p>

              <p className="m-0 mt-2 text-sm">
                Design-Build
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-5">
              <p className="m-0 text-xs text-foreground/40">
                Program
              </p>

              <p className="m-0 mt-2 text-sm">
                Robot Made
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-5">
              <p className="m-0 text-xs text-foreground/40">
                Institution
              </p>

              <p className="m-0 mt-2 text-sm">
                University of Toronto
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-5">
              <p className="m-0 text-xs text-foreground/40">
                Year
              </p>

              <p className="m-0 mt-2 text-sm">
                2024
              </p>
            </div>

            <div className="px-5 py-5">
              <p className="m-0 text-xs text-foreground/40">
                Role
              </p>

              <p className="m-0 mt-2 text-sm">
                Fabrication + Assembly
              </p>
            </div>

          </div>
        </section>

        {/* =====================================================
            01 + 02
            OVERVIEW + MY ROLE
        ===================================================== */}

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">

              {/* OVERVIEW */}

              <div className="lg:col-span-7">
                <div className="border-t border-foreground/20 pt-5">
                  <div className="grid gap-8 sm:grid-cols-12">

                    <div className="sm:col-span-3">
                      <p className="m-0 text-xs text-foreground/40">
                        01
                      </p>

                      <p className="m-0 mt-2 text-sm">
                        Project Overview
                      </p>
                    </div>

                    <div className="sm:col-span-9">
                      <p className="m-0 text-2xl leading-[1.25] sm:text-3xl">
                        Robot Made 2024 explored the relationship between
                        computational design, robotic fabrication, and
                        full-scale timber construction.
                      </p>

                      <div className="mt-7 grid gap-6 sm:grid-cols-2">

                        <p className="m-0 text-sm leading-[1.7] text-foreground/60">
                          The project translated computationally generated
                          geometry into a system of unique timber components
                          produced through digital and robotic fabrication.
                        </p>

                        <p className="m-0 text-sm leading-[1.7] text-foreground/60">
                          Fabricated components were brought together through
                          collaborative full-scale assembly, connecting the
                          digital workflow directly to physical construction.
                        </p>

                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* MY ROLE */}

              <div className="lg:col-span-5">
                <div className="border-t border-foreground/20 pt-5">
                  <div className="grid gap-8 sm:grid-cols-12 lg:block">

                    <div className="sm:col-span-3 lg:col-span-auto">
                      <p className="m-0 text-xs text-foreground/40">
                        02
                      </p>

                      <p className="m-0 mt-2 text-sm">
                        My Role
                      </p>
                    </div>

                    <div className="sm:col-span-9 lg:mt-8">
                      <p className="m-0 text-2xl leading-[1.2] sm:text-3xl">
                        Fabrication + Assembly
                      </p>

                      <p className="m-0 mt-6 max-w-[600px] text-sm leading-[1.7] text-foreground/60">
                        I contributed to the fabrication and physical assembly
                        of the project, working as part of the team responsible
                        for producing, preparing, and constructing the
                        full-scale timber system.
                      </p>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            03 — CREDITS
        ===================================================== */}

        <section className="border-t border-foreground/20 px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">

              <div className="lg:col-span-3">
                <p className="m-0 text-xs text-foreground/40">
                  03
                </p>

                <p className="m-0 mt-2 text-sm">
                  Credits
                </p>
              </div>

              <div className="lg:col-span-9">

                {/* PROJECT LEADS */}

                <div className="grid gap-10 border-b border-foreground/20 pb-10 sm:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <p className="m-0 text-xs text-foreground/40">
                      Project Leads
                    </p>

                    <div className="mt-4 space-y-1.5 text-sm">
                      <p className="m-0">Nicholas Hoban</p>
                      <p className="m-0">AnnaLisa Meyboom</p>
                      <p className="m-0">Aryan Rezaei Rad</p>
                    </div>
                  </div>
                </div>

                {/* FABRICATION + ASSEMBLY */}

                <div className="pt-10">
                  <p className="m-0 text-xs text-foreground/40">
                    Fabrication + Assembly
                  </p>

                  <div className="mt-5 grid gap-x-10 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
                    <p className="m-0">Ala Mohammadi</p>
                    <p className="m-0">Amirhossein Heidari</p>
                    <p className="m-0">Annie Song</p>

                    <p className="m-0">Caroline Guirguis</p>
                    <p className="m-0">Jagteshwar Singh</p>
                    <p className="m-0">Jaya Xue</p>

                    <p className="m-0">Julia Paulson</p>
                    <p className="m-0">Jun Heng Tan</p>
                    <p className="m-0 font-medium">Liam Cassano</p>

                    <p className="m-0">Sarah Mak</p>
                    <p className="m-0">Yixuan Zhang</p>
                    <p className="m-0">Zhelun Li</p>

                    <p className="m-0">Rahul Sehijpaul</p>
                    <p className="m-0">Paul Kozak</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =====================================================

    04 — PROJECT IMAGES

===================================================== */}

<section className="border-t border-foreground/20 py-20 lg:py-24">

  {/* SECTION HEADER */}

  <div className="px-5 sm:px-8 lg:px-12">

    <div className="mx-auto w-full max-w-[1800px]">

      <div className="mb-10 grid gap-6 lg:grid-cols-12">

        <div className="lg:col-span-3">

          <p className="m-0 text-xs text-foreground/40">

            04

          </p>

          <p className="m-0 mt-2 text-sm">

            Project Images

          </p>

        </div>

        <div className="lg:col-span-9">

          <p className="m-0 max-w-[600px] text-sm leading-[1.6] text-foreground/50">

            Fabrication and assembly from Robot Made 2024 at the

            University of Toronto.

          </p>

        </div>

      </div>

    </div>

  </div>

  {/* =====================================================

      NATURAL-ASPECT IMAGE FLOW

      1 COLUMN MOBILE

      2 COLUMNS TABLET

      3 COLUMNS DESKTOP

      4 COLUMNS LARGE DESKTOP

  ===================================================== */}

  <div className="w-full px-2 sm:px-3 lg:px-4">

    <div className="columns-1 gap-2 sm:columns-2 sm:gap-3 lg:columns-3 lg:gap-4 2xl:columns-4">

      {projectImages.map((image, index) => (

        <div

          key={image}

          className="mb-2 break-inside-avoid overflow-hidden bg-foreground/[0.04] sm:mb-3 lg:mb-4"

        >

          <img

            src={`/images/${image}`}

            alt={`Robot Made 2024 U of T — ${index + 1}`}

            className="block h-auto w-full"

          />

        </div>

      ))}

    </div>

  </div>

</section>

      </main>
    </Layout>
  );
}