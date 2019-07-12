import React from 'react'
import {
  MainContainer,
  FooterContainer,
  Cameras,
  TextContainer,
  FooterText,
} from './styles'

const Footer = () => (
  <MainContainer>
    <Cameras />
    <FooterContainer>
      <TextContainer>
        <FooterText>&copy; kai.camera, 2018</FooterText>
      </TextContainer>
    </FooterContainer>
  </MainContainer>
)

export default Footer
