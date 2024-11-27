import PropTypes from 'prop-types'
import Link from 'next/link'
import React from 'react'

const LinkButton = ({
  children,
  href = '',
  icon = '',
  iconPosition = 'start',
  animation = 'outLine',
  className = ''
}) => {
  return (
    <Link className={`primaryBtn ${animation} ${className}`} href={href}>
      {iconPosition === 'start' && <span>{icon}</span>}
      <span>{children}</span>
      {iconPosition === 'end' && <span>{icon}</span>}
    </Link>
  )
}

export default LinkButton
// typography 
LinkButton.propTypes = {
  children: PropTypes.node || PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['start', 'end']),
  animation: PropTypes.oneOf(['outLine', 'stepUp'])
}
