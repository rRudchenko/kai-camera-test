import React, { Component } from 'react';

class Menu extends Component {
  render() {
    let menus = [
      "subsribe",
      "donate",
      "about kai.camera"
    ]
    return <div className="menu">
      {menus.map((value, index)=>{
        return <Link key={index} label={value} />
      })}
    </div>
  }
}

class Link extends Component {
  render(){
    const url = "/" + this.props.label.toLowerCase().trim().replace(" ");
    return <a href={url} className="menu_link">{this.props.label}</a>

  }

}

export default Menu;
