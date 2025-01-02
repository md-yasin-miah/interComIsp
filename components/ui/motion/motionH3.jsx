"use client"
import { motion } from 'framer-motion'

const MotionH3 = ({ children, className, ...props }) => {
  return (
    <motion.h3
      className={className}
      {...props}
    >
      {children}
    </motion.h3>
  )
}

export default MotionH3