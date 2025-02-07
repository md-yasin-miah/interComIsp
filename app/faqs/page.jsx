import FAQ from '@/components/home/FAQ'
import PageBanner from '@/components/shared/PageBanner'
import React from 'react'

const Page = () => {
  return (
    <div>
      <PageBanner
        title='Frequently Asked Questions'
        description="Here are some of the most frequently asked questions about our services. If you have any other questions, please don\'t hesitate to contact us."
      />
      <FAQ />
    </div>
  )
}

export default Page;