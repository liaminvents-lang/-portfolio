'use client';

import Layout from '@/components/layout';
import Link from 'next/link';

export default function DigitalLogicCountingPage() {
  const analogInputComponents = [
    ['9V DC Alkaline Battery', '1'],
    ['ACES Power Jack', '1'],
    ['1 kΩ Fixed Resistor', '2'],
    ['10 kΩ Fixed Resistor', '2'],
    ['5mm Blue LED', '2'],
    ['100 µF Capacitors', '2'],
    ['NPN 3904 Transistors', '2'],
    ['Wires', 'Assorted'],
  ];

  const oscillatorComponents = [
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

  const decadeCounterComponents = [
    ['9V DC Alkaline Battery', '1'],
    ['ACES Power Jack', '1'],
    ['5mm Green LED', '1'],
    ['5mm Red LED', '10'],
    ['4017 IC', '1'],
    ['Wires', 'Assorted'],
  ];

  const upDownComponents = [
    ['9V DC Alkaline Battery', '1'],
    ['ACES Power Jack', '1'],
    ['5mm Red LED', '4'],
    ['4516 IC', '1'],
    ['Wires', 'Assorted'],
  ];

  const binaryTable = [
    ['0', '0', '0', '0000'],
    ['1', '1', '1', '0001'],
    ['2', '2', '2', '0010'],
    ['3', '3', '3', '0011'],
    ['4', '4', '4', '0100'],
    ['5', '5', '5', '0101'],
    ['6', '6', '6', '0110'],
    ['7', '7', '7', '0111'],
    ['8', '10', '8', '1000'],
    ['9', '11', '9', '1001'],
    ['10', '12', 'A', '1010'],
    ['11', '13', 'B', '1011'],
    ['12', '14', 'C', '1100'],
    ['13', '15', 'D', '1101'],
    ['14', '16', 'E', '1110'],
    ['15', '17', 'F', '1111'],
  ];

  return (
    <Layout title="">
      <main className="w-full">

        {/* HERO */}

        <section className="px-5 pt-24 sm:px-8 lg:px-12 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="flex aspect-[16/9] w-full items-center justify-center bg-foreground/[0.035]">
              <p className="m-0 text-sm text-foreground/25">
                Digital Logic + Counting
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

                <h1 className="m-0 mt-3 max-w-[1200px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  Digital Logic & Counting Circuits
                </h1>

              </div>


              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A progressive series of circuits exploring NAND logic,
                  oscillation, decimal counting, binary counting, decoding,
                  and seven-segment display output.
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
                1.4
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
                Logic IC
              </p>
              <p className="m-0 mt-2 text-sm">
                4011
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Counters
              </p>
              <p className="m-0 mt-2 text-sm">
                4017 + 4516
              </p>
            </div>

            <div className="px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Decoder
              </p>
              <p className="m-0 mt-2 text-sm">
                4511
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
                  Project 1.4 was developed as a sequence of six connected
                  circuits. The project begins by using NAND gate logic to
                  make an analog input digital, then develops an oscillator
                  before using the resulting signal for decimal and binary
                  counting, decoding, and display.
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


        {/* 01 SYSTEM PROGRESSION */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-12 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  01
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  System Progression
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Each stage builds on the previous circuit, progressing from
                  a single NAND gate input to a complete counting circuit
                  with decimal display output.
                </p>


                <div className="mt-14 border-t border-foreground/30">

                  {[
                    ['A', 'Analog Input'],
                    ['B', 'NAND Gate Oscillator'],
                    ['C', 'Decade Counter'],
                    ['D', 'Binary Up/Down Counter'],
                    ['E', 'Binary Decimal Decoder'],
                    ['F', 'Seven Segment Display'],
                  ].map(([part, title]) => (
                    <div
                      key={part}
                      className="grid grid-cols-[60px_1fr] border-b border-foreground/20 py-4"
                    >
                      <p className="m-0 text-xs text-foreground/40">
                        {part}
                      </p>

                      <p className="m-0 text-sm">
                        {title}
                      </p>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 02 PART A */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  02 / Part A
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Analog Input
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  NAND gate logic and a pull-up resistor are used to produce
                  a square-wave signal.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  A 10 kΩ fixed resistor and PBNO push button create a pull-up
                  resistor configuration. The input is connected to pin 13 of
                  the 4011 NAND gate IC.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The positive lead of the LED is connected to pin 11, the
                  output pin. At rest both NAND inputs are high and the output
                  is low. When input is applied to the PBNO push button, the
                  current is grounded, both inputs become low, and the output
                  becomes high.
                </p>

              </div>

            </div>


            <div className="mt-16 grid gap-5 sm:grid-cols-2">

              <div className="flex aspect-[4/3] items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Analog Input Circuit
                </p>
              </div>

              <div className="flex aspect-[4/3] items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Circuit Schematic
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* 03 PART B */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  03 / Part B
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  NAND Gate Oscillator
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Two resistor-capacitor pairs are introduced as timers to
                  create an oscillating output.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  For NAND logic, if there is a low on any input lead, the
                  output remains high. Only when both inputs are high does the
                  output become low.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The oscillator uses two resistor-capacitor pairs as timers.
                  The report describes one resistor as controlling the length
                  of the circuit by filling the capacitor, while another
                  controls charging and discharging.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The 4011 IC contains four NAND gates. The chip is powered
                  through pin 14 and connected to ground through pin 7.
                </p>

              </div>

            </div>


            <div className="mt-16 grid gap-5 sm:grid-cols-2">

              <div className="flex aspect-[4/3] items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  NAND Gate Oscillator
                </p>
              </div>

              <div className="flex aspect-[4/3] items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  4011 IC Diagram
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* 04 PART C */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  04 / Part C
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Decade Counter
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The oscillator output becomes the clock signal for a 4017
                  decade counter.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The completed NAND gate oscillator is connected to a 4017
                  decade counter IC. The 4017 has 16 pins, including 11 output
                  pins, a clock, reset, and disable pin.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  When a high clock signal is output from the oscillator, the
                  outputs cycle from 0 through 9 in order. The reset pin can
                  be tied to an output to count to a specific number.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The output pins are connected to LEDs to create a scrolling
                  sequence where each LED lights in order. The speed is
                  controlled by the resistors in the NAND gate oscillator.
                </p>

              </div>

            </div>


            <div className="mt-16 flex aspect-[21/9] items-center justify-center bg-foreground/[0.035]">
              <p className="m-0 text-sm text-foreground/25">
                4017 Decade Counter
              </p>
            </div>

          </div>
        </section>


        {/* 05 PART D */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  05 / Part D
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Binary Up/Down Counter
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  A 4516 IC extends the counting circuit with binary output
                  and up/down counting.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The next stage uses four 5mm red LEDs and a 4516 IC. The IC
                  has 16 pins, including four outputs, four inputs, a clock,
                  up/down, carry out, and reset.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The four outputs are connected to the LEDs. The up/down pin
                  controls the counting direction, while the carry-out pin is
                  used if multiple chips are connected together.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  In this configuration, the 4516 is used as an up/down
                  counter and counts to 16.
                </p>

              </div>

            </div>


            <div className="mt-16 flex aspect-[21/9] items-center justify-center bg-foreground/[0.035]">
              <p className="m-0 text-sm text-foreground/25">
                4516 Binary Up/Down Counter
              </p>
            </div>

          </div>
        </section>


        {/* 06 NUMBER SYSTEMS */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  06
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Number Systems
                </h2>

              </div>


              <div className="lg:col-span-9">

                <div className="border-t border-foreground/30">

                  <div className="grid grid-cols-4 border-b border-foreground/20 py-4 text-xs text-foreground/40">
                    <p className="m-0">Decimal</p>
                    <p className="m-0">Octal</p>
                    <p className="m-0">Hexadecimal</p>
                    <p className="m-0">Binary</p>
                  </div>

                  {binaryTable.map(([decimal, octal, hex, binary]) => (
                    <div
                      key={decimal}
                      className="grid grid-cols-4 border-b border-foreground/20 py-[10px] text-xs"
                    >
                      <p className="m-0">{decimal}</p>
                      <p className="m-0">{octal}</p>
                      <p className="m-0">{hex}</p>
                      <p className="m-0">{binary}</p>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 07 PART E */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  07 / Part E
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Binary Decimal Decoder
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The 4511 is introduced to convert the binary input into a
                  decimal output.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The binary outputs are wired to input pins 7, 1, 2, and 6
                  of the 4511.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The IC also includes a display-test pin. The report
                  identifies this as useful when diagnosing circuit problems
                  because it sets all outputs high and turns on the full
                  display.
                </p>

              </div>

            </div>


            <div className="mt-16 flex aspect-[21/9] items-center justify-center bg-foreground/[0.035]">
              <p className="m-0 text-sm text-foreground/25">
                4511 Binary Decimal Decoder
              </p>
            </div>

          </div>
        </section>


        {/* 08 PART F */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  08 / Part F
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Seven Segment Display
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The final stage displays the circuit output in decimal
                  form.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The seven-segment display is the last part of the counting
                  circuit. It gets its name from the seven individually
                  controlled segments used to form decimal numbers.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The display also has a dot in the bottom-right corner and
                  has 10 pins.
                </p>

              </div>

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


              <div className="lg:col-span-9 space-y-14">

                {[
                  ['Part A — Analog Input', analogInputComponents],
                  ['Part B — NAND Gate Oscillator', oscillatorComponents],
                  ['Part C — Decade Counter', decadeCounterComponents],
                  ['Part D — Binary Up/Down Counter', upDownComponents],
                ].map(([title, parts]) => (
                  <div key={title as string} className="border-t border-foreground/30">

                    <div className="flex items-baseline justify-between border-b border-foreground/20 py-4">
                      <p className="m-0 text-sm">
                        {title as string}
                      </p>

                      <p className="m-0 text-xs text-foreground/40">
                        Qty.
                      </p>
                    </div>

                    {(parts as string[][]).map(([component, quantity]) => (
                      <div
                        key={`${title}-${component}`}
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
                ))}

              </div>

            </div>

          </div>
        </section>


        {/* 10 FINAL CIRCUIT */}

        <section className="px-5 pb-28 pt-24 sm:px-8 lg:px-12 lg:pb-36 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  10
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Final Circuit
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The final circuit brings together NAND logic, oscillation,
                  sequential counting, binary counting, decoding, and a
                  seven-segment decimal display.
                </p>

              </div>

            </div>


            <div className="mt-16">

              <div className="flex aspect-[16/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Final Counting Circuit
                </p>
              </div>

              <p className="m-0 mt-3 text-xs text-foreground/40">
                Completed Project 1.4 circuit
              </p>

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