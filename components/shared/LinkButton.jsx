import PropTypes from 'prop-types'
import Link from 'next/link'
import React from 'react'

const LinkButton = ({
  href = '',
  icon = '',
  iconPosition = 'start',
  animation = 'outLine',
  className = ''
}) => {
  return (
    <Link className={`primaryBtn ${animation} ${className}`} href={href}>
      {iconPosition === 'start' && <span>{icon}</span>}
      <span>Client Portal</span>
      {iconPosition === 'end' && <span>{icon}</span>}
    </Link>
  )
}

export default LinkButton
// typography 
LinkButton.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['start', 'end']),
  animation: PropTypes.oneOf(['outLine', 'stepUp'])
}
