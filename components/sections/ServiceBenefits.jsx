"use client"
import { useContext, useEffect } from 'react';
import MotionDiv from '../ui/motion/motionDiv';
import { Icon } from '@iconify/react';
import { APIContext } from '@/contexts/APIContext';
import WhyChooseUsSkeleton from '../skeleton/WhyChooseUsSkeleton';

const ServiceBenefits = () => {
  const { WhyChooseUs, getWhyChooseUsData } = useContext(APIContext);
  useEffect(() => {
    if (!WhyChooseUs.data) {
      getWhyChooseUsData()
    }
  }, []);

  if (WhyChooseUs.isLoading) {
    return <WhyChooseUsSkeleton />
  }
  if (WhyChooseUs.isError) {
    return <ErrorSection
      retry={getWhyChooseUsData}
      message="Something went wrong while fetching why choose us data"
    />
  }
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="customContainer">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Netcom
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We have some of the best internet packages, whether you need them for home entertainment sources, small businesses or demanding corporate use. All packages come with flexible bandwidth and the highest level of reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WhyChooseUs.data?.map((benefit, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-card hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="pr-2 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10">
                  <div className="text-primary">
                    <Icon icon={benefit?.icon_name} className="w-10 h-10" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBenefits; 