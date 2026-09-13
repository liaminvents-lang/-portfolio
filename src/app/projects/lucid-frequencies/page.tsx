'use client';

import Layout from '@/components/layout';
import Image from 'next/image';

/* =====================================================
   PROJECT IMAGES
===================================================== */

const projectImages = [
  'IMG_2320.JPG',
  'IMG_2315.JPG',
  'IMG_2316.JPG',
  'IMG_2314 2.JPG',
  'IMG_1438.JPG',
  'IMG_1429.JPG',
  'IMG_1425.JPG',
  'IMG_1422.JPG',
  'IMG_1421.JPG',
];

export default function LucidFrequenciesPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="w-full px-5 pt-5 sm:px-8 sm:pt-8 lg:px-12 lg:pt-10">
          <div className="relative mx-auto aspect-[16/9] w-full max-w-[1800px] overflow-hidden bg-foreground/[0.04]">
            <Image
              src="/images/lucid.jpg"
              alt="Lucid Frequencies"
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
                  Lucid Frequencies
                </h1>

              </div>

              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A full-scale temporary installation developed through
                  computational design, digital fabrication, integrated
                  lighting, and collaborative assembly.
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
                Project
              </p>

              <p className="m-0 mt-2 text-sm">
                Lucid Frequencies
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
                2026
              </p>
            </div>

            <div className="px-5 py-5">
              <p className="m-0 text-xs text-foreground/40">
                Role
              </p>

              <p className="m-0 mt-2 text-sm">
                Fabrication + Assembly + Electrical
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
                        Lucid Frequencies explored temporary architecture as
                        a reusable system rather than a single-use object.
                      </p>

                      <div className="mt-7 grid gap-6 sm:grid-cols-2">

                        <p className="m-0 text-sm leading-[1.7] text-foreground/60">
                          The installation developed a reciprocal-frame
                          structure composed of repeatable timber members,
                          allowing a complex full-scale geometry to emerge
                          through the assembly of discrete components.
                        </p>

                        <p className="m-0 text-sm leading-[1.7] text-foreground/60">
                          Designed around assembly, disassembly, transport,
                          and reconfiguration, the project investigated how
                          temporary structures could operate as reusable
                          material systems across multiple deployments.
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
                        Fabrication + Assembly + Electrical Integration
                      </p>

                      <p className="m-0 mt-6 max-w-[600px] text-sm leading-[1.7] text-foreground/60">
                        I contributed to the fabrication and full-scale
                        assembly of the installation, working as part of the
                        team responsible for translating the digital design
                        into the built structure.
                      </p>

                      <p className="m-0 mt-4 max-w-[600px] text-sm leading-[1.7] text-foreground/60">
                        My role also extended into the electrical integration
                        of the project, including planning cable routing,
                        wiring components, specifying electrical hardware,
                        determining required supplies, and sourcing and
                        ordering materials for the installation.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            ELECTRICAL INTEGRATION
        ===================================================== */}

        <section className="border-t border-foreground/20 px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">

              <div className="lg:col-span-3">

                <p className="m-0 text-xs text-foreground/40">
                  03
                </p>

                <p className="m-0 mt-2 text-sm">
                  Electrical Integration
                </p>

              </div>

              <div className="lg:col-span-9">

                <p className="m-0 max-w-[900px] text-3xl leading-[1.2] sm:text-4xl">
                  Integrating the electrical system into the architecture
                  required coordinating wiring, hardware, and cable routing
                  directly with the physical structure.
                </p>

                <div className="mt-12 grid gap-10 border-t border-foreground/20 pt-6 sm:grid-cols-2 lg:grid-cols-4">

                  <div>

                    <p className="m-0 text-xs text-foreground/40">
                      01
                    </p>

                    <p className="m-0 mt-3 text-lg">
                      Cable Routing
                    </p>

                    <p className="m-0 mt-3 text-sm leading-[1.7] text-foreground/60">
                      Planning wiring paths through the structure while
                      maintaining access for installation and assembly.
                    </p>

                  </div>

                  <div>

                    <p className="m-0 text-xs text-foreground/40">
                      02
                    </p>

                    <p className="m-0 mt-3 text-lg">
                      Wiring
                    </p>

                    <p className="m-0 mt-3 text-sm leading-[1.7] text-foreground/60">
                      Preparing and connecting electrical components used
                      throughout the installation.
                    </p>

                  </div>

                  <div>

                    <p className="m-0 text-xs text-foreground/40">
                      03
                    </p>

                    <p className="m-0 mt-3 text-lg">
                      Specification
                    </p>

                    <p className="m-0 mt-3 text-sm leading-[1.7] text-foreground/60">
                      Identifying appropriate electrical hardware, cable,
                      connectors, and supporting components.
                    </p>

                  </div>

                  <div>

                    <p className="m-0 text-xs text-foreground/40">
                      04
                    </p>

                    <p className="m-0 mt-3 text-lg">
                      Procurement
                    </p>

                    <p className="m-0 mt-3 text-sm leading-[1.7] text-foreground/60">
                      Developing the required supply list and sourcing and
                      ordering components for fabrication and installation.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            PROJECT IMAGES
        ===================================================== */}

        <section className="border-t border-foreground/20 py-20 lg:py-24">

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
                    Fabrication, assembly, electrical integration, and
                    installation of Lucid Frequencies.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* IMAGE FLOW */}

          <div className="w-full px-5 sm:px-8 lg:px-12">

            <div className="mx-auto w-full max-w-[1800px] columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">

              {projectImages.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="mb-4 break-inside-avoid overflow-hidden bg-foreground/[0.04]"
                >
                  <Image
                    src={`/images/${image}`}
                    alt={`Lucid Frequencies — ${index + 1}`}
                    width={2000}
                    height={1500}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
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