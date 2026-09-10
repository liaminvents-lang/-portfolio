'use client';

import React from 'react';
import Layout from '@/components/layout';
import SideProjectList from './components/SideProjectList';

export default function SideProjectsPage() {
  return (
    <Layout title="">
      <main className="w-full pb-24">
        <div className="mx-auto w-full max-w-[1400px] px-5">
          {/* HEADER */}

          <section className="pb-10 pt-4">
            <h1 className="m-0 text-5xl font-normal tracking-tight lg:text-7xl">
              Side Projects
            </h1>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <p className="m-0 max-w-[680px] text-base leading-[1.6] text-foreground/50">
                Tools, machines, prototypes, and experiments developed in
                support of larger ideas.
              </p>

              <a
                href="#projects"
                className="w-fit border-b border-foreground pb-1 text-sm transition-opacity hover:opacity-50"
              >
                view projects ↓
              </a>
            </div>
          </section>

          <div className="border-t border-foreground/40" />

          {/* PROJECTS */}

          <section id="projects" className="pt-10">
            <SideProjectList />
          </section>
        </div>
      </main>
    </Layout>
  );
}