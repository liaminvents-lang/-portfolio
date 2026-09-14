'use client';

import Layout from '@/components/layout';
import Image from 'next/image';

export default function DigitalJoineryPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">

              <div className="lg:col-span-7">
                <p className="m-0 text-sm text-foreground/40">
                  Digital Fabrication
                </p>

                <h1 className="m-0 mt-4 max-w-[1100px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  Digital Joinery for Irregular Materials
                </h1>
              </div>

              <div className="flex items-end lg:col-span-5">
                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A digitally fabricated connection between reclaimed barn
                  wood and found stone, developed through 3D scanning,
                  geometric analysis, and robotic milling.
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

              <p className="m-0 mt-2 text-sm leading-[1.6]">
                Material +
                <br />
                Fabrication Research
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Materials
              </p>

              <p className="m-0 mt-2 text-sm leading-[1.6]">
                Reclaimed Barn Wood
                <br />
                Found Stone
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Process
              </p>

              <p className="m-0 mt-2 text-sm leading-[1.6]">
                Photogrammetry
                <br />
                Robotic Milling
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Tools
              </p>

              <p className="m-0 mt-2 text-sm leading-[1.6]">
                UR10e
                <br />
                Sony FX3
                <br />
                Grasshopper
              </p>
            </div>

            <div className="px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Collaborators
              </p>

              <p className="m-0 mt-2 text-sm leading-[1.6]">
                Annie Song
                <br />
                Liam Cassano
                <br />
                Eva Macoretta
                <br />
                Ryan Stanislaus
              </p>
            </div>

          </div>
        </section>

        {/* =====================================================
            01 — MATERIAL ORIGINS
        ===================================================== */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">
                <p className="m-0 text-sm text-foreground/40">
                  01
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Material Origins
                </h2>
              </div>

              <div className="lg:col-span-9">
                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The project begins with two existing materials shaped by
                  different histories: reclaimed barn wood and a found stone.
                </p>

                <div className="mt-14 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The timber was sourced from Rouge Park and had already
                    passed through multiple material lives, first through
                    natural growth and later as part of an agricultural
                    structure. Grain, weathering, nails, and previous cuts
                    remained visible across its surface.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The stone was collected from Woodbine Beach and presented
                    a different set of conditions. Its irregular geometry,
                    surface erosion, and weight became important constraints
                    in determining how the two materials could meet.
                  </p>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            02 — MATERIAL ANALYSIS
        ===================================================== */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-foreground/[0.02]">
                  <video
                    src="/videos/rockturn.MOV"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  02
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Material Analysis
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Existing material conditions were treated as design
                  information rather than imperfections to be removed.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The timber was examined for grain direction, existing
                    fasteners, weathered surfaces, and previous modifications.
                    These conditions helped determine which areas could be
                    machined and which should remain untouched.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The stone was studied through its existing geometry,
                    surface condition, and weight. Rather than standardizing
                    the material, these irregularities became constraints for
                    developing its relationship with the timber.
                  </p>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            03 — ROBOTIC PHOTOGRAMMETRY
        ===================================================== */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Robotic Photogrammetry
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  A UR10e and Sony FX3 were used together to create a
                  repeatable photogrammetry workflow for capturing the
                  irregular material geometry.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The camera was mounted to the robot and moved through a
                    sequence of predefined positions around the object. At each
                    position the camera was triggered to capture an image,
                    producing a controlled set of viewpoints for
                    photogrammetric reconstruction.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The object was also rotated on a turntable, creating a
                    collaborative scanning process between camera motion and
                    object rotation. Using known robot positions made the
                    capture sequence repeatable and helped simplify the
                    alignment of the resulting scans.
                  </p>

                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-foreground/[0.02]">
                  <video
                    src="/videos/C8110 3.MP4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            04 — ORIENTATION TESTING
        ===================================================== */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-6">
                <Image
                  src="/images/itterations465.png"
                  alt="Digital orientation iterations between the reclaimed timber and stone"
                  width={1800}
                  height={1350}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full"
                />
              </div>

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Orientation Testing
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Multiple relationships between the timber and stone were
                  tested to understand balance, stability, and the minimum
                  contact required between them.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The scanned geometries allowed different orientations to
                    be rapidly evaluated in a digital environment. Each
                    iteration explored how the position of the timber changed
                    its contact with the irregular surface of the stone.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Kangaroo physics simulations in Grasshopper were also used
                    to explore the effect of weight and gravity on the
                    assembly. This helped evaluate which configurations could
                    balance using the stone as an anchoring mass before
                    committing to fabrication.
                  </p>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            05 — DIGITAL CONNECTION
        ===================================================== */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Digital Connection
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The connection was generated from the specific geometry of
                  the two materials rather than imposed as a predefined joint.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    Once the final orientation was established, the scanned
                    geometry of the stone defined the corresponding cut within
                    the timber. The joint was therefore developed from the
                    actual contact condition between the two irregular
                    materials.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Digital fabrication acts as the mediator between the two
                    pieces, translating their natural irregularities into a
                    precise shared geometry without requiring either material
                    to first become standardized.
                  </p>

                </div>
              </div>

              <div className="lg:col-span-6">
                <Image
                  src="/images/Perspective of Full Sculpture -rendered.png"
                  alt="Rendered perspective of the full timber and stone assembly"
                  width={1800}
                  height={1350}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full"
                />
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            06 — ROBOTIC MILLING
        ===================================================== */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-foreground/[0.02]">
                  <video
                    src="/videos/C8162 2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  06
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Robotic Milling
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The digitally generated connection was transferred back into
                  the reclaimed timber through robotic milling.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    Material was selectively removed from the timber to produce
                    the contact geometry derived from the scanned stone. The
                    machining operation was localized around the joint rather
                    than used to regularize the entire piece.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    This preserved the existing character of the reclaimed
                    timber while introducing a precise machined surface only
                    where required for the two materials to connect.
                  </p>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            07 — ARTIFICIAL EQUILIBRIUM
        ===================================================== */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  07
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Artificial Equilibrium
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The final assembly relies on a precisely machined
                  relationship between two materials that otherwise share no
                  standardized interface.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The timber is cut only where required to establish the
                    connection, allowing the weight and geometry of the stone
                    to anchor the assembly while the wood remains standing
                    freely.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The finished object retains evidence of both existing
                    material histories and new fabrication. Weathered grain,
                    erosion, and previous use remain visible alongside the
                    machined surface that makes their connection possible.
                  </p>

                </div>
              </div>

              <div className="lg:col-span-6">
                <Image
                  src="/images/woodnrock.png"
                  alt="Final timber and stone assembly"
                  width={1800}
                  height={1350}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full"
                />
              </div>

            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}