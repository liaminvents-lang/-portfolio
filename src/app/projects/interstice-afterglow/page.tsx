'use client';

import Layout from '@/components/layout';
import Image from 'next/image';

/* =====================================================
   PROJECT GALLERY
===================================================== */

const galleryImages = [
  {
    src: 'section1.PNG',
    alt: 'INTERSTICE — Afterglow concept',
  },
  {
    src: 'sec2day.PNG',
    alt: 'INTERSTICE — Afterglow daytime view',
  },
  {
    src: 'sec2night.PNG',
    alt: 'INTERSTICE — Afterglow nighttime view',
  },
  {
    src: 'dimensions.png',
    alt: 'INTERSTICE — Afterglow dimensions and drawings',
  },
  {
    src: 'process.png',
    alt: 'Hydroformed panel fabrication process',
  },
  {
    src: 'IMG_7509 2.JPG',
    alt: 'Fabricated hydroformed metal panel prototype',
  },
  {
    src: 'interior.png',
    alt: 'INTERSTICE — Afterglow interior',
  },
];

export default function IntersticeAfterglowPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="w-full px-5 pt-5 sm:px-8 sm:pt-8 lg:px-12 lg:pt-10">
          <div className="relative mx-auto aspect-[16/9] w-full max-w-[1800px] overflow-hidden bg-foreground/[0.04]">

            <Image
              src="/images/afterglowthumb.png"
              alt="INTERSTICE — Afterglow"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="px-5 pb-16 pt-20 sm:px-8 lg:px-12 lg:pb-20 lg:pt-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">

              <div className="lg:col-span-7">

                <p className="m-0 text-sm text-foreground/40">
                  Design-Build · Light Installation
                </p>

                <h1 className="m-0 mt-4 max-w-[1200px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  INTERSTICE
                  <br />
                  Afterglow
                </h1>

              </div>

              <div className="flex items-end lg:col-span-5">

                <div className="max-w-[650px]">

                  <p className="m-0 text-xl leading-[1.45] sm:text-2xl">
                    A proposed walk-through light pavilion combining timber
                    construction, hydroformed reflective metal, and responsive
                    illumination.
                  </p>

                  <p className="m-0 mt-6 text-sm leading-[1.65] text-foreground/50">
                    Submitted as a proposal for Lumière 2027 at Trillium Park.
                    The pavilion has not yet been built. The hydroformed metal
                    panel system has been physically fabricated, prototyped,
                    and tested as part of the design development.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            METADATA
        ===================================================== */}

        <section className="border-y border-foreground/20 px-5 sm:px-8 lg:px-12">
          <div className="mx-auto grid w-full max-w-[1800px] grid-cols-2 lg:grid-cols-6">

            <div className="border-r border-foreground/20 py-5 pr-5">

              <p className="m-0 text-xs text-foreground/40">
                Type
              </p>

              <p className="m-0 mt-2 text-sm">
                Light Pavilion
              </p>

            </div>

            <div className="border-r border-foreground/20 px-5 py-5">

              <p className="m-0 text-xs text-foreground/40">
                Program
              </p>

              <p className="m-0 mt-2 text-sm">
                Lumière 2027
              </p>

            </div>

            <div className="border-r border-foreground/20 px-5 py-5">

              <p className="m-0 text-xs text-foreground/40">
                Location
              </p>

              <p className="m-0 mt-2 text-sm">
                Trillium Park · Toronto
              </p>

            </div>

            <div className="border-r border-foreground/20 px-5 py-5">

              <p className="m-0 text-xs text-foreground/40">
                Year
              </p>

              <p className="m-0 mt-2 text-sm">
                2026
              </p>

            </div>

            <div className="border-r border-foreground/20 px-5 py-5">

              <p className="m-0 text-xs text-foreground/40">
                Status
              </p>

              <p className="m-0 mt-2 text-sm">
                Submitted Proposal
              </p>

            </div>

            <div className="px-5 py-5">

              <p className="m-0 text-xs text-foreground/40">
                Team
              </p>

              <p className="m-0 mt-2 text-sm">
                Liam Cassano
                <br />
                Aaron Di Giacomo
              </p>

            </div>

          </div>
        </section>

        {/* =====================================================
            01 — CONCEPT
        ===================================================== */}

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <div className="border-t border-foreground/20 pt-5">

                  <p className="m-0 text-xs text-foreground/40">
                    01
                  </p>

                  <p className="m-0 mt-2 text-sm">
                    Concept
                  </p>

                </div>

              </div>

              <div className="lg:col-span-9">

                <div className="border-t border-foreground/20 pt-5">

                  <p className="m-0 max-w-[1100px] text-2xl leading-[1.25] sm:text-3xl lg:text-4xl">
                    Afterglow translates the fractures of a frozen landscape
                    into an experience of reflection, light, and movement.
                  </p>

                  <div className="mt-10 grid gap-8 sm:grid-cols-2">

                    <p className="m-0 max-w-[600px] text-sm leading-[1.7] text-foreground/60">
                      The installation draws from the tension between the
                      apparent stillness of a frozen surface and the movement,
                      pressure, and change occurring beneath it. Cracks become
                      lines that divide, connect, and reshape the landscape.
                    </p>

                    <p className="m-0 max-w-[600px] text-sm leading-[1.7] text-foreground/60">
                      During the day, reflective surfaces fragment the
                      surrounding winter landscape. At night, light emerges
                      through the spaces between the panels, transforming the
                      voids into illuminated fractures.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            SECTION 01 IMAGE
        ===================================================== */}

        <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <Image
              src="/images/section1.PNG"
              alt="INTERSTICE — Afterglow concept"
              width={2400}
              height={1600}
              sizes="100vw"
              className="h-auto w-full"
            />

          </div>
        </section>

        {/* =====================================================
            02 — ENGAGEMENT
        ===================================================== */}

        <section className="border-t border-foreground/20 px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-12 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-xs text-foreground/40">
                  02
                </p>

                <p className="m-0 mt-2 text-sm">
                  Engagement
                </p>

              </div>

              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1000px] text-2xl leading-[1.25] sm:text-3xl">
                  Visitors become part of a continuously changing landscape
                  through reflection during the day and responsive light after
                  dark.
                </p>

                <div className="mt-10 grid gap-8 sm:grid-cols-2">

                  <div>

                    <p className="m-0 text-xs text-foreground/40">
                      Day
                    </p>

                    <p className="m-0 mt-4 max-w-[560px] text-sm leading-[1.7] text-foreground/60">
                      Curved reflective surfaces pull visitors and the
                      surrounding landscape into the pavilion. Reflections
                      stretch, disappear, and reappear as people move through
                      the space.
                    </p>

                  </div>

                  <div>

                    <p className="m-0 text-xs text-foreground/40">
                      Night
                    </p>

                    <p className="m-0 mt-4 max-w-[560px] text-sm leading-[1.7] text-foreground/60">
                      Concealed lighting activates the gaps between panels.
                      Visitor movement produces changing illuminated lines,
                      creating temporary traces that overlap as multiple people
                      move through the installation.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            DAY / NIGHT
        ===================================================== */}

        <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-24">
          <div className="mx-auto grid w-full max-w-[1800px] gap-3 sm:grid-cols-2 lg:gap-4">

            <div className="overflow-hidden bg-foreground/[0.04]">

              <Image
                src="/images/sec2day.PNG"
                alt="INTERSTICE — Afterglow during the day"
                width={1800}
                height={1200}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="h-auto w-full"
              />

            </div>

            <div className="overflow-hidden bg-foreground/[0.04]">

              <Image
                src="/images/sec2night.PNG"
                alt="INTERSTICE — Afterglow at night"
                width={1800}
                height={1200}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="h-auto w-full"
              />

            </div>

          </div>
        </section>

        {/* =====================================================
            03 — FORM + STRUCTURE
        ===================================================== */}

        <section className="border-t border-foreground/20 px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-12 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-xs text-foreground/40">
                  03
                </p>

                <p className="m-0 mt-2 text-sm">
                  Form + Structure
                </p>

              </div>

              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1000px] text-2xl leading-[1.25] sm:text-3xl">
                  A free-standing timber structure creates a sheltered passage
                  lined with a secondary field of reflective metal panels.
                </p>

                <div className="mt-10 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 max-w-[560px] text-sm leading-[1.7] text-foreground/60">
                    The pavilion is conceived as a modular system that can be
                    fabricated off-site, transported in sections, and assembled
                    at Trillium Park.
                  </p>

                  <p className="m-0 max-w-[560px] text-sm leading-[1.7] text-foreground/60">
                    The timber construction establishes the primary geometry,
                    while the interior metal skin creates a contrasting
                    reflective surface that changes with viewpoint, weather,
                    and light.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            SECTION 03 — DIMENSIONS
        ===================================================== */}

        <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <Image
              src="/images/dimensions.png"
              alt="INTERSTICE — Afterglow pavilion dimensions"
              width={2400}
              height={1600}
              sizes="100vw"
              className="h-auto w-full"
            />

          </div>
        </section>

        {/* =====================================================
            04 — HYDROFORMED PANELS
        ===================================================== */}

        <section className="border-t border-foreground/20 px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-12 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-xs text-foreground/40">
                  04
                </p>

                <p className="m-0 mt-2 text-sm">
                  Hydroformed Panels
                </p>

              </div>

              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1050px] text-2xl leading-[1.25] sm:text-3xl">
                  The interior panel system was developed beyond the proposal
                  through physical fabrication and testing, validating the
                  hydroforming process at prototype scale.
                </p>

                <p className="m-0 mt-7 max-w-[850px] text-sm leading-[1.7] text-foreground/60">
                  While the complete pavilion remains unbuilt, the proposed
                  metal fabrication workflow has been physically tested.
                  Individual panels were cut, welded into sealed cavities,
                  pressure-formed into three-dimensional surfaces, and
                  evaluated as prototypes for the reflective interior system.
                </p>

                <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">

                  <div className="border-t border-foreground/20 pt-4">

                    <p className="m-0 text-xs text-foreground/40">
                      01
                    </p>

                    <p className="m-0 mt-3 text-lg">
                      Cutting
                    </p>

                    <p className="m-0 mt-4 text-sm leading-[1.65] text-foreground/60">
                      Metal sheets are nested and cut to establish the
                      perimeter geometry of each panel.
                    </p>

                  </div>

                  <div className="border-t border-foreground/20 pt-4">

                    <p className="m-0 text-xs text-foreground/40">
                      02
                    </p>

                    <p className="m-0 mt-3 text-lg">
                      Welding
                    </p>

                    <p className="m-0 mt-4 text-sm leading-[1.65] text-foreground/60">
                      Matching sheets are welded around their perimeter,
                      creating a sealed cavity with a pressure inlet.
                    </p>

                  </div>

                  <div className="border-t border-foreground/20 pt-4">

                    <p className="m-0 text-xs text-foreground/40">
                      03
                    </p>

                    <p className="m-0 mt-3 text-lg">
                      Forming
                    </p>

                    <p className="m-0 mt-4 text-sm leading-[1.65] text-foreground/60">
                      Internal pressure expands the sealed cavity and transforms
                      the flat sheets into a three-dimensional panel.
                    </p>

                  </div>

                  <div className="border-t border-foreground/20 pt-4">

                    <p className="m-0 text-xs text-foreground/40">
                      04
                    </p>

                    <p className="m-0 mt-3 text-lg">
                      Finishing
                    </p>

                    <p className="m-0 mt-4 text-sm leading-[1.65] text-foreground/60">
                      The formed surfaces are ground and polished to develop
                      the reflective finish proposed for the pavilion interior.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            SECTION 04 — PROCESS + PROTOTYPE
        ===================================================== */}

        <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <Image
              src="/images/process.png"
              alt="Hydroformed panel fabrication process"
              width={2400}
              height={1600}
              sizes="100vw"
              className="h-auto w-full"
            />

            <div className="mt-4 sm:mt-6 lg:mt-8">

              <Image
                src="/images/IMG_7509 2.JPG"
                alt="Fabricated hydroformed metal panel prototype"
                width={2000}
                height={1500}
                sizes="100vw"
                className="h-auto w-full"
              />

            </div>

          </div>
        </section>

        {/* =====================================================
            05 — LIGHT + INTERACTION
        ===================================================== */}

        <section className="border-t border-foreground/20 px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-12 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-xs text-foreground/40">
                  05
                </p>

                <p className="m-0 mt-2 text-sm">
                  Light + Interaction
                </p>

              </div>

              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1000px] text-2xl leading-[1.25] sm:text-3xl">
                  Light occupies the gaps between the metal surfaces,
                  transforming the pavilion from a reflective object into a
                  responsive field after dark.
                </p>

                <div className="mt-10 grid gap-8 sm:grid-cols-2">

                  <p className="m-0 max-w-[560px] text-sm leading-[1.7] text-foreground/60">
                    Concealed LEDs are proposed within the gaps between the
                    hydroformed panels, emphasizing the geometry of the
                    pavilion without exposing the lighting hardware.
                  </p>

                  <p className="m-0 max-w-[560px] text-sm leading-[1.7] text-foreground/60">
                    Sensors are proposed to detect visitors moving through the
                    installation. Lighting would respond dynamically to
                    movement, allowing illuminated patterns to shift as people
                    pass through the pavilion.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            SECTION 05 — INTERIOR
        ===================================================== */}

        <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <Image
              src="/images/interior.png"
              alt="Proposed INTERSTICE — Afterglow illuminated interior"
              width={2400}
              height={1600}
              sizes="100vw"
              className="h-auto w-full"
            />

          </div>
        </section>

        {/* =====================================================
            07 — TEAM
        ===================================================== */}

        <section className="border-t border-foreground/20 px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-12 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-xs text-foreground/40">
                  07
                </p>

                <p className="m-0 mt-2 text-sm">
                  Team
                </p>

              </div>

              <div className="lg:col-span-9">

                <div className="grid gap-12 sm:grid-cols-2 lg:gap-16">

                  {/* LIAM */}

                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-2xl">
                      Liam Cassano
                    </p>

                    <p className="m-0 mt-2 text-sm text-foreground/40">
                      Architectural Designer + Fabricator
                    </p>

                    <p className="m-0 mt-6 max-w-[600px] text-sm leading-[1.7] text-foreground/60">
                      Liam Cassano is an architectural designer and fabricator
                      based in Toronto. His work spans architectural
                      fabrication, robotics, and film, combining digital
                      processes with hands-on experience in metalworking,
                      woodworking, and electrical systems. His practice is
                      grounded in material experimentation and the development
                      of new methods of making, with an interest in how
                      fabrication, technology, and visual storytelling can
                      shape spatial experiences.
                    </p>

                  </div>

                  {/* AARON */}

                  <div className="border-t border-foreground/20 pt-5">

                    <p className="m-0 text-2xl">
                      Aaron Di Giacomo
                    </p>

                    <p className="m-0 mt-2 text-sm text-foreground/40">
                      Architectural Designer + Fabricator
                    </p>

                    <p className="m-0 mt-6 max-w-[600px] text-sm leading-[1.7] text-foreground/60">
                      Aaron Di Giacomo is an architectural designer and
                      fabricator based in Toronto. He is currently pursuing his
                      Master of Architecture at the John H. Daniels Faculty of
                      Architecture, Landscape, and Design at the University of
                      Toronto, where his work explores the intersection of
                      computational design and robotic fabrication. His
                      research interests include developing digital workflows
                      that connect computational design with physical making,
                      and a particular interest in how emerging fabrication
                      technologies can be applied.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            08 — PROJECT IMAGES
        ===================================================== */}

        <section className="border-t border-foreground/20 py-20 lg:py-24">

          {/* HEADER */}

          <div className="px-5 sm:px-8 lg:px-12">
            <div className="mx-auto w-full max-w-[1800px]">

              <div className="mb-12 grid gap-6 lg:grid-cols-12">

                <div className="lg:col-span-3">

                  <p className="m-0 text-xs text-foreground/40">
                    08
                  </p>

                  <p className="m-0 mt-2 text-sm">
                    Project Images
                  </p>

                </div>

                <div className="lg:col-span-9">

                  <p className="m-0 max-w-[650px] text-sm leading-[1.6] text-foreground/50">
                    Proposal imagery, design development, drawings, and
                    physical hydroforming tests developed for INTERSTICE —
                    Afterglow.
                  </p>

                </div>

              </div>

            </div>
          </div>

          {/* =====================================================
              FULL-WIDTH IMAGE FIELD
          ===================================================== */}

          <div className="w-full px-2 sm:px-3 lg:px-4">

            <div className="columns-1 gap-2 sm:columns-2 sm:gap-3 lg:columns-4 lg:gap-4">

              {galleryImages.map((image) => (
                <div
                  key={image.src}
                  className="mb-2 break-inside-avoid overflow-hidden bg-foreground/[0.04] sm:mb-3 lg:mb-4"
                >

                  <Image
                    src={`/images/${image.src}`}
                    alt={image.alt}
                    width={2000}
                    height={1400}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="h-auto w-full"
                  />

                </div>
              ))}

            </div>

          </div>

        </section>

      </main>
    </Layout>
  );
}