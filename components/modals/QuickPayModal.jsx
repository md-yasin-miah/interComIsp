"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Button from '@/components/shared/Button'
import { Input } from '@/components/ui/input'
import LabelInputContainer from '@/components/ui/LabelInputContainer'

const QuickPayModal = ({ isOpen, onClose }) => {
    const [customerId, setCustomerId] = useState('')

    const handlePayNow = () => {
        if (!customerId.trim()) {
            alert('Please enter your Customer ID')
            return
        }
        // Handle payment logic here
        console.log('Processing payment for customer:', customerId)
        // You can add your payment processing logic here
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
                        className="relative w-[90%] max-w-md bg-white dark:bg-slate-800 rounded-2xl p-6 z-50 mx-auto shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors"
                        >
                            <IoClose className="text-xl text-gray-600 dark:text-gray-300" />
                        </button>

                        {/* Modal Content */}
                        <div className="text-center">
                            {/* Icon */}
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                                    <Icon icon="mdi:credit-card-outline" className="text-3xl text-blue-600 dark:text-blue-400" />
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Quick Pay
                            </h2>

                            {/* Customer ID Input */}
                            <div className="mb-6 text-left">
                                <LabelInputContainer>
                                    <label
                                        htmlFor="customerId"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Customer ID
                                    </label>
                                    <Input
                                        type="text"
                                        id="customerId"
                                        value={customerId}
                                        onChange={(e) => setCustomerId(e.target.value)}
                                        placeholder="Ex: 123456"
                                        icon={<Icon icon="mdi:account-outline" />}
                                    />
                                </LabelInputContainer>
                            </div>

                            {/* Pay Now Button */}
                            <div className="mb-6">
                                <Button
                                    onClick={handlePayNow}
                                    className="!w-full justify-center"
                                    icon={<Icon icon="mdi:arrow-right" />}
                                    iconPosition="end"
                                    type="fill"
                                    size="default"
                                >
                                    Pay Now
                                </Button>
                            </div>

                            {/* Payment Methods */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-600">
                                {/* bKash */}
                                <Image src="/paybill/bkash.png" alt="bKash" width={100} height={100} />
                                <Image src="/paybill/ssl.png" alt="ssl" width={100} height={100} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default QuickPayModal
