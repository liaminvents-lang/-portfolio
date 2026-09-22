'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout';

export default function ASTMTestingMoldsPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* HERO */}

        <section className="grid min-h-[560px] grid-cols-1 items-end gap-12 px-5 pb-20 pt-36 lg:grid-cols-12 lg:px-14">
          <div className="lg:col-span-7">
            <p className="mb-6 text-sm text-foreground/40">
              Material Testing Tooling
            </p>

            <h1 className="m-0 max-w-[1100px] text-6xl font-normal leading-[0.92] tracking-tight md:text-7xl lg:text-[96px]">
              ASTM Testing
              <br />
              Molds
            </h1>
          </div>

          <div className="lg:col-span-5 lg:pb-4">
            <p className="m-0 max-w-[620px] text-2xl font-medium leading-[1.3] tracking-tight lg:text-3xl">
              An iterative mold system developed to produce consistent
              lignin-based specimens for standardized mechanical testing.
            </p>
          </div>
        </section>

        {/* PROJECT INFO */}

        <section className="border-y border-foreground/20">
          <div className="grid grid-cols-2 lg:grid-cols-5">

            <div className="min-h-[130px] border-b border-r border-foreground/20 px-5 py-6 lg:border-b-0 lg:px-14">
              <p className="mb-3 text-xs text-foreground/40">
                Type
              </p>

              <p className="m-0 text-sm">
                Testing Tooling
              </p>
            </div>

            <div className="min-h-[130px] border-b border-foreground/20 px-5 py-6 lg:border-b-0 lg:border-r lg:px-5">
              <p className="mb-3 text-xs text-foreground/40">
                Standard
              </p>

              <p className="m-0 text-sm">
                ASTM D638
              </p>
            </div>

            <div className="min-h-[130px] border-b border-r border-foreground/20 px-5 py-6 lg:border-b-0">
              <p className="mb-3 text-xs text-foreground/40">
                Specimen
              </p>

              <p className="m-0 text-sm">
                Dog-Bone
                <br />
                Tensile Samples
              </p>
            </div>

            <div className="min-h-[130px] border-b border-foreground/20 px-5 py-6 lg:border-b-0 lg:border-r">
              <p className="mb-3 text-xs text-foreground/40">
                Fabrication
              </p>

              <p className="m-0 text-sm">
                3D Printing
                <br />
                CNC Milling
              </p>
            </div>

            <div className="col-span-2 min-h-[130px] px-5 py-6 lg:col-span-1 lg:px-5">
              <p className="mb-3 text-xs text-foreground/40">
                Final System
              </p>

              <p className="m-0 text-sm">
                Silicone Hybrid Mold
              </p>
            </div>

          </div>
        </section>

        {/* 01 MOLD DEVELOPMENT */}

        <section className="grid gap-10 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              01
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Mold Development
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              The mold system evolved through repeated changes in geometry,
              orientation, material, and forming strategy.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Mold development responded directly to the behaviour of the
                lignin-based material during casting, curing, and demolding.
                Each iteration exposed different limitations in surface
                quality, consolidation, material flow, and specimen removal.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The objective was to establish a repeatable method for
                producing controlled specimen geometries suitable for
                mechanical testing.
              </p>
            </div>
          </div>
        </section>

        {/* 02 ASTM GEOMETRY */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              02
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              ASTM Geometry
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              Custom molds were designed around ASTM D638 dog-bone geometry
              for tensile testing.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                ASTM D638 uses a reduced central gauge section with enlarged
                ends for gripping. The geometry is intended to concentrate
                deformation within the central region and promote failure away
                from the grips.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The mold cavities maintained consistent specimen geometry,
                including a uniform gauge section, reducing dimensional
                variation between samples and allowing specimens to be tested
                directly in their as-formed state.
              </p>
            </div>
          </div>
        </section>

        {/* 03 INITIAL CASTING */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              03
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Initial Casting
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              Early horizontal molds established the specimen geometry but
              revealed problems with consolidation and surface quality.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Initial specimens were poured into horizontal molds and allowed
                to settle under gravity. While straightforward to cast, the
                process produced pitting, inconsistent surface finishes, and
                incomplete consolidation.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                These effects were particularly visible on the upper surface of
                the specimen, showing that gravity casting alone was not
                producing sufficiently consistent samples.
              </p>
            </div>
          </div>
        </section>

        {/* 04 VERTICAL CASTING */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              04
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Vertical Casting
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              Casting orientation was changed in an attempt to improve
              consolidation through the specimen.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The mold was moved into a vertical configuration to promote
                more uniform consolidation along the primary axis of the
                specimen.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The vertical setup instead produced a persistent void at the
                top of the specimen and uneven curing. Material near the mold
                interface solidified more quickly while the interior remained
                under-consolidated.
              </p>
            </div>
          </div>
        </section>

        {/* 05 FLEXIBLE MOLDS */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              05
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              TPU Mold Development
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              Flexible TPU molds were introduced after rigid molds caused
              specimens to fracture during removal.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                TPU allowed the mold to deform during demolding, reducing
                stress concentrations and improving specimen recovery compared
                with rigid mold systems.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Multiple TPU mold iterations were produced as the geometry and
                casting process continued to develop.
              </p>
            </div>
          </div>
        </section>

        {/* 06 FLOW DEVELOPMENT */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              06
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Material Flow
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              Mold geometry was modified to control filling, excess material,
              and trapped air during casting.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">

              <div className="border-t border-foreground/20 pt-5">
                <p className="m-0 text-sm text-foreground/40">
                  Lead-In + Lead-Out
                </p>

                <p className="mt-3 text-xl leading-[1.35]">
                  Features added to guide material flow.
                </p>
              </div>

              <div className="border-t border-foreground/20 pt-5">
                <p className="m-0 text-sm text-foreground/40">
                  Over-Pour
                </p>

                <p className="mt-3 text-xl leading-[1.35]">
                  Additional regions provided space for excess material.
                </p>
              </div>

              <div className="border-t border-foreground/20 pt-5">
                <p className="m-0 text-sm text-foreground/40">
                  Venting
                </p>

                <p className="mt-3 text-xl leading-[1.35]">
                  Pockets introduced to reduce air entrapment.
                </p>
              </div>

            </div>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Together, these changes improved filling behaviour and reduced
                internal void formation within the specimens.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                TPU nevertheless had limited durability under repeated thermal
                and mechanical loading. Progressive deformation reduced
                dimensional accuracy and introduced surface artifacts into
                later casts.
              </p>
            </div>
          </div>
        </section>

        {/* 07 HORIZONTAL COMPRESSION */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              07
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Compression Casting
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              The process returned to horizontal casting, combining over-pour
              geometry with hydraulic compression.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Excess material was intentionally introduced into the mold and
                then compressed using the hydraulic press.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Compression increased contact between the lignin and mold
                surfaces, reduced void formation, and improved density
                throughout the specimen. Pressure became an active part of the
                forming process rather than the mold acting only as a
                container.
              </p>
            </div>
          </div>
        </section>

        {/* 08 SURFACE TESTING */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              08
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Mold Surface Testing
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              Different rigid mold interfaces were tested to balance thermal
              performance, surface quality, and demolding.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">

              <div className="border-t border-foreground/20 pt-5">
                <p className="m-0 text-sm text-foreground/40">
                  Stainless Steel + Aluminum
                </p>

                <p className="mt-3 text-xl leading-[1.35]">
                  Strong lignin adhesion remained even with release agents.
                </p>
              </div>

              <div className="border-t border-foreground/20 pt-5">
                <p className="m-0 text-sm text-foreground/40">
                  PETG + PLA
                </p>

                <p className="mt-3 text-xl leading-[1.35]">
                  Easier to fabricate, but also unable to prevent adhesion
                  during repeated casting.
                </p>
              </div>

            </div>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Metal plates were initially attractive because their high
                thermal conductivity could distribute heat across the sample.
                Adhesion, however, remained a significant limitation.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Testing these interfaces led to the development of a layered
                mold system that combined rigid alignment components with a
                flexible casting interface.
              </p>
            </div>
          </div>
        </section>

        {/* 09 HYBRID MOLD */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              09
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Hybrid Mold Assembly
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              The mold evolved into a layered assembly combining rigid
              alignment, aluminum heat sinks, and a flexible interface.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">

              <div className="border-t border-foreground/20 pt-5">
                <p className="m-0 text-sm text-foreground/40">
                  Base
                </p>

                <p className="mt-3 text-xl leading-[1.35]">
                  3D printed PETG
                </p>
              </div>

              <div className="border-t border-foreground/20 pt-5">
                <p className="m-0 text-sm text-foreground/40">
                  Thermal Components
                </p>

                <p className="mt-3 text-xl leading-[1.35]">
                  Aluminum plates
                </p>
              </div>

              <div className="border-t border-foreground/20 pt-5">
                <p className="m-0 text-sm text-foreground/40">
                  Flexible Interface
                </p>

                <p className="mt-3 text-xl leading-[1.35]">
                  Silicone
                </p>
              </div>

              <div className="border-t border-foreground/20 pt-5">
                <p className="m-0 text-sm text-foreground/40">
                  Mold Inserts
                </p>

                <p className="mt-3 text-xl leading-[1.35]">
                  3D Printed + CNC-Milled Aluminum
                </p>
              </div>

            </div>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The PETG base aligned and constrained the assembly while
                aluminum plates acted as heat sinks during forming. A flexible
                silicone interface and secondary aluminum plate completed the
                layered system.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                This combination improved heat distribution while maintaining
                consistent pressure across the specimen.
              </p>
            </div>
          </div>
        </section>

        {/* 10 FINAL SILICONE SYSTEM */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              10
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Final Mold System
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              Silicone ultimately replaced TPU as the primary flexible mold
              material for repeated casting.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Silicone provided improved resistance to repeated thermal and
                mechanical loading. It maintained dimensional stability over
                multiple casting cycles, reducing deformation and extending
                mold lifespan.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Rigid inserts produced through 3D printing and CNC-milled
                aluminum components were used to control specimen geometry
                while the silicone provided reliable demolding.
              </p>
            </div>
          </div>
        </section>

        {/* 11 REPEATABLE SPECIMENS */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              11
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Repeatable Specimens
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              The final mold system provided the consistency required to
              produce standardized specimens for controlled mechanical
              testing.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Improved geometric control, demolding, thermal performance, and
                durability reduced variation introduced during specimen
                fabrication.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                This allowed the testing process to focus more directly on
                changes in material behaviour rather than inconsistencies
                created by the casting system.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN RESEARCH PROJECT */}

        <section className="border-t border-foreground/20 px-5 py-24 lg:px-14 lg:py-32">
          <p className="mb-6 text-sm text-foreground/40">
            Main Research Project
          </p>

          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="m-0 max-w-[1050px] text-4xl font-normal leading-[1.05] tracking-tight md:text-5xl lg:text-7xl">
              Reversible Wood Composites
            </h2>

            <Link
              href="/projects/reversible-wood-composites"
              className="w-fit shrink-0 border-b border-foreground pb-1 text-sm transition-opacity hover:opacity-50"
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