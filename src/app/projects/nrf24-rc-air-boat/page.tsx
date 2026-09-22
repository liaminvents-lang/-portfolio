'use client';

import Layout from '@/components/layout';
import Link from 'next/link';

export default function Nrf24RcAirBoatPage() {
  const transmitterComponents = [
    ['Arduino Nano', '1'],
    ['nRF24 Breakout', '1'],
    ['nRF24 Short Range Module', '1'],
    ['Joystick', '1'],
    ['Half Perma Proto', '1'],
    ['Wires', 'Assorted'],
  ];

  const receiverComponents = [
    ['Arduino Pro Micro', '1'],
    ['LM3904 Voltage Regulator', '1'],
    ['nRF24 Long Range Module', '1'],
    ['Custom PCB', '1'],
    ['Pin Headers', 'Assorted'],
    ['Wires', 'Assorted'],
  ];

  return (
    <Layout title="">
      <main className="w-full">

        {/* =====================================================
            HERO IMAGE
        ===================================================== */}

        <section className="px-5 pt-24 sm:px-8 lg:px-12 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="flex aspect-[16/9] w-full items-center justify-center bg-foreground/[0.035]">
              <p className="m-0 text-sm text-foreground/25">
                nRF24 RC Air Boat Hero Image
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
                  Electronics + Product Development
                </p>

                <h1 className="m-0 mt-3 max-w-[1100px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  nRF24 RC Air Boat
                </h1>

              </div>


              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A remote-controlled air boat developed around wireless nRF24
                  communication, custom electronics, hull design, computational
                  fluid dynamics, and additive manufacturing.
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
                Remote-Controlled Air Boat
              </p>

            </div>


            <div className="border-r border-foreground/20 px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Period
              </p>

              <p className="m-0 mt-2 text-sm">
                High School
              </p>

            </div>


            <div className="border-r border-foreground/20 px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Controllers
              </p>

              <p className="m-0 mt-2 text-sm">
                Arduino Nano + Pro Micro
              </p>

            </div>


            <div className="border-r border-foreground/20 px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Communication
              </p>

              <p className="m-0 mt-2 text-sm">
                nRF24 / 2.4 GHz
              </p>

            </div>


            <div className="px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Development
              </p>

              <p className="m-0 mt-2 text-sm leading-[1.6]">
                Electronics + PCB
                <br />
                CAD + CFD + 3D Printing
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

                <p className="m-0 max-w-[600px] text-sm leading-[1.7] text-foreground/60">
                  Completed during high school as part of the Advanced Computer
                  Engineering School program at Royal St. George&apos;s College.
                  The project combined wireless communication, control
                  electronics, custom PCB development, hull design, fluid
                  dynamics, and fabrication into a functional RC air boat.
                </p>

              </div>


              <div className="lg:col-span-4">

                <p className="m-0 text-xs text-foreground/40 lg:text-right">
                  References
                </p>

                <div className="mt-3 flex flex-col gap-2 lg:items-end">

                  <a
                    href="http://darcy.rsgc.on.ca/ACES/TEI3M/2021/ISPs.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm underline decoration-foreground/30 underline-offset-4 transition-opacity duration-200 hover:opacity-50"
                  >
                    ACES / RSGC Project Reference ↗
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
                  The nRF24 RC Air Boat brought together wireless control,
                  custom electronics, PCB development, hull design, CFD, and
                  large-scale 3D printing within a single project.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    Communication between the handheld transmitter and boat was
                    handled using nRF24 modules operating at 2.4 GHz. The
                    transmitter used an Arduino Nano while the receiver used an
                    Arduino Pro Micro and a custom PCB.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The boat hull went through three major revisions. Autodesk
                    CFD was used during development to test the design under
                    different conditions and evaluate weight distribution.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            02 NRF24 COMMUNICATION
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  nRF24 Communication
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  nRF24 modules provided wireless communication between the
                  transmitter and receiver, with a tested maximum transmission
                  distance of 80 metres in open water.
                </p>

              </div>

            </div>


            <div className="mt-14 grid gap-5 sm:grid-cols-3">

              <div className="border-t border-foreground/30 pt-5">

                <p className="m-0 text-xs text-foreground/40">
                  Frequency
                </p>

                <p className="m-0 mt-3 text-2xl">
                  2.4 GHz
                </p>

                <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                  Both nRF24 modules operate on the 2.4 GHz frequency.
                </p>

              </div>


              <div className="border-t border-foreground/30 pt-5">

                <p className="m-0 text-xs text-foreground/40">
                  Baud Rate
                </p>

                <p className="m-0 mt-3 text-2xl">
                  250 kbps – 2 Mbps
                </p>

                <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                  The modules communicate using baud rates ranging from
                  250 kbps to 2 Mbps.
                </p>

              </div>


              <div className="border-t border-foreground/30 pt-5">

                <p className="m-0 text-xs text-foreground/40">
                  Tested Range
                </p>

                <p className="m-0 mt-3 text-2xl">
                  80 m
                </p>

                <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                  Maximum transmission distance achieved during testing in
                  open water.
                </p>

              </div>

            </div>


            <div className="mt-12 grid gap-10 sm:grid-cols-2">

              <p className="m-0 text-base leading-[1.7]">
                One nRF24 long-range module was used for the receiver while one
                nRF24 short-range module was used for the transmitter. The
                modules can use up to 125 different channels.
              </p>

              <p className="m-0 text-base leading-[1.7] text-foreground/60">
                Each unit can communicate with six different units at the same
                time, providing the wireless connection between the transmitter
                and receiver.
              </p>

            </div>

          </div>
        </section>


        {/* =====================================================
            03 TRANSMITTER
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Transmitter
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  A handheld transmitter converts joystick input into wireless
                  control commands for the boat.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The transmitter consists of an Arduino Nano, nRF24 breakout
                  board, nRF24 short-range module, joystick, and Half Perma
                  Proto board. The components were soldered together to create
                  the input side of the control system.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The X-axis of the joystick controls the rudder and balancing
                  servo while the Y-axis controls the throttle. These inputs
                  are transmitted wirelessly using the nRF24 module.
                </p>

              </div>

            </div>


            <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-7">

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Transmitter Assembly
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Arduino Nano, joystick, and nRF24 transmitter
                </p>

              </div>


              <div className="lg:col-span-5">

                <div className="border-t border-foreground/30">

                  <div className="flex items-baseline justify-between border-b border-foreground/20 py-4">

                    <p className="m-0 text-sm">
                      Transmitter Components
                    </p>

                    <p className="m-0 text-xs text-foreground/40">
                      Qty.
                    </p>

                  </div>


                  {transmitterComponents.map(([component, quantity]) => (
                    <div
                      key={component}
                      className="flex items-center justify-between gap-5 border-b border-foreground/20 py-[10px]"
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
        </section>


        {/* =====================================================
            04 RECEIVER + PCB
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Receiver + PCB
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The receiver combined an Arduino Pro Micro, voltage
                  regulator, nRF24 long-range module, and custom PCB into the
                  boat&apos;s wireless control electronics.
                </p>


                <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-2">

                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      PCB V1
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The first version of the PCB was ordered through JLC PCB.
                      Two traces on the back of the board were accidentally
                      connected together, making the board and circuit
                      unusable.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      PCB V2
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      A second PCB revision was ordered from PCBWay and was
                      functional, completing the receiver electronics.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-7">

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Receiver + Custom PCB
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Arduino Pro Micro, long-range nRF24 module, and PCB
                </p>

              </div>


              <div className="lg:col-span-5">

                <div className="border-t border-foreground/30">

                  <div className="flex items-baseline justify-between border-b border-foreground/20 py-4">

                    <p className="m-0 text-sm">
                      Receiver Components
                    </p>

                    <p className="m-0 text-xs text-foreground/40">
                      Qty.
                    </p>

                  </div>


                  {receiverComponents.map(([component, quantity]) => (
                    <div
                      key={component}
                      className="flex items-center justify-between gap-5 border-b border-foreground/20 py-[10px]"
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
        </section>


        {/* =====================================================
            05 HULL DEVELOPMENT
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Hull Development
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The main boat hull was designed in Fusion 360 and developed
                  through three revisions as the hull geometry, internal
                  structure, wiring, and steering system evolved.
                </p>


                <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-2">

                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Structure
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      Paths and a starting base sketch were created before the
                      hull shape was extruded along the paths. Wall thickness
                      was set to 4 mm and internal support walls were added to
                      increase linear strength.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Electronics Access
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      An electronics access opening and accompanying lid were
                      added to the hull to provide access while blocking water
                      from entering.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Version 1
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The first hull used a shallow-V bottom that was flat at
                      the rear, with the hull paths converging toward a single
                      point at the front.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Versions 2 + 3
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      Version 2 changed to a flat bottom to allow the boat to
                      plane at top speed. Version 3 added an opening for
                      internal wire routing and modified the rudder shape and
                      cutout.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            <div className="mt-16">

              <div className="flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Hull Development — Version 1 / Version 2 / Version 3
                </p>
              </div>

              <div className="mt-3 flex justify-between gap-6">

                <p className="m-0 text-xs text-foreground/40">
                  Three iterations of the air boat hull
                </p>

                <p className="m-0 text-xs text-foreground/30">
                  Fusion 360
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            06 COMPUTATIONAL FLUID DYNAMICS
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  06
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Computational Fluid Dynamics
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Autodesk CFD was used to test the boat under different
                  conditions and parameters during hull development.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  Computational Fluid Dynamics simulation was incorporated into
                  the design process to evaluate the boat under different
                  conditions.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The simulations were used during development to evaluate the
                  boat under different conditions and inform weight
                  distribution.
                </p>

              </div>

            </div>


            <div className="mt-16">

              <div className="flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Autodesk CFD Simulation
                </p>
              </div>

              <div className="mt-3 flex justify-between gap-6">

                <p className="m-0 text-xs text-foreground/40">
                  Fluid dynamics and weight distribution
                </p>

                <p className="m-0 text-xs text-foreground/30">
                  Autodesk CFD
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            07 PRINTING + ASSEMBLY
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  07
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Printing + Assembly
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Version 3 required 175 hours and 21 minutes of total print
                  time, producing a 520 g hull and a final assembled weight of
                  1052 g.
                </p>


                <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-2">

                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      LW-PLA
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      Lightweight PLA was used for the main printed structure.
                      The material uses active foaming technology and begins
                      foaming at approximately 230°C, increasing its volume by
                      three times.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      PETG
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      PETG was used for the rudder and motor mounts. It was
                      selected for its strength-to-weight ratio and higher
                      temperature resistance around components that could heat
                      past 60°C.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Hull Assembly
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The two halves of the printed hull were epoxied together.
                      Body filler was used to fill cracks in the porous printed
                      material before the hull was sanded to create a smooth
                      finish.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Finish
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      Polyurethane black matte paint was applied to finish the
                      outside of the boat and add a waterproof layer.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            <div className="mt-16 grid gap-5 sm:grid-cols-3">

              <div className="border-t border-foreground/30 pt-5">

                <p className="m-0 text-xs text-foreground/40">
                  Version 3 Print Time
                </p>

                <p className="m-0 mt-3 text-2xl">
                  175 h 21 min
                </p>

              </div>


              <div className="border-t border-foreground/30 pt-5">

                <p className="m-0 text-xs text-foreground/40">
                  Hull Weight
                </p>

                <p className="m-0 mt-3 text-2xl">
                  520 g
                </p>

              </div>


              <div className="border-t border-foreground/30 pt-5">

                <p className="m-0 text-xs text-foreground/40">
                  Final Weight
                </p>

                <p className="m-0 mt-3 text-2xl">
                  1052 g
                </p>

              </div>

            </div>


            <div className="mt-16 grid gap-5 sm:grid-cols-2">

              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Hull Printing + Assembly
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  LW-PLA hull fabrication and assembly
                </p>

              </div>


              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Rudder + Motor Mounts
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  PETG components integrated into the final assembly
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            08 FINAL PRODUCT
        ===================================================== */}

        <section className="px-5 pb-28 pt-24 sm:px-8 lg:px-12 lg:pb-36 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  08
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Final Product
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The final air boat combined the Version 3 hull, wireless
                  nRF24 control system, custom receiver PCB, transmitter, and
                  fabricated steering components into a complete RC platform.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The wireless system achieved a tested transmission distance
                    of 80 metres in open water, with joystick input controlling
                    the rudder, balancing servo, and throttle.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The project developed through multiple iterations across
                    both the electronics and physical design, including two
                    receiver PCB versions and three major hull revisions.
                  </p>

                </div>

              </div>

            </div>


            <div className="mt-16">

              <div className="flex aspect-[16/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Final nRF24 RC Air Boat
                </p>
              </div>


              <div className="mt-3 flex justify-between gap-6">

                <p className="m-0 text-xs text-foreground/40">
                  Completed wireless RC air boat
                </p>

                <p className="m-0 text-xs text-foreground/30">
                  nRF24 RC Air Boat
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            PROJECT NAVIGATION
        ===================================================== */}

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