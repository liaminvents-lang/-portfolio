'use client';

import Layout from '@/components/layout';
import ScrollVideo from '@/components/projects/ScrollVideo';
import Link from 'next/link';

export default function SteamBendingGripperPage() {
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
                  Robotic Bending Gripper
                </h1>
              </div>

              <div className="flex items-end lg:col-span-5">
                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A custom robotic end-effector developed to constrain,
                  manipulate, and control timber during formwork-free
                  robotic steam bending.
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
        KUKA KR150
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
        Control
      </p>

      <p className="m-0 mt-2 text-sm">
        KUKA|prc / Omron PLC
      </p>
    </div>

    <div className="px-5 py-6">
  <p className="m-0 text-xs text-foreground/40">
    Fabrication
  </p>

  <p className="m-0 mt-2 text-sm leading-[1.6]">
    SLS Nylon 3D Printing
    <br />
    CNC Milling
    <br />
    Waterjet Cutting
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
                  The gripper combines a set of mechanical components into
                  a single robotic tool designed around the constraints of
                  steam-bent timber.
                </p>

                <p className="m-0 mt-8 max-w-[700px] text-base leading-[1.7] text-foreground/60">
                  Scroll through the exploded assembly to reveal the
                  relationship between the tool body, gripping components,
                  actuation system, and interfaces connecting the gripper
                  to the robot.
                </p>
              </div>

            </div>
          </div>

          <ScrollVideo src="/videos/gripperexlpodedani.mp4" />
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
                  The tool needed to hold steamed timber securely while
                  still allowing the material to bend, rotate, and respond
                  naturally during robotic manipulation.
                </p>

                <div className="mt-14 grid gap-10 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    Unlike conventional rigid fixturing, the end-effector
                    needed to transfer force into the timber without
                    completely constraining its material response. This
                    required balancing grip strength, contact geometry,
                    clearance, and freedom of movement.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The gripper was therefore developed alongside the larger
                    fabrication workflow, with the tool geometry responding
                    to both the robotic bending path and the physical
                    behaviour observed during steam-bending tests.
                  </p>

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* SECTION 03 — CLAMPING + FORCE DISTRIBUTION */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              {/* LEFT — DIAGRAM / IMAGE */}

              <div className="lg:col-span-6">
                <div className="flex aspect-[4/3] w-full items-center justify-center border border-foreground/20 bg-foreground/[0.02]">
                  <p className="text-sm text-foreground/30">
                    Clamping assembly diagram / image
                  </p>
                </div>
              </div>

              {/* RIGHT — TEXT */}

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  03
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Clamping + Force Distribution
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The gripper was designed around the flat face of the
                  timber, maximizing contact area while maintaining a secure
                  connection throughout bending.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The clamping surface was constructed as a three-part
                    assembly. A milled aluminum plate formed the structural
                    connection to the gripper, a CNC-milled marine plywood
                    plate extended the clamping surface along the timber,
                    and a rubber layer created the final interface with the
                    wood.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Each material performed a specific role within the
                    assembly: aluminum provided rigidity, marine plywood
                    created a lightweight and replaceable contact plate, and
                    rubber increased friction while accommodating small
                    variations in the timber surface. Together, the system
                    could securely grip the steamed wood without relying on
                    highly concentrated clamping forces.
                  </p>

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* SECTION 04 — MOTION + ACTUATION */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              {/* LEFT — TEXT */}

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  04
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Motion + Actuation
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Pneumatic actuation was selected to create a compact
                  parallel gripping system capable of applying controlled
                  clamping force across the extended contact surface.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    Each gripper assembly combines two pneumatic cylinders
                    with two linear rails. The cylinders provide the linear
                    actuation required to open and close the gripping
                    mechanism, while their arrangement allows the hardware
                    to remain compact around the central tool body.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The linear rails independently guide the moving
                    assemblies, constraining their motion to a single axis
                    and maintaining alignment throughout the stroke. This
                    separates guidance from actuation so the cylinders
                    primarily provide clamping force rather than resisting
                    lateral loads.
                  </p>

                </div>
              </div>

              {/* RIGHT — DIAGRAM / IMAGE */}

              <div className="lg:col-span-6">
                <div className="flex aspect-[4/3] w-full items-center justify-center border border-foreground/20 bg-foreground/[0.02]">
                  <p className="text-sm text-foreground/30">
                    Pneumatic cylinder + linear rail diagram / image
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* SECTION 05 — PNEUMATIC CONTROL */}

        <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              {/* LEFT — DIAGRAM / IMAGE */}

              <div className="lg:col-span-6">
                <div className="flex aspect-[4/3] w-full items-center justify-center border border-foreground/20 bg-foreground/[0.02]">
                  <p className="text-sm text-foreground/30">
                    Pneumatic control + PLC diagram / image
                  </p>
                </div>
              </div>

              {/* RIGHT — TEXT */}

              <div className="lg:col-span-6">
                <p className="m-0 text-sm text-foreground/40">
                  05
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Pneumatic Control + PLC Integration
                </h2>

                <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Pneumatic actuation was integrated into the robotic
                  workflow through a 24 V bidirectional solenoid valve
                  controlled directly by the PLC.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The solenoid controls the direction of compressed air
                    supplied to the pneumatic cylinders, switching between
                    extension and retraction to open and close the gripper.
                    This provides a direct electrical interface between the
                    pneumatic system and the digital control architecture.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Connecting the valve to the PLC allowed each gripping
                    action to be coordinated with the robotic bending
                    sequence. The gripper could therefore open, close, and
                    release at defined stages of the automated fabrication
                    workflow.
                  </p>

                </div>
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
                  The tool combines custom SLS-printed nylon components with
                  waterjet-cut aluminum plates to create a compact structural
                  assembly around the pneumatic mechanism.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 text-base leading-[1.7]">
                    The custom gripper bodies and spacers were fabricated on
                    a FUSE+ SLS printer using nylon powder. Designing these
                    components specifically around the cylinders, linear
                    rails, pneumatic fittings, and mounting hardware allowed
                    the mechanical systems to be packaged directly into the
                    geometry of the tool.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    The aluminum top and bottom plates were waterjet cut,
                    then hand-finished, chamfered, and tapped. These plates
                    create the structural interface between the gripper
                    assemblies and the robot&apos;s quick-change plate while
                    also locating and securing the remaining components of
                    the gripper.
                  </p>

                </div>
              </div>

              {/* RIGHT — EXPLODED ASSEMBLY */}

              <div className="lg:col-span-6">
                <div className="flex aspect-[4/3] w-full items-center justify-center border border-foreground/20 bg-foreground/[0.02]">
                  <p className="text-sm text-foreground/30">
                    Complete exploded assembly diagram
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 07 — WORKFLOW ADAPTATION */}

<section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
  <div className="mx-auto w-full max-w-[1800px]">
    <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

      {/* LEFT — DIAGRAM / IMAGE */}

      <div className="lg:col-span-6">
        <div className="flex aspect-[4/3] w-full items-center justify-center border border-foreground/20 bg-foreground/[0.02]">
          <p className="text-sm text-foreground/30">
            Compression strap + final gripper configuration
          </p>
        </div>
      </div>

      {/* RIGHT — TEXT */}

      <div className="lg:col-span-6">
        <p className="m-0 text-sm text-foreground/40">
          07
        </p>

        <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
          Workflow Adaptation + Compression Strap
        </h2>

        <p className="m-0 mt-10 max-w-[800px] text-3xl font-normal leading-[1.25] sm:text-4xl">
          As the steam-bending workflow developed, the introduction of a
          compression strap changed how the timber needed to be held and
          required the gripper to adapt around the new assembly.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">

          <p className="m-0 text-base leading-[1.7]">
            The compression strap was introduced to support the timber
            during bending and reduce material failure. This added a new
            physical layer around the workpiece, meaning the gripper could
            no longer interact with the timber in the same way as the
            original configuration.
          </p>

          <div>
            <p className="m-0 text-base leading-[1.7] text-foreground/60">
              The final gripper configuration was therefore designed to grip
              the assembly at the centre of the compression strap. This
              maintained a stable connection to the workpiece while allowing
              the strap and timber to function together as a single bending
              assembly throughout robotic manipulation.
            </p>

            <Link
              href="/projects/compression-strap"
              className="mt-8 inline-block border-b border-foreground pb-1 text-sm transition-opacity hover:opacity-50"
            >
              View Compression Strap ↗
            </Link>
          </div>

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