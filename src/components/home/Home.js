import React from 'react'

import {
  MainContainer,
  HomeContainer,
  HomeImg,
  HomeText,
  HomeIcon,
} from './styles'

const HomeTitle = () => (
  <MainContainer>
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
  </MainContainer>
)

export default HomeTitle
