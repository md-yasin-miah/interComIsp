"use client"

import React from 'react'

const PayBill = () => {

  return (
    <div className="px-4 customContainer mx-auto pt-32">
      {/* Quick Pay Card */}
      <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between mb-8">
        <div>
          <h2 className="text-lg font-bold text-red-600 mb-1">Quick Pay</h2>
          <p className="text-gray-600 text-sm max-w-md">Make your payment instantly using the facilities but not limited to like Bkash, Nagad, Master Card, Visa card and some other way. You can pay your renewal fee and new connection fees from here instantly.</p>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded">PAY NOW</button>
      </div>

      {/* How to pay? */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-red-600 mb-2">How to pay?</h2>
        <p className="text-gray-600 mb-4">Step-by-step guide to making an online payment</p>
        <div className="flex gap-4 mb-6">
          <button className="flex items-center gap-2 border border-red-400 text-red-500 px-4 py-2 rounded font-semibold bg-white">Mobile Banking</button>
          <button className="flex items-center gap-2 border border-red-400 text-red-500 px-4 py-2 rounded font-semibold bg-white">Online Payment</button>
          <button className="flex items-center gap-2 border border-red-400 text-red-500 px-4 py-2 rounded font-semibold bg-white">Bank Transfer</button>
        </div>
      </div>

      {/* Pay bill with mobile banking */}
      <div className="mb-10">
        <h3 className="text-xl font-bold mb-2">Pay bill with <span className="text-red-500">mobile banking</span></h3>
        <p className="text-gray-600 mb-4">You can pay with Mobile banking by following these instructions</p>
        <div className="flex gap-4 mb-6">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">Bkash</button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">Nagad</button>
        </div>

        {/* Stepper Design - Exact Match */}
        <div className="flex">
          {/* Stepper column */}
          <div className="relative flex flex-col items-center mr-6">
            {/* Vertical line (full height) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-gray-200" style={{ height: '100%' }}></div>
            {/* Steps */}
            <div className="relative z-10 flex flex-col items-center gap-8 py-2">
              {/* Step 1 */}
              <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center">
                {/* SVG: Login/Arrow icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15" /><path strokeLinecap="round" strokeLinejoin="round" d="M18 12H9m0 0l3-3m-3 3l3 3" /></svg>
              </div>
              {/* Step 2 */}
              <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center">
                {/* SVG: Location/Lightbulb icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71m16.97 0l-.71-.71M4.05 4.05l-.71-.71M21 12h-1M4 12H3m9-9a9 9 0 100 18 9 9 0 000-18z" /></svg>
              </div>
              {/* Step 3 */}
              <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center">
                {/* SVG: Clipboard icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5h6a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2zm0 0V3a2 2 0 012-2h2a2 2 0 012 2v2" /></svg>
              </div>
              {/* Step 4 */}
              <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center">
                {/* SVG: Check/Heart icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              {/* Step 5 */}
              <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center">
                {/* SVG: Clock/Time icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
            </div>
          </div>
          {/* Text column */}
          <div className="flex flex-col justify-between py-2 gap-8">
            <div className="flex items-center h-12"><span className="text-gray-700">Login to your account</span></div>
            <div className="flex items-center h-12"><span className="text-gray-700">In "Pay Bill" option you'll find <span className="font-semibold text-red-500">Exord Online</span>. Simply tap on it and follow the next step.</span></div>
            <div className="flex items-center h-12"><span className="text-gray-700">Now select your internet billing timeline in <span className="font-semibold text-red-500">"Billing Cycle"</span> box & input your customer in <span className="font-semibold text-red-500">"Exord ID"</span> box.</span></div>
            <div className="flex items-center h-12"><span className="text-gray-700">If you want to save the payment info for quick payment, you can simple tick the checkbox: <span className="font-semibold text-red-500">"Save this account for paying future bill"</span>.</span></div>
            <div className="flex items-center h-12"><span className="text-gray-700">After that, tap the <span className="font-semibold text-red-500">"Pay Bill NOW"</span> button & hold the pay button for a few second. You're done!</span></div>
          </div>
        </div>

        {/* Placeholder for video thumbnails */}
        <div className="flex gap-4 mt-6">
          <div className="bg-gray-200 w-64 h-40 flex items-center justify-center rounded">Video 1</div>
          <div className="bg-gray-200 w-64 h-40 flex items-center justify-center rounded">Video 2</div>
        </div>
      </div>

      {/* Portal payment options */}
      <div className="mb-10">
        <h3 className="text-xl font-bold mb-4">Portal payment <span className="text-red-500">options</span></h3>
        <p className="text-gray-600 mb-4">You can pay online with other suitable payment methods</p>
        <img src="/paybill/syscomputersltd-payment.png" alt="syscomputersltd-payment" className='w-full' />
        <div className="flex items-center gap-2 mb-2">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" className="text-gray-600 text-sm">I read and agreed to the Terms of use, Return & refund Policy, Privacy policy</label>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded">Pay Now</button>
      </div>

      {/* Direct bank transfer */}
      <div className="mb-10">
        <h3 className="text-xl font-bold mb-4">Direct <span className="text-red-500">bank transfer</span></h3>
        <p className="text-gray-600 mb-4">You can pay us with direct bank transfer</p>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {/* Placeholder bank cards */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white border rounded-lg p-4">
              <div className="font-bold text-gray-700 mb-2">Bank Name</div>
              <div className="text-sm text-gray-600">Account Name: Exord Online</div>
              <div className="text-sm text-gray-600">Account No: 1234567890</div>
              <div className="text-sm text-gray-600">Branch name: Example</div>
              <div className="text-sm text-gray-600">Routing No: 0000000</div>
            </div>
          ))}
        </div>
      </div>

      {/* Notice/Contact Section */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 flex items-center gap-4">
        <span className="text-yellow-600 text-2xl">⚠️</span>
        <div>
          <p className="text-gray-700 font-semibold">You must need to contact with our helpline to update your payment if you use USSD, Bank Payment or Mobile Banking App to pay the bill.</p>
          <p className="text-gray-600 text-sm mt-1">Helpline number: 09614-925925, 09614-962962, 01975-925925.<br />E-Mail: accounts@exordonline.com</p>
        </div>
      </div>
    </div>
  )
}

export default PayBill