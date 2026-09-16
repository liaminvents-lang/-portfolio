'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Menu from '../nav';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { isMobile } from '@/components/util';
import Magnetic from '@/components/animations/magnetic';
import Image from 'next/image';

export default function Header() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [logoMenuOpen, setLogoMenuOpen] = useState(false);

  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
    setLogoMenuOpen(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!button.current) return;

    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,

        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: 'power1.out',
          });
        },

        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: 'power1.out',
          });
        },
      },
    });
  }, []);

  return (
    <>
      {/* =====================================================
          SITE UNDER CONSTRUCTION BANNER
      ===================================================== */}

      <div className="absolute left-0 top-0 z-[70] flex h-8 w-full items-center justify-center bg-[#FF5A1F] px-4 text-center text-[9px] font-semibold uppercase leading-tight tracking-[0.12em] text-black sm:text-xs">
        Site under construction — check back daily for updates
      </div>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        ref={header}
        className="absolute top-8 z-[60] box-border flex w-full items-center p-4 font-semibold text-black lg:p-8"
      >
        {/* =====================================================
            LOGO / MENU TOGGLE
        ===================================================== */}

        <div className="flex lg:pr-56">
          <button
            type="button"
            onClick={() => setLogoMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={logoMenuOpen}
            className="group z-[80] flex items-center border-0 bg-transparent p-0 text-left font-semibold text-black"
          >
            <Magnetic>
              <div className="relative z-20 mix-blend-difference">
                <Image
                  height={32}
                  width={32}
                  src="/images/logo.png"
                  alt="liam cassano logo"
                  className="h-8 w-8 object-contain"
                  priority
                />
              </div>
            </Magnetic>

            {/* MOBILE MENU LABEL */}

            <span className="ml-2 text-[13px] font-semibold sm:hidden">
              {logoMenuOpen ? 'Close' : 'Menu'}
            </span>

            {/* DESKTOP DESIGNED BY TEXT */}

            {!isMobile() && (
              <div className="relative ml-3 flex overflow-hidden">
                <div className="ease-custom-cubic transition-transform duration-500 group-hover:translate-x-[-100%]">
                  designed by
                </div>

                <div className="ease-custom-cubic px-1 transition-transform duration-500 group-hover:translate-x-[-84px]">
                  liam
                </div>

                <div className="ease-custom-cubic translate-x-full transition-transform duration-500 group-hover:translate-x-[-84px]">
                  cassano
                </div>
              </div>
            )}
          </button>
        </div>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        {!isMobile() && (
          <div className="flex flex-1 items-center justify-between font-semibold">
            {/* LEFT NAV */}

            <div className="group relative z-10 flex cursor-pointer flex-col p-3">
              <div className="flex flex-col">
                <Magnetic>
                  <Link href="/projects">Projects</Link>
                </Magnetic>

                <Magnetic>
                  <Link href="/development">Development</Link>
                </Magnetic>
              </div>
            </div>

            {/* MIDDLE NAV */}

            <div className="group relative z-10 flex cursor-pointer flex-col p-3">
              <div className="flex flex-col">
                <Magnetic>
                  <Link href="/about">About</Link>
                </Magnetic>

                <Magnetic>
                  <Link href="/recognition">Recognition</Link>
                </Magnetic>
              </div>
            </div>

            {/* CONTACT */}

            <div className="group relative z-10 flex cursor-pointer flex-col p-3">
              <Magnetic>
                <div className="flex">
                  <Link href="/contact">Contact</Link>
                  <ArrowUpRight size={18} />
                </div>
              </Magnetic>
            </div>
          </div>
        )}
      </div>

      {/* =====================================================
          LOGO MENU
      ===================================================== */}

      <div
        className={`
          fixed left-0 top-8 z-50 w-full overflow-hidden bg-white
          transition-[max-height,opacity] duration-500
          ease-[cubic-bezier(0.76,0,0.24,1)]
          ${
            logoMenuOpen
              ? 'max-h-[100svh] opacity-100'
              : 'pointer-events-none max-h-0 opacity-0'
          }
        `}
      >
        <div className="flex min-h-[calc(100svh-2rem)] flex-col px-4 pb-10 pt-24 lg:px-8 lg:pt-32">
          {/* =====================================================
              MENU LINKS
          ===================================================== */}

          <nav className="flex max-w-[520px] flex-col">
            <Link
              href="/"
              onClick={() => setLogoMenuOpen(false)}
              className="border-b border-black/10 py-2.5 text-[24px] font-normal leading-none tracking-[-0.03em] sm:text-[30px] lg:text-[42px]"
            >
              Home
            </Link>

            <Link
              href="/projects"
              onClick={() => setLogoMenuOpen(false)}
              className="border-b border-black/10 py-2.5 text-[24px] font-normal leading-none tracking-[-0.03em] sm:text-[30px] lg:text-[42px]"
            >
              Projects
            </Link>

            <Link
              href="/development"
              onClick={() => setLogoMenuOpen(false)}
              className="border-b border-black/10 py-2.5 text-[24px] font-normal leading-none tracking-[-0.03em] sm:text-[30px] lg:text-[42px]"
            >
              Development
            </Link>

            <Link
              href="/about"
              onClick={() => setLogoMenuOpen(false)}
              className="border-b border-black/10 py-2.5 text-[24px] font-normal leading-none tracking-[-0.03em] sm:text-[30px] lg:text-[42px]"
            >
              About
            </Link>

            <Link
              href="/recognition"
              onClick={() => setLogoMenuOpen(false)}
              className="border-b border-black/10 py-2.5 text-[24px] font-normal leading-none tracking-[-0.03em] sm:text-[30px] lg:text-[42px]"
            >
              Recognition
            </Link>

            <Link
              href="/contact"
              onClick={() => setLogoMenuOpen(false)}
              className="flex items-center border-b border-black/10 py-2.5 text-[24px] font-normal leading-none tracking-[-0.03em] sm:text-[30px] lg:text-[42px]"
            >
              Contact

              <ArrowUpRight
                strokeWidth={1.5}
                className="ml-1 h-5 w-5 sm:h-6 sm:w-6 lg:h-[26px] lg:w-[26px]"
              />
            </Link>
          </nav>

          {/* =====================================================
              BOTTOM INFO
          ===================================================== */}

          <div className="mt-auto flex items-end justify-between pt-16 text-[12px] sm:text-sm">
            <Link
              href="/"
              onClick={() => setLogoMenuOpen(false)}
            >
              Liam Cassano
            </Link>

            <div className="flex flex-col items-end">
              <a
                href="https://www.instagram.com/liamcassdesign?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/in/liam-cassano-153311221/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          DESKTOP MENU BUTTON
      ===================================================== */}

      {!isMobile() && (
        <div
          ref={button}
          className="fixed right-0 top-8 z-20 scale-0 transform"
        >
          <Menu />
        </div>
      )}

      {/* =====================================================
          MOBILE MENU BUTTON
      ===================================================== */}

      {isMobile() && (
        <div className="fixed right-2 top-8 z-20 transform">
          <Menu />
        </div>
      )}
    </>
  );
}