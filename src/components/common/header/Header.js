import React from 'react'
import Menu from './Menu'
import { Img } from '..'

import { HeaderContainer, LinkStyle } from './styles'

const Header = () => (
  <HeaderContainer>
    <LinkStyle to='/'>
      <Img src='/icons/logo.svg' alt='Kai camera' />
    </LinkStyle>
    <Menu />
  </HeaderContainer>
)

export default Header
