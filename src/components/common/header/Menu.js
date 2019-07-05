import React, { Component } from 'react'
import {
  LinkStyle, HeaderMenu, MaterialIcon, Accordion, Panel,
} from './styles'

class Menu extends Component {
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
    <LinkStyle key={index} to={`/${value}`}>
      {value}
    </LinkStyle>
  ))

  render() {
    if (this.state.windowWidth < 596) {
      return (
        <HeaderMenu>
          <Accordion onClick={this.toggle}>
            <MaterialIcon>dehaze</MaterialIcon>
          </Accordion>
          {['subscribe', 'donate', 'about'].map((value, index) => (
            <Panel
              availWidth={this.state.windowWidth}
              isOpen={this.state.isOpen}
              key={index}
            >
              <LinkStyle key={index} to={`/${value}`}>
                {value}
              </LinkStyle>
            </Panel>
          ))}
        </HeaderMenu>
      )
    }
    return <HeaderMenu>{this.getHeaderMenu()}</HeaderMenu>
  }
}

export default Menu
