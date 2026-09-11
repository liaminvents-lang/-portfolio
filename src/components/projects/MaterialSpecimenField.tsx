'use client';

import Image from 'next/image';

type Specimen = {
  image: string;
  id: string;
  fibreType: 'FINE FIBRE' | 'COARSE FIBRE';
  fibreWeight: number;
  ligninWeight: number;
};

function buildSeries(
  type: 'fine' | 'coarse',
  prefix: 'F' | 'C',
  fibreType: 'FINE FIBRE' | 'COARSE FIBRE'
): Specimen[] {
  return Array.from({ length: 16 }, (_, index) => {
    const number = index + 1;
    const ligninWeight = Math.ceil(number / 2) * 5;
    const replicate = number % 2 === 1 ? 1 : 2;

    return {
      image: `/images/${type}series-${String(number).padStart(2, '0')}.png`,
      id: `${prefix}${ligninWeight}-${replicate}`,
      fibreType,
      fibreWeight: 30,
      ligninWeight
    };
  });
}

const specimens: Specimen[] = [
  ...buildSeries('fine', 'F', 'FINE FIBRE'),
  ...buildSeries('coarse', 'C', 'COARSE FIBRE')
];

function SpecimenCard({
  specimen
}: {
  specimen: Specimen;
}) {
  return (
    <div className="group relative min-h-0 min-w-0">

      {/* SPECIMEN IMAGE */}
      <div className="relative h-full w-full">
        <Image
          src={specimen.image}
          alt={`${specimen.id} ${specimen.fibreType.toLowerCase()} specimen`}
          fill
          sizes="12vw"
          className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.025]"
        />
      </div>

      {/* HOVER LABEL — STAYS INSIDE CELL */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-3
          left-3
          z-20
          translate-y-1
          bg-background
          px-3
          py-2.5
          opacity-0
          shadow-[0_3px_16px_rgba(0,0,0,0.08)]
          transition-all
          duration-200
          ease-out
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <p className="m-0 whitespace-nowrap text-[10px] leading-[1.2]">
          {specimen.id} {specimen.fibreType}
        </p>

        <div className="mt-2 text-[10px] leading-[1.45]">
          <p className="m-0">
            Fibre&nbsp;&nbsp; {specimen.fibreWeight} g
          </p>

          <p className="m-0">
            Lignin&nbsp; {specimen.ligninWeight} g
          </p>
        </div>
      </div>

    </div>
  );
}

export default function MaterialSpecimenField() {
  return (
    <div className="absolute inset-0 bg-background">

      <div
        className="
          grid
          h-full
          w-full
          grid-cols-8
          grid-rows-4

          gap-x-5
          gap-y-3

          px-6
          py-5

          sm:gap-x-6
          sm:gap-y-4
          sm:px-8
          sm:py-6

          lg:gap-x-8
          lg:gap-y-5
          lg:px-10
          lg:py-8

          xl:gap-x-10
          xl:gap-y-6
          xl:px-12
          xl:py-10
        "
      >
        {specimens.map((specimen) => (
          <SpecimenCard
            key={specimen.id}
            specimen={specimen}
          />
        ))}
      </div>

    </div>
  );
}