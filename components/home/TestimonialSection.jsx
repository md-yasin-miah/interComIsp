"use client"
import React, { useState } from 'react'
import SectionTitle from '../shared/SectionTitle'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaPlay } from "react-icons/fa"
import { GridBackground } from '../ui/grid-background'

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Business Owner",
        company: "Tech Solutions Ltd",
        videoUrl: "/videos/testimonial1.mp4",
        thumbnail: "/images/testimonial1.jpg",
        quote: "NetCom has transformed how our business operates online. The speed and reliability are exceptional!"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Creative Director",
        company: "Digital Arts Studio",
        videoUrl: "/videos/testimonial2.mp4",
        thumbnail: "/images/testimonial2.jpg",
        quote: "As a creative professional, having reliable internet is crucial. NetCom delivers consistently!"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Remote Worker",
        company: "Global Solutions Inc",
        videoUrl: "/videos/testimonial3.mp4",
        thumbnail: "/images/testimonial3.jpg",
        quote: "Working from home requires stable internet. NetCom has never let me down!"
    }
];

const TestimonialSection = () => {
    const [activeVideo, setActiveVideo] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoClick = (videoId) => {
        setActiveVideo(videoId);
        setIsPlaying(true);
    };

    return (
        // bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800
        <section className="relative py-20 overflow-hidden">
            <GridBackground />
            
            <div className="relative z-10 customContainer">
                <SectionTitle
                    title="customer"
                    title2="stories"
                    placeholder_title="stories"
                    subTitle="Hear what our customers have to say about their experience with NetCom"
                />

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative group bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative aspect-video overflow-hidden rounded-xl cursor-pointer">
                                <Image
                                    src={testimonial.thumbnail}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                                
                                {/* Play Button */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                    onClick={() => handleVideoClick(testimonial.id)}
                                >
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                                        <FaPlay className="text-white text-lg sm:text-xl ml-1" />
                                    </div>
                                </motion.div>
                            </div>

                            <div className="mt-6 space-y-3 px-2">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                                    {testimonial.name}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {testimonial.role} at {testimonial.company}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 italic text-sm sm:text-base">
                                    "{testimonial.quote}"
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Video Modal */}
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
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
                            <video
                                src={testimonials.find(t => t.id === activeVideo)?.videoUrl}
                                controls
                                autoPlay={isPlaying}
                                className="w-full h-full rounded-xl"
                            />
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
                    </motion.div>
                )}
            </div>
        </section>
    )
}

export default TestimonialSection
