'use client'
import { motion } from 'framer-motion'

export default function MotionButton({ children, className,...props }) {
  return (
    <motion.button
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  )
}