'use client';

import Layout from '@/components/layout';
import Image from 'next/image';

export default function RobotMade2024UofTPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* =====================================================
            HERO IMAGE
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
                  A collaborative design-build project exploring full-scale
                  timber construction through computational design, robotic
                  fabrication, and physical assembly.
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
                        Robot Made 2024 explored how computational design and
                        industrial robotic fabrication could be integrated
                        into a collaborative full-scale design-build workflow.
                      </p>

                      <div className="mt-7 grid gap-6 sm:grid-cols-2">

                        <p className="m-0 text-sm leading-[1.7] text-foreground/60">
                          The project moved between digital design, material
                          preparation, robotic fabrication, and physical
                          construction to produce a full-scale timber
                          structure.
                        </p>

                        <p className="m-0 text-sm leading-[1.7] text-foreground/60">
                          Fabricated components were brought together through
                          a collaborative assembly process, connecting robotic
                          production with the realities of full-scale
                          construction.
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
                        I worked as part of the fabrication and assembly team,
                        contributing to the production and construction of the
                        full-scale structure and working directly with the
                        fabricated components during assembly.
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

              {/* LABEL */}

              <div className="lg:col-span-3">

                <p className="m-0 text-xs text-foreground/40">
                  03
                </p>

                <p className="m-0 mt-2 text-sm">
                  Credits
                </p>

              </div>

              {/* CREDIT CONTENT */}

              <div className="lg:col-span-9">

                {/* PROJECT LEADS */}

                <div className="grid gap-8 border-b border-foreground/20 pb-10 sm:grid-cols-4">

                  <div>
                    <p className="m-0 text-xs text-foreground/40">
                      Project Leads
                    </p>
                  </div>

                  <div className="sm:col-span-3">
                    <div className="grid gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
                      <p className="m-0">Nicholas Hoban</p>
                      <p className="m-0">AnnaLisa Meyboom</p>
                      <p className="m-0">Aryan Rezaei Rad</p>
                    </div>
                  </div>

                </div>

                {/* FABRICATION + ASSEMBLY */}

                <div className="grid gap-8 pt-10 sm:grid-cols-4">

                  <div>
                    <p className="m-0 text-xs text-foreground/40">
                      Fabrication + Assembly
                    </p>
                  </div>

                  <div className="sm:col-span-3">

                    <div className="grid gap-x-10 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">

                      <p className="m-0">
                        Ala Mohammadi
                      </p>

                      <p className="m-0">
                        Amirhossein Heidari
                      </p>

                      <p className="m-0">
                        Annie Song
                      </p>

                      <p className="m-0">
                        Caroline Guirguis
                      </p>

                      <p className="m-0">
                        Jagteshwar Singh
                      </p>

                      <p className="m-0">
                        Jaya Xue
                      </p>

                      <p className="m-0">
                        Julia Paulson
                      </p>

                      <p className="m-0">
                        Jun Heng Tan
                      </p>

                      <p className="m-0 font-medium">
                        Liam Cassano
                      </p>

                      <p className="m-0">
                        Sarah Mak
                      </p>

                      <p className="m-0">
                        Yixuan Zhang
                      </p>

                      <p className="m-0">
                        Zhelun Li
                      </p>

                      <p className="m-0">
                        Rahul Sehijpaul
                      </p>

                      <p className="m-0">
                        Paul Kozak
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
                  src="/images/robotmadeuoft-01.JPG"
                  alt="Robot Made fabrication"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden bg-foreground/[0.04]">
                <Image
                  src="/images/robotmadeuoft-02.JPG"
                  alt="Robot Made assembly"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-[16/9] overflow-hidden bg-foreground/[0.04] md:col-span-2">
                <Image
                  src="/images/robotmadeuoft-03.JPG"
                  alt="Robot Made 2024 completed structure"
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