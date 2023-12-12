"use client";

import React from 'react';
import SectionHeading from './sectionHeading';
import { affiliationsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Affiliations = () => {

    const { ref } = useSectionInView('Affiliations');

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
        <section ref={ref} className="relative mb-50 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-50" id="affiliations">
            <SectionHeading>My Affiliations</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-9 items-center">
                {affiliationsData.map((logo, index) => (
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
                        <Image src={logo} alt="" width={200} height={200} />
                    </motion.div>
                ))}
            </ul>
        </section>
    )
}

export default Affiliations;