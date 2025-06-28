import React from 'react'
import Image from 'next/image'

const BankAccountCard = ({
  bank,
  ...props
}) => {
  return (
    <div {...props} className="rounded-2xl shadow-card overflow-hidden bg-white dark:bg-transparent dark:border dark:border-primary/10 flex flex-col">
      {/* Top colored section with logo */}
      <div className={`${bank?.background_color_class} flex flex-col items-center justify-center h-36 py-6 px-4`}>
        <Image src={bank.bank_image_url} alt={bank.bank_name} className="h-24 w-auto mb-2 px-20 object-contain" width={100} height={100} />
      </div>
      {/* Bottom white section with account info */}
      <div className="bg-white dark:bg-transparent dark:border dark:border-primary/10 flex-1 flex flex-col justify-center px-6 py-6">
        {/* Account details with dividers */}
        <div className="divide-y divide-gray-200">
          <div className="grid grid-cols-2 gap-y-2 py-2">
            <div className="font-semibold text-gray-700 dark:text-gray-200">Account Name:</div>
            <div className="font-semibold text-gray-900 dark:text-gray-200">{bank.account_name}</div>
          </div>
          <div className="grid grid-cols-2 gap-y-2 py-2">
            <div className="font-semibold text-gray-700 dark:text-gray-200">Account No:</div>
            <div className="font-semibold text-gray-900 dark:text-gray-200">{bank.account_no}</div>
          </div>
          <div className="grid grid-cols-2 gap-y-2 py-2">
            <div className="font-semibold text-gray-700 dark:text-gray-200">Branch name:</div>
            <div className="font-semibold text-gray-900 dark:text-gray-200">{bank.branch_name}</div>
          </div>
          <div className="grid grid-cols-2 gap-y-2 py-2">
            <div className="font-semibold text-gray-700 dark:text-gray-200">Routing No:</div>
            <div className="font-semibold text-primary dark:text-secondary">{bank.routing_no}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BankAccountCard