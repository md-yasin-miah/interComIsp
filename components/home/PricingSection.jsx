import React from 'react';
import { WavyBackground } from '../ui/wavy-background';

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
    buttonGradient: "from-primary to-secondary",
    priceGradient: "from-secondary to-primary",
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
    buttonGradient: "from-[#6B3FFF] to-[#8E6FFF]",
    priceGradient: "from-white to-white",
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
    buttonGradient: "from-secondary to-primary",
    priceGradient: "from-primary to-secondary",
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
            <div
              key={plan.title}
              className={`w-full md:w-1/3 px-4 mb-8 md:mb-0 ${
                plan.featured ? 'md:-mt-4' : ''
              }`}
            >
              <div
                className={`h-full bg-white dark:bg-gray-800 rounded-[20px] shadow-lg p-8 relative ${
                  plan.featured ? 'bg-gradient-to-t from-primary to-secondary' : ''
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className={`text-xl font-semibold mb-2 ${plan.featured ? 'text-white' : 'text-gray-800'}`}>
                    {plan.title}
                  </h3>
                  <p className={`text-sm ${plan.featured ? 'text-white/80' : 'text-gray-600'}`}>
                    {plan.subtitle}
                  </p>
                  
                  <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r ${plan.priceGradient} mt-6`}>
                    <div className={`text-center ${plan.featured ? 'text-black' : 'text-white'}`}>
                      <span className="text-2xl font-bold">${plan.price}</span>
                      <span className="text-sm block">/mo</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div
                      key={feature.name}
                      className="flex items-center justify-between"
                    >
                      <span className={`flex items-center gap-2 ${plan.featured ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <path d="M9 12l2 2 4-4" stroke={plan.featured ? '#fff' : '#4C6FFF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {feature.name}
                      </span>
                      <span className={`font-medium ${plan.featured ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                        {feature.value}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full mt-8 py-3 px-6 rounded-lg font-medium transition-all ${
                    plan.featured
                      ? 'bg-white text-[#6B3FFF] hover:bg-gray-50'
                      : `bg-gradient-to-r ${plan.buttonGradient} text-white hover:opacity-90`
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </WavyBackground>
    </section>
  );
};

export default PricingSection;
