"use client";

import React, { useEffect } from 'react';
import { projectsData } from '../../../lib/data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ImageCarousel from '@/components/imageCarousel';

const ProjectPage = ({
  params,
}: {
  params: { id: string }
}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectedProject = projectsData.find(project => project.id === params.id);

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col items-center px-4">
      <div className="max-w-[90rem] text-left leading-8">
        <div className="flex flex-col items-center w-full">
          <motion.div
            className="sm:w-1/2 px-3"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
            <p className="my-3 leading-relaxed text-gray-700 dark:text-gray-200 text-justify">{selectedProject.fullDescription}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {selectedProject.tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 hover:scale-105 transition-all"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="sm:w-1/2 h-100vh px-3 py-4 md:py-0 flex flex-col justify-between"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 100, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="flex flex-col items-center h-96">
              <ImageCarousel images={selectedProject.images} />
            </div>

            <div className="flex flex-row py-3 justify-between">
              {selectedProject.liveSite !== "" && (
                <Link
                  className="group bg-white px-7 py-1 flex items-center gap-2 rounded-full hover:scale-105 hover:text-gray-950 transition cursor-pointer border border-black/15 dark:bg-white/10 dark:text-white dark:hover:text-gray-200"
                  href={selectedProject.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </Link>
              )}
              {selectedProject.sourceCode !== "" && (
                <Link
                  className="group bg-white px-7 py-1 flex items-center gap-2 rounded-full hover:scale-105 hover:text-gray-950 transition cursor-pointer border border-black/15 dark:bg-white/10 dark:text-white dark:hover:text-gray-200"
                  href={selectedProject.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </Link>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="pt-1 pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5
          }}
        >
          <hr className="my-3 border-t-2 border-gray-700 opacity-30 dark:border-white" />

          <Link
            className="w-[6rem] bg-gray-900 text-white px-7 py-1 flex items-center gap-2 rounded-full outline-none hover:scale-105 hover:bg-gray-950 transition cursor-pointer"
            href="/#home"
          >
            Back
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default ProjectPage;