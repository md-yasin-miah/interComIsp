import PropTypes from 'prop-types'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const Button = ({
  children,
  href = '',
  icon = '',
  iconPosition = 'start',
  animation = 'outLine',
  type = 'fill',
  className = '',
  buttonType = 'button',
  disabled = false,
  ...props
}) => {
  return (href ?
    <Link className={`primaryBtn animate-${animation} ${type} ${className}`} href={href}>
      {iconPosition === 'start' && icon && <span>{icon}</span>}
      <span>{children}</span>
      {iconPosition === 'end' && icon && <span>{icon}</span>}
    </Link>
    :
    <motion.button
      type={buttonType}
      disabled={disabled}
      className={`primaryBtn animate-${animation} ${type} ${className}`}
      {...props}
    >
      {iconPosition === 'start' && icon && <span>{icon}</span>}
      <span>{children}</span>
      {iconPosition === 'end' && icon && <span>{icon}</span>}
    </motion.button>
  )
}

Button.propTypes = {
  children: PropTypes.node || PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['start', 'end']),
  animation: PropTypes.oneOf(['stepUp', 'fill']),
  type: PropTypes.oneOf(['fill', 'outLine']),
  buttonType: PropTypes.oneOf(['button', 'submit']),
  whileHover: PropTypes.object,
  whileTap: PropTypes.object,
}

export default Button
