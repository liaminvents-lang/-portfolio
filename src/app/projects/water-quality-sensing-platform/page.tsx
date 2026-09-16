'use client';

import Layout from '@/components/layout';

export default function WaterQualitySensingPlatformPage() {
  const components = [
    ['Teensy 3.6', '1'],
    ['Fluke 28II', '1'],
    ['LDR', '1'],
    ['Laser Module', '1'],
    ['Conductivity Module', '1'],
    ['GPS Breakout Board', '1'],
    ['Micro SD Card Breakout', '1'],
    ['250kv Brushless Motors', '2'],
    ['30A ESC', '2'],
    ['4S Battery + Charger', '1'],
    ['12V Exhaust Fans', '2'],
    ['100W RGB LEDs', '3'],
    ['18650 Batteries', '4'],
    ['Prototype Board', ''],
    ['Assorted Wiring', ''],
  ];

  return (
    <Layout title="">
      <main className="w-full">

        {/* =====================================================
            HERO IMAGE

            Replace with final watercraft image.
        ===================================================== */}

        <section className="px-5 pt-24 sm:px-8 lg:px-12 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="flex aspect-[16/9] w-full items-center justify-center bg-foreground/[0.035]">
              <p className="m-0 text-sm text-foreground/25">
                Water Quality Sensing Platform Hero Image
              </p>
            </div>

          </div>
        </section>


        {/* =====================================================
            TITLE
        ===================================================== */}

        <section className="px-5 pb-16 pt-10 sm:px-8 lg:px-12 lg:pb-20 lg:pt-12">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-7">

                <p className="m-0 text-sm text-foreground/40">
                  Research + Development
                </p>

                <h1 className="m-0 mt-3 max-w-[1200px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  Water Quality Sensing Platform
                </h1>

              </div>


              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A catamaran-style water quality sensing vessel developed to
                  support environmental data collection across large bodies of
                  water.
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

              <p className="m-0 text-xs text-foreground/40">
                Type
              </p>

              <p className="m-0 mt-2 text-sm">
                Research Project
              </p>

            </div>


            <div className="border-r border-foreground/20 px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Period
              </p>

              <p className="m-0 mt-2 text-sm">
                Jun 2020 - Aug 2020
              </p>

            </div>


            <div className="border-r border-foreground/20 px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Organization
              </p>

              <p className="m-0 mt-2 text-sm leading-[1.6]">
                CAROBOT Learning and
                <br />
                Research Organization / MannLab
              </p>

            </div>


            <div className="border-r border-foreground/20 px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Research Lead
              </p>

              <p className="m-0 mt-2 text-sm">
                Prof. Steve Mann
              </p>

            </div>


            <div className="px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Development
              </p>

              <p className="m-0 mt-2 text-sm leading-[1.6]">
                Design + Fabrication
                <br />
                Electronics + Integration
              </p>

            </div>

          </div>
        </section>


        {/* =====================================================
            PROJECT CONTEXT + REFERENCES
        ===================================================== */}

        <section className="px-5 sm:px-8 lg:px-12">
          <div className="mx-auto w-full max-w-[1800px] border-b border-foreground/20 py-6">

            <div className="grid gap-8 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-xs text-foreground/40">
                  Project Context
                </p>

              </div>


              <div className="lg:col-span-5">

                <p className="m-0 max-w-[620px] text-sm leading-[1.7] text-foreground/60">
                  Research conducted with CAROBOT Learning and Research
                  Organization / MannLab under Professor Steve Mann. My work
                  focused on the design, fabrication, and integration of the
                  hull and motion systems for a mobile water quality sensing
                  vessel.
                </p>

              </div>


              <div className="lg:col-span-4">

                <p className="m-0 text-xs text-foreground/40 lg:text-right">
                  References
                </p>

                <div className="mt-3 flex flex-col gap-2 lg:items-end">

                  <a
                    href="https://mannlab.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm underline decoration-foreground/30 underline-offset-4 transition-opacity duration-200 hover:opacity-50"
                  >
                    MannLab ↗
                  </a>

                  <a
                    href="http://darcy.rsgc.on.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm underline decoration-foreground/30 underline-offset-4 transition-opacity duration-200 hover:opacity-50"
                  >
                    Design Engineering Report ↗
                  </a>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            01 PROJECT OVERVIEW
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  01
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Project Overview
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The research explored a mobile approach to water quality
                  testing by combining a sensor platform with a purpose-built
                  watercraft capable of moving through a defined testing area.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The project investigated limitations associated with
                    conventional water quality testing, including long wait
                    times, inefficient data collection, and the potential for
                    human error.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    A mobile platform was developed around a sensor pod that
                    could be moved through the water by the vessel or towed by
                    a swimmer. The watercraft provided the physical platform
                    required to transport the sensing system across larger
                    testing areas.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            02 WATERCRAFT DEVELOPMENT
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Watercraft Development
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  A catamaran-style watercraft was developed to provide a
                  stable platform for propulsion, control electronics, and the
                  towed sensing system.
                </p>

              </div>

            </div>


            {/* DEVELOPMENT + COMPONENTS */}

            <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-12">

              {/* DEVELOPMENT */}

              <div className="lg:col-span-7">

                <div className="grid gap-5 border-t border-foreground/30 py-5 sm:grid-cols-12">

                  <div className="sm:col-span-3">

                    <p className="m-0 text-xs text-foreground/40">
                      01 / Hull Design
                    </p>

                  </div>


                  <div className="sm:col-span-9">

                    <p className="m-0 max-w-[720px] text-base leading-[1.5]">
                      The watercraft used two pontoon-style hulls connected by
                      copper rods. The arrangement provided a broad base for
                      the vessel while creating a central area for the
                      electronics and motion systems.
                    </p>

                  </div>

                </div>


                <div className="grid gap-5 border-t border-foreground/20 py-5 sm:grid-cols-12">

                  <div className="sm:col-span-3">

                    <p className="m-0 text-xs text-foreground/40">
                      02 / Fabrication
                    </p>

                  </div>


                  <div className="sm:col-span-9">

                    <p className="m-0 max-w-[720px] text-base leading-[1.5]">
                      The vessel was modeled in Fusion 360 and divided into 16
                      sections for fabrication on an Ultimaker 3 Extended. The
                      printed hull sections were assembled and reinforced with
                      epoxy and carbon fibre to improve strength and
                      waterproofing.
                    </p>

                  </div>

                </div>


                <div className="grid gap-5 border-y border-foreground/20 py-5 sm:grid-cols-12">

                  <div className="sm:col-span-3">

                    <p className="m-0 text-xs text-foreground/40">
                      03 / Float Testing
                    </p>

                  </div>


                  <div className="sm:col-span-9">

                    <p className="m-0 max-w-[720px] text-base leading-[1.5]">
                      Initial float testing left the vessel in a test pool for
                      48 hours with no detected leaks. Wave testing identified
                      a top-heavy configuration, leading to the batteries being
                      repositioned lower in the vessel before further testing.
                    </p>

                  </div>

                </div>

              </div>


              {/* COMPONENTS */}

              <div className="lg:col-span-5">

                <div className="border-t border-foreground/30">

                  <div className="flex items-baseline justify-between border-b border-foreground/20 py-4">

                    <p className="m-0 text-sm">
                      System Components
                    </p>

                    <p className="m-0 text-xs text-foreground/40">
                      Qty.
                    </p>

                  </div>


                  <div className="grid gap-x-8 sm:grid-cols-2">

                    <div>

                      {components.slice(0, 8).map(([component, quantity]) => (
                        <div
                          key={component}
                          className="flex items-center justify-between gap-5 border-b border-foreground/20 py-[9px]"
                        >

                          <p className="m-0 text-xs">
                            {component}
                          </p>

                          <p className="m-0 shrink-0 text-xs text-foreground/40">
                            {quantity}
                          </p>

                        </div>
                      ))}

                    </div>


                    <div>

                      {components.slice(8).map(([component, quantity]) => (
                        <div
                          key={component}
                          className="flex items-center justify-between gap-5 border-b border-foreground/20 py-[9px]"
                        >

                          <p className="m-0 text-xs">
                            {component}
                          </p>

                          <p className="m-0 shrink-0 text-xs text-foreground/40">
                            {quantity}
                          </p>

                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            03 PROPULSION + MOTION
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Propulsion + Motion
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The hull and propulsion systems were developed together to
                  create a mobile platform capable of carrying the research
                  hardware across the water.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  Two 250kv brushless motors provided propulsion, each
                  controlled through a 30A electronic speed controller. The
                  motors were integrated into the catamaran-style platform
                  alongside the battery and control electronics.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The development process included hull construction,
                  waterproofing, propulsion testing, and revisions to the
                  vessel&apos;s weight distribution before field deployment.
                </p>

              </div>

            </div>


            {/* ONE LONG FIGURE */}

            <div className="mt-16">

              <div className="flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">

                <p className="m-0 text-sm text-foreground/25">
                  Hull + Propulsion Development Figure
                </p>

              </div>


              <div className="mt-3 flex justify-between gap-6">

                <p className="m-0 text-xs text-foreground/40">
                  Hull construction, waterproofing, and propulsion development
                </p>

                <p className="m-0 text-xs text-foreground/30">
                  Water Quality Sensing Platform
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            04 SENSING SYSTEM
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Sensing System
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The watercraft was developed as the mobile component of a
                  larger sensing system designed to collect environmental data
                  across a testing area.
                </p>


                <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-2">

                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Sensor Pod
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The project incorporated a separate sensor pod designed
                      to move through the water with the vessel. The pod
                      provided the physical interface between the sensing
                      hardware and the surrounding water.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Environmental Measurements
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The sensing system was developed to collect environmental
                      measurements including temperature, conductivity, and
                      optical water-quality information.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Position
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      GPS positioning allowed measurements to be associated
                      with locations across the testing area, supporting the
                      spatial mapping of recorded environmental conditions.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Data
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The electronics architecture incorporated data logging
                      alongside the environmental sensors, allowing
                      measurements collected during testing to be recorded for
                      later analysis.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* TWO FIGURES */}

            <div className="mt-16 grid gap-5 sm:grid-cols-2">

              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">

                  <p className="m-0 text-sm text-foreground/25">
                    Sensor Pod
                  </p>

                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Water quality sensor pod and electronics
                </p>

              </div>


              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">

                  <p className="m-0 text-sm text-foreground/25">
                    Electronics Development
                  </p>

                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Sensing and data collection electronics
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            05 FIELD TESTING
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Field Testing
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The platform progressed from controlled float testing to
                  field deployment at Woodbine Beach and Kelso Reservoir.
                </p>


                <div className="mt-14 grid gap-10 lg:grid-cols-2">

                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Field Test 01
                    </p>

                    <h3 className="m-0 mt-3 text-xl font-normal">
                      Woodbine Beach
                    </h3>

                    <p className="m-0 mt-5 max-w-[650px] text-base leading-[1.7]">
                      The first field test took place at Woodbine Beach with
                      the City of Toronto. The platform was tested alongside
                      the City&apos;s conventional process for collecting and
                      testing water quality in Lake Ontario.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Field Test 02
                    </p>

                    <h3 className="m-0 mt-3 text-xl font-normal">
                      Kelso Reservoir
                    </h3>

                    <p className="m-0 mt-5 max-w-[650px] text-base leading-[1.7]">
                      A second field test was completed at Kelso Reservoir with
                      Conservation Halton. The platform was used to collect
                      measurements across a waypoint-based testing area.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* FIELD TEST IMAGE */}

            <div className="mt-16">

              <div className="flex aspect-[16/9] w-full items-center justify-center bg-foreground/[0.035]">

                <p className="m-0 text-sm text-foreground/25">
                  Watercraft Field Testing
                </p>

              </div>

              <p className="m-0 mt-3 text-xs text-foreground/40">
                Final watercraft and sensor platform during field testing
              </p>

            </div>

          </div>
        </section>


        {/* =====================================================
            06 DATA MAPPING
        ===================================================== */}

        <section className="px-5 pb-36 pt-24 sm:px-8 lg:px-12 lg:pb-48 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  06
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Data Mapping
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Field measurements were connected with position to visualize
                  changing environmental conditions across the reservoir.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    At Kelso Reservoir, the platform completed a 4 × 4 metre
                    waypoint grid in under one hour. The test allowed
                    measurements to be collected across a defined spatial area
                    rather than at a single point.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The resulting dataset included temperature, optical
                    clarity, and conductivity information associated with
                    locations across the reservoir.
                  </p>

                </div>

              </div>

            </div>


            {/* FINAL DATA MAP */}

            <div className="mt-16">

              <div className="flex aspect-[16/9] w-full items-center justify-center bg-foreground/[0.035]">

                <p className="m-0 text-sm text-foreground/25">
                  Kelso Reservoir Environmental Data Map
                </p>

              </div>

              <div className="mt-3 flex justify-between gap-6">

                <p className="m-0 text-xs text-foreground/40">
                  Temperature, optical clarity, and conductivity data mapped
                  across Kelso Reservoir
                </p>

                <p className="m-0 text-xs text-foreground/30">
                  Water Quality Sensing Platform
                </p>

              </div>

            </div>

          </div>
        </section>

      </main>
    </Layout>
  );
}