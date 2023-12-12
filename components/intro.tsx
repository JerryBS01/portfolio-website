"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithub, FaReact } from 'react-icons/fa';
import { IoLogoVercel } from "react-icons/io5";
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

const Intro = () => {

    const { ref } = useSectionInView('Home');

    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    const [rotation, setRotation] = useState(0);

    return (
        <section ref={ref} className="mb-50 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-50" id="home">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 2 }}
                    >
                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                        >
                            <FaReact
                                className="h-24 w-24 p-2 rounded-full object-cover border-[0.35rem] border-white text-cyan-400 bg-black"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="group mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] md:text-4xl">
                    Greetings, my name is{' '}
                    <div className="font-bold inline hover:text-gray-400 transition-all">Jerry</div>.
                    I am a{' '}
                    <div className="font-bold inline hover:text-gray-400 transition-all">Bachelor of IT</div>{' '}
                    student at{' '}
                    <div className="font-bold inline hover:text-gray-400 transition-all">Monash University</div>
                    , majoring in{' '}
                    <div className="font-bold inline hover:text-gray-400 transition-all">Software Development</div>.
                    I am passionate about{' '}
                    <div className="font-bold inline hover:text-gray-400 transition-all">web development</div>
                    ,{' '}
                    <div className="font-bold inline hover:text-gray-400 transition-all">UI/UX design</div>
                    , and{' '}
                    <div className="font-bold inline hover:text-gray-400 transition-all">data analytics</div>.
                </div>
            </motion.div>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.5,
                    duration: 1.5
                }}
            >
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 hover:bg-gray-950 transition-all cursor-pointer"
                    onClick={() => {
                        setActiveSection("Contact")
                        setTimeOfLastClick(Date.now())
                    }}
                >
                    Contact me here <BsArrowRight className="opacity-75 group-hover:translate-x-1 group-hover:text-[1.5rem] transition-all" />
                </Link>

                <a
                    href="/Resume-Jerry_Susanto.pdf"
                    download
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full hover:scale-105 hover:text-gray-950 transition-all cursor-pointer border border-black/15 dark:bg-white/10 dark:text-white dark:hover:text-gray-200"
                >
                    Download Resume <HiDownload className="opacity-75 group-hover:text-[1.5rem] transition-all" />
                </a>
                <a
                    href="https://github.com/JerryBS01" target="_blank"
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.25rem] hover:text-[1.5rem] hover:text-gray-950 hover:scale-105 transition-all cursor-pointer border border-black/15 dark:bg-white/10 dark:text-white dark:hover:text-gray-200"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://vercel.com/jerrys-projects-a38ba98d" target="_blank"
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.25rem] hover:text-[1.5rem] hover:text-gray-950 hover:scale-105 transition-all cursor-pointer border border-black/15 dark:bg-white/10 dark:text-white dark:hover:text-gray-200"
                >
                    <IoLogoVercel />
                </a>
            </motion.div>

        </section >
    )
}

export default Intro;