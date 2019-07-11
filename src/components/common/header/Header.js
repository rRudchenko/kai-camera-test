import React, { Component } from 'react'
import {
  HeaderU,
  Container,
  LogoStyle,
  LogoImage,
  Menu,
  LinkStyle,
  Burger,
} from './styles'

class Header extends Component {
  state = {
    isOpen: false,
  }

  toggleIsOpen = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }))
  }

  render() {
    return (
      <HeaderU isOpen={this.state.isOpen}>
        <Container>
          <LogoStyle to='/'>
            <LogoImage src='/icons/logo.svg' alt='Kai camera' />
          </LogoStyle>
          <Burger onClick={this.toggleIsOpen} isOpen={this.state.isOpen}>
            <span />
            <span />
            <span />
            <span />
          </Burger>
          <Menu onClick={this.toggleIsOpen} isOpen={this.state.isOpen}>
            <LinkStyle to='/subscribe/'>subscribe</LinkStyle>
            <LinkStyle to='/donate/'>donate</LinkStyle>
            <LinkStyle to='/about/'>about</LinkStyle>
          </Menu>
        </Container>
      </HeaderU>
    )
  }
}

export default Header
