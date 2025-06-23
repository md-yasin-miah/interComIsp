"use client"

import React, { useContext, useEffect, useState } from 'react'
import { APP_AUTHOR, PAYMENT_METHOD } from '@/helper/config'
import Tabs from '@/components/shared/Tabs';
import { Icon } from '@iconify/react';
import MotionDiv from '@/components/ui/motion/motionDiv';
import { APIContext } from '@/contexts/APIContext';
import Link from 'next/link';

const PayBill = () => {
  const { ContactInfo, getContactInfoData } = useContext(APIContext);
  useEffect(() => {
    !ContactInfo.data && getContactInfoData();
  }, []);
  const [activeTab, setActiveTab] = useState(PAYMENT_METHOD[0].value);
  const bikashSteps = [
    {
      id: 1,
      icon: 'mdi-light:login',
      description: <span>Login to your account</span>
    },
    {
      id: 2,
      icon: 'mdi-light:lightbulb',
      description: <span>In "Pay Bill" option you'll find <span className='font-semibold text-primary'>{APP_AUTHOR}</span>. Simply tap on it and follow the next step.</span>
    },
    {
      id: 3,
      icon: 'mdi-light:clipboard-text',
      description: <span>Now select your internet billing timeline in <span className='font-semibold text-primary'>"Billing Cycle"</span> box & input your customer in <span className='font-semibold text-primary'>"Exord ID"</span> box.</span>
    },
    {
      id: 4,
      icon: 'mdi-light:heart',
      description: <span>If you want to save the payment info for quick payment, you can simple tick the checkbox: <span className='font-semibold text-primary'>"Save this account for paying future bill"</span>.</span>
    },
    {
      id: 5,
      icon: 'mdi-light:clock',
      description: <span>After that, tap the <span className='font-semibold text-primary'>"Pay Bill NOW"</span> button & hold the pay button for a few second. You're done!</span>
    }
  ]
  const nagadSteps = [
    {
      id: 1,
      icon: 'mdi-light:login',
      description: 'Login to your account'
    },
    {
      id: 2,
      icon: 'mdi-light:lightbulb',
      description: <span>In "Pay Bill" option you'll find <span className='font-semibold text-primary'>{APP_AUTHOR}</span>. Simply tap on it and follow the next step.</span>
    },
    {
      id: 3,
      icon: 'mdi-light:clipboard-text',
      description: <span>Now select your internet billing timeline in <span className='font-semibold text-primary'>"Billing Cycle"</span> box & input your customer in <span className='font-semibold text-primary'>"Exord ID"</span> box.</span>
    },
    {
      id: 4,
      icon: 'mdi-light:heart',
      description: <span>If you want to save the payment info for quick payment, you can simple tick the checkbox: <span className='font-semibold text-primary'>"Save this account for paying future bill"</span>.</span>
    },
    {
      id: 5,
      icon: 'mdi-light:clock',
      description: <span>After that, tap the <span className='font-semibold text-primary'>"Pay Bill NOW"</span> button & hold the pay button for a few second. You're done!</span>
    }
  ]
  const [activeSteps, setActiveSteps] = useState(bikashSteps);

  // Bank card data for screenshot design
  const bankAccounts = [
    {
      name: 'BRAC BANK',
      logo: '/paybill/brac-bank.png',
      tagline: 'অগ্রযাত্রায় আপনার পাশে',
      color: 'bg-blue-500/10',
      accountName: APP_AUTHOR,
      accountNo: '1549204568505001',
      branch: 'Banasree',
      routing: '060260727',
    },
    {
      name: 'Eastern Bank',
      logo: '/paybill/Eastern_Bank.png',
      tagline: 'Simple Math®',
      color: 'bg-green-500/10',
      accountName: APP_AUTHOR,
      accountNo: '1091070219406',
      branch: 'Banasree',
      routing: '095260721',
    },
    {
      name: 'City Bank',
      logo: '/paybill/city_bank.png',
      tagline: 'making sense of money',
      color: 'bg-red-500/10',
      accountName: APP_AUTHOR,
      accountNo: '1452521113001',
      branch: 'Pragati Sarani',
      routing: '225272684',
    },
  ];

  return (
    <div className="px-2 sm:px-4 customContainer mx-auto pt-28 md:pt-40 pb-10 md:pb-20">
      {/* Quick Pay Card */}
      <MotionDiv
        className="bg-white dark:bg-transparent dark:border dark:border-primary/10 rounded-2xl shadow-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between mb-8 md:mb-10 gap-6 transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">Quick Pay</h2>
          <p className="text-gray-600 dark:text-gray-300 text-base w-3/4">Make your payment instantly using the facilities but not limited to like bKash, Nagad, Master Card, Visa card and some other way. You can pay your renewal fee and new connection fees from here instantly.</p>
        </div>
        <button className="primaryBtn fill whitespace-nowrap">
          <Icon icon="famicons:card-outline" className='w-5 h-5' />
          PAY NOW
        </button>
      </MotionDiv>

      {/* How to pay? */}
      <MotionDiv
        className="my-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-4xl font-bold text-primary my-2">How to pay?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Step-by-step guide to making an online payment</p>
        <div className="flex flex-wrap gap-2 md:gap-4 mb-4 md:mb-6">
          <button className="flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded font-semibold bg-white dark:bg-background3 dark:text-primary transition-colors duration-300 hover:bg-primary hover:text-white">Mobile Banking</button>
          <button className="flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded font-semibold bg-white dark:bg-background3 dark:text-primary transition-colors duration-300 hover:bg-primary hover:text-white">Online Payment</button>
          <button className="flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded font-semibold bg-white dark:bg-background3 dark:text-primary transition-colors duration-300 hover:bg-primary hover:text-white">Bank Transfer</button>
        </div>
      </MotionDiv>

      {/* Pay bill with mobile banking */}
      <MotionDiv
        className="mb-10 md:mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <h3 className="text-xl font-bold mb-2">Pay bill with <span className="text-primary">mobile banking</span></h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">You can pay with Mobile banking by following these instructions</p>
        <div className='w-fit mb-4 md:mb-6'>
          <Tabs tabItems={PAYMENT_METHOD} activeTab={activeTab} setActiveTab={(value) => {
            setActiveTab(value);
            setActiveSteps(value === 'bikash' ? bikashSteps : nagadSteps);
          }} />
        </div>

        {/* Stepper Design - Enhanced */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Stepper column */}
          <div className="flex flex-col justify-between py-2 gap-5 relative min-w-[48px]">
            {activeSteps.map((step, idx) => (
              <MotionDiv
                key={step.id}
                className="flex items-center h-12 gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.18 + idx * 0.08 }}
              >
                <div className="bg-primary dark:bg-secondary min-w-10 min-h-10 rounded-full flex items-center justify-center shadow-card transition-colors duration-300">
                  <Icon icon={step.icon} className='w-5 h-5 text-white' />
                </div>
                <span className="text-gray-700 dark:text-gray-200 text-sm md:text-base">{step.description}</span>
              </MotionDiv>
            ))}
            {/* vertical line */}
            <div className="absolute top-1/2 -translate-y-1/2 left-[18px] -z-10 w-1 bg-gray-200" style={{ height: '90%' }}></div>
          </div>
        </div>

        {/* Placeholder for video thumbnails */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <div className="bg-background3 dark:bg-background w-full sm:w-64 h-40 flex items-center justify-center rounded-xl shadow-card transition-colors duration-300">Video 1</div>
          <div className="bg-background3 dark:bg-background w-full sm:w-64 h-40 flex items-center justify-center rounded-xl shadow-card transition-colors duration-300">Video 2</div>
        </div>
      </MotionDiv>

      {/* Portal payment options */}
      <MotionDiv
        className="mb-10 md:mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xl font-bold mb-4">Portal payment <span className="text-primary">options</span></h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">You can pay online with other suitable payment methods</p>
        <img src="/paybill/syscomputersltd-payment.png" alt="syscomputersltd-payment" className='w-full rounded-xl shadow-card mb-4' />
        <div className="flex items-center gap-2 mb-2">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" className="text-gray-600 dark:text-gray-300 text-sm">I read and agreed to the Terms of use, Return & refund Policy, Privacy policy</label>
        </div>
        <button className="primaryBtn fill mt-2">Pay Now</button>
      </MotionDiv>

      {/* Direct bank transfer */}
      <MotionDiv
        className="mb-10 md:mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <h3 className="text-xl font-bold mb-4">Direct <span className="text-primary">bank transfer</span></h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">You can pay us with direct bank transfer</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          {bankAccounts.map((bank, i) => (
            <div key={i} className="rounded-2xl shadow-card overflow-hidden bg-white dark:bg-transparent dark:border dark:border-primary/10 flex flex-col">
              {/* Top colored section with logo */}
              <div className={`${bank.color} flex flex-col items-center justify-center h-36 py-6 px-4`}>
                <img src={bank.logo} alt={bank.name} className="h-24 w-auto mb-2 px-20 object-contain" />
                {/* <div className="font-bold text-lg text-gray-800 mb-1">{bank.name}</div>
                {bank.tagline && <div className="text-xs text-gray-600 font-medium">{bank.tagline}</div>} */}
              </div>
              {/* Bottom white section with account info */}
              <div className="bg-white dark:bg-transparent dark:border dark:border-primary/10 flex-1 flex flex-col justify-center px-6 py-6">
                {/* Account details with dividers */}
                <div className="divide-y divide-gray-200">
                  <div className="grid grid-cols-2 gap-y-2 py-2">
                    <div className="font-semibold text-gray-700 dark:text-gray-200">Account Name:</div>
                    <div className="font-semibold text-gray-900 dark:text-gray-200">{bank.accountName}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-y-2 py-2">
                    <div className="font-semibold text-gray-700 dark:text-gray-200">Account No:</div>
                    <div className="font-semibold text-gray-900 dark:text-gray-200">{bank.accountNo}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-y-2 py-2">
                    <div className="font-semibold text-gray-700 dark:text-gray-200">Branch name:</div>
                    <div className="font-semibold text-gray-900 dark:text-gray-200">{bank.branch}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-y-2 py-2">
                    <div className="font-semibold text-gray-700 dark:text-gray-200">Routing No:</div>
                    <div className="font-semibold text-primary dark:text-secondary">{bank.routing}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MotionDiv>

      {/* Notice/Contact Section */}
      <MotionDiv
        className="bg-white dark:bg-transparent dark:border dark:border-yellow-500 rounded-2xl overflow-hidden h-48 shadow-card flex flex-col sm:flex-row items-center gap-6 md:gap-8 transition-colors duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-center justify-center w-48 min-h-full bg-yellow-500">
          <span className="block animate-pulse-slow">
            <Icon icon="ion:warning" className='w-20 h-20 text-red-600' />
          </span>
        </div>
        <div className="flex-1 text-left">
          <p className="text-gray-900 dark:text-gray-200 font-semibold text-base md:text-lg mb-4">You must need to contact with our helpline to update your payment if you use USSD,<br className="hidden md:block" /> Bank Payment or Mobile Banking App to pay the bill.</p>
          <p className="text-gray-900 dark:text-gray-200 font-semibold text-base md:text-lg space-x-2">Helpline number:{" "}
            {
              ContactInfo.data?.[0]?.phones?.map((phone, index) => (
                <Link href={`tel:${phone}`} key={index} className='hover:text-primary cursor-pointer transition-colors duration-300'>{phone}{index !== ContactInfo.data?.[0]?.phones?.length - 1 && ","}</Link>
              ))
            }
          </p>
          <p className="text-gray-900 dark:text-gray-200 font-semibold text-base md:text-lg space-x-2">E-Mail:{" "}
            {
              ContactInfo.data?.[0]?.emails?.map((email, index) => (
                <Link href={`mailto:${email}`} key={index} className='hover:text-primary cursor-pointer transition-colors duration-300'>{email}{index !== ContactInfo.data?.[0]?.emails?.length - 1 && ","}</Link>
              ))
            }
          </p>
        </div>
        <style jsx global>{`
          @keyframes pulse-slow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 1.2s infinite;
          }
        `}</style>
      </MotionDiv>
    </div>
  )
}

export default PayBill