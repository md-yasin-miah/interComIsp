import PropTypes from 'prop-types'
import Link from 'next/link'
import React from 'react'

const Button = ({
  children,
  href = '',
  icon = '',
  iconPosition = 'start',
  animation = 'outLine',
  type = 'fill',
  className = '',
  buttonType='button'
}) => {
  return (href?
    <Link className={`primaryBtn animate-${animation} ${type} ${className}`} href={href}>
      {iconPosition === 'start' && icon && <span>{icon}</span>}
      <span>{children}</span>
      {iconPosition === 'end' && icon && <span>{icon}</span>}
    </Link>
    :
    <button type={buttonType} className={`primaryBtn animate-${animation} ${type} ${className}`} href={href}>
      {iconPosition === 'start' && icon && <span>{icon}</span>}
      <span>{children}</span>
      {iconPosition === 'end' && icon && <span>{icon}</span>}
    </button>
  )
}

export default Button
// typography 
Button.propTypes = {
  children: PropTypes.node || PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['start', 'end']),
  animation: PropTypes.oneOf(['stepUp', 'fill']),
  type: PropTypes.oneOf(['fill', 'outLine']),
  buttonType: PropTypes.oneOf(['button','submit'])
}