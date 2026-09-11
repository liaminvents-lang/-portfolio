'use client';

import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout';

/* =====================================================
   PROJECTS
===================================================== */

const projects = [
  {
    title: 'Material Feedback in Robotic Steam Bending',
    src: '/images/acadia.JPG',
    description:
      'A quantitative approach to wood forming through robotic fabrication and material feedback.',
    href: '/projects/robotic-steam-bending',
    categories: ['Robotics', 'Material Research', 'Fabrication'],
    year: '2025',
    group: 'selected',
  },
  {
    title: 'Reversible Wood Composites',
    src: '/images/Picture3.png',
    description:
      'Lignin-based systems for circular fabrication and reversible material assemblies.',
    href: '/projects/reversible-wood-composites',
    categories: ['Material Research', 'Circular Fabrication', 'Testing'],
    year: '2026',
    group: 'selected',
  },
  {
    title: 'Learning Through London Mews',
    src: '',
    description:
      'Architectural research exploring learning, community, and the spatial conditions of the London mews.',
    href: '/projects/learning-through-london-mews',
    categories: ['Architecture', 'Research', 'Design'],
    year: '2025',
    group: 'selected',
  },
  {
    title: 'Solar Responsive Tower',
    src: '',
    description:
      'A responsive facade system developed through computational design and environmental analysis.',
    href: '/projects/solar-responsive-tower',
    categories: ['Architecture', 'Computational Design', 'Environment'],
    year: '2024',
    group: 'selected',
  },
  {
    title: 'Robotic Wire Tying for Discrete Assembly',
    src: '/images/wiretie.png',
    description:
      'Sensor-integrated connection-making for automated and multi-robot assembly.',
    href: '/projects/robotic-wire-tying',
    categories: ['Robotics', 'Fabrication', 'Research'],
    year: '2026',
    group: 'selected',
  },
  {
    title: 'Digital Joinery for Irregular Materials',
    src: '',
    description:
      'Custom computational joinery developed for irregular and found material geometries.',
    href: '/projects/readymade',
    categories: ['Digital Fabrication', '3D Scanning', 'CNC Milling'],
    year: '2024',
    group: 'selected',
  },
  {
    title: 'Imago Machina',
    src: '',
    description:
      'An interactive installation exploring computation, physical systems, and responsive environments.',
    href: '/projects/imago-machina',
    categories: ['Interactive Systems', 'Installation', 'Fabrication'],
    year: '2024',
    group: 'selected',
  },

  /* =====================================================
     DESIGN-BUILD
  ===================================================== */

  {
    title: 'Aeolian Soundscapes / Timber Tectonics',
    src: '',
    description:
      'Full-scale architectural installations developed through computational design and robotic fabrication.',
    href: '/projects/aeolian-soundscapes-timber-tectonics',
    categories: ['Design-Build', 'Robotic Fabrication', 'Timber'],
    year: '2025',
    group: 'design-build',
  },
  {
    title: 'Geosphere: Beyond Single-Use Reciprocal Frame Structures',
    src: '',
    description:
      'A full-scale reciprocal frame structure investigating reusable timber assembly systems.',
    href: '/projects/geosphere',
    categories: ['Design-Build', 'Timber', 'Assembly'],
    year: '2025',
    group: 'design-build',
  },
  {
    title: 'Lucid Frequencies',
    src: '',
    description:
      'A full-scale architectural installation developed through digital and robotic fabrication.',
    href: '/projects/lucid-frequencies',
    categories: ['Design-Build', 'Installation', 'Fabrication'],
    year: '2025',
    group: 'design-build',
  },
  {
    title: 'Resonance in Pottery: Acoustic Clay Vases',
    src: '',
    description:
      'Architectural ceramic fabrication exploring acoustic performance through robotically fabricated clay forms.',
    href: '/projects/resonance-in-pottery',
    categories: ['Ceramics', 'Robotic Fabrication', 'Acoustics'],
    year: '2025',
    group: 'design-build',
  },
  {
    title: 'Robot Made 2024 · U of T',
    src: '',
    description:
      'Full-scale design-build fabrication developed through the University of Toronto Robot Made program.',
    href: '/projects/robot-made-2024-uoft',
    categories: ['Design-Build', 'Robotic Fabrication', 'Assembly'],
    year: '2024',
    group: 'design-build',
  },
  {
    title: 'Robot Made 2025 · U of T',
    src: '',
    description:
      'Full-scale robotic design-build fabrication developed at the University of Toronto.',
    href: '/projects/robot-made-2025-uoft',
    categories: ['Design-Build', 'Robotic Fabrication', 'Assembly'],
    year: '2025',
    group: 'design-build',
  },
  {
    title: 'Robot Made 2025 · UBC SALA',
    src: '',
    description:
      'Full-scale robotic design-build fabrication developed with UBC SALA.',
    href: '/projects/robot-made-2025-ubc-sala',
    categories: ['Design-Build', 'Robotic Fabrication', 'Assembly'],
    year: '2025',
    group: 'design-build',
  },
];

const selectedWork = projects.filter(
  (project) => project.group === 'selected'
);

const designBuild = projects.filter(
  (project) => project.group === 'design-build'
);

/* =====================================================
   PROJECT ROW
===================================================== */

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <Link
      href={project.href}
      className="group block border-t border-foreground/20"
    >
      <article className="grid gap-7 py-10 lg:grid-cols-12 lg:gap-10 lg:py-12">

        {/* IMAGE */}

        <div className="lg:col-span-5">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-foreground/[0.035] ring-1 ring-foreground/10">

            {project.src ? (
              <Image
                src={project.src}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              />
            ) : (
              <div className="flex h-full w-full items-end p-5">
                <p className="m-0 text-xs text-foreground/25">
                  Project image
                </p>
              </div>
            )}

          </div>
        </div>

        {/* TITLE + DESCRIPTION */}

        <div className="flex flex-col justify-between lg:col-span-5">

          <div>

            <p className="m-0 text-xs text-foreground/35">
              {String(index + 1).padStart(2, '0')}
            </p>

            <h2 className="m-0 mt-4 max-w-[720px] text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl">
              {project.title}
            </h2>

            <p className="m-0 mt-5 max-w-[600px] text-base leading-[1.6] text-foreground/60">
              {project.description}
            </p>

          </div>

          <div className="mt-8">

            <span className="inline-flex items-center rounded-full border border-foreground/25 px-5 py-2.5 text-sm transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
              View Project

              <span className="ml-4 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>

          </div>

        </div>

        {/* METADATA */}

        <div className="lg:col-span-2">

          <div className="flex flex-col">

            {project.categories.map((category) => (
              <p
                key={category}
                className="m-0 text-sm leading-[1.65]"
              >
                {category}
              </p>
            ))}

            <p className="m-0 mt-7 text-sm text-foreground/40">
              {project.year}
            </p>

          </div>

        </div>

      </article>
    </Link>
  );
}

/* =====================================================
   PAGE
===================================================== */

export default function ProjectsHome() {
  return (
    <Layout title="">
      <main className="w-full pb-24">

        {/* =====================================================
            PAGE INTRO
        ===================================================== */}

        <section className="px-5 pb-16 pt-10 sm:px-8 lg:px-12 lg:pb-20 lg:pt-16">
          <div className="mx-auto grid w-full max-w-[1800px] gap-10 lg:grid-cols-12">

            <div className="lg:col-span-5">

              <p className="m-0 text-sm text-foreground/40">
                Work
              </p>

              <h1 className="m-0 mt-4 text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Projects
              </h1>

            </div>

            <div className="lg:col-span-7 lg:pt-7">

              <p className="m-0 max-w-[850px] text-2xl font-normal leading-[1.35] sm:text-3xl">
                Architecture, robotic fabrication, material research, and
                design-build work developed through computation, testing,
                and making.
              </p>

            </div>

          </div>
        </section>

        {/* =====================================================
            SELECTED WORK
        ===================================================== */}

        <section className="px-5 sm:px-8 lg:px-12">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-6 pb-8 lg:grid-cols-12 lg:pb-10">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  Selected Work
                </p>

              </div>

              <div className="lg:col-span-9">

                <p className="m-0 max-w-[650px] text-sm leading-[1.6] text-foreground/50">
                  Independent and academic work spanning architecture,
                  robotics, computation, and material research.
                </p>

              </div>

            </div>

            <div>
              {selectedWork.map((project, index) => (
                <ProjectRow
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>

            <div className="border-t border-foreground/20" />

          </div>
        </section>

        {/* =====================================================
            DESIGN-BUILD
        ===================================================== */}

        <section className="px-5 pt-28 sm:px-8 lg:px-12 lg:pt-36">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-6 pb-8 lg:grid-cols-12 lg:pb-10">

              <div className="lg:col-span-3">

                <p className="m-0 text-sm text-foreground/40">
                  Design-Build
                </p>

              </div>

              <div className="lg:col-span-9">

                <p className="m-0 max-w-[650px] text-sm leading-[1.6] text-foreground/50">
                  Full-scale collaborative work contributed to through robotic
                  fabrication, prototyping, assembly, and construction.
                </p>

              </div>

            </div>

            <div>
              {designBuild.map((project, index) => (
                <ProjectRow
                  key={project.title}
                  project={project}
                  index={index + selectedWork.length}
                />
              ))}
            </div>

            <div className="border-t border-foreground/20" />

          </div>
        </section>

      </main>
    </Layout>
  );
}