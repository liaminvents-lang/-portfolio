'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProjectLink from '@/app/projects/projectLink';
import Modal from '@/app/projects/project/modal';
import Layout from '@/components/layout';
import { ModalContext } from './modalContext';

const projects = [
  {
    title: 'Robotic Wire Tying for Discrete Assembly',
    src: 'wiretie.png',
    description:
      'Sensor-integrated connection-making in automated fabrication.',
    href: '/projects/robotic-wire-tying',
    tag: 'KUKA KR150 · 2× UR10e · Intel RealSense · Siemens PLC',
    color: '#ffffff'
  },
  {
    title: 'Material Feedback in Robotic Steam Bending',
    src: 'acadia.JPG',
    description:
      'A quantitative approach to wood forming through robotic fabrication and material feedback.',
    href: '/projects/robotic-steam-bending',
    tag: 'KUKA KR150 · UR10e · HTC Vive Tracker · EinScan Pro 2X',
    color: '#ffffff'
  },
  {
    title: 'Reversible Wood Composites',
    src: 'Picture3.png',
    description:
      'Lignin-based systems for circular fabrication and reversible material assemblies.',
    href: '/projects/reversible-wood-composites',
    tag: 'Lignin Binder · Heated Press · ASTM Material Testing Standards',
    color: '#ffffff'
  },
  {
    title: 'Learning Through London Mews',
    src: '',
    description:
      'Architectural research and design exploring learning, community, and the spatial conditions of the London mews.',
    href: '/projects/learning-through-london-mews',
    tag: 'Architecture · Research · Design',
    color: '#ffffff'
  },
  {
    title: 'Solar Responsive Tower',
    src: '',
    description:
      'Responsive facade system investigating solar performance through computational design and environmental analysis.',
    href: '/projects/solar-responsive-tower',
    tag: 'Computational Design · Sunlight Analysis',
    color: '#ffffff'
  },
  {
    title: 'Digital Joinery for Irregular Materials',
    src: '',
    description:
      'Digital fabrication study exploring custom joinery between irregular found materials.',
    href: '/projects/readymade',
    tag: '3D Scanning · Computational Joinery · CNC Milling',
    color: '#ffffff'
  },
  {
    title: 'Imago Machina',
    src: '',
    description:
      'Interactive installation exploring relationships between computation, physical systems, and responsive environments.',
    href: '/projects/imago-machina',
    tag: 'Interactive Installation · Fabrication',
    color: '#ffffff'
  },
  {
    title: 'Aeolian Soundscapes / Timber Tectonics',
    src: '',
    description:
      'Full-scale architectural installations developed through computational design and robotic fabrication.',
    href: '/projects/aeolian-soundscapes-timber-tectonics',
    tag: 'Robotic Fabrication · Assembly',
    color: '#ffffff'
  },
  {
    title: 'Geosphere: Beyond Single-Use Reciprocal Frame Structures',
    src: '',
    description:
      'Full-scale reciprocal frame structure exploring robotic fabrication and reusable timber assemblies.',
    href: '/projects/geosphere',
    tag: 'Robotic Fabrication · Assembly',
    color: '#ffffff'
  },
  {
    title: 'Lucid Frequencies',
    src: '',
    description:
      'Full-scale architectural installation developed through digital and robotic fabrication.',
    href: '/projects/lucid-frequencies',
    tag: 'Robotic Fabrication · Assembly',
    color: '#ffffff'
  },
  {
    title: 'Resonance in Pottery: Acoustic Clay Vases',
    src: '',
    description:
      'Architectural ceramic fabrication exploring acoustic performance through robotically fabricated clay forms.',
    href: '/projects/resonance-in-pottery',
    tag: 'Robotic Fabrication · Assembly',
    color: '#ffffff'
  },
  {
    title: 'Robot Made 2024 · U of T',
    src: '',
    description:
      'Full-scale design-build fabrication developed through the University of Toronto Robot Made program.',
    href: '/projects/robot-made-2024-uoft',
    tag: 'Robotic Fabrication · Assembly',
    color: '#ffffff'
  },
  {
    title: 'Robot Made 2025 · U of T',
    src: '',
    description:
      'Full-scale robotic design-build fabrication developed at the University of Toronto.',
    href: '/projects/robot-made-2025-uoft',
    tag: 'Robotic Fabrication · Assembly',
    color: '#ffffff'
  },
  {
    title: 'Robot Made 2025 · UBC SALA',
    src: '',
    description:
      'Full-scale robotic design-build fabrication developed with UBC SALA.',
    href: '/projects/robot-made-2025-ubc-sala',
    tag: 'Robotic Fabrication · Assembly',
    color: '#ffffff'
  }
];

const selectedWorkCount = 7;

export default function ProjectsHome() {
  const [modal, setModal] = useState({
    active: false,
    index: 0
  });

  const selectedWork = projects.slice(0, selectedWorkCount);
  const designBuildPavilions = projects.slice(selectedWorkCount);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      <Layout title="">
        <main className="w-full pb-24">
          {/* SELECTED WORK */}

          <section className="px-5 pb-10 pt-4">
            <h1 className="m-0 text-5xl font-normal tracking-tight lg:text-7xl">
              Selected Work
            </h1>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <p className="m-0 max-w-[760px] text-base leading-[1.6] text-foreground/50">
                Selected research, architecture, robotic fabrication, and
                material investigations developed through design, testing, and
                making.
              </p>

              <a
                href="#selected-projects"
                className="w-fit border-b border-foreground pb-1 text-sm transition-opacity hover:opacity-50"
              >
                view projects ↓
              </a>
            </div>
          </section>

          <div className="mx-5 border-t border-foreground/40" />

          <section id="selected-projects" className="pt-10">
            <div className="m-0 overflow-hidden">
              {selectedWork.map((project, index) => (
                <Link href={project.href} key={project.title}>
                  <ProjectLink
                    index={index}
                    title={project.title}
                    tag={project.tag}
                  />
                </Link>
              ))}
            </div>
          </section>

          {/* DESIGN-BUILD PAVILIONS */}

          <section className="px-5 pb-10 pt-24 lg:pt-32">
            <h2 className="m-0 text-5xl font-normal tracking-tight lg:text-7xl">
              Design-Build Pavilions
            </h2>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <p className="m-0 max-w-[760px] text-base leading-[1.6] text-foreground/50">
                Selected projects contributed to through robotic fabrication
                and assembly.
              </p>

              <a
                href="#design-build-projects"
                className="w-fit border-b border-foreground pb-1 text-sm transition-opacity hover:opacity-50"
              >
                view projects ↓
              </a>
            </div>
          </section>

          <div className="mx-5 border-t border-foreground/40" />

          <section id="design-build-projects" className="pt-10">
            <div className="m-0 overflow-hidden">
              {designBuildPavilions.map((project, index) => (
                <Link href={project.href} key={project.title}>
                  <ProjectLink
                    index={index + selectedWorkCount}
                    title={project.title}
                    tag={project.tag}
                  />
                </Link>
              ))}
            </div>
          </section>

          <Modal projects={projects} />
        </main>
      </Layout>
    </ModalContext.Provider>
  );
}