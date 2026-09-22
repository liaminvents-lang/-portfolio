'use client';

import Layout from '@/components/layout';
import Link from 'next/link';

export default function PhotogrammetryTurntablePage() {
  const components = [
    ['Arduino Mega', '1'],
    ['5V Stepper Motor', '1'],
    ['Stepper Driver', '1'],
    ['Joystick', '1'],
    ['LCD Display', '1'],
    ['3D Printed Enclosure', ''],
    ['Screws', 'Assorted'],
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
                Photogrammetry Turntable
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
                  Electronics + Mechanical Systems
                </p>

                <h1 className="m-0 mt-3 max-w-[1100px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  Photogrammetry Turntable
                </h1>

              </div>


              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A motorized photography turntable combining stepper motor
                  control, joystick input, an LCD interface, and a modified
                  3D-printed gear system.
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
                Motorized Turntable
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Controller
              </p>
              <p className="m-0 mt-2 text-sm">
                Arduino Mega
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Motor
              </p>
              <p className="m-0 mt-2 text-sm">
                5V Stepper Motor
              </p>
            </div>


            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Interface
              </p>
              <p className="m-0 mt-2 text-sm">
                Joystick + LCD
              </p>
            </div>


            <div className="px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Fabrication
              </p>
              <p className="m-0 mt-2 text-sm">
                3D Printing
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
                  Originally documented as Project 2.7 Mechanical, this
                  photography turntable was developed to introduce motors and
                  the mechanical functions of components. The system combines
                  control electronics, a stepper motor, and a 3D-printed
                  enclosure.
                </p>

              </div>


              <div className="lg:col-span-4">

                <p className="m-0 text-xs text-foreground/40 lg:text-right">
                  Reference
                </p>

                <div className="mt-3 flex flex-col gap-2 lg:items-end">

                  <a
                    href="http://darcy.rsgc.on.ca/ACES/TEI3M/2021/Tasks.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm underline decoration-foreground/30 underline-offset-4 transition-opacity duration-200 hover:opacity-50"
                  >
                    ACES Mechanical Project ↗
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
                  A joystick-controlled photography turntable built around a
                  5V stepper motor, Arduino Mega, LCD display, and a
                  3D-printed mechanical assembly.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The user moves the joystick to control the direction in
                    which the turntable rotates while the LCD displays the
                    direction.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    An Arduino Uno was originally intended for the project,
                    but an Arduino Mega was used because it was the MCU
                    available during development.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            02 CONTROL ELECTRONICS
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Control Electronics
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The control system combines an Arduino Mega, joystick, and
                  LCD display to provide direct control of the turntable.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  Joystick input determines the direction in which the
                  turntable rotates. The LCD display provides the user with a
                  visual indication of that direction.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  These control components interface with the 5V stepper motor
                  and its accompanying driver to operate the mechanical
                  turntable.
                </p>

              </div>

            </div>


            <div className="mt-16">

              <div className="flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">
                <p className="m-0 text-sm text-foreground/25">
                  Control Electronics
                </p>
              </div>

              <p className="m-0 mt-3 text-xs text-foreground/40">
                Arduino Mega, joystick, and LCD interface
              </p>

            </div>

          </div>
        </section>


        {/* =====================================================
            03 STEPPER MOTOR
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Stepper Motor
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  A 5V stepper motor drives the turntable using discrete
                  rotational steps.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The stepper motor consists of a permanent-magnet rotor
                    surrounded by the windings of the stator. Activating the
                    windings sequentially magnetizes the stator and causes the
                    motor to rotate.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    This stepped movement allows the motor to be positioned
                    through controlled increments, making it suitable for the
                    rotating turntable mechanism.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            04 MOTOR DRIVE
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Motor Drive
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The motor drive method was changed during development to
                  increase torque at lower speeds.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The project initially explored wave drive, or single-coil
                  operation. In this configuration one coil is activated at a
                  time.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  With four coils, the rotor makes a full cycle in four steps.
                  This approach was later changed so pairs of coils were
                  activated at the same time to increase torque at lower
                  speeds.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            05 3D PRINTED ENCLOSURE
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  3D Printed Enclosure
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The enclosure was modified from an existing design while the
                  gear system was redesigned for the turntable.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The chassis was modified from a design by user Birbo12 on
                    Thingiverse. The main chassis remained the same while the
                    gear system was modified.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The first prototype fit very tightly. The print-in-place
                    gear system was redesigned to provide more clearance
                    between parts and improve efficiency at low speeds.
                  </p>

                </div>

              </div>

            </div>


            <div className="mt-16 grid gap-5 sm:grid-cols-2">

              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    3D Printed Enclosure
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Turntable chassis
                </p>

              </div>


              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Gear System
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Modified print-in-place gear system
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            06 COMPONENTS
        ===================================================== */}

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


        {/* =====================================================
            07 FINAL TURNTABLE
        ===================================================== */}

        <section className="px-5 pb-28 pt-24 sm:px-8 lg:px-12 lg:pb-36 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  07
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Final Turntable
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The completed turntable integrates the 3D-printed chassis and
                  gear system with the stepper motor, Arduino Mega, joystick,
                  and LCD display.
                </p>

              </div>

            </div>


            <div className="mt-16 grid gap-5 sm:grid-cols-3">

              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Entire Device
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Complete turntable
                </p>

              </div>


              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Gear System
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Turntable drive
                </p>

              </div>


              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">
                  <p className="m-0 text-sm text-foreground/25">
                    Individual Components
                  </p>
                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Mechanical and electronic components
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