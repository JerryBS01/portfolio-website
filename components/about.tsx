"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './sectionHeading';
import { FaLightbulb, FaTimes } from 'react-icons/fa';
import { PiArrowBendDownLeft } from "react-icons/pi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useSectionInView } from '@/lib/hooks';
import { experiencesData } from '@/lib/data';

const About = () => {

    const { ref } = useSectionInView('About');

    const [isButtonClicked, setButtonClicked] = useState(false);

    return (
        <motion.section
            ref={ref}
            className="relative mb-50 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            id="about"
        >
            <SectionHeading>About Me</SectionHeading>
            <motion.div
                className="absolute md:top-60 top-20 left-1/2"
                initial={{ x: isButtonClicked ? '50%' : '100%' }}
                animate={{ x: isButtonClicked ? '-250%' : '250%' }}
                transition={{ duration: 1 }}
            >
                <button
                    className={`relative p-2 rounded-full ${isButtonClicked ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-600 dark:hover:text-gray-700' : 'bg-gray-200 dark:bg-gray-900 dark:border dark:border-white dark:border-opacity-40 dark:text-gray-200 dark:hover:text-white'
                        } hover:text-gray-950 hover:scale-110 transition`}
                    onClick={() => {
                        // Toggle the state when the button is clicked
                        setButtonClicked(!isButtonClicked);
                        console.log('Button clicked');
                    }}
                >
                    {isButtonClicked ? (
                        <FaTimes className="opacity-100 group transition" />
                    ) : (
                        <div>
                            <div className="absolute top-75 left-1/2 transform -translate-x-1/2 -translate-y-12 whitespace-nowrap">
                                My Experience
                            </div>
                            <PiArrowBendDownLeft className="absolute top-1/2 left-1/2 translate-x-7 -translate-y-6 scale-150 -rotate-12" />
                            <FaLightbulb className="opacity-75 group-hover:text-[1.5rem] transition" />
                        </div>
                    )}
                </button>
            </motion.div>
            {!isButtonClicked && (
                <div className="flex items-center w-full">
                    <motion.div
                        className="text-gray-800 sm:w-1/2"
                        initial={{ opacity: 0, scale: 0.75 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.25, duration: 1 }}
                    >
                        <br className="md:hidden"></br>
                        <br className="md:hidden"></br>
                        <p className="dark:text-white">
                            After completing a <span className="font-medium">web development internship</span> at <span className="font-medium">Indofood CBP</span>, I realized my passion for <span className="font-medium">web development</span>, prompting me to actively pursue various projects. My primary focus is <span className="font-medium">front-end development</span>, and I find particular enjoyment in working with <span className="font-medium">React</span>. However, I am also well-versed in <span className="font-medium">full-stack development</span> and <span className="font-medium">UI/UX design</span>. Fueled by my passion for <span className="font-medium">web development</span>, I volunteered as a <span className="font-medium">web designer and developer</span> for a not-for-profit organization, aiming to contribute to positive change in the world through my skills.
                        </p>
                    </motion.div>
                </div>
            )}
            {isButtonClicked && (
                <div className="flex items-center w-full">
                    <div className="text-gray-800 sm:w-1/2">

                    </div>

                    <motion.div
                        className="text-gray-800 sm:w-1/2 mt-2 md:max-h-80 md:overflow-y-auto"
                        initial={{ opacity: 0, scale: 0.75 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.25, duration: 1 }}
                    >
                        <br className="md:hidden"></br>
                        <br className="md:hidden"></br>
                        {experiencesData.map((experience, index) => (
                            <div
                                key={index}
                                className="relative bg-white border border-gray-300 shadow-none p-3 mb-8 last:mb-0 hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/20"
                            >
                                <h3 className="font-semibold capitalize dark:text-white">{experience.title}</h3>
                                <p className="font-normal !mt-0 dark:text-white">{experience.date}</p>
                                <p className="font-normal !mt-0 dark:text-white">{experience.location}</p>
                                <p className="!mt-1 !font-normal text-gray-700 dark:text-gray-200">
                                    {experience.description}
                                </p>
                                {index !== experiencesData.length - 1 && (
                                    <MdKeyboardDoubleArrowDown className="absolute left-40 top-50 translate-y-4 text-2xl dark:text-gray-200" />
                                )}
                            </div>
                        ))}
                    </motion.div>

                </div>
            )}
        </motion.section>
    );
};

export default About;