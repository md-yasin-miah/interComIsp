'use client'
import React from 'react'

const Map = ({ url }) => {
  return (
    <div className="bg-white dark:bg-black border border-transparent dark:border-white/[0.2] rounded-xl shadow-card p-8 h-full">
      <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <iframe
          src={url}
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