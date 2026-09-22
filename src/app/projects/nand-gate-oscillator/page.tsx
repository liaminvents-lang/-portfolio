'use client';

import Layout from '@/components/layout';
import Link from 'next/link';

export default function NANDGateOscillatorPage() {
  const components = [
    ['9V DC Alkaline Battery', '1'],
    ['ACES Power Jack', '1'],
    ['10 kΩ Fixed Resistor', '1'],
    ['1 MΩ Fixed Resistor', '2'],
    ['470 Ω Fixed Resistor', '1'],
    ['PBNO Push Button', '1'],
    ['5mm Green LED', '1'],
    ['4011 NAND Gate IC', '1'],
    ['PH4148 Diode', '1'],
    ['50V 10 µF Capacitor', '1'],
    ['100 nF Capacitor', '1'],
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
                NAND Gate Oscillator
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
                  NAND Gate Oscillator
                </h1>

              </div>


              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A 4011 NAND gate circuit using resistor-capacitor pairs as
                  timers to create an oscillating LED output.
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
                Timing
              </p>
              <p className="m-0 mt-2 text-sm">
                Resistor + Capacitor
              </p>
            </div>


            <div className="px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Output
              </p>
              <p className="m-0 mt-2 text-sm">
                Green LED
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
                  Part B of Project 1.4 expands on NAND logic and uses two
                  resistor-capacitor pairs as timers. The circuit converts
                  analog signals into digital outputs and produces an
                  oscillating LED signal.
                </p>

              </div>


              <div className="lg:col-span-4">

                <p className="m-0 text-xs text-foreground/40 lg:text-right">
                  References
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

                  <a
                    href="http://mail.rsgc.on.ca//~cdarcy/Datasheets/CD4011.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm underline decoration-foreground/30 underline-offset-4 transition-opacity duration-200 hover:opacity-50"
                  >
                    4011 Reference ↗
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
                  NAND logic takes analog inputs and converts them into
                  digital outputs while resistor-capacitor pairs control the
                  timing of the oscillator.
                </p>

                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The circuit has two possible input states: 0 and 1, or
                    GND and VSS. If there is a low on any NAND input, the
                    output remains high.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Only when both inputs are high does the NAND gate output
                    become low.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 02 NAND LOGIC */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  NAND Logic
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The NAND gate changes its digital output according to the
                  voltage level of the incoming signal.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  If the input signal is between zero and half of the input
                  voltage, the NAND gate stays low.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  If the voltage is over half of the supply voltage, the NAND
                  gate stays high. This is how the circuit converts analog
                  signals into digital outputs.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* 03 4011 IC */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  4011 IC
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The main driver of the circuit is the 4011 IC, which
                  contains four NAND gates.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The chip is powered through pin 14 and connected to
                    ground through pin 7.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The report describes the 4011 as containing four NAND
                    gates with built-in resistors.
                  </p>

                </div>


                <div className="mt-16">

                  <div className="flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">
                    <p className="m-0 text-sm text-foreground/25">
                      4011 IC Diagram
                    </p>
                  </div>

                  <p className="m-0 mt-3 text-xs text-foreground/40">
                    4011 NAND gate IC pinout / schematic
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 04 OSCILLATOR TIMING */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Oscillator Timing
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Two resistor-capacitor pairs act as timers within the
                  oscillator.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The second resistor controls the length of the circuit by
                  filling the capacitor and using its charge to power the
                  circuit.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The third resistor controls the charging and discharging of
                  the capacitor. Increasing the capacitance or resistance in
                  the second resistor increases the length of time the LED
                  remains on.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* 05 CIRCUIT */}

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
                        NAND Gate Oscillator
                      </p>
                    </div>

                    <p className="m-0 mt-3 text-xs text-foreground/40">
                      Completed oscillator circuit
                    </p>

                  </div>


                  <div>

                    <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                      <p className="m-0 text-sm text-foreground/25">
                        4011 Diagram
                      </p>
                    </div>

                    <p className="m-0 mt-3 text-xs text-foreground/40">
                      4011 IC diagram
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
                  The completed circuit combines NAND logic with
                  resistor-capacitor timing to generate a repeating digital
                  output displayed through the LED.
                </p>

              </div>

            </div>


            <div className="mt-16">

              <div className="flex aspect-[16/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Final NAND Gate Oscillator
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