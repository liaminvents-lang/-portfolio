'use client';

import Link from 'next/link';
import Layout from '@/components/layout';

export default function LigninExtruderPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">

              <div className="lg:col-span-7">
                <p className="m-0 text-sm text-foreground/40">
                  Additive Manufacturing
                </p>

                <h1 className="m-0 mt-4 max-w-[1100px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  Lignin 3D Printing Extruder
                </h1>
              </div>

              <div className="flex items-end lg:col-span-5">
                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A custom screw-based extrusion system developed to process,
                  heat, and deposit lignin-based particulate material for
                  additive manufacturing.
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

            <div className="border-r border-foreground/20 py-6 pr-5">
              <p className="m-0 text-xs text-foreground/40">Type</p>
              <p className="m-0 mt-2 text-sm">
                Custom Extrusion System
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">Material</p>
              <p className="m-0 mt-2 text-sm">Lignin</p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">Drive</p>
              <p className="m-0 mt-2 text-sm">
                NEMA 17 / 6:1 Gearbox
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">Process</p>
              <p className="m-0 mt-2 text-sm">
                Screw Extrusion
              </p>
            </div>

            <div className="px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Fabrication
              </p>

              <p className="m-0 mt-2 text-sm leading-[1.6]">
                CNC Machining
                <br />
                3D Printing
                <br />
                Custom Electronics
              </p>
            </div>

          </div>
        </section>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="h-[390px] w-full overflow-hidden sm:h-[470px] lg:h-[1100px]">
              <img
                src="/images/Ligninextruder.JPG"
                alt="Lignin 3D printing extruder"
                className="h-full w-full object-cover object-center"
              />
            </div>

          </div>
        </section>

        {/* =====================================================
            PROJECT CONTEXT
        ===================================================== */}

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto grid w-full max-w-[1800px] gap-8 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-3">
              <p className="m-0 text-sm text-foreground/40">
                Project Context
              </p>
            </div>

            <div className="lg:col-span-9">

              <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.2] sm:text-4xl">
                The extrusion system was developed as part of research into
                reversible wood composites, exploring how lignin-based
                materials could be processed and fabricated through custom
                additive manufacturing hardware.
              </p>

              <Link
                href="/projects/reversible-wood-composites"
                className="mt-8 inline-block border-b border-foreground pb-1 text-sm transition-opacity hover:opacity-50"
              >
                Reversible Wood Composites ↗
              </Link>

            </div>

          </div>
        </section>

        {/* =====================================================
            01 EXTRUSION STRATEGY
        ===================================================== */}

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

              <div className="lg:col-span-6">

                <img
                  src="/images/extrusiontypes.png"
                  alt="Comparison of extrusion strategies"
                  className="block h-auto w-full"
                />

                <p className="m-0 mt-4 text-xs text-foreground/40">
                  Plunger, filament, and screw-based extrusion strategies.
                </p>

              </div>

              <div className="lg:col-span-6">

                <p className="m-0 text-sm text-foreground/40">
                  01
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Extrusion Strategy
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Screw-based extrusion enables continuous material transport
                  without requiring the feedstock to first become a
                  conventional filament.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    Plunger, filament, and screw-based extrusion strategies
                    were considered during development. Each presents a
                    different relationship between material preparation,
                    transport, and deposition.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    A screw-based system was selected because rotational shear
                    allows particulate material to be continuously conveyed,
                    mixed, compressed, and processed through the extrusion
                    assembly.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            02 SCREW EXTRUSION
        ===================================================== */}

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

              <div className="lg:col-span-6">

                <div className="mx-auto w-[88%]">
                  <img
                    src="/images/pelletextruderdiagram.png"
                    alt="Material progression through screw extrusion system"
                    className="block h-auto w-full"
                  />
                </div>

                <p className="m-0 mx-auto mt-3 w-[88%] text-xs text-foreground/40">
                  Material progression through the screw extrusion system.
                </p>

              </div>

              <div className="lg:col-span-6">

                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Screw Extrusion
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  A rotating auger moves material from the hopper through a
                  controlled thermal and mechanical progression before
                  deposition.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    Material enters through the feed hopper and is transported
                    by the rotating auger. Thermal input and mechanical shear
                    soften and homogenize the material while generating
                    pressure toward the extrusion nozzle.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The system was developed around continuous material
                    conveying and in-situ mixing, allowing pelletized or
                    particulate feedstocks to be processed without a separate
                    filament-making stage.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            03 EXTRUDER ASSEMBLY
        ===================================================== */}

        <section className="px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12 lg:pb-16 lg:pt-20">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Extruder Assembly
                </h2>

              </div>

              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.2] sm:text-4xl">
                  The extrusion head combines material feeding, auger-driven
                  transport, heating, cooling, and deposition into a single
                  assembly.
                </p>

                <div className="mt-10 grid gap-8 lg:grid-cols-2">

                  <p className="m-0 max-w-[620px] text-base leading-[1.7] text-foreground/60">
                    The assembly combines a geared stepper drive, material
                    hopper, paddle mixer, custom auger, thermal transition,
                    heat block, and dedicated cooling into a modular system.
                  </p>

                  <div className="grid grid-cols-2 gap-x-8">

                    <div className="border-t border-foreground/20 py-3">
                      <p className="m-0 text-xs text-foreground/40">
                        Drive
                      </p>
                      <p className="m-0 mt-1 text-sm">
                        NEMA 17 Stepper Motor
                      </p>
                    </div>

                    <div className="border-t border-foreground/20 py-3">
                      <p className="m-0 text-xs text-foreground/40">
                        Reduction
                      </p>
                      <p className="m-0 mt-1 text-sm">
                        6:1 Gearbox
                      </p>
                    </div>

                    <div className="border-t border-foreground/20 py-3">
                      <p className="m-0 text-xs text-foreground/40">
                        Coupling
                      </p>
                      <p className="m-0 mt-1 text-sm">
                        8 mm Coupler
                      </p>
                    </div>

                    <div className="border-t border-foreground/20 py-3">
                      <p className="m-0 text-xs text-foreground/40">
                        Material Feed
                      </p>
                      <p className="m-0 mt-1 text-sm">
                        Hopper + Material Chute
                      </p>
                    </div>

                    <div className="border-t border-foreground/20 py-3">
                      <p className="m-0 text-xs text-foreground/40">
                        Mixing
                      </p>
                      <p className="m-0 mt-1 text-sm">
                        Paddle Mixer
                      </p>
                    </div>

                    <div className="border-t border-foreground/20 py-3">
                      <p className="m-0 text-xs text-foreground/40">
                        Transport
                      </p>
                      <p className="m-0 mt-1 text-sm">
                        Custom Auger Screw
                      </p>
                    </div>

                    <div className="border-t border-foreground/20 py-3">
                      <p className="m-0 text-xs text-foreground/40">
                        Heating
                      </p>
                      <p className="m-0 mt-1 text-sm">
                        Custom Heat Block
                      </p>
                    </div>

                    <div className="border-t border-foreground/20 py-3">
                      <p className="m-0 text-xs text-foreground/40">
                        Cooling
                      </p>
                      <p className="m-0 mt-1 text-sm">
                        Heat Break + Part Cooling
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Exploded assembly — slightly smaller, 22% top crop */}

            <div className="mt-6 overflow-hidden sm:mt-8 lg:mt-10">
              <div className="mx-auto w-[92%]">
                <img
                  src="/images/axo explode.png"
                  alt="Exploded assembly of the complete extrusion head"
                  className="block h-auto w-full -mt-[22%]"
                />
              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
            04 DRIVE + MIXING
        ===================================================== */}

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

              <div className="lg:col-span-6">

                {/* Crop empty whitespace from top of source drawing */}

                <div className="overflow-hidden">
                  <img
                    src="/images/explodedlinear.png"
                    alt="Drive and auger assembly"
                    className="block h-auto w-full -mt-[12%]"
                  />
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Drive, coupling, mixer, auger, and casing assembly.
                </p>

              </div>

              <div className="lg:col-span-6">

                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Drive + Mixing
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  A geared stepper drive powers both material mixing and
                  continuous auger transport through the extrusion head.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The drive assembly uses a NEMA 17 stepper motor with a
                    6:1 gearbox connected to the extrusion assembly through
                    an 8 mm coupler.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    A paddle mixer and custom auger screw form the primary
                    material handling system. Material entering from the
                    hopper is mixed and transported toward the heated region
                    by the rotating assembly.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            05 HEATING + SENSING
        ===================================================== */}

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

              <div className="lg:col-span-6">

                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Heating + Sensing
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  A custom heat block thermally activates the material
                  immediately before extrusion.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The heating assembly uses two 90 W ceramic heater
                    cartridges integrated into the custom heat block. Two NTC
                    thermistors provide temperature sensing for the system.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    A heat break and dedicated fan separate the heated
                    extrusion region from the upstream material-handling
                    assembly. A separate part-cooling fan directs airflow
                    toward deposited material.
                  </p>

                </div>

              </div>

              <div className="lg:col-span-6">

                <div className="h-[420px] w-full overflow-hidden sm:h-[470px] lg:h-[520px]">
                  <img
                    src="/images/Customheatblock.JPG"
                    alt="Custom fabricated heat block"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <p className="m-0 mt-4 text-xs text-foreground/40">
                  Custom fabricated heating assembly.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            06 MATERIAL DEVELOPMENT
        ===================================================== */}

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

              <div className="lg:col-span-6">

                <img
                  src="/images/ligningpowder.png"
                  alt="Dry fir lignin powder"
                  className="block h-auto w-full"
                />

              </div>

              <div className="lg:col-span-6">

                <p className="m-0 text-sm text-foreground/40">
                  06
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Material Development
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Developing the extrusion system required the lignin
                  feedstock and mechanical hardware to be tested together.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    Fir lignin was processed into a fine particulate feedstock
                    suitable for the screw-based extrusion system. Material
                    preparation became an important part of controlling how
                    consistently the lignin entered and moved through the
                    auger.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Changes in particle size, moisture, temperature, and
                    material behaviour directly affected feeding and
                    deposition, requiring the extrusion hardware and material
                    preparation process to develop together.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            07 MATERIAL WORKFLOW
        ===================================================== */}

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  07
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Material Workflow
                </h2>

                <p className="m-0 mt-10 text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Lignin is refined, prepared, and thermally processed before
                  it can be deposited as a printable material.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The workflow begins with lignin chips, which are ground
                    into powder before entering the extrusion process.
                    Preparing a consistent feedstock improves material flow
                    through the hopper and screw assembly.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The material is then subjected to controlled heating
                    during extrusion. This creates a continuous loop between
                    material refinement, thermal processing, deposition, and
                    subsequent testing.
                  </p>

                </div>

              </div>

              <div className="lg:col-span-7">

                <img
                  src="/images/workflowextruder.png"
                  alt="Lignin fabrication workflow"
                  className="block h-auto w-full"
                />

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            08 INITIAL POWDER TESTS
        ===================================================== */}

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

              <div className="lg:col-span-6">

                <img
                  src="/images/ligningdrytestbad.jpg"
                  alt="Initial dry lignin extrusion test"
                  className="block h-auto w-full"
                />

                <p className="m-0 mt-4 text-xs text-foreground/40">
                  Initial dry lignin extrusion testing.
                </p>

              </div>

              <div className="lg:col-span-6">

                <p className="m-0 text-sm text-foreground/40">
                  08
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Initial Powder Tests
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Dry lignin powder could be conveyed and heated, but it could
                  not form a stable continuous extrusion.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    Initial tests introduced lignin powder directly into the
                    hopper without binders or pelletization. The auger
                    successfully transported the powder through the heated
                    extrusion system, confirming the basic operation of the
                    machine.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Extrusion itself remained unstable. Steam became visible
                    at the nozzle and fine particles were intermittently
                    expelled rather than forming a continuous extrudate. The
                    resulting material was brittle, discontinuous, and
                    non-uniform.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            09 MATERIAL REHYDRATION
        ===================================================== */}

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

              <div className="lg:col-span-6">

                <p className="m-0 text-sm text-foreground/40">
                  09
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Material Rehydration
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Rehydrating the lignin into a paste significantly improved
                  cohesion and flow through the extrusion system.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    Introducing controlled moisture changed how the lignin
                    behaved inside the auger and heated region, allowing the
                    material to move as a more cohesive mass rather than as
                    loose powder.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The revised material condition improved transport and
                    provided a more consistent basis for continued extrusion
                    testing and process development.
                  </p>

                </div>

              </div>

              <div className="lg:col-span-6">

                <div className="h-[440px] w-full overflow-hidden sm:h-[500px] lg:h-[560px]">
                  <img
                    src="/images/Ligninextruder.JPG"
                    alt="Completed lignin extrusion system"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            10 SYSTEM DEVELOPMENT
        ===================================================== */}

        <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto grid w-full max-w-[1800px] gap-8 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-3">

              <p className="m-0 text-sm text-foreground/40">
                10
              </p>

              <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                System Development
              </h2>

            </div>

            <div className="lg:col-span-9">

              <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.2] sm:text-4xl">
                The extruder developed as an experimental platform in which
                material preparation, mechanical transport, thermal control,
                and deposition could be iterated together.
              </p>

              <div className="mt-12 grid max-w-[1050px] gap-8 sm:grid-cols-2">

                <p className="m-0 text-base leading-[1.7]">
                  Rather than adapting lignin to an existing printer, the
                  machine was developed around the behaviour of the material
                  itself. Changes to the feedstock could be evaluated directly
                  against changes to the screw, heating system, and operating
                  parameters.
                </p>

                <p className="m-0 text-base leading-[1.7] text-foreground/60">
                  This created a repeatable framework for continuing material
                  development while retaining direct control over the hardware
                  responsible for conveying, processing, and depositing the
                  lignin.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            PROJECT OUTRO
        ===================================================== */}

        <section className="px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12 lg:pb-28 lg:pt-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-start-4 lg:col-span-9">

                <h2 className="m-0 max-w-[1100px] text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                  Developing the machine and the material as a single
                  fabrication system.
                </h2>

                <Link
                  href="/projects"
                  className="mt-10 inline-flex items-center gap-3 border-b border-foreground pb-1 text-base transition-opacity hover:opacity-50"
                >
                  View more projects
                  <span>→</span>
                </Link>

              </div>

            </div>

            {/* =================================================
                RELATED PROJECT
            ================================================= */}

            <div className="mt-20 pt-8 lg:mt-24">

              <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">

                <div className="lg:col-span-3">

                  <h3 className="m-0 text-2xl font-normal leading-[1.05] tracking-tight">
                    Related
                    <br />
                    Project
                  </h3>

                </div>

                <div className="lg:col-span-9">

                  <Link
                    href="/projects/reversible-wood-composites"
                    className="group grid grid-cols-[1fr_auto] items-center py-6 transition-opacity hover:opacity-50"
                  >

                    <div>

                      <p className="m-0 text-2xl font-normal tracking-tight sm:text-3xl">
                        Reversible Wood Composites
                      </p>

                      <p className="m-0 mt-2 pr-4 text-sm leading-[1.4] text-foreground/45">
                        Material research exploring lignin-based reversible
                        composite systems.
                      </p>

                    </div>

                    <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>

                  </Link>

                </div>

              </div>

            </div>

          </div>
        </section>

      </main>
    </Layout>
  );
}