"use client"
import { motion } from 'framer-motion'

const MotionP = ({ children, className, ...props }) => {
    console.log("props", props)
  return (
    <motion.p
      className={className}
      {...props}
    >
      {children}
    </motion.p>
  )
}

export default MotionP