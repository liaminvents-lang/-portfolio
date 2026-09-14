'use client';

import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout';

const scanTests = [
  {
    number: '01',
    title: '40° · Single Tie',
    description:
      'The initial configuration uses a single connection between members positioned at 40°. This assembly experienced the greatest post-release movement of the four tested geometries.',
    mean: '64.16',
    rmse: null,
    p95: '136.54',
    base: '/images/40degblank.png',
    before: '/images/40beforerelease.png',
    after: '/images/40afterrelease.png',
    deviation: '/images/40histo.png',
  },
  {
    number: '02',
    title: '50° · Single Tie',
    description:
      'Increasing the assembly angle to 50° improved geometric stability while retaining a single-tie connection. Post-release deviation decreased substantially relative to the 40° condition.',
    mean: '15.93',
    rmse: null,
    p95: '39.99',
    base: '/images/50degblank.png',
    before: '/images/50degbeforerelease.png',
    after: '/images/50degafterrelease.png',
    deviation: '/images/50deghisto.png',
  },
  {
    number: '03',
    title: '60° · Crossing Ties',
    description:
      'Crossing ties introduced additional constraint at the connection. This reduced post-release movement further, demonstrating the importance of tie arrangement in maintaining assembly geometry.',
    mean: '7.47',
    rmse: null,
    p95: '18.20',
    base: '/images/160degblank.png',
    before: '/images/160degbeforerelease.png',
    after: '/images/160degafterrelease.png',
    deviation: '/images/160deghisto.png',
  },
  {
    number: '04',
    title: '60° · Crossing Ties · Varied Z-Plane',
    description:
      'The final condition combined crossing ties with variation in the connection Z-plane. Increasing constraint across multiple orientations produced the most geometrically stable assembly.',
    mean: '2.14',
    rmse: '3.02',
    p95: '6.06',
    base: '/images/260degblank.png',
    before: '/images/260degbeforerelease.png',
    after: '/images/260degafterrelease.png',
    deviation: '/images/260deghisto.png',
  },
];

function DeviationLegend() {
  return (
    <div className="absolute left-full top-0 ml-4 hidden h-full w-[62px] flex-col opacity-80 xl:flex">
      <p className="m-0 mb-3 text-[9px] uppercase tracking-[0.12em] text-foreground/40">
        Deviation
      </p>

      <div className="flex min-h-0 flex-1 gap-2">
        <div
          className="w-[10px] shrink-0"
          style={{
            background:
              'linear-gradient(to bottom, #ef4444 0%, #f97316 12%, #facc15 28%, #22c55e 50%, #22d3ee 72%, #2563eb 100%)',
          }}
        />

        <div className="flex flex-1 flex-col justify-between py-[1px] text-[9px] leading-none text-foreground/50">
          <span>≥ 5.00</span>
          <span>3.75</span>
          <span>2.50</span>
          <span>1.25</span>
          <span>0.00</span>
        </div>
      </div>

      <p className="m-0 mt-2 text-[9px] text-foreground/40">mm</p>
    </div>
  );
}

export default function RoboticWireTyingPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="px-5 pt-24 sm:px-8 lg:px-12 lg:pt-28">
          <div className="mx-auto w-full max-w-[1800px]">
            <Image
              src="/images/rebartie.png"
              alt="Robotic wire tying assembly"
              width={2400}
              height={1500}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="px-5 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-20">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <p className="m-0 text-sm text-foreground/40">
                  Robotic Fabrication + Assembly
                </p>

                <h1 className="m-0 mt-4 max-w-[1100px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  Robotic Wire Tying for Discrete Assembly
                </h1>
              </div>

              <div className="flex items-end lg:col-span-5">
                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  Development and evaluation of a sensor-integrated robotic
                  wire-tying system for automated connection-making.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            METADATA
        ===================================================== */}

        <section className="border-y border-foreground/20 px-5 sm:px-8 lg:px-12">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid grid-cols-2 lg:grid-cols-5">
              <div className="border-r border-foreground/20 py-6 pr-5">
                <p className="m-0 text-xs text-foreground/40">Type</p>
                <p className="m-0 mt-2 text-sm leading-[1.6]">
                  Robotics +
                  <br />
                  Fabrication Research
                </p>
              </div>

              <div className="border-r border-foreground/20 px-5 py-6">
                <p className="m-0 text-xs text-foreground/40">System</p>
                <p className="m-0 mt-2 text-sm leading-[1.6]">
                  Multi-Robot
                  <br />
                  Assembly
                </p>
              </div>

              <div className="border-r border-foreground/20 px-5 py-6">
                <p className="m-0 text-xs text-foreground/40">Process</p>
                <p className="m-0 mt-2 text-sm leading-[1.6]">
                  Wire Tying
                  <br />
                  Connection Testing
                </p>
              </div>

              <div className="border-r border-foreground/20 px-5 py-6">
                <p className="m-0 text-xs text-foreground/40">Analysis</p>
                <p className="m-0 mt-2 text-sm leading-[1.6]">
                  Process Sensing
                  <br />
                  Geometric Deviation
                </p>
              </div>

              <div className="px-5 py-6">
                <p className="m-0 text-xs text-foreground/40">Project</p>
                <p className="m-0 mt-2 text-sm leading-[1.6]">
                  Independent
                  <br />
                  Research
                </p>
              </div>
            </div>

            <div className="grid border-t border-foreground/20 py-6 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-3">
                <p className="m-0 text-xs text-foreground/40">
                  Acknowledgements
                </p>
              </div>

              <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:col-span-9 lg:mt-0 lg:grid-cols-3">
                <p className="m-0 text-sm leading-[1.65]">
                  Nicholas Hoban
                </p>

                <p className="m-0 text-sm leading-[1.65]">
                  Zachary Mollica
                  <br />
                  Rahul Sejpal
                  <br />
                  Brady Peters
                </p>

                <p className="m-0 text-sm leading-[1.65]">
                  Brian Slocum
                  <br />
                  Paul Kozak
                  <br />
                  Anna Geng
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
            01 — RESEARCH CONTEXT
        ===================================================== */}

        <section className="px-5 pb-20 pt-28 sm:px-8 lg:px-12 lg:pb-24 lg:pt-36">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">
                <p className="m-0 text-sm text-foreground/40">01</p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Research Context
                </h2>
              </div>

              <div className="lg:col-span-9">
                <p className="m-0 max-w-[1050px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The research investigates how robotic assembly can move
                  beyond positioning components by integrating
                  connection-making as an active and measurable fabrication
                  process.
                </p>

                <div className="mt-14 grid gap-10 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    Wire tying provides a lightweight connection method capable
                    of joining discrete members without requiring standardized
                    mechanical fasteners or permanent welded connections.
                    Existing manual and automated systems demonstrate the
                    ability to form these ties efficiently.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Existing robotic systems primarily focus on locating and
                    making the tie. This research instead asks how the
                    connection itself can be evaluated, how fabrication
                    parameters influence its performance, and how sensing can
                    provide feedback during the tying process.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            02 — CONNECTION TESTING
        ===================================================== */}

        <section className="px-5 pb-24 pt-14 sm:px-8 lg:px-12 lg:pb-32 lg:pt-20">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <p className="m-0 text-sm text-foreground/40">02</p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Connection Testing
                </h2>
              </div>

              <div className="lg:col-span-8">
                <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Manual testing established the relationship between tie
                  configuration, twist count, and connection performance prior
                  to robotic implementation.
                </p>
              </div>
            </div>

            <div className="mt-20 border-t border-foreground/20 pt-10">
              <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">

                <div className="lg:col-span-4">
                  <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                    Single Tie
                  </p>

                  <h3 className="m-0 mt-3 text-2xl font-normal tracking-tight">
                    Baseline Connection Performance
                  </h3>

                  <p className="m-0 mt-7 text-sm leading-[1.75]">
                    Single-tie specimens were tested to establish a baseline
                    for connection performance. Twist count was varied from two
                    to seven rotations, with peak load and stiffness recorded
                    for each condition.
                  </p>

                  <p className="m-0 mt-5 text-sm leading-[1.75] text-foreground/60">
                    Performance increased up to approximately five rotations.
                    Beyond this point, continued twisting began to damage the
                    wire and reduced connection strength, defining the initial
                    fabrication range carried forward into robotic testing.
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <Image
                    src="/images/singletiegraph.png"
                    alt="Single tie manual connection performance"
                    width={1600}
                    height={1000}
                    className="h-auto w-full object-contain"
                  />
                </div>

                <div className="lg:col-span-4">
                  <video
                    className="aspect-[16/10] w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source
                      src="/videos/single tietest.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>

              </div>
            </div>

            <div className="mt-16 border-t border-foreground/20 pt-10">
              <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">

                <div className="lg:col-span-4">
                  <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                    Double Tie
                  </p>

                  <h3 className="m-0 mt-3 text-2xl font-normal tracking-tight">
                    Increased Connection Capacity
                  </h3>

                  <p className="m-0 mt-7 text-sm leading-[1.75]">
                    Testing was repeated using two ties positioned 90° from one
                    another. The double-tie configuration produced a higher
                    peak load than the single tie, with performance again
                    increasing up to approximately five rotations per tie.
                  </p>

                  <p className="m-0 mt-5 text-sm leading-[1.75] text-foreground/60">
                    Additional twisting beyond five rotations produced visible
                    wire damage and a reduction in connection strength. The
                    double tie therefore provided the strongest and most robust
                    configuration within the tested range.
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <Image
                    src="/images/doubletiegraph.png"
                    alt="Double tie manual connection performance"
                    width={1600}
                    height={1000}
                    className="h-auto w-full object-contain"
                  />
                </div>

                <div className="lg:col-span-4">
                  <video
                    className="aspect-[16/10] w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source
                      src="/videos/doubletietest.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>

              </div>
            </div>

            <div className="mt-20 border-y border-foreground/20 py-10">
              <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">

                <div className="lg:col-span-3">
                  <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                    Selected Configuration
                  </p>

                  <h3 className="m-0 mt-3 text-2xl font-normal tracking-tight">
                    Double Tie
                    <br />
                    5 + 5 Rotations
                  </h3>
                </div>

                <div className="lg:col-span-5">
                  <p className="m-0 text-base leading-[1.7]">
                    The double tie with five rotations per tie was selected for
                    robotic implementation, reaching a peak load of
                    approximately 2.11 kN while providing greater deformation
                    and energy absorption before failure.
                  </p>

                  <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                    The second tie introduces redundancy into the connection,
                    increasing robustness relative to the single-tie
                    configuration.
                  </p>
                </div>

                <div className="grid grid-cols-3 border border-foreground/20 lg:col-span-4">
                  <div className="p-5">
                    <p className="m-0 text-xs text-foreground/40">Peak Load</p>
                    <p className="m-0 mt-3 text-2xl tracking-tight">~2.11</p>
                    <p className="m-0 mt-1 text-xs text-foreground/40">kN</p>
                  </div>

                  <div className="border-x border-foreground/20 p-5">
                    <p className="m-0 text-xs text-foreground/40">Energy</p>
                    <p className="m-0 mt-3 text-2xl tracking-tight">~10.7</p>
                    <p className="m-0 mt-1 text-xs text-foreground/40">J</p>
                  </div>

                  <div className="p-5">
                    <p className="m-0 text-xs text-foreground/40">
                      Failure Disp.
                    </p>
                    <p className="m-0 mt-3 text-2xl tracking-tight">~7.3</p>
                    <p className="m-0 mt-1 text-xs text-foreground/40">mm</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
            03 — CONNECTION-MAKING WORKFLOW
        ===================================================== */}

        <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <p className="m-0 text-sm text-foreground/40">03</p>

                <h2 className="m-0 mt-2 text-3xl font-normal tracking-tight">
                  Connection-Making Workflow
                </h2>
              </div>

              <div className="lg:col-span-8">
                <p className="m-0 max-w-[900px] text-2xl font-normal leading-[1.3] sm:text-3xl">
                  The manual tying process was decomposed into four discrete
                  operations that defined the functional requirements of the
                  robotic end effector.
                </p>

                <p className="m-0 mt-4 max-w-[800px] text-sm leading-[1.7] text-foreground/60">
                  Each operation was translated into a controlled mechanical
                  action, allowing the manual connection sequence to be
                  reproduced through a dedicated robotic tool.
                </p>
              </div>
            </div>

            <div className="mt-8 grid border-y border-foreground/20 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['01', 'Feed Wire', 'Deliver wire around the connection geometry.'],
                ['02', 'Grip', 'Capture and retain the wire ends.'],
                ['03', 'Twist', 'Rotate the wire to form and tighten the tie.'],
                ['04', 'Cut', 'Separate the completed tie from the wire supply.'],
              ].map(([number, title, text], index) => (
                <div
                  key={title}
                  className={`py-4 ${
                    index < 3
                      ? 'border-b border-foreground/20 lg:border-b-0 lg:border-r'
                      : ''
                  } ${
                    index === 0
                      ? 'lg:pr-6'
                      : index === 3
                        ? 'sm:pl-6'
                        : 'sm:px-6'
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <p className="m-0 text-xs text-foreground/40">{number}</p>

                    <h3 className="m-0 text-lg font-normal tracking-tight">
                      {title}
                    </h3>
                  </div>

                  <p className="m-0 mt-2 text-xs leading-[1.55] text-foreground/60">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">

              <div>
                <div className="mb-3 flex items-end justify-between gap-6">
                  <div>
                    <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                      Manual Process
                    </p>

                    <h3 className="m-0 mt-1 text-xl font-normal tracking-tight">
                      Hand Tying
                    </h3>
                  </div>

                  <p className="m-0 text-xs text-foreground/40">
                    Feed → Grip → Twist → Cut
                  </p>
                </div>

                <video
                  className="aspect-video w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/humantying.mp4" type="video/mp4" />
                </video>
              </div>

              <div>
                <div className="mb-3 flex items-end justify-between gap-6">
                  <div>
                    <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                      Robotic Process
                    </p>

                    <h3 className="m-0 mt-1 text-xl font-normal tracking-tight">
                      Automated Tying
                    </h3>
                  </div>

                  <p className="m-0 text-xs text-foreground/40">
                    Feed → Grip → Twist → Cut
                  </p>
                </div>

                <video
                  className="aspect-video w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/robottying.mp4" type="video/mp4" />
                </video>
              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            04 — ROBOTIC TYING TOOL
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <p className="m-0 text-sm text-foreground/40">04</p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Robotic Tying Tool
                </h2>
              </div>

              <div className="lg:col-span-8">
                <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  A custom end effector integrates wire feeding, gripping,
                  twisting, and cutting into a single robotic
                  connection-making system.
                </p>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    The tool translates the sequence established through manual
                    tying into a coordinated set of mechanical operations.
                    Wire is delivered around the connection, retained by the
                    gripping mechanism, twisted to form the tie, and cut once
                    the connection is complete.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Integrating these operations within one end effector allows
                    connection-making to become part of the robotic fabrication
                    sequence rather than a separate manual operation.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14">
              <div className="mb-3 flex items-end justify-between gap-6">
                <div>
                  <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                    End Effector
                  </p>

                  <h3 className="m-0 mt-1 text-xl font-normal tracking-tight">
                    Robotic Wire Tying
                  </h3>
                </div>

                <p className="m-0 text-xs text-foreground/40">
                  Feed → Grip → Twist → Cut
                </p>
              </div>

              <video
                className="aspect-[16/8] w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="/videos/robotrebattying.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

          </div>
        </section>

        {/* =====================================================
            05 — PROCESS SENSING
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <p className="m-0 text-sm text-foreground/40">05</p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Process Sensing
                </h2>
              </div>

              <div className="lg:col-span-8">
                <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Torque sensing was integrated into the end effector to make
                  the mechanical state of the connection visible during the
                  tying process.
                </p>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    A torque sensor positioned within the tying mechanism
                    measures resistance as the wire is progressively tightened.
                    The signal is sampled during rotation and converted into a
                    live torque value that can be monitored while the
                    connection is being formed.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    This adds process-level feedback to an operation that would
                    otherwise be defined only by a fixed number of rotations.
                    The current implementation provides a live readout for
                    observing connection behaviour and establishes the sensing
                    architecture for future closed-loop control.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14">
              <div className="mb-3 flex items-end justify-between gap-6">
                <div>
                  <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                    Live Feedback
                  </p>

                  <h3 className="m-0 mt-1 text-xl font-normal tracking-tight">
                    Torque Readout During Tying
                  </h3>
                </div>

                <p className="m-0 text-xs text-foreground/40">
                  Real-Time Process Measurement
                </p>
              </div>

              <video
                className="aspect-[16/8] w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/C5694_2.mp4" type="video/mp4" />
              </video>
            </div>

          </div>
        </section>

        {/* =====================================================
            06 — ROBOTIC CONNECTION TESTING
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <p className="m-0 text-sm text-foreground/40">06</p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Robotic Connection Testing
                </h2>
              </div>

              <div className="lg:col-span-8">
                <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Robotically produced ties were mechanically tested to
                  determine the fabrication parameters required to reproduce
                  the connection performance established through manual tying.
                </p>
              </div>
            </div>

            <div className="mt-16 border-t border-foreground/20 pt-10">
              <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">

                <div className="lg:col-span-4">
                  <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                    Robotic Tying
                  </p>

                  <h3 className="m-0 mt-3 text-2xl font-normal tracking-tight">
                    Connection Performance
                  </h3>

                  <p className="m-0 mt-7 text-sm leading-[1.75]">
                    Peak load continued to increase through eight rotations,
                    with the highest robotic connection strength recorded at
                    this condition.
                  </p>

                  <p className="m-0 mt-5 text-sm leading-[1.75] text-foreground/60">
                    Stiffness became less consistent at eight rotations,
                    including a sharp reduction in one specimen. Eight
                    rotations therefore represents the strongest tested
                    robotic condition while approaching the upper end of the
                    useful formation range.
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <Image
                    src="/images/roboticconnectionpreformance.png"
                    alt="Robotic tying connection performance"
                    width={1600}
                    height={1000}
                    className="h-auto w-full object-contain"
                  />
                </div>

                <div className="lg:col-span-4">
                  <video
                    className="aspect-[16/10] w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/robotest1.mp4" type="video/mp4" />
                  </video>
                </div>

              </div>
            </div>

            <div className="mt-16 border-y border-foreground/20 py-10">
              <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">

                <div className="lg:col-span-3">
                  <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                    Selected Robotic Parameter
                  </p>

                  <h3 className="m-0 mt-3 text-2xl font-normal tracking-tight">
                    8 Rotations
                  </h3>
                </div>

                <div className="lg:col-span-6">
                  <p className="m-0 text-base leading-[1.7]">
                    Eight rotations were carried forward for subsequent
                    robotic assembly testing because this condition produced
                    the highest measured peak load within the tested robotic
                    range.
                  </p>

                  <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                    The stiffness response indicates that this condition
                    approaches the upper end of the useful formation range.
                    The parameter was therefore selected on the basis of peak
                    strength while recognizing increasing variability in
                    connection behaviour.
                  </p>
                </div>

                <div className="grid grid-cols-2 border border-foreground/20 lg:col-span-3">
                  <div className="p-5">
                    <p className="m-0 text-xs text-foreground/40">
                      Tested Range
                    </p>
                    <p className="m-0 mt-3 text-2xl tracking-tight">5–8</p>
                    <p className="m-0 mt-1 text-xs text-foreground/40">
                      rotations
                    </p>
                  </div>

                  <div className="border-l border-foreground/20 p-5">
                    <p className="m-0 text-xs text-foreground/40">Selected</p>
                    <p className="m-0 mt-3 text-2xl tracking-tight">8</p>
                    <p className="m-0 mt-1 text-xs text-foreground/40">
                      rotations
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-20">
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">

                <div className="lg:col-span-4">
                  <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                    Comparison
                  </p>

                  <h3 className="m-0 mt-3 text-2xl font-normal tracking-tight">
                    Manual vs. Robotic
                  </h3>

                  <p className="m-0 mt-7 text-sm leading-[1.75]">
                    Both processes followed the same overall trend, but the
                    robotic ties required more rotations to reach comparable
                    peak-load performance.
                  </p>

                  <p className="m-0 mt-5 text-sm leading-[1.75] text-foreground/60">
                    Manual ties could be tensioned more tightly during initial
                    formation, while the robotic process generated a wider loop
                    that progressively tightened with additional rotation. By
                    eight rotations, robotic peak-load performance approached
                    the strongest manual ties.
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <div className="grid gap-6 sm:grid-cols-2">

                    <div>
                      <p className="m-0 mb-3 text-xs uppercase tracking-[0.15em] text-foreground/40">
                        Manual Tying
                      </p>

                      <Image
                        src="/images/manualtying.png"
                        alt="Manual tying connection performance"
                        width={1600}
                        height={1000}
                        className="h-auto w-full object-contain"
                      />
                    </div>

                    <div>
                      <p className="m-0 mb-3 text-xs uppercase tracking-[0.15em] text-foreground/40">
                        Robotic Tying
                      </p>

                      <Image
                        src="/images/roboticconnectionpreformance.png"
                        alt="Robotic tying connection performance"
                        width={1600}
                        height={1000}
                        className="h-auto w-full object-contain"
                      />
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
            07 — MULTI-ROBOT WORKSPACE
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <p className="m-0 text-sm text-foreground/40">07</p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Multi-Robot Workspace
                </h2>
              </div>

              <div className="lg:col-span-8">
                <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The validated tying process was integrated into a coordinated
                  multi-robot workspace for member positioning,
                  connection-making, and geometric evaluation.
                </p>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    The assembly workflow distributes tasks between the UR
                    robots and the KUKA system. Members are picked, positioned,
                    and held in relation to the target geometry before the
                    tying robot approaches the connection and executes the
                    fastening sequence.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Component positioning and connection-making operate as
                    dependent stages within a shared robotic workspace,
                    requiring coordinated communication between each robotic
                    system.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <Image
                src="/images/workspacewiretie.png"
                alt="Multi-robot wire tying workspace"
                width={2200}
                height={1200}
                className="h-auto w-full object-contain"
              />
            </div>

            <div className="mt-20 border-t border-foreground/20 pt-10">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">

                <div className="lg:col-span-4">
                  <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                    System Coordination
                  </p>

                  <h3 className="m-0 mt-3 text-2xl font-normal tracking-tight">
                    PLC-Based Robot Handshake
                  </h3>
                </div>

                <div className="lg:col-span-8">
                  <p className="m-0 max-w-[900px] text-base leading-[1.7]">
                    A Schneider Electric Modicon M221 PLC was integrated into
                    the robotic cell to coordinate communication between the UR
                    robots and the KUKA system. The PLC functions as a central
                    traffic controller, determining when each robot can enter
                    the shared workspace and when the assembly sequence can
                    advance.
                  </p>

                  <p className="m-0 mt-5 max-w-[900px] text-base leading-[1.7] text-foreground/60">
                    Digital I/O handshake signals communicate robot states
                    between each controller and the PLC. Each stage must
                    confirm its state before the next operation is enabled,
                    preventing conflicting robot motions within shared regions
                    and coordinating progression through the assembly
                    sequence.
                  </p>
                </div>

              </div>
            </div>

            <div className="mt-20">
              <Image
                src="/images/tiewropkflow.png"
                alt="Multi-robot wire tying workflow"
                width={2200}
                height={900}
                className="h-auto w-full object-contain"
              />
            </div>

            <div className="mt-16">
              <div className="mb-3 flex items-end justify-between gap-6">
                <div>
                  <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                    Full Assembly Process
                  </p>

                  <h3 className="m-0 mt-1 text-xl font-normal tracking-tight">
                    Coordinated Multi-Robot Assembly
                  </h3>
                </div>

                <p className="m-0 text-xs text-foreground/40">
                  Position → Hold → Tie → Release
                </p>
              </div>

              <video
                className="aspect-[16/8] w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/fullproccess.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="mt-20 border-t border-foreground/20 pt-10">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">

                <div className="lg:col-span-4">
                  <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                    Member Positioning
                  </p>

                  <h3 className="m-0 mt-3 text-2xl font-normal tracking-tight">
                    Rebar Gripper
                  </h3>
                </div>

                <div className="lg:col-span-8">
                  <p className="m-0 max-w-[900px] text-base leading-[1.7]">
                    A separate robotic gripper was developed for the UR10e
                    systems to pick, position, and maintain the fiberglass
                    members during connection-making.
                  </p>

                  <Link
                    href="/projects/rebar-gripper"
                    className="mt-7 inline-flex items-center gap-3 border-b border-foreground/40 pb-1 text-sm transition-opacity hover:opacity-50"
                  >
                    View Rebar Gripper Project
                    <span>↗</span>
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
            08 — RE-DIGITIZATION + GEOMETRIC ANALYSIS
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <p className="m-0 text-sm text-foreground/40">08</p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Re-Digitization + Geometric Analysis
                </h2>
              </div>

              <div className="lg:col-span-8">
                <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  Completed assemblies were re-digitized to measure how
                  connection geometry influenced stability after robotic
                  positioning was released.
                </p>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <p className="m-0 text-base leading-[1.7]">
                    An Intel RealSense D435 was integrated into the robotic
                    workflow to capture the assembly while the members were
                    held in position and again after release. Multiple scans
                    were transformed into a common coordinate system and merged
                    into a combined point cloud.
                  </p>

                  <p className="m-0 text-base leading-[1.7] text-foreground/60">
                    Comparing the held and released states allowed geometric
                    movement to be quantified independently from mechanical
                    connection strength. Nearest-neighbour comparison between
                    the merged point clouds was used to calculate deviation.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 grid items-start gap-10 lg:grid-cols-2">

              <div>
                <p className="m-0 mb-3 text-xs uppercase tracking-[0.15em] text-foreground/40">
                  Robotic Scanning
                </p>

                <div className="flex min-h-[420px] items-center justify-center">
                  <Image
                    src="/images/pointcloud.png"
                    alt="Point cloud captured during robotic scanning"
                    width={1800}
                    height={1200}
                    className="h-auto max-h-[520px] w-full object-contain"
                  />
                </div>

                <p className="m-0 mt-4 max-w-[700px] text-sm leading-[1.7] text-foreground/60">
                  Multiple scans capture the members, robot tooling, and
                  surrounding workspace. Individual scans are transformed and
                  merged to reconstruct the assembly within a shared reference
                  frame.
                </p>
              </div>

              <div>
                <p className="m-0 mb-3 text-xs uppercase tracking-[0.15em] text-foreground/40">
                  Camera Alignment
                </p>

                <div className="flex min-h-[420px] items-center justify-center">
                  <Image
                    src="/images/cameraalingment.png"
                    alt="Intel RealSense camera alignment and robotic scanning path"
                    width={1800}
                    height={1200}
                    className="h-auto max-h-[520px] w-full object-contain"
                  />
                </div>

                <p className="m-0 mt-4 max-w-[700px] text-sm leading-[1.7] text-foreground/60">
                  The camera is mounted to the UR10e and moved through a
                  sequence of scan poses around the assembly center point. The
                  camera plane is transformed relative to the robot TCP so each
                  scan can be reconstructed within the robot coordinate system.
                </p>
              </div>

            </div>

            <div className="mt-20 border-t border-foreground/20 pt-10">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">

                <div className="lg:col-span-4">
                  <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                    Scan Sequence
                  </p>

                  <h3 className="m-0 mt-3 text-2xl font-normal tracking-tight">
                    Held Geometry to Released Geometry
                  </h3>
                </div>

                <div className="lg:col-span-8">
                  <div className="grid border-y border-foreground/20 sm:grid-cols-3">

                    <div className="border-b border-foreground/20 py-5 sm:border-b-0 sm:border-r sm:pr-6">
                      <p className="m-0 text-xs text-foreground/40">01</p>
                      <h4 className="m-0 mt-2 text-lg font-normal tracking-tight">
                        Scan Held
                      </h4>
                      <p className="m-0 mt-2 text-xs leading-[1.6] text-foreground/60">
                        Capture the assembly while robotic positioning maintains
                        the target geometry.
                      </p>
                    </div>

                    <div className="border-b border-foreground/20 py-5 sm:border-b-0 sm:border-r sm:px-6">
                      <p className="m-0 text-xs text-foreground/40">02</p>
                      <h4 className="m-0 mt-2 text-lg font-normal tracking-tight">
                        Release
                      </h4>
                      <p className="m-0 mt-2 text-xs leading-[1.6] text-foreground/60">
                        Remove robotic constraint and allow the tied assembly
                        to settle under its connection geometry.
                      </p>
                    </div>

                    <div className="py-5 sm:pl-6">
                      <p className="m-0 text-xs text-foreground/40">03</p>
                      <h4 className="m-0 mt-2 text-lg font-normal tracking-tight">
                        Compare
                      </h4>
                      <p className="m-0 mt-2 text-xs leading-[1.6] text-foreground/60">
                        Re-scan and calculate deviation between the aligned held
                        and released point clouds.
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {scanTests.map((test, index) => (
              <div
                key={test.number}
                className={`border-t border-foreground/20 pt-10 ${
                  index === 0 ? 'mt-24' : 'mt-20'
                }`}
              >
                <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-10">

                  <div className="lg:col-span-3">
                    <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                      Test {test.number}
                    </p>

                    <h3 className="m-0 mt-3 text-2xl font-normal tracking-tight">
                      {test.title}
                    </h3>

                    <p className="m-0 mt-6 max-w-[360px] text-sm leading-[1.75] text-foreground/60">
                      {test.description}
                    </p>

                    <div
                      className={`mt-8 grid gap-5 ${
                        test.rmse ? 'grid-cols-3' : 'grid-cols-2'
                      }`}
                    >
                      <div>
                        <p className="m-0 text-xs text-foreground/40">Mean</p>
                        <p className="m-0 mt-1 text-2xl tracking-tight">
                          {test.mean}
                        </p>
                        {test.rmse && (
                          <p className="m-0 text-xs text-foreground/40">mm</p>
                        )}
                      </div>

                      {test.rmse && (
                        <div>
                          <p className="m-0 text-xs text-foreground/40">RMSE</p>
                          <p className="m-0 mt-1 text-2xl tracking-tight">
                            {test.rmse}
                          </p>
                          <p className="m-0 text-xs text-foreground/40">mm</p>
                        </div>
                      )}

                      <div>
                        <p className="m-0 text-xs text-foreground/40">P95</p>
                        <p className="m-0 mt-1 text-2xl tracking-tight">
                          {test.p95}
                        </p>
                        {test.rmse && (
                          <p className="m-0 text-xs text-foreground/40">mm</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-9 xl:pr-20">
                    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

                      <div>
                        <p className="m-0 mb-3 text-xs text-foreground/40">
                          Base Geometry
                        </p>

                        <div className="relative aspect-[4/5] w-full overflow-hidden">
                          <Image
                            src={test.base}
                            alt={`${test.title} base geometry`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <div>
                        <p className="m-0 mb-3 text-xs text-foreground/40">
                          Before Release
                        </p>

                        <div className="relative aspect-[4/5] w-full overflow-hidden">
                          <Image
                            src={test.before}
                            alt={`${test.title} before release`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <div>
                        <p className="m-0 mb-3 text-xs text-foreground/40">
                          After Release
                        </p>

                        <div className="relative aspect-[4/5] w-full overflow-hidden">
                          <Image
                            src={test.after}
                            alt={`${test.title} after release`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <div>
                        <p className="m-0 mb-3 text-xs text-foreground/40">
                          Geometric Deviation
                        </p>

                        <div className="relative">
                          <div className="relative aspect-[4/5] w-full overflow-hidden">
                            <Image
                              src={test.deviation}
                              alt={`${test.title} geometric deviation`}
                              fill
                              className="object-contain"
                            />
                          </div>

                          <DeviationLegend />
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            ))}

            <div className="mt-24 border-y border-foreground/20 py-12">
              <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">

                <div className="lg:col-span-3">
                  <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                    Best Performing Geometry
                  </p>

                  <h3 className="m-0 mt-3 text-2xl font-normal tracking-tight">
                    60° Crossing Ties
                    <br />
                    Varied Z-Plane
                  </h3>
                </div>

                <div className="lg:col-span-5">
                  <p className="m-0 text-base leading-[1.7]">
                    Post-release deviation decreased as connection geometry
                    introduced greater constraint. The final crossing-tie
                    configuration reduced mean deviation from 64.16 mm to
                    2.14 mm.
                  </p>

                  <p className="m-0 mt-4 text-sm leading-[1.7] text-foreground/60">
                    More importantly, the same measurement workflow establishes
                    a baseline for evaluating future connections. New tie
                    patterns, fastening systems, materials, and connection
                    geometries can be compared using the same sequence of
                    robotic positioning, scanning, release, and geometric
                    deviation analysis.
                  </p>
                </div>

                <div className="grid grid-cols-3 border border-foreground/20 lg:col-span-4">
                  <div className="p-5">
                    <p className="m-0 text-xs text-foreground/40">Mean</p>
                    <p className="m-0 mt-3 text-2xl tracking-tight">2.14</p>
                    <p className="m-0 mt-1 text-xs text-foreground/40">mm</p>
                  </div>

                  <div className="border-x border-foreground/20 p-5">
                    <p className="m-0 text-xs text-foreground/40">RMSE</p>
                    <p className="m-0 mt-3 text-2xl tracking-tight">3.02</p>
                    <p className="m-0 mt-1 text-xs text-foreground/40">mm</p>
                  </div>

                  <div className="p-5">
                    <p className="m-0 text-xs text-foreground/40">P95</p>
                    <p className="m-0 mt-3 text-2xl tracking-tight">6.06</p>
                    <p className="m-0 mt-1 text-xs text-foreground/40">mm</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
            END HERO
        ===================================================== */}

        <section className="w-full">
          <Image
            src="/images/heroend.jpg"
            alt="Completed robotic wire tying assembly"
            width={2400}
            height={1500}
            className="h-auto w-full object-cover"
          />
        </section>

        {/* =====================================================
            09 — OUTLOOK
        ===================================================== */}

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <p className="m-0 text-sm text-foreground/40">09</p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight">
                  Outlook
                </h2>
              </div>

              <div className="lg:col-span-8">
                <p className="m-0 max-w-[1000px] text-3xl font-normal leading-[1.25] sm:text-4xl">
                  The system points toward robotic connection-making as part of
                  a more adaptive architectural fabrication workflow for
                  producing non-standard reinforcement, spatial frameworks, and
                  complex building assemblies.
                </p>

                <p className="m-0 mt-8 max-w-[900px] text-base leading-[1.7] text-foreground/60">
                  Rather than treating tying as a repetitive operation applied
                  to standardized cages, robotic positioning and connection
                  control could allow reinforcement to respond directly to
                  changing structural and geometric requirements within a
                  digital model.
                </p>
              </div>
            </div>

            <div className="mt-16 grid border-y border-foreground/20 sm:grid-cols-2">

              <div className="border-b border-foreground/20 p-8 sm:border-r lg:p-10">
                <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                  On-Demand Reinforcement
                </p>

                <h3 className="m-0 mt-4 max-w-[650px] text-2xl font-normal tracking-tight">
                  Custom Rebar Cages for Non-Standard Geometry
                </h3>

                <p className="m-0 mt-6 max-w-[650px] text-base leading-[1.7]">
                  Multi-robot positioning and automated tying could support
                  reinforcement cages generated directly from project-specific
                  geometry rather than relying only on repetitive orthogonal
                  layouts. Member angle, connection location, and tie
                  orientation could vary across the assembly in response to
                  structural and architectural requirements.
                </p>
              </div>

              <div className="border-b border-foreground/20 p-8 lg:p-10">
                <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                  Mass Customization
                </p>

                <h3 className="m-0 mt-4 max-w-[650px] text-2xl font-normal tracking-tight">
                  Geometry-Specific Fabrication
                </h3>

                <p className="m-0 mt-6 max-w-[650px] text-base leading-[1.7]">
                  Because each connection is computationally defined rather
                  than mechanically fixed by a dedicated jig, the same robotic
                  system could fabricate families of unique assemblies without
                  requiring a new production setup for every geometry. This
                  creates a path toward low-volume or one-off reinforcement
                  systems for geometrically complex buildings.
                </p>
              </div>

              <div className="border-b border-foreground/20 p-8 sm:border-b-0 sm:border-r lg:p-10">
                <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                  Robotic Construction
                </p>

                <h3 className="m-0 mt-4 max-w-[650px] text-2xl font-normal tracking-tight">
                  Integration with Additive Construction
                </h3>

                <p className="m-0 mt-6 max-w-[650px] text-base leading-[1.7]">
                  A future workflow could coordinate reinforcement assembly
                  with robotic concrete or material extrusion. Reinforcing
                  members could be positioned and tied as a structure is
                  printed, allowing reinforcement geometry and deposited
                  material to develop together rather than treating the cage as
                  a completely separate prefabricated system.
                </p>
              </div>

              <div className="p-8 lg:p-10">
                <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                  Closed-Loop Fabrication
                </p>

                <h3 className="m-0 mt-4 max-w-[650px] text-2xl font-normal tracking-tight">
                  Connections that Respond to Fabrication
                </h3>

                <p className="m-0 mt-6 max-w-[650px] text-base leading-[1.7]">
                  Torque sensing and geometric re-digitization provide two
                  levels of feedback: local information about how the tie is
                  forming and global information about how the assembly moves
                  after release. Combining these measurements could allow future
                  systems to adapt tie parameters, add connections, or modify
                  assembly geometry in response to measured fabrication
                  behaviour.
                </p>
              </div>

            </div>

            <div className="mt-20 border-t border-foreground/20 pt-12">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">

                <div className="lg:col-span-4">
                  <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                    Architectural Application
                  </p>

                  <h3 className="m-0 mt-3 text-2xl font-normal tracking-tight">
                    From Connection Tool
                    <br />
                    to Fabrication System
                  </h3>
                </div>

                <div className="lg:col-span-8">
                  <p className="m-0 max-w-[1000px] text-2xl font-normal leading-[1.35] sm:text-3xl">
                    The longer-term opportunity is not simply automating a
                    conventional rebar tie, but using robotic
                    connection-making as a flexible fabrication operation that
                    enables assemblies whose geometry would be difficult to
                    produce through conventional prefabrication.
                  </p>

                  <p className="m-0 mt-7 max-w-[900px] text-base leading-[1.7] text-foreground/60">
                    In this context, the end effector, multi-robot coordination,
                    process sensing, and re-digitization workflow become parts
                    of a larger architectural production system capable of
                    moving continuously between digital geometry, physical
                    assembly, measurement, and corrective fabrication.
                  </p>

                  <p className="m-0 mt-5 max-w-[900px] text-base leading-[1.7] text-foreground/60">
                    The same framework could extend beyond wire tying to other
                    robotic connection methods, creating a common baseline for
                    testing how discrete components are joined, how those
                    connections perform, and how complete assemblies retain
                    their intended geometry.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
            RELATED TOOLS
        ===================================================== */}

        <section className="px-5 pb-10 pt-6 sm:px-8 lg:px-12 lg:pb-12 lg:pt-8">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="border-t border-foreground/20 pt-8">
              <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                Related Tools
              </p>

              <div className="mt-6 grid border-y border-foreground/20 sm:grid-cols-2">

                <Link
                  href="/projects/rebar-tying-tool"
                  className="group border-b border-foreground/20 py-7 transition-opacity hover:opacity-50 sm:border-b-0 sm:border-r sm:pr-8"
                >
                  <p className="m-0 text-xs text-foreground/40">
                    End Effector
                  </p>

                  <div className="mt-3 flex items-end justify-between gap-6">
                    <h3 className="m-0 text-2xl font-normal tracking-tight">
                      Robotic Tying Tool
                    </h3>

                    <span className="text-xl">↗</span>
                  </div>
                </Link>

                <Link
                  href="/projects/rebar-gripper"
                  className="group py-7 transition-opacity hover:opacity-50 sm:pl-8"
                >
                  <p className="m-0 text-xs text-foreground/40">
                    Positioning Tool
                  </p>

                  <div className="mt-3 flex items-end justify-between gap-6">
                    <h3 className="m-0 text-2xl font-normal tracking-tight">
                      Rebar Gripper
                    </h3>

                    <span className="text-xl">↗</span>
                  </div>
                </Link>

              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
            ALL PROJECTS
        ===================================================== */}

        <section className="px-5 pb-8 sm:px-8 lg:px-12 lg:pb-10">
          <div className="mx-auto w-full max-w-[1800px]">

            <Link
              href="/projects"
              className="group flex items-end justify-between gap-8 border-t border-foreground/20 pt-8 transition-opacity hover:opacity-50"
            >
              <div>
                <p className="m-0 text-xs uppercase tracking-[0.15em] text-foreground/40">
                  Portfolio
                </p>

                <h2 className="m-0 mt-3 text-3xl font-normal tracking-tight sm:text-4xl">
                  View All Projects
                </h2>
              </div>

              <span className="text-3xl sm:text-4xl">↗</span>
            </Link>

          </div>
        </section>

      </main>
    </Layout>
  );
}