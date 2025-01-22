import Shade from './Shade'

const ServiceCardSkeleton = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-gray-100 dark:bg-slate-600 rounded-[18px] h-full">
  {/* Image Skeleton */}
  <div className="relative w-full aspect-[4/3]">
    <Shade className="w-full h-full rounded-lg" />
  </div>

  {/* Content Skeleton */}
  <div className="p-5 h-full w-full flex flex-col justify-between">
    <div>
      {/* Title Skeleton */}
      <Shade className="h-6 w-3/4 mb-2 rounded-lg" />

      {/* Description Skeleton */}
      <div className="space-y-2">
        <Shade className="h-4 w-full rounded-lg" />
        <Shade className="h-4 w-5/6 rounded-lg" />
        <Shade className="h-4 w-3/4 rounded-lg" />
      </div>
    </div>

    {/* Button Skeleton */}
    <div className="mt-4">
      <Shade className="h-10 w-32 rounded-lg" />
    </div>
  </div>
</div>

  )
}

export default ServiceCardSkeleton