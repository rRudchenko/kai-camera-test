import React, { Component } from 'react';

class Tabs extends Component {
        constructor() {
            super()
            this.state = {tabIndex: 0}
        }
        render() {
            return (
                <div id="tb">
                    <ul role="tablist">
                        <li  role="presentation" onClick={() => this.setState({tabIndex: 0})}>a</li>
                        <li  role="presentation" onClick={() => this.setState({tabIndex: 1})}>s</li>
                        <li  role="presentation" onClick={() => this.setState({tabIndex: 2})}>f</li>
                    </ul>
                    <section className='tabs-content'>
                      {
                        [
                          <article>1</article>,
                          <article>2</article>,
                          <article>3</article>
                        ]
                        [this.state.tabIndex]
                      }
                    </section>
                </div>
            );
        }
    }

  export default Tabs;
  class Gallery extends Component {
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
                return <p key={index} className="tabs_title">{value}</p>
              })}
            </div>
          </div>
        </div>
      );
    }
  }
  <img src="img/100_0672.png" alt="alt" className="images_gallery_slot" />
  <img src="img/100_0745.png" alt="alt" className="images_gallery_slot" />
  <img src="img/100_0812.png" alt="alt" className="images_gallery_slot" />
  <img src="img/100_0766.png" alt="alt" className="images_gallery_slot" />
  <img src="img/100_0718.png" alt="alt" className="images_gallery_slot" />
  <img src="img/100_0721.png" alt="alt" className="images_gallery_slot" />
  <img src="img/100_0714.png" alt="alt" className="images_gallery_slot" />
  <img src="img/100_0729.png" alt="alt" className="images_gallery_slot" />


  class GalleryTabs extends Component {
    constructor() {
      super()
      this.state = {tabIndex: 0}
    }
    render() {
      return (
        <div className="section_bg_color">
          <div className="container">
              <ul role="tablist" className="tabs">
                  <li className="tabs_title tabs_title_active" role="presentation" onClick={() => this.setState({tabIndex: 0})}>all photos</li>
                  <li className="tabs_title" role="presentation" onClick={() => this.setState({tabIndex: 1})}>featured</li>
                  <li className="tabs_title" role="presentation" onClick={() => this.setState({tabIndex: 2})}>games</li>
                  <li className="tabs_title" role="presentation" onClick={() => this.setState({tabIndex: 3})}>toys</li>
              </ul>
              <section className='images_gallery'>
                {
                  [
                    <img src={images1} alt="alt" className="images_gallery_slot" />,
                    <img src={images2} alt="alt" className="images_gallery_slot" />,
                    <img src={images3} alt="alt" className="images_gallery_slot" />,
                    <img src={images4} alt="alt" className="images_gallery_slot" />
                  ]
                  [this.state.tabIndex]
                }
              </section>
          </div>
        </div>
      );
    }
  }
