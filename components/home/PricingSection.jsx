"use client"
import React, { useContext, useEffect } from 'react';
import { WavyBackground } from '../ui/wavy-background';
import PricingCard from '@/components/cards/PricingCard';
import SectionTitle from '../shared/SectionTitle';
import { APIContext } from '@/contexts/APIContext';
import PricingCardSkeleton from '../skeleton/PricingCardSkeleton';


const PricingSection = () => {
  const { Packages, getPackagesData } = useContext(APIContext);
  useEffect(() => {
    !Packages.data && getPackagesData();
  }, []);
  return (
    <section className="relative py-20">
      <WavyBackground>
        <div className="customContainer px-4">
          <SectionTitle
            title="Our"
            title2="Packages"
            placeholder_title="Packages"
            subTitle="Choose the perfect internet package for your needs"
            loading={Packages.isLoading}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-12">
            {
              Packages.isLoading ?
                [...Array(3)].map((_, index) => (
                  <PricingCardSkeleton key={index} />
                ))
                :
                Packages.data && Packages.data.filter(plan => plan.view_in_home_page).map((plan, index) => (
                  <PricingCard key={index} plan={plan} />
                ))
            }
          </div>
        </div>
      </WavyBackground>
    </section>
  );
};

export default PricingSection;
