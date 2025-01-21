import React from 'react'
import Shade from './Shade'

const WhyChooseUsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[...Array(3)].map((_, index) => (
    <div
      key={index}
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-card hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="pr-3 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="text-primary">
            <Shade className="w-8 h-8 rounded-full" />
          </div>
        </div>
        <div className="flex-1">
          <Shade className="w-32 h-6 rounded-md" />
        </div>
      </div>
      <div>
        <Shade className="w-full h-4 mb-2 rounded-md" />
        <Shade className="w-3/4 h-4 rounded-md" />
      </div>
    </div>
  ))}
</div>

  )
}

export default WhyChooseUsSkeleton