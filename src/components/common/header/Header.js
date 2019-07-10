import React from 'react'
import NavMenu from './NavMenu'
import { Img } from '..'

import { HeaderContainer, LinkStyle } from './styles'

const Header = () => (
  <div className='all'>
    <NavMenu />
    <HeaderContainer id='header-container'>
      <LinkStyle to='/'>
        <Img src='/icons/logo.svg' alt='Kai camera' />
      </LinkStyle>
    </HeaderContainer>
  </div>
)

export default Header
