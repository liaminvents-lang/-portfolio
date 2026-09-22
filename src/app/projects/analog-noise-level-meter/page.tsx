'use client';

import Layout from '@/components/layout';
import Link from 'next/link';

export default function AnalogNoiseLevelMeterPage() {
  const components = [
    ['9V DC Alkaline Battery', '1'],
    ['3mm Barrel Jack', '1'],
    ['LM3914 IC', '4'],
    ['LED Bar Graphs', '4'],
    ['1 kΩ Fixed Resistor', '3'],
    ['2.2 kΩ Fixed Resistor', '1'],
    ['3.3 kΩ Fixed Resistor', '1'],
    ['10 kΩ Potentiometer', '1'],
    ['Mic with Amplifier', '1'],
    ['LM7805 5V Voltage Regulator', '1'],
    ['Solder Breadboard', '1'],
    ['3D Printed Case', '1'],
    ['Heat Set Rivets', '4'],
    ['Screws', '4'],
    ['Buzzer', '1'],
    ['Slide Switch', '1'],
    ['Wires', 'Assorted'],
  ];

  return (
    <Layout title="">
      <main className="w-full">

        {/* HERO */}

        <section className="px-5 pt-24 sm:px-8 lg:px-12 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="flex aspect-[16/9] w-full items-center justify-center bg-foreground/[0.035]">
              <p className="m-0 text-sm text-foreground/25">
                Analog Noise Level Meter
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
                  Analog Electronics
                </p>

                <h1 className="m-0 mt-3 max-w-[1100px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  Analog Noise Level Meter
                </h1>

              </div>


              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A sound-level display using four cascaded LM3914 ICs and
                  four LED bar graphs to create a 40-LED visual output.
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
                Project
              </p>
              <p className="m-0 mt-2 text-sm">
                1.5
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Input
              </p>
              <p className="m-0 mt-2 text-sm">
                Microphone
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Driver
              </p>
              <p className="m-0 mt-2 text-sm">
                4 × LM3914
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Display
              </p>
              <p className="m-0 mt-2 text-sm">
                40 LEDs
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

                <p className="m-0 max-w-[620px] text-sm leading-[1.7] text-foreground/60">
                  The Analog Noise Level Meter was developed as a final
                  project incorporating skills from the course. A microphone
                  provides the input while four cascaded LM3914 ICs drive four
                  LED bar graphs to display the level of sound.
                </p>

              </div>


              <div className="lg:col-span-4">

                <p className="m-0 text-xs text-foreground/40 lg:text-right">
                  Reference
                </p>

                <div className="mt-3 flex flex-col gap-2 lg:items-end">

                  <a
                    href="http://darcy.rsgc.on.ca/ACES/TEL3M/1920/ISPsFall.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm underline decoration-foreground/30 underline-offset-4 transition-opacity duration-200 hover:opacity-50"
                  >
                    ACES ISP Reference ↗
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
                  Four cascaded LM3914 ICs drive four 10-LED bar graphs,
                  creating a total visual output of 40 LEDs.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The proposal used a microphone as the input and four LED
                    bar graphs driven by LM3914 chips as the output.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The report also describes a microphone or potentiometer
                    providing input, displaying sound level for the microphone
                    and resistance for the potentiometer.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 02 LM3914 */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  LM3914
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The LM3914 senses analog voltage levels and drives up to 10
                  LEDs to create a linear visual output.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  Each LM3914 has 18 pins. Pin 9 can switch the chip between
                  bar and dot mode. The report lists an operating voltage of
                  3–35 volts and states that one LM3914 can drive up to 10
                  LEDs.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  As voltage is input into the LM3914, its output pins are set
                  high and the corresponding LEDs illuminate.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* 03 COMPARATORS */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Comparators
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Inside each LM3914 are 10 comparators used to respond to
                  changes in the input voltage.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    A comparator compares two voltages or currents and outputs
                    a digital signal indicating which is larger. It has two
                    input terminals, V+ and V-, and one digital output, Vo.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    In the LM3914, the report describes 10 comparators in
                    parallel with 1 kΩ resistors separating them. As the input
                    voltage increases, more comparators turn on.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 04 BAR + DOT MODES */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Bar + Dot Modes
                </h2>

              </div>


              <div className="lg:col-span-7">

                <div className="grid gap-5 sm:grid-cols-2">

                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      Dot Mode
                    </p>

                    <p className="m-0 mt-3 text-xl">
                      One LED High
                    </p>

                    <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                      In dot mode, only one LED is high while the remaining
                      LEDs are low.
                    </p>

                  </div>


                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      Bar Mode
                    </p>

                    <p className="m-0 mt-3 text-xl">
                      LEDs Build Up
                    </p>

                    <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                      In bar mode, every LED up to the highest active level
                      is high.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 05 SCHEMATIC */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  05 / Step 1
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Schematic
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The circuit was designed around four LM3914 chips and four
                  LED bar graphs.
                </p>

              </div>


              <div className="lg:col-span-7">

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Circuit Schematic
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 06 BREADBOARD */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  06 / Step 2
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Breadboard Prototype
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The schematic was transferred into a working breadboard
                  prototype.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  Wires were soldered onto the bottoms of the bar graphs,
                  microphone, and buzzer to make wiring easier. The schematic
                  was then followed and the components were connected.
                </p>

              </div>

            </div>


            <div className="mt-16 flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">
              <p className="m-0 text-sm text-foreground/25">
                Breadboard Prototype
              </p>
            </div>

          </div>
        </section>


        {/* 07 SOLDER BREADBOARD */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  07 / Step 3
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Solder Breadboard
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The breadboard circuit was transferred to a solder
                  breadboard to secure the components in place.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  Small components, chip seats, and headers were soldered
                  first, followed by larger components including the buzzer
                  and LED bar graphs.
                </p>

              </div>

            </div>


            <div className="mt-16 flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">
              <p className="m-0 text-sm text-foreground/25">
                Soldered Circuit
              </p>
            </div>

          </div>
        </section>


        {/* 08 CASE */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  08 / Step 4
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  3D Printed Case
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The final circuit was housed inside a custom 3D printed
                  enclosure.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The case was designed in Fusion 360 with the help of
                  tutorials for precision measuring.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The case was sliced in Ultimaker Cura and printed on an
                  Ultimaker 3+ Extended. The total print time was 4 hours and
                  25 minutes.
                </p>

              </div>

            </div>


            <div className="mt-16 flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">
              <p className="m-0 text-sm text-foreground/25">
                3D Printed Case
              </p>
            </div>

          </div>
        </section>


        {/* 09 COMPONENTS */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  09
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


        {/* 10 FINAL SYSTEM */}

        <section className="px-5 pb-28 pt-24 sm:px-8 lg:px-12 lg:pb-36 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  10
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Final System
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The completed Analog Noise Level Meter combines a
                  microphone input with four cascaded LM3914 ICs and four
                  10-LED bar graphs to create a 40-LED sound display.
                </p>

              </div>

            </div>


            <div className="mt-16 grid gap-5 sm:grid-cols-2">

              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Analog Noise Level Meter
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Completed project
                </p>

              </div>


              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    40-LED Display
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Four cascaded LED bar graphs
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