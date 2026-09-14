'use client';

import Layout from '@/components/layout';
import Image from 'next/image';

/* =====================================================
   PROJECT IMAGES
===================================================== */

const projectImages = [
  'IMG_4450.JPG',
  'IMG_4443.JPG',
  'IMG_4433.JPG',
  'IMG_4407.JPG',
  'IMG_4401.JPG',
  'IMG_4396.JPG',
  'IMG_4372.JPG',
  'IMG_4370.JPG',
  'IMG_4367.JPG',
  'IMG_4362.JPG',
  'IMG_4359.JPG',
  '7956E262-AF71-47D2-A5D4-B7E94BA75A49.JPG',
];

export default function AeolianSoundscapesPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* =====================================================
            HERO VIDEO
        ===================================================== */}

        <section className="w-full">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-black sm:aspect-[16/9]">
            <iframe
              src="https://player.vimeo.com/video/1226115707?autoplay=1&muted=1&loop=1&background=1&autopause=0&title=0&byline=0&portrait=0"
              className="absolute left-1/2 top-1/2 h-[110%] w-[220%] -translate-x-1/2 -translate-y-1/2 sm:h-[115%] sm:w-[115%]"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Aeolian Soundscapes"
            />
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="px-5 pb-10 pt-12 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12 lg:pb-20 lg:pt-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-6 sm:gap-10 lg:grid-cols-12 lg:gap-10">

              <div className="lg:col-span-7">

                <p className="m-0 text-xs text-foreground/40 sm:text-sm">
                  Design-Build
                </p>

                <h1 className="m-0 mt-3 max-w-[1200px] text-[42px] font-normal leading-[0.95] tracking-tight sm:mt-4 sm:text-6xl lg:text-8xl">
                  Aeolian Soundscapes / Timber Tectonics
                </h1>

              </div>

              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-[18px] leading-[1.45] sm:text-2xl">
                  A full-scale timber installation developed through
                  computational design, robotic fabrication, and collaborative
                  assembly for Lumière: The Art of Light.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            METADATA
        ===================================================== */}

        <section className="border-y border-foreground/20 px-5 sm:px-8 lg:px-12">
          <div className="mx-auto w-full max-w-[1800px]">

            {/* MOBILE */}
            <div className="grid grid-cols-5 divide-x divide-foreground/20 sm:hidden">

              <div className="py-3 pr-2">
                <p className="m-0 text-[8px] text-foreground/40">
                  Type
                </p>

                <p className="m-0 mt-1.5 text-[10px] leading-[1.35]">
                  Design-Build
                </p>
              </div>

              <div className="px-2 py-3">
                <p className="m-0 text-[8px] text-foreground/40">
                  Exhibition
                </p>

                <p className="m-0 mt-1.5 text-[10px] leading-[1.35]">
                  Lumière
                </p>
              </div>

              <div className="px-2 py-3">
                <p className="m-0 text-[8px] text-foreground/40">
                  Location
                </p>

                <p className="m-0 mt-1.5 text-[10px] leading-[1.35]">
                  Toronto
                </p>
              </div>

              <div className="px-2 py-3">
                <p className="m-0 text-[8px] text-foreground/40">
                  Year
                </p>

                <p className="m-0 mt-1.5 text-[10px] leading-[1.35]">
                  2023
                </p>
              </div>

              <div className="py-3 pl-2">
                <p className="m-0 text-[8px] text-foreground/40">
                  Role
                </p>

                <p className="m-0 mt-1.5 text-[10px] leading-[1.35]">
                  Fabrication
                </p>
              </div>

            </div>

            {/* TABLET + DESKTOP */}
            <div className="hidden grid-cols-2 sm:grid lg:grid-cols-5">

              <div className="border-r border-foreground/20 py-5 pr-5">
                <p className="m-0 text-xs text-foreground/40">
                  Type
                </p>

                <p className="m-0 mt-2 text-sm">
                  Design-Build Installation
                </p>
              </div>

              <div className="border-r border-foreground/20 px-5 py-5">
                <p className="m-0 text-xs text-foreground/40">
                  Exhibition
                </p>

                <p className="m-0 mt-2 text-sm">
                  Lumière: The Art of Light
                </p>
              </div>

              <div className="border-r border-foreground/20 px-5 py-5">
                <p className="m-0 text-xs text-foreground/40">
                  Location
                </p>

                <p className="m-0 mt-2 text-sm">
                  Ontario Place, Toronto
                </p>
              </div>

              <div className="border-r border-foreground/20 px-5 py-5">
                <p className="m-0 text-xs text-foreground/40">
                  Year
                </p>

                <p className="m-0 mt-2 text-sm">
                  2023
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

          </div>
        </section>

        {/* =====================================================
            OVERVIEW + ROLE
        ===================================================== */}

        <section className="px-5 py-12 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-10">

              {/* OVERVIEW */}

              <div className="lg:col-span-7">

                <div className="border-t border-foreground/20 pt-4 sm:pt-5">

                  <div className="grid gap-5 sm:grid-cols-12 sm:gap-8">

                    <div className="sm:col-span-3">

                      <p className="m-0 text-[10px] text-foreground/40 sm:text-xs">
                        01
                      </p>

                      <p className="m-0 mt-1.5 text-xs sm:mt-2 sm:text-sm">
                        Project Overview
                      </p>

                    </div>

                    <div className="sm:col-span-9">

                      <p className="m-0 text-[24px] leading-[1.22] sm:text-3xl sm:leading-[1.25]">
                        Aeolian Soundscapes explores the relationship between
                        timber, movement, light, and sound through a full-scale
                        architectural installation.
                      </p>

                      <div className="mt-5 grid gap-4 sm:mt-7 sm:grid-cols-2 sm:gap-6">

                        <p className="m-0 text-[13px] leading-[1.65] text-foreground/60 sm:text-sm sm:leading-[1.7]">
                          The project was developed as part of Lumière: The Art
                          of Light at Ontario Place and combined computational
                          design with full-scale fabrication and assembly.
                        </p>

                        <p className="m-0 text-[13px] leading-[1.65] text-foreground/60 sm:text-sm sm:leading-[1.7]">
                          The installation was produced collaboratively by a
                          team working across digital fabrication, timber
                          assembly, and on-site construction.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* ROLE */}

              <div className="lg:col-span-5">

                <div className="border-t border-foreground/20 pt-4 sm:pt-5">

                  <div className="grid gap-5 sm:grid-cols-12 sm:gap-8 lg:block">

                    <div className="sm:col-span-3 lg:col-span-auto">

                      <p className="m-0 text-[10px] text-foreground/40 sm:text-xs">
                        02
                      </p>

                      <p className="m-0 mt-1.5 text-xs sm:mt-2 sm:text-sm">
                        My Role
                      </p>

                    </div>

                    <div className="sm:col-span-9 lg:mt-8">

                      <p className="m-0 text-[24px] leading-[1.2] sm:text-3xl">
                        Fabrication + Assembly
                      </p>

                      <p className="m-0 mt-4 max-w-[600px] text-[13px] leading-[1.65] text-foreground/60 sm:mt-6 sm:text-sm sm:leading-[1.7]">
                        I contributed to the fabrication and physical assembly
                        of the installation, working as part of the team
                        responsible for translating the digital design into a
                        full-scale built structure.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            CREDITS
        ===================================================== */}

        <section className="border-t border-foreground/20 px-5 py-12 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-6 sm:gap-10 lg:grid-cols-12 lg:gap-10">

              <div className="lg:col-span-3">

                <p className="m-0 text-[10px] text-foreground/40 sm:text-xs">
                  03
                </p>

                <p className="m-0 mt-1.5 text-xs sm:mt-2 sm:text-sm">
                  Credits
                </p>

              </div>

              <div className="lg:col-span-9">

                {/* MOBILE */}
                <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:hidden">

                  <div>
                    <p className="m-0 text-[9px] text-foreground/40">
                      Project Leads
                    </p>

                    <div className="mt-3 space-y-1 text-[11px] leading-[1.4]">
                      <p className="m-0">John Nguyen</p>
                      <p className="m-0">Nicholas Hoban</p>
                      <p className="m-0">Rahul Sehijpaul</p>
                      <p className="m-0">Brady Peters</p>
                    </div>
                  </div>

                  <div>
                    <p className="m-0 text-[9px] text-foreground/40">
                      Design Leads
                    </p>

                    <div className="mt-3 space-y-1 text-[11px] leading-[1.4]">
                      <p className="m-0">John Nguyen</p>
                      <p className="m-0">Nicholas Hoban</p>
                    </div>
                  </div>

                  <div>
                    <p className="m-0 text-[9px] text-foreground/40">
                      Fabrication + Assembly
                    </p>

                    <div className="mt-3 space-y-1 text-[11px] leading-[1.4]">
                      <p className="m-0">Nermine Hassanin</p>
                      <p className="m-0">Elham Khataei</p>
                      <p className="m-0">Cameron Manore</p>
                      <p className="m-0">Zhenxiao Yang</p>
                      <p className="m-0">Selina Al Madanat</p>
                      <p className="m-0">Renée Powell-Hines</p>
                    </div>
                  </div>

                  <div>
                    <p className="m-0 text-[9px] text-transparent">
                      Fabrication
                    </p>

                    <div className="mt-3 space-y-1 text-[11px] leading-[1.4]">
                      <p className="m-0">Meera Thomas</p>
                      <p className="m-0 font-medium">Liam Cassano</p>
                      <p className="m-0">Paul Kozak</p>
                      <p className="m-0">Zachary Mollica</p>
                      <p className="m-0">Judy Liu</p>
                    </div>
                  </div>

                </div>

                {/* TABLET + DESKTOP */}
                <div className="hidden gap-x-10 gap-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-4">

                  <div>
                    <p className="m-0 text-xs text-foreground/40">
                      Project Leads
                    </p>

                    <div className="mt-4 space-y-1.5 text-sm">
                      <p className="m-0">John Nguyen</p>
                      <p className="m-0">Nicholas Hoban</p>
                      <p className="m-0">Rahul Sehijpaul</p>
                      <p className="m-0">Brady Peters</p>
                    </div>
                  </div>

                  <div>
                    <p className="m-0 text-xs text-foreground/40">
                      Design Leads
                    </p>

                    <div className="mt-4 space-y-1.5 text-sm">
                      <p className="m-0">John Nguyen</p>
                      <p className="m-0">Nicholas Hoban</p>
                    </div>
                  </div>

                  <div>
                    <p className="m-0 text-xs text-foreground/40">
                      Fabrication + Assembly
                    </p>

                    <div className="mt-4 space-y-1.5 text-sm">
                      <p className="m-0">Nermine Hassanin</p>
                      <p className="m-0">Elham Khataei</p>
                      <p className="m-0">Cameron Manore</p>
                      <p className="m-0">Zhenxiao Yang</p>
                      <p className="m-0">Selina Al Madanat</p>
                      <p className="m-0">Renée Powell-Hines</p>
                    </div>
                  </div>

                  <div>
                    <p className="m-0 text-xs text-transparent">
                      Fabrication
                    </p>

                    <div className="mt-4 space-y-1.5 text-sm">
                      <p className="m-0">Meera Thomas</p>
                      <p className="m-0 font-medium">Liam Cassano</p>
                      <p className="m-0">Paul Kozak</p>
                      <p className="m-0">Zachary Mollica</p>
                      <p className="m-0">Judy Liu</p>
                    </div>
                  </div>

                </div>

                {/* SUPPORT */}

                <div className="mt-8 border-t border-foreground/20 pt-5 sm:mt-12 sm:pt-6">

                  <div className="grid gap-3 sm:grid-cols-4 sm:gap-6">

                    <div>
                      <p className="m-0 text-[9px] text-foreground/40 sm:text-xs">
                        Funded + Supported By
                      </p>
                    </div>

                    <div className="sm:col-span-3">

                      <p className="m-0 text-[11px] sm:text-sm">
                        Government of Ontario
                      </p>

                      <p className="m-0 mt-1.5 max-w-[800px] text-[11px] leading-[1.45] text-foreground/60 sm:mt-2 sm:text-sm">
                        University of Toronto — John H. Daniels Faculty of
                        Architecture, Landscape, and Design
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            PROJECT IMAGES
        ===================================================== */}

        <section className="border-t border-foreground/20 py-12 sm:py-20 lg:py-24">

          <div className="px-5 sm:px-8 lg:px-12">

            <div className="mx-auto w-full max-w-[1800px]">

              <div className="mb-6 grid gap-6 sm:mb-10 lg:grid-cols-12">

                <div className="lg:col-span-3">

                  <p className="m-0 text-[10px] text-foreground/40 sm:text-xs">
                    04
                  </p>

                  <p className="m-0 mt-1.5 text-xs sm:mt-2 sm:text-sm">
                    Project Images
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* =====================================================
              IMAGE FLOW
          ===================================================== */}

          <div className="w-full px-5 sm:px-8 lg:px-12">

            <div className="mx-auto grid w-full max-w-[1800px] grid-cols-2 gap-2 sm:block sm:columns-2 sm:gap-4 lg:columns-3 xl:columns-4">

              {projectImages.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="overflow-hidden bg-foreground/[0.04] sm:mb-4 sm:break-inside-avoid"
                >
                  <Image
                    src={`/images/${image}`}
                    alt={`Aeolian Soundscapes — ${index + 1}`}
                    width={2000}
                    height={1500}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
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