"use client";

import React from 'react';
import SectionHeading from './sectionHeading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitButton from './submitButton';
import toast from 'react-hot-toast';
import { GrContact } from "react-icons/gr";

const Contact = () => {

    const { ref } = useSectionInView('Contact');

    return (
        <motion.section
            ref={ref}
            className="relative mb-50 max-w-[45rem] w-[min(100%, 38rem)] text-center leading-8 sm:mb-40 scroll-mt-50"
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{
                once: true
            }}
        >
            <SectionHeading>Contact Me</SectionHeading>
            <motion.div
                className="absolute top-20 left-1/2 -translate-x-32"
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0 }}
                transition={{ delay: 1, duration: 1 }}
                viewport={{
                    once: true
                }}
            >
                <GrContact size={250} />
            </motion.div>
            <motion.div
                className=""
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                viewport={{
                    once: true
                }}
            >
                <p
                    className="text-gray-700 dark:text-gray-200"
                >
                    Please contact me directly at <a className="underline" href="mailto:jerrybsusanto@gmail.com">jerrybsusanto@gmail.com</a> or through the form below.
                </p>

                <form
                    className="mt-10 flex flex-col dark:text-black"
                    action={async (formData) => {
                        const { data, error } = await sendEmail(formData);

                        if (error) {
                            toast.error("Your message failed to send! Please try again.", { duration: 5000 })
                            return;
                        }

                        toast.success("Your message has been sent successfully! I will be in contact soon.", { duration: 5000 })
                    }}
                >
                    <input
                        className="h-14 rounded-lg border border-black/10 px-4 dark:bg-opacity/80 dark:focus:bg-opacity-100 dark:outline-none transition"
                        name="senderEmail"
                        type="email"
                        required
                        maxLength={50}
                        placeholder='Your email'
                    />
                    <textarea
                        className="h-36 my-3 rounded-lg border border-black/10 p-4 dark:bg-opacity/80 dark:focus:bg-opacity-100 dark:outline-none transition"
                        name="message"
                        required
                        maxLength={2000}
                        placeholder='Your message'
                    />
                    <SubmitButton />
                </form>
            </motion.div>

            <footer className="my-10 px-4 text-center text-gray-500">
                <small className="mb-2 text-xs">
                    &copy; 2023 Jerry S. All rights reserved.
                </small>
            </footer>
        </motion.section>
    )
}

export default Contact;