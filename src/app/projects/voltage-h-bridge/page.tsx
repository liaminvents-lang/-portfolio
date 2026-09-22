'use client';

import Layout from '@/components/layout';
import Link from 'next/link';

export default function VoltageHBridgePage() {
  const components = [
    ['9V DC Alkaline Battery', '1'],
    ['ACES Power Jack', '1'],
    ['10 kΩ Potentiometer', '1'],
    ['470 Ω Fixed Resistor', '2'],
    ['5mm Bicolor LED (R/G)', '1'],
    ['Full+ Breadboard', '1'],
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
                Voltage H-Bridge
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
                  Voltage H-Bridge
                </h1>

              </div>


              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A potentiometer-controlled H-Bridge voltage divider used to
                  demonstrate the waterfall method and control the direction
                  of current through a bi-colour LED.
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
                Control
              </p>
              <p className="m-0 mt-2 text-sm">
                Potentiometer
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Output
              </p>
              <p className="m-0 mt-2 text-sm">
                Bicolor LED
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Resistance
              </p>
              <p className="m-0 mt-2 text-sm">
                470 Ω + 10 kΩ
              </p>
            </div>


            <div className="px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Development
              </p>
              <p className="m-0 mt-2 text-sm">
                Breadboard Electronics
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
                  The project was developed to explore the use of a
                  potentiometer in an H-Bridge voltage divider while
                  demonstrating the waterfall method. The circuit uses two
                  fixed resistors, one variable resistor, and a red/green
                  bi-colour LED.
                </p>

              </div>


              <div className="lg:col-span-4">

                <p className="m-0 text-xs text-foreground/40 lg:text-right">
                  Reference
                </p>

                <div className="mt-3 flex flex-col gap-2 lg:items-end">

                  <a
                    href="http://darcy.rsgc.on.ca/ACES/TEL3M/1920/TasksFall.html#VoltageHBridge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm underline decoration-foreground/30 underline-offset-4 transition-opacity duration-200 hover:opacity-50"
                  >
                    ACES Voltage H-Bridge ↗
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
                  The circuit uses a potentiometer as a variable resistor to
                  change current flow through a red and green bi-colour LED.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    A total of three resistors are used in the circuit: two
                    fixed 470 Ω resistors and one 10 kΩ potentiometer acting
                    as a variable resistor.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The H-Bridge voltage divider switches the current flow
                    through the bi-colour LED, allowing its displayed colour
                    to change.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 02 VOLTAGE DIVIDER */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Voltage Divider
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Resistance is varied through the circuit to control the path
                  of current.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The voltage divider creates resistance on one side of the
                  circuit, restricting current flow to the other side.
                  Current therefore follows the path with less resistance.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The 10 kΩ potentiometer provides the variable resistance
                  used to alter this relationship within the circuit.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* 03 H-BRIDGE */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  H-Bridge
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Changing the potentiometer position switches the direction
                  of current through the bi-colour LED.
                </p>


                <div className="mt-14 grid gap-5 sm:grid-cols-2">

                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      Position 01
                    </p>

                    <p className="m-0 mt-3 text-xl">
                      Red
                    </p>

                    <p className="m-0 mt-4 max-w-[520px] text-sm leading-[1.7] text-foreground/60">
                      When the potentiometer is in the bottom-left position,
                      the LED displays red.
                    </p>

                  </div>


                  <div className="border-t border-foreground/30 pt-5">

                    <p className="m-0 text-xs text-foreground/40">
                      Position 02
                    </p>

                    <p className="m-0 mt-3 text-xl">
                      Green
                    </p>

                    <p className="m-0 mt-4 max-w-[520px] text-sm leading-[1.7] text-foreground/60">
                      When the potentiometer is in the bottom-right position,
                      the LED displays green.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 04 POTENTIOMETER CONTROL */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Potentiometer Control
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  A 10 kΩ potentiometer acts as the variable resistor within
                  the circuit.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  Adjusting the potentiometer changes the resistance within
                  the voltage divider. This changes the current flow through
                  the circuit and controls which colour of the bi-colour LED
                  is displayed.
                </p>

              </div>

            </div>


            <div className="mt-16">

              <div className="flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Voltage H-Bridge Circuit
                </p>
              </div>

              <p className="m-0 mt-3 text-xs text-foreground/40">
                Breadboard circuit with potentiometer and bi-colour LED
              </p>

            </div>

          </div>
        </section>


        {/* 05 COMPONENTS */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  05
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


        {/* 06 FINAL CIRCUIT */}

        <section className="px-5 pb-28 pt-24 sm:px-8 lg:px-12 lg:pb-36 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  06
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Final Circuit
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The completed circuit demonstrates the change in current
                  flow through a red and green bi-colour LED as the
                  potentiometer position is adjusted.
                </p>

              </div>

            </div>


            <div className="mt-16 grid gap-5 sm:grid-cols-2">

              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Red LED State
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Potentiometer in bottom-left position
                </p>

              </div>


              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Green LED State
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Potentiometer in bottom-right position
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