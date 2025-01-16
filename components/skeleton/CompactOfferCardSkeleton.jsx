import React from 'react';
import Shade from './Shade';

const CompactOfferCardSkeleton = () => {
  return (
    <div className="flex items-center h-[100px] dark:border-white/[0.2] border border-transparent rounded-lg overflow-hidden shadow-card">
      {/* Image Section */}
      <div className="aspect-[7/6] h-full">
        <div className="relative h-full w-full flex items-center justify-center ">
          <Shade className="w-full h-full !rounded-none" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-2 pl-4 w-full">
        {/* Title */}
        <Shade className="w-3/4 h-5 mb-2" />

        {/* Description */}
        <Shade className="w-full h-3 mb-1" />
        <Shade className="w-11/12 h-3" />
      </div>
    </div>
  );
};

export default CompactOfferCardSkeleton;
