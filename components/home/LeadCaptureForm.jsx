"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import Button from '../shared/Button';
import LabelInputContainer from '../ui/LabelInputContainer';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

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
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Basic validation
            if (!formData.name || !formData.email || !formData.phone || !formData.location) {
                throw new Error('Please fill in all fields');
            }

            // Here you would integrate with your CRM
            // await axios.post('/api/leads', formData);
            console.log('Form submitted:', formData);
            setSuccess(true);
            setFormData({ name: '', email: '', phone: '', location: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            // You might want to add error state handling here
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative py-20 bg-gradient-to-r from-background2 to-background3 dark:from-gray-900 dark:to-gray-800">
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
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="name">Your name</Label>
                            <Input 
                                id="name"
                                placeholder="Tyler"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="email">Email</Label>
                            <Input 
                                id="email"
                                placeholder="abc@gmail.com"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </LabelInputContainer>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input 
                                id="phone"
                                placeholder="123-456-7890"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="location">Location</Label>
                            <Input 
                                id="location"
                                placeholder="dhaka, BD"
                                type="text"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                        </LabelInputContainer>
                    </div>
                        {/* Submit Button */}
                        <div className="flex justify-center">
                        <Button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={loading}
                                className={`
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
