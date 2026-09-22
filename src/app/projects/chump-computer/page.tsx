'use client';

import Layout from '@/components/layout';
import Link from 'next/link';

export default function ChumpComputerPage() {
  const clockComponents = [
    ['555 Timer IC', '3'],
    ['74LS04 IC', '1'],
    ['74LS08 IC', '1'],
    ['74LS32 IC', '1'],
    ['1 kΩ Fixed Resistor', '6'],
    ['220Ω Fixed Resistor', '2'],
    ['1µF Capacitor', '1'],
    ['10nF Capacitors', '2'],
    ['100nF Capacitors', '4'],
    ['100000 MΩ Potentiometer', '1'],
    ['0.5mm Orange LED', '4'],
    ['Slide Switch', '1'],
    ['Push Button', '1'],
    ['Wires', 'Custom Assorted'],
    ['Full Breadboard', '1'],
  ];

  const counterComponents = [
    ['74LS161 IC', '1'],
    ['3904 NPN Transistors', '2'],
    ['Yellow Rectangular LED', '4'],
    ['0.5mm LED', '1'],
    ['Slide Switch', '1'],
    ['4 Gang Rocker Switches', '1'],
    ['1 kΩ Fixed Resistor', '7'],
    ['Wires', 'Assorted'],
  ];

  const finalComponents = [
    ['74LS157 IC', '1'],
    ['74LS161 IC', '1'],
    ['74LS174 IC', '1'],
    ['74LS181 IC', '1'],
    ['74LS377 IC', '1'],
    ['74LS189 IC', '1'],
    ['AT28C16', '2'],
    ['10 LED Barograph', '2'],
    ['Resistor Network', '2'],
    ['Square Yellow LED', '4'],
    ['Square Red LED', '4'],
    ['Square Green LED', '4'],
    ['Wires', 'Custom Assorted'],
    ['Full Size Breadboard', '4'],
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
                CHUMP Computer Hero Image
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
                  Digital Electronics + Computer Architecture
                </p>

                <h1 className="m-0 mt-3 max-w-[1100px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  CHUMP Computer
                </h1>

              </div>


              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  Development of a 4-bit computer from discrete logic,
                  beginning with the clock and program counter and expanding
                  into EEPROM, an ALU, RAM, registers, and control logic.
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
                4-Bit Computer
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Architecture
              </p>
              <p className="m-0 mt-2 text-sm">
                Discrete Logic
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Memory
              </p>
              <p className="m-0 mt-2 text-sm">
                AT28C16 + 74LS189
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                ALU
              </p>
              <p className="m-0 mt-2 text-sm">
                SN74LS181
              </p>
            </div>


            <div className="px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Development
              </p>
              <p className="m-0 mt-2 text-sm leading-[1.6]">
                Breadboard Electronics
                <br />
                Computer Architecture
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
                  The CHUMP was developed across two projects. The first
                  established the clock and program counter as a platform for
                  the computer. The second completed the 4-bit computer and
                  tested the custom program code developed during the previous
                  project.
                </p>
              </div>


              <div className="lg:col-span-4">

                <p className="m-0 text-xs text-foreground/40 lg:text-right">
                  Reference
                </p>

                <div className="mt-3 flex flex-col gap-2 lg:items-end">

                  <a
                    href="http://darcy.rsgc.on.ca/ACES/TEI4M/4BitComputer/index.html#tasks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm underline decoration-foreground/30 underline-offset-4 transition-opacity duration-200 hover:opacity-50"
                  >
                    ACES 4-Bit Computer ↗
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
                  CHUMP was developed as a 4-bit computer built from
                  breadboarded digital logic, bringing together timing,
                  counting, memory, arithmetic, registers, and control.
                </p>

                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The first stage focused on the computer&apos;s clock and
                    program counter, creating the platform required for the
                    remaining computer architecture.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The final stage connected EEPROM, the arithmetic logic
                    unit, multiplexer, RAM, address register, and accumulator
                    to the existing clock and program counter.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            02 CLOCK
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Clock
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The clock acts as the computer&apos;s heartbeat,
                  synchronizing operations across the system.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The clock circuit uses three 555 timer ICs, one 74LS04 Hex
                  inverter, one 74LS08 Quad AND gate, and one 74LS32 Quad OR
                  gate.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The clock is adjustable from less than 1 Hz to a few hundred
                  Hertz. A slide switch toggles between automatic and manual
                  modes. Automatic timing comes from the 555 timer while
                  manual input comes from a push button.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  A debouncing circuit was used to eliminate ripple from the
                  mechanical push button and produce a clean square-wave
                  output.
                </p>

              </div>

            </div>


            <div className="mt-16 grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-7">

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    CHUMP Clock Circuit
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Adjustable automatic and manual clock
                </p>

              </div>


              <div className="lg:col-span-5">

                <div className="border-t border-foreground/30">

                  <div className="flex items-baseline justify-between border-b border-foreground/20 py-4">
                    <p className="m-0 text-sm">
                      Clock Components
                    </p>
                    <p className="m-0 text-xs text-foreground/40">
                      Qty.
                    </p>
                  </div>


                  {clockComponents.map(([component, quantity]) => (
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
            03 PROGRAM COUNTER
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Program Counter
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The program counter uses a 74LS161 4-bit counter with a NAND
                  gate and slide switch to toggle between automatic and manual
                  input modes.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    In automatic mode, the counter counts from 0 to 15. Manual
                    mode takes input from four rocker switches.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The NAND gate output connects to the Load pin of the
                    74LS161. A high signal activates automatic mode while a
                    low signal activates manual mode.
                  </p>

                </div>

              </div>

            </div>


            <div className="mt-16 grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-7">

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Program Counter
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  74LS161 automatic and manual counter
                </p>

              </div>


              <div className="lg:col-span-5">

                <div className="border-t border-foreground/30">

                  <div className="flex items-baseline justify-between border-b border-foreground/20 py-4">
                    <p className="m-0 text-sm">
                      Program Counter Components
                    </p>
                    <p className="m-0 text-xs text-foreground/40">
                      Qty.
                    </p>
                  </div>


                  {counterComponents.map(([component, quantity]) => (
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
            04 EEPROM
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  EEPROM
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Two AT28C16 EEPROM chips were used as the Program EEPROM and
                  Control EEPROM.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The AT28C16 has 24 pins, including A0-A10 address pins,
                  IO0-I/O7 data inputs and outputs, Write Enable, Output
                  Enable, and Chip Enable.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  Each chip can store up to 2048 bytes. The Program EEPROM is
                  where the code is loaded. The Control EEPROM takes the code
                  from the Program EEPROM and splits it into eight bits: a high
                  and low nibble.
                </p>

              </div>

            </div>


            <div className="mt-16 grid gap-5 sm:grid-cols-2">

              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Program + Control EEPROM
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  AT28C16 EEPROM architecture
                </p>

              </div>


              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    EEPROM Programmer
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Arduino Nano and SN74HC595N shift registers
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            05 EEPROM PROGRAMMER
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  EEPROM Programmer
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  A dedicated EEPROM programmer was assembled using an Arduino
                  Nano and two SN74HC595N shift registers.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The programmer was created using circuit diagrams from Ben
                    Eater and used two shift registers with assorted jumper
                    wires.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The shift registers were required because the Arduino Nano
                    did not have enough pins to connect directly to the
                    EEPROM.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            06 ARITHMETIC LOGIC UNIT
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  06
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Arithmetic Logic Unit
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The SN74LS181N ALU provides the arithmetic and logic
                  operations within the computer.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The ALU has 24 pins, two sets of four operand inputs, and
                  four function-select inputs. It also includes mode carry,
                  carry input, comparator output, and carry output.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  Operations are selected through the four select lines S0-S3.
                  For basic load, addition, and subtraction functions, the ALU
                  works with the clock circuit, Program ROM, Control ROM,
                  accumulator, and multiplexer.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            07 MULTIPLEXER + RAM
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  07
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Multiplexer + RAM
                </h2>

              </div>


              <div className="lg:col-span-9">

                <div className="grid gap-12 sm:grid-cols-2">

                  <div>

                    <p className="m-0 text-2xl">
                      Multiplexer
                    </p>

                    <p className="m-0 mt-6 text-base leading-[1.7]">
                      The multiplexer has 16 pins with four gates. Four bits
                      of data from two sources can be selected using the common
                      Select and Enable inputs.
                    </p>

                    <p className="m-0 mt-6 text-base leading-[1.7] text-foreground/60">
                      Its four outputs provide the selected data in
                      non-inverted form.
                    </p>

                  </div>


                  <div>

                    <p className="m-0 text-2xl">
                      RAM
                    </p>

                    <p className="m-0 mt-6 text-base leading-[1.7]">
                      The RAM has 16 pins. A0-A3 are address inputs, D1-D4 are
                      data inputs, and O1-O4 are inverted data outputs.
                    </p>

                    <p className="m-0 mt-6 text-base leading-[1.7] text-foreground/60">
                      The RAM stores the program being executed along with the
                      data required by the program. An inverter chip is used
                      in parallel with the RAM outputs to un-invert the output.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            08 ADDRESS REGISTER + ACCUMULATOR
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  08
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Address Register + Accumulator
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Registers connect the computer&apos;s data path to the RAM,
                  multiplexer, ALU, and clock circuitry.
                </p>


                <div className="mt-14 grid gap-12 sm:grid-cols-2">

                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Address Register
                    </p>

                    <p className="m-0 mt-4 text-base leading-[1.7]">
                      The address register has 16 pins with six inputs and six
                      outputs. Its inputs come from the multiplexer and its
                      outputs connect to the RAM inputs.
                    </p>

                    <p className="m-0 mt-6 text-base leading-[1.7] text-foreground/60">
                      A clock connection transfers data on the D inputs into
                      storage during the low-to-high clock transition. A Master
                      Reset simultaneously clears all flip-flops.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Accumulator
                    </p>

                    <p className="m-0 mt-4 text-base leading-[1.7]">
                      The accumulator forms part of the completed CHUMP
                      architecture alongside the ALU, multiplexer, RAM,
                      address register, clock, and program counter.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            09 FINAL CHUMP
        ===================================================== */}

        <section className="px-5 pb-28 pt-24 sm:px-8 lg:px-12 lg:pb-36 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  09
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Final CHUMP
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The final CHUMP integrates the clock, program counter,
                  EEPROM, ALU, multiplexer, RAM, address register, and
                  accumulator into a complete 4-bit computer.
                </p>

              </div>

            </div>


            <div className="mt-16 grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-7">

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Final CHUMP Computer
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Final circuit mounted on the CHUMP backplate
                </p>

              </div>


              <div className="lg:col-span-5">

                <div className="border-t border-foreground/30">

                  <div className="flex items-baseline justify-between border-b border-foreground/20 py-4">
                    <p className="m-0 text-sm">
                      CHUMP Final Components
                    </p>
                    <p className="m-0 text-xs text-foreground/40">
                      Qty.
                    </p>
                  </div>


                  {finalComponents.map(([component, quantity]) => (
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


            <div className="mt-16">

              <div className="flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Complete 4-Bit Computer
                </p>
              </div>

              <div className="mt-3 flex justify-between gap-6">

                <p className="m-0 text-xs text-foreground/40">
                  Clock, counter, memory, ALU, and register architecture
                </p>

                <p className="m-0 text-xs text-foreground/30">
                  CHUMP
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