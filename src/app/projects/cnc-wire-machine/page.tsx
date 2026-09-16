'use client';

import Layout from '@/components/layout';

export default function CNCWireMachinePage() {
  const components = [
    ['NEMA 17 Stepper Motor', '1'],
    ['25g Servo', '1'],
    ['24V Stepper Motor', '1'],
    ['SparkFun EasyDriver V4', '1'],
    ['2.8" TFT Display', '1'],
    ['Rugged Metal Pushbuttons', '2'],
    ['Emergency Stop', '1'],
    ['Incandescent Indicator', '1'],
    ['Barrel Jack', '1'],
    ['12V 2A Power Supply', '1'],
    ['LM7805 Voltage Regulators', '2'],
    ['Arduino Mega + Custom PCB', '1'],
    ['M4 Hardware + Wiring', ''],
  ];

  const sequence = [
    ['01', 'Cut'],
    ['02', 'Advance Wire'],
    ['03', 'Bend 90°'],
    ['04', 'Advance Wire'],
    ['05', 'Bend 90°'],
    ['06', 'Final Advance + Cut'],
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
                CNC Wire Machine Hero Image
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
                  Machine Development
                </p>

                <h1 className="m-0 mt-3 max-w-[1100px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  CNC Wire Machine
                </h1>

              </div>


              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A custom desktop machine developed to automate the
                  preparation of breadboard wire through integrated feeding,
                  bending, stripping, and cutting.
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
                Automated Machine
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
                Arduino Mega
              </p>

            </div>


            <div className="border-r border-foreground/20 px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Actuation
              </p>

              <p className="m-0 mt-2 text-sm">
                Stepper + Servo Motors
              </p>

            </div>


            <div className="px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Development
              </p>

              <p className="m-0 mt-2 text-sm leading-[1.6]">
                Mechanical Design
                <br />
                Electronics + Software
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

                <p className="m-0 max-w-[580px] text-sm leading-[1.7] text-foreground/60">
                  Completed during high school as part of the Advanced Computer
                  Engineering School program at Royal St. George&apos;s College.
                </p>

              </div>


              <div className="lg:col-span-4">

                <p className="m-0 text-xs text-foreground/40 lg:text-right">
                  References
                </p>

                <div className="mt-3 flex flex-col gap-2 lg:items-end">

                  <a
                    href="http://darcy.rsgc.on.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm underline decoration-foreground/30 underline-offset-4 transition-opacity duration-200 hover:opacity-50"
                  >
                    ACES / RSGC Reference ↗
                  </a>

                  <a
                    href="http://darcy.rsgc.on.ca/ACES/TEI4M/2021/ISPs.html#LongISP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm underline decoration-foreground/30 underline-offset-4 transition-opacity duration-200 hover:opacity-50"
                  >
                    Original Project Reference ↗
                  </a>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            01 MACHINE OVERVIEW
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  01
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Machine Overview
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Developed as an alternative to pre-cut breadboard wire kits,
                  CNC Wire brings the repetitive operations required to prepare
                  wire into a single programmable machine.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The project was developed through three interconnected
                    stages: design, software, and assembly. The mechanical
                    system was designed around the complete wire preparation
                    process rather than a single operation.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Continuous wire is moved through a sequence of feeding,
                    bending, stripping, and cutting operations. Mechanical
                    design, electronics, software, and fabrication were
                    developed together within one compact machine.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            02 SYSTEM DEVELOPMENT
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  System Development
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1000px] text-3xl font-normal leading-[1.2] sm:text-4xl">
                  The machine was developed around the movement of continuous
                  wire through a sequence of discrete mechanical operations.
                </p>

              </div>

            </div>


            {/* OPERATIONS + COMPONENTS */}

            <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-12">

              {/* OPERATIONS */}

              <div className="lg:col-span-7">

                <div className="grid gap-5 border-t border-foreground/30 py-5 sm:grid-cols-12">

                  <div className="sm:col-span-3">
                    <p className="m-0 text-xs text-foreground/40">
                      01 / Feed
                    </p>
                  </div>

                  <div className="sm:col-span-9">

                    <p className="m-0 max-w-[720px] text-base leading-[1.5]">
                      A bipolar NEMA 17 stepper drives the wire forward and
                      backward through the machine, controlling the amount of
                      material delivered to the bending and cutting assembly.
                    </p>

                    <p className="m-0 mt-3 max-w-[680px] text-sm leading-[1.55] text-foreground/45">
                      The motor was selected for the torque required by the
                      feeding stage and is controlled through a SparkFun
                      EasyDriver V4.
                    </p>

                  </div>

                </div>


                <div className="grid gap-5 border-t border-foreground/20 py-5 sm:grid-cols-12">

                  <div className="sm:col-span-3">
                    <p className="m-0 text-xs text-foreground/40">
                      02 / Bend
                    </p>
                  </div>

                  <div className="sm:col-span-9">

                    <p className="m-0 max-w-[720px] text-base leading-[1.5]">
                      A smaller 24V unipolar stepper drives the bending
                      mechanism, allowing the motor to fit within the
                      constrained geometry of the forming head.
                    </p>

                  </div>

                </div>


                <div className="grid gap-5 border-y border-foreground/20 py-5 sm:grid-cols-12">

                  <div className="sm:col-span-3">
                    <p className="m-0 text-xs text-foreground/40">
                      03 / Cut + Strip
                    </p>
                  </div>

                  <div className="sm:col-span-9">

                    <p className="m-0 max-w-[720px] text-base leading-[1.5]">
                      Servo actuation operates the cutting and stripping
                      mechanism positioned within the central forming
                      assembly.
                    </p>

                  </div>

                </div>

              </div>


              {/* COMPONENTS */}

              <div className="lg:col-span-5">

                <div className="border-t border-foreground/30">

                  <div className="flex items-baseline justify-between border-b border-foreground/20 py-4">

                    <p className="m-0 text-sm">
                      Components
                    </p>

                    <p className="m-0 text-xs text-foreground/40">
                      Qty.
                    </p>

                  </div>


                  <div className="grid gap-x-8 sm:grid-cols-2">

                    <div>

                      {components.slice(0, 7).map(([component, quantity]) => (
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

                      {components.slice(7).map(([component, quantity]) => (
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
            03 BENDING + CUTTING
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Bending + Cutting
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Bending, stripping, and cutting were concentrated around a
                  single compact forming head.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The main bending mechanism rotates around a central hub. A
                  small-to-large gear ratio connects the rotating assembly to
                  the compact unipolar stepper motor positioned beneath the
                  mechanism.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  Side cutters pass through an opening in the central hub, with
                  the cutter jaws positioned between four guide pieces. A 25g
                  servo mounted underneath the assembly operates the cutters
                  through a custom metal linkage.
                </p>

              </div>

            </div>


            {/* =================================================
                ONE LONG FIGURE

                Replace with the long bending and cutting figure
                exported from the DER.
            ================================================= */}

            <div className="mt-16">

              <div className="flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">

                <p className="m-0 text-sm text-foreground/25">
                  Bending + Cutting Mechanism Figure
                </p>

              </div>


              <div className="mt-3 flex justify-between gap-6">

                <p className="m-0 text-xs text-foreground/40">
                  Bending and cutting mechanism development
                </p>

                <p className="m-0 text-xs text-foreground/30">
                  CNC Wire Machine
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            04 ELECTRONICS + CONTROL
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Electronics + Control
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  A custom electronic control system connects the mechanical
                  operations of the machine through a single Arduino-based
                  architecture.
                </p>


                <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-2">

                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Custom PCB
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The electronics were consolidated onto a custom PCB. The
                      original prototype used dual TB6612 MOSFET drivers to
                      control the two stepper motors, with the board assembled
                      through hand-soldered components.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Power Distribution
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      Power enters through the PCB and is divided into 12V and
                      5V using two onboard voltage regulators, supplying the
                      different electrical requirements of the motors and
                      controller.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Interface
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      A 2.8-inch TFT display provides the primary graphical
                      interface. Rugged metal pushbuttons, an emergency stop,
                      and an incandescent indicator provide additional
                      physical machine controls.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Embedded Software
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The Arduino Mega coordinates the machine through
                      dedicated functions for advancing, bending, and cutting
                      the wire, turning the separate mechanical mechanisms into
                      a programmed operating sequence.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                TWO ELECTRONICS FIGURES

                Replace each placeholder with one of the
                electronics / PCB figures exported from the DER.
            ================================================= */}

            <div className="mt-16 grid gap-5 sm:grid-cols-2">

              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">

                  <p className="m-0 text-sm text-foreground/25">
                    Custom PCB
                  </p>

                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Custom PCB development and assembly
                </p>

              </div>


              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">

                  <p className="m-0 text-sm text-foreground/25">
                    Control Electronics
                  </p>

                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Integrated control electronics
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            05 PROGRAMMED OPERATION
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Programmed Operation
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The mechanical operations are coordinated in software as a
                  defined sequence rather than controlled independently.
                </p>


                <div className="mt-14 grid border-y border-foreground/20 sm:grid-cols-2 lg:grid-cols-3">

                  {sequence.map(([number, operation], index) => (
                    <div
                      key={number}
                      className={`
                        flex min-h-[110px] flex-col justify-between
                        border-foreground/20 p-5
                        ${index < 3 ? 'border-b lg:border-b' : ''}
                        ${index % 3 !== 2 ? 'lg:border-r' : ''}
                      `}
                    >

                      <p className="m-0 text-xs text-foreground/40">
                        {number}
                      </p>

                      <p className="m-0 mt-8 text-base">
                        {operation}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            06 FINAL MACHINE
        ===================================================== */}

        <section className="px-5 pb-36 pt-24 sm:px-8 lg:px-12 lg:pb-48 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  06
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Final Machine
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  CNC Wire brings mechanical design, custom electronics,
                  embedded programming, interface design, and digital
                  fabrication together within a single working machine.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The external housing was developed around the internal
                    mechanical and electronic architecture, providing mounting
                    points for components on both the inside and outside of the
                    machine.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The completed prototype was developed as a usable tool for
                    producing custom wire lengths for future electronics
                    projects, consolidating a normally manual preparation
                    process within a compact electromechanical system.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>

      </main>
    </Layout>
  );
}