import SectionTitleSkeleton from './SectionTitleSkeleton'
import Shade from './Shade'

const ReviewSectionSkeleton = () => {
  return (
    <section className='bg-background3 dark:bg-black py-20'>
      <div className="customContainer">
        <SectionTitleSkeleton />
        <div className='pt-10 grid grid-cols-1 md:grid-cols-3 gap-4'>
          {[1, 2, 3].map((_, index) => (
            <Shade key={index} className="h-[250px] w-full !rounded-lg" />
          ))}
        </div>
        <div className="text-center mt-10">
          <Shade className="h-4 w-40 mx-auto" />
        </div>
      </div>
    </section>
  )
}

export default ReviewSectionSkeleton