"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useContext, useState, useEffect } from 'react'
import { TextGenerateEffect } from '../ui/text-generate-effect'
import { AuroraBackground } from '../ui/aurora-background'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { heroSliderOptions } from '@/lib/utils'
import { HomeAPIContext } from '@/contexts/HomeAPIContext'
import Link from 'next/link'
import { getSocialIcon } from '@/helper/functions'
import HeroSkeleton from '../skeleton/HeroSkeleton'

const HeroSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const {
        HeroSlide,
        getHeroSlideData
    } = useContext(HomeAPIContext);

    useEffect(() => {
        const initData = async () => {
            await getHeroSlideData();
            setMounted(true);
        };
        initData();
    }, []);

    if (!mounted || !HeroSlide.data || HeroSlide.data.length === 0) {
        return <HeroSkeleton />
    }

    return (
        <section>
            <AuroraBackground className='h-full md:pb-10 pb-5 overflow-hidden md:block hidden'>
                <Slider options={heroSliderOptions} setActiveIndex={setActiveIndex} activeIndex={activeIndex} data={HeroSlide.data}/>
            </AuroraBackground>
            <div className="md:hidden block">
                <Slider options={heroSliderOptions} setActiveIndex={setActiveIndex} activeIndex={activeIndex} data={HeroSlide.data}/>
            </div>
        </section>
        // <HeroSkeleton />
    )
}

const Slider = ({ options, setActiveIndex, activeIndex, data }) => {
    return (
        <Splide
            className='md:pt-24 pt-20'
            options={options}
            onActive={(slide) => setActiveIndex(slide.index)}
        >
            {data?.map((slide, index) => (
                <SplideSlide key={slide.id || index}>
                    <div className="grid lg:grid-cols-12 grid-cols-1 h-full items-center customContainer">
                        {/* Left Content */}
                        <div className="space-y-6 lg:col-span-7 col-span-12 md:py-20 py-10 order-2 lg:order-1">
                            <div className="md:min-h-[120px] min-h-[80px]">
                                {activeIndex === index && (
                                    <TextGenerateEffect className="heroTitle" words={slide.tittle} />
                                )}
                            </div>
                            <div 
                                className="text-gray-600 dark:text-gray-300 md:text-lg text-base"
                                dangerouslySetInnerHTML={{ __html: slide.description }}
                            />
                            {/* Speed Indicators */}
                            {slide.mediaSpeed && slide.mediaSpeed.length > 0 && (
                                <div className="flex md:flex-row flex-col md:gap-4 gap-2">
                                    {slide.mediaSpeed.map((speed, speedIndex) => (
                                        <SpeedIndicator
                                            key={speedIndex}
                                            icon={speed.name}
                                            speed={speed.speed}
                                        />
                                    ))}
                                </div>
                            )}
                            {/* Get Started Button */}
                            <Link 
                                href={slide.getStartButtonLink || '#'} 
                                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition block w-fit"
                            >
                                Get it started
                            </Link>
                        </div>
                        {/* Right Image */}
                        <div className="lg:col-span-5 col-span-12 h-full order-1 lg:order-2">
                            {slide.featureImage_url && (
                                <DotLottieReact
                                    src={slide.featureImage_url}
                                    loop={true}
                                    autoplay={true}
                                    onError={(error) => {
                                        console.error("Lottie Error:", error);
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </SplideSlide>
            ))}
        </Splide>
    )
}

const SpeedIndicator = ({ icon, speed }) => (
    <div className="flex items-center cursor-pointer hover:-translate-y-1 transition-all duration-300 gap-2 bg-white/80 dark:bg-gray-800/80 shadow-card rounded-lg px-5 py-3">
        <div className="p-3 rounded-full bg-gray-200 dark:bg-gray-700">
            <div className='text-xl text-black dark:text-white'>{getSocialIcon(icon)}</div>
        </div>
        <div>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">Upto</p>
            <p className="font-semibold text-gray-600 dark:text-gray-300 capitalize">{speed}</p>
        </div>
    </div>
);



export default HeroSection;