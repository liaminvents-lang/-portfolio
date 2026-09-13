'use client';

import React from 'react';
import { ProjectCard } from '@/components/ui/ProjectCard';

const projects = [
  {
    id: 'robotic-bending-gripper',
    title: 'Robotic Bending Gripper',
    description:
      'Custom robotic end-effector developed for controlled timber manipulation during robotic steam bending.',
    imagePath: '/images/thegripper.PNG',
    link: '/projects/steam-bending-gripper'
  },
  {
    id: 'wood-steamer-cart',
    title: 'Wood Steamer Cart',
    description:
      'Mobile steam-generation system developed for full-scale robotic wood bending experiments.',
    imagePath: '/images/wood steamer render.png',
    link: '/projects/custom-steamer'
  },
  {
    id: 'compression-strap',
    title: 'Compression Strap',
    description:
      'Custom compression system developed to control timber deformation during steam bending.',
    imagePath: '/images/compression.png',
    link: '/projects/compression-strap'
  },
  {
    id: 'robotic-heat-gun-tool',
    title: 'Robotic Heat Gun Tool',
    description:
      'Robot-mounted heating tool developed for controlled material forming experiments.',
    imagePath: '',
    link: '/projects/steam-bending-heat-tool'
  },
  {
    id: 'rebar-gripper',
    title: 'Rebar Gripper',
    description:
      'Custom UR end-effector integrating robotic gripping with depth-camera sensing for rebar manipulation.',
    imagePath: '/images/urgriprender.png',
    link: '/projects/rebar-gripper'
  },
  {
    id: 'rebar-tying-tool',
    title: 'Rebar Tying Tool',
    description:
      'Sensor-integrated robotic end-effector developed for automated wire tying and connection-making.',
    imagePath: '',
    link: '/projects/rebar-tying-tool'
  },
  {
    id: 'light-painting-tool',
    title: 'Light Painting Tool',
    description:
      'Custom UR end-effector developed for robotic light painting and long-exposure photography.',
    imagePath: '',
    link: '/projects/light-painting-tool'
  },
  {
    id: 'pneumatic-fixture-jig',
    title: 'Pneumatic Fixture Jig',
    description:
      'Custom pneumatic fixture developed for repeatable positioning and fabrication workflows.',
    imagePath: '',
    link: '/projects/pneumatic-fixture-jig'
  },
  {
    id: 'router-jig',
    title: 'Router Jig',
    description:
      'Custom fabrication jig developed for controlled and repeatable routing operations.',
    imagePath: '',
    link: '/projects/router-jig'
  },
  {
    id: 'universal-testing-machine',
    title: 'Universal Testing Machine',
    description:
      'Custom testing machine developed for quasi-static mechanical testing of fabricated connections.',
    imagePath: '',
    link: '/projects/universal-testing-machine'
  },
  {
    id: 'heat-press',
    title: 'Heat Press',
    description:
      'Custom heated press developed for material research and fabrication of lignin-based wood composites.',
    imagePath: '',
    link: '/projects/heat-press'
  },
  {
    id: 'banana-caliper',
    title: 'Banana Caliper',
    description:
      'Custom measuring tool developed through rapid prototyping and fabrication.',
    imagePath: '',
    link: '/projects/banana-caliper'
  },
  {
    id: 'peloton-weight-rack',
    title: 'Peloton Weight Rack',
    description:
      'Custom storage rack designed and fabricated for Peloton weights.',
    imagePath: '',
    link: '/projects/peloton-weight-rack'
  },
  {
    id: 'astm-testing-molds',
    title: 'ASTM Testing Molds',
    description:
      'Custom molds developed for repeatable material specimen fabrication and mechanical testing.',
    imagePath: '',
    link: '/projects/astm-testing-molds'
  },
  {
    id: 'lignin-3d-printing-extruder',
    title: 'Lignin 3D Printing Extruder',
    description:
      'Custom extrusion system developed for experimental additive manufacturing with lignin-based materials.',
    imagePath: '',
    link: '/projects/lignin-3d-printing-extruder'
  }
];

export default function SideProjectList() {
  return (
    <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          imagePath={project.imagePath}
          link={project.link}
          index={index}
        />
      ))}
    </div>
  );
}