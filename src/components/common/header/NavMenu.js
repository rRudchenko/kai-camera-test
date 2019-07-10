import React, { Component } from 'react'
import { pushRotate as Menu } from 'react-burger-menu'
import {
  LinkStyle,
  BurgerLink,
  HeaderMenu,
  MaterialIcon,
  Accordion,
  Panel,
} from './styles'

import './navmenu.css'

class NavMenu extends Component {
  state = {
    isOpen: false,
    windowWidth: null,
  }

  componentDidMount() {
    this.setState({
      windowWidth: window.innerWidth,
    })
  }

  toggle = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }))
  }

  getHeaderMenu = () => ['subscribe', 'donate', 'about'].map((value, index) => (
    <LinkStyle key={index} id={value} to={`/${value}`}>
      {value}
    </LinkStyle>
  ))

  render() {
    if (this.state.windowWidth < 596) {
      return (
        <HeaderMenu>
          <Menu
            pageWrapId='header-container'
            right
            customBurgerIcon={<MaterialIcon>menu</MaterialIcon>}
            customCrossIcon={<MaterialIcon>clear</MaterialIcon>}
            width='150px'
            onStateChange={this.toggle}
            {...this.props}
          >
            {['subscribe', 'donate', 'about'].map((value, index) => (
              <BurgerLink
                key={index}
                className='menu-item'
                id={value}
                to={`/${value}`}
              >
                {value}
              </BurgerLink>
            ))}
          </Menu>
        </HeaderMenu>
      )
    }
    return <HeaderMenu>{this.getHeaderMenu()}</HeaderMenu>
  }
}

export default NavMenu
