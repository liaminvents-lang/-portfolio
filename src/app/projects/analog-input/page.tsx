'use client';

import Layout from '@/components/layout';
import Link from 'next/link';

export default function AnalogInputPage() {
  const components = [
    ['9V DC Alkaline Battery', '1'],
    ['ACES Power Jack', '1'],
    ['1 kΩ Fixed Resistor', '2'],
    ['10 kΩ Fixed Resistor', '2'],
    ['5mm Blue LED', '2'],
    ['100 µF Capacitors', '2'],
    ['NPN 3904 Transistors', '2'],
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
                Analog Input
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
                  Digital Logic
                </p>

                <h1 className="m-0 mt-3 max-w-[1100px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  Analog Input
                </h1>

              </div>


              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A circuit using NAND gate logic and a pull-up resistor to
                  convert an input into a square-wave output displayed by an
                  LED.
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
                Logic Circuit
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Logic
              </p>
              <p className="m-0 mt-2 text-sm">
                NAND
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                IC
              </p>
              <p className="m-0 mt-2 text-sm">
                4011
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Input
              </p>
              <p className="m-0 mt-2 text-sm">
                PBNO
              </p>
            </div>


            <div className="px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Output
              </p>
              <p className="m-0 mt-2 text-sm">
                Square Wave
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
                  Part A of Project 1.4 explores the use of NAND gate logic
                  and a pull-up resistor to produce a square-wave signal.
                  The output of the NAND gate is displayed through an LED.
                </p>

              </div>


              <div className="lg:col-span-4">

                <p className="m-0 text-xs text-foreground/40 lg:text-right">
                  Reference
                </p>

                <div className="mt-3 flex flex-col gap-2 lg:items-end">

                  <a
                    href="http://darcy.rsgc.on.ca/ACES/TEL3M/1920/TasksFall.html#counting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm underline decoration-foreground/30 underline-offset-4 transition-opacity duration-200 hover:opacity-50"
                  >
                    ACES Counting Project ↗
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
                  NAND gate logic is used to make an analog input digital,
                  producing a square-wave signal that can be displayed by an
                  LED.
                </p>

                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The circuit uses a 10 kΩ fixed resistor and a PBNO push
                    button to create a pull-up resistor configuration.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The input from this configuration is connected to pin 13
                    of the 4011 NAND gate IC.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 02 PULL-UP INPUT */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Pull-Up Input
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  A 10 kΩ resistor and PBNO push button form the input
                  configuration for the circuit.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The pull-up resistor configuration feeds the input into
                  pin 13 of the 4011 NAND gate IC.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The PBNO push button changes the state of the input by
                  grounding the current when input is applied.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* 03 NAND LOGIC */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  NAND Logic
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The state of the NAND gate changes as the push-button input
                  changes the state of its inputs.
                </p>


                <div className="mt-14 grid gap-5 sm:grid-cols-2">

                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      Rest
                    </p>

                    <p className="m-0 mt-3 text-xl">
                      Inputs High
                    </p>

                    <p className="m-0 mt-4 max-w-[520px] text-sm leading-[1.7] text-foreground/60">
                      At rest, both inputs on the NAND chip are high.
                      Therefore, the output is low.
                    </p>

                  </div>


                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      Input Applied
                    </p>

                    <p className="m-0 mt-3 text-xl">
                      Inputs Low
                    </p>

                    <p className="m-0 mt-4 max-w-[520px] text-sm leading-[1.7] text-foreground/60">
                      When input is applied to the PBNO push button, the
                      current is grounded and both inputs become low,
                      resulting in a high output.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 04 LED OUTPUT */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  LED Output
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The NAND gate output is made visible through an LED
                  connected to the circuit.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The positive lead of the LED is connected to pin 11, the
                  output pin of the IC. The LED therefore displays the output
                  state produced by the NAND logic.
                </p>

              </div>

            </div>


            <div className="mt-16">

              <div className="flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Analog Input Circuit
                </p>
              </div>

              <p className="m-0 mt-3 text-xs text-foreground/40">
                Circuit with NAND gate input and LED output
              </p>

            </div>

          </div>
        </section>


        {/* 05 CIRCUIT SCHEMATIC */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Circuit
                </h2>

              </div>


              <div className="lg:col-span-9">

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                      <p className="m-0 text-sm text-foreground/25">
                        Circuit
                      </p>
                    </div>

                    <p className="m-0 mt-3 text-xs text-foreground/40">
                      Analog input circuit
                    </p>

                  </div>


                  <div>

                    <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                      <p className="m-0 text-sm text-foreground/25">
                        Schematic
                      </p>
                    </div>

                    <p className="m-0 mt-3 text-xs text-foreground/40">
                      Circuit schematic
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


        {/* 07 FINAL CIRCUIT */}

        <section className="px-5 pb-28 pt-24 sm:px-8 lg:px-12 lg:pb-36 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  07
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Final Circuit
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The completed circuit uses a pull-up resistor and NAND logic
                  to change the output state in response to the PBNO input.
                </p>

              </div>

            </div>


            <div className="mt-16">

              <div className="flex aspect-[16/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Final Analog Input Circuit
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