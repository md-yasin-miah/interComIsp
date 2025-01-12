"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import React, { useState } from 'react'
import { FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa'
import { TextGenerateEffect } from '../ui/text-generate-effect'
import { AuroraBackground } from '../ui/aurora-background'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const HeroSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const options = {
        type: 'loop',
        arrows: false,
        perPage: 1,
        autoPlay: true,
        pagination: true,
        interval: 5000,
        classes: {
            pagination: 'splide__pagination custom-pagination',
        },
    }

    return (
        <section>
            <AuroraBackground className='h-full md:pb-10 pb-5 overflow-hidden md:block hidden'>
                <Slider options={options} setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
            </AuroraBackground>
            <div className="md:hidden block">
                <Slider options={options} setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
            </div>
        </section>
    )
}

const Slider = ({ options, setActiveIndex, activeIndex }) => {
    const lottieConfig = {
        loop: true,
        autoplay: true,
    };

    return (
        <Splide
            className='md:pt-24 pt-20'
            options={options}
            onActive={(slide) => setActiveIndex(slide.index)}
        >
            <SplideSlide>
                <div className="grid lg:grid-cols-12 grid-cols-1 h-full items-center customContainer">
                    {/* Left Content */}
                    <div className="space-y-6 lg:col-span-7 col-span-12 md:py-20 py-10 order-2 lg:order-1">
                        <div className="md:min-h-[120px] min-h-[80px]">
                            {activeIndex === 0 &&
                                <TextGenerateEffect className="heroTitle" words="Stucked in a crazy slowest Internet?" />
                            }
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 md:text-lg text-base">
                            No worries! An expert internet plan matcher is here to help. Simply &
                            pick out of hundreds of vetted service plans in 30+ city locations.
                        </p>
                        <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
                            Get it started
                        </button>
                    </div>
                    {/* Right Image */}
                    <div className="lg:col-span-5 col-span-12 h-full order-1 lg:order-2">
                        <DotLottieReact
                            src="/lottie/mobile-wifi.lottie"
                            loop={lottieConfig.loop}
                            autoplay={lottieConfig.autoplay}
                            onError={(error) => {
                                console.error("Lottie Error:", error);
                            }}
                        />
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="grid lg:grid-cols-12 grid-cols-1 h-full items-center customContainer">
                    <div className="space-y-6 lg:col-span-7 col-span-12 md:py-20 py-10 order-2 lg:order-1">
                        <div className="md:min-h-[120px] min-h-[80px]">
                            {activeIndex === 1 &&
                                <TextGenerateEffect className="heroTitle" words="Experience Lightning-Fast Internet" />
                            }
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 md:text-lg text-base">
                            Upgrade your connectivity with our high-speed internet solutions.
                            Experience seamless streaming, gaming, and browsing.
                        </p>
                        <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
                            Get it started
                        </button>
                    </div>
                    <div className="lg:col-span-5 col-span-12 h-full order-1 lg:order-2">
                        <DotLottieReact
                            src="/lottie/laptop-working.lottie"
                            loop={lottieConfig.loop}
                            autoplay={lottieConfig.autoplay}
                            onError={(error) => {
                                console.error("Lottie Error:", error);
                            }}
                        />
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="grid lg:grid-cols-12 grid-cols-1 h-full items-center customContainer">
                    <div className="space-y-6 lg:col-span-7 col-span-12 md:py-20 py-10 order-2 lg:order-1">
                        <div className="md:min-h-[120px] min-h-[80px]">
                            {activeIndex === 2 &&
                                <TextGenerateEffect className="heroTitle" words="Optimal Internet Speed With Multiple IX" />
                            }
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 md:text-lg text-base">
                            NetCom online is one of the best internet service providers in Bangladesh with
                            BDIX, ISPAB IX, aamra IX, etc. In the last 12 years, we have gotten thousands
                            of happy clients by providing them with stable Internet Connections.
                        </p>
                        {/* Speed Indicators */}
                        <div className="flex md:flex-row flex-col md:gap-4 gap-2">
                            <SpeedIndicator
                                icon={<FaFacebook />}
                                bgColor="bg-blue-100"
                                iconColor="text-blue-500"
                            />
                            <SpeedIndicator
                                icon={<FaYoutube />}
                                bgColor="bg-red-100"
                                iconColor="text-red-500"
                            />
                            <SpeedIndicator
                                icon={<FaTiktok />}
                                bgColor="bg-pink-100"
                                iconColor="text-black"
                            />
                        </div>
                        <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
                            Get it started
                        </button>
                    </div>
                    <div className="lg:col-span-5 col-span-12 h-full w-full lg:w-11/12 order-1 lg:order-2">
                        <DotLottieReact
                            src="/lottie/server.lottie"
                            loop={lottieConfig.loop}
                            autoplay={lottieConfig.autoplay}
                            onError={(error) => {
                                console.error("Lottie Error:", error);
                            }}
                        />
                    </div>
                </div>
            </SplideSlide>
        </Splide>
    )
}

const SpeedIndicator = ({ icon, bgColor, iconColor }) => (
    <div className="flex items-center cursor-pointer hover:-translate-y-1 transition-all duration-300 gap-2 bg-white/80 dark:bg-gray-800/80 shadow-card rounded-lg px-5 py-3">
        <div className={`${bgColor} p-3 rounded-full`}>
            <div className={`${iconColor} text-xl`}>{icon}</div>
        </div>
        <div>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">Upto</p>
            <p className="font-semibold text-gray-600 dark:text-gray-300">100 Mbps</p>
        </div>
    </div>
);

export default HeroSection;