'use client';

import Layout from '@/components/layout';
import Link from 'next/link';

export default function ATmega328PDevelopmentBoardsPage() {
  const breadboardComponents = [
    ['ATmega328P', '1'],
    ['10 LED Barograph', '1'],
    ['22 pF Capacitors', '2'],
    ['16 MHz Crystal', '1'],
    ['10KΩ Resistor', '1'],
    ['7085 Voltage Regulator', '2'],
    ['Adafruit Mic', '1'],
    ['10K Pot', '1'],
    ['Push Button', '1'],
    ['Full+ Breadboard', '1'],
    ['Wires', 'Assorted'],
  ];

  const permaProtoComponents = [
    ['ATmega328P', '1'],
    ['10 LED Barograph', '1'],
    ['22 pF Capacitors', '2'],
    ['16 MHz Crystal', '1'],
    ['10KΩ Resistor', '1'],
    ['7085 Voltage Regulator', '2'],
    ['Adafruit Mic', '1'],
    ['10K Pot', '1'],
    ['PBNO', '1'],
    ['Half Perma Proto Board', '1'],
    ['Resistor Network', '1'],
    ['DC Barrel Jack', '1'],
    ['Male + Female Headers', 'Assorted'],
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
                ATmega328P Development Boards
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
                  Embedded Systems + Electronics
                </p>

                <h1 className="m-0 mt-3 max-w-[1100px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  ATmega328P Development Boards
                </h1>

              </div>


              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  Development of a standalone ATmega328P circuit from a
                  breadboard prototype into a permanent soldered Perma-Proto
                  assembly.
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
                Development Boards
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                MCU
              </p>
              <p className="m-0 mt-2 text-sm">
                ATmega328P
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Clock
              </p>
              <p className="m-0 mt-2 text-sm">
                16 MHz Crystal
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Programming
              </p>
              <p className="m-0 mt-2 text-sm">
                Serial + ICSP
              </p>
            </div>


            <div className="px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Development
              </p>
              <p className="m-0 mt-2 text-sm leading-[1.6]">
                Breadboard
                <br />
                Perma-Proto
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
                  Two sequential projects completed during high school as part
                  of the Advanced Computer Engineering School program at Royal
                  St. George&apos;s College. The first introduced the
                  breadboard ATmega328P and its functions, while the second
                  transferred the circuit into a permanent soldered assembly.
                </p>
              </div>


              <div className="lg:col-span-4">

                <p className="m-0 text-xs text-foreground/40 lg:text-right">
                  References
                </p>

                <div className="mt-3 flex flex-col gap-2 lg:items-end">

                  <a
                    href="http://darcy.rsgc.on.ca/ACES/TEI3M/2021/Tasks.html#standalone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm underline decoration-foreground/30 underline-offset-4 transition-opacity duration-200 hover:opacity-50"
                  >
                    Breadboard ATmega328P ↗
                  </a>

                  <a
                    href="http://darcy.rsgc.on.ca/ACES/TEI3M/2021/Tasks.html#permaproto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm underline decoration-foreground/30 underline-offset-4 transition-opacity duration-200 hover:opacity-50"
                  >
                    Perma-Proto ATmega328P ↗
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
                  The project explored how the ATmega328P could operate as a
                  standalone microcontroller before transferring the complete
                  circuit from a breadboard into a permanent soldered format.
                </p>

                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The breadboard project combined the standalone ATmega328P
                    with an audio input and 10 LED barograph to create a
                    digital version of an analog VU meter.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The second stage retained the same core circuit while
                    transferring it onto an Adafruit Perma Protoboard and
                    introducing additional components for a permanent assembly.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            02 STANDALONE ATMEGA328P
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Standalone ATmega328P
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The breadboard circuit establishes the supporting components
                  required to operate the ATmega328P independently.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The standalone circuit uses a 10KΩ resistor, two 22 pF
                  capacitors, a 16 MHz crystal, push button, and ATmega328P.
                  The crystal and capacitors provide the external clock signal.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The crystal connects to pins 9 and 10, with a capacitor
                  between each pin and ground. The push button and 10KΩ
                  resistor connect to the reset pin.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  Pins 7, 20, and 21 connect to 5 volts, while pins 8 and 22
                  connect to ground. The voltage regulator is used to convert
                  9V down to 5V for the circuit.
                </p>

              </div>

            </div>


            <div className="mt-16">

              <div className="flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Breadboard ATmega328P Circuit
                </p>
              </div>

              <div className="mt-3 flex justify-between gap-6">
                <p className="m-0 text-xs text-foreground/40">
                  Standalone microcontroller circuit
                </p>
                <p className="m-0 text-xs text-foreground/30">
                  ATmega328P
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            03 PROGRAMMING
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Programming
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Moving the ATmega328P onto a breadboard removed the onboard
                  USB serial connection and introduced alternative methods for
                  programming the microcontroller.
                </p>


                <div className="mt-14 grid gap-5 sm:grid-cols-3">

                  <div className="border-t border-foreground/30 pt-5">
                    <p className="m-0 text-xs text-foreground/40">
                      Method 01
                    </p>
                    <p className="m-0 mt-3 text-lg">
                      Arduino
                    </p>
                    <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                      Remove the ATmega328P from the breadboard and place it
                      back into the Arduino for programming.
                    </p>
                  </div>


                  <div className="border-t border-foreground/30 pt-5">
                    <p className="m-0 text-xs text-foreground/40">
                      Method 02
                    </p>
                    <p className="m-0 mt-3 text-lg">
                      Serial
                    </p>
                    <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                      Program over serial communication using the TX, RX, and
                      reset connections.
                    </p>
                  </div>


                  <div className="border-t border-foreground/30 pt-5">
                    <p className="m-0 text-xs text-foreground/40">
                      Method 03
                    </p>
                    <p className="m-0 mt-3 text-lg">
                      ICSP
                    </p>
                    <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                      In Circuit Serial Programming sends binary code serially
                      to the microcontroller.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            04 BREADBOARD PROTOTYPE
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Breadboard Prototype
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The first version combined the standalone microcontroller
                  circuit with an Adafruit microphone and LED barograph to
                  create a digital audio display.
                </p>

              </div>

            </div>


            <div className="mt-16 grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-7">

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Breadboard Prototype
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  ATmega328P breadboard circuit with audio input and display
                </p>

              </div>


              <div className="lg:col-span-5">

                <div className="border-t border-foreground/30">

                  <div className="flex items-baseline justify-between border-b border-foreground/20 py-4">
                    <p className="m-0 text-sm">
                      Breadboard Components
                    </p>
                    <p className="m-0 text-xs text-foreground/40">
                      Qty.
                    </p>
                  </div>


                  {breadboardComponents.map(([component, quantity]) => (
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
            05 PERMA-PROTO DEVELOPMENT
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Perma-Proto Development
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The breadboard prototype was transferred onto an Adafruit
                  Perma Protoboard to create a permanent soldered version of
                  the circuit.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The Perma-Proto version used the same components as the
                  breadboard circuit with several additions. A resistor
                  network was added to dim the LED barograph brightness.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  Pin headers were added to provide easy access for attaching
                  and detaching the power jack and reset button. The circuit
                  layout was planned in advance through multiple different
                  orientations.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            06 SOLDERING + ASSEMBLY
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  06
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Soldering + Assembly
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The permanent circuit was soldered in 2.5 hours after the
                  component layout and wiring arrangement were planned in
                  advance.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    During assembly, a short between pins 22 and 21 was
                    corrected by removing the solder and soldering the joints
                    again.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Programming remained the same as the breadboard version.
                    The ICSP programmer connects to an ACES breakout board
                    inserted into six female GPIO pin headers soldered onto the
                    Adafruit Perma Protoboard.
                  </p>

                </div>

              </div>

            </div>


            <div className="mt-16 grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-7">

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Final Perma-Proto Circuit
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Permanent soldered ATmega328P assembly
                </p>

              </div>


              <div className="lg:col-span-5">

                <div className="border-t border-foreground/30">

                  <div className="flex items-baseline justify-between border-b border-foreground/20 py-4">
                    <p className="m-0 text-sm">
                      Perma-Proto Components
                    </p>
                    <p className="m-0 text-xs text-foreground/40">
                      Qty.
                    </p>
                  </div>


                  {permaProtoComponents.map(([component, quantity]) => (
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
            07 FINAL DEVELOPMENT BOARD
        ===================================================== */}

        <section className="px-5 pb-28 pt-24 sm:px-8 lg:px-12 lg:pb-36 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  07
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Final Development Board
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The final assembly translated the working breadboard
                  prototype into a compact permanent circuit while retaining
                  access for programming and external connections.
                </p>

              </div>

            </div>


            <div className="mt-16">

              <div className="flex aspect-[16/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Final ATmega328P Development Board
                </p>
              </div>

              <div className="mt-3 flex justify-between gap-6">
                <p className="m-0 text-xs text-foreground/40">
                  Breadboard to permanent soldered assembly
                </p>

                <p className="m-0 text-xs text-foreground/30">
                  ATmega328P
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