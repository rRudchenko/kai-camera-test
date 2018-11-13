import React, { Component } from 'react';
import './HeaderComponent.css';
import Menu from './MenuComponent';
import MenuButton from './MenuButton';

class Header extends Component {
  render() {
    return(
      <header className="header">
        <div className="container header_nav">
          <a href="/" className="logo">
            <img src="./logo.svg" alt="Kai camera" />
          </a>
          <MenuButton/>
          <Menu />
        </div>
      </header>

    );
  }
}

export default Header;
