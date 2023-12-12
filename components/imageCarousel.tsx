import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ImageCarousel = ({ images }: { images: readonly StaticImageData[] }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const autoAdvance = () => {
        nextImage();
    };

    const openImageModal = () => {
        setIsImageModalOpen(true);
    };

    const closeImageModal = () => {
        setIsImageModalOpen(false);
    };

    useEffect(() => {
        const intervalId = setInterval(autoAdvance, 5000);

        return () => clearInterval(intervalId);
    }, [images]);

    return (
        <div className="flex items-center justify-center my-auto gap-2 md:gap-5 relative">
            <button
                className="bg-white p-1 flex items-center rounded-lg hover:scale-105 hover:text-gray-950 transition cursor-pointer border border-black/15 dark:bg-white/10 dark:text-white dark:hover:text-gray-200"
                onClick={prevImage}
            >
                <FaArrowLeft />
            </button>

            <div className="image-container cursor-pointer hover:scale-105 hover:opacity-60 transition-all" onClick={openImageModal}>
                <Image src={images[currentImageIndex]} alt="My Project" quality={95} />
            </div>

            <button
                className="bg-white p-1 flex items-center rounded-lg hover:scale-105 hover:text-gray-950 transitio-all cursor-pointer border border-black/15 dark:bg-white/10 dark:text-white dark:hover:text-gray-200"
                onClick={nextImage}
            >
                <FaArrowRight />
            </button>

            {isImageModalOpen && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={closeImageModal}
                >
                    <motion.div
                        className="max-w-md max-h-3/4 md:hidden overflow-hidden"
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image src={images[currentImageIndex]} alt="My Project" quality={95} />
                    </motion.div>
                    <motion.div
                        className="max-w-md max-h-3/4 hidden md:block overflow-hidden"
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 2 }}
                        exit={{ scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image src={images[currentImageIndex]} alt="My Project" quality={95} />
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default ImageCarousel;