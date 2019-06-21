import React from 'react'
import { withPrefix } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import T from 'prop-types'

export const Img = ({ src, ...props }) => {
  if (typeof src === 'object') {
    const { fluid, file, fixed, alt } = src
    if (file && file.url.endsWith('.svg')) {
      return <img src={file.url} alt={alt} {...props} />
    }
    if (fluid || fixed) {
      return (
        <GatsbyImage
          {...(fluid ? { fluid } : { fixed })}
          alt={alt}
          {...props}
        />
      )
    }
    console.log('Strange object src')
  }
  return <img src={withPrefix(src)} {...props} />
}
Img.propTypes = {
  src: T.oneOfType([T.object, T.string]).isRequired,
  alt: T.string,
  className: T.string,
  Tag: T.string,
}
