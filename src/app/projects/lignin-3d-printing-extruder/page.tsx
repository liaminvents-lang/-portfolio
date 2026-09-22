'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout';

export default function LigninExtruderPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* HERO */}
        <section className="grid min-h-[560px] grid-cols-1 items-end gap-12 px-5 pb-20 pt-36 lg:grid-cols-12 lg:px-14">
          <div className="lg:col-span-7">
            <p className="mb-5 text-sm text-foreground/40">
              Material Fabrication
            </p>

            <h1 className="m-0 max-w-[1100px] text-[clamp(3.6rem,8vw,9rem)] font-medium leading-[0.9] tracking-[-0.06em]">
              Lignin 3D
              <br />
              Printing
              <br />
              Extruder
            </h1>
          </div>

          <div className="lg:col-span-5 lg:pb-3">
            <p className="m-0 max-w-[720px] text-2xl leading-[1.15] tracking-[-0.03em] sm:text-3xl lg:text-4xl">
              A custom screw-driven extrusion system developed to investigate
              the thermoplastic behavior of lignin through additive
              fabrication.
            </p>
          </div>
        </section>

        {/* PROJECT INFO */}
        <section className="border-y border-foreground/20 px-5 sm:px-8 lg:px-14">
          <div className="grid min-h-[130px] grid-cols-2 gap-x-8 gap-y-8 py-8 sm:grid-cols-3 lg:grid-cols-5 lg:py-0">

            <div className="flex flex-col justify-center">
              <p className="mb-2 text-xs text-foreground/40">Type</p>
              <p className="m-0 text-sm">Custom Extrusion System</p>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-2 text-xs text-foreground/40">Extrusion</p>
              <p className="m-0 text-sm">Screw / Auger</p>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-2 text-xs text-foreground/40">Drive</p>
              <p className="m-0 text-sm">NEMA 17 / 6:1 Gearbox</p>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-2 text-xs text-foreground/40">Feedstock</p>
              <p className="m-0 text-sm">Lignin Powder / Paste</p>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-2 text-xs text-foreground/40">Application</p>
              <p className="m-0 text-sm">Additive Fabrication</p>
            </div>

          </div>
        </section>

        {/* 01 */}
        <section className="grid gap-10 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="mb-4 text-sm text-foreground/40">01</p>
            <h2 className="m-0 text-xl font-medium tracking-[-0.02em]">
              Extrusion Development
            </h2>
          </div>

          <div className="lg:col-span-9">
            <p className="m-0 max-w-[1250px] text-[clamp(2.1rem,4.8vw,5.5rem)] leading-[0.98] tracking-[-0.055em]">
              Developing an extrusion system capable of processing lignin
              without first converting the material into conventional
              filament.
            </p>

            <div className="mt-16 grid gap-10 text-base leading-relaxed text-foreground/65 md:grid-cols-2">
              <p className="m-0">
                Three extrusion strategies were considered during development:
                plunger-based extrusion, filament-based extrusion, and
                screw-based extrusion. Plunger systems provide mechanical
                simplicity but offer limited control over continuous flow,
                while filament systems depend on precise and consistent
                filament geometry.
              </p>

              <p className="m-0">
                A screw-based system was selected because rotational shear
                allows particulate material to be continuously conveyed,
                mixed, and pressurized during processing. This made the system
                better suited to early experiments with variable lignin
                feedstocks.
              </p>
            </div>
          </div>
        </section>

        {/* 02 */}
        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="mb-4 text-sm text-foreground/40">02</p>
            <h2 className="m-0 text-xl font-medium tracking-[-0.02em]">
              Screw Extrusion
            </h2>
          </div>

          <div className="lg:col-span-9">
            <p className="m-0 max-w-[1250px] text-[clamp(2.1rem,4.8vw,5.5rem)] leading-[0.98] tracking-[-0.055em]">
              A rotating auger moves material from the hopper through a
              controlled thermal and mechanical progression before deposition.
            </p>

            <div className="mt-16 grid gap-10 text-base leading-relaxed text-foreground/65 md:grid-cols-2">
              <p className="m-0">
                Material enters through the feed hopper and is transported by
                the rotating auger. Thermal input and mechanical shear soften
                and homogenize the material while generating pressure toward
                the extrusion nozzle.
              </p>

              <p className="m-0">
                The system was developed around continuous material conveying
                and in-situ mixing, allowing pelletized or particulate
                feedstocks to be processed without a separate filament-making
                stage.
              </p>
            </div>
          </div>
        </section>

        {/* 03 */}
        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="mb-4 text-sm text-foreground/40">03</p>
            <h2 className="m-0 text-xl font-medium tracking-[-0.02em]">
              Extruder Assembly
            </h2>
          </div>

          <div className="lg:col-span-9">
            <p className="m-0 max-w-[1250px] text-[clamp(2.1rem,4.8vw,5.5rem)] leading-[0.98] tracking-[-0.055em]">
              The extrusion head combines material feeding, auger-driven
              transport, heating, cooling, and deposition into a single
              assembly.
            </p>

            <div className="mt-16 grid gap-x-12 gap-y-8 border-t border-foreground/20 pt-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                ['Drive', 'NEMA 17 Stepper Motor'],
                ['Reduction', '6:1 Gearbox'],
                ['Coupling', '8 mm Coupler'],
                ['Material Feed', 'Hopper + Material Chute'],
                ['Mixing', 'Paddle Mixer'],
                ['Transport', 'Custom Auger Screw'],
                ['Housing', 'Auger Casing'],
                ['Thermal Transition', 'Heat Break'],
                ['Heating', 'Custom Heat Block'],
                ['Nozzle Interface', 'M6 Thread'],
                ['Mounting', 'Nylon Mounting Block'],
                ['Structure', '6 mm Aluminum Plates'],
                ['Cooling', 'Heat Break Fan'],
                ['Part Cooling', 'Fan + Air Duct'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="border-b border-foreground/20 pb-6"
                >
                  <p className="mb-2 text-xs text-foreground/40">{label}</p>
                  <p className="m-0 text-base">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 */}
        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="mb-4 text-sm text-foreground/40">04</p>
            <h2 className="m-0 text-xl font-medium tracking-[-0.02em]">
              Drive + Mixing
            </h2>
          </div>

          <div className="lg:col-span-9">
            <p className="m-0 max-w-[1250px] text-[clamp(2.1rem,4.8vw,5.5rem)] leading-[0.98] tracking-[-0.055em]">
              A geared stepper drive powers both material mixing and continuous
              auger transport through the extrusion head.
            </p>

            <div className="mt-16 grid gap-10 text-base leading-relaxed text-foreground/65 md:grid-cols-2">
              <p className="m-0">
                The drive assembly uses a NEMA 17 stepper motor with a 6:1
                gearbox connected to the extrusion assembly through an 8 mm
                coupler.
              </p>

              <p className="m-0">
                A paddle mixer and custom auger screw form the primary material
                handling system. Material entering from the hopper is mixed and
                transported toward the heated region by the rotating assembly.
              </p>
            </div>
          </div>
        </section>

        {/* 05 */}
        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="mb-4 text-sm text-foreground/40">05</p>
            <h2 className="m-0 text-xl font-medium tracking-[-0.02em]">
              Heating + Sensing
            </h2>
          </div>

          <div className="lg:col-span-9">
            <p className="m-0 max-w-[1250px] text-[clamp(2.1rem,4.8vw,5.5rem)] leading-[0.98] tracking-[-0.055em]">
              A custom heat block thermally activates the material immediately
              before extrusion.
            </p>

            <div className="mt-16 grid gap-10 text-base leading-relaxed text-foreground/65 md:grid-cols-2">
              <p className="m-0">
                The heating assembly uses two 90 W ceramic heater cartridges
                integrated into the custom heat block. Two NTC thermistors
                provide temperature sensing for the system.
              </p>

              <p className="m-0">
                The extruder also incorporates a heat break and dedicated heat
                break fan to separate the heated extrusion region from the
                upstream material-handling assembly. A separate part-cooling
                fan, duct, and nozzle direct airflow toward the deposited
                material.
              </p>
            </div>
          </div>
        </section>

        {/* 06 */}
        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="mb-4 text-sm text-foreground/40">06</p>
            <h2 className="m-0 text-xl font-medium tracking-[-0.02em]">
              Fabrication Workflow
            </h2>
          </div>

          <div className="lg:col-span-9">
            <p className="m-0 max-w-[1250px] text-[clamp(2.1rem,4.8vw,5.5rem)] leading-[0.98] tracking-[-0.055em]">
              Material refinement and computational toolpath generation converge
              at the extrusion stage.
            </p>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <div className="border-t border-foreground/20 pt-6">
                <p className="mb-8 text-xs text-foreground/40">
                  Material Workflow
                </p>

                <div className="space-y-5 text-xl tracking-[-0.02em]">
                  <p className="m-0">Lignin Chips</p>
                  <p className="m-0 text-foreground/30">↓</p>
                  <p className="m-0">Grinding</p>
                  <p className="m-0 text-foreground/30">↓</p>
                  <p className="m-0">Lignin Powder</p>
                  <p className="m-0 text-foreground/30">↓</p>
                  <p className="m-0">Feedstock Conditioning</p>
                  <p className="m-0 text-foreground/30">↓</p>
                  <p className="m-0">Extrusion</p>
                </div>
              </div>

              <div className="border-t border-foreground/20 pt-6">
                <p className="mb-8 text-xs text-foreground/40">
                  Digital Workflow
                </p>

                <div className="space-y-5 text-xl tracking-[-0.02em]">
                  <p className="m-0">Goal Shape</p>
                  <p className="m-0 text-foreground/30">↓</p>
                  <p className="m-0">Toolpath</p>
                  <p className="m-0 text-foreground/30">↓</p>
                  <p className="m-0">Simulation</p>
                  <p className="m-0 text-foreground/30">↓</p>
                  <p className="m-0">Extrusion</p>
                  <p className="m-0 text-foreground/30">↓</p>
                  <p className="m-0">Physical Object</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 07 */}
        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="mb-4 text-sm text-foreground/40">07</p>
            <h2 className="m-0 text-xl font-medium tracking-[-0.02em]">
              Initial Powder Tests
            </h2>
          </div>

          <div className="lg:col-span-9">
            <p className="m-0 max-w-[1250px] text-[clamp(2.1rem,4.8vw,5.5rem)] leading-[0.98] tracking-[-0.055em]">
              Dry lignin powder could be conveyed and heated, but it could not
              form a stable continuous extrusion.
            </p>

            <div className="mt-16 grid gap-10 text-base leading-relaxed text-foreground/65 md:grid-cols-2">
              <p className="m-0">
                Initial tests introduced lignin powder directly into the hopper
                without binders or pelletization. The auger successfully
                transported the powder through the heated extrusion system,
                confirming the basic operation of the machine.
              </p>

              <p className="m-0">
                Extrusion itself remained unstable. Steam became visible at the
                nozzle and fine particles were intermittently expelled rather
                than forming a continuous extrudate. The resulting material was
                brittle, discontinuous, and non-uniform, with no sustained
                filament or coherent bead formation.
              </p>
            </div>
          </div>
        </section>

        {/* 08 */}
        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="mb-4 text-sm text-foreground/40">08</p>
            <h2 className="m-0 text-xl font-medium tracking-[-0.02em]">
              Material Rehydration
            </h2>
          </div>

          <div className="lg:col-span-9">
            <p className="m-0 max-w-[1250px] text-[clamp(2.1rem,4.8vw,5.5rem)] leading-[0.98] tracking-[-0.055em]">
              Rehydrating the lignin into a paste significantly improved
              cohesion and flow through the extrusion system.
            </p>

            <div className="mt-16 grid gap-10 text-base leading-relaxed text-foreground/65 md:grid-cols-2">
              <p className="m-0">
                Following the dry-powder tests, moisture was introduced to form
                a lignin paste. Increasing interparticle contact reduced free
                powder entrainment and improved the material&apos;s behavior
                during transport and extrusion without introducing a chemical
                binder.
              </p>

              <p className="m-0">
                When heated, the rehydrated material softened and deposited
                more consistently. After cooling, the extruded forms showed
                greater cohesion and reduced brittleness. Uniformity and
                dimensional control remained limited, but the tests
                demonstrated the importance of feedstock conditioning.
              </p>
            </div>
          </div>
        </section>

        {/* 09 */}
        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="mb-4 text-sm text-foreground/40">09</p>
            <h2 className="m-0 text-xl font-medium tracking-[-0.02em]">
              Circular Workflow
            </h2>
          </div>

          <div className="lg:col-span-9">
            <p className="m-0 max-w-[1250px] text-[clamp(2.1rem,4.8vw,5.5rem)] leading-[0.98] tracking-[-0.055em]">
              Printed objects are treated as intermediate material states rather
              than permanent endpoints.
            </p>

            <div className="mt-16 max-w-[850px] text-base leading-relaxed text-foreground/65">
              <p className="m-0">
                The proposed fabrication workflow allows completed objects to
                be mechanically reduced back into smaller particles or powder.
                This material can then return to the refinement and extrusion
                stages, establishing a pathway for repeated processing within
                the same material system.
              </p>
            </div>
          </div>
        </section>

        {/* RESEARCH CONTEXT */}
        <section className="border-t border-foreground/20 px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="m-0 text-sm text-foreground/40">
                Research Context
              </p>
            </div>

            <div className="lg:col-span-9">
              <p className="m-0 max-w-[1250px] text-[clamp(2.1rem,4.8vw,5.5rem)] leading-[0.98] tracking-[-0.055em]">
                Developed as part of research investigating lignin as a natural
                thermoplastic for additive extrusion fabrication.
              </p>
            </div>
          </div>
        </section>

        {/* NAVIGATION */}
        <section className="border-t border-foreground/20 px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
          <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-3 sm:flex-row">
            <Link
              href="/development"
              className="group flex min-h-[56px] items-center justify-between gap-8 border border-foreground/20 px-5 py-4 transition-colors duration-300 hover:bg-foreground hover:text-background"
            >
              <span className="text-sm">Development</span>
              <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
            </Link>

            <Link
              href="/projects"
              className="group flex min-h-[56px] items-center justify-between gap-8 border border-foreground/20 px-5 py-4 transition-colors duration-300 hover:bg-foreground hover:text-background"
            >
              <span className="text-sm">Projects</span>
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