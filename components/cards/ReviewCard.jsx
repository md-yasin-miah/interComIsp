import React from 'react'
import Rating from '../shared/Rating';
import Image from 'next/image';

const ReviewCard = ({ review }) => {
    return (
        <div
            className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 min-h-[250px] flex flex-col h-full"
        >
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    {review?.client_image_url ? (
                        <Image src={review?.client_image_url} alt={review?.name} width={48} height={48} className="rounded-full" />
                    ) : (
                        <span className="text-xl font-semibold text-blue-600">
                            {review?.name?.charAt(0)}
                        </span>
                    )}
                </div>
                <div>
                    <h3 className="font-semibold">{review?.name}</h3>
                    <Rating rating={review?.rating} />
                </div>
            </div>
            <div className='flex flex-col gap-2 justify-between h-full'>
                <p className="text-gray-600 dark:text-white/[0.5] mb-3 ellipsis-4">{review?.review}</p>
                {review?.review_date &&
                    <span className="text-sm text-gray-500 dark:text-white/[0.5]">
                        {
                            new Date(review?.review_date)?.toLocaleDateString(
                                'en-US',
                                { month: 'long', day: 'numeric', year: 'numeric' }
                            )
                        }
                    </span>
                }
            </div>
        </div>
    )
}

export default ReviewCard