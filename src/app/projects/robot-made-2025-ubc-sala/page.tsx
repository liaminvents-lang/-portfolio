'use client';

import Layout from '@/components/layout';
import Image from 'next/image';

/* =====================================================
   GALLERY
===================================================== */

const galleryImages = [
  'DSC03483.jpg',
  'DSC02163.jpg',
  'DSC03581-2.jpg',
  'DSC02632.jpg',
  'DSC03015.jpg',
  'DSC03504.jpg',
  'DSC02358.jpg',
  'DSC02726.jpg',
  'DSC03447.jpg',
  'DSC02087.jpg',
  'DSC03567.jpg',
  'DSC02483.jpg',
  'DSC03134.jpg',
  'DSC02686.jpg',
  'DSC03542.jpg',
  'DSC02191.jpg',
  'DSC03032.jpg',
  'DSC03499.jpg',
  'DSC02448.jpg',
  'DSC03581.jpg',
  'DSC02953.jpg',
  'DSC02646.jpg',
  'DSC03471.jpg',
  'DSC01568.jpg',
  'DSC03552.jpg',
  'DSC02334.jpg',
  'DSC03452-2.jpg',
  'DSC02759.jpg',
  'DSC03619.jpg',
  'DSC02145.jpg',
  'DSC03565-2.jpg',
  'DSC02609.jpg',
  'DSC03003.jpg',
  'DSC03452.jpg',
  'DSC01535.jpg',
  'DSC03586.jpg',
  'DSC03114.jpg',
  'DSC02652.jpg',
];

export default function RobotMade2025UBCSALAPage() {
  return (
    <Layout title="">
      <main className="w-full">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="w-full px-5 pt-5 sm:px-8 sm:pt-8 lg:px-12 lg:pt-10">
          <div className="relative mx-auto aspect-[16/9] w-full max-w-[1800px] overflow-hidden bg-foreground/[0.04]">
            <Image
              src="/images/DSC03407.jpg"
              alt="Robot Made 2025 UBC SALA"
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
                  Design-Build
                </p>

                <h1 className="m-0 mt-4 max-w-[1200px] text-5xl font-normal leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                  Robot Made 2025 UBC SALA
                </h1>

              </div>

              <div className="flex items-end lg:col-span-5">

                <p className="m-0 max-w-[650px] text-xl leading-[1.45] sm:text-2xl">
                  A full-scale robotic timber design-build workshop at UBC
                  SALA, bringing together students, researchers, fabrication
                  specialists, and industry participants.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            METADATA
        ===================================================== */}

        <section className="border-y border-foreground/20 px-5 sm:px-8 lg:px-12">
          <div className="mx-auto grid w-full max-w-[1800px] grid-cols-2 lg:grid-cols-5">

            <div className="border-r border-foreground/20 py-5 pr-5">
              <p className="m-0 text-xs text-foreground/40">
                Type
              </p>

              <p className="m-0 mt-2 text-sm">
                Design-Build
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-5">
              <p className="m-0 text-xs text-foreground/40">
                Program
              </p>

              <p className="m-0 mt-2 text-sm">
                Robot Made
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-5">
              <p className="m-0 text-xs text-foreground/40">
                Location
              </p>

              <p className="m-0 mt-2 text-sm">
                UBC SALA · Vancouver
              </p>
            </div>

            <div className="border-r border-foreground/20 px-5 py-5">
              <p className="m-0 text-xs text-foreground/40">
                Year
              </p>

              <p className="m-0 mt-2 text-sm">
                2025
              </p>
            </div>

            <div className="px-5 py-5">
              <p className="m-0 text-xs text-foreground/40">
                Role
              </p>

              <p className="m-0 mt-2 text-sm">
                Student Participant + Documentation
              </p>
            </div>

          </div>
        </section>

        {/* =====================================================
            OVERVIEW + ROLE
        ===================================================== */}

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">

              {/* OVERVIEW */}

              <div className="lg:col-span-7">

                <div className="border-t border-foreground/20 pt-5">

                  <div className="grid gap-8 sm:grid-cols-12">

                    <div className="sm:col-span-3">

                      <p className="m-0 text-xs text-foreground/40">
                        01
                      </p>

                      <p className="m-0 mt-2 text-sm">
                        Project Overview
                      </p>

                    </div>

                    <div className="sm:col-span-9">

                      <p className="m-0 text-2xl leading-[1.25] sm:text-3xl">
                        Robot Made 2025 UBC SALA explored full-scale timber
                        construction through computational design, robotic
                        fabrication, engineering, and collaborative assembly.
                      </p>

                      <div className="mt-7 grid gap-6 sm:grid-cols-2">

                        <p className="m-0 text-sm leading-[1.7] text-foreground/60">
                          Developed at UBC SALA, the project brought together
                          participants from architecture, engineering,
                          fabrication, and industry to develop and construct a
                          full-scale timber prototype.
                        </p>

                        <p className="m-0 text-sm leading-[1.7] text-foreground/60">
                          The workshop connected digital design directly with
                          material processing, robotic fabrication,
                          prototyping, and hands-on construction.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* MY ROLE */}

              <div className="lg:col-span-5">

                <div className="border-t border-foreground/20 pt-5">

                  <div className="grid gap-8 sm:grid-cols-12 lg:block">

                    <div className="sm:col-span-3 lg:col-span-auto">

                      <p className="m-0 text-xs text-foreground/40">
                        02
                      </p>

                      <p className="m-0 mt-2 text-sm">
                        My Role
                      </p>

                    </div>

                    <div className="sm:col-span-9 lg:mt-8">

                      <p className="m-0 text-2xl leading-[1.2] sm:text-3xl">
                        Student Participant + Documentation
                      </p>

                      <p className="m-0 mt-6 max-w-[600px] text-sm leading-[1.7] text-foreground/60">
                        I participated in the workshop as a University of
                        Toronto student, contributing to fabrication and
                        assembly while also documenting the project through
                        photography and film.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            CREDITS
        ===================================================== */}

        <section className="border-t border-foreground/20 px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">

              <div className="lg:col-span-3">

                <p className="m-0 text-xs text-foreground/40">
                  03
                </p>

                <p className="m-0 mt-2 text-sm">
                  Credits
                </p>

              </div>

              <div className="lg:col-span-9">

                {/* CORE TEAM */}

                <div className="grid gap-x-10 gap-y-10 border-b border-foreground/20 pb-10 sm:grid-cols-2 lg:grid-cols-4">

                  <div>
                    <p className="m-0 text-xs text-foreground/40">
                      Design
                    </p>

                    <div className="mt-4 space-y-1.5 text-sm">
                      <p className="m-0">AnnaLisa Meyboom</p>
                      <p className="m-0 text-foreground/50">
                        University of British Columbia
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="m-0 text-xs text-foreground/40">
                      Fabrication
                    </p>

                    <div className="mt-4 space-y-1.5 text-sm">
                      <p className="m-0">Nicholas Hoban</p>
                      <p className="m-0 text-foreground/50">
                        University of Toronto
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="m-0 text-xs text-foreground/40">
                      Engineering
                    </p>

                    <div className="mt-4 space-y-1.5 text-sm">
                      <p className="m-0">Aryan Rad</p>
                      <p className="m-0 text-foreground/50">
                        University of Toronto
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="m-0 text-xs text-foreground/40">
                      Documentation
                    </p>

                    <div className="mt-4 space-y-1.5 text-sm">
                      <p className="m-0 font-medium">
                        Liam Cassano
                      </p>
                      <p className="m-0">
                        6ix Films
                      </p>
                    </div>
                  </div>

                </div>

                {/* RESEARCH + FABRICATION */}

                <div className="grid gap-x-10 gap-y-10 border-b border-foreground/20 py-10 sm:grid-cols-2 lg:grid-cols-3">

                  <div>
                    <p className="m-0 text-xs text-foreground/40">
                      Research Assistant
                    </p>

                    <div className="mt-4 space-y-1.5 text-sm">
                      <p className="m-0">Kaja Nielsen Roine</p>
                      <p className="m-0 text-foreground/50">
                        University of British Columbia
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="m-0 text-xs text-foreground/40">
                      Fabrication Expertise
                    </p>

                    <div className="mt-4 space-y-4 text-sm">

                      <div>
                        <p className="m-0">Jason Chiu</p>
                        <p className="m-0 text-foreground/50">
                          CAWP · University of British Columbia
                        </p>
                      </div>

                      <div>
                        <p className="m-0">Brandon Chan</p>
                        <p className="m-0 text-foreground/50">
                          CAWP · University of British Columbia
                        </p>
                      </div>

                      <div>
                        <p className="m-0">Lief Davies Eriksen</p>
                        <p className="m-0 text-foreground/50">
                          CAWP · University of British Columbia
                        </p>
                      </div>

                    </div>
                  </div>

                  <div>
                    <p className="m-0 text-xs text-foreground/40">
                      Funding
                    </p>

                    <p className="m-0 mt-4 text-sm">
                      Forest Innovation Investment
                    </p>
                  </div>

                </div>

                {/* INDUSTRY PARTICIPANTS */}

                <div className="border-b border-foreground/20 py-10">

                  <p className="m-0 text-xs text-foreground/40">
                    Industry Participants
                  </p>

                  <div className="mt-5 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">

                    {[
                      ['Hossein Daneshvar', 'University of Alberta'],
                      ['Guillaume Bedard-Blanchet', 'Cecobois'],
                      ['Hugo Thibaudeau', 'atelier mock/up'],
                      ['Guy Gardner', 'University of Calgary'],
                      ['Edward Park', 'DIALOG'],
                      ['Harry Pascual', 'Westernarchrib'],
                      ['Manny Tangan', 'Westernarchrib'],
                      [
                        'Brigitte Loranger',
                        'Brigitte Loranger Architecture',
                      ],
                      ['Eric Van Ziffle', 'Van Ziffle Architects'],
                      ['Riley Baechler', 'Carscadden Architects'],
                      ['Joe Nae-jer Hwang', 'WG Architecture Inc.'],
                    ].map(([name, organization]) => (
                      <div key={name} className="text-sm">

                        <p className="m-0">
                          {name}
                        </p>

                        <p className="m-0 text-foreground/50">
                          {organization}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>

                {/* STUDENTS */}

                <div className="pt-10">

                  <p className="m-0 text-xs text-foreground/40">
                    Student Participants
                  </p>

                  <div className="mt-5 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">

                    {[
                      ['Deryck Bagui', 'University of British Columbia'],
                      ['Liam Cassano', 'University of Toronto'],
                      ['Jasper Chen', 'University of British Columbia'],
                      ['Vivian Du', 'University of British Columbia'],
                      ['Ewen Hall', 'University of British Columbia'],
                      ['Helen Li', 'University of British Columbia'],
                      ['Rennes Lindsay', 'University of British Columbia'],
                      ['Edriane Maglinte', 'University of British Columbia'],
                      ['Michael Kerns', 'University of British Columbia'],
                      ['Yasaman Khalili', 'University of British Columbia'],
                      ['Jin Kuang', 'University of British Columbia'],
                      ['Colleen Ogilvie', 'University of Calgary'],
                      ['Joud Shawwa', 'University of British Columbia'],
                      ['Nolan Spencer', 'University of British Columbia'],
                      ['Ruve Staneke', 'University of British Columbia'],
                      ['Maria Whiffen', 'University of British Columbia'],
                      ['Emily Wilson', 'University of British Columbia'],
                      ['LeiLei Zhao', 'University of Waterloo'],
                      ['Julian Zwack', 'University of Calgary'],
                    ].map(([name, organization]) => (
                      <div key={name} className="text-sm">

                        <p
                          className={`m-0 ${
                            name === 'Liam Cassano'
                              ? 'font-medium'
                              : ''
                          }`}
                        >
                          {name}
                        </p>

                        <p className="m-0 text-foreground/50">
                          {organization}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

       {/* =====================================================
    PROJECT IMAGES
===================================================== */}

<section className="border-t border-foreground/20 py-20 lg:py-24">

  {/* SECTION HEADER */}

  <div className="px-5 sm:px-8 lg:px-12">
    <div className="mx-auto w-full max-w-[1800px]">

      <div className="mb-12 grid gap-6 lg:grid-cols-12">

        <div className="lg:col-span-3">

          <p className="m-0 text-xs text-foreground/40">
            04
          </p>

          <p className="m-0 mt-2 text-sm">
            Project Images
          </p>

        </div>

        <div className="lg:col-span-9">

          <p className="m-0 max-w-[600px] text-sm leading-[1.6] text-foreground/50">
            Fabrication, assembly, and documentation from Robot Made
            2025 at UBC SALA.
          </p>

        </div>

      </div>

    </div>
  </div>

  {/* =================================================
      FULL-WIDTH IMAGE FIELD
  ================================================= */}

  <div className="w-full px-2 sm:px-3 lg:px-4">

    <div className="columns-1 gap-2 sm:columns-2 sm:gap-3 lg:columns-4 lg:gap-4">

      {galleryImages.map((image, index) => (
        <div
          key={image}
          className="mb-2 break-inside-avoid overflow-hidden bg-foreground/[0.04] sm:mb-3 lg:mb-4"
        >
          <Image
            src={`/images/${image}`}
            alt={`Robot Made 2025 UBC SALA — ${index + 1}`}
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