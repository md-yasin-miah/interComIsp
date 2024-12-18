import React from 'react'
import { IoStar } from "react-icons/io5";
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({review}) => {
  return (
    <div 
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 min-h-[250px]"
    >
    <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
            <span className="text-xl font-semibold text-blue-600">
                {review.name.charAt(0)}
            </span>
        </div>
        <div>
            <h3 className="font-semibold">{review.name}</h3>
            <div className="flex text-yellow-400">
                {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                ))}
            </div>
        </div>
    </div>
    <p className="text-gray-600 mb-3 ellipsis-4">{review.text}</p>
    <span className="text-sm text-gray-500">{review.date}</span>
</div>
  )
}

export default ReviewCard