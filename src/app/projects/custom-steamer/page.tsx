'use client';

import Layout from '@/components/layout';
import ScrollVideo from '@/components/projects/ScrollVideo';
import Link from 'next/link';

export default function CustomSteamerPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* INTRO */}

        <section className="px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">

              <div className="lg:col-span-7">
                <p className="m-0 text-sm text-foreground/40">
                  Fabrication Tooling
                </p>

                <h1 className="m-0 mt-4 max-w-[1000px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  Custom Wood Steamer Cart
                </h1>
              </div>

              <div className="flex items-end lg:col-span-5">
                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A mobile steam-conditioning system developed to prepare
                  timber for full-scale bending experiments.
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
                Fabrication Tool
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Application
              </p>

              <p className="m-0 mt-2 text-sm">
                Timber Steam Bending
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Course
              </p>

              <p className="m-0 mt-2 text-sm">
                ARC380
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Year
              </p>

              <p className="m-0 mt-2 text-sm">
                2024
              </p>
            </div>

            <div className="px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Collaborators
              </p>

              <p className="m-0 mt-2 text-sm leading-[1.6]">
                Liam Cassano
                <br />
                Micha Fairfax-Angood
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 01 — TOOL ASSEMBLY */}

        <section className="pt-20 lg:pt-28">
          <div className="px-5 pb-12 sm:px-8 lg:px-12">
            <div className="mx-auto grid w-full max-w-[1800px] gap-8 lg:grid-cols-12">

              <div className="lg:col-span-3">
                <p className="m-0 text-sm text-foreground/40">
                  01
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Tool Assembly
                </h2>
              </div>

              <div className="lg:col-span-8">
                <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The steamer combines the chamber, steam source, drainage,
                  temperature monitoring, and mobile cart into a single
                  workshop tool.
                </p>

                <p className="m-0 mt-8 max-w-[700px] text-base leading-[1.7] text-foreground/60">
                  Scroll through the assembly to reveal the relationship
                  between the chamber enclosure, internal steam distribution,
                  supply plumbing, condensate collection, and supporting cart.
                </p>
              </div>

            </div>
          </div>

          <ScrollVideo src="/videos/wood steamer v14.mp4" />
        </section>

        {/* SECTION 02 — DESIGN PROBLEM */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">
                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Design Problem
                </h2>
              </div>

              <div className="lg:col-span-9">
                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The chamber needed to condition full-scale timber while
                  maintaining heat, distributing steam along the workpiece,
                  and managing the condensation produced during operation.
                </p>

                <div className="mt-14 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The system was sized around timber members approximately
                    four and a half feet long, with an operating target near
                    100°C. Insulation and steam delivery therefore had to be
                    considered alongside loading access and material clearance.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The equipment also needed to move with the larger
                    fabrication workflow. The chamber, generator, drainage,
                    monitoring, and storage were organized onto one cart rather
                    than being distributed across separate temporary setups.
                  </p>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 03 — CHAMBER CONSTRUCTION */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              {/* LEFT — FIGURE PLACEHOLDER */}

              <div className="lg:col-span-6">
                <div className="flex aspect-[4/3] w-full items-center justify-center border border-foreground/20 bg-foreground/[0.02]">
                  <p className="text-sm text-foreground/30">
                    Chamber section / construction figure
                  </p>
                </div>
              </div>

              {/* RIGHT — TEXT */}

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Chamber Construction
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The chamber uses a layered enclosure to retain heat while
                  separating the timber structure from the wettest parts of the
                  steaming process.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    Wood walls and marine-grade plywood form the chamber
                    enclosure around a foam insulation layer. The door is held
                    shut with a mechanical latch while still remaining
                    accessible for loading and unloading timber.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Inside the chamber, a metal steam tube runs along the
                    enclosure, with spacers supporting the workpiece above the
                    lower metal tray. This keeps the timber clear of collected
                    water while leaving space for steam to circulate.
                  </p>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 04 — STEAM DELIVERY + CONDENSATION */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              {/* LEFT — TEXT */}

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Steam Delivery + Condensation
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Steam enters the chamber through insulated plumbing while a
                  separate drainage path manages the water produced as the
                  vapour condenses.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    A plastic steamer supplies vapour through an insulated pipe
                    connected to the chamber. The pipe insulation reduces heat
                    loss between the steam source and the internal distribution
                    tube.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    A drip tray and metal drip sheet direct condensed water away
                    from exposed timber components. Condensate is collected in
                    a waste bucket positioned below the chamber.
                  </p>

                </div>
              </div>

              {/* RIGHT — FIGURE PLACEHOLDER */}

              <div className="lg:col-span-6">
                <div className="flex aspect-[4/3] w-full items-center justify-center border border-foreground/20 bg-foreground/[0.02]">
                  <p className="text-sm text-foreground/30">
                    Steam delivery + drainage figure
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 05 — CART CONFIGURATION */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              {/* LEFT — FIGURE PLACEHOLDER */}

              <div className="lg:col-span-6">
                <div className="flex aspect-[4/3] w-full items-center justify-center border border-foreground/20 bg-foreground/[0.02]">
                  <p className="text-sm text-foreground/30">
                    Complete cart configuration figure
                  </p>
                </div>
              </div>

              {/* RIGHT — TEXT */}

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Cart Configuration
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The support frame organizes the complete steaming setup into
                  a mobile footprint that can move between fabrication tasks.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The chamber is mounted horizontally across the top of the
                    cart beside a continuous tabletop. The steam generator and
                    condensate collection sit below, keeping the supporting
                    equipment close to the chamber without obstructing loading.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Caster wheels allow the assembled system to be repositioned
                    as one unit. The cart also provides storage and a stable
                    platform for the temperature probe, plumbing, and drainage
                    components used during operation.
                  </p>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 06 — THERMAL TESTING */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              {/* LEFT — TEXT */}

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  06
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Thermal Testing
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Thermal imaging was used to inspect the chamber and supply
                  system while the steamer was operating.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    A FLIR camera was used to compare the thermal behaviour of
                    the chamber enclosure, steam supply line, generator, and
                    surrounding surfaces during operation.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The test was used as a qualitative check for visible heat
                    loss and temperature differences across the system. It was
                    not treated as a calibrated measurement of the chamber&apos;s
                    internal temperature distribution.
                  </p>

                </div>
              </div>

              {/* RIGHT — FIGURE PLACEHOLDER */}

              <div className="lg:col-span-6">
                <div className="flex aspect-[4/3] w-full items-center justify-center border border-foreground/20 bg-foreground/[0.02]">
                  <p className="text-sm text-foreground/30">
                    FLIR thermal test figure
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 07 — FINAL TOOL */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              {/* LEFT — FIGURE PLACEHOLDER */}

              <div className="lg:col-span-6">
                <div className="flex aspect-[4/3] w-full items-center justify-center border border-foreground/20 bg-foreground/[0.02]">
                  <p className="text-sm text-foreground/30">
                    Finished steamer cart image
                  </p>
                </div>
              </div>

              {/* RIGHT — TEXT */}

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  07
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Final Tool
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The completed cart provided a dedicated conditioning tool for
                  repeated timber steam-bending experiments.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The final assembly keeps the chamber, steam source,
                    temperature probe, drainage, and supporting equipment
                    together in a single movable setup.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    It was used as part of the larger steam-bending workflow,
                    allowing timber to be conditioned immediately before
                    transfer into the bending and robotic fabrication process.
                  </p>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* MAIN RESEARCH PROJECT */}

        <section className="border-t border-foreground/20 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto flex w-full max-w-[1800px] flex-col justify-between gap-8 sm:flex-row sm:items-end">

            <div>
              <p className="m-0 text-sm text-foreground/40">
                Main Research Project
              </p>

              <h2 className="m-0 mt-3 max-w-[800px] text-3xl font-normal tracking-tight sm:text-4xl">
                Material Feedback in Robotic Steam Bending
              </h2>
            </div>

            <Link
              href="/projects/robotic-steam-bending"
              className="border-b border-foreground pb-1 text-sm transition-opacity hover:opacity-50"
            >
              View Research Project →
            </Link>

          </div>
        </section>

      </main>
    </Layout>
  );
}