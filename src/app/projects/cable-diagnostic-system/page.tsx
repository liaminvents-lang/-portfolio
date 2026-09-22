'use client';

import Layout from '@/components/layout';
import Link from 'next/link';

export default function CableDiagnosticSystemPage() {
  const electronics = [
    ['Rugged Metal Pushbutton', '1'],
    ['ATmega2560 Breakout Board', '1'],
    ['2.8" TFT Colour LCD Display', '1'],
    ['RJ45 Breakout Board', '2'],
    ['USB 3.0 Breakout Board', '1'],
    ['USB B Breakout Board', '1'],
    ['Mini USB Breakout Board', '1'],
    ['USB C Breakout Board', '2'],
    ['3.7 V 1200mAh LIPO', '2'],
    ['LIPO Battery Charger', '1'],
    ['Battery Management System', '2'],
    ['Inductive Charging Coil', '2'],
    ['Custom PCB', '1'],
    ['Pin Headers', 'Assorted'],
    ['Wires', 'Assorted'],
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
                Cable Diagnostic System Hero Image
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
                  Cable Diagnostic System
                </h1>

              </div>


              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A compact electronic diagnostic system developed to provide
                  a user-friendly way to test different cable standards through
                  an integrated touchscreen interface.
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
                Cable Diagnostic System
              </p>

            </div>


            <div className="border-r border-foreground/20 px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Period
              </p>

              <p className="m-0 mt-2 text-sm">
                High School
              </p>

            </div>


            <div className="border-r border-foreground/20 px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Controller
              </p>

              <p className="m-0 mt-2 text-sm">
                ATmega2560
              </p>

            </div>


            <div className="border-r border-foreground/20 px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Interface
              </p>

              <p className="m-0 mt-2 text-sm">
                2.8&quot; TFT Colour LCD
              </p>

            </div>


            <div className="px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Development
              </p>

              <p className="m-0 mt-2 text-sm leading-[1.6]">
                Electronics + PCB
                <br />
                CAD + Embedded Software
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
                  The project began as two separate devices before development
                  shifted toward a single compact cable diagnostic system.
                </p>

              </div>


              <div className="lg:col-span-4">

                <p className="m-0 text-xs text-foreground/40 lg:text-right">
                  References
                </p>

                <div className="mt-3 flex flex-col gap-2 lg:items-end">

                  <a
                    href="http://darcy.rsgc.on.ca/ACES/TEI4M/2122/ISPs.html"
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
                  The project was developed to create a user-friendly way to
                  test different cables within one compact electronic device.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The main focal point of the system is a 2.8-inch TFT colour
                    LCD display used to create a clean and minimal user
                    interface. An ATmega2560 breakout board was selected for
                    its pin-to-form-factor ratio and provides the controller
                    for the device.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Prototyping was completed in three stages: breadboard
                    assembly, PCB development, and CAD. These stages brought
                    the cable-testing electronics, interface, battery system,
                    connector breakout boards, and enclosure into one system.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            02 CABLE DIAGNOSTICS
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Cable Diagnostics
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The diagnostic system tests continuity from one end of a
                  cable to the other, allowing the connections within Ethernet
                  and USB cables to be displayed through the interface.
                </p>

              </div>

            </div>


            <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-7">

                <div className="grid gap-5 border-t border-foreground/30 py-5 sm:grid-cols-12">

                  <div className="sm:col-span-3">
                    <p className="m-0 text-xs text-foreground/40">
                      01 / Ethernet
                    </p>
                  </div>

                  <div className="sm:col-span-9">
                    <p className="m-0 max-w-[720px] text-base leading-[1.5]">
                      Ethernet cables use RJ45 connectors and contain eight
                      conductors crimped to a specific pinout. The Cable
                      Diagnostic System displays continuity from end to end
                      across the cable.
                    </p>
                  </div>

                </div>


                <div className="grid gap-5 border-t border-foreground/20 py-5 sm:grid-cols-12">

                  <div className="sm:col-span-3">
                    <p className="m-0 text-xs text-foreground/40">
                      02 / USB
                    </p>
                  </div>

                  <div className="sm:col-span-9">
                    <p className="m-0 max-w-[720px] text-base leading-[1.5]">
                      USB cables use four primary connections: VBUS, GBUS, D+,
                      and D-. The system tests continuity across these
                      connections to determine how the cable is configured.
                    </p>
                  </div>

                </div>


                <div className="grid gap-5 border-y border-foreground/20 py-5 sm:grid-cols-12">

                  <div className="sm:col-span-3">
                    <p className="m-0 text-xs text-foreground/40">
                      03 / Cable Type
                    </p>
                  </div>

                  <div className="sm:col-span-9">
                    <p className="m-0 max-w-[720px] text-base leading-[1.5]">
                      A functioning USB data cable displays four connected
                      lines between the ports. A power-delivery-only cable
                      displays two, allowing otherwise unmarked cables to be
                      identified.
                    </p>
                  </div>

                </div>

              </div>


              {/* COMPONENTS */}

              <div className="lg:col-span-5">

                <div className="border-t border-foreground/30">

                  <div className="flex items-baseline justify-between border-b border-foreground/20 py-4">

                    <p className="m-0 text-sm">
                      Control Electronics
                    </p>

                    <p className="m-0 text-xs text-foreground/40">
                      Qty.
                    </p>

                  </div>


                  <div className="grid gap-x-8 sm:grid-cols-2">

                    <div>

                      {electronics.slice(0, 8).map(([component, quantity]) => (
                        <div
                          key={component}
                          className="flex items-center justify-between gap-5 border-b border-foreground/20 py-[9px]"
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


                    <div>

                      {electronics.slice(8).map(([component, quantity]) => (
                        <div
                          key={component}
                          className="flex items-center justify-between gap-5 border-b border-foreground/20 py-[9px]"
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

            </div>

          </div>
        </section>


        {/* =====================================================
            03 TOUCHSCREEN INTERFACE
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Touchscreen Interface
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  A 2.8-inch TFT colour LCD with a resistive touchscreen forms
                  the central interface of the diagnostic system.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The display contains 76,800 pixels and a four-LED white
                  backlight. An integrated controller with RAM buffering
                  reduces the processing load placed on the microcontroller.
                  The display operates in 8-bit mode using eight digital data
                  lines, five control lines, and four touch lines.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The resistive touchscreen was calibrated using X and Y
                  offsets. Custom graphics were created for each connector,
                  allowing the touchscreen to function as the primary
                  user-facing interface for the cable tester.
                </p>

              </div>

            </div>


            <div className="mt-16">

              <div className="flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Touchscreen Interface + Connector Graphics
                </p>
              </div>

              <div className="mt-3 flex justify-between gap-6">

                <p className="m-0 text-xs text-foreground/40">
                  TFT interface, touchscreen calibration, and custom graphics
                </p>

                <p className="m-0 text-xs text-foreground/30">
                  Cable Diagnostic System
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            04 ELECTRONICS DEVELOPMENT
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Electronics Development
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The electronics were developed around an ATmega2560 breakout
                  board, battery-management hardware, connector breakout
                  boards, and an inductive charging system.
                </p>


                <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-2">

                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Controller
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The ATmega2560 breakout board was selected to reduce PCB
                      complexity while maintaining a high pin-to-form-factor
                      ratio. The board provides capabilities similar to a
                      traditional Arduino Mega within a smaller form factor.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Power System
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The system uses two 3.7 V 1200mAh LiPo batteries, a LiPo
                      battery charger, and two battery-management systems.
                      Battery and power operation was tested during the
                      breadboard stage.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Inductive Charging
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      Two inductive charging coils transfer power through a
                      magnetic field between the transmitter and receiver. The
                      coils are limited to a maximum of 5 V at 0.5 A depending
                      on input power.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Programming
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      LEDs and the serial programming chip were removed from
                      the PCB to reduce unnecessary power consumption. An
                      external ribbon cable connector was added for ICSP
                      programming.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            <div className="mt-16 grid gap-5 sm:grid-cols-2">

              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Breadboard Assembly
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Initial electronics and power-system prototype
                </p>

              </div>


              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Integrated Electronics
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Controller, connector interfaces, and charging electronics
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            05 PCB DEVELOPMENT
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  PCB Development
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Development progressed from a breadboard prototype through
                  two PCB revisions as the electronics were reduced into a
                  compact system.
                </p>


                <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-2">

                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Breadboard
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      Breakout boards were soldered to jumper wires and
                      connected to an Arduino Mega. The battery and power
                      system were also tested before development moved to the
                      PCB.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      PCB V1
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      Due to ATmega2560 availability and pricing, the first PCB
                      revision attempted to transfer the MCU and USB-B port
                      from donor boards. Damage to the MCU corner pins made
                      this approach unusable.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      PCB V2
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The second revision used a more compact form factor and
                      an ATmega2560 breakout board to reduce the number of
                      supporting components required on the PCB.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Screen Backpack
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The second PCB was manufactured to the exact dimensions
                      of the screen, creating a compact backpack with a direct
                      fit behind the display.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            <div className="mt-16">

              <div className="flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  PCB Development — Breadboard / V1 / V2
                </p>
              </div>

              <div className="mt-3 flex justify-between gap-6">

                <p className="m-0 text-xs text-foreground/40">
                  Development from breadboard assembly to compact screen-mounted PCB
                </p>

                <p className="m-0 text-xs text-foreground/30">
                  Cable Diagnostic System
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
                  Enclosure Development
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The CAD was divided into four sections: the top, middle,
                  bottom, and wireless charging base.
                </p>


                <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-2">

                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Top
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The top lid houses the screen, PCB, MCU, and supporting
                      components. Heated inserts secure the screen and PCB
                      using standoffs.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Middle
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The middle section secures the ports and rear power
                      button. It also incorporates cable management and support
                      for the battery-management system.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Bottom
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The bottom section houses the inductive charging coil,
                      charging driver, and two LiPo batteries.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Charging Base
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The fourth section is the wireless charging base. It
                      houses the transmitter inductive coil and a USB-C
                      breakout board for power input.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            <div className="mt-16 grid gap-5 sm:grid-cols-2">

              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Enclosure Development
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Top, middle, and bottom enclosure sections
                </p>

              </div>


              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Wireless Charging Base
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Integrated inductive charging base
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            07 FABRICATION + ASSEMBLY
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  07
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Fabrication + Assembly
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The enclosure components were designed around the tightly
                  packaged electronics and 3D printed in PLA on a Creality
                  Ender 3-Pro.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    All four parts were printed in PLA. The enclosure sections
                    use a ledge design that allows the parts to snap together,
                    creating a screwless appearance from the outside.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The internal design was developed around extremely compact
                    component placement. In some areas, only 0.5 mm of
                    tolerance remained between breakout boards in order to
                    reduce the overall size of the device.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            08 FINAL PRODUCT
        ===================================================== */}

        <section className="px-5 pb-28 pt-24 sm:px-8 lg:px-12 lg:pb-36 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  08
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Final Product
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The completed Cable Diagnostic System combined custom
                  electronics, PCB development, embedded programming,
                  touchscreen interaction, battery power, and a compact
                  3D-printed enclosure.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The final system uses custom graphics for each connector
                    and touchscreen input to create a user-friendly interface
                    for testing cables. The project also developed register
                    level programming and touchscreen calibration skills.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The finished cable tester continued to be used after the
                    project, particularly when identifying USB power-delivery
                    cables for charging electronics.
                  </p>

                </div>

              </div>

            </div>


            <div className="mt-16">

              <div className="flex aspect-[16/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Final Cable Diagnostic System
                </p>
              </div>


              <div className="mt-3 flex justify-between gap-6">

                <p className="m-0 text-xs text-foreground/40">
                  Completed cable tester and wireless charging system
                </p>

                <p className="m-0 text-xs text-foreground/30">
                  Cable Diagnostic System
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