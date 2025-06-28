"use client"
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { FaCheckCircle, FaTimesCircle, FaMapMarkerAlt } from 'react-icons/fa'

const CoverageModal = ({ isOpen, onClose, userLocation, coverageAreas }) => {
  const [isInCoverageArea, setIsInCoverageArea] = useState(false)
  const [nearestLocation, setNearestLocation] = useState(null)
  const [matchingCoverageAreas, setMatchingCoverageAreas] = useState([])
  const [locationError, setLocationError] = useState(null)

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
  console.log({ coverageAreas })
  // Flatten coverage areas from nested district structure
  const flattenCoverageAreas = (coverageData) => {
    if (!coverageData || !Array.isArray(coverageData)) return []

    const flattened = []
    coverageData.forEach(district => {
      if (district.area && Array.isArray(district.area)) {
        district.area.forEach(area => {
          // Log each area to debug coordinates
          console.log(`Area: ${area.name}, Lat: ${area.lat}, Lng: ${area.lng}, District: ${district.district}`)

          flattened.push({
            ...area,
            district: district.district,
            // Use actual coordinates if available, otherwise use defaults
            lat: area.lat || (23.8103 + Math.random() * 0.1),
            lng: area.lng || (90.4125 + Math.random() * 0.1),
            radius_in_square_km: area.radius_in_square_km || 25 // Default 25 sq km (≈ 2.8km radius)
          })
        })
      }
    })

    console.log('Flattened coverage areas:', flattened)
    return flattened
  }

  useEffect(() => {
    // Reset states when modal opens
    if (isOpen) {
      setIsInCoverageArea(false)
      setNearestLocation(null)
      setMatchingCoverageAreas([])
      setLocationError(null)
    }

    if (userLocation && coverageAreas) {
      const flatAreas = flattenCoverageAreas(coverageAreas)

      if (flatAreas.length === 0) {
        setLocationError("No coverage areas available")
        return
      }

      let minDistance = Infinity
      let closestArea = null
      let foundCoverage = false
      const matchingAreas = []

      flatAreas.forEach(area => {
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

        // Check if within coverage radius
        // Convert square kilometers to equivalent circular radius
        // Formula: radius = sqrt(area/π) where area is in sq km
        const equivalentRadius = Math.sqrt(area.radius_in_square_km / Math.PI)

        if (distance <= equivalentRadius) {
          foundCoverage = true
          matchingAreas.push({
            ...area,
            distance: distance,
            equivalentRadius: equivalentRadius
          })
        }
      })

      setIsInCoverageArea(foundCoverage)
      setNearestLocation(closestArea)
      setMatchingCoverageAreas(matchingAreas)
    }
  }, [userLocation, coverageAreas, isOpen])

  const getMapUrl = () => {
    if (!userLocation) return `https://maps.google.com/maps?q=23.8103,90.4125&z=15&output=embed`
    return `https://maps.google.com/maps?q=${userLocation.lat},${userLocation.lng}&z=15&output=embed`
  }

  const handleRequestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // This would need to be passed back to parent component
          console.log("New location:", {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        },
        (error) => {
          setLocationError("Unable to get your location. Please enable location services.")
          console.error("Geolocation error:", error)
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000
        }
      )
    } else {
      setLocationError("Geolocation is not supported by your browser")
    }
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
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Coverage Check</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <IoClose className="text-2xl text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            {/* Location Status */}
            {userLocation ? (
              <div className="mb-6 p-4 rounded-lg bg-gray-50 dark:bg-slate-800">
                <div className="flex items-center mb-3">
                  <FaMapMarkerAlt className="text-blue-600 mr-2" />
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    Your Location: {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
                  </span>
                </div>

                {isInCoverageArea ? (
                  <div className="space-y-3">
                    <div className="flex items-center text-green-600">
                      <FaCheckCircle className="text-2xl mr-2" />
                      <p className="font-medium">
                        Great news! Your location is within our coverage area.
                      </p>
                    </div>

                    {/* Display matching coverage areas */}
                    <div className="ml-8 space-y-2">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Covered by:
                      </p>
                      {matchingCoverageAreas.map((area, index) => (
                        <div key={index} className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-green-800 dark:text-green-200">
                                {area.name} ({area.district})
                              </p>
                              <p className="text-sm text-green-600 dark:text-green-400">
                                Distance: {Math.round(area.distance * 1000)}m from center
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-green-600 dark:text-green-400">
                                Coverage Area: {area.radius_in_square_km} square km
                              </p>
                              <p className="text-xs text-green-500 dark:text-green-300">
                                Effective Radius: {area.equivalentRadius?.toFixed(2)} km
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
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
                      <p className="text-gray-600 dark:text-gray-400 ml-8">
                        Nearest coverage area: {nearestLocation.name} ({nearestLocation.district})
                        <br />
                        Distance: {Math.round(nearestLocation.distance * 100) / 100} km away
                      </p>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="mb-6 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                      Location access required
                    </p>
                    <p className="text-yellow-600 dark:text-yellow-300 text-sm mt-1">
                      {locationError || "Please allow location access to check coverage in your area."}
                    </p>
                  </div>
                  <button
                    onClick={handleRequestLocation}
                    className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm"
                  >
                    Enable Location
                  </button>
                </div>
              </div>
            )}

            {/* Map Section */}
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {userLocation
                  ? "Here's the coverage information for your location:"
                  : "Enable location access to see your exact position on the map."}
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

            {/* Action Buttons */}
            <div className="mt-6 flex justify-end gap-3">
              {!userLocation && (
                <button
                  onClick={handleRequestLocation}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get My Location
                </button>
              )}
              <button
                onClick={onClose}
                className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
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