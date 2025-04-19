"use client"
import SectionTitle from '../shared/SectionTitle'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { testimonialSplideOptions } from '@/lib/utils'
import MotionDiv from '../ui/motion/motionDiv'
import Image from 'next/image'

const TestimonialSection = ({ data }) => {
    if (!data) {
        return null;
    }

    return (
        <section className='md:py-20 py-10'>
            <div className='customContainer'>
                <SectionTitle
                    title="What Our"
                    title2="Customers Say"
                    subTitle="Read testimonials from our satisfied customers"
                />
                <div className="mt-10">
                    <Splide options={testimonialSplideOptions}>
                        {data.map((testimonial, index) => (
                            <SplideSlide key={testimonial.id}>
                                <MotionDiv
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-card"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                            <Image
                                                src={testimonial.thumbnailUrl}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">{testimonial.name}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.designation}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300">{testimonial.testimonial}</p>
                                </MotionDiv>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection
