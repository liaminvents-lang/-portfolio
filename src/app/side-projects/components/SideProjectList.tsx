'use client';

import { ProjectCard } from '@/components/ui/ProjectCard';
import { motion } from 'framer-motion';

type SideProject = {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  link: string;
};

interface SideProjectListProps {
  projects: SideProject[];
}

export function SideProjectList({ projects }: SideProjectListProps) {
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="space-y-12">
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="pb-4"
      >
        <div className="flex items-baseline justify-between gap-8">
          <h1 className="m-0 text-6xl font-bold tracking-tight lg:text-7xl">
            Side Projects
          </h1>

          <a
            href="/projects"
            className="hidden shrink-0 text-base underline underline-offset-4 transition-opacity hover:opacity-50 sm:block"
          >
            view projects
          </a>
        </div>

        <p className="m-0 mt-6 max-w-[780px] text-lg leading-[1.6] text-foreground/45">
          Tools, machines, prototypes, and experiments developed in support of
          larger ideas.
        </p>

        <a
          href="/projects"
          className="mt-6 inline-block text-base underline underline-offset-4 transition-opacity hover:opacity-50 sm:hidden"
        >
          view projects
        </a>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            id={project.link}
            title={project.title}
            description={project.description}
            imagePath={project.imagePath}
            link={project.link}
            index={index}
            animated
            buttonText="View Project"
          />
        ))}
      </div>
    </div>
  );
}