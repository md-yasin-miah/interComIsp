import React from 'react'
import { motion } from 'framer-motion'
import { HiRefresh } from 'react-icons/hi'
import Button from '../shared/Button'
import { BiErrorAlt } from 'react-icons/bi'

const ErrorSection = ({ 
  message = "Something went wrong while fetching data", 
  retry = null,
  className = ""
}) => {
  return (
    <section className={`min-h-[400px] flex items-center justify-center ${className}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6 max-w-lg mx-auto px-4"
      >
        {/* Error Icon */}
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <BiErrorAlt className="w-20 h-20 text-red-300" />
          </motion.div>
        </div>

        {/* Error Message */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Oops! Something Went Wrong
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {message}
          </p>
        </div>

        {/* Retry Button - Only shown if retry function is provided */}
        {retry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              onClick={retry}
              className="inline-flex items-center gap-2 m-auto"
              icon={<HiRefresh className="w-5 h-5" />}
              size='small'
            >
              Try Again
            </Button>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

export default ErrorSection