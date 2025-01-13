import { GridBackground } from '../ui/grid-background'
import SectionTitleSkeleton from './SectionTitleSkeleton'
import Shade from './Shade'

const TestimonialSectionSkeleton = () => {
  return (
    <section className="relative py-20">
      <GridBackground />

      <div className="relative z-10 customContainer">
        <SectionTitleSkeleton />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className=" bg-white dark:bg-black border border-transparent dark:border-white/[0.2] rounded-2xl p-4 min-h-[460px]"
            >
              <Shade className="aspect-video !rounded-xl w-full" />

              <div className="mt-6 space-y-3 px-2">
                <Shade className="w-3/5 h-7" />
                <Shade className="w-full h-5" />
                <div className="flex flex-col gap-2 pt-4">
                  <Shade className="w-full h-4" />
                  <Shade className="w-10/12 h-4" />
                  <Shade className="w-11/12 h-4" />
                  <Shade className="w-10/12 h-4" />
                  <Shade className="w-11/12 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSectionSkeleton