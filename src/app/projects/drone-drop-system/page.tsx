'use client';

import Layout from '@/components/layout';
import Link from 'next/link';

export default function DroneDropSystemPage() {
  const transmitterComponents = [
    ['Arduino Nano', '1'],
    ['Liquid Crystal Display', '1'],
    ['10K Pot', '1'],
    ['Key Switch', '1'],
    ['Toggle Switch', '1'],
    ['DC Barrel Jack', '1'],
    ['Half Perma Proto', '1'],
    ['Male + Female Headers', 'Assorted'],
    ['Wires', 'Assorted'],
  ];

  const receiverComponents = [
    ['Arduino Pro Micro', '1'],
    ['5g Micro Servo', '1'],
    ['433 MHz Receiver', '1'],
    ['Slide Switch', '1'],
    ['7.4V Cannon LP E-17 Battery', '1'],
    ['Custom PCB', '1'],
    ['Male Headers', 'Assorted'],
    ['Custom Wire Harness', '1'],
  ];

  return (
    <Layout title="">
      <main className="w-full">

        {/* =====================================================
            HERO IMAGE
        ===================================================== */}

        <section className="px-5 pt-24 sm:px-8 lg:px-12 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="flex aspect-[16/9] w-full items-center justify-center bg-foreground/[0.035]">
              <p className="m-0 text-sm text-foreground/25">
                Drone Drop System Hero Image
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
                  Electronics + Product Development
                </p>

                <h1 className="m-0 mt-3 max-w-[1100px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  Drone Drop System
                </h1>

              </div>


              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A wireless payload release system developed for mounting
                  beneath a DJI Mavic 2 Pro, combining 433 MHz communication,
                  custom electronics, PCB development, and 3D-printed hardware.
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
                Drone Payload System
              </p>

            </div>


            <div className="border-r border-foreground/20 px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Platform
              </p>

              <p className="m-0 mt-2 text-sm">
                DJI Mavic 2 Pro
              </p>

            </div>


            <div className="border-r border-foreground/20 px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Controllers
              </p>

              <p className="m-0 mt-2 text-sm">
                Arduino Nano + Pro Micro
              </p>

            </div>


            <div className="border-r border-foreground/20 px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Communication
              </p>

              <p className="m-0 mt-2 text-sm">
                433 MHz ASK
              </p>

            </div>


            <div className="px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Development
              </p>

              <p className="m-0 mt-2 text-sm leading-[1.6]">
                Electronics + PCB
                <br />
                3D Printing
              </p>

            </div>

          </div>
        </section>


        {/* =====================================================
            PROJECT CONTEXT + REFERENCES
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
                  Completed during high school as part of the Advanced Computer
                  Engineering School program at Royal St. George&apos;s College.
                  The project was developed to create a system capable of
                  dropping payloads from the bottom of a Mavic 2 Pro drone.
                </p>

              </div>


              <div className="lg:col-span-4">

                <p className="m-0 text-xs text-foreground/40 lg:text-right">
                  References
                </p>

                <div className="mt-3 flex flex-col gap-2 lg:items-end">

                  <a
                    href="http://darcy.rsgc.on.ca/ACES/TEI3M/2021/ISPs.html#logs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm underline decoration-foreground/30 underline-offset-4 transition-opacity duration-200 hover:opacity-50"
                  >
                    ACES / RSGC Project Reference ↗
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

            <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">

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
                  The Drone Drop System uses separate transmitter and receiver
                  electronics to wirelessly activate a payload release
                  mechanism mounted beneath the drone.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The project was developed across five main areas: the
                    433 MHz modules, transmitter, receiver, custom PCB, and
                    3D-printed components.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The transmitter provides the user interface and sends the
                    release command, while the receiver uses a micro servo to
                    operate the release mechanism.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            02 433 MHz COMMUNICATION
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  433 MHz Communication
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  433 MHz transmitter and receiver modules form the wireless
                  connection between the handheld controller and the payload
                  release system.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The transmitter uses a SAW resonator tuned for 433 MHz
                  operation. When a logic HIGH is applied to the DATA input,
                  the oscillator produces a constant RF carrier wave. When the
                  DATA input is LOW, the oscillator stops.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  This communication method uses Amplitude Shift Keying. The
                  receiver uses an RF tuned circuit and amplifiers before the
                  signal is fed into a Phase Lock Loop to focus on the digital
                  bit stream.
                </p>

              </div>

            </div>


            <div className="mt-16 grid gap-5 sm:grid-cols-2">

              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    433 MHz Transmitter
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Wireless transmitter module
                </p>

              </div>


              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    433 MHz Receiver
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Wireless receiver module
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            03 TRANSMITTER
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Transmitter
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The transmitter combines an Arduino Nano, LCD, user controls,
                  and a 433 MHz transmitter inside a dedicated 3D-printed case.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The Arduino Nano was selected for its size and available
                    pins for driving the LCD and 433 MHz transmitter. The LCD
                    acts as a status indicator for the user.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The transmitter is powered with 5V from the back of the DJI
                    Smart Controller. RH.ASK controls the Amplitude Shift
                    Keying communication and LiquidCrystal controls the status
                    display.
                  </p>

                </div>

              </div>

            </div>


            <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-7">

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Transmitter Assembly
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Controller electronics and 3D-printed enclosure
                </p>

              </div>


              <div className="lg:col-span-5">

                <div className="border-t border-foreground/30">

                  <div className="flex items-baseline justify-between border-b border-foreground/20 py-4">

                    <p className="m-0 text-sm">
                      Transmitter Components
                    </p>

                    <p className="m-0 text-xs text-foreground/40">
                      Qty.
                    </p>

                  </div>


                  {transmitterComponents.map(([component, quantity]) => (
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
            04 RECEIVER
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Receiver
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The receiver uses an Arduino Pro Micro, 433 MHz receiver, and
                  5g micro servo to receive the wireless command and operate
                  the release mechanism.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The Arduino Pro Micro was selected for its small size and
                    power. It uses an onboard ATmega32U4, with all 18 Pro Micro
                    IO pins available as digital inputs or outputs.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The receiver code uses RH.ASK for Amplitude Shift Keying
                    communication and ServoTimer2 to control the release servo
                    with PWM. ServoTimer2 was used to work around a conflict
                    with Timer 1.
                  </p>

                </div>

              </div>

            </div>


            <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-7">

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Receiver Assembly
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Receiver electronics and release servo
                </p>

              </div>


              <div className="lg:col-span-5">

                <div className="border-t border-foreground/30">

                  <div className="flex items-baseline justify-between border-b border-foreground/20 py-4">

                    <p className="m-0 text-sm">
                      Receiver Components
                    </p>

                    <p className="m-0 text-xs text-foreground/40">
                      Qty.
                    </p>

                  </div>


                  {receiverComponents.map(([component, quantity]) => (
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
            05 CUSTOM PCB
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Custom PCB
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  A custom PCB was developed to reduce the size of the receiver
                  electronics and provide removable connections between
                  components.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The PCB was designed in Autodesk Eagle. The circuit was first
                  created as a schematic before being converted into the board
                  layout.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  Gerber files were exported and sent to JLC PCB. The board was
                  designed to take up as little space as possible while fitting
                  the required components. Male and female pin headers allow
                  components to be connected and disconnected.
                </p>

              </div>

            </div>


            <div className="mt-16 grid gap-5 sm:grid-cols-2">

              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Receiver PCB
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Custom receiver PCB
                </p>

              </div>


              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    PCB Assembly
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Soldered receiver electronics
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            06 ENCLOSURE DEVELOPMENT
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  06
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  3D Printing
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The transmitter enclosure and drone-mounted receiver assembly
                  were developed through multiple 3D-printed revisions.
                </p>


                <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-2">

                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Receiver
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      Four revisions were completed for the receiver side of
                      the system. Weight, size, and clearance were the main
                      design considerations.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Transmitter
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      Two revisions were completed for the transmitter side of
                      the system.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Fabrication
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      All 3D-printed components for the project were produced
                      on an Ender 3 Pro.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            <div className="mt-16">

              <div className="flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Receiver + Transmitter Enclosure Development
                </p>
              </div>

              <div className="mt-3 flex justify-between gap-6">

                <p className="m-0 text-xs text-foreground/40">
                  Iterative 3D-printed hardware
                </p>

                <p className="m-0 text-xs text-foreground/30">
                  Ender 3 Pro
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            07 FINAL SYSTEM
        ===================================================== */}

        <section className="px-5 pb-28 pt-24 sm:px-8 lg:px-12 lg:pb-36 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

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
                  The completed system combines a dedicated transmitter with a
                  compact drone-mounted receiver to wirelessly control the
                  payload release servo.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The transmitter uses an Arduino Nano, LCD, and 433 MHz
                    transmitter module to provide the user interface and send
                    the release command.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    On the drone, the Arduino Pro Micro and 433 MHz receiver
                    receive the command and control the 5g micro servo through
                    the custom receiver electronics.
                  </p>

                </div>

              </div>

            </div>


            <div className="mt-16">

              <div className="flex aspect-[16/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Final Drone Drop System
                </p>
              </div>

              <div className="mt-3 flex justify-between gap-6">

                <p className="m-0 text-xs text-foreground/40">
                  Wireless payload release system
                </p>

                <p className="m-0 text-xs text-foreground/30">
                  DJI Mavic 2 Pro
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