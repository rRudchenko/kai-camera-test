import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'

import {
  HomeContainer, HomeImg, HomeText, HomeIcon,
} from './styles'

const HomeTitle = () => (
  <HomeContainer>
    <HomeImg src='/icons/title_photo.svg' alt='welcome' />
    <div>
      <HomeText>Hi!</HomeText>
      <HomeText>
        Welcome to my photoblog!
        <HomeIcon src='/icons/smille.svg' alt='smille' />
      </HomeText>
    </div>
  </HomeContainer>
)

export default HomeTitle
