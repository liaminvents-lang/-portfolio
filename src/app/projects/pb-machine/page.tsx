'use client';

import Layout from '@/components/layout';
import Link from 'next/link';

export default function PBMachinePage() {
  const components = [
    ['9V DC Alkaline Battery', '1'],
    ['3mm Barrel Jack', '1'],
    ['LM3914 IC', '1'],
    ['1.5mm Green LED', '6'],
    ['1.5mm Yellow LED', '2'],
    ['1.5mm Red LED', '2'],
    ['2.2 kΩ Fixed Resistor', '1'],
    ['3.3 kΩ Fixed Resistor', '1'],
    ['Adafruit Mic with Amplifier', '1'],
    ['LM7805 5V Voltage Regulator', '1'],
    ['Full Breadboard', '1'],
    ['103 SMT Resistor', '1'],
    ['SMT Green LED', '1'],
    ['PB Machine PCB', '1'],
    ['Male GPIO Pin Headers', '6'],
    ['Wires', 'Assorted'],
  ];

  return (
    <Layout title="">
      <main className="w-full">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="px-5 pt-24 sm:px-8 lg:px-12 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="flex aspect-[16/9] w-full items-center justify-center bg-foreground/[0.035]">
              <p className="m-0 text-sm text-foreground/25">
                PB Machine
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
                  Electronics + SMT Soldering
                </p>

                <h1 className="m-0 mt-3 max-w-[1100px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  PB Machine
                </h1>

              </div>


              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  Development of a compact analog circuit combining a custom
                  PCB, surface-mount soldering, through-hole assembly, and an
                  LM3914-driven LED display.
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
                Analog Electronics
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Driver
              </p>
              <p className="m-0 mt-2 text-sm">
                LM3914
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Input
              </p>
              <p className="m-0 mt-2 text-sm">
                Adafruit Mic
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Fabrication
              </p>
              <p className="m-0 mt-2 text-sm">
                SMT + THT Soldering
              </p>
            </div>


            <div className="px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Development
              </p>
              <p className="m-0 mt-2 text-sm leading-[1.6]">
                PCB Assembly
                <br />
                Analog Circuits
              </p>
            </div>

          </div>
        </section>


        {/* =====================================================
            PROJECT CONTEXT
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
                  The PB Machine was developed to learn SMT soldering while
                  creating a small analog circuit. The project was completed in
                  two parts: assembly of the PB Machine PCB and development of
                  the supporting LM3914 circuit.
                </p>

              </div>


              <div className="lg:col-span-4">

                <p className="m-0 text-xs text-foreground/40 lg:text-right">
                  Reference
                </p>

                <div className="mt-3 flex flex-col gap-2 lg:items-end">

                  <a
                    href="http://darcy.rsgc.on.ca/ACES/TEI4M/2122/Tasks.html#PBMachine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm underline decoration-foreground/30 underline-offset-4 transition-opacity duration-200 hover:opacity-50"
                  >
                    ACES PB Machine ↗
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
                  The project combines surface-mount PCB assembly with an
                  analog LM3914 circuit that senses an analog voltage level and
                  drives a sequence of LEDs.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The PB Machine itself consists of the PCB, 3mm barrel jack,
                    103 SMT resistor, SMT green LED, and GPIO pin headers.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The supporting circuit uses an LM3914, microphone with
                    amplifier, and ten individual LEDs to create the analog
                    display.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            02 PB MACHINE
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  PB Machine
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The PCB provided a platform for developing and practicing
                  both surface-mount and through-hole soldering.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  Surface-mount assembly began with the SMT green LED. Solder
                  paste was applied to the PCB using a toothpick and the
                  components were positioned using tweezers.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The hot air station was heated to 300° and moved in a
                  circular motion to melt the solder paste and solder the
                  components to the PCB.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  After the surface-mount components were complete, the
                  through-hole parts were soldered into place to finish the PB
                  Machine assembly.
                </p>

              </div>

            </div>


            <div className="mt-16">

              <div className="flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  PB Machine PCB
                </p>
              </div>

              <div className="mt-3 flex justify-between gap-6">

                <p className="m-0 text-xs text-foreground/40">
                  SMT and through-hole PCB assembly
                </p>

                <p className="m-0 text-xs text-foreground/30">
                  PB Machine
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            03 SMT SOLDERING
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  SMT Soldering
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The surface-mount components were assembled using solder
                  paste, tweezers, and a hot air station.
                </p>


                <div className="mt-14 grid gap-5 sm:grid-cols-3">

                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      01
                    </p>

                    <p className="m-0 mt-3 text-lg">
                      Solder Paste
                    </p>

                    <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                      Solder paste was applied directly to the PCB using a
                      toothpick.
                    </p>

                  </div>


                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      02
                    </p>

                    <p className="m-0 mt-3 text-lg">
                      Placement
                    </p>

                    <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                      Surface-mount components were positioned on the board
                      using tweezers.
                    </p>

                  </div>


                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      03
                    </p>

                    <p className="m-0 mt-3 text-lg">
                      Hot Air
                    </p>

                    <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                      The hot air station was set to 300° and used in a
                      circular motion to melt the solder paste.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            04 CIRCUIT ASSEMBLY
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Circuit Assembly
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The analog circuit is built around the LM3914 and converts
                  an analog voltage level into a sequence of LED outputs.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The LM3914 senses analog voltage levels and drives up to ten
                  LEDs, creating a series of linear outputs. The IC has 18
                  pins and can switch between bar and dot display modes using
                  pin 9.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The report lists an operating voltage of 3-35 volts. Inside
                  the LM3914 are ten comparators and a resistor. As the input
                  voltage increases, additional comparators turn on.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            05 BAR + DOT MODES
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Bar + Dot Modes
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The LM3914 provides two different methods of displaying the
                  incoming analog level.
                </p>


                <div className="mt-14 grid gap-5 sm:grid-cols-2">

                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      Mode 01
                    </p>

                    <p className="m-0 mt-3 text-xl">
                      Dot
                    </p>

                    <p className="m-0 mt-4 max-w-[520px] text-sm leading-[1.7] text-foreground/60">
                      In dot mode, only one LED is high while the remaining
                      LEDs stay low.
                    </p>

                  </div>


                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      Mode 02
                    </p>

                    <p className="m-0 mt-3 text-xl">
                      Bar
                    </p>

                    <p className="m-0 mt-4 max-w-[520px] text-sm leading-[1.7] text-foreground/60">
                      In bar mode, every LED up to the highest active level is
                      turned on.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            06 COMPARATORS
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  06
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Comparators
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The LM3914 uses a series of comparators to determine which
                  LED outputs are active.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  A comparator compares two voltages or currents and outputs a
                  digital signal indicating which is larger. It has two input
                  terminals, V+ and V-, and one digital output, Vo.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  In the LM3914, ten comparators are arranged in parallel with
                  1kΩ resistors separating them.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            07 COMPONENTS
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  07
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


        {/* =====================================================
            08 FINAL SYSTEM
        ===================================================== */}

        <section className="px-5 pb-28 pt-24 sm:px-8 lg:px-12 lg:pb-36 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  08
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Final System
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The completed project combines the surface-mount PB Machine
                  PCB with an analog LM3914 circuit and microphone input.
                </p>

              </div>

            </div>


            <div className="mt-16 grid gap-5 sm:grid-cols-2">

              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    PB Machine Close-Up
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Completed PB Machine
                </p>

              </div>


              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    VU Meter Circuit
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  LM3914 circuit assembly
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