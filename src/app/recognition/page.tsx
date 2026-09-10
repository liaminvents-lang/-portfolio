'use client';

import Layout from '@/components/layout';

const recognition = [
  {
    year: '2025',
    title: 'Student Scholarships and Awards',
    organization: 'Ontario Association of Architects',
    type: 'Award',
    href: 'https://oaa.on.ca/knowledge-and-resources/public-resources/2025-student-scholarships-and-awards'
  },
  {
    year: '2025',
    title: 'Robot Made 2025',
    organization: 'University of Toronto',
    type: 'Academic Program',
    href: 'https://civmin.utoronto.ca/robot-made/'
  },
  {
    year: '',
    title:
      'Exhibition Explores Role of Robotics and 3D Printing in Architectural Ceramics',
    organization: 'Canadian Architect',
    type: 'Feature',
    href: 'https://canadianarchitect.com/exhibition-explores-role-of-robotics-and-3d-printing-in-architectural-ceramics/'
  },
  {
    year: '',
    title: 'Timber Tectonics',
    organization: 'City of Mississauga',
    type: 'Public Art',
    href: 'https://www.mississauga.ca/arts-and-culture/arts/public-art/digital-public-art/timber-tectonics/'
  },
  {
    year: '2023',
    title:
      "Daniels Faculty Installation Lighting Toronto's Waterfront at Lumière",
    organization: 'University of Toronto Daniels',
    type: 'Feature',
    href: 'https://www.daniels.utoronto.ca/news/fri-mar-17-2023-all-day/daniels-faculty-installation-lighting-torontos-waterfront-lumiere'
  },
  {
    year: '',
    title: 'Toronto Tree Scans',
    organization: 'Zachary Mollica',
    type: 'Project Feature',
    href: 'https://zacharymolli.ca/project/toronto-tree-scans/'
  },
  {
    year: '',
    title: 'Attributes of Aliveness: Installations',
    organization: 'Humbi Song',
    type: 'Project Feature',
    href: 'https://humbisong.com/Attributes-of-Aliveness-Installations'
  }
];

export default function RecognitionPage() {
  return (
    <Layout title="">
      <main className="w-full pb-24">
        {/* HEADER */}

        <section className="px-5 pb-10 pt-4">
          <h1 className="m-0 text-5xl font-normal tracking-tight lg:text-7xl">
            Recognition
          </h1>

          <p className="m-0 mt-5 max-w-[680px] text-base leading-[1.6] text-foreground/50">
            Awards, features, exhibitions, and external coverage of projects
            and work I have contributed to.
          </p>
        </section>

        {/* RECOGNITION LIST */}

        <section className="w-full">
          {recognition.map((item, index) => (
            <a
              key={`${item.title}-${index}`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid min-h-[110px] grid-cols-1 gap-4 border-t border-foreground/40 px-5 py-7 transition-opacity duration-300 hover:opacity-50 lg:grid-cols-12 lg:items-center lg:gap-8"
            >
              {/* TITLE */}

              <div className="lg:col-span-7">
                <h2 className="m-0 text-2xl font-normal leading-[1.15] tracking-tight lg:text-3xl">
                  {item.title}
                </h2>
              </div>

              {/* ORGANIZATION */}

              <div className="lg:col-span-3">
                <p className="m-0 text-sm text-foreground/60">
                  {item.organization}
                </p>
              </div>

              {/* TYPE + YEAR */}

              <div className="flex items-center justify-between lg:col-span-2">
                <div>
                  <p className="m-0 text-sm text-foreground/60">
                    {item.type}
                  </p>

                  {item.year && (
                    <p className="m-0 mt-1 text-xs text-foreground/35">
                      {item.year}
                    </p>
                  )}
                </div>

                <span className="ml-6 text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>
            </a>
          ))}

          <div className="border-t border-foreground/40" />
        </section>
      </main>
    </Layout>
  );
}