"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import LabelInputContainer from '@/components/ui/LabelInputContainer'
import { Label } from '@/components/ui/label'
import { Input, Textarea } from '@/components/ui/input'
import MotionButton from '../ui/motion/motionButton'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
        throw new Error('Please fill in all fields')
      }
      console.log('Form submitted:', formData)
      setSuccess(true)
      setFormData({ name: '', companyName: '', email: '', phone: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-black border border-transparent dark:border-white/[0.2] rounded-2xl shadow-card p-6 md:p-8"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Fill out the form below and we'll get back to you shortly
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              placeholder="Your Company"
              type="text"
              value={formData.companyName}
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
        </div>

        <LabelInputContainer>
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            placeholder="How can we help you?"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Your message..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <div className="flex justify-center">
          <MotionButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className={`text-white px-8 py-3 rounded-full relative bg-gradient-to-r from-primary to-secondary group overflow-hidden
              ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'} 
              transition-all duration-300`}
          >
            <span className="relative z-10">{loading ? 'Sending...' : 'Send Message'}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
          </MotionButton>
        </div>
      </form>

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
  )
}

export default ContactForm 