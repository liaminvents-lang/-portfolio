'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout';

export default function HeatPressPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* HERO */}

        <section className="grid min-h-[560px] grid-cols-1 items-end gap-12 px-5 pb-20 pt-36 lg:grid-cols-12 lg:px-14">
          <div className="lg:col-span-7">
            <p className="mb-6 text-sm text-foreground/40">
              Material Testing Equipment
            </p>

            <h1 className="m-0 max-w-[900px] text-6xl font-normal leading-[0.92] tracking-tight md:text-7xl lg:text-[96px]">
              Heat
              <br />
              Press
            </h1>
          </div>

          <div className="lg:col-span-5 lg:pb-4">
            <p className="m-0 max-w-[620px] text-2xl font-medium leading-[1.3] tracking-tight lg:text-3xl">
              A custom hydraulic press developed to apply controlled
              compression during the forming and testing of lignin-based
              composite materials.
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
                Hydraulic Press
              </p>
            </div>

            <div className="min-h-[130px] border-b border-foreground/20 px-5 py-6 lg:border-b-0 lg:border-r lg:px-5">
              <p className="mb-3 text-xs text-foreground/40">
                Capacity
              </p>

              <p className="m-0 text-sm">
                12 Ton
              </p>
            </div>

            <div className="min-h-[130px] border-b border-r border-foreground/20 px-5 py-6 lg:border-b-0">
              <p className="mb-3 text-xs text-foreground/40">
                Frame
              </p>

              <p className="m-0 text-sm">
                Welded Steel
              </p>
            </div>

            <div className="min-h-[130px] border-b border-foreground/20 px-5 py-6 lg:border-b-0 lg:border-r">
              <p className="mb-3 text-xs text-foreground/40">
                Fabrication
              </p>

              <p className="m-0 text-sm">
                Waterjet Cutting
                <br />
                Welding
              </p>
            </div>

            <div className="col-span-2 min-h-[130px] px-5 py-6 lg:col-span-1 lg:px-5">
              <p className="mb-3 text-xs text-foreground/40">
                Application
              </p>

              <p className="m-0 text-sm">
                Composite Forming
                <br />
                Material Testing
              </p>
            </div>
          </div>
        </section>

        {/* 01 TOOL DEVELOPMENT */}

        <section className="grid gap-10 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              01
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Tool Development
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              The press was developed when compression became a critical
              variable in producing consistent lignin-based specimens.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Early horizontal casting experiments showed that passive
                containment was not enough to produce consistent samples.
                Introducing an over-pour followed by compression increased
                contact between the material and mold surfaces and reduced
                void formation.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Pressure therefore became part of the forming process itself.
                A dedicated press was required to repeatedly apply compression
                across the mold while material samples were being fabricated.
              </p>
            </div>
          </div>
        </section>

        {/* 02 PRESS DESIGN */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              02
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Press Design
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              A rigid steel frame was designed around a 12-ton hydraulic bottle
              jack to create a compact material-forming system.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The frame combines waterjet-cut steel plates with welded steel
                tubing. Together, these components form the primary structure
                supporting the hydraulic loading system and the molds used
                during casting.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The press was developed specifically for repeated experimental
                material production, allowing the same compression system to
                be used as mold designs and material compositions evolved
                throughout the research.
              </p>
            </div>
          </div>
        </section>

        {/* 03 STRUCTURAL FRAME */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              03
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Structural Frame
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              Waterjet-cut plate and welded steel tubing form a rigid load path
              around the hydraulic system.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Steel plate components were waterjet cut to establish the
                primary press geometry. These parts were combined with steel
                tubing to create the surrounding frame.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The completed structure was designed to withstand the loads
                generated by the bottle jack while maintaining a stable
                pressing region for the experimental molds.
              </p>
            </div>
          </div>
        </section>

        {/* 04 HYDRAULIC SYSTEM */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              04
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Hydraulic System
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              A 12-ton hydraulic bottle jack provides the compressive force
              required during casting.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The hydraulic jack applies compression through the mold
                assembly, changing the mold from a passive container into an
                active forming system.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Consistent pressure application improved material
                consolidation and reduced internal defects in the fabricated
                specimens.
              </p>
            </div>
          </div>
        </section>

        {/* 05 HEAT + PRESSURE */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              05
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Heat + Pressure
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              Applying heat while maintaining compression allowed thermal and
              mechanical forming conditions to be tested together.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Baseline fiber experiments introduced heat during pressing,
                bringing the material to approximately 100°C while compression
                was maintained. The resulting panels appeared more consolidated
                immediately after pressing.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Those early tests also showed that heat and pressure alone were
                insufficient. The fibers became highly brittle and fractured
                easily, establishing a baseline for later tests where lignin
                was introduced as the binding phase.
              </p>
            </div>
          </div>
        </section>

        {/* 06 PANEL TESTING */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              06
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Panel Testing
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              The pressing workflow expanded from small standardized specimens
              to 14 × 14 cm composite panels.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Larger panel specimens provided a continuous surface for
                observing how fibers, lignin, heat, and pressure interacted
                throughout the material rather than only within the narrow
                gauge section of a tensile specimen.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The larger format also allowed pressure to distribute more
                evenly during pressing and made differences in fiber
                orientation, layering, local density, and lignin distribution
                easier to observe.
              </p>
            </div>
          </div>
        </section>

        {/* 07 MOLD INTERFACE */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              07
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Mold Interface
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              The press became a constant platform while the mold system was
              repeatedly redesigned around thermal performance, release, and
              specimen consistency.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Metal interfaces were tested because their thermal conductivity
                allowed heat to distribute across the specimen. Stainless steel
                and aluminum, however, both produced strong adhesion with the
                lignin even when release agents were used.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                PETG and PLA interfaces were also evaluated before the mold
                system evolved toward a hybrid assembly combining rigid and
                flexible components.
              </p>
            </div>
          </div>
        </section>

        {/* 08 HYBRID MOLD SYSTEM */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              08
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Hybrid Mold System
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              The final mold assembly combined PETG, aluminum, and silicone to
              balance alignment, heat transfer, pressure, and material release.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                A 3D printed PETG base aligned and constrained the mold
                assembly, while aluminum plates acted as heat sinks to regulate
                temperature during forming.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                A flexible silicone interface and secondary aluminum plate
                completed the layered assembly, improving heat distribution
                while maintaining consistent pressure across the specimen.
              </p>
            </div>
          </div>
        </section>

        {/* 09 COMPOSITE FORMING */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              09
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Composite Forming
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              The completed pressing workflow consolidated heated lignin and
              wood fibers into repeatable composite specimens.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                In later material tests, extracted lignin was heated to
                approximately 70°C until it entered a viscous state. Fibers
                were mixed directly into the heated material before the warm
                mixture was transferred into the 14 × 14 cm mold.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Once loaded, the mixture was hot pressed to consolidate the
                fibers and encourage bonding as lignin redistributed through
                the compressed network.
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