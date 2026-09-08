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
  }
];

export default function ProjectsHome() {
  const [modal, setModal] = useState({
    active: false,
    index: 0
  });

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      <Layout title="">
        <div className="px-5 pb-8 pt-4">
          <h1 className="m-0 text-5xl font-normal tracking-tight lg:text-7xl">
            Selected Work
          </h1>
        </div>

        <div className="m-0">
          <div className="m-0 overflow-hidden">
            {projects.map((project, index) => (
              <Link href={project.href} key={project.title}>
                <ProjectLink
                  index={index}
                  title={project.title}
                  tag={project.tag}
                />
              </Link>
            ))}
          </div>

          <Modal projects={projects} />
        </div>
      </Layout>
    </ModalContext.Provider>
  );
}