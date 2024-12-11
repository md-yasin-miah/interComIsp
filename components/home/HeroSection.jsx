"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import { FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa'
import heroOne from '../../public/hero-one.gif'
// import heroOne from "../../public/lottie/hero/hero-one.lottie"
import heroTwo from '../../public/hero-two.gif'
import heroThree from '../../public/hero-three.gif'
import Image from 'next/image'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const HeroSection = () => {
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
        <div className='heroSlider'>
            <Splide options={options}>
                <SplideSlide>
                    <div className="grid lg:grid-cols-12 gap-8 items-center customContainer py-20">
                        {/* Left Content */}
                        <div className="space-y-6 lg:col-span-7">
                            <h1 className="text-3xl md:text-[45px] lg:text-6xl font-bold text-gray-900 dark:text-white">
                                Stucked in a crazy slowest Internet?
                            </h1>
                            <p className="text-gray-600 dark:text-gray-300 text-lg">
                                No worries! An expert internet plan matcher is here to help. Simply &
                                pick out of hundreds of vetted service plans in 30+ city locations.
                            </p>
                            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
                                Get it started
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center lg:justify-end lg:col-span-5">
                            <Image
                                width={500}
                                height={500}
                                src={heroOne}
                                alt="Internet Service Illustration"
                                className="w-full max-w-[500px] h-auto"
                            />
                            {/* <DotLottieReact
                                src={heroOne}
                                loop
                                autoplay
                            /> */}
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="grid lg:grid-cols-12 gap-8 items-center customContainer py-20">
                        {/* Left Content */}
                        <div className="space-y-6 lg:col-span-7">
                            <h1 className="text-3xl md:text-[45px] lg:text-6xl font-bold text-gray-900 dark:text-white">
                                Stucked in a crazy slowest Internet?
                            </h1>
                            <p className="text-gray-600 dark:text-gray-300 text-lg">
                                No worries! An expert internet plan matcher is here to help. Simply &
                                pick out of hundreds of vetted service plans in 30+ city locations.
                            </p>
                            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
                                Get it started
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center lg:justify-end lg:col-span-5">
                            <Image
                                width={500}
                                height={500}
                                src={heroTwo}
                                alt="Internet Service Illustration"
                                className="w-full max-w-[500px] h-auto"
                            />
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="grid lg:grid-cols-12 gap-8 items-center customContainer py-20">
                        {/* Left Content */}
                        <div className="space-y-6 lg:col-span-7">
                            <h1 className="text-3xl md:text-[45px] lg:text-6xl font-bold text-gray-900 dark:text-white">
                                Optimal Internet Speed With Multiple IX
                            </h1>
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
                        <div className="flex justify-center lg:justify-end lg:col-span-5">
                            <Image
                                width={500}
                                height={500}
                                src={heroThree}
                                alt="Optimal Internet Speed Illustration"
                                className="w-full max-w-[500px] h-auto"
                            />
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default HeroSection