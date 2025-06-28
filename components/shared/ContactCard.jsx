import React from 'react'

const ContactCard = ({ className, icon: Icon, title, items }) => {
  return (
    <div className={`bg-white h-full dark:bg-slate-700 p-6 rounded-xl shadow-card hover:shadow-cardHover transition-all duration-300 text-center ${className}`}>
      <div className="flex justify-center mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="space-y-2">
        {items?.map((item, index) => (
          <p key={index} className="text-gray-600 dark:text-white/[0.7]">{item}</p>
        ))}
      </div>
    </div>
  )
}

export default ContactCard 