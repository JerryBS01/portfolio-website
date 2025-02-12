"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './sectionHeading';
import { FaLightbulb, FaTimes } from 'react-icons/fa';
import { PiArrowBendDownLeft } from "react-icons/pi";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { useSectionInView } from '@/lib/hooks';
import { experiencesData } from '@/lib/data';

const About = () => {

    const { ref } = useSectionInView('About');

    const [isButtonClicked, setButtonClicked] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    // Prevent hydration errors by ensuring this runs only on the client
    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null; // Avoid rendering until mounted
    }

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
                <div className="flex w-full text-left">
                    <motion.div
                        className="text-gray-800 sm:w-1/2"
                        initial={{ opacity: 0, scale: 0.75 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.25, duration: 1 }}
                    >
                        <br className="md:hidden"></br>
                        <br className="md:hidden"></br>
                        <p className="dark:text-white">
                            Hi there! I am a final-year Bachelor of Information Technology student at Monash University with over a year of professional experience at companies like Coles and Monash University. My expertise spans business and data analysis, stakeholder management, requirements gathering, project and product management, process improvement, automation, agile methodologies, as well as web development and design.
                        </p>
                        <p className="dark:text-white">
                            Here are my career highlights:
                        </p>
                        <ul className="list-disc list-inside dark:text-white">
                            <li>Over 1 year of proven success in automating operational processes to reduce hours of manual work into minutes across large organisations like Coles and Monash University.</li>
                            <li>A history of leading the development of high-impact internal resources that became essential for accelerating delivery and operational speed across entire organisations.</li>
                            <li>Developed renowned systems used daily by thousands of users, including the LibGuides web system for Monash University and an online ordering system for Indomie instant noodles.</li>
                        </ul>
                    </motion.div>
                </div>
            )}
            {isButtonClicked && (
                <div className="flex items-center w-full">
                    <div className="text-gray-800 sm:w-1/2">

                    </div>

                    <motion.div
                        className="text-gray-800 sm:w-1/2 mt-2"
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
                                <ul className="list-disc list-inside text-sm text-left text-gray-700 dark:text-gray-200 mt-1">
                                    {experience.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                                {index !== experiencesData.length - 1 && (
                                    <MdKeyboardDoubleArrowUp className="absolute left-40 top-50 translate-y-4 text-2xl dark:text-gray-200" />
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