import { AuroraBackground } from "../ui/aurora-background";
import Shade from "./Shade";

const HeroSkeleton = () => {
    return (
        <section>
            {/* <AuroraBackground className='h-[716px] md:pb-10 pb-5 overflow-hidden md:block hidden'> */}
            <Skeleton />
            {/* </AuroraBackground>
            <div className="md:hidden block">
                <Skeleton />
            </div> */}
        </section>
    )
}
const Skeleton = () => {
    return (
        <div className='md:pt-24 pt-20'>
            <div className="grid lg:grid-cols-12 gap-5 grid-cols-1 items-center customContainer">
                {/* Left Content Skeleton */}
                <div className="space-y-6 lg:col-span-7 col-span-12 py-10 order-2 lg:order-1">
                    {/* Title Skeleton */}
                    <div className="md:min-h-[120px] min-h-[80px] space-y-4">
                        <Shade className="h-14 md:h-16 w-4/5" />
                    </div>

                    {/* Description Skeleton */}
                    <div className="space-y-2">
                        <Shade className="h-3 w-full" />
                        <Shade className="h-3 w-5/6" />
                        <Shade className="h-3 w-4/6" />
                    </div>

                    {/* Speed Indicators Skeleton */}
                    {/* <div className="flex md:flex-row flex-col md:gap-4 gap-2">
                    {[1, 2, 3].map((item) => (
                        <div 
                            key={item}
                            className="flex items-center gap-4 bg-white/80 dark:bg-gray-800/80 shadow-card rounded-lg px-5 py-4 w-full md:w-auto"
                        >
                            <Shade className="p-4 rounded-full w-14 h-14" />
                            <div className="space-y-2 flex-1">
                                <Shade className="h-4 w-16" />
                                <Shade className="h-5 w-20" />
                            </div>
                        </div>
                    ))}
                </div> */}

                    {/* Button Skeleton */}
                    <Shade className="w-40 h-12 mt-6" />
                </div>

                {/* Right Image Skeleton */}
                <div className="lg:col-span-5 col-span-12 order-1 lg:order-2">
                    <Shade className="aspect-[4/3] w-full !rounded-2xl" />
                </div>
            </div>
        </div>
    )
}

export default HeroSkeleton;