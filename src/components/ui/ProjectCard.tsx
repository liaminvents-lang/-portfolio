'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  link: string;
  publishedAt?: Date;
  index?: number;
  animated?: boolean;
  buttonText?: string;
}

export function ProjectCard({
  id,
  title,
  description,
  imagePath,
  link,
  publishedAt,
  index = 0,
  animated = false,
  buttonText = 'View Project'
}: ProjectCardProps) {
  const isGripper = imagePath === '/images/thegripper.PNG';

  const card = (
    <div className="group h-full overflow-hidden rounded-2xl border border-foreground/10 bg-background shadow-sm">
      {/* IMAGE */}

      <div
        className={`relative aspect-[4/3] w-full overflow-hidden ${
          isGripper ? 'bg-white' : 'bg-foreground/[0.03]'
        }`}
      >
        {imagePath ? (
          <Image
            src={imagePath}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={
              isGripper
                ? 'object-contain scale-[1.42] transition-transform duration-500 group-hover:scale-[1.46]'
                : 'object-cover transition-transform duration-500 group-hover:scale-[1.03]'
            }
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-xs text-foreground/30">No image</p>
          </div>
        )}
      </div>

      {/* CONTENT */}

      <div className="flex min-h-[190px] flex-col p-5">
        <h2 className="m-0 text-xl font-semibold leading-[1.1] tracking-tight">
          {title}
        </h2>

        <p className="m-0 mt-3 text-sm leading-[1.5] text-foreground/65">
          {description}
        </p>

        {publishedAt && (
          <p className="m-0 mt-3 text-xs text-foreground/40">
            {publishedAt.toLocaleDateString('en-CA', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        )}

        <div className="mt-auto pt-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-sm font-medium transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
            {buttonText}

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </div>
  );

  if (animated) {
    return (
      <motion.div
        key={id}
        className="h-full"
        initial={{
          opacity: 0,
          y: 30
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.6,
          delay: index * 0.1
        }}
      >
        <Link href={link} className="block h-full">
          {card}
        </Link>
      </motion.div>
    );
  }

  return (
    <Link href={link} className="block h-full">
      {card}
    </Link>
  );
}