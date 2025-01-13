import React from 'react'

const SectionTitleSkeleton = () => {
  return (
    <div className="text-center mb-10 space-y-4">
      {/* Title Skeleton */}
      <div className="flex items-center justify-center gap-2">
        <div className="h-10 w-1/2 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
      </div>

      {/* Subtitle Skeleton */}
      <div className="max-w-2xl mx-auto">
        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto" />
      </div>
    </div>
  )
}

export default SectionTitleSkeleton 