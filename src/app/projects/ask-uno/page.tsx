'use client';

import Layout from '@/components/layout';
import Link from 'next/link';

export default function AskUnoPage() {
  const components = [
    ['Arduino Nano', '1'],
    ['Arduino Uno', '1'],
    ['Liquid Crystal Displays', '2'],
    ['LCD Appliance PCB', '1'],
    ['330Ω Resistor', '1'],
    ['10K Pot', '2'],
    ['Full+ Breadboard', '1'],
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
                Ask Uno
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
                  Ask Uno
                </h1>

              </div>


              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A two-Arduino communication system developed to explore
                  serial communication, LCD interfaces, and distributed
                  arithmetic processing.
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
                Serial Communication
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Controllers
              </p>
              <p className="m-0 mt-2 text-sm">
                Arduino Nano + Uno
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Communication
              </p>
              <p className="m-0 mt-2 text-sm">
                SoftwareSerial
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Interface
              </p>
              <p className="m-0 mt-2 text-sm">
                16 × 2 LCD
              </p>
            </div>


            <div className="px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Development
              </p>
              <p className="m-0 mt-2 text-sm leading-[1.6]">
                Electronics
                <br />
                Arduino
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
                  Ask Uno was developed to introduce serial communication
                  between two Arduinos. The project was divided into three
                  stages, progressing from a single LCD interface to
                  communication between two controllers and finally arithmetic
                  processing across the system.
                </p>

              </div>


              <div className="lg:col-span-4">

                <p className="m-0 text-xs text-foreground/40 lg:text-right">
                  Reference
                </p>

                <div className="mt-3 flex flex-col gap-2 lg:items-end">

                  <a
                    href="http://darcy.rsgc.on.ca/ACES/TEI3M/2021/Tasks.html#AskUNO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm underline decoration-foreground/30 underline-offset-4 transition-opacity duration-200 hover:opacity-50"
                  >
                    ACES Ask Uno ↗
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
                  Two Arduino boards communicate with each other while driving
                  independent liquid crystal displays, allowing information to
                  move between separate controllers.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The system consists of an Arduino Nano, Arduino Uno, two
                    liquid crystal displays, an LCD appliance, resistor,
                    potentiometers, breadboard, and supporting wiring.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Development was divided into three stages: establishing the
                    LCD interface, creating communication between the two
                    Arduinos, and using that connection to transmit and solve
                    arithmetic expressions.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            02 LCD INTERFACE
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  LCD Interface
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Each Arduino drives its own liquid crystal display to create
                  a separate visual interface for each side of the system.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  Each liquid crystal display is driven by an Arduino with the
                  display connected to pins 4 through 7. A potentiometer
                  connects to the V0 pin to control LCD contrast.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The Arduino also connects to the Enable and Register Select
                  pins. The Register Select pin switches the display between
                  instruction and character modes.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  When Register Select is high, character mode is active and
                  binary input from the data pins prints a character rather
                  than running a display command.
                </p>

              </div>

            </div>


            <div className="mt-16">

              <div className="flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Arduino Nano + LCD
                </p>
              </div>

              <p className="m-0 mt-3 text-xs text-foreground/40">
                Initial LCD interface
              </p>

            </div>

          </div>
        </section>


        {/* =====================================================
            03 SERIAL COMMUNICATION
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Serial Communication
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  SoftwareSerial creates a communication channel between the
                  Arduino Nano and Arduino Uno using pins 8 and 9.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The SoftwareSerial library creates a second serial
                    connection called <span className="font-mono">chat</span>.
                    This connection uses RX and TX on both Arduinos.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Data can then be transmitted between the two controllers
                    using the chat print function.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            04 STAGE 1
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Stage 1
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The first stage established the Arduino Nano and LCD
                  interface.
                </p>

                <p className="m-0 mt-10 max-w-[800px] text-base leading-[1.7] text-foreground/60">
                  The Arduino Nano was wired to the liquid crystal display on
                  the breadboard. The goal was to take text entered through the
                  serial monitor and print it to the display.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            05 STAGE 2
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Stage 2
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The second stage added the Arduino Uno and established
                  communication between the two controllers.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The LCD appliance was first assembled and soldered. It
                  includes built-in brightness control and a pinout that plugs
                  directly into the Arduino.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The Arduino Uno was then added to the previous Nano setup.
                  The first software task was to make the Uno assistant echo
                  transmitted text.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The second task confirmed that the board could receive text
                  from the serial monitor and communicate it to the Uno
                  assistant.
                </p>

              </div>

            </div>


            <div className="mt-16 grid gap-5 sm:grid-cols-2">

              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    LCD Appliance
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Completed LCD appliance
                </p>

              </div>


              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Dual Arduino Assembly
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Arduino Nano and Uno communication setup
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            06 STAGE 3
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  06
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Stage 3
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The final stage used the completed serial connection to pass
                  arithmetic expressions between the two controllers.
                </p>


                <div className="mt-14 grid gap-5 sm:grid-cols-3">

                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      01
                    </p>

                    <p className="m-0 mt-3 text-lg">
                      Input
                    </p>

                    <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                      An arithmetic expression is entered through the serial
                      monitor and read by the Arduino Nano.
                    </p>

                  </div>


                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      02
                    </p>

                    <p className="m-0 mt-3 text-lg">
                      Transmit
                    </p>

                    <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                      The Nano echoes the expression onto its LCD and sends it
                      to the Arduino Uno.
                    </p>

                  </div>


                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      03
                    </p>

                    <p className="m-0 mt-3 text-lg">
                      Solve
                    </p>

                    <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                      The Uno solves the expression and displays the answer on
                      its own LCD.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            07 SOFTWARE
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  07
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Software
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Separate programs control the Nano and Uno while
                  SoftwareSerial handles communication between them.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  Both programs use the SoftwareSerial and LiquidCrystal
                  libraries. The communication channel is configured on pins
                  8 and 9 and operates at 9600.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The Nano reads an input string from the serial monitor,
                  prints it to its LCD, and transmits the string through the
                  chat connection.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The Uno reads the received expression, separates the
                  characters into operands and an operator, and uses the
                  program&apos;s solution function to perform the arithmetic.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            08 COMPONENTS
        ===================================================== */}

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


        {/* =====================================================
            09 FINAL SYSTEM
        ===================================================== */}

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
                  The completed system receives an arithmetic expression,
                  displays and transmits it from the Nano, processes it on the
                  Uno, and displays the resulting answer.
                </p>

              </div>

            </div>


            <div className="mt-16">

              <div className="flex aspect-[16/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Final Ask Uno Assembly
                </p>
              </div>


              <div className="mt-3 flex justify-between gap-6">

                <p className="m-0 text-xs text-foreground/40">
                  Arduino Nano + Arduino Uno + dual LCD interface
                </p>

                <p className="m-0 text-xs text-foreground/30">
                  Ask Uno
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