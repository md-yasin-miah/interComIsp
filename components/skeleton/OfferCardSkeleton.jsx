import React from 'react';
import Shade from './Shade';

const OfferCardSkeleton = () => {
  return (
    <div
      className={`w-full max-sm:h-fit bg-white rounded-[20px] overflow-hidden cursor-pointer shadow-card dark:bg-black dark:border-white/[0.2] border border-transparent`}
    >
      <div className="h-full flex flex-col justify-between">
        {/* Image Section */}
        <div
          className="min-h-[250px] w-full flex items-center justify-center overflow-hidden"
          style={{ borderRadius: '100% 0% / 0% 50% 50% 100%' }}
        >
          <Shade className="w-full h-full" />
        </div>

        {/* Content Section */}
        <div className="p-6 h-full flex gap-4 flex-col justify-between">
          <div>
            {/* Title */}
            <Shade className="w-11/12 h-10 mb-4" />

            {/* Description */}
            <Shade className="w-full h-4 mb-2" />
            <Shade className="w-11/12 h-4 mb-2" />
            <Shade className="w-9/12 h-4 mb-2" />
            <Shade className="w-full h-4 mb-2" />
          </div>

          {/* Price and Button Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shade className="w-1/3 h-6" />
              <Shade className="w-1/4 h-6" />
            </div>
            <Shade className="w-3/6 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCardSkeleton;
