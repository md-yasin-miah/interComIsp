import Shade from './Shade'

const ContactCardSkeleton = ({ className }) => {
  return (
    <div className={`bg-gray-100 dark:bg-slate-600 h-full p-6 rounded-xl shadow-card transition-all duration-300 text-center ${className}`}>
      {/* Icon Skeleton */}
      <div className="flex justify-center mb-4">
        <Shade className="w-8 h-8 rounded-lg" />
      </div>

      {/* Title Skeleton */}
      <Shade className="h-6 w-3/4 mx-auto mb-4 rounded-lg" />

      {/* Items Skeleton */}
      <div className="space-y-2">
        <Shade className="h-4 w-full rounded-lg" />
        <Shade className="h-4 w-5/6 mx-auto rounded-lg" />
        <Shade className="h-4 w-4/5 mx-auto rounded-lg" />
      </div>
    </div>
  )
}

export default ContactCardSkeleton 