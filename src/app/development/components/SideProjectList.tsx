'use client';

import React, { useMemo } from 'react';
import { ProjectCard } from '@/components/ui/ProjectCard';

const projects = [
  /* =====================================================
     DEVELOPMENT
  ===================================================== */

  {
    id: 'robotic-bending-gripper',
    title: 'Robotic Bending Gripper',
    description:
      'Custom robotic end-effector developed for controlled timber manipulation during robotic steam bending.',
    imagePath: '/images/thegripper.PNG',
    link: '/projects/steam-bending-gripper',
    comingSoon: false,
    group: 'development',
    tags: ['Hardware Integration', 'KUKA', 'Pneumatics'],
  },
  {
    id: 'rebar-gripper',
    title: 'Rebar Gripper',
    description:
      'Custom UR end-effector integrating robotic gripping with depth-camera sensing for rebar manipulation.',
    imagePath: '/images/urgriprender.png',
    link: '/projects/rebar-gripper',
    comingSoon: false,
    group: 'development',
    tags: [
      'Hardware Integration',
      'C++',
      'Computer Vision',
      'Arduino',
      'Universal Robots',
      'Pneumatics',
    ],
  },
  {
    id: 'rebar-tying-tool',
    title: 'Rebar Tying Tool',
    description:
      'Sensor-integrated robotic end-effector developed for automated wire tying and connection-making.',
    imagePath: '/images/rebartiethumb.png',
    link: '/projects/rebar-tying-tool',
    comingSoon: true,
    group: 'development',
    tags: [
      'Hardware Integration',
      'C++',
      'Embedded Systems',
      'Electronics',
      'Sensors',
      'KUKA',
      'Custom PCB',
      'Teensy',
      'Pneumatics',
    ],
  },
  {
    id: 'lignin-3d-printing-extruder',
    title: 'Lignin 3D Printing Extruder',
    description:
      'Custom extrusion system developed for experimental additive manufacturing with lignin-based materials.',
    imagePath: '/images/lignignextruderthumb.png',
    link: '/projects/lignin-3d-printing-extruder',
    comingSoon: false,
    group: 'development',
    tags: [
      'Hardware Integration',
      'Electronics',
      'Sensors',
      'Custom PCB',
    ],
  },
  {
    id: 'heat-press',
    title: 'Heat Press',
    description:
      'Custom heated press developed for material research and fabrication of lignin-based wood composites.',
    imagePath: '/images/heatpressthumb.png',
    link: '/projects/heat-press',
    comingSoon: false,
    group: 'development',
    tags: [
      'Hardware Integration',
      'Electronics',
      'Sensors',
      'Process Improvement',
    ],
  },
  {
    id: 'universal-testing-machine',
    title: 'Universal Testing Machine',
    description:
      'Custom testing machine developed for quasi-static mechanical testing of fabricated connections.',
    imagePath: '/images/Picture2.png',
    link: '/projects/universal-testing-machine',
    comingSoon: false,
    group: 'development',
    tags: [
      'Hardware Integration',
      'C++',
      'Embedded Systems',
      'Electronics',
      'Sensors',
      'Custom PCB',
      'Teensy',
    ],
  },
  {
    id: 'wood-steamer-cart',
    title: 'Wood Steamer Cart',
    description:
      'Mobile steam-generation system developed for full-scale robotic wood bending experiments.',
    imagePath: '/images/wood steamer render.png',
    link: '/projects/custom-steamer',
    comingSoon: false,
    group: 'development',
    tags: ['Hardware Integration', 'Process Improvement'],
  },
  {
    id: 'compression-strap',
    title: 'Compression Strap',
    description:
      'Custom compression system developed to control timber deformation during steam bending.',
    imagePath: '/images/compression.png',
    link: '/projects/compression-strap',
    comingSoon: false,
    group: 'development',
    tags: ['Hardware Integration', 'Process Improvement'],
  },
  {
    id: 'astm-testing-molds',
    title: 'ASTM Testing Molds',
    description:
      'Custom molds developed for repeatable material specimen fabrication and mechanical testing.',
    imagePath: '/images/Picture1.jpg',
    link: '/projects/astm-testing-molds',
    comingSoon: false,
    group: 'development',
    tags: ['Hardware Integration'],
  },

  /* =====================================================
     ARCHIVE
  ===================================================== */

  {
    id: 'cnc-wire-machine',
    title: 'CNC Wire Machine',
    description:
      'Automated machine developed for cutting, stripping, and bending breadboard wire.',
    imagePath: '',
    link: '/projects/cnc-wire-machine',
    comingSoon: false,
    group: 'archive',
    tags: [
      'Hardware Integration',
      'Electronics',
      'C++',
      'Embedded Systems',
      'Arduino',
      'Custom PCB',
    ],
  },
  {
    id: 'water-quality-sensing-platform',
    title: 'Water Quality Sensing Platform',
    description:
      'Environmental sensing platform developed to collect and map water-quality data using a mobile watercraft and towed sensor pod.',
    imagePath: '',
    link: '/projects/water-quality-sensing-platform',
    comingSoon: false,
    group: 'archive',
    tags: [
      'Hardware Integration',
      'Electronics',
      'C++',
      'Embedded Systems',
      'Sensors',
      'Teensy',
    ],
  },
  {
    id: 'desktop-mini-fridge',
    title: 'Desktop Mini Fridge',
    description:
      'Custom desktop cooling system developed to improve temperature control, efficiency, size, and enclosure design.',
    imagePath: '/images/fridge.png',
    link: '/projects/desktop-mini-fridge',
    comingSoon: false,
    group: 'archive',
    tags: [
      'Hardware Integration',
      'Electronics',
      'C++',
      'Embedded Systems',
      'Sensors',
      'Arduino',
      'Custom PCB',
    ],
  },
  {
    id: 'cable-diagnostic-system',
    title: 'Cable Diagnostic System',
    description:
      'Portable electronic diagnostic system developed for testing multiple cable standards through a touchscreen interface.',
    imagePath: '/images/cabletest.png',
    link: '/projects/cable-diagnostic-system',
    comingSoon: false,
    group: 'archive',
    tags: [
      'Hardware Integration',
      'Electronics',
      'C++',
      'Embedded Systems',
      'Sensors',
      'Arduino',
      'Custom PCB',
    ],
  },
  {
    id: 'nrf24-rc-air-boat',
    title: 'nRF24 RC Air Boat',
    description:
      '3D-printed remote-controlled air boat integrating wireless communication, motor control, electronics, and fabrication.',
    imagePath: '',
    link: '/projects/nrf24-rc-air-boat',
    comingSoon: false,
    group: 'archive',
    tags: [
      'Hardware Integration',
      'Electronics',
      'C++',
      'Embedded Systems',
      'Arduino',
      'Custom PCB',
    ],
  },
  {
    id: 'drone-drop-system',
    title: 'Drone Drop System',
    description:
      'Wireless payload-release system developed for remote deployment from a drone.',
    imagePath: '',
    link: '/projects/drone-drop-system',
    comingSoon: false,
    group: 'archive',
    tags: [
      'Hardware Integration',
      'Electronics',
      'C++',
      'Embedded Systems',
      'Arduino',
      'Custom PCB',
    ],
  },
  {
    id: 'atmega328p-development-boards',
    title: 'ATmega328P Development Boards',
    description:
      'Progression from a breadboard ATmega328P circuit to a permanent soldered standalone microcontroller board.',
    imagePath: '',
    link: '/projects/atmega328p-development-boards',
    comingSoon: false,
    group: 'archive',
    tags: [
      'Hardware Integration',
      'Electronics',
      'C++',
      'Embedded Systems',
      'Arduino',
    ],
  },
  {
    id: 'chump-computer',
    title: 'CHUMP Computer',
    description:
      'Custom 4-bit computer developed through clock, counter, EEPROM, ALU, memory, and control-system integration.',
    imagePath: '/images/chump.png',
    link: '/projects/chump-computer',
    comingSoon: false,
    group: 'archive',
    tags: ['Hardware Integration', 'Electronics'],
  },
  {
    id: 'ask-uno',
    title: 'Ask Uno',
    description:
      'Two-microcontroller communication project developed around serial communication and LCD interfaces.',
    imagePath: '',
    link: '/projects/ask-uno',
    comingSoon: false,
    group: 'archive',
    tags: [
      'Hardware Integration',
      'Electronics',
      'C++',
      'Embedded Systems',
      'Arduino',
    ],
  },
  {
    id: 'pb-machine',
    title: 'PB Machine',
    description:
      'Compact analog electronics project developed to explore circuit assembly and SMT soldering.',
    imagePath: '',
    link: '/projects/pb-machine',
    comingSoon: false,
    group: 'archive',
    tags: ['Hardware Integration', 'Electronics'],
  },
  {
    id: 'photogrammetry-turntable',
    title: 'Photogrammetry Turntable',
    description:
      'Motorized photography turntable developed using stepper control, joystick input, LCD feedback, and a custom 3D-printed enclosure.',
    imagePath: '',
    link: '/projects/photogrammetry-turntable',
    comingSoon: false,
    group: 'archive',
    tags: [
      'Hardware Integration',
      'Electronics',
      'Embedded Systems',
      'Arduino',
    ],
  },
  {
    id: 'voltage-h-bridge',
    title: 'Voltage H-Bridge',
    description:
      'Analog electronics exercise exploring voltage division and H-bridge circuit principles.',
    imagePath: '',
    link: '/projects/voltage-h-bridge',
    comingSoon: false,
    group: 'archive',
    tags: ['Hardware Integration', 'Electronics'],
  },
  {
    id: 'capacitor-visualizer',
    title: 'Capacitor Visualizer',
    description:
      'Analog circuit developed to visualize capacitor charging and timing behavior.',
    imagePath: '',
    link: '/projects/capacitor-visualizer',
    comingSoon: false,
    group: 'archive',
    tags: ['Hardware Integration', 'Electronics'],
  },
  {
    id: 'analog-oscillator',
    title: 'Analog Oscillator',
    description:
      'Transistor-based oscillator developed to explore switching, resistance, capacitance, and timing.',
    imagePath: '',
    link: '/projects/analog-oscillator',
    comingSoon: false,
    group: 'archive',
    tags: ['Hardware Integration', 'Electronics'],
  },
  {
    id: 'digital-logic-counting',
    title: 'Digital Logic & Counting Circuits',
    description:
      'Progressive digital electronics project exploring NAND logic, oscillation, decimal counting, binary counting, decoding, and seven-segment display output.',
    imagePath: '',
    link: '/projects/digital-logic-counting',
    comingSoon: false,
    group: 'archive',
    tags: ['Hardware Integration', 'Electronics'],
  },
  {
    id: 'analog-noise-level-meter',
    title: 'Analog Noise Level Meter',
    description:
      'Analog sound-level display developed using a microphone input and four cascaded LM3914 circuits driving a 40-LED display.',
    imagePath: '',
    link: '/projects/analog-noise-level-meter',
    comingSoon: false,
    group: 'archive',
    tags: ['Hardware Integration', 'Electronics', 'Sensors'],
  },
  {
    id: 'pin-change-interrupt',
    title: 'Pin Change Interrupt',
    description:
      'Microcontroller-based combination safe developed using register-level programming, a rotary encoder, and hardware interrupts.',
    imagePath: '',
    link: '/projects/pin-change-interrupt',
    comingSoon: false,
    group: 'archive',
    tags: [
      'Hardware Integration',
      'Electronics',
      'C++',
      'Embedded Systems',
      'Arduino',
    ],
  },

  /* =====================================================
     COMING SOON
  ===================================================== */

  {
    id: 'adaptive-pneumatic-gripper',
    title: 'Adaptive Pneumatic Gripper',
    description:
      'Adaptive pneumatic end-effector developed for robotic gripping and manipulation of variable geometries.',
    imagePath: '/images/adaptivegripperthumb.png',
    link: '/projects/adaptive-pneumatic-gripper',
    comingSoon: true,
    group: 'coming-soon',
    tags: ['Hardware Integration', 'Universal Robots', 'Pneumatics'],
  },
  {
    id: 'light-painting-tool',
    title: 'Light Painting Tool',
    description:
      'Custom UR end-effector developed for robotic light painting and long-exposure photography.',
    imagePath: '/images/swingylight.png',
    link: '/projects/light-painting-tool',
    comingSoon: true,
    group: 'coming-soon',
    tags: [
      'Hardware Integration',
      'C++',
      'Electronics',
      'Sensors',
      'Universal Robots',
      'Custom PCB',
      'Arduino',
    ],
  },
  {
    id: 'router-jig',
    title: 'Router Jig',
    description:
      'Custom fabrication jig developed for controlled and repeatable routing operations.',
    imagePath: '/images/router jig v1.png',
    link: '/projects/router-jig',
    comingSoon: true,
    group: 'coming-soon',
    tags: ['Hardware Integration', 'Process Improvement'],
  },
  {
    id: 'robotic-heat-gun-tool',
    title: 'Robotic Heat Gun Tool',
    description:
      'Robot-mounted heating tool developed for controlled material forming experiments.',
    imagePath: '',
    link: '/projects/steam-bending-heat-tool',
    comingSoon: true,
    group: 'coming-soon',
    tags: [
      'Hardware Integration',
      'Universal Robots',
      'Process Improvement',
    ],
  },
  {
    id: 'pneumatic-fixture-jig',
    title: 'Pneumatic Fixture Jig',
    description:
      'Custom pneumatic fixture developed for repeatable positioning and fabrication workflows.',
    imagePath: '',
    link: '/projects/pneumatic-fixture-jig',
    comingSoon: true,
    group: 'coming-soon',
    tags: [
      'Hardware Integration',
      'Pneumatics',
      'Process Improvement',
    ],
  },
  {
    id: 'remote-camera-controller',
    title: 'Remote Camera Controller',
    description:
      'Custom joystick controller developed for remote operation of a vehicle-mounted camera and gimbal.',
    imagePath: '',
    link: '/projects/remote-camera-controller',
    comingSoon: true,
    group: 'coming-soon',
    tags: [
      'Hardware Integration',
      'Electronics',
      'Embedded Systems',
    ],
  },
  {
    id: 'heavy-duty-scrim-frames',
    title: 'Heavy-Duty Scrim Frames',
    description:
      'Heavy-duty metal frames designed and fabricated to support large-format diffusion and lighting-control materials for film production.',
    imagePath: '',
    link: '/projects/heavy-duty-scrim-frames',
    comingSoon: true,
    group: 'coming-soon',
    tags: ['Hardware Integration'],
  },
  {
    id: 'banana-caliper',
    title: 'Banana Caliper',
    description:
      'Custom measuring tool developed through rapid prototyping and fabrication.',
    imagePath: '',
    link: '/projects/banana-caliper',
    comingSoon: true,
    group: 'coming-soon',
    tags: ['Hardware Integration'],
  },
  {
    id: 'peloton-weight-rack',
    title: 'Peloton Weight Rack',
    description:
      'Custom storage rack designed and fabricated for Peloton weights.',
    imagePath: '',
    link: '/projects/peloton-weight-rack',
    comingSoon: true,
    group: 'coming-soon',
    tags: ['Hardware Integration', 'Process Improvement'],
  },
  {
    id: 'hydroformed-sheet-metal',
    title: 'Hydroformed Sheet Metal',
    description:
      'Experimental sheet-metal forming process developed through custom tooling, hydraulic pressure, and iterative material testing.',
    imagePath: '',
    link: '/projects/hydroformed-sheet-metal',
    comingSoon: true,
    group: 'coming-soon',
    tags: ['Hardware Integration', 'Process Improvement'],
  },
  {
    id: 'steam-bent-lamp',
    title: 'Steam Bent Lamp',
    description:
      'Custom lighting object developed through steam bending, digital fabrication, and iterative material forming.',
    imagePath: '',
    link: '/projects/steam-bent-lamp',
    comingSoon: true,
    group: 'coming-soon',
    tags: ['Hardware Integration', 'Process Improvement'],
  },
];

interface SideProjectListProps {
  activeFilter: string;
}

type Project = (typeof projects)[number];

export default function SideProjectList({
  activeFilter,
}: SideProjectListProps) {
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) =>
      project.tags.includes(activeFilter),
    );
  }, [activeFilter]);

  const developmentProjects = projects.filter(
    (project) => project.group === 'development',
  );

  const archiveProjects = projects.filter(
    (project) => project.group === 'archive',
  );

  const comingSoonProjects = projects.filter(
    (project) => project.group === 'coming-soon',
  );

  const renderProject = (project: Project, index: number) => {
    const isHeatPress = project.id === 'heat-press';
    const isLigninExtruder =
      project.id === 'lignin-3d-printing-extruder';

    return (
      <div
        key={project.id}
        className={`
          relative bg-white
          ${project.comingSoon ? 'opacity-40' : 'opacity-100'}
          ${
            isHeatPress
              ? '[&_img]:scale-[0.82] [&_img]:object-contain'
              : ''
          }
          ${
            isLigninExtruder
              ? '[&_img]:scale-[0.92] [&_img]:object-contain'
              : ''
          }
        `}
      >
        {project.comingSoon && (
          <div className="pointer-events-none absolute right-4 top-4 z-20 rounded-full border border-foreground/15 bg-white px-3 py-1 text-xs text-foreground">
            Coming Soon
          </div>
        )}

        <div
          className={
            project.comingSoon
              ? 'pointer-events-none select-none'
              : ''
          }
        >
          <ProjectCard
            id={project.id}
            title={project.title}
            description={project.description}
            imagePath={project.imagePath}
            link={project.comingSoon ? '#' : project.link}
            index={index}
          />
        </div>
      </div>
    );
  };

  /* =====================================================
     FILTERED VIEW
  ===================================================== */

  if (activeFilter !== 'All') {
    return (
      <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) =>
          renderProject(project, index),
        )}
      </div>
    );
  }

  /* =====================================================
     ALL VIEW
  ===================================================== */

  return (
    <div className="w-full bg-white">

      {/* DEVELOPMENT */}

      <section>
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {developmentProjects.map((project, index) =>
            renderProject(project, index),
          )}
        </div>
      </section>

      {/* ARCHIVE */}

      <section className="mt-24 lg:mt-32">
        <div className="mb-8 border-b border-foreground/15 pb-4">
          <h2 className="m-0 text-3xl font-normal tracking-tight">
            Archive
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {archiveProjects.map((project, index) =>
            renderProject(
              project,
              developmentProjects.length + index,
            ),
          )}
        </div>
      </section>

      {/* COMING SOON */}

      <section className="mt-24 lg:mt-32">
        <div className="mb-8 border-b border-foreground/15 pb-4">
          <h2 className="m-0 text-3xl font-normal tracking-tight">
            Coming Soon
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {comingSoonProjects.map((project, index) =>
            renderProject(
              project,
              developmentProjects.length +
                archiveProjects.length +
                index,
            ),
          )}
        </div>
      </section>

    </div>
  );
}