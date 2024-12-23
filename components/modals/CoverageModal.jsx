'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import { coverageAreas } from '@/fake'

const CoverageModal = ({ isOpen, onClose, userLocation }) => {
  const [isInCoverageArea, setIsInCoverageArea] = useState(false)
  const [nearestLocation, setNearestLocation] = useState(null)

  // Calculate distance between two points using Haversine formula
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371 // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180
    const dLon = (lon2 - lon1) * Math.PI / 180
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  useEffect(() => {
    if (userLocation) {
      let minDistance = Infinity
      let closestArea = null

      coverageAreas.forEach(area => {
        const distance = calculateDistance(
          userLocation.lat,
          userLocation.lng,
          area.lat,
          area.lng
        )

        if (distance < minDistance) {
          minDistance = distance
          closestArea = { ...area, distance }
        }

        if (distance <= area.radius) {
          setIsInCoverageArea(true)
        }
      })

      setNearestLocation(closestArea)
    }
  }, [userLocation])

  const getMapUrl = () => {
    if (!userLocation) return `https://maps.google.com/maps?q=23.8103,90.4125&z=15&output=embed`
    return `https://maps.google.com/maps?q=${userLocation.lat},${userLocation.lng}&z=15&output=embed`
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-[95%] max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-black border border-transparent dark:border-white/[0.2] rounded-2xl p-6 z-50 mx-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Coverage Check</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <IoClose className="text-2xl" />
              </button>
            </div>

            {userLocation && (
              <div className="mb-6 p-4 rounded-lg bg-gray-50 dark:bg-slate-700">
                {isInCoverageArea ? (
                  <div className="flex items-center text-green-600">
                    <FaCheckCircle className="text-2xl mr-2" />
                    <p className="font-medium">
                      Great news! Your location is within our coverage area.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center text-yellow-600">
                      <FaTimesCircle className="text-2xl mr-2" />
                      <p className="font-medium">
                        Your location is currently outside our coverage area.
                      </p>
                    </div>
                    {nearestLocation && (
                      <p className="text-gray-600 ml-8">
                        Nearest coverage area: {nearestLocation.name}
                        ({Math.round(nearestLocation.distance * 100) / 100} km away)
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                {userLocation
                  ? "Here's the coverage information for your location:"
                  : "Please allow location access to check coverage in your area."}
              </p>

              <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
                <iframe
                  src={getMapUrl()}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default CoverageModal 