import React from 'react'
import SectionTitleSkeleton from './SectionTitleSkeleton'
import Shade from './Shade'

const AboutSkeleton = () => {
  return (
    <section className='md:py-20 py-10'>
      <div className='customContainer overflow-hidden'>
        <SectionTitleSkeleton />

        <div className="mt-10 flex flex-col md:flex-row gap-20  items-center">
          {/* Left Content */}
          <div className='h-full md:w-3/5 w-full'>
            {/* Description Skeleton */}
            <div className='flex flex-col gap-5 max-sm:items-center'>
              <div className='space-y-3 max-sm:text-center w-full'>
                <Shade className="h-4 w-full" />
                <Shade className="h-4 w-11/12" />
                <Shade className="h-4 w-4/5" />
              </div>

              {/* Button Skeleton */}
              <Shade className="h-12 w-40 max-sm:mx-auto" />
            </div>

            {/* Stats Cards Skeleton */}
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-4 mt-12 pb-2 pl-2'>
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-card hover:shadow-card2 transition-all duration-300'
                >
                  <Shade className="h-7 w-24 mb-3" />
                  <Shade className="h-4 w-32" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Skeleton */}
          <div className='h-full md:w-2/5 w-full'>
            <Shade className="aspect-square w-10/12 h-10/12 !rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSkeleton