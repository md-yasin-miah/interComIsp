"use client"

import React, { useContext, useEffect, useState } from 'react'
import { APP_AUTHOR, PAYMENT_METHOD } from '@/helper/config'
import Tabs from '@/components/shared/Tabs';
import { Icon } from '@iconify/react';
import { APIContext } from '@/contexts/APIContext';
import Link from 'next/link';
import { motion } from 'framer-motion'
import QuickPayModal from '@/components/modals/QuickPayModal'
import Image from 'next/image';
import { PATH } from '@/helper/pathConfig';
import Button from '@/components/shared/Button';
import BankAccountSkeleton from '@/components/skeleton/BankAccountSkeleton';
import BankAccountCard from '@/components/cards/BankAccountCard';

const PayBill = () => {
  const { ContactInfo, getContactInfoData, getBankAccountData, BankAccount } = useContext(APIContext);
  useEffect(() => {
    !ContactInfo.data && getContactInfoData();
    !BankAccount.data && getBankAccountData();
  }, []);
  const [activeTab, setActiveTab] = useState(PAYMENT_METHOD[0].value);
  const [isQuickPayModalOpen, setIsQuickPayModalOpen] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [showTermsError, setShowTermsError] = useState(false);
  const bkashSteps = [
    {
      id: 1,
      icon: 'mdi-light:login',
      description: <span>Login to your bKash account</span>
    },
    {
      id: 2,
      icon: 'mdi-light:lightbulb',
      description: <span>In "Pay Bill" option you'll find <span className='font-semibold text-primary'>"{APP_AUTHOR}"</span> or search. Simply tap on it and follow the next step.</span>
    },
    {
      id: 3,
      icon: 'mdi-light:clipboard-text',
      description: <span>Select <span className='font-semibold text-primary'>"Bill Period"</span>, Input your Netcom customer in <span className='font-semibold text-primary'>"Enter Customer ID"</span> box. Then click the <span className='font-semibold text-primary'>"Proceed to pay"</span> button.</span>
    },
    {
      id: 4,
      icon: 'mdi-light:heart',
      description: <span>Check your billing information.</span>
    },
    {
      id: 5,
      icon: 'mdi-light:clock',
      description: <span>After that, tap the <span className='font-semibold text-primary'>"Tab To Continue"</span> button & hold the pay button for a few second. You're done!</span>
    }
  ]
  const nagadSteps = [
    {
      id: 1,
      icon: 'mdi-light:login',
      description: 'Login to your Nagad account'
    },
    {
      id: 2,
      icon: 'mdi-light:lightbulb',
      description: <span>In "Bill Pay" option you'll find <span className='font-semibold text-primary'>"{APP_AUTHOR}"</span> or search. Simply tap on it and follow the next step.</span>
    },
    {
      id: 3,
      icon: 'mdi-light:clipboard-text',
      description: <span>Input your Netcom customer ID in <span className='font-semibold text-primary'>"Customer ID"</span> box. Then tab the <span className='font-semibold text-primary'>"Next"</span> button.</span>
    },
    {
      id: 4,
      icon: 'mdi-light:heart',
      description: <span>If you want to save the payment info for quick payment, you can simple tick the checkbox: <span className='font-semibold text-primary'>"Save this account for paying future bill"</span>.</span>
    },
    {
      id: 5,
      icon: 'mdi-light:clock',
      description: <span>After that, tap the <span className='font-semibold text-primary'>"Next"</span> button and then <span className='font-semibold text-primary'>"Pay Bill NOW"</span> button & hold the pay button for a few second. You're done!</span>
    }
  ]
  const [activeSteps, setActiveSteps] = useState(bkashSteps);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.classList.add('md:scroll-mt-36', 'scroll-mt-28');
    section.scrollIntoView({ behavior: 'smooth' });
  }

  const handlePayNowClick = () => {
    if (!isTermsChecked) {
      setShowTermsError(true);
      return;
    }
    // If checkbox is checked, proceed with payment
    window.open(PATH.paymentPortal, '_blank', 'noopener,noreferrer');
  };
  const paymentMethod = [
    {
      id: 1,
      name: "Mobile Banking",
      icon: "/paybill/mobile-banking.png",
      ref_section: "mobile-banking"
    },
    {
      id: 2,
      name: "Online Payment",
      icon: "/paybill/cashless-payment.png",
      ref_section: "online-payment"
    },
    {
      id: 3,
      name: "Bank Transfer",
      icon: "/paybill/banking.png",
      ref_section: "bank-transfer"
    }
  ]
  const bgClass = "bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2280%22%20height=%2280%22%20viewBox=%220%200%20200%20200%22%3E%3Cpolygon%20fill=%22%23DCEFFA%22%20fill-opacity=%220.50%22%20points=%22100%200%200%20100%20100%20100%20100%20200%20200%20100%20200%200%22/%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2280%22%20height=%2280%22%20viewBox=%220%200%20200%20200%22%3E%3Cpolygon%20fill=%22%23DCEFFA%22%20fill-opacity=%220.05%22%20points=%22100%200%200%20100%20100%20100%20100%20200%20200%20100%20200%200%22/%3E%3C/svg%3E')]"
  return (
    <div className="px-2 sm:px-4 customContainer mx-auto pt-14 md:pt-20 pb-10 md:pb-20">
      {/* Quick Pay Card */}
      <motion.div
        className={`bg-white dark:bg-transparent dark:border dark:border-primary/10 rounded-2xl shadow-card p-6 md:p-14 flex flex-col md:flex-row items-center justify-between mb-8 md:mb-10 gap-6 transition-colors duration-300 ${bgClass}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">Quick Pay</h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:w-3/4">Make your payment instantly using the facilities but not limited to like bKash, Nagad, Master Card, Visa card and some other way. You can pay your renewal fee and new connection fees from here instantly.</p>
        </div>
        <button
          className="primaryBtn fill whitespace-nowrap"
          onClick={() => setIsQuickPayModalOpen(true)}
        >
          <Icon icon="famicons:card-outline" className='w-5 h-5' />
          PAY NOW
        </button>
      </motion.div>

      {/* How to pay? */}
      <motion.div
        className="my-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-4xl font-bold text-primary my-2">How to pay?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Step-by-step guide to making an online payment</p>
        <div className="flex flex-wrap gap-2 md:gap-4 mb-4 md:mb-6">
          {paymentMethod.map((method) => (
            <button
              key={method.id}
              className="flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded font-semibold bg-white dark:bg-blue-500/10 dark:text-primary transition-colors duration-300 dark:hover:bg-transparent hover:bg-blue-500/10"
              onClick={() => scrollToSection(method.ref_section)}
            >
              <Image
                src={method.icon}
                alt={method.name}
                width={30}
                height={30}
                className='w-6 h-6'
              />
              {method.name}</button>
          ))}
        </div>
      </motion.div>

      {/* Pay bill with mobile banking */}
      <motion.div
        id="mobile-banking"
        className="mb-10 md:mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <h3 className="text-xl font-bold mb-2">Pay bill with <span className="text-primary">mobile banking</span></h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">You can pay with Mobile banking by following these instructions</p>
        <div className='w-fit mb-4 md:mb-6'>
          <Tabs tabItems={PAYMENT_METHOD} activeTab={activeTab} setActiveTab={(value) => {
            setActiveTab(value);
            setActiveSteps(value === 'bkash' ? bkashSteps : nagadSteps);
          }} />
        </div>

        {/* Stepper Design - Enhanced */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Stepper column */}
          <div className="flex flex-col justify-between py-2 gap-5 relative min-w-[48px]">
            {activeSteps.map((step, idx) => (
              <motion.div
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
              </motion.div>
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
      </motion.div>

      {/* Portal payment options */}
      <motion.div
        id="online-payment"
        className="mb-10 md:mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xl font-bold mb-4">Portal payment <span className="text-primary">options</span></h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">You can pay online with other suitable payment methods</p>
        <img src="/paybill/syscomputersltd-payment.png" alt="syscomputersltd-payment" className='w-full mb-4' />
        <div className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            id="terms"
            checked={isTermsChecked}
            onChange={(e) => {
              setIsTermsChecked(e.target.checked);
              if (e.target.checked) {
                setShowTermsError(false);
              }
            }}
          />
          <label
            htmlFor="terms"
            className="text-gray-600 dark:text-gray-300 text-sm">I read and agreed to the <Link href={PATH.termsOfUse} className='hover:underline hover:text-black dark:hover:text-white'>Terms of use</Link>, <Link href={PATH.returnRefundPolicy} className='hover:underline hover:text-black dark:hover:text-white'>Return & refund Policy</Link>, <Link href={PATH.privacyPolicy} className='hover:underline hover:text-black dark:hover:text-white'>Privacy policy</Link></label>
        </div>
        {showTermsError && (
          <p className="text-red-500 text-xs mb-2">Please check the terms and conditions checkbox to proceed.</p>
        )}
        <button
          onClick={handlePayNowClick}
          className="primaryBtn fill mt-2">
          Pay Now
        </button>
      </motion.div>

      {/* Direct bank transfer */}
      <motion.div
        id="bank-transfer"
        className="mb-10 md:mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <h3 className="text-xl font-bold mb-4">Direct <span className="text-primary">bank transfer</span></h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">You can pay us with direct bank transfer</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          {BankAccount.isLoading ? (
            // Show skeleton loading state
            [...Array(3)].map((_, i) => (
              <BankAccountSkeleton key={i} />
            ))
          ) : (
            // Show actual bank account data
            BankAccount.data?.map((bank, i) => (
              <BankAccountCard key={i} bank={bank} />
            ))
          )}
        </div>
      </motion.div>

      {/* Important Notice Section */}
      <motion.div
        className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-900/20 dark:via-orange-900/20 dark:to-yellow-900/20 rounded-2xl border border-amber-200 dark:border-amber-700/50 shadow-card p-6 transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex flex-col items-start gap-6">
          {/* Icon and Warning */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-md">
                <Icon icon="ion:warning" className='w-6 h-6 text-white' />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-amber-800 dark:text-amber-200">
                Payment Update Required
              </h3>
              <p className="text-amber-600 dark:text-amber-300 text-sm">
                For USSD, Bank Payment & Mobile Banking
              </p>
            </div>
          </div>

          {/* Content and Actions */}
          <div className="flex-1">
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-4">
              Contact our helpline to update payments made through USSD, Bank Payment, or Mobile Banking App.
            </p>

            {/* Contact Info in compact format */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <div className="flex items-center max-sm:flex-wrap gap-1">
                <Icon icon="mdi:phone" className='mr-1 w-4 h-4 text-green-600 dark:text-green-400' />
                <span className="font-medium text-gray-600 dark:text-gray-400">Phone:</span>
                {ContactInfo.data?.[0]?.phones?.map((phone, index) => (
                  <Link
                    href={`tel:${phone}`}
                    key={index}
                    className='text-primary hover:text-secondary transition-colors duration-300 font-medium'
                  >
                    {phone}{index !== ContactInfo.data?.[0]?.phones?.length - 1 && ", "}
                  </Link>
                ))}
              </div>

              <div className="flex items-center max-sm:flex-wrap gap-1">
                <Icon icon="mdi:email" className='mr-1 w-4 h-4 text-blue-600 dark:text-blue-400' />
                <span className="font-medium text-gray-600 dark:text-gray-400">Email:</span>
                {ContactInfo.data?.[0]?.emails?.map((email, index) => (
                  <Link
                    href={`mailto:${email}`}
                    key={index}
                    className='text-primary hover:text-secondary transition-colors duration-300 font-medium'
                  >
                    {email}{index !== ContactInfo.data?.[0]?.emails?.length - 1 && ", "}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="flex-shrink-0">
            <Button
              href={`tel:${ContactInfo.data?.[0]?.phones?.[0]}`}
              size="small"
              className="!bg-gradient-to-r !from-green-500 !to-green-600 hover:!from-green-600 hover:!to-green-700 !text-white !border-none"
              icon={<Icon icon="mdi:phone" className='w-4 h-4' />}
            >
              Call Now
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Quick Pay Modal */}
      <QuickPayModal
        isOpen={isQuickPayModalOpen}
        onClose={() => setIsQuickPayModalOpen(false)}
      />
    </div>
  )
}

export default PayBill