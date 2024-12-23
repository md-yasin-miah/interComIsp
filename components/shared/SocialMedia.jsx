import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const socialLinks = [
  { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
]

const SocialMedia = () => {
  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map((social, index) => {
        const Icon = social.icon
        return (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary transition-colors"
            aria-label={social.label}
          >
            <Icon className="w-8 h-8" />
          </a>
        )
      })}
    </div>
  )
}

export default SocialMedia 