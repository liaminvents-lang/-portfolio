'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Description() {
  return (
    <section className="w-full bg-background px-5 pb-10 pt-12 sm:px-8 sm:pb-12 sm:pt-14 lg:px-12 lg:pb-14 lg:pt-16">
      <div className="mx-auto flex w-full max-w-[1700px] items-center justify-between">
        <p className="m-0 text-sm font-normal sm:text-base">
          Architecture · Robotics · Digital Fabrication · Material Research
        </p>

        <Link
          href="/about"
          className="flex items-center gap-2 text-sm font-normal transition-opacity duration-200 hover:opacity-50 sm:text-base"
        >
          <span>About me</span>
          <ArrowUpRight strokeWidth={2} className="size-4" />
        </Link>
      </div>
    </section>
  );
}