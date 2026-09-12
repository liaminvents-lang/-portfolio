'use client';

import Layout from '@/components/layout';
import Image from 'next/image';

export default function GeospherePage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* =====================================================
            HERO VIDEO
        ===================================================== */}

        <section className="w-full">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
            <iframe
              src="https://player.vimeo.com/video/1226115925?autoplay=1&muted=1&loop=1&background=1&autopause=0&title=0&byline=0&portrait=0"
              className="absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Geosphere"
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
                  Geosphere: Beyond Single-Use Reciprocal Frame Structures
                </h1>

              </div>

              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A full-scale timber installation exploring reciprocal frame
                  construction, reusable assembly systems, and collaborative
                  fabrication for Lumière: The Art of Light.
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
            OVERVIEW + ROLE
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
                        Geosphere investigates how reciprocal timber frame
                        systems can be designed for repeated assembly,
                        disassembly, and reuse.
                      </p>

                      <div className="mt-7 grid gap-6 sm:grid-cols-2">

                        <p className="m-0 text-sm leading-[1.7] text-foreground/60">
                          Developed for Lumière: The Art of Light, the
                          installation uses a reciprocal structural system in
                          which individual timber members collectively form a
                          larger self-supporting spatial structure.
                        </p>

                        <p className="m-0 text-sm leading-[1.7] text-foreground/60">
                          The project combines computational design,
                          prefabrication, and full-scale assembly while
                          considering how temporary installations can move
                          beyond single-use construction.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* ROLE */}

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
                        I contributed to the fabrication and assembly of the
                        timber structure, working with the team to prepare
                        components, construct the reciprocal frame, and install
                        the completed project on site.
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

                <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">

                  {/* PROJECT LEADS */}

                  <div>

                    <p className="m-0 text-xs text-foreground/40">
                      Project Leads
                    </p>

                    <div className="mt-4 space-y-1.5 text-sm">
                      <p className="m-0">John Nguyen</p>
                      <p className="m-0">Nicholas Hoban</p>
                      <p className="m-0">Rahul Sehijpaul</p>
                      <p className="m-0">Paul Kozak</p>
                    </div>

                  </div>

                  {/* DESIGN LEADS */}

                  <div>

                    <p className="m-0 text-xs text-foreground/40">
                      Design Leads
                    </p>

                    <div className="mt-4 space-y-1.5 text-sm">
                      <p className="m-0">John Nguyen</p>
                      <p className="m-0">Nicholas Hoban</p>
                    </div>

                  </div>

                  {/* FABRICATION 1 */}

                  <div>

                    <p className="m-0 text-xs text-foreground/40">
                      Fabrication + Assembly
                    </p>

                    <div className="mt-4 space-y-1.5 text-sm">
                      <p className="m-0">Cameron Manore</p>
                      <p className="m-0 font-medium">Liam Cassano</p>
                      <p className="m-0">Sadi Wali</p>
                      <p className="m-0">Selina Almadanat</p>
                      <p className="m-0">Yuuko Kosage Li-Han</p>
                      <p className="m-0">Zhenxiao Yang</p>
                    </div>

                  </div>

                  {/* FABRICATION 2 */}

                  <div>

                    <p className="m-0 text-xs text-transparent">
                      Fabrication
                    </p>

                    <div className="mt-4 space-y-1.5 text-sm">
                      <p className="m-0">Ala Mohammadi</p>
                      <p className="m-0">Sophia de Uria</p>
                      <p className="m-0">Mucteba Core</p>
                      <p className="m-0">Shannon Dacanay</p>
                      <p className="m-0">Olivia Carson</p>
                      <p className="m-0">Nicole Quesnelle</p>
                    </div>

                  </div>

                </div>

                {/* SUPPORT */}

                <div className="mt-12 border-t border-foreground/20 pt-6">

                  <div className="grid gap-6 sm:grid-cols-4">

                    <div>
                      <p className="m-0 text-xs text-foreground/40">
                        Funded + Supported By
                      </p>
                    </div>

                    <div className="sm:col-span-3">
                      <p className="m-0 text-sm">
                        Ontario Ministry of Infrastructure
                      </p>

                      <p className="m-0 mt-2 max-w-[800px] text-sm text-foreground/60">
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
            PHOTOS
        ===================================================== */}

        <section className="border-t border-foreground/20 px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
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

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <div className="relative aspect-[4/3] overflow-hidden bg-foreground/[0.04]">
                <Image
                  src="/images/geosphere-01.jpg"
                  alt="Geosphere reciprocal timber structure"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden bg-foreground/[0.04]">
                <Image
                  src="/images/geosphere-02.jpg"
                  alt="Geosphere fabrication and assembly"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-[16/9] overflow-hidden bg-foreground/[0.04] md:col-span-2">
                <Image
                  src="/images/geosphere-03.jpg"
                  alt="Completed Geosphere installation"
                  fill
                  className="object-cover"
                />
              </div>

            </div>

          </div>
        </section>

      </main>
    </Layout>
  );
}