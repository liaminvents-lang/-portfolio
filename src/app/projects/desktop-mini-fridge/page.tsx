'use client';

import Layout from '@/components/layout';

export default function DesktopMiniFridgePage() {
  const electronics = [
    ['Rugged Metal Pushbutton', '1'],
    ['ATmega328P', '1'],
    ['555 Timer IC', '1'],
    ['10 µF Capacitor', '1'],
    ['22 pF Capacitors', '2'],
    ['16 MHz Crystal', '1'],
    ['10 kΩ Resistors', '6'],
    ['Voltage Regulators', '2'],
    ['PBNO', '3'],
    ['Peltier Tile', '1'],
    ['Large Heat Spreader', '1'],
    ['Small Heat Sink', '1'],
    ['12V CPU Fans', '2'],
    ['12V 3A LEDs', '2'],
    ['LM35 Temperature Sensor', '1'],
    ['Momentary Limit Switch', '1'],
    ['DC Barrel Jack', '1'],
    ['1.8" Colour TFT LCD', '1'],
    ['Relay Modules', '3'],
    ['Pin Headers + Wiring', ''],
  ];

  const assembly = [
    ['Heat Set Inserts', '8'],
    ['M4 Screws', '8'],
    ['Hinges', '2'],
    ['Latch', '1'],
    ['Self-Tapping Screws', '6'],
    ['High Density Spray Foam', ''],
    ['Window Seal Tape', ''],
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
                Desktop Mini Fridge Hero Image
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
                  Product + Electronics Development
                </p>

                <h1 className="m-0 mt-3 max-w-[1100px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  Desktop Mini Fridge
                </h1>

              </div>


              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A custom thermoelectric desktop refrigerator developed
                  around temperature control, compact packaging, insulation,
                  electronics, and a fully integrated enclosure.
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
                Thermoelectric Refrigerator
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
                ATmega328P
              </p>

            </div>


            <div className="border-r border-foreground/20 px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Cooling
              </p>

              <p className="m-0 mt-2 text-sm">
                Peltier Thermoelectric
              </p>

            </div>


            <div className="px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Development
              </p>

              <p className="m-0 mt-2 text-sm leading-[1.6]">
                Product Design + Electronics
                <br />
                Fabrication + Assembly
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
                  The project was developed as a functional desktop refrigerator
                  for storing solder paste and other temperature-sensitive
                  materials.
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
                    href="http://darcy.rsgc.on.ca/ACES/TEI4M/2122/ISPs.html"
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
                  The project began with a commercial desktop mini fridge and
                  explored how its size, temperature control, efficiency, and
                  enclosure design could be improved through a completely
                  custom-built system.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    Rather than treating the refrigerator as a collection of
                    separate components, the project was developed around the
                    complete thermal and physical system. Cooling, airflow,
                    insulation, electronics, interface design, and enclosure
                    geometry all had to operate within the same compact volume.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Development was divided into six areas: refrigeration
                    theory, Peltier cooling, control electronics, the LCD
                    interface, enclosure design, and final assembly.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            02 THERMAL SYSTEM
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Thermal System
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Cooling was produced using a Peltier tile, creating a
                  solid-state refrigeration system without a conventional
                  compressor.
                </p>

              </div>

            </div>


            <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-12">

              {/* SYSTEM */}

              <div className="lg:col-span-7">

                <div className="grid gap-5 border-t border-foreground/30 py-5 sm:grid-cols-12">

                  <div className="sm:col-span-3">

                    <p className="m-0 text-xs text-foreground/40">
                      01 / Cooling
                    </p>

                  </div>


                  <div className="sm:col-span-9">

                    <p className="m-0 max-w-[720px] text-base leading-[1.5]">
                      The refrigerator uses a thermoelectric cooler based on
                      the Peltier effect. Applying electrical current creates a
                      temperature difference across the tile, removing heat
                      from one side while depositing it on the other.
                    </p>

                  </div>

                </div>


                <div className="grid gap-5 border-t border-foreground/20 py-5 sm:grid-cols-12">

                  <div className="sm:col-span-3">

                    <p className="m-0 text-xs text-foreground/40">
                      02 / Heat Rejection
                    </p>

                  </div>


                  <div className="sm:col-span-9">

                    <p className="m-0 max-w-[720px] text-base leading-[1.5]">
                      Heat generated on the hot side of the Peltier tile is
                      transferred through a heat spreader and heat sink.
                      Twelve-volt CPU fans move air through the rear
                      compartment to remove heat from the system.
                    </p>

                  </div>

                </div>


                <div className="grid gap-5 border-y border-foreground/20 py-5 sm:grid-cols-12">

                  <div className="sm:col-span-3">

                    <p className="m-0 text-xs text-foreground/40">
                      03 / Temperature
                    </p>

                  </div>


                  <div className="sm:col-span-9">

                    <p className="m-0 max-w-[720px] text-base leading-[1.5]">
                      An LM35 temperature sensor provides temperature input to
                      the control electronics, connecting the thermal system
                      with the electronic control architecture.
                    </p>

                  </div>

                </div>

              </div>


              {/* COMPONENTS */}

              <div className="lg:col-span-5">

                <div className="border-t border-foreground/30">

                  <div className="flex items-baseline justify-between border-b border-foreground/20 py-4">

                    <p className="m-0 text-sm">
                      Electronics + Thermal Components
                    </p>

                    <p className="m-0 text-xs text-foreground/40">
                      Qty.
                    </p>

                  </div>


                  <div className="grid gap-x-8 sm:grid-cols-2">

                    <div>

                      {electronics.slice(0, 10).map(([component, quantity]) => (
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

                      {electronics.slice(10).map(([component, quantity]) => (
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
            03 HEAT SPREADER DEVELOPMENT
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Heat Spreader Development
                </h2>

                <p className="m-0 mt-10 max-w-[760px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Thermal simulation was used to investigate a custom aluminum
                  heat spreader before the final cooling hardware was selected.
                </p>

              </div>


              <div className="lg:col-span-7 lg:pt-20">

                <p className="m-0 max-w-[760px] text-base leading-[1.7]">
                  The first heat spreader design reached a simulated
                  temperature of 116°C at its centre and 83.72°C at the outer
                  region. The geometry was revised by adding additional fins
                  and concentrating them toward the centre of the spreader.
                </p>

                <p className="m-0 mt-8 max-w-[760px] text-base leading-[1.7] text-foreground/60">
                  The second version reduced the simulated temperatures to
                  74.4°C at the centre and 57.8°C at the outer region. The
                  custom part was ultimately not manufactured because CNC
                  machining costs exceeded $200, so generic heat sinks were
                  used in the final machine.
                </p>

              </div>

            </div>


            {/* ONE LONG FIGURE */}

            <div className="mt-16">

              <div className="flex aspect-[21/9] w-full items-center justify-center bg-foreground/[0.035]">

                <p className="m-0 text-sm text-foreground/25">
                  Heat Spreader Development + Thermal Simulation
                </p>

              </div>


              <div className="mt-3 flex justify-between gap-6">

                <p className="m-0 text-xs text-foreground/40">
                  Heat spreader design iterations and thermal simulation
                </p>

                <p className="m-0 text-xs text-foreground/30">
                  Desktop Mini Fridge
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            04 ENCLOSURE DEVELOPMENT
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Enclosure Development
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The enclosure was designed around five interdependent parts:
                  the back, heat wall, outer shell, liner, and door.
                </p>


                <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-2">

                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Rear Compartment
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The design began at the back of the refrigerator, where
                      the heat spreader, control electronics, ventilation, and
                      user inputs had to be integrated into a compact service
                      compartment.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Heat Wall
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The middle section and heat wall went through ten
                      revisions. The final design separated the thermal zones
                      while allowing the front section to remain removable and
                      the electronics to stay accessible.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Shell + Liner
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The outer shell created a rigid exterior around the
                      insulation while the internal liner produced a clean
                      refrigerator cavity. The space between them also provided
                      concealed routing for lighting and temperature-sensor
                      wiring.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Door
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The door was developed around the completed enclosure and
                      incorporated an inset for the perimeter seal, creating a
                      tight interface with the refrigerator body.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* TWO FIGURES */}

            <div className="mt-16 grid gap-5 sm:grid-cols-2">

              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">

                  <p className="m-0 text-sm text-foreground/25">
                    Enclosure Development
                  </p>

                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Enclosure and internal component development
                </p>

              </div>


              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">

                  <p className="m-0 text-sm text-foreground/25">
                    Final Enclosure
                  </p>

                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Outer shell, liner, heat wall, and door assembly
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            05 ELECTRONICS + INTERFACE
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Electronics + Interface
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Temperature control, cooling hardware, lighting, and the user
                  interface were brought together through a custom electronic
                  control system.
                </p>


                <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-2">

                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Controller
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      An ATmega328P forms the main microcontroller platform,
                      connecting the temperature sensor, display, controls, and
                      supporting electronics within the refrigerator.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      PCB Development
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      A PCB was designed in Autodesk Eagle using a ground plane
                      for the higher current requirements. Data traces were
                      created using the autorouter while power connections were
                      routed manually.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Control Circuits
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      The electronics design contained two main circuits: a 555
                      latch and the temperature-control circuit. A Perma-Proto
                      board was ultimately used to assemble the final control
                      circuit.
                    </p>

                  </div>


                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-sm text-foreground/40">
                      Display
                    </p>

                    <p className="m-0 mt-4 max-w-[650px] text-base leading-[1.7]">
                      A 1.8-inch 128 × 160 colour TFT display communicates
                      through SPI and provides the visual interface. Although
                      the display included touchscreen functionality, it was
                      not used in the final project because it proved
                      unreliable.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* TWO FIGURES */}

            <div className="mt-16 grid gap-5 sm:grid-cols-2">

              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">

                  <p className="m-0 text-sm text-foreground/25">
                    Electronics + PCB Development
                  </p>

                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Electronic control system development
                </p>

              </div>


              <div>

                <div className="flex aspect-[4/3] w-full items-center justify-center bg-foreground/[0.035]">

                  <p className="m-0 text-sm text-foreground/25">
                    TFT Interface
                  </p>

                </div>

                <p className="m-0 mt-3 text-xs text-foreground/40">
                  Integrated colour TFT interface and physical controls
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            06 FABRICATION + ASSEMBLY
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  06
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Fabrication + Assembly
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  More than 580 hours of 3D printing were used to move from
                  enclosure prototypes to the final refrigerator assembly.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    Playmaker PLA was used during rapid prototyping before the
                    final enclosure was printed in Prusament Galaxy Black. Heat
                    set inserts and M4 hardware created removable mechanical
                    connections throughout the enclosure.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    High-density spray foam was used to insulate the heat
                    barrier and walls. A rubber seal was installed around the
                    door frame, while hinges and a latch completed the physical
                    enclosure.
                  </p>

                </div>


                {/* ASSEMBLY PARTS */}

                <div className="mt-14 max-w-[760px] border-t border-foreground/30">

                  <div className="flex items-baseline justify-between border-b border-foreground/20 py-4">

                    <p className="m-0 text-sm">
                      Assembly Components
                    </p>

                    <p className="m-0 text-xs text-foreground/40">
                      Qty.
                    </p>

                  </div>


                  <div className="grid gap-x-8 sm:grid-cols-2">

                    <div>

                      {assembly.slice(0, 4).map(([component, quantity]) => (
                        <div
                          key={component}
                          className="flex items-center justify-between gap-5 border-b border-foreground/20 py-[9px]"
                        >

                          <p className="m-0 text-xs">
                            {component}
                          </p>

                          <p className="m-0 text-xs text-foreground/40">
                            {quantity}
                          </p>

                        </div>
                      ))}

                    </div>


                    <div>

                      {assembly.slice(4).map(([component, quantity]) => (
                        <div
                          key={component}
                          className="flex items-center justify-between gap-5 border-b border-foreground/20 py-[9px]"
                        >

                          <p className="m-0 text-xs">
                            {component}
                          </p>

                          <p className="m-0 text-xs text-foreground/40">
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
            07 FINAL PRODUCT
        ===================================================== */}

        <section className="px-5 pb-36 pt-24 sm:px-8 lg:px-12 lg:pb-48 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  07
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Final Product
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1100px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The completed refrigerator brought thermal design,
                  electronics, embedded control, interface design, insulation,
                  and digital fabrication together within a functional desktop
                  product.
                </p>


                <div className="mt-12 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The final enclosure concealed the insulation and wiring
                    while keeping the electronics accessible from the rear.
                    Ventilation, cooling hardware, controls, and the display
                    were integrated directly into the product architecture.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    After completion, the refrigerator remained in use as a
                    desktop appliance for storing solder paste, fulfilling the
                    original goal of developing a usable product rather than a
                    standalone electronics exercise.
                  </p>

                </div>

              </div>

            </div>


            {/* FINAL IMAGE */}

            <div className="mt-16">

              <div className="flex aspect-[16/9] w-full items-center justify-center bg-foreground/[0.035]">

                <p className="m-0 text-sm text-foreground/25">
                  Final Desktop Mini Fridge
                </p>

              </div>


              <div className="mt-3 flex justify-between gap-6">

                <p className="m-0 text-xs text-foreground/40">
                  Completed thermoelectric desktop refrigerator
                </p>

                <p className="m-0 text-xs text-foreground/30">
                  Desktop Mini Fridge
                </p>

              </div>

            </div>

          </div>
        </section>

      </main>
    </Layout>
  );
}