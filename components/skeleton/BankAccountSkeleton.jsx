import React from 'react';
import Shade from './Shade';

const BankAccountSkeleton = () => {
  return (
    <div className="rounded-2xl shadow-card overflow-hidden bg-white dark:bg-transparent dark:border dark:border-primary/10 flex flex-col">
      {/* Top colored section with logo placeholder */}
      <div className="bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center h-36 py-6 px-4">
        <Shade className="h-24 w-32 mb-2" /> {/* Bank logo placeholder */}
      </div>

      {/* Bottom section with account info placeholders */}
      <div className="bg-white dark:bg-transparent flex-1 flex flex-col justify-center px-6 py-6">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {/* Account Name Row */}
          <div className="grid grid-cols-2 gap-y-2 py-2">
            <Shade className="w-24 h-4" /> {/* "Account Name:" label */}
            <Shade className="w-32 h-4" /> {/* Account name value */}
          </div>

          {/* Account No Row */}
          <div className="grid grid-cols-2 gap-y-2 py-2">
            <Shade className="w-20 h-4" /> {/* "Account No:" label */}
            <Shade className="w-28 h-4" /> {/* Account number value */}
          </div>

          {/* Branch Name Row */}
          <div className="grid grid-cols-2 gap-y-2 py-2">
            <Shade className="w-24 h-4" /> {/* "Branch name:" label */}
            <Shade className="w-36 h-4" /> {/* Branch name value */}
          </div>

          {/* Routing No Row */}
          <div className="grid grid-cols-2 gap-y-2 py-2">
            <Shade className="w-20 h-4" /> {/* "Routing No:" label */}
            <Shade className="w-24 h-4" /> {/* Routing number value */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccountSkeleton; 