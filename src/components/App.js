import React from 'react'
import Home from './home/Home'
import Gallery from './gallery/Gallery'

export default ({ data }) => (
  <>
    <Home />
    <Gallery data={data} />
  </>
)
