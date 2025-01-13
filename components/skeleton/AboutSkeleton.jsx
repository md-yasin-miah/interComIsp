import React from 'react'
import SectionTitleSkeleton from './SectionTitleSkeleton'

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
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-full" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-11/12" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-4/5" />
              </div>
              
              {/* Button Skeleton */}
              <div className="h-12 w-40 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse max-sm:mx-auto" />
            </div>

            {/* Stats Cards Skeleton */}
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-4 mt-12 pb-2 pl-2'>
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-card hover:shadow-card2 transition-all duration-300'
                >
                  <div className="h-7 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-3" />
                  <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Skeleton */}
          <div className='h-full md:w-2/5 w-full'>
            <div className="aspect-square w-10/12 h-10/12 bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSkeleton