'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type Slider = {
  color: string;
  src: string;
};

type Props = {
  slider1: Slider[];
  slider2: Slider[];
};

export default function SlidingImages({ slider1, slider2 }: Props) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div
      ref={container}
      className="relative z-10 flex flex-col gap-[3vw] overflow-hidden bg-background"
    >
      <motion.div
        style={{ x: x1 }}
        className="relative left-[-10vw] flex w-max items-center gap-4 sm:gap-12"
      >
        {slider1.map((project, index) => (
          <div
            key={index}
            className="flex h-60 shrink-0 items-center justify-center sm:h-80"
          >
            <img
              src={`/images/${project.src}`}
              alt=""
              className="h-full w-auto object-contain shadow-lg"
            />
          </div>
        ))}
      </motion.div>

      <motion.div
        style={{ x: x2 }}
        className="relative left-[-10vw] flex w-max items-center gap-4 sm:gap-12"
      >
        {slider2.map((project, index) => (
          <div
            key={index}
            className="flex h-60 shrink-0 items-center justify-center sm:h-80"
          >
            <img
              src={`/images/${project.src}`}
              alt=""
              className="h-full w-auto object-contain shadow-lg"
            />
          </div>
        ))}
      </motion.div>

      <div className="flex w-full justify-center pb-12 pt-8">
        <Link
          href="/projects"
          className="flex items-center gap-2 text-3xl font-semibold transition-opacity duration-200 hover:opacity-50"
        >
          <span>View Projects</span>
          <ArrowUpRight strokeWidth={3} className="size-6" />
        </Link>
      </div>
    </div>
  );
}