'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ContactInfo() {
  const [timeNow, setTimeNow] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setTimeNow(
        new Date().toLocaleTimeString('en-CA', {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative w-full bg-foreground px-6 pb-16 pt-44 text-white sm:px-10 lg:px-16 lg:pb-16 lg:pt-52">
      <div className="mx-auto w-full max-w-[1800px]">
        {/* TOP */}
        <div className="flex flex-col gap-12 border-b border-white/20 pb-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full sm:h-20 sm:w-20">
              <Image
                fill
                alt="Liam Cassano"
                src="/images/IMG_7674.PNG"
                sizes="80px"
                className="object-cover"
              />
            </div>

            <h2 className="m-0 text-[34px] font-normal leading-none sm:text-[46px] lg:text-[56px]">
              Let&apos;s make something.
            </h2>
          </div>

          <Link
            href="/contact"
            className="group flex w-fit items-center gap-2 text-xl font-normal sm:text-2xl"
          >
            <span className="transition-opacity duration-200 group-hover:opacity-50">
              Get in touch
            </span>

            <ArrowUpRight
              strokeWidth={2}
              className="size-5 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 sm:size-6"
            />
          </Link>
        </div>

        {/* LINKS */}
        <div className="flex justify-center py-20 sm:py-24">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-base font-normal sm:gap-x-14 sm:text-lg lg:gap-x-20">
            <a
              href="https://www.daniels.utoronto.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5"
            >
              <span className="transition-opacity duration-200 group-hover:opacity-50">
                University of Toronto
              </span>

              <ArrowUpRight
                strokeWidth={2}
                className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#"
              className="group flex items-center gap-1.5"
            >
              <span className="transition-opacity duration-200 group-hover:opacity-50">
                ResearchGate
              </span>

              <ArrowUpRight
                strokeWidth={2}
                className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="https://www.instagram.com/liamcassdesign?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5"
            >
              <span className="transition-opacity duration-200 group-hover:opacity-50">
                Instagram
              </span>

              <ArrowUpRight
                strokeWidth={2}
                className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/liam-cassano"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5"
            >
              <span className="transition-opacity duration-200 group-hover:opacity-50">
                LinkedIn
              </span>

              <ArrowUpRight
                strokeWidth={2}
                className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="grid grid-cols-1 gap-12 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto] lg:items-end lg:gap-14">
          {/* DESCRIPTION */}
          <div>
            <p className="m-0 max-w-[430px] text-sm font-normal leading-[1.5] sm:text-base">
              Architecture, robotic fabrication, material research, film, and
              digital craft.
            </p>
          </div>

          {/* VERSION */}
          <div>
            <p className="m-0 mb-3 text-sm font-normal text-white/40">
              Version
            </p>

            <p className="m-0 whitespace-nowrap text-sm font-normal sm:text-base">
              2026 Edition
            </p>
          </div>

          {/* TORONTO */}
          <div>
            <p className="m-0 mb-3 text-sm font-normal text-white/40">
              Toronto
            </p>

            <p className="m-0 whitespace-nowrap text-sm font-normal sm:text-base">
              {timeNow}
            </p>
          </div>

          {/* STUDIO */}
          <div>
            <p className="m-0 mb-3 text-sm font-normal text-white/40">
              Studio
            </p>

            <a
              href="#"
              className="whitespace-nowrap text-sm font-normal transition-opacity duration-200 hover:opacity-50 sm:text-base"
            >
              6IX Films
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}