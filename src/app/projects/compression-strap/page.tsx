'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout';
import ScrollVideo from '@/components/projects/ScrollVideo';

export default function CompressionStrapPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* HERO */}

        <section className="grid min-h-[560px] grid-cols-1 items-end gap-12 px-5 pb-20 pt-36 lg:grid-cols-12 lg:px-14">
          <div className="lg:col-span-7">
            <p className="mb-6 text-sm text-foreground/40">
              Fabrication Tooling
            </p>

            <h1 className="m-0 max-w-[900px] text-6xl font-normal leading-[0.92] tracking-tight md:text-7xl lg:text-[96px]">
              Compression
              <br />
              Strap
            </h1>
          </div>

          <div className="lg:col-span-5 lg:pb-4">
            <p className="m-0 max-w-[620px] text-2xl font-medium leading-[1.3] tracking-tight lg:text-3xl">
              A compression system developed through hand testing and iterative
              prototyping, then redesigned as an integrated gripping interface
              for robotic steam bending.
            </p>
          </div>
        </section>

        {/* PROJECT INFO */}

        <section className="border-y border-foreground/20">
          <div className="grid grid-cols-2 lg:grid-cols-5">
            <div className="min-h-[130px] border-b border-r border-foreground/20 px-5 py-6 lg:border-b-0 lg:px-14">
              <p className="mb-3 text-xs text-foreground/40">
                Type
              </p>

              <p className="m-0 text-sm">
                Fabrication Tool
              </p>
            </div>

            <div className="min-h-[130px] border-b border-foreground/20 px-5 py-6 lg:border-b-0 lg:border-r lg:px-5">
              <p className="mb-3 text-xs text-foreground/40">
                Application
              </p>

              <p className="m-0 text-sm">
                Steam Bending
              </p>
            </div>

            <div className="min-h-[130px] border-b border-r border-foreground/20 px-5 py-6 lg:border-b-0">
              <p className="mb-3 text-xs text-foreground/40">
                Development
              </p>

              <p className="m-0 text-sm">
                Prototype V1 / V2
              </p>
            </div>

            <div className="min-h-[130px] border-b border-foreground/20 px-5 py-6 lg:border-b-0 lg:border-r">
              <p className="mb-3 text-xs text-foreground/40">
                Integration
              </p>

              <p className="m-0 text-sm">
                Robotic Gripping
              </p>
            </div>

            <div className="col-span-2 min-h-[130px] px-5 py-6 lg:col-span-1 lg:px-5">
              <p className="mb-3 text-xs text-foreground/40">
                Research
              </p>

              <p className="m-0 text-sm">
                Material Feedback
                <br />
                Robotic Fabrication
              </p>
            </div>
          </div>
        </section>

        {/* 01 TOOL DEVELOPMENT */}

        <section className="grid gap-10 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              01
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Tool Development
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              The compression strap evolved from a crude hand-testing prototype
              into a refined system designed specifically for robotic
              manipulation.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The first version was built quickly to test whether maintaining
                compression along the outer face of the timber could improve
                the steam-bending process. At this stage, the priority was
                validating the principle rather than producing a finished
                robotic tool.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Hand testing revealed limitations in alignment, handling, and
                the way the strap interacted with the timber. These observations
                directly informed a second version with improved geometry and a
                dedicated interface for the robotic gripper.
              </p>
            </div>
          </div>
        </section>

        {/* SCROLL ANIMATION */}

        <ScrollVideo src="/videos/compression-animation.mp4" />

        {/* 02 DESIGN PROBLEM */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              02
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Design Problem
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              Steam bending makes timber flexible enough to form, but the
              material remains vulnerable to splitting and uncontrolled
              deformation during bending.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                As the timber bends, the outside radius is placed in tension
                while the inside radius is compressed. Excessive tension on the
                outer fibres can cause the material to crack or fail before the
                desired curvature is reached.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The strap was introduced to support the outside face of the
                timber and maintain compression through the bending process,
                allowing the material to form under more controlled conditions.
              </p>
            </div>
          </div>
        </section>

        {/* 03 VERSION 1 */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              03
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Version 1
            </h2>

            <p className="mt-2 text-sm text-foreground/40">
              Hand-Testing Prototype
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              The first compression strap was developed as a rapid prototype
              for hand testing before robotic integration was considered.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Version 1 was intentionally crude and focused on establishing
                the basic compression principle. It allowed the strap geometry,
                end restraints, and relationship between the steel strap and
                timber to be evaluated through repeated manual bending tests.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                These tests made the shortcomings of the first assembly visible.
                The strap could be difficult to position consistently, the
                interfaces required refinement, and there was no reliable way
                for the robotic end-effector to grip the system.
              </p>
            </div>
          </div>
        </section>

        {/* 04 VERSION 2 */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              04
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Version 2
            </h2>

            <p className="mt-2 text-sm text-foreground/40">
              Refined Robotic System
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              A second version was rebuilt around the problems identified
              during hand testing and the requirements of the robotic bending
              workflow.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The overall assembly was refined to improve alignment,
                repeatability, and handling while maintaining the compression
                strategy established with Version 1. Instead of treating the
                strap as a separate accessory, the new version was developed as
                part of the complete fabrication system.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The geometry was also changed to provide a predictable central
                gripping region. This created a controlled interface between
                the strap assembly and the robotic end-effector.
              </p>
            </div>
          </div>
        </section>

        {/* 05 ROBOTIC GRIPPING */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              05
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Robotic Integration
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              Version 2 allowed the robot to grip the compression strap
              directly and manipulate the timber and strap as a single
              assembly.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <div>
                <p className="m-0 text-base leading-[1.65] text-foreground/60">
                  The original gripper was developed around direct contact with
                  the flat face of the timber. Once the compression strap was
                  introduced, that surface was no longer available as the
                  primary gripping interface.
                </p>
              </div>

              <div>
                <p className="m-0 text-base leading-[1.65] text-foreground/60">
                  Version 2 therefore incorporated a region specifically shaped
                  around the gripper. The robot could clamp onto the strap,
                  transfer motion through the complete assembly, and keep the
                  timber constrained throughout the bending operation.
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
        </section>

        {/* 06 WORKFLOW */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              06
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Workflow Integration
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              The compression strap ultimately became part of the robotic
              steam-bending workflow rather than remaining an independent
              material fixture.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The strap was installed with the timber before bending and
                remained with the material throughout robotic manipulation.
                This reduced additional handling during the limited working
                window after steaming.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Developing the strap alongside the gripper demonstrated how
                tooling, material behaviour, and robotic motion had to evolve
                together rather than being designed as independent parts of the
                fabrication process.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN RESEARCH PROJECT */}

        <section className="border-t border-foreground/20 px-5 py-24 lg:px-14 lg:py-32">
          <p className="mb-6 text-sm text-foreground/40">
            Main Research Project
          </p>

          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="m-0 max-w-[1050px] text-4xl font-normal leading-[1.05] tracking-tight md:text-5xl lg:text-7xl">
              Material Feedback in Robotic Steam Bending
            </h2>

            <Link
              href="/projects/robotic-steam-bending"
              className="w-fit shrink-0 border-b border-foreground pb-1 text-sm transition-opacity hover:opacity-50"
            >
              View Research Project →
            </Link>
          </div>
        </section>

      </main>
    </Layout>
  );
}