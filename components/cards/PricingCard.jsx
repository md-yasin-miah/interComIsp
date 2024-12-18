"use client"
import { motion } from 'framer-motion'
import { IoSpeedometer, IoCheckmarkCircle } from "react-icons/io5"
import LinkButton from '../shared/LinkButton'

const PricingCard = ({ speed, price, title, features, type = 'regular' }) => {
  // Get card style based on plan type
  const getCardStyle = () => {
    switch (type) {
      case 'premium':
        return 'bg-gradient-to-br from-primary to-secondary text-white';
      case 'basic':
        return 'bg-white dark:bg-slate-800';
      default:
        return 'bg-white dark:bg-slate-800';
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`rounded-3xl overflow-hidden ${getCardStyle()} p-8 shadow-card hover:shadow-card2Hover transition-all duration-300`}
    >
      {/* Header */}
      <div className="space-y-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <IoSpeedometer className={`text-3xl ${type === 'premium' ? 'text-white' : 'text-primary'}`} />
          <h3 className={`text-2xl font-bold ${type === 'premium' ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
            {title}
          </h3>
        </motion.div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className={`text-4xl font-bold ${type === 'premium' ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
            ৳{price}
          </span>
          <span className={`text-sm ${type === 'premium' ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
            /month
          </span>
        </div>

        {/* Speed */}
        <div className={`inline-block px-4 py-1 rounded-full text-sm ${type === 'premium' ? 'bg-white/20' : 'bg-primary/10'
          }`}>
          <span className={type === 'premium' ? 'text-white' : 'text-primary'}>
            {speed} Mbps
          </span>
        </div>
      </div>

      {/* Features */}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 space-y-4"
      >
        {features?.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="flex items-center gap-2"
          >
            <IoCheckmarkCircle className={`text-lg ${type === 'premium' ? 'text-white' : 'text-primary'
              }`} />
            <span className={`text-sm ${type === 'premium' ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'
              }`}>
              {feature}
            </span>
          </motion.li>
        ))}
      </motion.ul>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8"
      >
        <LinkButton
          href="/packages"
          className={`w-full justify-center ${type === 'premium'
              ? 'bg-white text-primary hover:bg-white/90'
              : 'bg-primary text-white hover:bg-primary/90'
            }`}
        >
          Choose Plan
        </LinkButton>
      </motion.div>
    </motion.div>
  )
}

export default PricingCard 