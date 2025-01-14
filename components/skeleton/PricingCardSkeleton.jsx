import React from 'react';
import Shade from './Shade';

const PricingCardSkeleton = () => {
  return (
    <div className="w-full">
      <div className="h-full rounded-[20px] shadow-card p-8 relative flex flex-col dark:bg-black dark:border-white/[0.2] bg-white border border-transparent">
        {/* Header Section */}
        <div className="mb-8">
          <Shade className="w-3/5 h-7 mb-4" /> {/* Title Placeholder */}
          <div className="flex items-center gap-2 mb-4">
            <Shade className="w-16 h-10" /> {/* Speed Placeholder */}
            <Shade className="w-12 h-6" /> {/* Mbps Placeholder */}
          </div>
          <Shade className="w-3/4 h-5" /> {/* Description Placeholder */}
        </div>

        {/* Features Section */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="space-y-4">
            {[...Array(4)].map((_, index) => (
              <div className="flex items-center justify-between" key={index}>
                <Shade className="w-1/3 h-5" /> {/* Feature Name Placeholder */}
                <Shade className="w-1/4 h-5" /> {/* Feature Value Placeholder */}
              </div>
            ))}
          </div>

          {/* Pricing Section */}
          <div className="mt-8 space-y-6">
            <div className="space-y-2">
              <Shade className="w-1/3 h-8" /> {/* Price Placeholder */}
              <Shade className="w-1/2 h-5" /> {/* Subtext Placeholder */}
            </div>
            <Shade className="w-full h-12" /> {/* Button Placeholder */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCardSkeleton;
