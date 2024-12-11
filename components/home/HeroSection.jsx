"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import { FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa'
import Image from 'next/image'
import { TextGenerateEffect } from '../ui/text-generate-effect'
import { AuroraBackground } from '../ui/aurora-background'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const HeroSection = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const options = {
        type: 'loop',
        arrows: false,
        perPage: 1,
        autoPlay: true,
        pagination: true,
        interval: 1000,
        classes: {
            pagination: 'splide__pagination custom-pagination',
        },
    }
    return (
        <div className='overflow-hidden'>
            <AuroraBackground className='h-full'>
                <Splide
                    className=''
                    options={options}
                    onActive={(slide) => setActiveIndex(slide.index)}
                >
                    <SplideSlide>
                        <div className="grid lg:grid-cols-12 h-full items-center customContainer">
                            {/* Left Content */}
                            <div className="space-y-6 col-span-7 py-20">
                                <div className="min-h-[120px]">
                                    {activeIndex === 0 &&
                                        <TextGenerateEffect className="heroTitle" words="Stucked in a crazy slowest Internet?" />
                                    }
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-lg">
                                    No worries! An expert internet plan matcher is here to help. Simply &
                                    pick out of hundreds of vetted service plans in 30+ city locations.
                                </p>
                                <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
                                    Get it started
                                </button>
                            </div>
                            {/* Right Image */}
                            <div className="col-span-5 h-full">
                                <DotLottieReact
                                    src={"/lottie/mobile-wifi.lottie"}
                                    loop
                                    autoplay
                                />
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="grid lg:grid-cols-12 h-full items-center customContainer">
                            {/* Left Content */}
                            <div className="space-y-6 lg:col-span-7 py-20">
                                <div className="min-h-[120px]">
                                    {activeIndex === 1 &&
                                        <TextGenerateEffect className="heroTitle" words="Stucked in a crazy slowest Internet?" />
                                    }
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-lg">
                                    No worries! An expert internet plan matcher is here to help. Simply &
                                    pick out of hundreds of vetted service plans in 30+ city locations.
                                </p>
                                <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
                                    Get it started
                                </button>
                            </div>

                            {/* Right Image */}
                            <div className="col-span-5 h-full">
                                <DotLottieReact
                                    src={"/lottie/laptop-working.lottie"}
                                    loop
                                    autoplay
                                />
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="grid lg:grid-cols-12 h-full items-center customContainer">
                            {/* Left Content */}
                            <div className="space-y-6 lg:col-span-7  py-20">
                                <div className="min-h-[120px]">
                                    {activeIndex === 2 &&
                                        <TextGenerateEffect className="heroTitle" words="Optimal Internet Speed With Multiple IX" />
                                    }
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-lg">
                                    NetCom online is one of the best internet service providers in Bangladesh with
                                    BDIX, ISPAB IX, aamra IX, etc. In the last 12 years, we have gotten thousands
                                    of happy clients by providing them with stable Internet Connections.
                                </p>
                                {/* Speed Indicators */}
                                <div className="flex gap-4 lg:col-span-5">
                                    <div className="flex items-center cursor-pointer hover:-translate-y-1 transition-all duration-300 gap-2 bg-white/80 dark:bg-gray-800/80 shadow-card rounded-lg px-5 py-3">
                                        <div className="bg-blue-100 p-3 rounded-full">
                                            <FaFacebook className="text-blue-500 text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">Upto</p>
                                            <p className="font-semibold">100 Mbps</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center cursor-pointer hover:-translate-y-1 transition-all duration-300 gap-2 bg-white/80 dark:bg-gray-800/80 shadow-card rounded-lg px-5 py-3">
                                        <div className="bg-red-100 p-3 rounded-full">
                                            <FaYoutube className="text-red-500 text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">Upto</p>
                                            <p className="font-semibold">100 Mbps</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center cursor-pointer hover:-translate-y-1 transition-all duration-300 gap-2 bg-white/80 dark:bg-gray-800/80 shadow-card rounded-lg px-5 py-3">
                                        <div className="bg-pink-100 p-3 rounded-full">
                                            <FaTiktok className="text-black text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">Upto</p>
                                            <p className="font-semibold">100 Mbps</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
                                    Get it started
                                </button>
                            </div>
                            {/* Right Image */}
                            <div className="col-span-5 h-full w-11/12">
                                <DotLottieReact
                                    src={"/lottie/server.lottie"}
                                    loop
                                    autoplay
                                />
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </AuroraBackground>
        </div>
    )
}

export default HeroSection