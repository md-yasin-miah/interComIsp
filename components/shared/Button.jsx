import PropTypes from 'prop-types'
import Link from 'next/link'
import React from 'react'
import MotionButton from '../ui/motion/motionButton'

const sizeClasses = {
  small: '!px-4 !py-2 !text-sm',
  default: '!px-6 !py-3 !text-base',
  large: '!px-8 !py-4 !text-lg'
}

const Button = ({
  children,
  href = '',
  icon = '',
  iconPosition = 'start',
  animation = 'outLine',
  type = 'fill',
  size = 'default',
  className = '',
  buttonType = 'button',
  disabled = false,
  ...props
}) => {
  const sizeClass = sizeClasses[size] || sizeClasses.default;

  const buttonContent = (
    <>
      {iconPosition === 'start' && icon && (
        <span className={`
          ${size === 'small' ? 'text-base' : ''} 
          ${size === 'large' ? 'text-xl' : ''}
        `}>
          {icon}
        </span>
      )}
      <span>{children}</span>
      {iconPosition === 'end' && icon && (
        <span className={`
          ${size === 'small' ? 'text-base' : ''} 
          ${size === 'large' ? 'text-xl' : ''}
        `}>
          {icon}
        </span>
      )}
    </>
  )

  return (href ?
    <Link
      className={`primaryBtn animate-${animation} ${type} ${sizeClass} ${className}`}
      href={href}
      {...props}
    >
      {buttonContent}
    </Link>
    :
    <MotionButton
      type={buttonType}
      disabled={disabled}
      className={`primaryBtn animate-${animation} ${type} ${sizeClass} ${className}`}
      {...props}
    >
      {buttonContent}
    </MotionButton>
  )
}

Button.propTypes = {
  children: PropTypes.node || PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['start', 'end']),
  animation: PropTypes.oneOf(['stepUp', 'fill']),
  type: PropTypes.oneOf(['fill', 'outLine']),
  size: PropTypes.oneOf(['small', 'default', 'large']),
  buttonType: PropTypes.oneOf(['button', 'submit']),
  whileHover: PropTypes.object,
  whileTap: PropTypes.object,
}

export default Button
