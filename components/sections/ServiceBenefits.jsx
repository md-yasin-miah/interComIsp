import { BiWifi, BiSupport, BiDollarCircle, BiShield, BiCloud, BiSignal5 } from 'react-icons/bi';
import MotionDiv from '../ui/motion/motionDiv';

const benefits = [
  {
    icon: <BiWifi className="w-8 h-8" />,
    title: "High-Speed Internet",
    description: "Experience lightning-fast internet speeds perfect for streaming, gaming, and work"
  },
  {
    icon: <BiSupport className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Our dedicated support team is always available to help you with any issues"
  },
  {
    icon: <BiDollarCircle className="w-8 h-8" />,
    title: "Affordable Pricing",
    description: "Competitive rates with flexible plans to suit every budget"
  },
  {
    icon: <BiShield className="w-8 h-8" />,
    title: "Secure Connection",
    description: "Advanced security measures to protect your online activities"
  },
  {
    icon: <BiCloud className="w-8 h-8" />,
    title: "No Data Caps",
    description: "Unlimited data usage with no hidden charges or restrictions"
  },
  {
    icon: <BiSignal5 className="w-8 h-8" />,
    title: "Wide Coverage",
    description: "Extensive network coverage ensuring connectivity wherever you are"
  }
];

const ServiceBenefits = () => {
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
            Experience the best internet service with our cutting-edge technology and customer-first approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-card hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10">
                  <div className="text-primary">
                    {benefit.icon}
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