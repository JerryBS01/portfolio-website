"use client";

import React from 'react';
import SectionHeading from './sectionHeading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const Skills = () => {

    const { ref } = useSectionInView('Skills');

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index
            }
        })
    }

    return (
        <section ref={ref} className="relative mb-50 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-50" id="skills">
            <SectionHeading>My Skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true
                        }}
                        custom={index}
                    >
                        <li className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 hover:scale-105 hover:bg-gray-300 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-gray-200">
                            {skill}
                        </li>
                    </motion.div>
                ))}
            </ul>
        </section>
    )
}

export default Skills;