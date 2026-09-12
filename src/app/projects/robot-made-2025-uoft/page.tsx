'use client';

import Layout from '@/components/layout';
import Image from 'next/image';

/* =====================================================
   PROJECT IMAGES
===================================================== */

const projectImages = [
  'RSGC-00579 2.JPG',
  'RSGC-00589 2.JPG',
  'RSGC-00759 2.JPG',
  'RSGC-00769 3.JPG',
  'RSGC-00795 2.JPG',
  'RSGC-00940 3.JPG',
];

export default function RobotMade2025UofTPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="w-full px-5 pt-5 sm:px-8 sm:pt-8 lg:px-12 lg:pt-10">
          <div className="relative mx-auto aspect-[16/9] w-full max-w-[1800px] overflow-hidden bg-foreground/[0.04]">
            <Image
              src="/images/robotmadepart2.JPG"
              alt="Robot Made 2025 at the University of Toronto"
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
                  Robot Made 2025 · U of T
                </h1>

              </div>

              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A full-scale reciprocal timber pavilion developed through
                  computational design, robotic fabrication, and rapid
                  collaborative assembly.
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
                2025
              </p>

            </div>

            <div className="px-5 py-5">

              <p className="m-0 text-xs text-foreground/40">
                Role
              </p>

              <p className="m-0 mt-2 text-sm">
                Teaching Assistant
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
                        Robot Made 2025 investigated how reciprocal timber
                        structures could be designed, fabricated, and assembled
                        through an integrated computational and robotic
                        workflow.
                      </p>

                      <div className="mt-7 grid gap-6 sm:grid-cols-2">

                        <p className="m-0 text-sm leading-[1.7] text-foreground/60">
                          The pavilion was developed through parametric design,
                          CNC processing, and industrial robotic fabrication,
                          translating a digital structural system directly into
                          bespoke timber components.
                        </p>

                        <p className="m-0 text-sm leading-[1.7] text-foreground/60">
                          The final structure consisted of 110 unique timber
                          elements designed for rapid, measurement-free
                          assembly and scaffold-free construction.
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
                        Teaching Assistant
                      </p>

                      <p className="m-0 mt-6 max-w-[600px] text-sm leading-[1.7] text-foreground/60">
                        I supported students throughout the workshop across
                        computational workflows, robotic fabrication,
                        component production, and full-scale assembly,
                        helping move the project from digital geometry to
                        physical construction.
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

                {/* LEADS + TA */}

                <div className="grid gap-10 border-b border-foreground/20 pb-10 sm:grid-cols-2">

                  <div>

                    <p className="m-0 text-xs text-foreground/40">
                      Project Leads
                    </p>

                    <div className="mt-4 space-y-1.5 text-sm">

                      <p className="m-0">
                        Nicholas Hoban
                      </p>

                      <p className="m-0">
                        Aryan Rezaei Rad
                      </p>

                    </div>

                  </div>

                  <div>

                    <p className="m-0 text-xs text-foreground/40">
                      Teaching Assistant
                    </p>

                    <div className="mt-4 text-sm">

                      <p className="m-0 font-medium">
                        Liam Cassano
                      </p>

                    </div>

                  </div>

                </div>

                {/* STUDENTS */}

                <div className="pt-10">

                  <p className="m-0 text-xs text-foreground/40">
                    Student Participants
                  </p>

                  <div className="mt-5 grid gap-x-10 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">

                    <p className="m-0">Kenny Vo</p>
                    <p className="m-0">Nathania Nagarajah</p>
                    <p className="m-0">Tony Yang</p>

                    <p className="m-0">Shannon Dacanay</p>
                    <p className="m-0">Melina Elefteriadis</p>
                    <p className="m-0">Elina Parkhomenko</p>

                    <p className="m-0">Myriam Bobe</p>
                    <p className="m-0">Micha Fairfax-Angod</p>
                    <p className="m-0">Tilija Leskauskaite</p>

                    <p className="m-0">Yagmur Ceylan</p>
                    <p className="m-0">Habib Yosufi</p>
                    <p className="m-0">Sydney Nguyen</p>

                    <p className="m-0">Keira Fraser</p>
                    <p className="m-0">Jack Simon</p>
                    <p className="m-0">Ryan Yee</p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            04 — FABRICATION + ASSEMBLY
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
                    Fabrication + Assembly
                  </p>

                </div>

                <div className="lg:col-span-9">

                  <p className="m-0 max-w-[720px] text-sm leading-[1.7] text-foreground/50">
                    The workshop moved continuously between robotic fabrication,
                    component preparation, and full-scale construction.
                  </p>

                </div>

              </div>

            </div>
          </div>

          {/* FULL-WIDTH VIDEOS */}

          <div className="w-full px-2 sm:px-3 lg:px-4">

            <div className="grid w-full grid-cols-1 gap-2 sm:gap-3 lg:grid-cols-2 lg:gap-4">

              {/* VIDEO 01 */}

              <div className="w-full overflow-hidden bg-black">

                <video
                  src="/videos/robo20251.MP4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="aspect-video w-full object-cover"
                />

              </div>

              {/* VIDEO 02 */}

              <div className="w-full overflow-hidden bg-black">

                <video
                  src="/videos/robo20252.MP4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="aspect-video w-full object-cover"
                />

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            05 — PROJECT IMAGES
        ===================================================== */}

        <section className="border-t border-foreground/20 py-20 lg:py-24">

          {/* SECTION HEADER */}

          <div className="px-5 sm:px-8 lg:px-12">
            <div className="mx-auto w-full max-w-[1800px]">

              <div className="mb-10 grid gap-6 lg:grid-cols-12">

                <div className="lg:col-span-3">

                  <p className="m-0 text-xs text-foreground/40">
                    05
                  </p>

                  <p className="m-0 mt-2 text-sm">
                    Project Images
                  </p>

                </div>

                <div className="lg:col-span-9">

                  <p className="m-0 max-w-[600px] text-sm leading-[1.6] text-foreground/50">
                    Fabrication, robotic production, and assembly from Robot
                    Made 2025 at the University of Toronto.
                  </p>

                </div>

              </div>

            </div>
          </div>

          {/* FULL-WIDTH IMAGE FIELD */}

          <div className="w-full px-2 sm:px-3 lg:px-4">

            <div className="columns-1 gap-2 sm:columns-2 sm:gap-3 lg:columns-3 lg:gap-4">

              {projectImages.map((image, index) => (
                <div
                  key={image}
                  className="mb-2 break-inside-avoid overflow-hidden bg-foreground/[0.04] sm:mb-3 lg:mb-4"
                >

                  <Image
                    src={`/images/${image}`}
                    alt={`Robot Made 2025 U of T — ${index + 1}`}
                    width={2000}
                    height={1400}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-auto w-full"
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