'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import SteamBendGrid from '../project/SteamBendGrid';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';

export default function RoboticSteamBendingPage() {
  const metricsRef = useRef<HTMLDivElement>(null);

  const metric45Ref = useRef<HTMLSpanElement>(null);
  const metric75Ref = useRef<HTMLSpanElement>(null);
  const metric90Ref = useRef<HTMLSpanElement>(null);
  const metric3Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const metrics = metricsRef.current;

    if (!metrics) return;

    let hasAnimated = false;
    const animationFrames: number[] = [];

    const animateNumber = (
      element: HTMLSpanElement | null,
      target: number,
      duration: number,
      formatter: (value: number) => string,
      delay = 0
    ) => {
      if (!element) return;

      const timeout = window.setTimeout(() => {
        const startTime = performance.now();

        const update = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.round(target * eased);

          element.textContent = formatter(value);

          if (progress < 1) {
            const frame = requestAnimationFrame(update);
            animationFrames.push(frame);
          } else {
            element.textContent = formatter(target);
          }
        };

        const frame = requestAnimationFrame(update);
        animationFrames.push(frame);
      }, delay);

      return timeout;
    };

    let timeouts: number[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          const timeout45 = animateNumber(
            metric45Ref.current,
            43,
            1500,
            (value) => `≈${value} mm`,
            0
          );

          const timeout75 = animateNumber(
            metric75Ref.current,
            38,
            1500,
            (value) => `≈${value} mm`,
            100
          );

          const timeout90 = animateNumber(
            metric90Ref.current,
            25,
            1500,
            (value) => `≈${value} mm`,
            200
          );

          const timeout3 = animateNumber(
            metric3Ref.current,
            3,
            1200,
            (value) => `${value} × ${value}`,
            300
          );

          timeouts = [
            timeout45,
            timeout75,
            timeout90,
            timeout3,
          ].filter(
            (timeout): timeout is number =>
              timeout !== undefined
          );

          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(metrics);

    return () => {
      observer.disconnect();

      timeouts.forEach((timeout) => {
        window.clearTimeout(timeout);
      });

      animationFrames.forEach((frame) => {
        cancelAnimationFrame(frame);
      });
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">

      {/* =====================================================
          HERO IMAGE
      ===================================================== */}

      <section className="px-4 pt-20 sm:px-8 sm:pt-32 lg:px-12">
        <div className="mx-auto w-full max-w-[1800px]">

          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/8.2]">
            <Image
              src="/images/acadiamainpage.jpg"
              alt="Robotic steam bending research"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

        </div>
      </section>

      {/* =====================================================
          PROJECT INTRO
      ===================================================== */}

      <section className="px-4 pb-10 pt-10 sm:px-8 sm:pb-12 sm:pt-16 lg:px-12 lg:pb-14 lg:pt-20">

        <div className="mx-auto grid w-full max-w-[1800px] gap-7 sm:gap-10 lg:grid-cols-12 lg:gap-10">

          <div className="lg:col-span-5">

            <p className="m-0 text-[11px] text-foreground/40 sm:text-sm">
              Research Project
            </p>

            <h1 className="m-0 mt-2 max-w-[900px] text-[38px] font-normal leading-[0.95] tracking-tight sm:mt-4 sm:text-6xl lg:text-7xl">

              Material Feedback in

              <br className="hidden sm:block" />

              <span className="sm:hidden"> </span>

              Robotic Steam

              <br className="hidden sm:block" />

              <span className="sm:hidden"> </span>

              Bending

            </h1>

          </div>

          <div className="lg:col-span-7 lg:pt-7">

            <p className="m-0 max-w-[900px] text-[19px] font-normal leading-[1.3] sm:text-3xl sm:leading-[1.35]">
              A quantitative approach to formwork-free robotic steam
              bending through computational path planning, sensing,
              re-digitization, and material feedback.
            </p>

            <div className="mt-5 flex max-w-[900px] flex-wrap gap-x-[0.35em] gap-y-1 text-[11px] leading-[1.55] text-foreground/60 sm:mt-8 sm:text-sm sm:leading-[1.7]">

              <span className="whitespace-nowrap">
                Olivia Carson,
              </span>

              <span className="whitespace-nowrap">
                Liam Cassano,
              </span>

              <span className="whitespace-nowrap">
                Karina Craig,
              </span>

              <span className="whitespace-nowrap">
                Micha Fairfax-Angood,
              </span>

              <span className="whitespace-nowrap">
                Nicholas Hoban,
              </span>

              <span className="whitespace-nowrap">
                Maria Yablonina
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROJECT METADATA
      ===================================================== */}

      <section className="border-t border-foreground/20 px-4 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-9">

        <div className="mx-auto grid w-full max-w-[1800px] grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-6">

          <div>
            <p className="m-0 text-[10px] text-foreground/40 sm:text-xs">
              Robotics
            </p>

            <p className="m-0 mt-2 text-[12px] leading-[1.35] sm:mt-3 sm:text-sm sm:leading-[1.4]">
              KUKA KR150
              <br />
              UR10e
            </p>
          </div>

          <div>
            <p className="m-0 text-[10px] text-foreground/40 sm:text-xs">
              Computation
            </p>

            <p className="m-0 mt-2 text-[12px] leading-[1.35] sm:mt-3 sm:text-sm sm:leading-[1.4]">
              Rhino
              <br />
              Grasshopper
            </p>
          </div>

          <div>
            <p className="m-0 text-[10px] text-foreground/40 sm:text-xs">
              Robot Control
            </p>

            <p className="m-0 mt-2 text-[12px] leading-[1.35] sm:mt-3 sm:text-sm sm:leading-[1.4]">
              KUKA|prc
            </p>
          </div>

          <div>
            <p className="m-0 text-[10px] text-foreground/40 sm:text-xs">
              Simulation + Optimization
            </p>

            <p className="m-0 mt-2 text-[12px] leading-[1.35] sm:mt-3 sm:text-sm sm:leading-[1.4]">
              Kangaroo
              <br />
              Galapagos
            </p>
          </div>

          <div>
            <p className="m-0 text-[10px] text-foreground/40 sm:text-xs">
              Sensing + Scanning
            </p>

            <p className="m-0 mt-2 text-[12px] leading-[1.35] sm:mt-3 sm:text-sm sm:leading-[1.4]">
              HTC Vive Tracker
              <br />
              EinScan Pro 2X
            </p>
          </div>

          <div>
            <p className="m-0 text-[10px] text-foreground/40 sm:text-xs">
              Materials Tested
            </p>

            <p className="m-0 mt-2 text-[12px] leading-[1.35] sm:mt-3 sm:text-sm sm:leading-[1.4]">
              Ash
              <br />
              White Oak
              <br />
              Red Oak
            </p>
          </div>

        </div>

      </section>

      {/* =====================================================
          01 RESEARCH QUESTION
      ===================================================== */}

      <section className="border-t border-foreground/20 px-4 py-16 sm:px-8 sm:py-28 lg:px-12 lg:py-40">

        <div className="mx-auto grid w-full max-w-[1800px] gap-8 sm:gap-16 lg:grid-cols-12 lg:gap-12">

          <div className="lg:col-span-3">

            <p className="m-0 text-[11px] text-foreground/40 sm:text-sm">
              01
            </p>

            <h2 className="m-0 mt-2 text-[24px] font-normal tracking-tight sm:mt-3 sm:text-3xl">
              Research Question
            </h2>

          </div>

          <div className="lg:col-span-9">

            <p className="m-0 max-w-[1200px] text-[28px] font-normal leading-[1.08] tracking-tight sm:text-5xl sm:leading-[1.12] lg:text-6xl">
              Can computational path planning and empirical material data
              enable accurate, repeatable, and formwork-free robotic steam
              bending?
            </p>

            <div className="mt-8 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-8">

              <p className="m-0 max-w-[620px] text-[14px] leading-[1.6] sm:text-base sm:leading-[1.7]">
                Conventional steam bending typically relies on rigid
                moulds or formwork to constrain the material during
                shaping. This works well for repeated components, but
                becomes inefficient when every member requires a unique
                curvature.
              </p>

              <p className="m-0 max-w-[620px] text-[14px] leading-[1.6] text-foreground/60 sm:text-base sm:leading-[1.7]">
                This research investigates whether robotic control and
                material feedback can replace fixed formwork with a
                digitally controlled bending process capable of producing
                varied geometries.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ANIMATED WOOD DIVIDER
      ===================================================== */}

      <SteamBendGrid />

      {/* =====================================================
          02 MANUAL TESTING + MATERIAL SELECTION
      ===================================================== */}

      <section className="px-4 py-16 sm:px-8 sm:py-28 lg:px-12 lg:py-40">

        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid gap-8 sm:gap-16 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-3">

              <p className="m-0 text-[11px] text-foreground/40 sm:text-sm">
                02
              </p>

              <h2 className="m-0 mt-2 text-[24px] font-normal tracking-tight sm:mt-3 sm:text-3xl">
                Manual Testing +
                <br />
                Material Selection
              </h2>

            </div>

            <div className="lg:col-span-9">

              <p className="m-0 max-w-[1100px] text-[24px] font-normal leading-[1.2] sm:text-4xl sm:leading-[1.25]">
                Early physical testing established material behaviour, bending
                limits, and fabrication requirements before transferring the
                process to robotic control.
              </p>

              <div className="mt-8 grid gap-7 sm:mt-14 sm:grid-cols-2 sm:gap-10">

                <div>

                  <p className="m-0 text-[14px] leading-[1.6] sm:text-base sm:leading-[1.7]">
                    Ash, white oak, and red oak were tested through repeated
                    manual steam-bending experiments. A custom steam chamber
                    was designed and fabricated to prepare the timber under
                    consistent steaming conditions before each bending test.
                    Material behaviour was then compared across the three
                    species to identify suitable stock for robotic testing.
                  </p>

                  <Link
                    href="/projects/custom-steamer"
                    className="mt-5 inline-block border-b border-foreground pb-1 text-[12px] transition-opacity hover:opacity-50 sm:mt-8 sm:text-sm"
                  >
                    Custom Steam Chamber ↗
                  </Link>

                </div>

                <div>

                  <p className="m-0 text-[14px] leading-[1.6] text-foreground/60 sm:text-base sm:leading-[1.7]">
                    Rift-sawn stock provided the most reliable bending
                    behaviour. A custom compression strap was introduced to
                    constrain the outside face of the timber, reduce tensile
                    failure, and improve consistency as tighter curvatures
                    were produced.
                  </p>

                  <Link
                    href="/projects/compression-strap"
                    className="mt-5 inline-block border-b border-foreground pb-1 text-[12px] transition-opacity hover:opacity-50 sm:mt-8 sm:text-sm"
                  >
                    Custom Compression Strap ↗
                  </Link>

                </div>

              </div>

            </div>

          </div>

          {/* IMAGES */}

          <div className="mt-10 grid gap-4 sm:mt-20 sm:gap-10 lg:grid-cols-2">

            <div>
              <video
                src="/videos/C5694.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="block h-auto w-full"
              />
            </div>

            <div>
              <Image
                src="/images/3bends.jpg"
                alt="Manual steam bending tests using the compression strap"
                width={1600}
                height={1200}
                className="block h-auto w-full"
              />
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          03 ROBOTIC BENDING SYSTEM
      ===================================================== */}

      <section className="border-t border-foreground/20 px-4 py-16 sm:px-8 sm:py-28 lg:px-12 lg:py-40">

        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid gap-8 sm:gap-16 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-3">

              <p className="m-0 text-[11px] text-foreground/40 sm:text-sm">
                03
              </p>

              <h2 className="m-0 mt-2 text-[24px] font-normal tracking-tight sm:mt-3 sm:text-3xl">
                Robotic Bending
                <br />
                System
              </h2>

            </div>

            <div className="lg:col-span-9">

              <p className="m-0 max-w-[1100px] text-[24px] font-normal leading-[1.2] sm:text-4xl sm:leading-[1.25]">
                The fabrication workflow distributes bending and drying
                operations between two robotic systems with distinct roles.
              </p>

              <div className="mt-8 grid gap-7 sm:mt-14 sm:grid-cols-2 sm:gap-8">

                <div>

                  <p className="m-0 text-[14px] leading-[1.6] sm:text-base sm:leading-[1.7]">
                    A KUKA KR150 performs the primary bending operation,
                    following computationally generated trajectories
                    developed in Grasshopper and KUKA|prc. Custom tooling
                    constrains and manipulates the timber throughout the
                    forming sequence.
                  </p>

                  <Link
                    href="/projects/steam-bending-gripper"
                    className="mt-5 inline-block border-b border-foreground pb-1 text-[12px] transition-opacity hover:opacity-50 sm:mt-8 sm:text-sm"
                  >
                    Custom Gripper ↗
                  </Link>

                </div>

                <div>

                  <p className="m-0 text-[14px] leading-[1.6] text-foreground/60 sm:text-base sm:leading-[1.7]">
                    A UR10e performs a repeatable flash-drying sequence
                    while the member remains constrained, allowing heat
                    application to be controlled consistently before the
                    timber is released.
                  </p>

                  <Link
                    href="/projects/steam-bending-heat-tool"
                    className="mt-5 inline-block border-b border-foreground pb-1 text-[12px] transition-opacity hover:opacity-50 sm:mt-8 sm:text-sm"
                  >
                    Custom Heat Tool ↗
                  </Link>

                </div>

              </div>

            </div>

          </div>

          <div className="relative mt-10 aspect-video w-full overflow-hidden bg-black sm:mt-20">

            <iframe
              src="https://player.vimeo.com/video/1225164045?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0"
              allow="autoplay; fullscreen; picture-in-picture"
              className="absolute inset-0 h-full w-full border-0"
              title="Robotic steam bending process"
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          04 COMPUTATIONAL PATH PLANNING
      ===================================================== */}

      <section className="border-t border-foreground/20 px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid gap-7 sm:gap-10 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-3">

              <p className="m-0 text-[10px] text-foreground/35 sm:text-xs">
                04
              </p>

              <h2 className="m-0 mt-2 text-[22px] font-normal leading-[1.05] tracking-tight sm:mt-3 sm:text-2xl">
                Computational
                <br />
                Path Planning
              </h2>

            </div>

            <div className="min-w-0 lg:col-span-9">

              <h3 className="m-0 max-w-[1100px] text-[24px] font-normal leading-[1.12] tracking-tight sm:text-4xl">
                Robot motion is generated from target curvature rather than a
                fixed mould, using simulation and optimization to develop
                feasible bending trajectories before fabrication.
              </h3>

              <div className="mt-7 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:gap-12">

                <p className="m-0 max-w-[560px] text-[13px] leading-[1.6] sm:text-sm sm:leading-[1.65]">
                  Kangaroo dynamic relaxation was used to simulate bending
                  behaviour and evaluate candidate geometries before physical
                  fabrication.
                </p>

                <p className="m-0 max-w-[560px] text-[13px] leading-[1.6] text-foreground/55 sm:text-sm sm:leading-[1.65]">
                  Galapagos provided an optimization framework for iterating
                  design variables and evaluating candidate solutions against
                  the desired bending geometry.
                </p>

              </div>

            </div>

          </div>

          <div className="mt-8 w-full sm:mt-14 lg:mt-16">
            <Image
              src="/images/sec04diag.png"
              alt="Computational path planning workflow showing robot bending paths, design variables, gene bounds, Kangaroo simulation, and fitness evaluation"
              width={2800}
              height={1000}
              sizes="100vw"
              className="block h-auto w-full"
            />
          </div>

        </div>

      </section>

      {/* =====================================================
          05 SENSING + RE-DIGITIZATION
      ===================================================== */}

      <section className="border-t border-foreground/20 px-4 py-14 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid gap-7 sm:gap-12 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-3">

              <p className="m-0 text-[11px] text-foreground/40 sm:text-sm">
                05
              </p>

              <h2 className="m-0 mt-2 text-[24px] font-normal tracking-tight sm:mt-3 sm:text-3xl">
                Sensing +
                <br />
                Re-Digitization
              </h2>

            </div>

            <div className="lg:col-span-9">

              <p className="m-0 max-w-[1100px] text-[24px] font-normal leading-[1.2] sm:text-4xl sm:leading-[1.25]">
                Physical bending results are re-digitized so material
                behaviour can be measured and compared against the
                computational geometry.
              </p>

              <div className="mt-7 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-8">

                <p className="m-0 max-w-[600px] text-[14px] leading-[1.6] sm:text-base sm:leading-[1.7]">
                  An HTC Vive Tracker was used for rapid spatial tracking
                  during the development of the bending workflow,
                  providing a fast method for recording physical position.
                </p>

                <p className="m-0 max-w-[600px] text-[14px] leading-[1.6] text-foreground/60 sm:text-base sm:leading-[1.7]">
                  Higher-resolution geometry was captured with an
                  EinScan Pro 2X structured-light scanner, allowing
                  fabricated members to be digitally reconstructed for
                  geometric comparison.
                </p>

              </div>

            </div>

          </div>

          <div className="mt-9 grid items-start gap-5 sm:mt-16 sm:gap-8 lg:grid-cols-2">

            <div>

              <video
                src="/videos/scan1.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="block h-auto w-full"
              />

              <p className="m-0 mt-2 text-[10px] text-foreground/40 sm:mt-4 sm:text-xs">
                HTC Vive Tracker
              </p>

            </div>

            <div>

              <video
                src="/videos/michascan2.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="block h-auto w-full"
              />

              <p className="m-0 mt-2 text-[10px] text-foreground/40 sm:mt-4 sm:text-xs">
                Structured-light scanning
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          06 EXPERIMENT DESIGN
      ===================================================== */}

      <section className="border-t border-foreground/20 px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid gap-7 sm:gap-10 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-3">

              <p className="m-0 text-[10px] text-foreground/35 sm:text-xs">
                06
              </p>

              <h2 className="m-0 mt-2 text-[22px] font-normal leading-[1.05] tracking-tight sm:mt-3 sm:text-2xl">
                Experiment
                <br />
                Design
              </h2>

            </div>

            <div className="lg:col-span-9">

              <div className="grid items-center gap-7 sm:gap-10 lg:grid-cols-12 lg:gap-12">

                <div className="lg:col-span-8">

                  <Image
                    src="/images/alltests.jpg"
                    alt="Robotic steam bending experiment set and centerline measurement methodology"
                    width={1900}
                    height={1400}
                    className="block h-auto w-full"
                  />

                </div>

                <div className="lg:col-span-4">

                  <p className="m-0 text-[21px] font-normal leading-[1.15] tracking-tight sm:text-2xl">
                    Three target bending conditions were fabricated
                    three times each to establish a controlled
                    comparative test set.
                  </p>

                  <p className="m-0 mt-5 text-[13px] leading-[1.55] text-foreground/55 sm:mt-8 sm:text-sm sm:leading-[1.6]">
                    The experiment tested 45°, 75°, and 90° bending
                    conditions, with three independently fabricated
                    specimens produced for each geometry.
                  </p>

                  <p className="m-0 mt-4 text-[13px] leading-[1.55] text-foreground/55 sm:mt-5 sm:text-sm sm:leading-[1.6]">
                    Centerlines were extracted from each re-digitized
                    specimen so geometric differences could be compared
                    consistently along the length of each member.
                  </p>

                  <div className="mt-6 border-t border-foreground/20 pt-4 sm:mt-10 sm:pt-5">

                    <div className="grid grid-cols-2 gap-4 sm:gap-6">

                      <div>

                        <p className="m-0 text-[10px] text-foreground/35 sm:text-xs">
                          Bend Conditions
                        </p>

                        <p className="m-0 mt-2 text-[12px] sm:text-sm">
                          45° · 75° · 90°
                        </p>

                      </div>

                      <div>

                        <p className="m-0 text-[10px] text-foreground/35 sm:text-xs">
                          Repetitions
                        </p>

                        <p className="m-0 mt-2 text-[12px] sm:text-sm">
                          3 per condition
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          07 MEASURING MATERIAL CHANGE
      ===================================================== */}

      <section className="border-t border-foreground/20 px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid gap-7 sm:gap-10 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-3">

              <p className="m-0 text-[10px] text-foreground/35 sm:text-xs">
                07
              </p>

              <h2 className="m-0 mt-2 text-[22px] font-normal leading-[1.05] tracking-tight sm:mt-3 sm:text-2xl">
                Measuring
                <br />
                Material Change
              </h2>

            </div>

            <div className="lg:col-span-9">

              <div className="grid items-center gap-7 sm:gap-10 lg:grid-cols-12 lg:gap-12">

                <div className="lg:col-span-8">

                  <Image
                    src="/images/3scans.jpg"
                    alt="Three measured scan states of the robotic steam bent specimens"
                    width={1800}
                    height={1100}
                    className="block h-auto w-full"
                  />

                </div>

                <div className="lg:col-span-4">

                  <p className="m-0 text-[21px] font-normal leading-[1.15] tracking-tight sm:text-2xl">
                    Comparing the same member across three scan states
                    isolates geometric change produced by release and
                    continued material relaxation.
                  </p>

                  <p className="m-0 mt-5 text-[13px] leading-[1.55] text-foreground/55 sm:mt-8 sm:text-sm sm:leading-[1.6]">
                    Each specimen was recorded while constrained,
                    after release, and again two days post-bend.
                    Overlaying these states makes the progression of
                    springback visible across the three bending
                    conditions.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          08 SPRINGBACK + MATERIAL BEHAVIOUR
      ===================================================== */}

      <section className="border-t border-foreground/20 px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid gap-7 sm:gap-10 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-3">

              <p className="m-0 text-[10px] text-foreground/35 sm:text-xs">
                08
              </p>

              <h2 className="m-0 mt-2 text-[22px] font-normal leading-[1.05] tracking-tight sm:mt-3 sm:text-2xl">
                Springback +
                <br />
                Material Behaviour
              </h2>

            </div>

            <div className="lg:col-span-9">

              <div className="grid items-center gap-7 sm:gap-10 lg:grid-cols-12 lg:gap-12">

                <div className="lg:col-span-8">

                  <Image
                    src="/images/averagespringback.jpg"
                    alt="Average springback measured along the wood strips"
                    width={1700}
                    height={950}
                    className="block h-auto w-full"
                  />

                </div>

                <div className="lg:col-span-4">

                  <p className="m-0 text-[21px] font-normal leading-[1.15] tracking-tight sm:text-2xl">
                    Springback becomes measurable material data rather
                    than an unpredictable fabrication error.
                  </p>

                  <p className="m-0 mt-5 text-[13px] leading-[1.55] text-foreground/55 sm:mt-8 sm:text-sm sm:leading-[1.6]">
                    Measuring displacement along each member reveals
                    where geometric change accumulates after release.
                    Material response can therefore be compared spatially
                    across the 45°, 75°, and 90° bending conditions.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          09 ACCURACY + REPEATABILITY
      ===================================================== */}

      <section className="border-t border-foreground/20 px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28">

        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid grid-cols-1 gap-7 sm:gap-8 lg:grid-cols-[280px_1fr] lg:gap-16">

            <div>

              <p className="m-0 text-[10px] text-foreground/40 sm:text-xs">
                09
              </p>

              <h2 className="m-0 mt-2 text-[20px] font-normal leading-[1.05] sm:mt-3 sm:text-xl">
                Accuracy +
                <br />
                Repeatability
              </h2>

            </div>

            <div>

              <h3 className="m-0 max-w-[950px] text-[28px] font-normal leading-[1] tracking-tight sm:text-5xl sm:leading-[0.98] lg:text-6xl">
                The fabricated curves were compared both against each
                other and against their intended target geometry.
              </h3>

            </div>

          </div>

          <div className="mt-10 grid grid-cols-1 items-start gap-8 sm:mt-24 sm:gap-12 lg:mt-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

            <div>

              <Image
                src="/images/Intraset.jpg"
                alt="Intraset deviations for the repeated 45, 75, and 90 degree bending trials"
                width={1800}
                height={1200}
                className="block h-auto w-full"
              />

              <p className="m-0 mt-3 max-w-[720px] text-[12px] leading-[1.45] text-foreground/55 sm:mt-5 sm:text-sm sm:leading-[1.5]">
                Intraset deviation compares repeated specimens within
                each bending condition to quantify fabrication
                repeatability.
              </p>

            </div>

            <div className="lg:pt-20">

              <div className="mx-auto w-full max-w-[600px]">

                <Image
                  src="/images/Deviation.jpg"
                  alt="Deviation from target curve for 45, 75, and 90 degree bending conditions"
                  width={1500}
                  height={850}
                  className="block h-auto w-full"
                />

                <p className="m-0 mt-3 max-w-[560px] text-[12px] leading-[1.45] text-foreground/55 sm:mt-5 sm:text-sm sm:leading-[1.5]">
                  Target deviation measures the difference between the
                  fabricated geometry and the intended computational
                  curve.
                </p>

              </div>

            </div>

          </div>

          {/* METRICS */}

          <div
            ref={metricsRef}
            className="mt-10 border-t border-foreground/20 pt-7 sm:mt-16 sm:pt-10 lg:mt-20 lg:pt-12"
          >

            <div className="grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-14">

              <div>

                <p className="m-0 whitespace-nowrap text-[34px] font-normal leading-none tracking-tight sm:text-5xl xl:text-6xl">
                  <span ref={metric45Ref}>
                    ≈0 mm
                  </span>
                </p>

                <p className="m-0 mt-3 max-w-[280px] text-[11px] leading-[1.4] text-foreground/55 sm:mt-5 sm:text-sm sm:leading-[1.45]">
                  Maximum measured deviation from the target curve for
                  the 45° bending condition.
                </p>

              </div>

              <div>

                <p className="m-0 whitespace-nowrap text-[34px] font-normal leading-none tracking-tight sm:text-5xl xl:text-6xl">
                  <span ref={metric75Ref}>
                    ≈0 mm
                  </span>
                </p>

                <p className="m-0 mt-3 max-w-[280px] text-[11px] leading-[1.4] text-foreground/55 sm:mt-5 sm:text-sm sm:leading-[1.45]">
                  Maximum measured deviation from the target curve for
                  the 75° bending condition.
                </p>

              </div>

              <div>

                <p className="m-0 whitespace-nowrap text-[34px] font-normal leading-none tracking-tight sm:text-5xl xl:text-6xl">
                  <span ref={metric90Ref}>
                    ≈0 mm
                  </span>
                </p>

                <p className="m-0 mt-3 max-w-[280px] text-[11px] leading-[1.4] text-foreground/55 sm:mt-5 sm:text-sm sm:leading-[1.45]">
                  Maximum measured deviation from the target curve for
                  the 90° bending condition.
                </p>

              </div>

              <div>

                <p className="m-0 whitespace-nowrap text-[34px] font-normal leading-none tracking-tight sm:text-5xl xl:text-6xl">
                  <span ref={metric3Ref}>
                    0 × 0
                  </span>
                </p>

                <p className="m-0 mt-3 max-w-[280px] text-[11px] leading-[1.4] text-foreground/55 sm:mt-5 sm:text-sm sm:leading-[1.45]">
                  Three target bending conditions with three repeated
                  fabrication trials per condition.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          10 MATERIAL FEEDBACK → ASSEMBLY
      ===================================================== */}

      <section className="border-t border-foreground/20 pt-8 sm:pt-10 lg:pt-12">

        <div className="px-4 sm:px-8 lg:px-12">

          <div className="mx-auto grid w-full max-w-[1800px] gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-10">

            <div className="lg:col-span-3">

              <p className="m-0 text-[10px] text-foreground/35 sm:text-xs">
                10
              </p>

              <h2 className="m-0 mt-2 text-[22px] font-normal leading-[1.05] tracking-tight sm:text-2xl">
                Material Feedback
                <br />
                → Assembly
              </h2>

            </div>

            <div className="lg:col-span-9">

              <p className="m-0 max-w-[1050px] text-[24px] font-normal leading-[1.12] tracking-tight sm:text-4xl">
                Measured material behaviour becomes feedback for future
                fabrication, connecting empirical bending data to the design
                and production of differentiated architectural assemblies.
              </p>

              <p className="m-0 mt-4 max-w-[720px] text-[12px] leading-[1.5] text-foreground/55 sm:text-sm sm:leading-[1.55]">
                Rather than treating material variation only as fabrication
                error, the workflow establishes a basis for incorporating
                measured physical response into subsequent computational and
                robotic decisions.
              </p>

            </div>

          </div>

        </div>

        <div className="relative mt-7 aspect-[4/3] w-full overflow-hidden sm:mt-8 sm:aspect-[16/8]">

          <Image
            src="/images/acadiafinalwide.png"
            alt="Architectural assembly produced through robotic steam bending research"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />

        </div>

      </section>

      {/* =====================================================
          PROJECT OUTRO
      ===================================================== */}

      <section className="border-t border-foreground/20 px-4 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12 lg:pb-24 lg:pt-20">

        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid gap-7 sm:gap-10 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-start-4 lg:col-span-9">

              <h2 className="m-0 max-w-[1100px] text-[30px] font-normal leading-[1.03] tracking-tight sm:text-5xl sm:leading-[1.05] lg:text-6xl">
                Designing with material variability,
                rather than against it.
              </h2>

              <Link
                href="/projects"
                className="mt-7 inline-flex items-center gap-3 border-b border-foreground pb-1 text-[13px] transition-opacity hover:opacity-50 sm:mt-10 sm:text-base"
              >
                View more projects
                <span>→</span>
              </Link>

            </div>

          </div>

          {/* RELATED */}

          <div className="mt-12 border-t border-foreground/20 pt-7 sm:mt-20 sm:pt-8 lg:mt-24">

            <div className="grid gap-7 sm:gap-10 lg:grid-cols-12 lg:gap-12">

              <div className="lg:col-span-3">

                <h3 className="m-0 text-[22px] font-normal leading-[1.05] tracking-tight sm:text-2xl">
                  Related Side
                  <br />
                  Projects
                </h3>

              </div>

              <div className="lg:col-span-9">

                <Link
                  href="/projects/steam-bending-gripper"
                  className="group grid grid-cols-[1fr_auto] items-center border-t border-foreground/20 py-4 transition-opacity hover:opacity-50 sm:py-6"
                >

                  <div>

                    <p className="m-0 text-[19px] font-normal tracking-tight sm:text-3xl">
                      Robotic Bending Gripper
                    </p>

                    <p className="m-0 mt-1.5 pr-4 text-[11px] leading-[1.4] text-foreground/45 sm:mt-2 sm:text-sm">
                      Custom end-of-arm tooling for controlled steam bending
                    </p>

                  </div>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-2 sm:text-xl">
                    →
                  </span>

                </Link>

                <Link
                  href="/projects/custom-steamer"
                  className="group grid grid-cols-[1fr_auto] items-center border-t border-foreground/20 py-4 transition-opacity hover:opacity-50 sm:py-6"
                >

                  <div>

                    <p className="m-0 text-[19px] font-normal tracking-tight sm:text-3xl">
                      Wood Steamer Cart
                    </p>

                    <p className="m-0 mt-1.5 pr-4 text-[11px] leading-[1.4] text-foreground/45 sm:mt-2 sm:text-sm">
                      Mobile steam chamber developed for material preparation
                      and bending experiments
                    </p>

                  </div>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-2 sm:text-xl">
                    →
                  </span>

                </Link>

                <Link
                  href="/projects/compression-strap"
                  className="group grid grid-cols-[1fr_auto] items-center border-t border-foreground/20 py-4 transition-opacity hover:opacity-50 sm:py-6"
                >

                  <div>

                    <p className="m-0 text-[19px] font-normal tracking-tight sm:text-3xl">
                      Compression Strap
                    </p>

                    <p className="m-0 mt-1.5 pr-4 text-[11px] leading-[1.4] text-foreground/45 sm:mt-2 sm:text-sm">
                      Custom restraint system for reducing tensile failure
                      during bending
                    </p>

                  </div>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-2 sm:text-xl">
                    →
                  </span>

                </Link>

                <Link
                  href="/projects/steam-bending-heat-tool"
                  className="group grid grid-cols-[1fr_auto] items-center border-y border-foreground/20 py-4 transition-opacity hover:opacity-50 sm:py-6"
                >

                  <div>

                    <p className="m-0 text-[19px] font-normal tracking-tight sm:text-3xl">
                      Robotic Heat Gun Tool
                    </p>

                    <p className="m-0 mt-1.5 pr-4 text-[11px] leading-[1.4] text-foreground/45 sm:mt-2 sm:text-sm">
                      End-effector for controlled flash drying
                    </p>

                  </div>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-2 sm:text-xl">
                    →
                  </span>

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CUSTOM CURSOR
          DESKTOP ONLY
      ===================================================== */}

      <div className="hidden md:block">
        <ContrastCursor
          isActive={false}
          text=""
        />
      </div>

    </main>
  );
}