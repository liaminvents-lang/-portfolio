'use client';

import Image from 'next/image';
import Layout from '@/components/layout';
import ScrollVideo from '@/components/projects/ScrollVideo';
import Link from 'next/link';

export default function RebarGripperPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* INTRO */}

        <section className="px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">

              <div className="lg:col-span-7">
                <p className="m-0 text-sm text-foreground/40">
                  Robotic Tooling
                </p>

                <h1 className="m-0 mt-4 max-w-[1000px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  Rebar Gripper
                </h1>
              </div>

              <div className="flex items-end lg:col-span-5">
                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A custom robotic end-effector developed to grip, position,
                  and scan rebar within a coordinated robotic assembly
                  workflow.
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
                Robotic End-Effector
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Robot
              </p>

              <p className="m-0 mt-2 text-sm">
                UR10e
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Application
              </p>

              <p className="m-0 mt-2 text-sm">
                Rebar Handling
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Sensing
              </p>

              <p className="m-0 mt-2 text-sm">
                Intel RealSense D435
              </p>
            </div>

            <div className="px-5 py-6">
              <p className="m-0 text-xs text-foreground/40">
                Fabrication
              </p>

              <p className="m-0 mt-2 text-sm leading-[1.6]">
                SLS Nylon 3D Printing
                <br />
                Pneumatics
                <br />
                Electronics
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
                  The gripper combines a pneumatic gripping mechanism,
                  custom locating geometry, a robot interface, and an
                  integrated depth camera within a single robotic tool.
                </p>

                <p className="m-0 mt-8 max-w-[700px] text-base leading-[1.7] text-foreground/60">
                  Scroll through the exploded assembly to reveal the
                  relationship between the tool body, pneumatic components,
                  gripping mechanism, RealSense camera, and interfaces
                  connecting the gripper to the robot.
                </p>
              </div>

            </div>
          </div>

          <ScrollVideo src="/videos/rebargripper.mp4" />
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
                  The tool needed to securely handle long rebar members while
                  maintaining access to the intersections where robotic tying
                  and assembly would occur.
                </p>

                <div className="mt-14 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    Unlike a compact pick-and-place object, a long rebar
                    member amplifies small changes in position and orientation
                    at the gripper. The tool therefore needed to establish a
                    stable connection to the bar while keeping the member
                    predictable during robotic movement.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Clearance around the gripping point was equally important.
                    The end-effector needed to remain compact enough for the
                    held member to approach other bars, connection locations,
                    and the separate robotic wire-tying tool.
                  </p>

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* SECTION 03 — GRIPPING + PNEUMATIC ACTUATION */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">

            {/* FULL-WIDTH VIDEO */}

            <div className="relative aspect-video w-full overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1226107356?autoplay=1&muted=1&loop=1&background=1&autopause=0"
                className="absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Rebar gripping mechanism"
              />
            </div>


            {/* TEXT */}

            <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">
                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Gripping + Pneumatic Actuation
                </h2>
              </div>

              <div className="lg:col-span-9">
                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The gripping geometry locates the rebar along a defined
                  centreline while pneumatic actuation provides the force
                  required to secure the member during movement.
                </p>

                <div className="mt-14 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The jaw profile was designed around the circular section
                    of the rebar. As the gripper closes, the member is guided
                    into a repeatable position rather than being clamped
                    between two unrestricted flat surfaces.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Pneumatic actuation allows the mechanism to remain compact
                    and mechanically simple while providing a rapid gripping
                    action that can be triggered directly within the robotic
                    sequence.
                  </p>

                </div>
              </div>

            </div>

          </div>
        </section>


        {/* SECTION 04 — CAMERA INTEGRATION */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              {/* LEFT — TEXT */}

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Camera Integration
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  An Intel RealSense D435 is integrated directly into the
                  end-effector, allowing the robot to reposition the camera
                  around the physical assembly.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    Mounting the sensor to the robot wrist allows scanning
                    positions to be defined as robot poses rather than relying
                    on a separate fixed camera setup.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The robot can therefore move the RealSense around a
                    connection and capture localized point-cloud data from
                    several viewpoints after assembly.
                  </p>

                </div>
              </div>


              {/* RIGHT — VIDEO */}

              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden">

                  <iframe
                    src="https://player.vimeo.com/video/1226109816?autoplay=1&muted=1&loop=1&background=1&autopause=0"
                    className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title="RealSense camera integration"
                  />

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* SECTION 05 — CAMERA TRANSFORM + ROBOT INTEGRATION */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">

            {/* TEXT */}

            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">
                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Camera Transform + Robot Integration
                </h2>
              </div>

              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The known relationship between the robot, tool, and camera
                  allows each scan to be transformed into the robot base
                  coordinate system.
                </p>

                <div className="mt-14 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The position of the RealSense is defined relative to the
                    gripper frame. As the UR10e moves between scanning poses,
                    the corresponding robot transform is used to reorient each
                    captured point cloud.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    This brings scans captured from different viewpoints into
                    a common coordinate system where they can be aligned with
                    the digital assembly geometry.
                  </p>

                </div>
              </div>

            </div>


            {/* CAMERA TRANSFORM DIAGRAM */}

<div className="mt-10 w-full">

  <div className="relative h-[600px] w-full overflow-visible sm:h-[680px] lg:h-[720px]">

    <Image

      src="/images/cameratransform.png"

      alt="Camera transform between the RealSense sensor and robot coordinate systems"

      fill

      className="scale-[1.45] object-contain"

      sizes="100vw"

      priority

    />

  </div>

</div>

          </div>
        </section>


        {/* SECTION 06 — TOOL BODY + FABRICATION */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              {/* LEFT — TEXT */}

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  06
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Tool Body + Fabrication
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The final end-effector was developed from SLS-printed
                  components through mechanical, pneumatic, and electrical
                  assembly before being tested on the UR10e.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The custom tool components were produced through SLS
                    printing, removed from the powder bed, depowdered, and
                    sandblasted before the mechanical components and
                    pneumatic hardware were assembled.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Electrical connections were soldered and routed through
                    the tool alongside the pneumatic lines and camera
                    hardware. The completed assembly was then mounted to the
                    robot and tested through rebar pickup and placement.
                  </p>

                </div>
              </div>


              {/* RIGHT — FABRICATION VIDEO */}

              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden">

                  <iframe
                    src="https://player.vimeo.com/video/1226107689?autoplay=1&muted=1&loop=1&background=1&autopause=0"
                    className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title="Rebar gripper fabrication and assembly"
                  />

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
                Robotic Wire Tying for Multi-Robot Assembly
              </h2>
            </div>

            <Link
              href="/projects/robotic-wire-tying"
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