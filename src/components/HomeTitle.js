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
              <h2 className="h2 h2_img"><span className="h2_imgText">Welcome to my photoblog!</span>
                <img src="./img/smille.svg" alt="smille"/>
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeTitle;
