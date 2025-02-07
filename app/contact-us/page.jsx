import ConnectSection from '@/components/sections/ConnectSection'
import PageBanner from '@/components/shared/PageBanner'
import SectionTitle from '@/components/shared/SectionTitle'
import React from 'react'

const ContactUs = () => {
  return (
    <ConnectSection
      banner={
        <PageBanner
          pageName='contact-us'
        />
      }
      sectionTitle={
        <SectionTitle
          title="Contact"
          title2="Us"
          placeholder_title="Connect"
          subTitle="We're here to help! Reach out to us through any of these channels."
        />
      }
    />
  )
}

export default ContactUs