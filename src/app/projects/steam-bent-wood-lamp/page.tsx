'use client';

import Image from 'next/image';
import Layout from '@/components/layout';

/* =====================================================
   STEAM BENT WOOD LAMP
===================================================== */

export default function SteamBentWoodLampPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="w-full px-5 pt-5 sm:px-8 sm:pt-8 lg:px-12 lg:pt-10">
          <div className="relative mx-auto aspect-[16/9] w-full max-w-[1800px] overflow-hidden bg-foreground/[0.04]">

            <Image
              src="/images/final demonstrators-12 2.PNG"
              alt="Steam Bent Wood Lamp"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

          </div>
        </section>


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">

              <div className="lg:col-span-7">

                <p className="m-0 text-sm text-foreground/40">
                  Furniture + Material Fabrication
                </p>

                <h1 className="m-0 mt-4 max-w-[1100px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  Steam Bent
                  <br />
                  Wood Lamp
                </h1>

              </div>


              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A suspended lamp developed through steam bending, laminated
                  timber fabrication, and the adaptation of a commercially
                  available lighting system.
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
                Lighting
              </p>

            </div>


            <div className="border-r border-foreground/20 px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Process
              </p>

              <p className="m-0 mt-2 text-sm">
                Steam Bending
              </p>

            </div>


            <div className="border-r border-foreground/20 px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Material
              </p>

              <p className="m-0 mt-2 text-sm">
                Hardwood
              </p>

            </div>


            <div className="border-r border-foreground/20 px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Lighting
              </p>

              <p className="m-0 mt-2 text-sm">
                IKEA STRÅLA
              </p>

            </div>


            <div className="px-5 py-6">

              <p className="m-0 text-xs text-foreground/40">
                Development
              </p>

              <p className="m-0 mt-2 text-sm leading-[1.6]">
                Wood Fabrication
                <br />
                Prototyping
                <br />
                Product Design
              </p>

            </div>

          </div>
        </section>


        {/* =====================================================
            01 — DESIGN DEVELOPMENT
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              {/* LEFT — TEXT */}

              <div className="lg:col-span-5">

                <p className="m-0 text-sm text-foreground/40">
                  01
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Design Development
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The lamp began with a simple continuous timber loop,
                  using bending to create both the structure and the visual
                  identity of the object.
                </p>

                <p className="m-0 mt-10 max-w-[700px] text-base leading-[1.7] text-foreground/60">
                  Rather than assembling the frame from a series of rigid
                  components, the design uses the flexibility of thin timber
                  sections to establish a continuous curved profile around the
                  suspended light source.
                </p>

              </div>


              {/* RIGHT — DESIGN IMAGE */}

              <div className="lg:col-span-7">

                <div className="relative aspect-[4/3] w-full overflow-hidden bg-foreground/[0.035]">

                  <Image
                    src="/images/steambentwoodlamp.png"
                    alt="Steam Bent Wood Lamp design development"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-contain"
                  />

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            02 — STEAM BENDING
        ===================================================== */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">

            {/* IMAGE */}

            <div className="relative aspect-[16/10] w-full overflow-hidden bg-foreground/[0.035]">

              <Image
                src="/images/IMG_9186.JPG"
                alt="Timber forming for the Steam Bent Wood Lamp"
                fill
                sizes="100vw"
                className="object-cover"
              />

            </div>


            {/* TEXT */}

            <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Steam Bending
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Thin timber sections were formed around a custom jig,
                  allowing the material to establish the continuous curved
                  geometry of the lamp.
                </p>

                <div className="mt-14 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The bending jig defines the final profile while a series
                    of locating points and clamps control the timber as it is
                    brought into shape. The geometry transitions from a broad
                    lower curve into a tighter upper radius.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Forming the component as a continuous curve reduces the
                    number of visible connections and allows the grain of the
                    wood to follow the overall geometry of the object.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            03 — FORM + LAMINATION
        ===================================================== */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              {/* LEFT — TEXT */}

              <div className="lg:col-span-6">

                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Form + Lamination
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The bent timber layers work together as a thin structural
                  shell, allowing the finished loop to retain its geometry
                  after removal from the forming jig.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    Multiple thin sections allow the wood to negotiate a much
                    tighter curvature than a single thick member. The layers
                    are formed together around the jig to establish a
                    consistent profile.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Once set, the laminated assembly becomes substantially
                    stiffer while preserving the visual lightness of the
                    individual timber strips.
                  </p>

                </div>

              </div>


              {/* RIGHT — IMAGE */}

              <div className="lg:col-span-6">

                <div className="relative aspect-[3/4] w-full overflow-hidden bg-foreground/[0.035]">

                  <Image
                    src="/images/IMG_9297.jpeg"
                    alt="Finished bent timber lamp frame"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            04 — LIGHTING INTEGRATION
        ===================================================== */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              {/* LEFT — IMAGE */}

              <div className="lg:col-span-6">

                <div className="relative aspect-[3/4] w-full overflow-hidden bg-white">

                  <Image
                    src="/images/IMG_9264.PNG"
                    alt="IKEA STRÅLA cord set used for the lamp"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />

                </div>

              </div>


              {/* RIGHT — TEXT */}

              <div className="lg:col-span-6 lg:pt-12">

                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Lighting Integration
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  A commercially available IKEA STRÅLA cord set was adapted
                  as the electrical core of the lamp.
                </p>

                <p className="m-0 mt-10 max-w-[700px] text-base leading-[1.7]">
                  Using an existing cord set allowed the design development to
                  focus on the timber structure, suspension, and light
                  diffusion rather than recreating the mains-voltage
                  electrical hardware.
                </p>

                <p className="m-0 mt-7 max-w-[700px] text-base leading-[1.7] text-foreground/60">
                  The cable passes through the upper portion of the timber
                  frame and suspends the light source within the centre of the
                  loop, keeping the electrical system visually separate from
                  the wooden structure.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            05 — CORD MODIFICATION
        ===================================================== */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              {/* LEFT — TEXT */}

              <div className="lg:col-span-6">

                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Cord Modification
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The existing inline switch was opened to understand how the
                  cord assembly could be incorporated into the finished lamp.
                </p>

                <p className="m-0 mt-10 max-w-[700px] text-base leading-[1.7]">
                  Working from an existing lighting assembly provided a compact
                  electrical system that could be integrated with the custom
                  timber and diffuser components while retaining the original
                  cord and switching hardware.
                </p>

              </div>


              {/* RIGHT — IMAGE */}

              <div className="lg:col-span-6">

                <div className="relative aspect-[4/3] w-full overflow-hidden bg-foreground/[0.035]">

                  <Image
                    src="/images/IMG_9293.jpeg"
                    alt="Opened inline switch from the IKEA cord set"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            06 — LIGHT DIFFUSER
        ===================================================== */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  06
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Light Diffuser
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  A spherical diffuser surrounds the bulb and creates a simple
                  geometric counterpoint to the elongated timber loop.
                </p>

                <div className="mt-14 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The diffuser is suspended independently within the wooden
                    frame, allowing the light source to remain visually centred
                    while the surrounding timber establishes the larger
                    silhouette of the lamp.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The translucent shell softens the point light source and
                    produces a more uniform glow while concealing the bulb and
                    socket within the centre of the assembly.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            07 — FINAL PROTOTYPE
        ===================================================== */}

        <section className="px-5 pb-32 pt-28 sm:px-8 lg:px-12 lg:pb-40 lg:pt-40">
          <div className="mx-auto w-full max-w-[1800px]">

            {/* IMAGE */}

            <div className="relative aspect-[16/10] w-full overflow-hidden bg-foreground/[0.035]">

              <Image
                src="/images/IMG_9297.jpeg"
                alt="Steam Bent Wood Lamp prototype"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />

            </div>


            {/* TEXT */}

            <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  07
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Final Prototype
                </h2>

              </div>


              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The prototype combines the bent timber frame, suspended
                  spherical diffuser, and modified cord set into a single
                  hanging light.
                </p>

                <div className="mt-14 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The final assembly uses the timber loop as the dominant
                    structural and visual element, framing the light source
                    while keeping the overall object materially simple.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The project served as a physical study in bending,
                    lamination, fixture design, component integration, and the
                    translation of a material process into a finished object.
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