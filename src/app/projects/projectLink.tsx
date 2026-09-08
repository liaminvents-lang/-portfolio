'use client';

import React, { useContext } from 'react';
import { ModalContext } from '@/app/projects/modalContext';

interface Props {
  index: number;
  title: string;
  tag: string;
}

export default function ProjectLink({ index, title, tag }: Props) {
  const { setModal } = useContext(ModalContext);

  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="flex w-full cursor-pointer items-center border-b border-b-gray-600 px-5 py-10 transition-all duration-200 hover:opacity-50"
    >
      <h2 className="m-0 w-3/4 pr-10 text-xl font-normal transition-all duration-300 hover:translate-x-[-10px] lg:text-4xl">
        {title}
      </h2>

      <div className="w-1/4 pl-8">
        <p className="m-0 text-left text-sm font-light leading-relaxed transition-all duration-300 hover:translate-x-[10px]">
          {tag}
        </p>
      </div>
    </div>
  );
}