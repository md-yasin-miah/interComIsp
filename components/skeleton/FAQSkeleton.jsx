import SectionTitleSkeleton from "./SectionTitleSkeleton"
import Shade from "./Shade"

const FAQSkeleton = () => {
  return (
    <section className='md:py-20 py-10'>
      <div className="customContainer">
        <SectionTitleSkeleton />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pt-10 w-full'>
          <Shade className="w-full h-[74px] rounded-[25px]" />
          <Shade className="w-full h-[74px] rounded-[25px]" />
          <Shade className="w-full h-[74px] rounded-[25px]" />
          <Shade className="w-full h-[74px] rounded-[25px]" />
        </div>
      </div>
    </section>
  )
}

export default FAQSkeleton