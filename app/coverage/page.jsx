'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'
import CoverageModal from '@/components/modals/CoverageModal'
import SectionTitle from '@/components/shared/SectionTitle'
import { coverageAreas } from '@/helper/fake'
import PageBanner from '@/components/shared/PageBanner'
import { IoSearch } from "react-icons/io5"
import LabelInputContainer from '@/components/ui/LabelInputContainer'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const Coverage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [userLocation, setUserLocation] = useState(null)
  const [selectedDistrict, setSelectedDistrict] = useState("Dhaka")
  const [searchQuery, setSearchQuery] = useState("")

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

  // Filter areas based on search and selected district
  const filteredAreas = coverageAreas
    .find(district => district.district === selectedDistrict)?.area
    .filter(area => 
      area.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) || []

  return (
    <>
      <PageBanner
        bgClassName='bg-red-800'
        title='Our Coverage Area'
        subTitle='You check our reasonable and flexible pricing below.'
      />
      
      {/* search coverage area */}
      <section className="py-10 bg-gray-50 dark:bg-gray-800/50">
        <div className="customContainer">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              {/* District Select */}
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full md:w-1/3 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary"
              >
                {coverageAreas.map(district => (
                  <option key={district.district} value={district.district}>
                    {district.district}
                  </option>
                ))}
              </select>
              
              {/* Search Input */}
              {/* <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search area..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary"
                />
                <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              </div> */}
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
        </div>
      </section>

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
              title2={selectedDistrict}
              placeholder_title='Area'
              subTitle={<span>
                Experience high-speed internet coverage across {selectedDistrict}.<br /> 
                Check our service availability in your area.
              </span>}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAreas.map((location, index) => (
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
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {location.name}
                  </h3>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
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
    </>
  )
}

export default Coverage