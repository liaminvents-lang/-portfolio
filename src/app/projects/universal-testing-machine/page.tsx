'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout';

export default function UniversalTestingMachinePage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* HERO */}

        <section className="grid min-h-[560px] grid-cols-1 items-end gap-12 px-5 pb-20 pt-36 lg:grid-cols-12 lg:px-14">
          <div className="lg:col-span-7">
            <p className="mb-6 text-sm text-foreground/40">
              Material Testing Equipment
            </p>

            <h1 className="m-0 max-w-[1100px] text-6xl font-normal leading-[0.92] tracking-tight md:text-7xl lg:text-[96px]">
              Universal
              <br />
              Testing Machine
            </h1>
          </div>

          <div className="lg:col-span-5 lg:pb-4">
            <p className="m-0 max-w-[620px] text-2xl font-medium leading-[1.3] tracking-tight lg:text-3xl">
              A custom-built testing machine developed to apply controlled
              tensile loading and continuously record force and displacement
              during material testing.
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
                Custom Testing Machine
              </p>
            </div>

            <div className="min-h-[130px] border-b border-foreground/20 px-5 py-6 lg:border-b-0 lg:border-r lg:px-5">
              <p className="mb-3 text-xs text-foreground/40">
                Testing
              </p>

              <p className="m-0 text-sm">
                Tensile
              </p>
            </div>

            <div className="min-h-[130px] border-b border-r border-foreground/20 px-5 py-6 lg:border-b-0">
              <p className="mb-3 text-xs text-foreground/40">
                Motion
              </p>

              <p className="m-0 text-sm">
                Stepper Motor
                <br />
                Lead Screw
              </p>
            </div>

            <div className="min-h-[130px] border-b border-foreground/20 px-5 py-6 lg:border-b-0 lg:border-r">
              <p className="mb-3 text-xs text-foreground/40">
                Measurement
              </p>

              <p className="m-0 text-sm">
                Force
                <br />
                Displacement
              </p>
            </div>

            <div className="col-span-2 min-h-[130px] px-5 py-6 lg:col-span-1 lg:px-5">
              <p className="mb-3 text-xs text-foreground/40">
                Standard
              </p>

              <p className="m-0 text-sm">
                ASTM D638
              </p>
            </div>

          </div>
        </section>

        {/* 01 MACHINE DEVELOPMENT */}

        <section className="grid gap-10 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              01
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Machine Development
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              The testing apparatus was developed as a small-scale universal
              testing device for controlled and repeatable material testing.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Tensile testing required a system capable of applying
                controlled linear force to specimens while continuously
                measuring their response. The machine was developed
                specifically to provide this testing framework within the
                constraints of the research.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The resulting apparatus combines controlled linear motion,
                specimen gripping, force measurement, and displacement
                tracking into a single testing system.
              </p>
            </div>
          </div>
        </section>

        {/* 02 LINEAR MOTION */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              02
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Linear Motion
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              A stepper motor-driven lead screw converts controlled rotational
              movement into precise vertical displacement.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The lead screw forms the basis of the machine's movement
                system. As the stepper motor rotates, the moving assembly
                translates vertically through a known displacement.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Controlling this movement allows consistent loading rates to be
                maintained throughout each tensile test and provides a
                repeatable relationship between motor movement and specimen
                displacement.
              </p>
            </div>
          </div>
        </section>

        {/* 03 SPECIMEN GRIPPING */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              03
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Specimen Gripping
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              Samples are mounted between two grips, creating a direct loading
              path through the specimen.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                One grip remains fixed while the second is connected to the
                moving assembly. As the motor advances, separation between the
                grips increases and places the specimen under tension.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Testing continues as the tensile force increases until the
                specimen reaches failure, allowing its response throughout the
                loading process to be recorded.
              </p>
            </div>
          </div>
        </section>

        {/* 04 FORCE MEASUREMENT */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              04
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Force Measurement
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              An integrated load cell records the force generated as the
              specimen is placed under tension.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Force data is captured continuously during the test rather than
                only at the point of failure. This makes it possible to observe
                how the material responds as load increases.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The force measurements are recorded alongside the position of
                the moving assembly, creating a continuous record of specimen
                behaviour throughout each test.
              </p>
            </div>
          </div>
        </section>

        {/* 05 DISPLACEMENT */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              05
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Displacement
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              Specimen displacement is derived from the controlled motion of
              the stepper motor and lead screw.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The lead screw pitch and stepper motor resolution provide a
                known relationship between commanded motor movement and linear
                travel of the gantry.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                This allows displacement to be tracked throughout testing
                without requiring a separate displacement sensor in the
                testing setup described in the research.
              </p>
            </div>
          </div>
        </section>

        {/* 06 CALIBRATION */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              06
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Calibration
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              Force and displacement were independently checked against known
              reference measurements before material testing.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The load cell was verified using calibrated weights,
                establishing a relationship between sensor output and the
                applied force.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Displacement calculated from lead screw pitch and stepper
                resolution was checked using caliper measurements at known
                positions along the gantry. This confirmed that commanded
                movement corresponded to actual linear displacement.
              </p>
            </div>
          </div>
        </section>

        {/* 07 HOMING + REPEATABILITY */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              07
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Homing + Repeatability
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              After each test cycle, the gantry returns to a home position to
              establish a consistent starting condition.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Returning to the same reference position resets the system
                between specimens and supports repeatable displacement
                measurements across a larger testing series.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The apparatus is not intended to replicate an industrial
                universal testing machine. Instead, calibration and repeatable
                positioning provide consistent comparative measurements within
                the scope of the research.
              </p>
            </div>
          </div>
        </section>

        {/* 08 ASTM TESTING */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              08
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              ASTM Testing
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              Tensile testing used ASTM D638 dog-bone specimens to establish a
              consistent geometry and testing procedure.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                ASTM D638 uses a reduced central gauge section to promote
                controlled stress distribution and encourage failure away from
                the grips. Samples were mounted in the machine and loaded in
                tension at a constant rate until failure.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Force and displacement were recorded continuously during each
                test, providing the measurements used to evaluate tensile
                strength, elongation at break, and stiffness.
              </p>
            </div>
          </div>
        </section>

        {/* 09 RESEARCH APPLICATION */}

        <section className="grid gap-10 border-t border-foreground/20 px-5 py-24 lg:grid-cols-12 lg:px-14 lg:py-32">
          <div className="lg:col-span-3">
            <p className="m-0 text-sm text-foreground/40">
              09
            </p>

            <h2 className="mt-4 text-3xl font-normal tracking-tight">
              Research Application
            </h2>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="m-0 max-w-[950px] text-3xl font-normal leading-[1.2] tracking-tight lg:text-5xl">
              The machine provided a repeatable framework for comparing the
              mechanical behaviour of lignin-based material specimens.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                Standardized specimen geometry, controlled loading, continuous
                force measurement, and calculated displacement allowed material
                tests to be compared using the same experimental setup.
              </p>

              <p className="m-0 text-base leading-[1.65] text-foreground/60">
                The apparatus supported the larger investigation into how the
                material developed strength and responded mechanically under
                controlled tensile loading.
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
              Reversible Wood Composites
            </h2>

            <Link
              href="/projects/reversible-wood-composites"
              className="w-fit shrink-0 border-b border-foreground pb-1 text-sm transition-opacity hover:opacity-50"
            >
              View Research Project →
            </Link>
          </div>
        </section>

        {/* PROJECT NAVIGATION */}

        <section className="border-t border-foreground/20 px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
          <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-3 sm:flex-row">
            <Link
              href="/development"
              className="group flex min-h-[56px] items-center justify-between gap-8 border border-foreground/20 px-5 py-4 transition-colors duration-300 hover:bg-foreground hover:text-background"
            >
              <span className="text-sm">
                Development
              </span>

              <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
            </Link>

            <Link
              href="/projects"
              className="group flex min-h-[56px] items-center justify-between gap-8 border border-foreground/20 px-5 py-4 transition-colors duration-300 hover:bg-foreground hover:text-background"
            >
              <span className="text-sm">
                Projects
              </span>

              <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
            </Link>
          </div>
        </section>

      </main>
    </Layout>
  );
}