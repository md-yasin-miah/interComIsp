import React from 'react';
import { WavyBackground } from '../ui/wavy-background';
import PricingCard from '@/components/cards/PricingCard';

const pricingData = [
  {
    title: "Basic Plan",
    subtitle: "This is Basic hosting plan",
    price: "2.99",
    features: [
      { name: "Space", value: "10GB" },
      { name: "FTP User", value: "10" },
      { name: "Databases", value: "10" },
      { name: "Addons Domain", value: "2" },
      { name: "24/7 Support", value: "Yes" },
      { name: "Custom Email", value: "10" },
    ],
    featured: false
  },
  {
    title: "Standard Plan",
    subtitle: "This is standard hosting plan",
    price: "3.99",
    features: [
      { name: "Space", value: "30GB" },
      { name: "FTP User", value: "50" },
      { name: "Databases", value: "50" },
      { name: "Addons Domain", value: "5" },
      { name: "24/7 Support", value: "Yes" },
      { name: "Custom Email", value: "50" },
    ],
    featured: true
  },
  {
    title: "Premium Plan",
    subtitle: "This is premium hosting plan",
    price: "7.99",
    features: [
      { name: "Space", value: "100GB" },
      { name: "FTP User", value: "100" },
      { name: "Databases", value: "100" },
      { name: "Addons Domain", value: "unlimited" },
      { name: "24/7 Support", value: "Yes" },
      { name: "Custom Email", value: "unlimited" },
    ],
    featured: false
  }
];

const PricingSection = () => {
  return (
    <section className="relative py-20">
      <WavyBackground>
      <div className="customContainer px-4">
        <div className="flex flex-col md:flex-row justify-center items-stretch -mx-4">
          {pricingData.map((plan, index) => (
            <PricingCard key={index} plan={plan}/>
          ))}
        </div>
      </div>
      </WavyBackground>
    </section>
  );
};

export default PricingSection;
