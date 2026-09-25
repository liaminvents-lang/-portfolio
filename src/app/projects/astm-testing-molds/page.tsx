'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout';

export default function ASTMTestingMoldsPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* HERO IMAGE */}

        <section className="px-5 pt-32 sm:px-8 lg:px-12 lg:pt-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="relative aspect-[20/15] w-full overflow-hidden">
              <Image
                src="/images/Picture1.jpg"
                alt="ASTM testing mold development"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </section>


        {/* INTRO */}

        <section className="px-5 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-20">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">

              <div className="lg:col-span-7">
                <p className="m-0 text-sm text-foreground/40">
                  Material Testing Tooling
                </p>

                <h1 className="m-0 mt-4 max-w-[1100px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  ASTM Testing
                  <br />
                  Molds
                </h1>
              </div>

              <div className="flex items-end lg:col-span-5">
                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  An iterative mold system developed to produce consistent
                  lignin-based specimens for standardized mechanical testing.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* METADATA */}

        <section className="border-y border-foreground/20 px-5 sm:px-8 lg:px-12">
          <div className="mx-auto grid w-full max-w-[1800px] grid-cols-2 lg:grid-cols-5">

            <div className="border-r border-foreground/20 py-6 pr-5">
              <p className="m-0 text-xs text-foreground/40">
                Type
              </p>

              <p className="m-0 mt-2 text-sm">
                Testing Tooling
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Standard
              </p>

              <p className="m-0 mt-2 text-sm">
                ASTM D638
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Specimen
              </p>

              <p className="m-0 mt-2 text-sm leading-[1.6]">
                Dog-Bone
                <br />
                Tensile Samples
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Fabrication
              </p>

              <p className="m-0 mt-2 text-sm leading-[1.6]">
                3D Printing
                <br />
                CNC Milling
              </p>
            </div>

            <div className="px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Final System
              </p>

              <p className="m-0 mt-2 text-sm">
                Silicone Hybrid Mold
              </p>
            </div>

          </div>
        </section>


        {/* SECTION 01 — MOLD DEVELOPMENT */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">
                <p className="m-0 text-sm text-foreground/40">
                  01
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Mold Development
                </h2>
              </div>

              <div className="lg:col-span-5">
                <p className="m-0 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The mold system evolved through repeated changes in geometry,
                  orientation, material, and forming strategy.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    Mold development responded directly to the behaviour of the
                    lignin-based material during casting, curing, and
                    demolding. Each iteration exposed different limitations in
                    surface quality, consolidation, material flow, and specimen
                    removal.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The objective was to establish a repeatable method for
                    producing controlled specimen geometries suitable for
                    mechanical testing.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="relative mx-auto aspect-[9/16] w-full max-w-[430px] overflow-hidden">
                  <video
                    src="/videos/molddevvideo.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* SECTION 02 — ASTM GEOMETRY */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">
                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  ASTM Geometry
                </h2>
              </div>

              <div className="lg:col-span-9">
                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Custom molds were designed around ASTM D638 dog-bone geometry
                  for tensile testing.
                </p>

                <div className="mt-14 grid gap-10 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    ASTM D638 uses a reduced central gauge section with enlarged
                    ends for gripping. The geometry is intended to concentrate
                    deformation within the central region and promote failure
                    away from the grips.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The mold cavities maintained consistent specimen geometry,
                    including a uniform gauge section, reducing dimensional
                    variation between samples and allowing specimens to be
                    tested directly in their as-formed state.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-16 w-full">
              <div className="relative aspect-[2.2/1] w-full overflow-hidden">
                <Image
                  src="/images/ASTMstandard.png"
                  alt="ASTM D638 tensile specimen standard geometry"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 03 — INITIAL CASTING */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Initial Casting
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Early horizontal molds established the specimen geometry but
                  revealed problems with consolidation and surface quality.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    Initial specimens were poured into horizontal molds and
                    allowed to settle under gravity. While straightforward to
                    cast, the process produced pitting, inconsistent surface
                    finishes, and incomplete consolidation.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    These effects were particularly visible on the upper
                    surface of the specimen, showing that gravity casting alone
                    was not producing sufficiently consistent samples.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/images/ligningdogbones.jpg"
                    alt="Early lignin dog-bone specimens"
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>

            </div>

            <div className="mt-16 w-full">
              <div className="relative aspect-video w-full overflow-hidden">
                <video
                  src="/videos/lignin pour.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 04 — VERTICAL CASTING */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Vertical Casting
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Casting orientation was changed in an attempt to improve
                  consolidation through the specimen.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    The mold was moved into a vertical configuration to promote
                    more uniform consolidation along the primary axis of the
                    specimen.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The vertical setup instead produced a persistent void at
                    the top of the specimen and uneven curing. Material near
                    the mold interface solidified more quickly while the
                    interior remained under-consolidated.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative h-[600px] w-full overflow-hidden sm:h-[680px] lg:h-[720px]">
                  <Image
                    src="/images/vertdogbone.png"
                    alt="Vertical dog-bone casting mold and resulting specimen"
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* SECTION 05 — TPU MOLD DEVELOPMENT */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">
                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  TPU Mold Development
                </h2>
              </div>

              <div className="lg:col-span-9">
                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Flexible TPU molds were introduced after rigid molds caused
                  specimens to fracture during removal.
                </p>

                <div className="mt-14 grid gap-10 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    TPU allowed the mold to deform during demolding, reducing
                    stress concentrations and improving specimen recovery
                    compared with rigid mold systems.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Multiple TPU mold iterations were produced as the geometry
                    and casting process continued to develop.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-16 w-full">
              <div className="relative aspect-[2/1] w-full overflow-hidden">
                <Image
                  src="/images/molddevfigure.png"
                  alt="Development of the flexible mold system"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 06 — MATERIAL FLOW */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">
                <p className="m-0 text-sm text-foreground/40">
                  06
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Material Flow
                </h2>
              </div>

              <div className="lg:col-span-9">
                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Mold geometry was modified to control filling, excess
                  material, and trapped air during casting.
                </p>

                <div className="mt-14 grid gap-6 md:grid-cols-3">

                  <div className="border-t border-foreground/20 pt-5">
                    <p className="m-0 text-sm text-foreground/40">
                      Lead-In + Lead-Out
                    </p>

                    <p className="m-0 mt-3 text-xl leading-[1.35]">
                      Features added to guide material flow.
                    </p>
                  </div>

                  <div className="border-t border-foreground/20 pt-5">
                    <p className="m-0 text-sm text-foreground/40">
                      Over-Pour
                    </p>

                    <p className="m-0 mt-3 text-xl leading-[1.35]">
                      Additional regions provided space for excess material.
                    </p>
                  </div>

                  <div className="border-t border-foreground/20 pt-5">
                    <p className="m-0 text-sm text-foreground/40">
                      Venting
                    </p>

                    <p className="m-0 mt-3 text-xl leading-[1.35]">
                      Pockets introduced to reduce air entrapment.
                    </p>
                  </div>

                </div>

                <div className="mt-12 grid gap-10 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    Together, these changes improved filling behaviour and
                    reduced internal void formation within the specimens.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    TPU nevertheless had limited durability under repeated
                    thermal and mechanical loading. Progressive deformation
                    reduced dimensional accuracy and introduced surface
                    artifacts into later casts.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* SECTION 07 — COMPRESSION CASTING */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">
                <p className="m-0 text-sm text-foreground/40">
                  07
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Compression Casting
                </h2>
              </div>

              <div className="lg:col-span-9">
                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The process returned to horizontal casting, combining
                  over-pour geometry with hydraulic compression.
                </p>

                <div className="mt-14 grid gap-10 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    Excess material was intentionally introduced into the mold
                    and then compressed using the hydraulic press.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Compression increased contact between the lignin and mold
                    surfaces, reduced void formation, and improved density
                    throughout the specimen. Pressure became an active part of
                    the forming process rather than the mold acting only as a
                    container.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-10">

              <div>
                <div className="relative aspect-video w-full overflow-hidden">
                  <video
                    src="/videos/overpour.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Over-Pour
                </p>
              </div>

              <div>
                <div className="relative aspect-video w-full overflow-hidden">
                  <video
                    src="/videos/presspropccess.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Hydraulic Compression
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* SECTION 08 — MOLD SURFACE TESTING */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">
                <p className="m-0 text-sm text-foreground/40">
                  08
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Mold Surface Testing
                </h2>
              </div>

              <div className="lg:col-span-9">
                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Different rigid mold interfaces were tested to balance
                  thermal performance, surface quality, and demolding.
                </p>

                <div className="mt-14 grid gap-6 md:grid-cols-2">

                  <div className="border-t border-foreground/20 pt-5">
                    <p className="m-0 text-sm text-foreground/40">
                      Stainless Steel + Aluminum
                    </p>

                    <p className="m-0 mt-3 text-xl leading-[1.35]">
                      Strong lignin adhesion remained even with release agents.
                    </p>
                  </div>

                  <div className="border-t border-foreground/20 pt-5">
                    <p className="m-0 text-sm text-foreground/40">
                      PETG + PLA
                    </p>

                    <p className="m-0 mt-3 text-xl leading-[1.35]">
                      Easier to fabricate, but also unable to prevent adhesion
                      during repeated casting.
                    </p>
                  </div>

                </div>

                <div className="mt-12 grid gap-10 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    Metal plates were initially attractive because their high
                    thermal conductivity could distribute heat across the
                    sample. Adhesion, however, remained a significant
                    limitation.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Testing these interfaces led to the development of a
                    layered mold system that combined rigid alignment
                    components with a flexible casting interface.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* SECTION 09 — HYBRID MOLD ASSEMBLY */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">
                <p className="m-0 text-sm text-foreground/40">
                  09
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Hybrid Mold Assembly
                </h2>
              </div>

              <div className="lg:col-span-9">
                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The mold evolved into a layered assembly combining rigid
                  alignment, aluminum heat sinks, and a flexible interface.
                </p>

                <div className="mt-14 grid gap-6 md:grid-cols-2">

                  <div className="border-t border-foreground/20 pt-5">
                    <p className="m-0 text-sm text-foreground/40">
                      Base
                    </p>

                    <p className="m-0 mt-3 text-xl leading-[1.35]">
                      3D Printed PETG
                    </p>
                  </div>

                  <div className="border-t border-foreground/20 pt-5">
                    <p className="m-0 text-sm text-foreground/40">
                      Thermal Components
                    </p>

                    <p className="m-0 mt-3 text-xl leading-[1.35]">
                      Aluminum Plates
                    </p>
                  </div>

                  <div className="border-t border-foreground/20 pt-5">
                    <p className="m-0 text-sm text-foreground/40">
                      Flexible Interface
                    </p>

                    <p className="m-0 mt-3 text-xl leading-[1.35]">
                      Silicone
                    </p>
                  </div>

                  <div className="border-t border-foreground/20 pt-5">
                    <p className="m-0 text-sm text-foreground/40">
                      Mold Inserts
                    </p>

                    <p className="m-0 mt-3 text-xl leading-[1.35]">
                      3D Printed + CNC-Milled Aluminum
                    </p>
                  </div>

                </div>

                <div className="mt-12 grid gap-10 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    The PETG base aligned and constrained the assembly while
                    aluminum plates acted as heat sinks during forming. A
                    flexible silicone interface and secondary aluminum plate
                    completed the layered system.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    This combination improved heat distribution while
                    maintaining consistent pressure across the specimen.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* SECTION 10 — FINAL MOLD SYSTEM */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  10
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Final Mold System
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Silicone ultimately replaced TPU as the primary flexible mold
                  material for repeated casting.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    Silicone provided improved resistance to repeated thermal
                    and mechanical loading. It maintained dimensional stability
                    over multiple casting cycles, reducing deformation and
                    extending mold lifespan.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Rigid inserts produced through 3D printing and CNC-milled
                    aluminum components were used to control specimen geometry
                    while the silicone provided reliable demolding.
                  </p>
                </div>

                <div className="mt-14 grid gap-6 sm:grid-cols-2">

                  <div className="border-t border-foreground/20 pt-5">
                    <p className="m-0 text-sm text-foreground/40">
                      Rigid Structure
                    </p>

                    <p className="m-0 mt-3 text-xl leading-[1.35]">
                      PETG + Aluminum
                    </p>
                  </div>

                  <div className="border-t border-foreground/20 pt-5">
                    <p className="m-0 text-sm text-foreground/40">
                      Flexible Interface
                    </p>

                    <p className="m-0 mt-3 text-xl leading-[1.35]">
                      Silicone
                    </p>
                  </div>

                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative h-[600px] w-full overflow-hidden sm:h-[680px] lg:h-[760px]">
                  <Image
                    src="/images/explodedmold.png"
                    alt="Exploded assembly of the final mold system"
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* SECTION 11 — REPEATABLE SPECIMENS */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">
                <p className="m-0 text-sm text-foreground/40">
                  11
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Repeatable Specimens
                </h2>
              </div>

              <div className="lg:col-span-9">
                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The final mold system provided the consistency required to
                  produce standardized specimens for controlled mechanical
                  testing.
                </p>

                <div className="mt-14 grid gap-10 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    Improved geometric control, demolding, thermal performance,
                    and durability reduced variation introduced during specimen
                    fabrication.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    This allowed the testing process to focus more directly on
                    changes in material behaviour rather than inconsistencies
                    created by the casting system.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-16 w-full">
              <div className="relative aspect-[2/1] w-full overflow-hidden">
                <Image
                  src="/images/dogbonewdata.png"
                  alt="Dog-bone specimen testing data"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>

          </div>
        </section>


        {/* MAIN RESEARCH PROJECT */}

        <section className="border-t border-foreground/20 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto flex w-full max-w-[1800px] flex-col justify-between gap-8 sm:flex-row sm:items-end">

            <div>
              <p className="m-0 text-sm text-foreground/40">
                Main Research Project
              </p>

              <h2 className="m-0 mt-3 max-w-[800px] text-3xl font-normal tracking-tight sm:text-4xl">
                Reversible Wood Composites
              </h2>
            </div>

            <Link
              href="/projects/reversible-wood-composites"
              className="border-b border-foreground pb-1 text-sm transition-opacity hover:opacity-50"
            >
              View Research Project →
            </Link>

          </div>
        </section>


        {/* PROJECT NAVIGATION */}

        <section className="border-t border-foreground/20 px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
          <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-3 sm:flex-row">

            <Link
              href="/development"
              className="group flex min-h-[56px] items-center justify-between gap-8 border border-foreground/20 px-5 py-4 transition-colors duration-300 hover:bg-foreground hover:text-background"
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
              className="group flex min-h-[56px] items-center justify-between gap-8 border border-foreground/20 px-5 py-4 transition-colors duration-300 hover:bg-foreground hover:text-background"
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