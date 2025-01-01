import PageBanner from '@/components/shared/PageBanner'
import Link from 'next/link'
import React from 'react'

const PayBill = () => {
  return (
    <>
    <PageBanner
        bgClassName='bg-primary'
        title='Easy to Pay'
        subTitle='Take a look at the services that we provide and choose the one that suits you best. We are here to help you with your needs.'
      />
      <section className='pt-10 pb-20'>
        <div className='customContainer'>
          {/* pay bill section coming soon  */}
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold'>Coming Soon</h1>
            <p className='text-lg text-gray-600 dark:text-gray-300 pt-3'>We are working on this feature. Please check back later.</p>
            <Link href='/' className='primaryBtn mt-20'>Go to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default PayBill