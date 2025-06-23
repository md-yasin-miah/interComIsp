"use client"

import React, { useState } from 'react'
import { APP_AUTHOR, PAYMENT_METHOD } from '@/helper/config'
import Tabs from '@/components/shared/Tabs';
import { Icon } from '@iconify/react';

const PayBill = () => {
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
      description: <span>In "Pay Bill" option you'll find <span className='font-semibold text-primary'>Exord Online</span>. Simply tap on it and follow the next step.</span>
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

  return (
    <div className="px-4 customContainer mx-auto pt-32">
      {/* Quick Pay Card */}
      <div className="bg-white rounded-2xl shadow-card p-8 flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
        <div>
          <h2 className="text-xl font-bold text-primary mb-2">Quick Pay</h2>
          <p className="text-gray-600 text-base max-w-md">Make your payment instantly using the facilities but not limited to like Bkash, Nagad, Master Card, Visa card and some other way. You can pay your renewal fee and new connection fees from here instantly.</p>
        </div>
        <button className="primaryBtn fill">PAY NOW</button>
      </div>

      {/* How to pay? */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-primary mb-2">How to pay?</h2>
        <p className="text-gray-600 mb-4">Step-by-step guide to making an online payment</p>
        <div className="flex gap-4 mb-6">
          <button className="flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded font-semibold bg-white">Mobile Banking</button>
          <button className="flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded font-semibold bg-white">Online Payment</button>
          <button className="flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded font-semibold bg-white">Bank Transfer</button>
        </div>
      </div>

      {/* Pay bill with mobile banking */}
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-2">Pay bill with <span className="text-primary">mobile banking</span></h3>
        <p className="text-gray-600 mb-4">You can pay with Mobile banking by following these instructions</p>
        <div className='w-fit mb-6'>
          <Tabs tabItems={PAYMENT_METHOD} activeTab={activeTab} setActiveTab={(value) => {
            setActiveTab(value);
            setActiveSteps(value === 'bikash' ? bikashSteps : nagadSteps);
          }} />
        </div>

        {/* Stepper Design - Enhanced */}
        <div className="flex">
          {/* Stepper column */}
          <div className="flex flex-col justify-between py-2 gap-5 relative">
            {activeSteps.map((step) => (
              <div key={step.id} className="flex items-center h-12 gap-3">
                <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center shadow-card">
                  <Icon icon={step.icon} className='w-5 h-5 text-white' />
                </div>
                {step.description}
              </div>
            ))}
            {/* vertical line */}
            <div className="absolute top-0 left-[18px] -z-10 w-1 top-1/2 -translate-y-1/2 bg-gray-200" style={{ height: '90%' }}></div>
          </div>
        </div>

        {/* Placeholder for video thumbnails */}
        <div className="flex gap-4 mt-8">
          <div className="bg-background3 w-64 h-40 flex items-center justify-center rounded-xl shadow-card">Video 1</div>
          <div className="bg-background3 w-64 h-40 flex items-center justify-center rounded-xl shadow-card">Video 2</div>
        </div>
      </div>

      {/* Portal payment options */}
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-4">Portal payment <span className="text-primary">options</span></h3>
        <p className="text-gray-600 mb-4">You can pay online with other suitable payment methods</p>
        <img src="/paybill/syscomputersltd-payment.png" alt="syscomputersltd-payment" className='w-full rounded-xl shadow-card mb-4' />
        <div className="flex items-center gap-2 mb-2">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" className="text-gray-600 text-sm">I read and agreed to the Terms of use, Return & refund Policy, Privacy policy</label>
        </div>
        <button className="primaryBtn fill mt-2">Pay Now</button>
      </div>

      {/* Direct bank transfer */}
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-4">Direct <span className="text-primary">bank transfer</span></h3>
        <p className="text-gray-600 mb-4">You can pay us with direct bank transfer</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          {/* Placeholder bank cards */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white border border-primary/10 rounded-2xl p-6 shadow-card flex flex-col gap-2">
              <div className="font-bold text-primary mb-1">Bank Name</div>
              <div className="text-sm text-gray-700">Account Name: Exord Online</div>
              <div className="text-sm text-gray-700">Account No: 1234567890</div>
              <div className="text-sm text-gray-700">Branch name: Example</div>
              <div className="text-sm text-gray-700">Routing No: 0000000</div>
            </div>
          ))}
        </div>
      </div>

      {/* Notice/Contact Section */}
      <div className="bg-primary/10 border-l-4 border-primary p-6 flex items-center gap-4 rounded-xl">
        <span className="text-primary text-2xl"><Icon icon="mdi-light:alert" /></span>
        <div>
          <p className="text-gray-700 font-semibold">You must need to contact with our helpline to update your payment if you use USSD, Bank Payment or Mobile Banking App to pay the bill.</p>
          <p className="text-gray-600 text-sm mt-1">Helpline number: 09614-925925, 09614-962962, 01975-925925.<br />E-Mail: accounts@exordonline.com</p>
        </div>
      </div>
    </div>
  )
}

export default PayBill