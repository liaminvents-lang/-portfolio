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
    title: 'Robotic Wire Tying for Discrete Assembly',
    src: '/images/rebartie.png',
    description:
      'Sensor-integrated connection-making for automated and multi-robot assembly.',
    href: '/projects/robotic-wire-tying',
    categories: ['Robotics', 'Fabrication', 'Research'],
    year: '2026',
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
    title: 'Digital Joinery for Irregular Materials',
    src: '/images/woodnrock.png',
    description:
      'Custom computational joinery developed for irregular and found material geometries.',
    href: '/projects/readymade',
    categories: ['Digital Fabrication', '3D Scanning', 'CNC Milling'],
    year: '2024',
    group: 'selected',
  },
  {
    title: 'Learning Through London Mews',
    src: '/images/mewsthumb1.png',
    description:
      'Architectural research exploring learning, community, and the spatial conditions of the London mews.',
    href: '',
    categories: ['Architecture', 'Research', 'Design'],
    year: '2025',
    group: 'selected',
  },
  {
    title: 'Solar Responsive Tower',
    src: '/images/280tower1.png',
    description:
      'A responsive facade system developed through computational design and environmental analysis.',
    href: '',
    categories: ['Architecture', 'Computational Design', 'Environment'],
    year: '2024',
    group: 'selected',
  },
  {
    title: 'Imago Machina',
    src: '/images/mirrorwall.png',
    description:
      'An interactive installation exploring computation, physical systems, and responsive environments.',
    href: '',
    categories: ['Interactive Systems', 'Installation', 'Fabrication'],
    year: '2024',
    group: 'selected',
  },
  {
    title: 'Aeolian Soundscapes / Timber Tectonics',
    src: '/images/Aeolian.jpg',
    description:
      'Full-scale architectural installations developed through computational design and robotic fabrication.',
    href: '/projects/aeolian-soundscapes-timber-tectonics',
    categories: ['Design-Build', 'Robotic Fabrication', 'Timber'],
    year: '2025',
    group: 'design-build',
    imageClassName: 'object-cover object-[center_70%]',
  },
  {
    title: 'Geosphere: Beyond Single-Use Reciprocal Frame Structures',
    src: '/images/geosphere.JPG',
    description:
      'A full-scale reciprocal frame structure investigating reusable timber assembly systems.',
    href: '/projects/geosphere',
    categories: ['Design-Build', 'Timber', 'Assembly'],
    year: '2025',
    group: 'design-build',
  },
  {
    title: 'Lucid Frequencies',
    src: '/images/lucid.jpg',
    description:
      'A full-scale architectural installation developed through digital and robotic fabrication.',
    href: '/projects/lucid-frequencies',
    categories: ['Design-Build', 'Installation', 'Fabrication'],
    year: '2025',
    group: 'design-build',
  },
  {
    title: 'Resonance in Pottery: Acoustic Clay Vases',
    src: '/images/clayphoto.png',
    description:
      'Architectural ceramic fabrication exploring acoustic performance through robotically fabricated clay forms.',
    href: '/projects/resonance-in-pottery',
    categories: ['Ceramics', 'Robotic Fabrication', 'Acoustics'],
    year: '2025',
    group: 'design-build',
  },
  {
    title: 'Robot Made 2024 · U of T',
    src: '/images/robotmadeuoft.JPG',
    description:
      'Full-scale design-build fabrication developed through the University of Toronto Robot Made program.',
    href: '/projects/robot-made-2024-uoft',
    categories: ['Design-Build', 'Robotic Fabrication', 'Assembly'],
    year: '2024',
    group: 'design-build',
  },
  {
    title: 'Robot Made 2025 · U of T',
    src: '/images/robotmadepart2.JPG',
    description:
      'Full-scale robotic design-build fabrication developed at the University of Toronto.',
    href: '/projects/robot-made-2025-uoft',
    categories: ['Design-Build', 'Robotic Fabrication', 'Assembly'],
    year: '2025',
    group: 'design-build',
  },
  {
    title: 'Robot Made 2025 · UBC SALA',
    src: '/images/DSC03407.jpg',
    description:
      'Full-scale robotic design-build fabrication developed at UBC SALA.',
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
  const isMews =
    project.title === 'Learning Through London Mews';

  const isSolar =
    project.title === 'Solar Responsive Tower';

  const isJoinery =
    project.title === 'Digital Joinery for Irregular Materials';

  const specialThumbnail =
    isMews || isSolar || isJoinery;

  const comingSoon = !project.href;

  const content = (
    <article
      className={`grid gap-3 py-4 sm:gap-7 sm:py-10 lg:grid-cols-12 lg:gap-10 lg:py-12 ${
        comingSoon ? 'opacity-40' : ''
      }`}
    >
      {/* IMAGE */}

      <div className="lg:col-span-5">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[10px] bg-white ring-1 ring-foreground/10 sm:rounded-[18px]">

          {specialThumbnail ? (
            <div className="flex h-full w-full items-center justify-center overflow-hidden">

              {isMews && (
                <Image
                  src={project.src}
                  alt={project.title}
                  width={1600}
                  height={1000}
                  className="h-[108%] w-[108%] object-cover object-center"
                />
              )}

              {isSolar && (
                <Image
                  src={project.src}
                  alt={project.title}
                  width={1600}
                  height={1000}
                  className="h-[108%] w-[108%] -translate-y-[3%] object-cover object-center"
                />
              )}

              {isJoinery && (
                <Image
                  src={project.src}
                  alt={project.title}
                  width={1400}
                  height={1000}
                  className="h-[82%] w-[82%] object-contain object-center sm:h-[88%] sm:w-[88%]"
                />
              )}

            </div>
          ) : (
            <Image
              src={project.src}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 42vw"
              className={
                project.imageClassName
                  ? `${project.imageClassName} transition-transform duration-700 ease-out group-hover:scale-[1.015]`
                  : 'object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]'
              }
            />
          )}

        </div>
      </div>

      {/* CONTENT */}

      <div className="flex flex-col justify-between lg:col-span-5">

        <div>

          <div className="flex items-start justify-between gap-3">

            <p className="m-0 text-[10px] text-foreground/35 sm:text-xs">
              {String(index + 1).padStart(2, '0')}
            </p>

            <p className="m-0 text-[10px] text-foreground/30 lg:hidden">
              {project.year}
            </p>

          </div>

          <div className="mt-1.5 flex flex-wrap items-center gap-2 sm:mt-4 sm:gap-3">

            <h2
              className={`m-0 max-w-[720px] text-[18px] font-semibold leading-[1.08] tracking-tight sm:text-3xl ${
                comingSoon ? 'text-foreground/40' : ''
              }`}
            >
              {project.title}
            </h2>

            {comingSoon && (
              <span className="rounded-full border border-foreground/15 px-2 py-0.5 text-[9px] text-foreground/35 sm:px-3 sm:py-1 sm:text-[11px]">
                Coming Soon
              </span>
            )}

          </div>

          <p className="m-0 mt-2 text-[12px] leading-[1.4] text-foreground/55 sm:mt-5 sm:max-w-[600px] sm:text-base sm:leading-[1.6]">
            {project.description}
          </p>

        </div>

        {/* MOBILE META */}

        <div className="mt-2 flex flex-wrap gap-x-2 gap-y-0.5 lg:hidden">

          {project.categories.map((category) => (
            <span
              key={category}
              className="text-[9px] leading-none text-foreground/40"
            >
              {category}
            </span>
          ))}

        </div>

        {/* BUTTON */}

        <div className="mt-3 sm:mt-8">

          <span
            className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[10px] sm:px-5 sm:py-2.5 sm:text-sm ${
              comingSoon
                ? 'cursor-default border-foreground/20 text-foreground/45'
                : 'border-foreground/25 transition-colors duration-300 group-hover:bg-foreground group-hover:text-background'
            }`}
          >
            View Project

            <span className="ml-2 sm:ml-4">
              →
            </span>

          </span>

        </div>

      </div>

      {/* DESKTOP METADATA */}

      <div className="hidden lg:col-span-2 lg:block">

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
  );

  if (comingSoon) {
    return (
      <div className="border-t border-foreground/20">
        {content}
      </div>
    );
  }

  return (
    <Link
      href={project.href}
      className="group block border-t border-foreground/20"
    >
      {content}
    </Link>
  );
}

/* =====================================================
   PAGE
===================================================== */

export default function ProjectsHome() {
  return (
    <Layout title="">

      <main className="-mt-[20vh] w-full bg-white pb-10 sm:mt-0 sm:pb-24">

        {/* =====================================================
            PAGE INTRO
        ===================================================== */}

        <section className="px-5 pb-7 pt-8 sm:px-8 sm:pb-16 sm:pt-6 lg:px-12 lg:pb-20 lg:pt-12">

          <div className="mx-auto grid w-full max-w-[1800px] gap-3 sm:gap-10 lg:grid-cols-12">

            <div className="lg:col-span-5">

              <h1 className="m-0 text-[36px] font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Projects
              </h1>

            </div>

            <div className="lg:col-span-7 lg:pt-7">

              <p className="m-0 max-w-[850px] text-[16px] font-normal leading-[1.35] sm:text-3xl">
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

            <div className="grid gap-1 pb-4 sm:gap-6 sm:pb-8 lg:grid-cols-12 lg:pb-10">

              <div className="lg:col-span-3">

                <p className="m-0 text-[14px] font-semibold text-foreground sm:text-sm sm:font-normal sm:text-foreground/40">
                  Selected Work
                </p>

              </div>

              <div className="lg:col-span-9">

                <p className="m-0 max-w-[650px] text-[11px] leading-[1.45] text-foreground/50 sm:text-sm sm:leading-[1.6]">
                  Independent and academic work spanning architecture,
                  robotics, computation, and material research.
                </p>

              </div>

            </div>

            {selectedWork.map((project, index) => (
              <ProjectRow
                key={project.title}
                project={project}
                index={index}
              />
            ))}

            <div className="border-t border-foreground/20" />

          </div>

        </section>

        {/* =====================================================
            DESIGN-BUILD
        ===================================================== */}

        <section className="px-5 pt-10 sm:px-8 sm:pt-28 lg:px-12 lg:pt-36">

          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-1 pb-4 sm:gap-6 sm:pb-8 lg:grid-cols-12 lg:pb-10">

              <div className="lg:col-span-3">

                <p className="m-0 text-[16px] font-semibold leading-none text-foreground sm:text-sm sm:font-normal sm:leading-normal sm:text-foreground/40">
                  Design-Build
                </p>

              </div>

              <div className="lg:col-span-9">

                <p className="m-0 max-w-[650px] text-[11px] leading-[1.45] text-foreground/50 sm:text-sm sm:leading-[1.6]">
                  Full-scale collaborative work contributed to through robotic
                  fabrication, prototyping, assembly, and construction.
                </p>

              </div>

            </div>

            {designBuild.map((project, index) => (
              <ProjectRow
                key={project.title}
                project={project}
                index={index + selectedWork.length}
              />
            ))}

            <div className="border-t border-foreground/20" />

          </div>

        </section>

      </main>

    </Layout>
  );
}