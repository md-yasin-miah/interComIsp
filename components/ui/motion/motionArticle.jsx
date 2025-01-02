'use client'
import { motion } from 'framer-motion'

export default function MotionArticle({ children, className,...props }) {
  return (
    <motion.article
      className={className}
      {...props}
    >
      {children}
    </motion.article>
  )
}