"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { Button } from '../ui/moving-border';

const LeadCaptureForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Here you would integrate with your CRM
            // await axios.post('/api/leads', formData);
            console.log('Form submitted:', formData);
            setSuccess(true);
            setFormData({ name: '', email: '', phone: '', location: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative py-8 bg-gradient-to-r from-background2 to-background3 dark:from-gray-900 dark:to-gray-800">
            <div className="customContainer">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Get Started with NetCom Today!
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Fill out the form below and our team will contact you shortly
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name Input */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaRegUser className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary dark:bg-gray-700 dark:text-white transition-colors duration-300"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MdOutlineEmail className="text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Email Address"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary dark:bg-gray-700 dark:text-white transition-colors duration-300"
                                />
                            </div>

                            {/* Phone Input */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiPhone className="text-gray-400" />
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Phone Number"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary dark:bg-gray-700 dark:text-white transition-colors duration-300"
                                />
                            </div>

                            {/* Location Input */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <IoLocationOutline className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Location"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary dark:bg-gray-700 dark:text-white transition-colors duration-300"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                        <Button>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={loading}
                                className={`w-full md:w-auto px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold 
                                    ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'} 
                                    transition-all duration-300`}
                                    >
                                {loading ? 'Submitting...' : 'Get Started'}
                            </motion.button>
                                </Button>
                        </div>
                    </form>
                    {/* Success Message */}
                    {success && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg text-center"
                        >
                            Thank you! We'll contact you soon.
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    )
}

export default LeadCaptureForm
