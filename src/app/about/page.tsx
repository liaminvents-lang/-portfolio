'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout';
import AnimatedSection from '@/components/about/AnimatedSection';
import TextReveal from '@/components/about/TextReveal';
import ContrastCursor from '@/components/animations/cursor/contrastCursor';

const experience = [
  {
    date: 'Jan 2019 — Present',
    role: 'Founder',
    place: '6IX Films',
    description:
      'Founder and director of a Toronto-based production studio specializing in architecture, commercial, and corporate cinematography. Oversees the full production pipeline from concept development to filming, editing, and delivery.'
  },
  {
    date: 'Sept 2023 — Present',
    role: 'Robotic Fabrication Lab Technologist',
    place: 'University of Toronto, Daniels Faculty',
    description:
      'Assist faculty and graduate researchers in the Daniels Robotics Lab with robotic arm operation, toolpath development, fabrication setup, student training, end effector calibration, and lab safety documentation.'
  },
  {
    date: 'July 2025 — Aug 2025',
    role: 'ARC 395 Teaching Assistant',
    place: 'University of Toronto, Daniels Faculty',
    description:
      'Provided instructional and technical support for undergraduate and graduate fabrication seminars, assisting students with robotic and CNC workflows using Rhino, Grasshopper, and KUKA|prc.'
  },
  {
    date: 'Mar 2023 — Jul 2023',
    role: 'Research Assistant',
    place: 'University of Toronto, Daniels Faculty',
    description:
      'Worked under Professors Maria Yablonina and Brady Peters in collaboration with HASSELL and the European Space Agency, contributing to computational design, simulation, and robotic prototyping workflows for modular extraterrestrial construction systems.'
  },
  {
    date: 'Jan 2023 — Mar 2023',
    role: 'Fabrication Assistant',
    place: 'University of Toronto, Daniels Faculty',
    description:
      'Supported design-build and exhibition projects involving digital fabrication and robotic processes, including robotic clay printing, acoustic installations, and reciprocal frame timber structures for Luminato Festival at Ontario Place.'
  },
  {
    date: 'Jun 2020 — Aug 2020',
    role: 'Electrical & Electronics Research',
    place: 'CAROBOT Learning and Research Organization / MannLab',
    description:
      'Conducted research under Professor Steve Mann to develop an autonomous catamaran-style water quality sensing vessel, leading the design, fabrication, and integration of the hull and motion systems.'
  },
  {
    date: 'Jun 2019 — Aug 2020',
    role: 'Freelancer',
    place: 'Fiverr',
    description:
      'Worked on freelance digital projects including video and photo editing, Java server environments, and payment gateway integration for online business clients.'
  }
];

const publications = [
  {
    type: 'Conference Presentation · 2025',
    title: 'ACADIA',
    description:
      'Material Feedback in Robotic Steam Bending: A Quantitative Approach to Wood Forming. Presented at ACADIA 2025.'
  },
  {
    type: 'Research Collaboration · IEEE Submission',
    title: 'MannLab',
    description:
      'Collaborated on the development of an autonomous robotic sensing platform for water-quality monitoring, integrating navigation, environmental sensing, and responsive data collection. Research submitted to IEEE.'
  }
];

const certifications = [
  {
    type: 'Transport Canada',
    title: 'RPAS Advanced Operations',
    description:
      'Certified for advanced drone operations in controlled airspace, including proximity to people and complex operating environments.'
  },
  {
    type: 'Safety Certification',
    title: 'Working at Heights',
    description:
      'Certified for elevated work environments, fall prevention systems, and safe access procedures for active construction sites.'
  },
  {
    type: 'Ontario Ministry of Transportation',
    title: "G Driver's License",
    description:
      'Full Ontario driver’s license supporting fabrication logistics, transportation, and site-based work.'
  }
];

export default function About() {
  return (
    <div className="relative overflow-hidden">
      <Layout title="">
        <div>
          {/* HEADER */}

          <section className="px-5 pb-10 pt-4">
            <h1 className="m-0 text-5xl font-normal tracking-tight lg:text-7xl">
              About Me
            </h1>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <p className="m-0 max-w-[760px] text-base leading-[1.6] text-foreground/50">
                Architecture, robotics, fabrication, research, and visual
                storytelling developed through physical systems, prototypes,
                and built work.
              </p>

              <a
                href="#experience"
                className="w-fit border-b border-foreground pb-1 text-sm transition-opacity hover:opacity-50"
              >
                view experience ↓
              </a>
            </div>
          </section>

          <div className="mx-5 border-t border-foreground/40" />

          {/* INTRO */}

          <section className="grid items-center gap-10 px-5 py-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
            <AnimatedSection animation="fade-right">
              <div className="relative aspect-square w-full max-w-lg overflow-hidden rounded-3xl">
                <Image
                  src="/images/IMG_6885.PNG"
                  alt="Liam Cassano"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
            </AnimatedSection>

            <div className="space-y-8">
              <AnimatedSection animation="fade-up">
                <TextReveal
                  text="I work across architecture, robotics, fabrication, material research, and visual storytelling. I’m interested in how design ideas move from drawings and code into physical systems, prototypes, and built experiences."
                  className="text-xl font-medium leading-relaxed text-foreground/90 sm:text-2xl"
                  as="p"
                  highlightWords={[
                    'robotics',
                    'fabrication',
                    'material',
                    'physical'
                  ]}
                  scrub={false}
                />
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.1}>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    What I Work On
                  </h3>

                  <p className="leading-relaxed text-foreground/70">
                    My work sits between architecture, computational design,
                    robotic fabrication, material systems, and visual
                    storytelling. I’m especially interested in projects that
                    move beyond representation and become something that can be
                    tested, built, documented, and refined.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.2}>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Outside the Studio
                  </h3>

                  <p className="leading-relaxed text-foreground/70">
                    Outside of architecture, I spend time filming,
                    photographing, travelling, and documenting projects. I’m
                    drawn to the overlap between design, technology,
                    storytelling, and making things that feel considered and
                    memorable.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* EXPERIENCE / PUBLICATIONS / CERTIFICATIONS / EDUCATION */}

          <section id="experience" className="py-16">
            <AnimatedSection animation="fade-up">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
                {/* LEFT COLUMN */}

                <div className="min-w-0">
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                      Experience
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {experience.map((item, index) => (
                      <AnimatedSection
                        key={item.role}
                        animation="fade-up"
                        delay={index * 0.05}
                      >
                        <div className="rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm sm:p-8">
                          <p className="mb-2 text-sm text-foreground/40">
                            {item.date}
                          </p>

                          <h3 className="text-lg font-semibold text-foreground">
                            {item.role}
                          </h3>

                          <p className="mb-3 text-sm font-medium text-foreground/60">
                            {item.place}
                          </p>

                          <p className="leading-relaxed text-foreground/70">
                            {item.description}
                          </p>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>

                {/* RIGHT COLUMN */}

                <div className="min-w-0">
                  <div className="space-y-10 lg:sticky lg:top-32">
                    {/* PUBLICATIONS */}

                    <AnimatedSection animation="fade-up">
                      <div className="mb-8">
                        <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                          Publications
                        </h2>
                      </div>

                      <div className="rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm sm:p-8">
                        <div className="space-y-6">
                          {publications.map((item) => (
                            <div key={item.title}>
                              <p className="text-sm text-foreground/40">
                                {item.type}
                              </p>

                              <h3 className="font-semibold text-foreground">
                                {item.title}
                              </h3>

                              <p className="text-sm leading-relaxed text-foreground/70">
                                {item.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>

                    {/* CERTIFICATIONS */}

                    <AnimatedSection animation="fade-up" delay={0.1}>
                      <div className="mb-8">
                        <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                          Certifications
                        </h2>
                      </div>

                      <div className="rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm sm:p-8">
                        <div className="space-y-6">
                          {certifications.map((item) => (
                            <div key={item.title}>
                              <p className="text-sm text-foreground/40">
                                {item.type}
                              </p>

                              <h3 className="font-semibold text-foreground">
                                {item.title}
                              </h3>

                              <p className="text-sm leading-relaxed text-foreground/70">
                                {item.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>

                    {/* EDUCATION */}

                    <AnimatedSection animation="fade-up" delay={0.2}>
                      <div className="mb-8">
                        <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                          Education
                        </h2>
                      </div>

                      <div className="rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm sm:p-8">
                        <p className="mb-6 leading-relaxed text-foreground/70">
                          <span className="font-semibold text-foreground">
                            University of Toronto · Bachelor of Arts in
                            Architectural Studies · 2026
                          </span>
                          <br />
                          Focused on computational design, robotic fabrication,
                          material systems, and design-build research.
                        </p>

                        <div className="mb-4 rounded-2xl border border-foreground/5 bg-foreground/[0.03] p-5">
                          <p className="mb-2 text-sm text-foreground/40">
                            Research Award
                          </p>

                          <h3 className="text-lg font-semibold text-foreground">
                            NSERC Undergraduate Student Research Award (USRA)
                          </h3>

                          <p className="text-sm text-foreground/60">
                            University of Toronto Excellence Award
                          </p>
                        </div>

                        <div className="mb-4 rounded-2xl border border-foreground/5 bg-foreground/[0.03] p-5">
                          <p className="mb-2 text-sm text-foreground/40">
                            Award
                          </p>

                          <h3 className="text-lg font-semibold text-foreground">
                            John and Myrna Daniels Foundation Opportunity Award
                          </h3>
                        </div>

                        <div className="mb-8 rounded-2xl border border-foreground/5 bg-foreground/[0.03] p-5">
                          <p className="mb-2 text-sm text-foreground/40">
                            Scholarship
                          </p>

                          <h3 className="text-lg font-semibold text-foreground">
                            Ontario Association of Architects&apos; Scholarship
                          </h3>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <div className="rounded-full border border-foreground/10 px-4 py-2 text-sm">
                            Daniels Faculty of Architecture, Landscape, and
                            Design
                          </div>

                          <div className="rounded-full border border-foreground/10 px-4 py-2 text-sm">
                            Dean&apos;s List Scholar
                          </div>

                          <div className="rounded-full border border-foreground/10 px-4 py-2 text-sm">
                            Robotic Fabrication
                          </div>

                          <div className="rounded-full border border-foreground/10 px-4 py-2 text-sm">
                            Computational Design
                          </div>

                          <div className="rounded-full border border-foreground/10 px-4 py-2 text-sm">
                            Material Systems
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>

                    {/* TOOLS */}

                    <AnimatedSection animation="fade-up" delay={0.3}>
                      <Link
                        href="/tools"
                        className="group flex items-center justify-between rounded-2xl border border-foreground/5 bg-white p-6 shadow-sm transition-all duration-300 hover:border-foreground/15 sm:p-8"
                      >
                        <div>
                          <p className="mb-2 text-sm text-foreground/40">
                            Workflow
                          </p>

                          <h2 className="m-0 text-xl font-bold text-foreground sm:text-2xl">
                            Tools I Use
                          </h2>

                          <p className="m-0 mt-2 text-sm text-foreground/60">
                            Software, machines, robotics, fabrication tools, and
                            production equipment.
                          </p>
                        </div>

                        <span className="ml-8 text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                          ↗
                        </span>
                      </Link>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </section>
        </div>
      </Layout>

      <ContrastCursor isActive={false} text="" />
    </div>
  );
}