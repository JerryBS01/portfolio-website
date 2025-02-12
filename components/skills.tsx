"use client";

import React from 'react';
import SectionHeading from './sectionHeading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 50 },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.05 * index }
    })
};

const Skills = () => {
    const { ref } = useSectionInView("Skills");

    return (
        <section ref={ref} className="relative mb-50 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-50" id="skills">
            <SectionHeading>Technical Skills</SectionHeading>
            <div className="space-y-6">
                {Object.entries(skillsData).map(([category, skills], catIndex) => (
                    <div key={catIndex} className="text-center">
                        <h3 className="text-xl font-semibold mb-2">{category}</h3>
                        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    custom={index}
                                >
                                    <li className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 hover:scale-105 hover:bg-gray-300 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-gray-200">
                                        {skill}
                                    </li>
                                </motion.div>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;