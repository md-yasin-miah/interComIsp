'use client'
import SectionTitle from '@/components/shared/SectionTitle'
import { useState } from 'react'
import { motion } from 'framer-motion'
import LabelInputContainer from '@/components/ui/LabelInputContainer'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import PricingCard from '@/components/cards/PricingCard'
import { pricingData } from '@/helper/fake'
import PageBanner from '@/components/shared/PageBanner'

const Packages = () => {
  const [activeTab, setActiveTab] = useState('basic')
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
      if (!formData.name || !formData.email || !formData.phone || !formData.location) {
        throw new Error('Please fill in all fields');
      }
      console.log('Form submitted:', formData);
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', location: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderPricingCards = (plans) => (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8"
    >
      {plans.map((plan, index) => (
        <PricingCard plan={plan} key={index} />
      ))}
    </div>
  )

  const renderCorporateForm = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto bg-white dark:bg-slate-700 rounded-2xl shadow-card p-6 md:p-8"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Get Corporate Package
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Fill out the form below and our team will contact you shortly
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
            <Label htmlFor="location">Address</Label>
            <Input
              id="location"
              placeholder="dhaka, BD"
              type="text"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="col-span-1 md:col-span-2">
            <Label htmlFor="location">Apartment, suite, etc</Label>
            <Input
              id="apartment"
              placeholder="House 23, Flat- 201"
              type="text"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
        </div>
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className={`primaryBtn ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'} 
                transition-all duration-300`}
          >
            {loading ? 'Submitting...' : 'Get Started'}
          </motion.button>
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

  return (
    <>
    <PageBanner
        bgClassName='bg-red-800'
        title='Our Packages'
        subTitle='You check our reasonable and flexible pricing below.'
      />
    <section className='md:py-10 py-5'>
      <SectionTitle
        title="our"
        title2="Packages"
        subTitle="You check our reasonable and flexible pricing below"
      />

      <div className="customContainer">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center md:gap-4 gap-2 my-5 md:my-10">
          {['basic', 'standard', 'premium', 'corporate'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full capitalize transition-all ${activeTab === tab
                ? 'bg-gradient-to-r from-primary to-secondary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'basic' && renderPricingCards(pricingData.filter(item => item.type === 'basic'))}
          {activeTab === 'standard' && renderPricingCards(pricingData.filter(item => item.type === 'standard'))}
          {activeTab === 'premium' && renderPricingCards(pricingData.filter(item => item.type === 'premium'))}
          {activeTab === 'corporate' && renderCorporateForm()}
        </div>
      </div>
    </section>
    </>
  )
}

export default Packages