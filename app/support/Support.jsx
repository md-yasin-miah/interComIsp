import PageBanner from '@/components/shared/PageBanner'
import ConnectSection from '@/components/sections/ConnectSection'

const Support = () => {
  return (
    <ConnectSection
      banner={
        <PageBanner
          pageName='support'
          bgClassName='bg-secondary'
        />
      }
    />
  )
}

export default Support