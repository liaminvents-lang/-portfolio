'use client';

import React, { useState } from 'react';
import Layout from '@/components/layout';
import SideProjectList from './components/SideProjectList';

const filters = [
  'All',
  'Hardware Integration',
  'Electronics',
  'C++',
  'Embedded Systems',
  'Computer Vision',
  'Sensors',
  'KUKA',
  'Universal Robots',
  'Custom PCB',
  'Teensy',
  'Arduino',
  'Pneumatics',
  'Process Improvement',
];

export default function DevelopmentPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <Layout title="">
      <main className="w-full pb-24">
        <div className="mx-auto w-full max-w-[1400px] px-5">

          {/* =====================================================
              INTRO
          ===================================================== */}

          <section className="pb-10 pt-4">
            <h1 className="m-0 text-5xl font-normal tracking-tight lg:text-7xl">
              Development
            </h1>

            <div className="mt-5">
              <p className="m-0 max-w-[680px] text-base leading-[1.6] text-foreground/50">
                A collection of technical work exploring how physical systems
                are designed, built, programmed, and tested.
              </p>
            </div>
          </section>

          {/* =====================================================
              FILTERS
          ===================================================== */}

          <div className="border-t border-foreground/40" />

          <section className="py-5">
            <div className="flex flex-nowrap items-center gap-x-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    whitespace-nowrap
                    border-0
                    bg-transparent
                    p-0
                    text-[13px]
                    transition-opacity
                    duration-200
                    ${
                      activeFilter === filter
                        ? 'opacity-100'
                        : 'opacity-40 hover:opacity-100'
                    }
                  `}
                >
                  {filter}
                </button>
              ))}
            </div>
          </section>

          <div className="border-t border-foreground/20" />

          {/* =====================================================
              PROJECTS
          ===================================================== */}

          <section id="projects" className="pt-10">
            <SideProjectList activeFilter={activeFilter} />
          </section>

        </div>
      </main>
    </Layout>
  );
}