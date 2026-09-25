'use client';

import Image from 'next/image';
import Layout from '@/components/layout';
import ScrollVideo from '@/components/projects/ScrollVideo';
import Link from 'next/link';

export default function CompressionStrapPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* HERO IMAGE */}

        <section className="px-5 pt-32 sm:px-8 lg:px-12 lg:pt-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="relative aspect-[16/7] w-full overflow-hidden">
              <Image
                src="/images/compressionstrapimages.jpg"
                alt="Compression strap development and hand testing setup"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </section>


        {/* INTRO */}

        <section className="px-5 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-20">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">

              <div className="lg:col-span-7">
                <p className="m-0 text-sm text-foreground/40">
                  Fabrication Tooling
                </p>

                <h1 className="m-0 mt-4 max-w-[1000px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  Compression Strap
                </h1>
              </div>

              <div className="flex items-end lg:col-span-5">
                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A compression system developed through hand testing and
                  iterative prototyping, then redesigned as an integrated
                  gripping interface for robotic steam bending.
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
                Steam Bending
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Development
              </p>

              <p className="m-0 mt-2 text-sm">
                Prototype V1 / V2
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Integration
              </p>

              <p className="m-0 mt-2 text-sm">
                Robotic Gripping
              </p>
            </div>

            <div className="px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Research
              </p>

              <p className="m-0 mt-2 text-sm leading-[1.6]">
                Material Feedback
                <br />
                Robotic Fabrication
              </p>
            </div>

          </div>
        </section>


        {/* SECTION 01 — TOOL DEVELOPMENT */}

        <section className="pt-20 lg:pt-28">
          <div className="px-5 pb-12 sm:px-8 lg:px-12">
            <div className="mx-auto grid w-full max-w-[1800px] gap-8 lg:grid-cols-12">

              <div className="lg:col-span-3">
                <p className="m-0 text-sm text-foreground/40">
                  01
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Tool Development
                </h2>
              </div>

              <div className="lg:col-span-8">
                <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The compression strap evolved from a crude hand-testing
                  prototype into a refined system designed specifically for
                  robotic manipulation.
                </p>

                <div className="mt-10 grid gap-10 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    The first version was built quickly to test whether
                    maintaining compression along the outer face of the timber
                    could improve the steam-bending process. At this stage, the
                    priority was validating the principle rather than producing
                    a finished robotic tool.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Hand testing revealed limitations in alignment, handling,
                    and the way the strap interacted with the timber. These
                    observations directly informed a second version with
                    improved geometry and a dedicated interface for the robotic
                    gripper.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <ScrollVideo src="/videos/compression-animation.mp4" />
        </section>


        {/* SECTION 02 — DESIGN PROBLEM */}

        <section className="px-5 pb-28 pt-8 sm:px-8 lg:px-12 lg:pb-40 lg:pt-12">
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
                  Steam bending makes timber flexible enough to form, but the
                  material remains vulnerable to splitting and uncontrolled
                  deformation during bending.
                </p>

                <div className="mt-14 grid gap-10 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    As the timber bends, the outside radius is placed in tension
                    while the inside radius is compressed. Excessive tension on
                    the outer fibres can cause the material to crack or fail
                    before the desired curvature is reached.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The strap was introduced to support the outside face of the
                    timber and maintain compression through the bending process,
                    allowing the material to form under more controlled
                    conditions.
                  </p>
                </div>
              </div>

            </div>


            {/* BENDING DIAGRAM */}

            <div className="mt-10 w-full">
              <div className="relative h-[500px] w-full overflow-hidden sm:h-[580px] lg:h-[650px]">
                <Image
                  src="/images/woodbendingdiagram.png"
                  alt="Diagram illustrating timber deformation during bending"
                  fill
                  className="scale-[1.08] object-contain"
                  sizes="100vw"
                />
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 03 — FAILURE MODES */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">
                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Failure Modes
                </h2>
              </div>

              <div className="lg:col-span-9">
                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Early bending tests exposed two distinct modes of material
                  failure: tension failure along the outside radius and
                  compression failure along the inside radius.
                </p>

                <div className="mt-14 grid gap-10 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    On the outside of the bend, fibres are forced to lengthen.
                    Once the tensile capacity of the timber is exceeded, the
                    outer fibres separate and the member begins to split.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Along the inside radius, fibres shorten as the material is
                    compressed. Excessive compression can cause local buckling,
                    crushing, and wrinkling of the timber.
                  </p>
                </div>
              </div>

            </div>


            {/* FAILURE IMAGE */}

            <div className="mt-16 w-full">
              <div className="relative aspect-[2.25/1] w-full overflow-hidden">
                <Image
                  src="/images/woodfailiures.png"
                  alt="Tension and compression failure in bent timber"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 04 — VERSION 1 */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              {/* LEFT — TEXT */}

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Version 1
                </h2>

                <p className="m-0 mt-2 text-sm text-foreground/40">
                  Hand-Testing Prototype
                </p>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The first compression strap was developed as a rapid
                  prototype for hand testing before robotic integration was
                  considered.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    Version 1 focused on establishing the basic compression
                    principle. It allowed the strap geometry, end restraints,
                    and relationship between the steel strap and timber to be
                    evaluated through repeated manual bending tests.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Testing exposed problems with positioning, alignment, and
                    handling. The prototype also lacked a reliable interface
                    through which the robotic end-effector could grip the
                    complete assembly.
                  </p>
                </div>
              </div>


              {/* RIGHT — IMAGE */}

              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/images/oldcompression.jpg"
                    alt="Original compression strap prototype"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* SECTION 05 — VERSION 2 */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              {/* LEFT — TEXT */}

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Version 2
                </h2>

                <p className="m-0 mt-2 text-sm text-foreground/40">
                  Refined Robotic System
                </p>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  A second version was rebuilt around the problems identified
                  during hand testing and the requirements of the robotic
                  bending workflow.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    The assembly was refined to improve alignment,
                    repeatability, and handling while maintaining the
                    compression strategy established with the first prototype.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The geometry also introduced a predictable central gripping
                    region, turning the strap itself into a controlled
                    mechanical interface for the robotic end-effector.
                  </p>
                </div>
              </div>


              {/* RIGHT — IMAGE */}

              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/images/newcompression.jpg"
                    alt="Refined compression strap"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* SECTION 06 — ROBOTIC INTEGRATION */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-12">

              {/* LEFT — TEXT */}

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  06
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Robotic Integration
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Version 2 allowed the robot to grip the compression strap
                  directly and manipulate the timber and strap as a single
                  assembly.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    The original gripper was developed around direct contact
                    with the flat face of the timber. Once the compression strap
                    was introduced, that surface was no longer available as the
                    primary gripping interface.
                  </p>

                  <div>
                    <p className="m-0 text-base leading-[1.7] text-foreground/60">
                      Version 2 incorporated a region specifically shaped around
                      the gripper. The robot could clamp onto the strap,
                      transfer motion through the complete assembly, and keep
                      the timber constrained throughout bending.
                    </p>

                    <Link
                      href="/projects/steam-bending-gripper"
                      className="mt-8 inline-block border-b border-foreground pb-1 text-sm transition-opacity hover:opacity-50"
                    >
                      View Robotic Bending Gripper ↗
                    </Link>
                  </div>
                </div>
              </div>


              {/* RIGHT — VERTICAL IMAGE */}

              <div className="lg:col-span-6">
                <div className="relative h-[700px] w-full overflow-hidden sm:h-[820px] lg:h-[950px]">
                  <Image
                    src="/images/DSC09811 2.JPG"
                    alt="Compression strap integrated with robotic steam bending"
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* SECTION 07 — WORKFLOW INTEGRATION */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">
                <p className="m-0 text-sm text-foreground/40">
                  07
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Workflow Integration
                </h2>
              </div>

              <div className="lg:col-span-9">
                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The compression strap ultimately became part of the robotic
                  steam-bending workflow rather than remaining an independent
                  material fixture.
                </p>

                <div className="mt-14 grid gap-10 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    The strap was installed with the timber before bending and
                    remained with the material throughout robotic manipulation.
                    This reduced additional handling during the limited working
                    window after steaming.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Developing the strap alongside the gripper demonstrated how
                    tooling, material behaviour, and robotic motion had to
                    evolve together rather than being designed as independent
                    parts of the fabrication process.
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