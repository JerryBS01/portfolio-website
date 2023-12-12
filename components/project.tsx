"use client";

import React from 'react';
import { projectsData } from '../lib/data';
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, id, description, tags, thumbnail, images }:
    ProjectProps
) => {

    return (
        <div className="group mb-3 sm:mb-8 last:mb-0">
            <Link href={`/projects/${id}`}>
                {/* Mobile View */}
                <motion.div
                    className="md:hidden"
                    initial={{ opacity: 0.5, scale: 0.5, x: -100 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{
                        once: true
                    }}
                >
                    <section
                        className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] hover:bg-gray-300 hover:cursor-pointer transition rounded-lg dark:bg-white/10 dark:hover:bg-white/20"
                    >
                        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                            <h3 className="text-2xl font-semibold">{title}</h3>
                            <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-200">{description}</p>
                            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                                {tags.map((tag, index) => (
                                    <li
                                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                        key={index}
                                    >
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Image
                            src={images[0]}
                            alt="My Project"
                            quality={95}
                            className="top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2  group-even:-right-[initial] group-even:-left-40"
                        />
                    </section>
                </motion.div>
                {/* Larger Screen View */}
                <div>
                    <section
                        className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative md:h-auto sm:h-[20rem] hover:bg-gray-300 hover:cursor-pointer transition rounded-md group-even:pl-8 hidden sm:block dark:bg-white/10 dark:hover:bg-white/20"
                    >
                        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] text-left flex flex-col h-full sm:group-even:ml-[18rem]">
                            <h3 className="text-2xl font-semibold">{title}</h3>
                            <p className="my-3 leading-relaxed text-gray-700 dark:text-gray-200">{description}</p>
                            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                                {tags.map((tag, index) => (
                                    <li
                                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                        key={index}
                                    >
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Image
                            src={thumbnail}
                            alt="My Project"
                            quality={95}
                            className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2  group-even:-right-[initial] group-even:-left-40"
                        />
                    </section>
                </div>
            </Link>
        </div >
    )
}

export default Project;