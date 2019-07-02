import React, { Component } from 'react'
import {
  LinkStyle, HeaderMenu, MaterialIcon, Accordion, Panel,
} from './styles'

class Menu extends Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }))
  }

  getHeaderMenu = () => {
    const menus = ['subscribe', 'donate', 'about']
    if (window.innerWidth < 596) {
      return (
        <>
          <Accordion onClick={this.toggle}>
            <MaterialIcon>dehaze</MaterialIcon>
          </Accordion>
          {menus.map((value, index) => (
            <Panel
              availWidth={window.innerWidth}
              isOpen={this.state.isOpen}
              key={index}
            >
              <LinkStyle key={index} to={`/${value}`}>
                {value}
              </LinkStyle>
            </Panel>
          ))}
        </>
      )
    }
    return menus.map((value, index) => (
      <LinkStyle key={index} to={`/${value}`}>
        {value}
      </LinkStyle>
    ))
  }

  render() {
    return <HeaderMenu>{this.getHeaderMenu()}</HeaderMenu>
  }
}

export default Menu
