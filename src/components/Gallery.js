import React from 'react';
import Lightbox from 'react-images';
import './Gallery.css';

const data = [
  {
    key: 1,
    img: './img/imgGallery/100_0672.png',
    section: 'featured'
  }, {
    key: 2,
    img: './img/imgGallery/100_0745.png',
    section: 'games'
  }, {
    key: 3,
    img: './img/imgGallery/100_0812.png',
    section: 'toys'
  }, {
    key: 4,
    img: './img/imgGallery/100_0766.png',
    section: 'featured'
  }, {
    key: 5,
    img: './img/imgGallery/100_0718.png',
    section: 'games'
  }, {
    key: 6,
    img: './img/imgGallery/100_0721.png',
    section: 'toys'
  }, {
    key: 7,
    img: './img/imgGallery/100_0714.png',
    section: 'games'
  }, {
    key: 8,
    img: './img/imgGallery/100_0729.png',
    section: 'toys'
  },
];

class Shot extends React.Component {
  constructor(props) {
    super(props);

  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    const { img } = this.props.info;

    console.log('props', this.props.info.key);

    /*const listItemsGal = data.map((img, index) =>
      <img key={index} src={img} alt="images gallery" onClick={this.openLightbox.bind(this,index)}/>
    );*/

    return (
      <div className="images_gallery_slot">
        <img src={img} alt="images gallery"/>
      </div>
    );
  }
}

class Shots extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  filterList = (filter) => {
    return data.filter(function(d) {
      if(filter === 'all') return true;
      return d.section === filter;
    })
  }

  render() {
    const { filter } = this.props;

    const newList = this.filterList(filter);

    return (
        <div className="images_gallery">
            {newList.map(function(d, index) {
              return (
                <Shot
                  key={index}
                  info={d}
                  onClick={openLightbox(index)}
                />
              );
            })}
            <Lightbox images={data}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
        </div>
    );
  }
}

class GalleryTabs extends React.Component {
  constructor() {
    super();

    this.state = {
      shots: data,
      filter: 'all'
    }
  }

  filterShots = (filter) => {
    this.setState({
      filter
    });
  }

  render() {
    return (
      <div className="section_bg_color">
        <div className="container">
          <div className="tabs">
            <p className={this.state.filter === 'all' ? 'tabs_selected' : ''} onClick={() => { this.filterShots('all') }}>all photos</p>
            <p className={this.state.filter === 'featured' ? 'tabs_selected' : ''} onClick={() => { this.filterShots('featured') }}>featured</p>
            <p className={this.state.filter === 'games' ? 'tabs_selected' : ''} onClick={() => { this.filterShots('games') }}>games</p>
            <p className={this.state.filter === 'toys' ? 'tabs_selected' : ''} onClick={() => { this.filterShots('toys') }}>toys</p>
          </div>
          <Shots filter={this.state.filter} />
        </div>
      </div>
    );
  }
}


export default GalleryTabs;
