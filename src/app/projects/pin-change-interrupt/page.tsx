'use client';

import Layout from '@/components/layout';
import Link from 'next/link';

export default function PinChangeInterruptPage() {
  const components = [
    ['Arduino Nano', '1'],
    ['4511 7-Segment Decoder', '1'],
    ['ACES Rotary Encoder', '1'],
    ['ACES Denouncer PCB', '1'],
    ['330 Ω Resistors', '7'],
    ['Bi-Colored LED', '1'],
    ['7-Segment CA Display', '1'],
    ['Wires', 'Assorted'],
    ['Full Size Breadboard', '1'],
  ];

  return (
    <Layout title="">
      <main className="w-full">

        {/* HERO */}

        <section className="px-5 pt-24 sm:px-8 lg:px-12 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="flex aspect-[16/9] w-full items-center justify-center bg-foreground/[0.035]">
              <p className="m-0 text-sm text-foreground/25">
                Pin Change Interrupt
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
                  Embedded Systems
                </p>

                <h1 className="m-0 mt-3 max-w-[1100px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  Pin Change Interrupt
                </h1>

              </div>


              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A three-digit combination safe using a rotary encoder,
                  register-level techniques, interrupts, a seven-segment
                  display, and a bi-colour status LED.
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
                3.5
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Controller
              </p>
              <p className="m-0 mt-2 text-sm">
                Arduino Nano
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Input
              </p>
              <p className="m-0 mt-2 text-sm">
                Rotary Encoder
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Output
              </p>
              <p className="m-0 mt-2 text-sm">
                7-Segment Display
              </p>
            </div>


            <div className="px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Programming
              </p>
              <p className="m-0 mt-2 text-sm">
                Register Level
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
                  The project was developed as a combination safe while
                  expanding the Mega328P.h library and applying register-level
                  techniques and interrupts through a physical circuit.
                </p>

              </div>


              <div className="lg:col-span-4">

                <p className="m-0 text-xs text-foreground/40 lg:text-right">
                  Reference
                </p>

                <div className="mt-3 flex flex-col gap-2 lg:items-end">

                  <a
                    href="http://darcy.rsgc.on.ca/ACES/TEI4M/2122/Tasks.html#PCInt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm underline decoration-foreground/30 underline-offset-4 transition-opacity duration-200 hover:opacity-50"
                  >
                    ACES Pin Change Interrupt ↗
                  </a>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 01 OVERVIEW */}

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
                  A rotary encoder allows the user to manually enter a
                  three-digit combination through a seven-segment display.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The circuit consists of a 4511 seven-segment decoder,
                    seven-segment display, bi-coloured LED, ACES debounce PCB,
                    and ACES rotary encoder connected to an Arduino Nano.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The seven-segment display is driven by the 4511 decoder
                    rather than directly by the Arduino Nano.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 02 COMBINATION SAFE */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Combination Safe
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Rotation changes the displayed number while the encoder
                  allows a three-digit combination to be entered.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  Clockwise rotation adds one to the seven-segment display,
                  while rotation in the opposite direction decreases the
                  displayed value.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The goal is to enter the secret combination. When the safe
                  is unlocked, the bi-colour LED turns green.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  If an incorrect password is entered, the system can be reset
                  using the ACES encoder PCB. The bi-colour LED then signals
                  red and the combination is reset.
                </p>

              </div>

            </div>


            <div className="mt-16 flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">
              <p className="m-0 text-sm text-foreground/25">
                Combination Safe Circuit
              </p>
            </div>

          </div>
        </section>


        {/* 03 ROTARY ENCODER */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Rotary Encoder
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The rotary encoder forms the hardware backbone of the
                  circuit.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The encoder contains a disk with evenly spaced contacts
                  connected to a common pin C and two additional pins,
                  A and B.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  As the disk rotates, pins A and B make contact with the
                  common pin and generate two square-wave output signals.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  Both signals can be considered together to determine
                  rotation direction. The report describes the two output
                  signals as being displaced 90 degrees out of phase.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* 04 INTERRUPTS */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Interrupt Control
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The project applies register-level techniques and pin-change
                  interrupts to read the physical controls.
                </p>


                <div className="mt-12 grid gap-5 sm:grid-cols-3">

                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      INT0
                    </p>

                    <p className="m-0 mt-3 text-xl">
                      Selection
                    </p>

                  </div>


                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      INT1
                    </p>

                    <p className="m-0 mt-3 text-xl">
                      Reset
                    </p>

                  </div>


                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      PCINT2
                    </p>

                    <p className="m-0 mt-3 text-xl">
                      Rotary Encoder
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 05 DISPLAY */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Display + Status
                </h2>

              </div>


              <div className="lg:col-span-7">

                <div className="grid gap-5 sm:grid-cols-2">

                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      Number Output
                    </p>

                    <p className="m-0 mt-3 text-xl">
                      7-Segment Display
                    </p>

                    <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                      The entered number is displayed using a seven-segment
                      display driven by the 4511 decoder.
                    </p>

                  </div>


                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      Lock Status
                    </p>

                    <p className="m-0 mt-3 text-xl">
                      Bi-Coloured LED
                    </p>

                    <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                      Green indicates that the combination has unlocked the
                      system, while red is used when the combination is reset.
                    </p>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>


        {/* 06 COMPONENTS */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  06
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


        {/* 07 FINAL SYSTEM */}

        <section className="px-5 pb-28 pt-24 sm:px-8 lg:px-12 lg:pb-36 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  07
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Final System
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The completed circuit combines rotary input, interrupt-based
                  control, a 4511 decoder, seven-segment feedback, and a
                  bi-colour LED into a three-digit combination safe.
                </p>

              </div>

            </div>


            <div className="mt-16 grid gap-5 sm:grid-cols-2">

              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Completed Circuit
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Pin Change Interrupt system
                </p>

              </div>


              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Rotary Encoder + Display
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Combination input and feedback
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