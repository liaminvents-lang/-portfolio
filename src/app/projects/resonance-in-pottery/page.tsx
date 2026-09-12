'use client';

import Layout from '@/components/layout';
import Image from 'next/image';

/* =====================================================
   PROJECT IMAGES
   REVERSED ORDER FROM SCREENSHOTS
===================================================== */

const projectImages = [
  'DSC01871.jpg',
  'DSC01869.jpg',
  'DSC01856.jpg',
  'DSC01847.jpg',
  'DSC01838.jpg',
  'DSC01836.jpg',
  'DSC01827.jpg',
  'DSC01823.jpg',
  'DSC01811.jpg',
  'DSC01807.jpg',
  'DSC01801.jpg',
  'DSC01798.jpg',
  'DSC01793.jpg',
  'DSC01789.jpg',
  'DSC01780.jpg',
  'DSC01771.jpg',
  'DSC01770.jpg',
  'DSC01769.jpg',
  'DSC01768.jpg',
  'DSC01767.jpg',
  'DSC01753.jpg',
  'DSC01749.jpg',
  'DSC01747.jpg',
  'DSC01745.jpg',
  'DSC01744.jpg',
  'DSC01739.jpg',
  'DSC01736.jpg',
  'DSC01732.jpg',
  'DSC01728.jpg',
  'DSC01727.jpg',
  'DSC01724.jpg',
  'DSC01721.jpg',
  'DSC01717.jpg',
  'DSC01713.jpg',
  'DSC01706.jpg',
  'DSC01701.jpg',
  'DSC01698.jpg',
  'DSC01696.jpg',
  'DSC01692.jpg',
  'DSC01691.jpg',
  'DSC01686.jpg',
  'DSC01683.jpg',
  'DSC01676.jpg',
  'DSC01663.jpg',
  'DSC01659.jpg',
  'DSC01657.jpg',
  'DSC01647.jpg',
  'DSC01637.jpg',
];

export default function ResonanceInPotteryPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="w-full px-5 pt-5 sm:px-8 sm:pt-8 lg:px-12 lg:pt-10">
          <div className="relative mx-auto aspect-[16/9] w-full max-w-[1800px] overflow-hidden bg-foreground/[0.04]">
            <Image
              src="/images/Claywall.jpg"
              alt="Resonance in Pottery acoustic clay vases"
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
                  Robotic Fabrication
                </p>

                <h1 className="m-0 mt-4 max-w-[1200px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  Resonance in Pottery: Acoustic Clay Vases
                </h1>

              </div>

              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A series of robotically fabricated clay vessels exploring
                  how ceramic geometry can be tuned for architectural acoustic
                  performance.
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
                Research Installation
              </p>

            </div>

            <div className="border-r border-foreground/20 px-5 py-5">

              <p className="m-0 text-xs text-foreground/40">
                Material
              </p>

              <p className="m-0 mt-2 text-sm">
                Ceramic Clay
              </p>

            </div>

            <div className="border-r border-foreground/20 px-5 py-5">

              <p className="m-0 text-xs text-foreground/40">
                Fabrication
              </p>

              <p className="m-0 mt-2 text-sm">
                Robotic Clay Extrusion
              </p>

            </div>

            <div className="border-r border-foreground/20 px-5 py-5">

              <p className="m-0 text-xs text-foreground/40">
                Exhibition
              </p>

              <p className="m-0 mt-2 text-sm">
                Canadian Clay and Glass Gallery
              </p>

            </div>

            <div className="px-5 py-5">

              <p className="m-0 text-xs text-foreground/40">
                Role
              </p>

              <p className="m-0 mt-2 text-sm">
                Collaborator
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
                        Resonance in Pottery investigates how ceramic vessels
                        can function as architectural acoustic absorbers through
                        the geometry of Helmholtz resonators.
                      </p>

                      <div className="mt-7 grid gap-6 sm:grid-cols-2">

                        <p className="m-0 text-sm leading-[1.7] text-foreground/60">
                          The research connects acoustic simulation with
                          robotic clay fabrication, allowing vase geometry to
                          be digitally tuned in relation to specific resonant
                          frequencies.
                        </p>

                        <p className="m-0 text-sm leading-[1.7] text-foreground/60">
                          The installation presents three inverted-neck vase
                          sizes tuned to approximately 325 Hz, 167 Hz, and
                          131 Hz, demonstrating how mass-customized ceramic
                          components could contribute to architectural acoustic
                          treatments.
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
                        Collaborator
                      </p>

                      <p className="m-0 mt-6 max-w-[600px] text-sm leading-[1.7] text-foreground/60">
                        I contributed as part of the project team supporting
                        the development, production, and preparation of the
                        robotically fabricated ceramic prototypes for the
                        installation.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            03 — ROBOTIC FABRICATION
        ===================================================== */}

        <section className="border-t border-foreground/20 px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">

              {/* TEXT */}

              <div className="lg:col-span-5 lg:flex lg:flex-col lg:justify-between">

                <div>

                  <p className="m-0 text-xs text-foreground/40">
                    03
                  </p>

                  <p className="m-0 mt-2 text-sm">
                    Robotic Fabrication
                  </p>

                </div>

                <div className="mt-10 max-w-[520px] lg:mt-0">

                  <p className="m-0 text-2xl leading-[1.25] sm:text-3xl">
                    Robotic clay extrusion translated digital toolpaths
                    directly into layered ceramic forms.
                  </p>

                  <p className="m-0 mt-6 text-sm leading-[1.7] text-foreground/60">
                    The fabrication workflow used an industrial robotic arm
                    equipped with a clay extrusion system to build each vessel
                    layer by layer.
                  </p>

                  <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                    Adjustments to geometry, extrusion, and toolpath behavior
                    allowed the physical prototypes to respond to the acoustic
                    parameters developed through the digital design process.
                  </p>

                </div>

              </div>

              {/* PORTRAIT VIDEO */}

              <div className="lg:col-span-5 lg:col-start-7">

                <div className="mx-auto aspect-[4/5] w-full max-w-[620px] overflow-hidden bg-black">

                  <video
                    src="/videos/IMG_2535 2.MOV"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            04 — CREDITS
        ===================================================== */}

        <section className="border-t border-foreground/20 px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">

              <div className="lg:col-span-3">

                <p className="m-0 text-xs text-foreground/40">
                  04
                </p>

                <p className="m-0 mt-2 text-sm">
                  Credits
                </p>

              </div>

              <div className="lg:col-span-9">

                {/* LEADS + CLIENT */}

                <div className="grid gap-10 border-b border-foreground/20 pb-10 sm:grid-cols-2">

                  <div>

                    <p className="m-0 text-xs text-foreground/40">
                      Lead Collaborators
                    </p>

                    <div className="mt-4 space-y-1.5 text-sm">

                      <p className="m-0">
                        Nicholas Hoban
                      </p>

                      <p className="m-0">
                        Brady Peters
                      </p>

                    </div>

                  </div>

                  <div>

                    <p className="m-0 text-xs text-foreground/40">
                      Client
                    </p>

                    <p className="m-0 mt-4 text-sm">
                      The Canadian Clay and Glass Gallery
                    </p>

                  </div>

                </div>

                {/* COLLABORATORS */}

                <div className="border-b border-foreground/20 py-10">

                  <p className="m-0 text-xs text-foreground/40">
                    Collaborators
                  </p>

                  <div className="mt-5 grid gap-x-10 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">

                    <p className="m-0">Nermine Hassanin</p>
                    <p className="m-0">Elham Khatei</p>
                    <p className="m-0">Ross Cocks</p>

                    <p className="m-0">Yuuko Kosame Li-Han</p>
                    <p className="m-0">Pablo Espinal Henao</p>
                    <p className="m-0">Robin Yu Bin He</p>

                    <p className="m-0">Paul Kozak</p>
                    <p className="m-0">Rahul Sehijpaul</p>
                    <p className="m-0 font-medium">Liam Cassano</p>

                  </div>

                </div>

                {/* FUNDING + PHOTOGRAPHY */}

                <div className="grid gap-10 pt-10 sm:grid-cols-2">

                  <div>

                    <p className="m-0 text-xs text-foreground/40">
                      Funding
                    </p>

                    <p className="m-0 mt-4 max-w-[520px] text-sm leading-[1.6]">
                      Natural Sciences and Engineering Research Council
                      of Canada (NSERC)
                    </p>

                  </div>

                  <div>

                    <p className="m-0 text-xs text-foreground/40">
                      Photography
                    </p>

                    <p className="m-0 mt-4 text-sm">
                      6ix Films
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            05 — PROJECT IMAGES
        ===================================================== */}

        <section className="border-t border-foreground/20 py-20 lg:py-24">

          {/* HEADER */}

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

                  <p className="m-0 max-w-[650px] text-sm leading-[1.6] text-foreground/50">
                    Acoustic vase prototypes and installation documentation.
                  </p>

                </div>

              </div>

            </div>
          </div>

          {/* FULL-WIDTH 5-COLUMN GALLERY */}

          <div className="w-full px-2 sm:px-3 lg:px-4">

            <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5 lg:gap-4">

              {projectImages.map((image, index) => (
                <div
                  key={image}
                  className="relative aspect-[4/5] w-full overflow-hidden bg-foreground/[0.04]"
                >

                  <Image
                    src={`/images/${image}`}
                    alt={`Resonance in Pottery — ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
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