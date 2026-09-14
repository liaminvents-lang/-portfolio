// components/home/SlidingImages.tsx

'use client';

import { useRef } from 'react';
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

export default function SlidingImages({ slider1, slider2 }: Props) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const x4 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const allProjects = [...slider1, ...slider2];

  const mobileRow1 = allProjects.filter((_, index) => index % 4 === 0);
  const mobileRow2 = allProjects.filter((_, index) => index % 4 === 1);
  const mobileRow3 = allProjects.filter((_, index) => index % 4 === 2);
  const mobileRow4 = allProjects.filter((_, index) => index % 4 === 3);

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
          <div className="flex h-[5.75rem] items-center justify-center">
            <img
              src={`/images/${project.src}`}
              alt=""
              className="h-full w-auto max-w-[34vw] object-contain shadow-md"
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
          MOBILE — 4 ROWS
      ===================================================== */}

      <div className="flex flex-col gap-2 sm:hidden">
        {renderMobileRow(mobileRow1, x1, 'left-[-10vw]', 1)}
        {renderMobileRow(mobileRow2, x2, 'left-[-22vw]', 2)}
        {renderMobileRow(mobileRow3, x3, 'left-[-5vw]', 3)}
        {renderMobileRow(mobileRow4, x4, 'left-[-16vw]', 4)}
      </div>

      {/* =====================================================
          DESKTOP — ORIGINAL 2 ROWS
      ===================================================== */}

      <div className="hidden flex-col gap-[3vw] sm:flex">
        <motion.div
          style={{ x: x1 }}
          className="relative left-[-10vw] flex w-max items-center gap-12"
        >
          {slider1.map((project, index) => (
            <Link
              key={`${project.src}-${index}`}
              href={project.href}
              className="block shrink-0"
            >
              <div className="flex h-[26rem] items-center justify-center">
                <img
                  src={`/images/${project.src}`}
                  alt=""
                  className="h-full w-auto object-contain shadow-lg transition-transform duration-500 ease-out hover:scale-[1.02]"
                />
              </div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          style={{ x: x2 }}
          className="relative left-[-10vw] flex w-max items-center gap-12"
        >
          {slider2.map((project, index) => (
            <Link
              key={`${project.src}-${index}`}
              href={project.href}
              className="block shrink-0"
            >
              <div className="flex h-[26rem] items-center justify-center">
                <img
                  src={`/images/${project.src}`}
                  alt=""
                  className="h-full w-auto object-contain shadow-lg transition-transform duration-500 ease-out hover:scale-[1.02]"
                />
              </div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* =====================================================
          VIEW PROJECTS
      ===================================================== */}

      <div className="flex w-full justify-center pb-8 pt-7 sm:pb-12 sm:pt-8">
        <Link
          href="/projects"
          className="flex items-center gap-1.5 text-[18px] font-semibold transition-opacity duration-200 hover:opacity-50 sm:gap-2 sm:text-3xl"
        >
          <span>View Projects</span>

          <ArrowUpRight
            strokeWidth={3}
            className="h-4 w-4 sm:size-6"
          />
        </Link>
      </div>
    </div>
  );
}