"use client"
import PageBanner from '@/components/shared/PageBanner'
import Tabs from '@/components/shared/Tabs'
import { PAYMENT_METHOD } from '@/helper/config'
import Link from 'next/link'
import React, { useState } from 'react'

const PayBill = () => {
  const [activeTab, setActiveTab] = useState(PAYMENT_METHOD[0].value)
  const appPaymentSteps = [
    {
      id: 1,
      img: '/paybill/bka-1.jpg',
    },
    {
      id: 2,
      img: '/paybill/bka-2.jpg',
    },
    {
      id: 3,
      img: '/paybill/bka-3.jpg',
    },
    {
      id: 4,
      img: '/paybill/bka-4.jpg',
    },
    {
      id: 5,
      img: '/paybill/bka-5.jpg',
    },
    {
      id: 6,
      img: '/paybill/bka-6.jpg',
    },
  ]
  const bkashUssdSteps = [
    {
      id: 1,
      img: '/paybill/bk-1.png',
    },
    {
      id: 2,
      img: '/paybill/bk-2.png',
    },
    {
      id: 3,
      img: '/paybill/bk-3.png',
    },
    {
      id: 4,
      img: '/paybill/bk-4.png',
    },
  ]

  return (
    <>
      <PageBanner
        pageName='pay-bill'
      />
      <section className='pt-10 pb-20'>
        <div className='customContainer'>
          {/* pay bill section coming soon  */}
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-semibold capitalize'>All Suitable Payment Options
            </h1>
            <div>
              {/* tab section */}
              <div className="flex flex-col items-center mt-8">
                <Tabs tabItems={PAYMENT_METHOD} activeTab={activeTab} setActiveTab={setActiveTab} />

                <div className="mt-8 w-full">
                  {activeTab === PAYMENT_METHOD[0].value && (
                    <div className="rounded-lg bg-white p-6 border border-gray-200 dark:border-gray-600 dark:bg-slate-600">
                      <h3 className="mb-4 text-3xl font-medium text-gray-900 dark:text-white"><span className='text-bkash'>Bkash</span> Payment</h3>
                      {/* USSD Payment Section */}
                      <div className="space-y-6">
                        <div className="flex justify-center">
                          <img src="/paybill/bkash-logo.png" alt="bKash Logo" className="h-16" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {
                            bkashUssdSteps.map((step) => (
                              <div>
                                <img src={step.img} alt="bKash USSD Step 1" className="w-full rounded-lg" />
                              </div>
                            ))
                          }
                        </div>

                        {/* App Payment Section */}
                        <h3 className="mt-8 mb-6 text-3xl font-medium text-gray-900 dark:text-white">
                          <span className="text-bkash">bKash App</span> Payment
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {
                            appPaymentSteps.map((step) => (
                              <div className="space-y-2">
                                <p className="text-2xl font-semibold text-center text-primary w-10 h-10 rounded-full border border-primary flex items-center justify-center">
                                  {step.id}
                                </p>
                                <img src={step.img} alt="bKash App Step 1" className="w-full rounded-lg" />
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === PAYMENT_METHOD[1].value && (
                    <div className="rounded-lg w-full bg-white p-6 shadow-md dark:bg-slate-800">
                      {/* nagad payment section coming soon  */}
                      <h3 className="mb-4 text-3xl font-medium text-gray-900 dark:text-white">
                        <span className='text-red-500'>Nagad</span> Payment
                        <div className="flex flex-col items-center justify-center mt-4">
                          Coming Soon
                        </div>
                      </h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PayBill