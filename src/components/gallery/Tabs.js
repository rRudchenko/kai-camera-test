import React from 'react'
import { TabsContainer, TabItem } from './styles'

const filters = ['all', 'featured', 'games', 'toys']

export const Tabs = () => (
  <TabsContainer>
    {filters.map((filter, index) => (
      <TabItem key={index}>{filter}</TabItem>
    ))}
  </TabsContainer>
)
