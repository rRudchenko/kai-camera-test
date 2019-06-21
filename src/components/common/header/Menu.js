import React, { Component } from 'react'
import { LinkStyle, HeaderMenu } from './styles'

class Menu extends Component {
  render() {
    let menus = ['subscribe', 'donate', 'about']
    return (
      <HeaderMenu>
        {menus.map((value, index) => {
          const url = `/${value}`
          return (
            <LinkStyle key={index} to={url}>
              {value}
            </LinkStyle>
          )
        })}
      </HeaderMenu>
    )
  }
}

export default Menu
