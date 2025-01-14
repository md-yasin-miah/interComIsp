import ConnectSection from '@/components/sections/ConnectSection'
import PageBanner from '@/components/shared/PageBanner'
import SectionTitle from '@/components/shared/SectionTitle'
import React from 'react'

const ContactUs = () => {
  return (
    <ConnectSection
      banner={
        <PageBanner
          bgClassName='bg-secondary'
          title='Contact Us'
          subTitle='We are here to help you with your needs.'
        />
      }
      sectionTitle={
        <SectionTitle
          title="Contact"
          title2="Us"
          placeholder_title="Contact Us"
          subTitle="We're here to help! Reach out to us through any of these channels."
        />
      }
    />
  )
}

export default ContactUs