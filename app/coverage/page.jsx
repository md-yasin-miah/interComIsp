'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'
import CoverageModal from '@/components/modals/CoverageModal'
import { coverageAreas } from '@/fake'
import SectionTitle from '@/components/shared/SectionTitle'

const Coverage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [userLocation, setUserLocation] = useState(null)

  const handleCheckCoverage = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
          setIsModalOpen(true)
        },
        (error) => {
          console.error("Error getting location:", error)
          setIsModalOpen(true) // Open modal anyway, but without location
        }
      )
    } else {
      alert("Geolocation is not supported by your browser")
      setIsModalOpen(true) // Open modal anyway, but without location
    }
  }

  return (
    <section className="pt-10 pb-20">
      <div className='customContainer'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <SectionTitle
            title="Coverage in"
            title2="Dhaka"
            placeholder_title='Area'
            subTitle={<span>
              Experience high-speed internet coverage across Dhaka city.<br /> Check our service availability in your area.
            </span>}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coverageAreas.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + Number(`.${index}`) }}
              className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-card hover:shadow-cardHover transition-shadow"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {location.name}
                </h3>
              </div>
              <p className="mt-4 text-gray-600">
                Full coverage available
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-10 text-center"
        >
          <button
            onClick={handleCheckCoverage}
            className="text-white px-8 py-3 rounded-full relative bg-gradient-to-r from-primary to-secondary group overflow-hidden"
          >
            <span className="relative z-10">Check Coverage in Your Area</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
          </button>
        </motion.div>
      </div>

      <CoverageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userLocation={userLocation}
      />
    </section>
  )
}

export default Coverage