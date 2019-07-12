import React from 'react'
import { Shots } from './Shots'
import { Tabs } from './Tabs'
import { MainContainer } from './styles'

export default ({ data }) => (
  <MainContainer>
    <Tabs />
    <Shots
      data={data.allImageSharp.edges.map(image => ({
        fluid: image.node.fluid,
      }))}
    />
  </MainContainer>
)
