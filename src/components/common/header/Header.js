import React, { Component } from 'react'
import Menu from './Menu'
import { Img } from '..'

import { HeaderContainer, HeaderNav, LinkStyle } from './styles'

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderNav>
          <LinkStyle to='/'>
            <Img src='/icons/logo.svg' alt='Kai camera' />
          </LinkStyle>
          <Menu />
        </HeaderNav>
      </HeaderContainer>
    )
  }
}

export default Header
