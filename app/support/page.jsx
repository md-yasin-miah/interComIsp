import React from 'react'
import SectionTitle from '@/components/shared/SectionTitle'
import ContactCard from '@/components/shared/ContactCard'
import ContactForm from '@/components/shared/ContactForm'
import SocialMedia from '@/components/shared/SocialMedia'
import Map from '@/components/shared/Map'
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'

const contactInfo = [
  {
    icon: HiOutlinePhone,
    title: "Phone Numbers",
    items: [
      "+1 (555) 123-4567",
      "+1 (555) 987-6543"
    ]
  },
  {
    icon: HiOutlineMail,
    title: "Email Addresses",
    items: [
      "support@isp.com",
      "sales@isp.com"
    ]
  },
  {
    icon: HiOutlineLocationMarker,
    title: "Office Address",
    items: [
      "123 Internet Street",
      "Tech City, TC 12345"
    ]
  }
]

const Support = () => {
  return (
    <div className="pt-10 pb-20">
      <div className="customContainer">
        <SectionTitle
          title="Support"
          title2="Contact Us"
          placeholder_title="Support"
          subTitle="We're here to help! Reach out to us through any of these channels."
        />

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {contactInfo.map((info, index) => (
            <ContactCard key={index} {...info} />
          ))}
        </div>

        {/* Contact Form and Map Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <Map />
        </div>

        {/* Social Media Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-center mb-8">Connect With Us</h2>
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}

export default Support