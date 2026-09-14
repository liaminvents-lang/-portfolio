'use client';

import Image from 'next/image';

/* =====================================================
   SPECIMENS
===================================================== */

const specimens = [
  { id: 'F5-1', image: '/images/fineseries-01.png' },
  { id: 'F5-2', image: '/images/fineseries-02.png' },
  { id: 'F10-1', image: '/images/fineseries-03.png' },
  { id: 'F10-2', image: '/images/fineseries-04.png' },
  { id: 'F15-1', image: '/images/fineseries-05.png' },
  { id: 'F15-2', image: '/images/fineseries-06.png' },
  { id: 'F20-1', image: '/images/fineseries-07.png' },
  { id: 'F20-2', image: '/images/fineseries-08.png' },

  { id: 'F25-1', image: '/images/fineseries-09.png' },
  { id: 'F25-2', image: '/images/fineseries-10.png' },
  { id: 'F30-1', image: '/images/fineseries-11.png' },
  { id: 'F30-2', image: '/images/fineseries-12.png' },
  { id: 'F35-1', image: '/images/fineseries-13.png' },
  { id: 'F35-2', image: '/images/fineseries-14.png' },
  { id: 'F40-1', image: '/images/fineseries-15.png' },
  { id: 'F40-2', image: '/images/fineseries-16.png' },

  { id: 'C5-1', image: '/images/coarseseries-01.png' },
  { id: 'C5-2', image: '/images/coarseseries-02.png' },
  { id: 'C10-1', image: '/images/coarseseries-03.png' },
  { id: 'C10-2', image: '/images/coarseseries-04.png' },
  { id: 'C15-1', image: '/images/coarseseries-05.png' },
  { id: 'C15-2', image: '/images/coarseseries-06.png' },
  { id: 'C20-1', image: '/images/coarseseries-07.png' },
  { id: 'C20-2', image: '/images/coarseseries-08.png' },

  { id: 'C25-1', image: '/images/coarseseries-09.png' },
  { id: 'C25-2', image: '/images/coarseseries-10.png' },
  { id: 'C30-1', image: '/images/coarseseries-11.png' },
  { id: 'C30-2', image: '/images/coarseseries-12.png' },
  { id: 'C35-1', image: '/images/coarseseries-13.png' },
  { id: 'C35-2', image: '/images/coarseseries-14.png' },
  { id: 'C40-1', image: '/images/coarseseries-15.png' },
  { id: 'C40-2', image: '/images/coarseseries-16.png' },
];

function getSpecimenData(id: string) {
  const fibre = id.startsWith('F') ? 'Fine Fibre' : 'Coarse Fibre';

  const match = id.match(/[FC](\d+)-/);
  const lignin = match ? Number(match[1]) : 0;

  return {
    fibre,
    fibreWeight: 30,
    lignin,
  };
}

const specimenRows = specimens.map((sample) => ({
  ...sample,
  ...getSpecimenData(sample.id),
}));

/* =====================================================
   SPECIES DATA
===================================================== */

const speciesData = [
  {
    species: 'Douglas Fir',
    yield: '10.8%',
    note: 'Highest average recovery',
  },
  {
    species: 'Pine',
    yield: '7.5%',
    note: 'High-yield softwood',
  },
  {
    species: 'Spruce',
    yield: '6.1%',
    note: 'Moderate recovery',
  },
  {
    species: 'Western Red Cedar',
    yield: '4.7%',
    note: 'Moderate-to-low recovery',
  },
  {
    species: 'Ash',
    yield: '3.6%',
    note: 'Low-yield hardwood',
  },
  {
    species: 'Basswood',
    yield: '3.2%',
    note: 'Low-lignin control',
  },
];

/* =====================================================
   PAGE
===================================================== */

export default function ReversibleWoodCompositesPage() {
  return (
    <main className="w-full bg-background text-foreground">

      {/* =====================================================
          HERO — MATERIAL SPECIMEN FIELD
      ===================================================== */}

      <section className="px-5 pt-20 sm:px-8 sm:pt-32 lg:px-12">
        <div className="mx-auto w-full max-w-[1800px]">

          {/* MOBILE */}
          <div className="sm:hidden">
            <div className="grid grid-cols-4 gap-1">

              {specimenRows.map((sample) => (
                <div
                  key={`mobile-${sample.id}`}
                  className="relative aspect-square overflow-hidden"
                >
                  <Image
                    src={sample.image}
                    alt={sample.id}
                    fill
                    sizes="25vw"
                    className="object-contain p-1.5"
                  />
                </div>
              ))}

            </div>
          </div>

          {/* TABLET + DESKTOP */}
          <div className="relative hidden aspect-[16/8.2] w-full overflow-hidden sm:block">
            <div className="grid h-full grid-cols-8 grid-rows-4">

              {specimenRows.map((sample) => (
                <div
                  key={sample.id}
                  className="group relative flex min-h-0 min-w-0 items-center justify-center overflow-hidden"
                >
                  <Image
                    src={sample.image}
                    alt={sample.id}
                    fill
                    sizes="13vw"
                    className="object-contain p-3"
                  />

                  <div className="pointer-events-none absolute inset-x-2 bottom-2 z-20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <div className="inline-block bg-background/95 px-3 py-2 text-[11px] leading-[1.4] backdrop-blur-sm">

                      <p className="m-0 font-medium">
                        {sample.id}
                      </p>

                      <p className="m-0 mt-1 text-foreground/60">
                        {sample.fibre}
                      </p>

                      <p className="m-0 text-foreground/60">
                        {sample.fibreWeight} g Fibre
                      </p>

                      <p className="m-0 text-foreground/60">
                        {sample.lignin} g Lignin
                      </p>

                    </div>
                  </div>

                </div>
              ))}

            </div>
          </div>

          <div className="mt-3 flex flex-col gap-1 sm:mt-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">

            <p className="m-0 text-[10px] text-foreground/40 sm:text-xs">
              Material Specimen Field
            </p>

            <p className="m-0 max-w-[620px] text-[10px] leading-[1.45] text-foreground/40 sm:text-right sm:text-xs sm:leading-[1.5]">
              Fine and coarse wood-fibre composite specimens developed through
              controlled variation of material composition.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          PROJECT INTRO
      ===================================================== */}

      <section className="px-5 pb-8 pt-10 sm:px-8 sm:pb-12 sm:pt-16 lg:px-12 lg:pb-14 lg:pt-20">
        <div className="mx-auto grid w-full max-w-[1800px] gap-6 sm:gap-10 lg:grid-cols-12 lg:gap-10">

          <div className="lg:col-span-5">

            <p className="m-0 text-xs text-foreground/40 sm:text-sm">
              Research Thesis
            </p>

            <h1 className="m-0 mt-3 max-w-[900px] text-[42px] font-normal leading-[0.95] tracking-tight sm:mt-4 sm:text-6xl lg:text-7xl">
              Reversible Wood Composites
            </h1>

          </div>

          <div className="lg:col-span-7 lg:pt-7">

            <p className="m-0 max-w-[900px] text-[20px] font-normal leading-[1.35] sm:text-3xl">
              Developing lignin-based wood composites as a reversible
              material system for circular fabrication.
            </p>

            <div className="mt-5 text-xs text-foreground/60 sm:mt-8 sm:text-sm">
              Liam Cassano
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          IN PROGRESS
      ===================================================== */}

      <section className="px-5 pb-5 sm:px-8 sm:pb-8 lg:px-12">
        <div className="mx-auto w-full max-w-[1800px]">

          <div className="border-y border-foreground/20 py-4 sm:py-5">

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

              <p className="m-0 text-xs font-medium sm:text-sm">
                Research in progress
              </p>

              <p className="m-0 max-w-[760px] text-xs leading-[1.5] text-foreground/50 sm:text-sm sm:leading-[1.6]">
                This page documents ongoing thesis research and is still being
                developed as material testing, analysis, and fabrication
                continue.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          METADATA
      ===================================================== */}

      <section className="border-t border-foreground/20 px-5 py-5 sm:px-8 sm:py-8 lg:px-12 lg:py-9">
        <div className="mx-auto grid w-full max-w-[1800px] grid-cols-3 gap-x-4 gap-y-5 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-6">

          <div>
            <p className="m-0 text-[9px] text-foreground/35 sm:text-xs">
              Material
            </p>
            <p className="m-0 mt-1.5 text-[11px] leading-[1.4] sm:mt-2 sm:text-sm">
              Wood Fibre / Lignin
            </p>
          </div>

          <div>
            <p className="m-0 text-[9px] text-foreground/35 sm:text-xs">
              Fibre Size
            </p>
            <p className="m-0 mt-1.5 text-[11px] leading-[1.4] sm:mt-2 sm:text-sm">
              Fine / Coarse
            </p>
          </div>

          <div>
            <p className="m-0 text-[9px] text-foreground/35 sm:text-xs">
              Fibre Mass
            </p>
            <p className="m-0 mt-1.5 text-[11px] leading-[1.4] sm:mt-2 sm:text-sm">
              30 g
            </p>
          </div>

          <div>
            <p className="m-0 text-[9px] text-foreground/35 sm:text-xs">
              Lignin Content
            </p>
            <p className="m-0 mt-1.5 text-[11px] leading-[1.4] sm:mt-2 sm:text-sm">
              5–40 g
            </p>
          </div>

          <div>
            <p className="m-0 text-[9px] text-foreground/35 sm:text-xs">
              Fabrication
            </p>
            <p className="m-0 mt-1.5 text-[11px] leading-[1.4] sm:mt-2 sm:text-sm">
              Heated Pressing
            </p>
          </div>

          <div>
            <p className="m-0 text-[9px] text-foreground/35 sm:text-xs">
              Testing
            </p>
            <p className="m-0 mt-1.5 text-[11px] leading-[1.4] sm:mt-2 sm:text-sm">
              ASTM-Based Testing
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================
          ACKNOWLEDGEMENTS
      ===================================================== */}

      <section className="border-t border-foreground/20 px-5 py-7 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div className="mx-auto grid w-full max-w-[1800px] gap-5 sm:gap-10 lg:grid-cols-12">

          <div className="lg:col-span-3">

            <p className="m-0 text-xs text-foreground/40 sm:text-sm">
              Acknowledgements
            </p>

          </div>

          <div className="grid gap-5 sm:gap-8 lg:col-span-9 lg:grid-cols-2 lg:gap-x-16">

            <div className="space-y-4 sm:space-y-8">

              <p className="m-0 text-xs leading-[1.55] sm:text-sm sm:leading-[1.65]">
                Nicholas Hoban
              </p>

              <p className="m-0 text-xs leading-[1.55] sm:text-sm sm:leading-[1.65]">
                Brian Slocum, Mitchell Akiyama, Maria Yablonina, David Correa,
                Zachary Mollica, Safoura Zahedi, Vincent Hui, AnnaLisa Meyboom,
                Paul Howard Harrison
              </p>

              <p className="m-0 text-xs leading-[1.55] sm:text-sm sm:leading-[1.65]">
                Anna Geng, Aylin Hasanova, Chidubem Nwokeocha, Julia Paulson,
                Talayeh Youssef Pour, Phina Tu, Prasham Shah, Jack Simon,
                Julia Song, Larissa Sonnenberg, Emily Sun, Sling Velasquez,
                Brian Wong, Ryan Yee
              </p>

            </div>

            <div className="space-y-4 sm:space-y-8">

              <p className="m-0 text-xs leading-[1.55] sm:text-sm sm:leading-[1.65]">
                Christoph Klemm, Abby Prasad, Paul Piascik, Benjamin Kuttner
                and Mohini Sain
              </p>

              <p className="m-0 text-xs leading-[1.55] sm:text-sm sm:leading-[1.65]">
                Rahul Sehijpaul, Paul Kozak, Alexander Gaskin, Amy George,
                Joseph Rogal, Eugene Wang
              </p>

              <p className="m-0 text-xs leading-[1.55] sm:text-sm sm:leading-[1.65]">
                Annie Song, Zhenxiao Yang, Pablo Espial, Micha Fairfax-Angood,
                Ivan Makhno, Nicole Quesnelle, Yashara Abeysinghe, Sarah Mak,
                Sandy Nguyen, Lui Sanchez-Ma, Oscar Young Kait Ma, Aaron Di
                Giacomo
              </p>

              <p className="m-0 text-xs leading-[1.55] sm:text-sm sm:leading-[1.65]">
                My Parents :)
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CONTENTS
      ===================================================== */}

      <section className="px-5 py-10 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1800px] gap-5 sm:gap-10 lg:grid-cols-12">

          <div className="lg:col-span-3">

            <p className="m-0 text-xs text-foreground/40 sm:text-sm">
              Contents
            </p>

          </div>

          {/* MOBILE */}
          <div className="sm:hidden">

            {[
              ['01', 'Material System'],
              ['02', 'Research Framework'],
              ['03', 'Context + Waste Stream'],
              ['04', 'Proposed Workflow'],
              ['05', 'Extraction Process'],
              ['06', 'Material Exploration'],
              ['07', 'Material Behaviour'],
              ['08', 'Mold Development'],
              ['09', 'Composite Development'],
              ['10', 'Material Testing'],
              ['11', 'Findings + Reversibility'],
              ['12', 'Outlook'],
            ].map(([number, title]) => (
              <div
                key={number}
                className="grid grid-cols-[38px_1fr] border-t border-foreground/20 py-3"
              >
                <span className="text-[10px] text-foreground/35">
                  {number}
                </span>

                <span className="text-xs">
                  {title}
                </span>
              </div>
            ))}

            <div className="border-t border-foreground/20" />

          </div>

          {/* TABLET + DESKTOP */}
          <div className="hidden gap-x-12 sm:grid sm:grid-cols-2 lg:col-span-9">

            <div>
              {[
                ['01', 'Material System'],
                ['03', 'Context + Waste Stream'],
                ['05', 'Extraction Process'],
                ['07', 'Material Behaviour'],
                ['09', 'Composite Development'],
                ['11', 'Findings + Reversibility'],
              ].map(([number, title]) => (
                <div
                  key={number}
                  className="grid grid-cols-[48px_1fr] border-t border-foreground/20 py-4"
                >
                  <span className="text-xs text-foreground/35">
                    {number}
                  </span>

                  <span className="text-sm">
                    {title}
                  </span>
                </div>
              ))}
            </div>

            <div>
              {[
                ['02', 'Research Framework'],
                ['04', 'Proposed Workflow'],
                ['06', 'Material Exploration'],
                ['08', 'Mold Development'],
                ['10', 'Material Testing'],
                ['12', 'Outlook'],
              ].map(([number, title]) => (
                <div
                  key={number}
                  className="grid grid-cols-[48px_1fr] border-t border-foreground/20 py-4"
                >
                  <span className="text-xs text-foreground/35">
                    {number}
                  </span>

                  <span className="text-sm">
                    {title}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          01 MATERIAL SYSTEM
      ===================================================== */}

      <section
        id="material-system"
        className="border-t border-foreground/20 px-5 py-14 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid w-full max-w-[1800px] gap-7 sm:gap-12 lg:grid-cols-12 lg:gap-12">

          <div className="lg:col-span-3">

            <p className="m-0 text-xs text-foreground/40 sm:text-sm">
              01
            </p>

            <h2 className="m-0 mt-2 text-[28px] font-normal tracking-tight sm:mt-3 sm:text-3xl">
              Material
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              System
            </h2>

          </div>

          <div className="lg:col-span-9">

            <p className="m-0 max-w-[1100px] text-[26px] font-normal leading-[1.2] sm:text-4xl sm:leading-[1.25]">
              Lignin is the natural binding matrix within wood, holding
              cellulose fibres together while contributing rigidity and
              compressive strength.
            </p>

            <div className="mt-8 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-8">

              <p className="m-0 max-w-[600px] text-[15px] leading-[1.65] sm:text-base sm:leading-[1.7]">
                Wood is composed primarily of cellulose, hemicellulose,
                and lignin. Cellulose forms the long structural fibres,
                while hemicellulose surrounds these fibres and contributes
                to the organization and moisture behaviour of the cell wall.
              </p>

              <p className="m-0 max-w-[600px] text-[15px] leading-[1.65] text-foreground/60 sm:text-base sm:leading-[1.7]">
                Lignin occupies the spaces between these components and
                forms the continuous matrix that binds the wood structure
                together. When isolated, it can soften under heat and
                resolidify during cooling, creating the basis for a
                reprocessable material system.
              </p>

            </div>

            <div className="mt-10 sm:mt-16">

              <Image
                src="/images/woodanatomy.png"
                alt="Wood anatomy from tree structure to cell wall composition"
                width={1800}
                height={1100}
                sizes="(max-width: 1024px) 100vw, 75vw"
                className="block h-auto w-full"
              />

              <p className="m-0 mt-3 max-w-[820px] text-[11px] leading-[1.5] text-foreground/45 sm:mt-5 sm:text-sm sm:leading-[1.55]">
                Wood structure across interconnected scales, from the larger
                organization of the tree to the cell wall and the cellulose,
                hemicellulose, and lignin matrix.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          02 RESEARCH FRAMEWORK
      ===================================================== */}

      <section
        id="research-framework"
        className="border-t border-foreground/20 px-5 py-14 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid gap-7 sm:gap-12 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-3">

              <p className="m-0 text-xs text-foreground/40 sm:text-sm">
                02
              </p>

              <h2 className="m-0 mt-2 text-[28px] font-normal tracking-tight sm:mt-3 sm:text-3xl">
                Research
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Framework
              </h2>

            </div>

            <div className="lg:col-span-9">

              <p className="m-0 max-w-[1100px] text-[26px] font-normal leading-[1.2] sm:text-4xl sm:leading-[1.25]">
                The research investigates lignin as a thermally reprocessable
                binder, connecting material behaviour, composite performance,
                and the potential for repeated fabrication.
              </p>

              <div className="mt-9 border-t border-foreground/20 sm:mt-16">

                {[
                  [
                    '01',
                    'How does lignin recovered from SPF construction offcuts behave during thermal softening and cooling, and what conditions allow it to transition between solid and mouldable states?',
                  ],
                  [
                    '02',
                    'How can lignin’s thermoplastic behaviour be used to produce components that can be shaped, reshaped, and reused?',
                  ],
                  [
                    '03',
                    'How can changes in lignin content and material composition control processing behaviour and mechanical performance across repeated thermal cycles?',
                  ],
                ].map(([number, question]) => (
                  <div
                    key={number}
                    className="grid grid-cols-[32px_1fr] gap-3 border-b border-foreground/20 py-5 sm:block sm:py-7 lg:grid lg:grid-cols-12 lg:gap-6"
                  >

                    <p className="m-0 text-[10px] text-foreground/35 sm:text-sm lg:col-span-1">
                      {number}
                    </p>

                    <p className="m-0 max-w-[1000px] text-[17px] font-normal leading-[1.35] sm:mt-3 sm:text-2xl lg:col-span-11 lg:mt-0">
                      {question}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          03 CONTEXT + WASTE STREAM
      ===================================================== */}

      <section
        id="context-waste-stream"
        className="border-t border-foreground/20"
      >

        <div className="px-5 py-14 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid items-start gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-x-16">

              <div className="lg:col-span-4">

                <p className="m-0 text-xs text-foreground/40 sm:text-sm">
                  03
                </p>

                <h2 className="m-0 mt-2 text-[28px] font-normal tracking-tight sm:mt-3 sm:text-3xl">
                  Context +
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  Waste Stream
                </h2>

                <div className="mt-7 max-w-[540px] sm:mt-14">

                  <p className="m-0 text-[24px] font-normal leading-[1.25] sm:text-3xl sm:leading-[1.3]">
                    Construction produces clean wood offcuts that retain
                    significant material value but are commonly treated as
                    waste.
                  </p>

                  <p className="m-0 mt-6 max-w-[500px] text-[15px] leading-[1.65] sm:mt-8 sm:text-base sm:leading-[1.7]">
                    SPF lumber is widely used in Canadian residential framing.
                    Cutting standardized members to fit produces short and
                    irregular pieces that are difficult to return directly to
                    conventional construction, despite retaining usable wood
                    fibre.
                  </p>

                </div>

              </div>

              <div className="lg:col-span-7 lg:col-start-6 lg:pt-5">

                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">

                  <video
                    src="/videos/housewalkthrough.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                </div>

              </div>

            </div>

          </div>
        </div>

        <div className="px-5 pb-14 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
          <div className="mx-auto w-full max-w-[1800px]">

            <div className="grid items-start gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-x-16">

              <div className="lg:col-span-8">

                <Image
                  src="/images/woodwaste.jpg"
                  alt="Wood offcuts generated through construction and lumber processing"
                  width={2000}
                  height={1400}
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="block h-auto w-full"
                />

              </div>

              <div className="lg:col-span-3 lg:col-start-10 lg:pt-6">

                <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-col sm:gap-14">

                  <div>
                    <p className="m-0 text-[28px] font-normal leading-none tracking-tight sm:text-5xl">
                      25–30%
                    </p>

                    <p className="m-0 mt-3 text-[11px] leading-[1.4] sm:mt-4 sm:max-w-[230px] sm:text-sm sm:leading-[1.5]">
                      of project waste can consist of wood.
                    </p>

                    <p className="m-0 mt-2 text-[9px] text-foreground/30 sm:mt-3 sm:text-xs">
                      Thesis literature review
                    </p>
                  </div>

                  <div>
                    <p className="m-0 text-[28px] font-normal leading-none tracking-tight sm:text-5xl">
                      10–15%
                    </p>

                    <p className="m-0 mt-3 text-[11px] leading-[1.4] sm:mt-4 sm:max-w-[230px] sm:text-sm sm:leading-[1.5]">
                      of construction lumber can become waste during building.
                    </p>

                    <p className="m-0 mt-2 text-[9px] text-foreground/30 sm:mt-3 sm:text-xs">
                      Thesis literature review
                    </p>
                  </div>

                  <div>
                    <p className="m-0 text-[28px] font-normal leading-none tracking-tight sm:text-5xl">
                      ~65B
                    </p>

                    <p className="m-0 mt-3 text-[11px] leading-[1.4] sm:mt-4 sm:max-w-[250px] sm:text-sm sm:leading-[1.5]">
                      board feet of SPF dimensional lumber are used annually
                      across U.S. and Canadian residential construction.
                    </p>

                    <p className="m-0 mt-2 text-[9px] text-foreground/30 sm:mt-3 sm:text-xs">
                      Thesis literature review
                    </p>
                  </div>

                </div>

              </div>

            </div>

            <div className="mt-12 border-t border-foreground/20 pt-10 sm:mt-24 sm:pt-16">

              <div className="grid gap-6 sm:gap-10 lg:grid-cols-12 lg:gap-12">

                <div className="lg:col-span-3">

                  <p className="m-0 text-xs text-foreground/40 sm:text-sm">
                    Material Opportunity
                  </p>

                </div>

                <div className="lg:col-span-9">

                  <p className="m-0 max-w-[1100px] text-[26px] font-normal leading-[1.2] sm:text-4xl sm:leading-[1.25]">
                    Rather than treating these offcuts as an endpoint, this
                    research redirects SPF construction waste into a new
                    material cycle.
                  </p>

                  <p className="m-0 mt-6 max-w-[700px] text-[15px] leading-[1.65] text-foreground/60 sm:mt-8 sm:text-base sm:leading-[1.7]">
                    The waste material is mechanically reduced into controlled
                    fibre sizes and recombined with lignin, shifting
                    dimensional-lumber waste toward a reversible wood-fibre
                    composite system.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </div>

      </section>

      {/* =====================================================
          04 PROPOSED WORKFLOW
      ===================================================== */}

      <section
        id="proposed-workflow"
        className="border-t border-foreground/20 px-5 py-14 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid gap-7 sm:gap-12 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-3">

              <p className="m-0 text-xs text-foreground/40 sm:text-sm">
                04
              </p>

              <h2 className="m-0 mt-2 text-[28px] font-normal tracking-tight sm:mt-3 sm:text-3xl">
                Proposed
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Workflow
              </h2>

            </div>

            <div className="lg:col-span-9">

              <p className="m-0 max-w-[1100px] text-[26px] font-normal leading-[1.2] sm:text-4xl sm:leading-[1.25]">
                The workflow links material extraction to fabrication through
                a reversible process that enables wood-derived material to be
                continually reprocessed.
              </p>

              <div className="mt-8 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-8">

                <p className="m-0 max-w-[600px] text-[15px] leading-[1.65] sm:text-base sm:leading-[1.7]">
                  This initial phase moves away from synthetic binders,
                  focusing on lignin-based mixtures and the relationship
                  between material composition, processing, and mechanical
                  performance.
                </p>

                <p className="m-0 max-w-[600px] text-[15px] leading-[1.65] text-foreground/60 sm:text-base sm:leading-[1.7]">
                  Fabricated parts are treated as temporary material states
                  rather than final objects, allowing lignin and wood fibre
                  to be recovered, refined, and returned to the fabrication
                  cycle.
                </p>

              </div>

            </div>

          </div>

          <div className="mt-10 sm:mt-20">

            <Image
              src="/images/workflowfullthesis.png"
              alt="Proposed circular workflow connecting wood preparation, lignin extraction, material refinement, and fabrication"
              width={2400}
              height={1100}
              sizes="100vw"
              className="block h-auto w-full"
            />

          </div>

        </div>
      </section>

      {/* =====================================================
          05 EXTRACTION PROCESS
      ===================================================== */}

      <section
        id="extraction-process"
        className="border-t border-foreground/20 px-5 py-14 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid gap-7 sm:gap-12 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-3">

              <p className="m-0 text-xs text-foreground/40 sm:text-sm">
                05
              </p>

              <h2 className="m-0 mt-2 text-[28px] font-normal tracking-tight sm:mt-3 sm:text-3xl">
                Extraction
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Process
              </h2>

            </div>

            <div className="lg:col-span-9">

              <p className="m-0 max-w-[1100px] text-[26px] font-normal leading-[1.2] sm:text-4xl sm:leading-[1.25]">
                A simplified alkaline pulping process separates lignin from
                cellulose-rich wood fibre so each fraction can be recovered
                and reintroduced into material development.
              </p>

              <div className="mt-8 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-8">

                <p className="m-0 max-w-[600px] text-[15px] leading-[1.65] sm:text-base sm:leading-[1.7]">
                  Thin wood chips are heated in water and sodium hydroxide.
                  Under alkaline conditions, lignin dissolves into the cooking
                  liquid while the cellulose-rich fibres remain solid and can
                  be separated through straining.
                </p>

                <p className="m-0 max-w-[600px] text-[15px] leading-[1.65] text-foreground/60 sm:text-base sm:leading-[1.7]">
                  The remaining black liquor is acidified to precipitate the
                  dissolved lignin. The recovered material is then settled,
                  decanted, dehydrated, and stored as a dry solid for later
                  heating and composite fabrication.
                </p>

              </div>

            </div>

          </div>

          <div className="mt-10 grid grid-cols-2 gap-0 border-t border-foreground/20 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">

            {[
              [
                '01',
                'Chip Preparation',
                'Wood is reduced to thin chips to increase surface area and allow consistent alkaline penetration.',
              ],
              [
                '02',
                'Alkaline Cooking',
                'Heat and sodium hydroxide dissolve the lignin fraction into the cooking liquid.',
              ],
              [
                '03',
                'Precipitation',
                'The black liquor is acidified so dissolved lignin returns to an insoluble solid state.',
              ],
              [
                '04',
                'Dehydration',
                'Recovered lignin is settled, dried at low temperature, weighed, and stored.',
              ],
            ].map(([number, title, body], index) => (
              <div
                key={number}
                className={`border-b border-foreground/20 py-5 ${
                  index % 2 === 0 ? 'pr-4' : 'border-l border-foreground/20 pl-4'
                } sm:py-8 sm:pr-8 sm:pl-0 sm:[&:nth-child(even)]:border-l-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0`}
              >
                <p className="m-0 text-[10px] text-foreground/35 sm:text-xs">
                  {number}
                </p>

                <p className="m-0 mt-3 text-[16px] font-normal sm:mt-4 sm:text-xl">
                  {title}
                </p>

                <p className="m-0 mt-3 text-[12px] leading-[1.55] text-foreground/55 sm:mt-5 sm:text-sm sm:leading-[1.65]">
                  {body}
                </p>
              </div>
            ))}

          </div>

          <div className="mt-12 border-t border-foreground/20 pt-8 sm:mt-20 sm:pt-12">

            <p className="m-0 text-xs text-foreground/40 sm:text-sm">
              Standard Extraction Condition
            </p>

            <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:mt-8 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-6">

              {[
                ['Chip Thickness', '1 mm'],
                ['Cook Time', '80 min'],
                ['NaOH', '24 g'],
                ['Water', '1650 ml'],
                ['Settling', '8 hr'],
                ['Drying', '50–60°C'],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="m-0 text-[9px] text-foreground/35 sm:text-xs">
                    {label}
                  </p>

                  <p className="m-0 mt-2 text-[18px] font-normal sm:mt-3 sm:text-2xl">
                    {value}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          06 MATERIAL EXPLORATION
      ===================================================== */}

      <section
        id="material-exploration"
        className="border-t border-foreground/20 px-5 py-14 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid gap-7 sm:gap-12 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-3">

              <p className="m-0 text-xs text-foreground/40 sm:text-sm">
                06
              </p>

              <h2 className="m-0 mt-2 text-[28px] font-normal tracking-tight sm:mt-3 sm:text-3xl">
                Material
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Exploration
              </h2>

            </div>

            <div className="lg:col-span-9">

              <p className="m-0 max-w-[1100px] text-[26px] font-normal leading-[1.2] sm:text-4xl sm:leading-[1.25]">
                A standardized extraction method made it possible to compare
                lignin recovery across different wood species under identical
                processing conditions.
              </p>

              <p className="m-0 mt-6 max-w-[760px] text-[15px] leading-[1.65] text-foreground/60 sm:mt-10 sm:text-base sm:leading-[1.7]">
                Softwoods generally produced higher lignin yields than the
                hardwood samples. Douglas Fir established the highest
                recovery within the comparison and became a benchmark for
                evaluating the remaining species.
              </p>

            </div>

          </div>

          <div className="mt-10 sm:mt-20">

            {speciesData.map((item, index) => (
              <div
                key={item.species}
                className="grid grid-cols-[28px_1fr_auto] items-start gap-3 border-t border-foreground/20 py-4 sm:grid-cols-12 sm:gap-6 sm:py-6"
              >
                <p className="m-0 text-[9px] text-foreground/35 sm:col-span-1 sm:text-xs">
                  {String(index + 1).padStart(2, '0')}
                </p>

                <div className="sm:col-span-8 sm:grid sm:grid-cols-8">
                  <p className="m-0 text-[15px] font-normal sm:col-span-5 sm:text-xl">
                    {item.species}
                  </p>

                  <p className="m-0 mt-1 text-[10px] text-foreground/50 sm:col-span-3 sm:mt-0 sm:text-sm">
                    {item.note}
                  </p>
                </div>

                <p className="m-0 text-[18px] font-normal sm:col-span-3 sm:text-right sm:text-2xl">
                  {item.yield}
                </p>
              </div>
            ))}

            <div className="border-t border-foreground/20" />

          </div>

          <div className="mt-12 grid gap-6 border-t border-foreground/20 pt-10 sm:mt-20 sm:gap-10 sm:pt-14 lg:grid-cols-12">

            <div className="lg:col-span-3">

              <p className="m-0 text-xs text-foreground/40 sm:text-sm">
                SPF Waste Feedstock
              </p>

            </div>

            <div className="lg:col-span-9">

              <p className="m-0 max-w-[1050px] text-[26px] font-normal leading-[1.2] sm:text-4xl sm:leading-[1.25]">
                Mixed SPF framing lumber produced strong and repeatable lignin
                recovery, directly linking the laboratory extraction process
                to the construction waste stream.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 sm:mt-12 sm:gap-8">

                <div>
                  <p className="m-0 text-[26px] font-normal sm:text-4xl">
                    11.3%
                  </p>
                  <p className="m-0 mt-2 text-[10px] leading-[1.45] text-foreground/50 sm:mt-3 sm:text-sm sm:leading-[1.6]">
                    average first-cycle lignin recovery by mass.
                  </p>
                </div>

                <div>
                  <p className="m-0 text-[26px] font-normal sm:text-4xl">
                    4.9%
                  </p>
                  <p className="m-0 mt-2 text-[10px] leading-[1.45] text-foreground/50 sm:mt-3 sm:text-sm sm:leading-[1.6]">
                    additional average recovery during a second extraction.
                  </p>
                </div>

                <div>
                  <p className="m-0 text-[26px] font-normal sm:text-4xl">
                    16.2%
                  </p>
                  <p className="m-0 mt-2 text-[10px] leading-[1.45] text-foreground/50 sm:mt-3 sm:text-sm sm:leading-[1.6]">
                    combined average recovery across two extraction cycles.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          07 MATERIAL BEHAVIOUR
      ===================================================== */}

      <section
        id="material-behaviour"
        className="border-t border-foreground/20 px-5 py-14 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid gap-7 sm:gap-12 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-3">

              <p className="m-0 text-xs text-foreground/40 sm:text-sm">
                07
              </p>

              <h2 className="m-0 mt-2 text-[28px] font-normal tracking-tight sm:mt-3 sm:text-3xl">
                Material
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Behaviour
              </h2>

            </div>

            <div className="lg:col-span-9">

              <p className="m-0 max-w-[1100px] text-[26px] font-normal leading-[1.2] sm:text-4xl sm:leading-[1.25]">
                Once isolated, SPF-derived lignin could be heated, softened,
                formed, cooled, and reheated, confirming the reversible phase
                behaviour central to the material system.
              </p>

            </div>

          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 sm:mt-20 sm:gap-8 lg:grid-cols-3">

            {[
              {
                label: 'Thermal Activation',
                value: '~80°C',
                body:
                  'A working temperature of approximately 80°C produced a consistent phase transition, allowing the material to soften and become workable before resolidifying as it cooled.',
              },
              {
                label: 'Setting Time',
                value: '1–12 hr',
                body:
                  'Tensile performance increased as setting time increased, showing that post-forming consolidation remained an active variable in the development of material strength.',
              },
              {
                label: 'Reprocessing',
                value: 'Repeat',
                body:
                  'Reheated and recast samples showed minimal variation in mechanical performance across repeated processing cycles, supporting a circular rather than single-use material model.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border-t border-foreground/20 pt-4 sm:pt-6"
              >
                <p className="m-0 text-[9px] leading-[1.3] text-foreground/40 sm:text-sm">
                  {item.label}
                </p>

                <p className="m-0 mt-4 text-[24px] font-normal tracking-tight sm:mt-8 sm:text-5xl">
                  {item.value}
                </p>

                <p className="m-0 mt-4 text-[10px] leading-[1.45] sm:mt-6 sm:max-w-[430px] sm:text-base sm:leading-[1.7]">
                  {item.body}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          08 MOLD DEVELOPMENT
      ===================================================== */}

      <section
        id="mold-development"
        className="border-t border-foreground/20 px-5 py-14 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid gap-7 sm:gap-12 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-3">

              <p className="m-0 text-xs text-foreground/40 sm:text-sm">
                08
              </p>

              <h2 className="m-0 mt-2 text-[28px] font-normal tracking-tight sm:mt-3 sm:text-3xl">
                Mold
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Development
              </h2>

            </div>

            <div className="lg:col-span-9">

              <p className="m-0 max-w-[1100px] text-[26px] font-normal leading-[1.2] sm:text-4xl sm:leading-[1.25]">
                Mold development shifted from passive casting toward active
                forming, using heat, pressure, and flexible interfaces to
                improve consolidation and repeatability.
              </p>

            </div>

          </div>

          <div className="mt-10 sm:mt-20">

            {[
              {
                number: '01',
                title: 'Horizontal Casting',
                body:
                  'Initial horizontal molds were easy to fill but produced pitting, uneven surfaces, and incomplete consolidation.',
              },
              {
                number: '02',
                title: 'Vertical + TPU',
                body:
                  'Vertical casting and flexible TPU improved demolding but introduced voids, uneven curing, and progressive mold deformation.',
              },
              {
                number: '03',
                title: 'Compression Forming',
                body:
                  'The process returned to horizontal forming with intentional over-pour and hydraulic compression to increase density and reduce internal defects.',
              },
              {
                number: '04',
                title: 'Silicone Hybrid',
                body:
                  'The final system combined rigid alignment and heat-distribution components with a silicone interface for accurate geometry and repeatable demolding.',
              },
            ].map((item) => (
              <div
                key={item.number}
                className="grid grid-cols-[28px_1fr] gap-x-3 gap-y-3 border-t border-foreground/20 py-5 sm:block sm:py-8 lg:grid lg:grid-cols-12 lg:gap-6"
              >
                <p className="m-0 text-[9px] text-foreground/35 sm:text-xs lg:col-span-1">
                  {item.number}
                </p>

                <p className="m-0 text-[16px] font-normal sm:mt-3 sm:text-xl lg:col-span-3 lg:mt-0">
                  {item.title}
                </p>

                <p className="col-start-2 m-0 max-w-[760px] text-[12px] leading-[1.55] text-foreground/60 sm:mt-3 sm:text-base sm:leading-[1.7] lg:col-span-8 lg:col-start-auto lg:mt-0">
                  {item.body}
                </p>
              </div>
            ))}

            <div className="border-t border-foreground/20" />

          </div>

        </div>
      </section>

      {/* =====================================================
          09 COMPOSITE DEVELOPMENT
      ===================================================== */}

      <section
        id="composite-development"
        className="border-t border-foreground/20 px-5 py-14 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid gap-7 sm:gap-12 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-3">

              <p className="m-0 text-xs text-foreground/40 sm:text-sm">
                09
              </p>

              <h2 className="m-0 mt-2 text-[28px] font-normal tracking-tight sm:mt-3 sm:text-3xl">
                Composite
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Development
              </h2>

            </div>

            <div className="lg:col-span-9">

              <p className="m-0 max-w-[1100px] text-[26px] font-normal leading-[1.2] sm:text-4xl sm:leading-[1.25]">
                Reintroducing wood fibre transformed isolated lignin from a
                self-binding material into a tunable fibre-reinforced
                composite system.
              </p>

              <div className="mt-8 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-8">

                <p className="m-0 max-w-[600px] text-[15px] leading-[1.65] sm:text-base sm:leading-[1.7]">
                  Baseline tests showed that heat and pressure alone could
                  temporarily consolidate wood fibre but could not maintain
                  stable geometry. Without a binder, the compressed material
                  either sprang back or became brittle.
                </p>

                <p className="m-0 max-w-[600px] text-[15px] leading-[1.65] text-foreground/60 sm:text-base sm:leading-[1.7]">
                  Lignin was therefore introduced as the binding phase.
                  Material development focused on how fibre geometry and
                  lignin concentration interact during pressing, consolidation,
                  and failure.
                </p>

              </div>

            </div>

          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 sm:mt-20 sm:gap-8 lg:grid-cols-3">

            {[
              {
                label: 'Fine Fibre',
                value: '0–4 mm',
                body:
                  'Dense packing and high surface area produced uniform mixtures and consistent binder distribution.',
              },
              {
                label: 'Coarse Fibre',
                value: '4–10 mm',
                body:
                  'Longer fibres introduced mechanical interlocking and more continuous reinforcement paths through the composite.',
              },
              {
                label: 'Very Coarse',
                value: '10+ mm',
                body:
                  'Long hand-planed shavings retained directional grain structure and increased internal bridging.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border-t border-foreground/20 pt-4 sm:pt-6"
              >
                <p className="m-0 text-[9px] text-foreground/40 sm:text-sm">
                  {item.label}
                </p>

                <p className="m-0 mt-3 text-[20px] font-normal sm:mt-4 sm:text-3xl">
                  {item.value}
                </p>

                <p className="m-0 mt-3 text-[10px] leading-[1.45] text-foreground/55 sm:mt-5 sm:text-sm sm:leading-[1.65]">
                  {item.body}
                </p>
              </div>
            ))}

          </div>

          <div className="mt-12 border-t border-foreground/20 pt-10 sm:mt-24 sm:pt-14">

            <div className="grid gap-6 sm:gap-10 lg:grid-cols-12">

              <div className="lg:col-span-3">
                <p className="m-0 text-xs text-foreground/40 sm:text-sm">
                  Comparative Series
                </p>
              </div>

              <div className="lg:col-span-9">

                <p className="m-0 max-w-[950px] text-[22px] font-normal leading-[1.25] sm:text-3xl sm:leading-[1.3]">
                  Fine and coarse fibre samples were produced across an
                  increasing lignin series from 5 to 40, allowing composition
                  and fibre geometry to be evaluated independently.
                </p>

              </div>

            </div>

            <div className="mt-8 grid grid-cols-4 gap-1 sm:mt-14 sm:grid-cols-8 sm:gap-3">

              {specimenRows.map((sample) => (
                <div
                  key={`series-${sample.id}`}
                  className="relative aspect-square"
                >
                  <Image
                    src={sample.image}
                    alt={sample.id}
                    fill
                    sizes="13vw"
                    className="object-contain p-1 sm:p-2"
                  />
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          10 MATERIAL TESTING
      ===================================================== */}

      <section
        id="material-testing"
        className="border-t border-foreground/20 px-5 py-14 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid gap-7 sm:gap-12 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-3">

              <p className="m-0 text-xs text-foreground/40 sm:text-sm">
                10
              </p>

              <h2 className="m-0 mt-2 text-[28px] font-normal tracking-tight sm:mt-3 sm:text-3xl">
                Material
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Testing
              </h2>

            </div>

            <div className="lg:col-span-9">

              <p className="m-0 max-w-[1100px] text-[26px] font-normal leading-[1.2] sm:text-4xl sm:leading-[1.25]">
                Mechanical testing evaluated the composite across tensile,
                internal bond, and flexural loading to connect material
                composition with strength, cohesion, and structural response.
              </p>

            </div>

          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 sm:mt-20 sm:gap-10 lg:grid-cols-3">

            {[
              {
                standard: 'ASTM D638 Inspired',
                title: 'Tensile',
                body:
                  'Dogbone specimens measured localized tensile strength, elongation, and fracture behaviour while comparing the effect of fibre size and lignin concentration.',
              },
              {
                standard: 'ASTM D1037 Inspired',
                title: 'Internal Bond',
                body:
                  'Approximately 43 × 43 mm specimens measured cohesion through the thickness of the panel and the effectiveness of internal binder distribution.',
              },
              {
                standard: 'ASTM D790 Inspired',
                title: 'Three-Point Bend',
                body:
                  'Rectangular specimens evaluated stiffness, brittleness, and resistance to bending under combined compression and tension.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-t border-foreground/20 pt-4 sm:pt-6"
              >
                <p className="m-0 text-[8px] leading-[1.3] text-foreground/35 sm:text-xs">
                  {item.standard}
                </p>

                <p className="m-0 mt-3 text-[17px] font-normal sm:mt-4 sm:text-2xl">
                  {item.title}
                </p>

                <p className="m-0 mt-3 text-[10px] leading-[1.45] text-foreground/60 sm:mt-5 sm:text-base sm:leading-[1.7]">
                  {item.body}
                </p>
              </div>
            ))}

          </div>

          <div className="mt-12 border-t border-foreground/20 pt-10 sm:mt-24 sm:pt-14">

            <div className="grid gap-6 sm:gap-10 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-xs text-foreground/40 sm:text-sm">
                  Performance Trend
                </p>

              </div>

              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1050px] text-[26px] font-normal leading-[1.2] sm:text-4xl sm:leading-[1.25]">
                  Performance increased as sufficient lignin stabilized the
                  fibre network, but excessive binder shifted the material
                  toward increasingly brittle behaviour.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-5 sm:mt-12 sm:gap-10">

                  <div>

                    <p className="m-0 text-[10px] text-foreground/40 sm:text-sm">
                      Fine Fibre
                    </p>

                    <p className="m-0 mt-3 text-[18px] font-normal sm:mt-5 sm:text-2xl">
                      Strongest balance around 15–25%
                    </p>

                    <p className="m-0 mt-3 max-w-[520px] text-[11px] leading-[1.5] text-foreground/60 sm:mt-5 sm:text-base sm:leading-[1.7]">
                      Fine fibres packed densely and allowed lignin to
                      distribute uniformly, producing strong internal cohesion
                      at intermediate binder concentrations.
                    </p>

                  </div>

                  <div>

                    <p className="m-0 text-[10px] text-foreground/40 sm:text-sm">
                      Coarse Fibre
                    </p>

                    <p className="m-0 mt-3 text-[18px] font-normal sm:mt-5 sm:text-2xl">
                      Tensile peak around 25–30%
                    </p>

                    <p className="m-0 mt-3 max-w-[520px] text-[11px] leading-[1.5] text-foreground/60 sm:mt-5 sm:text-base sm:leading-[1.7]">
                      Longer fibres required more binder but created stronger
                      reinforcement paths and maintained tensile performance
                      at higher lignin concentrations.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          11 FINDINGS + REVERSIBILITY
      ===================================================== */}

      <section
        id="findings-reversibility"
        className="border-t border-foreground/20 px-5 py-14 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid gap-7 sm:gap-12 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-3">

              <p className="m-0 text-xs text-foreground/40 sm:text-sm">
                11
              </p>

              <h2 className="m-0 mt-2 text-[28px] font-normal tracking-tight sm:mt-3 sm:text-3xl">
                Findings +
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Reversibility
              </h2>

            </div>

            <div className="lg:col-span-9">

              <p className="m-0 max-w-[1100px] text-[26px] font-normal leading-[1.2] sm:text-4xl sm:leading-[1.25]">
                The strongest composites emerged from a balance between fibre
                reinforcement and lignin content rather than from maximizing
                the amount of binder.
              </p>

              <div className="mt-8 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-8">

                <p className="m-0 max-w-[600px] text-[15px] leading-[1.65] sm:text-base sm:leading-[1.7]">
                  Fine fibres improved uniformity and internal cohesion, while
                  coarse fibres created longer reinforcement paths and stronger
                  mechanical interlocking. In both cases, insufficient lignin
                  produced weak consolidation and excessive lignin increased
                  brittleness.
                </p>

                <p className="m-0 max-w-[600px] text-[15px] leading-[1.65] text-foreground/60 sm:text-base sm:leading-[1.7]">
                  The results establish fibre size and binder ratio as tunable
                  parameters rather than a single fixed recipe, creating a
                  material system capable of being adjusted for different
                  performance requirements.
                </p>

              </div>

            </div>

          </div>

          <div className="mt-12 border-t border-foreground/20 pt-10 sm:mt-24 sm:pt-14">

            <div className="grid gap-6 sm:gap-10 lg:grid-cols-12">

              <div className="lg:col-span-3">

                <p className="m-0 text-xs text-foreground/40 sm:text-sm">
                  Material Recovery
                </p>

              </div>

              <div className="lg:col-span-9">

                <p className="m-0 max-w-[1050px] text-[26px] font-normal leading-[1.2] sm:text-4xl sm:leading-[1.25]">
                  Tested composites could be fragmented, reheated, and
                  re-pressed into new specimens while retaining useful
                  structural behaviour.
                </p>

                <p className="m-0 mt-6 max-w-[760px] text-[15px] leading-[1.65] text-foreground/60 sm:mt-8 sm:text-base sm:leading-[1.7]">
                  During reheating, lignin softened again and allowed the
                  fragmented composite to recombine. Some binder was lost
                  through handling and adhesion to tooling, yet reprocessed
                  samples maintained mechanical behaviour relatively close to
                  the original material.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-0 border-t border-foreground/20 sm:mt-14">

                  {[
                    ['01', 'Fragment', 'Tested or failed material is mechanically reduced.'],
                    ['02', 'Reheat', 'The lignin matrix softens and returns the composite to a workable state.'],
                    ['03', 'Reform', 'Material is returned to the mold and consolidated through heat and pressure.'],
                  ].map(([number, title, body]) => (
                    <div
                      key={number}
                      className="border-b border-r border-foreground/20 px-3 py-5 last:border-r-0 sm:px-8 sm:py-7 sm:first:pl-0"
                    >
                      <p className="m-0 text-[9px] text-foreground/35 sm:text-xs">
                        {number}
                      </p>

                      <p className="m-0 mt-3 text-[15px] sm:mt-4 sm:text-xl">
                        {title}
                      </p>

                      <p className="m-0 mt-3 text-[10px] leading-[1.45] text-foreground/55 sm:mt-4 sm:text-sm sm:leading-[1.6]">
                        {body}
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
          12 OUTLOOK
      ===================================================== */}

      <section
        id="outlook"
        className="border-t border-foreground/20 px-5 py-14 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1800px]">

          <div className="grid gap-7 sm:gap-12 lg:grid-cols-12 lg:gap-12">

            <div className="lg:col-span-3">

              <p className="m-0 text-xs text-foreground/40 sm:text-sm">
                12
              </p>

              <h2 className="m-0 mt-2 text-[28px] font-normal tracking-tight sm:mt-3 sm:text-3xl">
                Outlook
              </h2>

            </div>

            <div className="lg:col-span-9">

              <p className="m-0 max-w-[1100px] text-[26px] font-normal leading-[1.2] sm:text-4xl sm:leading-[1.25]">
                The research positions lignin-based composites as an evolving
                material system in which waste, fabrication, performance, and
                reuse can operate within the same cycle.
              </p>

            </div>

          </div>

          <div className="mt-10 sm:mt-20">

            {[
              {
                number: '01',
                title: 'Fibre Hierarchy',
                body:
                  'Layered reinforcement, directional alignment, and hybrid distributions of fine and coarse fibres could tune density, flexibility, and cohesion within a single component.',
              },
              {
                number: '02',
                title: 'Process Control',
                body:
                  'Further control of press temperature, dwell time, pressure distribution, and cooling rate could improve repeatability and reduce brittle behaviour.',
              },
              {
                number: '03',
                title: 'Closed-Loop Fabrication',
                body:
                  'Offcuts, failed components, and temporary assemblies could be fragmented and returned directly to future material cycles rather than discarded.',
              },
              {
                number: '04',
                title: 'Digital Fabrication',
                body:
                  'The thermoplastic behaviour of lignin creates future opportunities for extrusion-based forming and robotic fabrication workflows using reprocessable composite material.',
              },
            ].map((item) => (
              <div
                key={item.number}
                className="grid grid-cols-[28px_1fr] gap-x-3 gap-y-3 border-t border-foreground/20 py-5 sm:block sm:py-8 lg:grid lg:grid-cols-12 lg:gap-6"
              >
                <p className="m-0 text-[9px] text-foreground/35 sm:text-xs lg:col-span-1">
                  {item.number}
                </p>

                <p className="m-0 text-[16px] font-normal sm:mt-3 sm:text-xl lg:col-span-3 lg:mt-0">
                  {item.title}
                </p>

                <p className="col-start-2 m-0 max-w-[800px] text-[12px] leading-[1.55] text-foreground/60 sm:mt-3 sm:text-base sm:leading-[1.7] lg:col-span-8 lg:col-start-auto lg:mt-0">
                  {item.body}
                </p>
              </div>
            ))}

            <div className="border-t border-foreground/20" />

          </div>

          <div className="mt-12 sm:mt-24">

            <p className="m-0 max-w-[1450px] text-[30px] font-normal leading-[1.12] tracking-tight sm:text-5xl sm:leading-[1.15] lg:text-6xl">
              Rather than treating fabricated objects as final material states,
              the system frames them as temporary configurations within a
              continuous cycle of extraction, forming, use, recovery, and
              re-fabrication.
            </p>

          </div>

        </div>
      </section>

    </main>
  );
}