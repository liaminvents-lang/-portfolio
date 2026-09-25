// components/home/SlidingImages.tsx

'use client';

import { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type Slider = {
  color: string;
  src: string;
  href: string;
};

type Props = {
  slider1: Slider[];
  slider2: Slider[];
};

function shuffle<T>(array: T[]) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

export default function SlidingImages({ slider1, slider2 }: Props) {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-40, 130]);
  const x2 = useTransform(scrollYProgress, [0, 1], [40, -130]);
  const x3 = useTransform(scrollYProgress, [0, 1], [-30, 110]);
  const x4 = useTransform(scrollYProgress, [0, 1], [30, -110]);
  const x5 = useTransform(scrollYProgress, [0, 1], [-40, 125]);

  const rows = useMemo(() => {
    /* =====================================================
       ALL PROJECTS
    ===================================================== */

    const allProjects = [...slider1, ...slider2].filter(
      (project) => project.src !== 'DSC03168-Enhanced-NR.jpg'
    );

    /* =====================================================
       DESIGN-BUILD
       These stay together on the first row.
    ===================================================== */

    const designBuildHrefs = [
      '/projects/robot-made-2025-uoft',
      '/projects/robot-made-2024-uoft',
      '/projects/robot-made-2025-ubc-sala',
      '/projects/aeolian-soundscapes-timber-tectonics',
    ];

    const designBuild = shuffle(
      allProjects.filter((project) =>
        designBuildHrefs.includes(project.href)
      )
    );

    /* =====================================================
       EVERYTHING ELSE
       Randomized across the remaining four rows.
    ===================================================== */

    const remaining = shuffle(
      allProjects.filter(
        (project) => !designBuildHrefs.includes(project.href)
      )
    );

    const row2: Slider[] = [];
    const row3: Slider[] = [];
    const row4: Slider[] = [];
    const row5: Slider[] = [];

    remaining.forEach((project, index) => {
      if (index % 4 === 0) {
        row2.push(project);
      } else if (index % 4 === 1) {
        row3.push(project);
      } else if (index % 4 === 2) {
        row4.push(project);
      } else {
        row5.push(project);
      }
    });

    return {
      row1: designBuild,
      row2,
      row3,
      row4,
      row5,
    };
  }, [slider1, slider2]);

  /* =====================================================
     MOBILE ROW
  ===================================================== */

  const renderMobileRow = (
    projects: Slider[],
    x: typeof x1,
    offset: string,
    row: number
  ) => (
    <motion.div
      style={{ x }}
      className={`relative ${offset} flex w-max items-center gap-2`}
    >
      {projects.map((project, index) => (
        <Link
          key={`${project.src}-mobile-${row}-${index}`}
          href={project.href}
          className="block shrink-0"
        >
          <div className="flex h-[5.25rem] items-center justify-center">
            <img
              src={`/images/${project.src}`}
              alt=""
              className="h-full w-auto max-w-[32vw] object-contain shadow-md"
            />
          </div>
        </Link>
      ))}
    </motion.div>
  );

  /* =====================================================
     DESKTOP ROW
  ===================================================== */

  const renderDesktopRow = (
    projects: Slider[],
    x: typeof x1,
    offset: string,
    row: number
  ) => (
    <motion.div
      style={{ x }}
      className={`relative ${offset} flex w-max items-center gap-7 lg:gap-9`}
    >
      {projects.map((project, index) => (
        <Link
          key={`${project.src}-desktop-${row}-${index}`}
          href={project.href}
          className="block shrink-0"
        >
          <div className="flex h-[15rem] items-center justify-center lg:h-[18rem]">
            <img
              src={`/images/${project.src}`}
              alt=""
              className="h-full w-auto max-w-[34vw] object-contain shadow-lg transition-transform duration-500 ease-out hover:scale-[1.02]"
            />
          </div>
        </Link>
      ))}
    </motion.div>
  );

  return (
    <div
      ref={container}
      className="relative z-10 overflow-hidden bg-background"
    >
      {/* =====================================================
          WORK INDEX
      ===================================================== */}

      <section className="px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">

            {/* INTRO */}

            <div className="lg:col-span-5">
              <p className="m-0 max-w-[500px] text-xl font-normal leading-[1.4] tracking-tight sm:text-2xl">
                Selected projects and the technical work behind them.
              </p>
            </div>

            {/* LINKS */}

            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:gap-16">

              {/* PROJECTS */}

              <Link
                href="/projects"
                className="group block"
              >
                <div className="flex items-center gap-2 text-lg font-semibold sm:text-xl">
                  <span>Projects</span>

                  <ArrowUpRight
                    strokeWidth={2}
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-5 sm:w-5"
                  />
                </div>

                <p className="m-0 mt-2 max-w-[330px] text-sm leading-[1.5] text-foreground/50">
                  Completed architectural, research, installation, and
                  design-build work.
                </p>
              </Link>

              {/* DEVELOPMENT */}

              <Link
                href="/development"
                className="group block"
              >
                <div className="flex items-center gap-2 text-lg font-semibold sm:text-xl">
                  <span>Development</span>

                  <ArrowUpRight
                    strokeWidth={2}
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-5 sm:w-5"
                  />
                </div>

                <p className="m-0 mt-2 max-w-[380px] text-sm leading-[1.5] text-foreground/50">
                  Robotics, embedded systems, electronics, custom tooling,
                  sensing, and fabrication systems.
                </p>
              </Link>

            </div>

          </div>

          <div className="mt-12 border-b border-foreground/20" />

        </div>
      </section>

      {/* =====================================================
          MOBILE — 5 ROWS
      ===================================================== */}

      <div className="flex flex-col gap-2 sm:hidden">

        {/* ROW 01 — DESIGN BUILD */}

        {renderMobileRow(
          rows.row1,
          x1,
          'left-[-8vw]',
          1
        )}

        {/* ROW 02 */}

        {renderMobileRow(
          rows.row2,
          x2,
          'left-[-20vw]',
          2
        )}

        {/* ROW 03 */}

        {renderMobileRow(
          rows.row3,
          x3,
          'left-[-4vw]',
          3
        )}

        {/* ROW 04 */}

        {renderMobileRow(
          rows.row4,
          x4,
          'left-[-15vw]',
          4
        )}

        {/* ROW 05 */}

        {renderMobileRow(
          rows.row5,
          x5,
          'left-[-8vw]',
          5
        )}

      </div>

      {/* =====================================================
          DESKTOP — 5 ROWS
      ===================================================== */}

      <div className="hidden flex-col gap-7 sm:flex lg:gap-9">

        {/* ROW 01 — DESIGN BUILD */}

        {renderDesktopRow(
          rows.row1,
          x1,
          'left-[-7vw]',
          1
        )}

        {/* ROW 02 — RANDOM */}

        {renderDesktopRow(
          rows.row2,
          x2,
          'left-[-15vw]',
          2
        )}

        {/* ROW 03 — RANDOM */}

        {renderDesktopRow(
          rows.row3,
          x3,
          'left-[-3vw]',
          3
        )}

        {/* ROW 04 — RANDOM */}

        {renderDesktopRow(
          rows.row4,
          x4,
          'left-[-12vw]',
          4
        )}

        {/* ROW 05 — RANDOM */}

        {renderDesktopRow(
          rows.row5,
          x5,
          'left-[-6vw]',
          5
        )}

      </div>

      {/* =====================================================
          BOTTOM SPACING
      ===================================================== */}

      <div className="h-8 sm:h-16" />

    </div>
  );
}