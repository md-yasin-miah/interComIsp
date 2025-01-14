import Shade from './Shade'

const SectionTitleSkeleton = () => {
  return (
    <div className="text-center mb-10 space-y-4">
      {/* Title Skeleton */}
      <div className="flex items-center justify-center gap-2">
        <Shade className="h-12 w-1/2 !rounded-lg" />
      </div>
      {/* Subtitle Skeleton */}
      <div className="max-w-2xl mx-auto">
        <Shade className="h-6 w-1/2 mx-auto" />
      </div>
    </div>
  )
}

export default SectionTitleSkeleton 