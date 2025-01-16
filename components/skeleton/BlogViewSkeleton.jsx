import Shade from './Shade'

const BlogViewSkeleton = () => {
  return (
    <div className="space-y-6">
      {/* Image Placeholder */}
      <div className="rounded-lg overflow-hidden">
        <Shade className="w-full aspect-video" />
      </div>

      {/* Title and Content Placeholders */}
      <div className="prose max-w-none">
        {/* Title Placeholder */}
        <Shade className="w-3/4 h-10 mb-10" />

        {/* Paragraph Placeholders */}
        <div className="space-y-2">
          <Shade className="w-full h-4" />
          <Shade className="w-5/6 h-4" />
          <Shade className="w-4/5 h-4" />
          <Shade className="w-3/4 h-4" />
        </div>
        <div className="space-y-2 pt-6">
          <Shade className="w-full h-4" />
          <Shade className="w-5/6 h-4" />
          <Shade className="w-4/5 h-4" />
          <Shade className="w-3/4 h-4" />
        </div>
      </div>
    </div>
  )
}

export default BlogViewSkeleton