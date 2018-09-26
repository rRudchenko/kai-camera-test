import React, { Component } from 'react';

import './Gallery.css';
import images1 from '../img/100_0672.png';
import images2 from '../img/100_0745.png';
import images3 from '../img/100_0812.png';
import images4 from '../img/100_0766.png';
import images5 from '../img/100_0718.png';
import images6 from '../img/100_0721.png';
import images7 from '../img/100_0714.png';
import images8 from '../img/100_0729.png';

class GalleryTabs extends Component {
  render() {
    let tabs = [
      "all photos",
      "featured",
      "games",
      "toys"
    ]
    return (
      <div className="section_bg_color">
        <div className="container">
          <div className="tabs">
            {tabs.map((value, index)=>{
              return <p key={index} className="tabs_title tabs">{value}</p>
            })}
          </div>
          <div className="images_gallery">
            <img src={images1} alt="alt" className="images_gallery_slot" />
            <img src={images2} alt="alt" className="images_gallery_slot" />
            <img src={images3} alt="alt" className="images_gallery_slot" />
            <img src={images4} alt="alt" className="images_gallery_slot" />
            <img src={images5} alt="alt" className="images_gallery_slot" />
            <img src={images6} alt="alt" className="images_gallery_slot" />
            <img src={images7} alt="alt" className="images_gallery_slot" />
            <img src={images8} alt="alt" className="images_gallery_slot" />
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryTabs;
