import PageBanner from '@/components/shared/PageBanner'
import ConnectSection from '@/components/sections/ConnectSection'

const Support = () => {
  return (
    <ConnectSection
      banner={
        <PageBanner
          boxClassName='min-h-[150px]'
          pageName='support'
          bgClassName='bg-secondary'
        />
      }
    />
  )
}

export default Support