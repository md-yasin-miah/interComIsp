"use client"
import { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import LabelInputContainer from '../ui/LabelInputContainer';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import Button from '../shared/Button';
import { APIContext } from '@/contexts/APIContext';

const LeadCaptureForm = () => {
    const { connectionRequest } = useContext(APIContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
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
            if (!formData.name || !formData.email || !formData.phone || !formData.address) {
                throw new Error('Please fill in all fields');
            }
            // post connection request data
            connectionRequest.create(formData);

            setSuccess(true);
            setFormData({ name: '', email: '', phone: '', address: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            // You might want to add error state handling here
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative md:py-20 py-10 bg-background3 dark:bg-black">
            <div className="customContainer">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto bg-white dark:bg-black rounded-2xl shadow-lg p-6 md:p-8 border border-transparent dark:border-white/[0.2]"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Get Started with Netcom Today!
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
                                <Label htmlFor="address">address</Label>
                                <Input
                                    id="address"
                                    placeholder="dhaka, BD"
                                    type="text"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </LabelInputContainer>
                        </div>
                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <Button
                                buttonType="submit"
                                disabled={loading}
                                className={`
                                    ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'} 
                                    transition-all duration-300
                                `}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {loading ? 'Submitting...' : 'Get Started'}
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
