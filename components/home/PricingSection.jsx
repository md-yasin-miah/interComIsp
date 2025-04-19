"use client"
import React, { useContext, useEffect } from 'react';
import { WavyBackground } from '../ui/wavy-background';
import PricingCard from '@/components/cards/PricingCard';
import SectionTitle from '../shared/SectionTitle';
import { APIContext } from '@/contexts/APIContext';
import PricingCardSkeleton from '../skeleton/PricingCardSkeleton';
import MotionDiv from '../ui/motion/motionDiv';

const PricingSection = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <section className="relative py-20">
      <WavyBackground>
        <div className="customContainer px-4">
          <SectionTitle
            title="Our"
            title2="Packages"
            subTitle="Choose the perfect plan for your needs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {data.data.map((plan, index) => (
              <MotionDiv
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PricingCard plan={plan} />
              </MotionDiv>
            ))}
          </div>
        </div>
      </WavyBackground>
    </section>
  );
};

export default PricingSection;
