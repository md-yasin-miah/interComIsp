import React from 'react'
import SectionTitle from '@/components/shared/SectionTitle'
import ContactCard from '@/components/shared/ContactCard'
import ContactForm from '@/components/shared/ContactForm'
import SocialMedia from '@/components/shared/SocialMedia'
import Map from '@/components/shared/Map'
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'
import PageBanner from '@/components/shared/PageBanner'

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
    icon: BsWhatsapp,
    title: "WhatsApp",
    items: [
      "+1 (555) 123-4567",
      "Click to chat now"
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

const operatingHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
  { day: "Sunday", hours: "10:00 AM - 2:00 PM" },
  { day: "Holidays", hours: "10:00 AM - 2:00 PM" }
]

const ConnectSection = ({
  banner,
  sectionTitle,
}) => {
  return (
    <>
      <PageBanner
        bgClassName='bg-secondary'
        title='24/7 Support'
        subTitle='We are here to help you with your needs.'
      />
      <div className="pt-10 pb-20">
        <div className="customContainer">
          <SectionTitle
            title="Support"
            title2="Contact Us"
            placeholder_title="Support"
            subTitle="We're here to help! Reach out to us through any of these channels."
          />

          {/* Operating Hours Section */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <HiOutlineClock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Operating Hours</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {operatingHours.map((schedule, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl"
                >
                  <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                    {schedule.day}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {schedule.hours}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-3">Connect With Us</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Follow us on social media for updates, tips, and special offers
              </p>
            </div>
            <SocialMedia />
          </div>

          {/* Emergency Support Notice */}
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-2xl text-center">
            <h3 className="text-xl font-semibold mb-2">24/7 Emergency Technical Support</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For urgent technical issues outside business hours, our emergency support team is available
            </p>
            <div className="font-semibold text-primary">
              Emergency Hotline: +1 (555) 999-9999
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConnectSection