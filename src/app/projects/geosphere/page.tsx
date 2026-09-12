'use client';

import Layout from '@/components/layout';
import Image from 'next/image';

/* =====================================================
   PROJECT IMAGES
===================================================== */

const projectImages = [
  'DSC02671-Enhanced-NR 2.JPG',
  'DSC02854-2-Enhanced-NR.JPG',
  'DSC02884-2-Enhanced-NR 2.JPG',
  'DSC02891-Enhanced-NR 2.JPG',
  'DSC02893-Enhanced-NR-2 2.JPG',
  'DSC02949-Enhanced-NR 3.JPG',
  'DSC02949-Enhanced-NR 4.jpg',
  'DSC02970-Enhanced-NR 4.JPG',
  'DSC03024-2-Enhanced-NR-2 2.JPG',
  'DJI_0008.JPG',
  'DJI_0014.JPG',
  'DJI_0019.JPG',
];

/* =====================================================
   PAGE
===================================================== */

export default function GeospherePage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* =====================================================
            HERO VIDEO
        ===================================================== */}

        <section className="w-full">
          <div className="relative aspect-video w-full overflow-hidden bg-black">
            <iframe
              src="https://player.vimeo.com/video/1226115925?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
              title="Geosphere"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full border-0"
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
                  Geosphere
                </h1>

              </div>

              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A full-scale illuminated timber installation developed for
                  the 2024 Lumière: The Art of Light exhibition at Ontario
                  Place.
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
            01 + 02 — OVERVIEW + MY ROLE
        ===================================================== */}

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">

              {/* 01 — OVERVIEW */}

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
                        Geosphere explores reciprocal timber construction
                        through a full-scale illuminated installation developed
                        for Lumière: The Art of Light.
                      </p>

                      <div className="mt-7 grid gap-6 sm:grid-cols-2">

                        <p className="m-0 text-sm leading-[1.7] text-foreground/60">
                          The project combined computational design with
                          full-scale fabrication to produce a self-supporting
                          timber structure composed of repeating interconnected
                          members.
                        </p>

                        <p className="m-0 text-sm leading-[1.7] text-foreground/60">
                          Integrated lighting transformed the structure after
                          dark, emphasizing its geometry and creating a
                          changing relationship between the installation,
                          landscape, and surrounding exhibition.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* 02 — MY ROLE */}

              <div className="lg:col-span-5">

                <div className="border-t border-foreground/20 pt-5">

                  <div className="grid gap-8 sm:grid-cols-12 lg:block">

                    <div className="sm:col-span-3">
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

                {/* PROJECT + DESIGN LEADS */}

                <div className="grid gap-10 border-b border-foreground/20 pb-10 sm:grid-cols-2">

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

                  <div>
                    <p className="m-0 text-xs text-foreground/40">
                      Design Leads
                    </p>

                    <div className="mt-4 space-y-1.5 text-sm">
                      <p className="m-0">John Nguyen</p>
                      <p className="m-0">Nicholas Hoban</p>
                    </div>
                  </div>

                </div>

                {/* FABRICATION + ASSEMBLY */}

                <div className="border-b border-foreground/20 py-10">

                  <p className="m-0 text-xs text-foreground/40">
                    Fabrication + Assembly
                  </p>

                  <div className="mt-5 grid gap-x-10 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
                    <p className="m-0">Cameron Manore</p>
                    <p className="m-0 font-medium">Liam Cassano</p>
                    <p className="m-0">Sadi Wali</p>

                    <p className="m-0">Selina Almadanat</p>
                    <p className="m-0">Yuuko Kosage Li-Han</p>
                    <p className="m-0">Zhenxiao Yang</p>

                    <p className="m-0">Ala Mohammadi</p>
                    <p className="m-0">Sophia de Uria</p>
                    <p className="m-0">Mucteba Core</p>

                    <p className="m-0">Shannon Dacanay</p>
                    <p className="m-0">Olivia Carson</p>
                    <p className="m-0">Nicole Quesnelle</p>
                  </div>

                </div>

                {/* FUNDING */}

                <div className="grid gap-10 pt-10 sm:grid-cols-2">

                  <div>
                    <p className="m-0 text-xs text-foreground/40">
                      Funded By
                    </p>

                    <p className="m-0 mt-4 text-sm">
                      Ontario Ministry of Infrastructure
                    </p>
                  </div>

                  <div>
                    <p className="m-0 text-xs text-foreground/40">
                      Supported By
                    </p>

                    <p className="m-0 mt-4 max-w-[520px] text-sm leading-[1.6]">
                      University of Toronto — John H. Daniels Faculty of
                      Architecture, Landscape, and Design
                    </p>
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

          {/* HEADER */}

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
                  <p className="m-0 max-w-[650px] text-sm leading-[1.6] text-foreground/50">
                    Fabrication, assembly, and installation of Geosphere for
                    Lumière: The Art of Light at Ontario Place.
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* =====================================================
              FULL-WIDTH 4-COLUMN GALLERY
          ===================================================== */}

          <div className="w-full px-2 sm:px-3 lg:px-4">

            <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 lg:gap-4">

              {projectImages.map((image, index) => (
                <div
                  key={image}
                  className="relative aspect-[4/5] w-full overflow-hidden bg-foreground/[0.04]"
                >
                  <Image
                    src={`/images/${image}`}
                    alt={`Geosphere — ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
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