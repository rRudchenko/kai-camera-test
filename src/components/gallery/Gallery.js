import React from 'react'
import { Shots } from './Shots'
// import { Img } from 'gatsby-image'

export default ({ data }) => (
  <>
    {/* <Img src='../static/img/100_0672.png' alt='zzzz' /> */}
    <Shots
      data={data.allImageSharp.edges.map((image, index) => ({
        fluid: image.node.fluid,
      }))}
    />
  </>
)
