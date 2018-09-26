import React, { Component } from 'react';
import './HomeTitle.css';
import img_welcome from '../img/title_photo.svg';
import img_smille from '../img/smille.svg';

class HomeTitle extends Component {
  render() {
    return(
      <div className="section_bg_color">
        <div className="container">
          <div className="section_title">
            <img src={img_welcome} alt="welcome" className="section_title-img" />
            <div>
              <h2 className="h2">Hi!</h2>
              <h2 className="h2">Welcome to my photoblog!
                <img src={img_smille} alt="smille" />
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeTitle;
