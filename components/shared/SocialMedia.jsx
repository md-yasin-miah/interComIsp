import { getSocialIcon } from '@/helper/functions'
import React from 'react'

const SocialMedia = ({ socialLinks }) => {
  return (
    <div className="flex justify-center space-x-6">
      {socialLinks?.map((social, index) => {
        const Icon = getSocialIcon(social?.name)
        return (
          <a
            key={index}
            href={social?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary transition-colors"
            aria-label={social?.name}
          >
            <Icon className="w-8 h-8" />
          </a>
        )
      })}
    </div>
  )
}

export default SocialMedia 