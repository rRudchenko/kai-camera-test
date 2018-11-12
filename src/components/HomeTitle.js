import React, { Component } from 'react';
import './HomeTitle.css';

class HomeTitle extends Component {
  render() {
    return(
      <div className="section_bg_color">
        <div className="container">
          <div className="section_title">
            <img src="./img/title_photo.svg" alt="welcome" className="section_title-img" />
            <div>
              <h2 className="h2">Hi!</h2>
              <h2 className="h2 h2_img">Welcome to my photoblog!
                <img src="./img/smille.svg" alt="smille" className="h2_images" />
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeTitle;
