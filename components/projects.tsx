"use client";

import React from 'react';
import SectionHeading from './sectionHeading';
import { projectsData } from '../lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';
import Link from 'next/link';

const Projects = () => {

    const { ref } = useSectionInView('Projects', 0.25);

    return (
        <section ref={ref} className="mb-50 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-50" id="projects">
            <SectionHeading>Projects</SectionHeading>
            <div className="">
                {
                    projectsData.map((project) => (
                        <React.Fragment key={project.id}>
                                <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects;