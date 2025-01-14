"use client"
import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

const Rating = ({ rating, size = "default", showNumber = true }) => {
  if (!rating) return null;
  // Convert rating to number and ensure it's between 0.5 and 5
  const ratingValue = Math.min(Math.max(Number(rating), 0.5), 5)

  // Calculate full and half stars
  const fullStars = Math.floor(ratingValue)
  const hasHalfStar = ratingValue % 1 !== 0

  // Size variants
  const sizeClasses = {
    small: "w-3 h-3",
    default: "w-5 h-5",
    large: "w-6 h-6"
  }

  const starSize = sizeClasses[size] || sizeClasses.default

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(5)].map((_, index) => {
          // Render full star
          if (index < fullStars) {
            return (
              <span key={index}>
                <FaStar className={`${starSize} text-yellow-400`} />
              </span>
            )
          }
          // Render half star
          else if (index === fullStars && hasHalfStar) {
            return (
              <span key={index}>
                <FaStarHalfAlt className={`${starSize} text-yellow-400`} />
              </span>
            )
          }
          // Render empty star
          return (
            <span key={index}>
              <FaStar className={`${starSize} text-gray-300 dark:text-gray-600`} />
            </span>
          )
        })}
      </div>
      {showNumber && (
        <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
          ({ratingValue?.toFixed(1)})
        </span>
      )}
    </div>
  )
}

export default Rating