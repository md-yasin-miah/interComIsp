import SectionTitle from '@/components/shared/SectionTitle'
import PageBanner from '@/components/shared/PageBanner'
import ConnectSection from '@/components/sections/ConnectSection'

const Support = () => {
  return (
    <ConnectSection
      banner={
        <PageBanner
          bgClassName='bg-secondary'
          title='24/7 Support'
          subTitle='We are here to help you with your needs.'
        />
      }
      sectionTitle={
        <SectionTitle
          title="Support"
          title2="Contact Us"
          placeholder_title="Support"
          subTitle="We're here to help! Reach out to us through any of these channels."
        />
      }
    />
  )
}

export default Support