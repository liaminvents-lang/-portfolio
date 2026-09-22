'use client';

import Layout from '@/components/layout';
import Link from 'next/link';

export default function CapacitorVisualizerPage() {
  const components = [
    ['9V DC Alkaline Battery', '1'],
    ['Female Barrel Jack', '1'],
    ['470 Ω Fixed Resistor', '3'],
    ['5mm Bicolor LED (R/G)', '1'],
    ['5mm Yellow LED', '1'],
    ['1mF Capacitor', '1'],
    ['PBNO Push Buttons', '2'],
    ['3D Printed ACES Case', '1'],
    ['Heat Synced Rivets', '4'],
    ['ACES Capacitor Visualizer PCB', '1'],
    ['Piece of Heat Shrink', '1'],
    ['Wires', 'Assorted'],
  ];

  const timingData = [
    ['1,000,000 Ω', '10 µF', '500 s', '540 s (6V)'],
    ['10,000 Ω', '100 µF', '50 s', '120 s (7V)'],
    ['470 Ω', '1000 µF', '2.35 s', '12 s (7.65V)'],
  ];

  return (
    <Layout title="">
      <main className="w-full">

        {/* HERO */}

        <section className="px-5 pt-24 sm:px-8 lg:px-12 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="flex aspect-[16/9] w-full items-center justify-center bg-foreground/[0.035]">
              <p className="m-0 text-sm text-foreground/25">
                Capacitor Visualizer
              </p>
            </div>
          </div>
        </section>


        {/* TITLE */}

        <section className="px-5 pb-16 pt-10 sm:px-8 lg:px-12 lg:pb-20 lg:pt-12">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-7">

                <p className="m-0 text-sm text-foreground/40">
                  Electronics + Circuit Fabrication
                </p>

                <h1 className="m-0 mt-3 max-w-[1100px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  Capacitor Visualizer
                </h1>

              </div>


              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A physical circuit designed to demonstrate the use of a
                  capacitor as a timer through charging, discharging, and
                  visible LED output.
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
                Analog Circuit
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Timing
              </p>
              <p className="m-0 mt-2 text-sm">
                Capacitor
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Interface
              </p>
              <p className="m-0 mt-2 text-sm">
                PBNO Push Buttons
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Circuit
              </p>
              <p className="m-0 mt-2 text-sm">
                ACES PCB
              </p>
            </div>


            <div className="px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Enclosure
              </p>
              <p className="m-0 mt-2 text-sm">
                3D Printed
              </p>
            </div>

          </div>
        </section>


        {/* PROJECT CONTEXT */}

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
                  The Capacitor Visualizer was developed to demonstrate how a
                  capacitor can be used as a timer. The project progressed
                  through a breadboard prototype, a soldered ACES PCB, and a
                  final 3D-printed enclosure.
                </p>

              </div>


              <div className="lg:col-span-4">

                <p className="m-0 text-xs text-foreground/40 lg:text-right">
                  Reference
                </p>

                <div className="mt-3 flex flex-col gap-2 lg:items-end">

                  <a
                    href="http://darcy.rsgc.on.ca/ACES/TEL3M/1920/TasksFall.html#capacitor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm underline decoration-foreground/30 underline-offset-4 transition-opacity duration-200 hover:opacity-50"
                  >
                    ACES Capacitor Project ↗
                  </a>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 01 PROJECT OVERVIEW */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-12 lg:grid-cols-12">

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
                  Charging and discharging a capacitor is translated into a
                  visible change through a yellow LED and a red/green
                  bi-colour LED.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The main circuit components are three 470 Ω fixed
                    resistors, one yellow LED, one bi-colour LED, a 1mF
                    capacitor, and two PBNO push buttons.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The push buttons control the charging and discharging
                    states of the capacitor, making its behaviour visible
                    through the LED outputs.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 02 CAPACITOR TIMING */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Capacitor Timing
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The circuit visualizes the time required for a capacitor to
                  accumulate and release charge.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  Capacitance is measured in farads. The report also uses tau
                  as a measurement of the charging time of a capacitor. One
                  tau represents the time required for the capacitor to charge
                  to 63% of the source voltage.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The next tau represents the time required to charge to 63%
                  of the remaining source voltage. After five taus, the
                  capacitor is considered charged.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* 03 TIMING TESTS */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Timing Tests
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1000px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Different resistance and capacitance combinations were
                  compared using theoretical and observed charging times.
                </p>


                <div className="mt-14 overflow-x-auto border-t border-foreground/30">

                  <div className="grid min-w-[650px] grid-cols-4 border-b border-foreground/20 py-4 text-xs text-foreground/40">
                    <p className="m-0">
                      Resistance
                    </p>
                    <p className="m-0">
                      Capacitance
                    </p>
                    <p className="m-0">
                      Theoretical 5τ
                    </p>
                    <p className="m-0">
                      Observed 5τ
                    </p>
                  </div>


                  {timingData.map((row) => (
                    <div
                      key={`${row[0]}-${row[1]}`}
                      className="grid min-w-[650px] grid-cols-4 border-b border-foreground/20 py-4 text-sm"
                    >
                      <p className="m-0">
                        {row[0]}
                      </p>
                      <p className="m-0">
                        {row[1]}
                      </p>
                      <p className="m-0">
                        {row[2]}
                      </p>
                      <p className="m-0 text-foreground/60">
                        {row[3]}
                      </p>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 04 CHARGE + DISCHARGE */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Charge + Discharge
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The LED states provide a visual representation of current
                  flow as the capacitor charges and discharges.
                </p>


                <div className="mt-14 grid gap-5 sm:grid-cols-3">

                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      Charge
                    </p>

                    <p className="m-0 mt-3 text-xl">
                      Button 1
                    </p>

                    <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                      Pressing the first PBNO button causes current to flow
                      clockwise. The red LED turns on and slowly dims as the
                      capacitor fills.
                    </p>

                  </div>


                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      Discharge
                    </p>

                    <p className="m-0 mt-3 text-xl">
                      Button Released
                    </p>

                    <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                      When button 1 is released, current flows
                      counter-clockwise as the capacitor releases its stored
                      charge.
                    </p>

                  </div>


                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      Dual Input
                    </p>

                    <p className="m-0 mt-3 text-xl">
                      Both Buttons
                    </p>

                    <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                      When both buttons receive input, current flows
                      clockwise, the capacitor fills halfway, and the red and
                      yellow LEDs remain on without dimming.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 05 PROTOTYPE */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Breadboard Prototype
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Development began by assembling and testing the circuit on a
                  breadboard.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The breadboard prototype was the first of three stages in
                  the project. The circuit was assembled using the required
                  components and tested before progressing to the permanent
                  PCB.
                </p>

              </div>

            </div>


            <div className="mt-16">

              <div className="flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Breadboard Prototype
                </p>
              </div>

              <p className="m-0 mt-3 text-xs text-foreground/40">
                Initial capacitor visualizer circuit
              </p>

            </div>

          </div>
        </section>


        {/* 06 ACES PCB */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  06
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  ACES PCB
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Once the breadboard prototype was functional, the circuit
                  was transferred to a permanent PCB.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  An ACES PCB was provided for the second stage of the
                  project. The circuit components were soldered to the board
                  and the completed PCB was tested before moving into the
                  enclosure.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* 07 ENCLOSURE */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  07
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Enclosure
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The completed PCB was integrated into a 3D-printed ACES
                  case to create the finished device.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The enclosure was the third stage of the project after
                    breadboard testing and PCB assembly.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The final assembly uses four heat synced rivets, the ACES
                    Capacitor Visualizer PCB, a female barrel jack, and the
                    3D-printed ACES case.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 08 COMPONENTS */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  08
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Components
                </h2>

              </div>


              <div className="lg:col-span-9">

                <div className="border-t border-foreground/30">

                  <div className="flex items-baseline justify-between border-b border-foreground/20 py-4">

                    <p className="m-0 text-sm">
                      Parts Table
                    </p>

                    <p className="m-0 text-xs text-foreground/40">
                      Qty.
                    </p>

                  </div>


                  {components.map(([component, quantity]) => (
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


        {/* 09 FINAL SYSTEM */}

        <section className="px-5 pb-28 pt-24 sm:px-8 lg:px-12 lg:pb-36 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  09
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Final System
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The final Capacitor Visualizer packages the charging and
                  discharging circuit into a permanent PCB and 3D-printed
                  enclosure.
                </p>

              </div>

            </div>


            <div className="mt-16 grid gap-5 sm:grid-cols-2">

              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Capacitor Visualizer
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Completed device
                </p>

              </div>


              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    PCB + Enclosure
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Final circuit assembly
                </p>

              </div>

            </div>

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