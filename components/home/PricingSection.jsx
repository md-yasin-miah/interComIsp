import React from 'react';
import { WavyBackground } from '../ui/wavy-background';
import PricingCard from '@/components/cards/PricingCard';
import SectionTitle from '../shared/SectionTitle';
import { pricingData } from '@/fake';


const PricingSection = () => {
  return (
    <section className="relative py-20">
      <WavyBackground>
        <div className="customContainer px-4">
          <SectionTitle
            title="Our"
            title2="Packages"
            placeholder_title="Packages"
            subTitle="Choose the perfect internet package for your needs"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-12">
            {pricingData.map((plan, index) => (
             index<3 && <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </WavyBackground>
    </section>
  );
};

export default PricingSection;
