import React from 'react'
import { Shots } from './Shots'
// import { Img } from 'gatsby-image'

export default ({ data }) => (
  <>
    <Shots
      data={data.allImageSharp.edges.map((image, index) => ({
        fluid: image.node.fluid,
      }))}
    />
  </>
)
