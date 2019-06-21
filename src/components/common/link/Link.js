import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { string } from 'prop-types'
import { isExternal } from '../../../services/helpers'

export const Link = ({
  to,
  activeClassName,
  partiallyActive,
  children,
  ...props
}) =>
  isExternal(to) ? (
    <a href={to} {...props}>
      {children}
    </a>
  ) : (
    <GatsbyLink
      activeClassName={activeClassName}
      partiallyActive={partiallyActive}
      to={to}
      {...props}
    >
      {children}
    </GatsbyLink>
  )
Link.propTypes = {
  to: string.isRequired,
}
