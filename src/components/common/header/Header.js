import React from 'react'
import Menu from './Menu'
import { Img } from '..'

import { HeaderContainer, HeaderNav, LinkStyle } from './styles'

const Header = () => (
  <HeaderContainer>
    <HeaderNav>
      <LinkStyle to='/'>
        <Img src='/icons/logo.svg' alt='Kai camera' />
      </LinkStyle>
      <Menu />
    </HeaderNav>
  </HeaderContainer>
)

export default Header
