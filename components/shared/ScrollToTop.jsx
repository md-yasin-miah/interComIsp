"use client"
import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'
import MotionButton from '../ui/motion/motionButton'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionButton
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl group overflow-hidden"
        >
          <FaArrowUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </MotionButton>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop 