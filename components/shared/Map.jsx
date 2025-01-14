'use client'
import React from 'react'

const Map = () => {
  return (
    <div className="bg-white dark:bg-black border border-transparent dark:border-white/[0.2] rounded-xl shadow-card p-8 h-full">
      <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5838137917995!2d90.36200437426037!3d23.79783028695588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1d4546af949%3A0x77f06677d686037d!2sNetcom%20Internet!5e0!3m2!1sen!2sbd!4v1736852867399!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

export default Map 