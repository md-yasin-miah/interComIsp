"use client"
import { useContext, useEffect, useState } from 'react'
import SectionTitle from '../shared/SectionTitle'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaPlay, FaYoutube } from "react-icons/fa"
import { GridBackground } from '../ui/grid-background'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { testimonialSplideOptions } from '@/lib/utils'
import { HomeAPIContext } from '@/contexts/HomeAPIContext'
import TestimonialSectionSkeleton from '../skeleton/TestimonialSectionSkeleton'
import ErrorSection from '../sections/ErrorSection'

const TestimonialSection = () => {
    const { Testimonial, getTestimonialData } = useContext(HomeAPIContext);
    const [activeVideo, setActiveVideo] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoClick = (video) => {
        setActiveVideo(video);
        setIsPlaying(true);
    };

    useEffect(() => {
        if (activeVideo) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [activeVideo]);

    useEffect(() => {
        !Testimonial.data && getTestimonialData();
    }, []);
    if (Testimonial.isLoading) return <TestimonialSectionSkeleton />;
    if (Testimonial.isError) return <ErrorSection
        retry={getTestimonialData}
        message="Something went wrong while fetching testimonial data"
    />;


    return (
        <section className="relative py-20 overflow-hidden">
            <GridBackground />

            <div className="relative z-10 customContainer">
                <SectionTitle
                    title="customer"
                    title2="stories"
                    placeholder_title="stories"
                    subTitle="Hear what our customers have to say about their experience with NetCom"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-16"
                >
                    <Splide options={testimonialSplideOptions} extensions={{ AutoScroll }}>
                        {Testimonial.data?.map((testimonial, index) => (
                            <SplideSlide key={index} className='py-5'>
                                <div
                                    className="relative group bg-white dark:bg-black border border-transparent dark:border-white/[0.2] rounded-2xl p-4 shadow-lg 
                                    hover:shadow-xl transition-all duration-300 min-h-[460px]"
                                >
                                    <div className="relative aspect-video overflow-hidden rounded-xl cursor-pointer">
                                        {
                                            testimonial?.iFrame ?
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    src={testimonial?.iFrame}
                                                    title="YouTube video player"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                    allowFullScreen
                                                />
                                                :
                                                <Image
                                                    src={testimonial?.thumbnailUrl}
                                                    alt={testimonial?.name}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                        }
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                                        {/* Play Button */}

                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="absolute inset-0 flex items-center justify-center"
                                            onClick={() => handleVideoClick(testimonial)}
                                        >
                                            <div className={`w-14 h-14 sm:w-16 sm:h-16 ${!testimonial?.iFrame ? 'bg-primary' : 'bg-transparent'} rounded-full flex items-center justify-center shadow-lg`}>
                                                {
                                                    !testimonial?.iFrame &&
                                                    <FaPlay className="text-white text-lg sm:text-xl ml-1" />
                                                }
                                            </div>
                                        </motion.div>
                                    </div>

                                    <div className="mt-6 space-y-3 px-2">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                                            {testimonial?.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {testimonial?.role} at <span className="font-semibold text-white">{testimonial?.company}</span>
                                        </p>
                                        <p className="text-gray-700 dark:text-gray-300 italic text-sm sm:text-base ellipsis-6">
                                            "{testimonial?.quote}"
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </motion.div>

                {/* Video Modal */}
                {activeVideo && (
                    <div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={() => {
                            setActiveVideo(null);
                            setIsPlaying(false);
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
                            onClick={e => e.stopPropagation()}
                        >
                            {
                                activeVideo?.iFrame ?
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={activeVideo?.iFrame}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                    :
                                    <video
                                        src={activeVideo?.videoUrl}
                                        controls
                                        autoPlay={isPlaying}
                                        className="w-full h-full rounded-xl"
                                    />
                            }
                            <button
                                className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-black/70"
                                onClick={() => {
                                    setActiveVideo(null);
                                    setIsPlaying(false);
                                }}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default TestimonialSection
