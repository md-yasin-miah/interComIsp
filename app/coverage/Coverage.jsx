"use client"
import React, { useContext, useEffect, useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import CoverageModal from '@/components/modals/CoverageModal'
import SectionTitle from '@/components/shared/SectionTitle'
import PageBanner from '@/components/shared/PageBanner'
import { IoSearch } from "react-icons/io5"
import LabelInputContainer from '@/components/ui/LabelInputContainer'
import { Input, Select } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import MotionDiv from '@/components/ui/motion/motionDiv'
import { APIContext } from '@/contexts/APIContext'

const Coverage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [userLocation, setUserLocation] = useState(null)
  const [selectedDistrict, setSelectedDistrict] = useState("Dhaka")
  const [searchQuery, setSearchQuery] = useState("")
  const [locationLoading, setLocationLoading] = useState(false)
  const [locationError, setLocationError] = useState(null)

  const { CoverageArea, getCoverageAreaData } = useContext(APIContext)

  useEffect(() => {
    !CoverageArea.data && getCoverageAreaData()
  }, []);

  const handleCheckCoverage = () => {
    if (navigator.geolocation) {
      setLocationLoading(true)
      setLocationError(null)

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            accuracy: position.coords.accuracy
          }
          setUserLocation(newLocation)
          setLocationLoading(false)
          setIsModalOpen(true)
          console.log("Location obtained:", newLocation)
        },
        (error) => {
          setLocationLoading(false)
          let errorMessage = "Unable to get your location. "

          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage += "Please enable location permissions in your browser."
              break
            case error.POSITION_UNAVAILABLE:
              errorMessage += "Location information is unavailable."
              break
            case error.TIMEOUT:
              errorMessage += "Location request timed out."
              break
            default:
              errorMessage += "An unknown error occurred."
              break
          }

          setLocationError(errorMessage)
          console.error("Geolocation error:", error)

          // Still open modal to show coverage areas
          setIsModalOpen(true)
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 300000 // 5 minutes
        }
      )
    } else {
      setLocationError("Geolocation is not supported by your browser")
      setIsModalOpen(true)
    }
  }
  // Filter areas based on search and selected district
  const filteredAreas = CoverageArea.data
    ?.find(district => district.district === selectedDistrict)?.area
    ?.filter(area =>
      area.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) || []

  return (
    <>
      <PageBanner
        pageName='coverage'
        boxClassName='!min-h-[300px]'
      />

      {/* search coverage area */}
      <section className="md:py-8 py-5 max-sm:px-10 bg-white shadow-card hover:shadow-cardHover dark:bg-slate-700 customContainer max-sm:!w-full md:rounded-full md:-translate-y-1/2">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* District Select */}
            <LabelInputContainer className={cn('w-full md:w-2/3')}>
              <Select
                options={CoverageArea.data?.map(district => ({ value: district.district, label: district.district }))}
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
              />
            </LabelInputContainer>

            {/* Search Input */}
            <LabelInputContainer>
              <Input
                id="search"
                placeholder="Search Area..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                required
                icon={<IoSearch />}
              />
            </LabelInputContainer>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-20">
        <div className='customContainer'>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <SectionTitle
              title="Coverage in"
              title2={selectedDistrict}
              subTitle={<span>
                Experience high-speed internet coverage across {selectedDistrict}.<br />
                Check our service availability in your area.
              </span>}
            />
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAreas.map((location, index) => (
              <MotionDiv
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
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {location.name}
                  </h3>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Full coverage available
                </p>
              </MotionDiv>
            ))}
          </div>

          {/* Location Error Display */}
          {locationError && (
            <MotionDiv
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-center"
            >
              <p className="text-red-600 dark:text-red-400 text-sm">
                {locationError}
              </p>
            </MotionDiv>
          )}

          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-10 text-center"
          >
            <button
              onClick={handleCheckCoverage}
              disabled={locationLoading}
              className={`text-white px-8 py-3 rounded-full relative bg-gradient-to-r from-primary to-secondary group overflow-hidden transition-all duration-300 ${locationLoading
                ? 'opacity-70 cursor-not-allowed'
                : 'hover:shadow-lg hover:scale-105'
                }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {locationLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Getting Location...
                  </>
                ) : (
                  <>
                    <FaMapMarkerAlt className="w-4 h-4" />
                    Check Coverage in Your Area
                  </>
                )}
              </span>
              {!locationLoading && (
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              )}
            </button>

            {userLocation && (
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Last location: {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
                {userLocation.accuracy && ` (±${Math.round(userLocation.accuracy)}m)`}
              </p>
            )}
          </MotionDiv>
        </div>

        <CoverageModal
          coverageAreas={CoverageArea.data}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false)
            setLocationError(null)
          }}
          userLocation={userLocation}
        />
      </section>
    </>
  )
}

export default Coverage