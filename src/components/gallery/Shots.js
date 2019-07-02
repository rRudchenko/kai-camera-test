import React from 'react'
// import { Img } from '../common'

import {
  MaterialIcon,
  // PrevIcon,
  ShotContainer,
  ShotsList,
  ShotImage,
  LightboxModal,
  LightboxContent,
  Arrow,
  // ArrowIcon,
  Close,
  // Controls,
  // LeftRight,
} from './styles'

export class Shots extends React.Component {
  state = {
    showLightBox: false,
    selectedImage: 0,
  }

  componentDidMount = () => {
    window.addEventListener('keyup', this.handleKeyUp, false)
  }

  componentWillUnmount = () => {
    window.removeEventListener('keyup', this.handleKeyUp, false)
  }

  handleClick = (e, index) => {
    e.preventDefault()
    this.setState(state => ({
      showLightBox: !state.showLightBox,
      selectedImage: index,
    }))
  }

  goPrev = () => {
    this.setState(state => ({
      selectedImage: state.selectedImage - 1,
    }))
  }

  goNext = () => {
    this.setState(state => ({
      selectedImage: state.selectedImage + 1,
    }))
  }

  closeLightBox = () => {
    this.setState({
      showLightBox: false,
    })
  }

  handleKeyUp = (e) => {
    e.preventDefault()
    const { keyCode } = e
    if (this.state.showLightBox) {
      if (keyCode === 37) {
        // Left Arrow Key Code
        if (this.state.selectedImage > 0) {
          this.setState(state => ({ selectedImage: state.selectedImage - 1 }))
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key Code
        if (this.state.selectedImage < this.props.data.length - 1) {
          this.setState(state => ({ selectedImage: state.selectedImage + 1 }))
        }
      }
      if (keyCode === 27) {
        // Escape key Code
        this.setState({ showLightBox: false })
      }
    }
  }

  getLightBoxImage = imgFluid => (
    <ShotImage
      objectFit='contain'
      objectPosition='50% 50%'
      fluid={imgFluid}
      alt='images gallery'
    />
  )

  render() {
    const { data } = this.props
    const { showLightBox, selectedImage } = this.state

    return (
      <>
        <ShotsList>
          {data.map((img, i) => (
            <ShotContainer key={i} onClick={e => this.handleClick(e, i)}>
              <ShotImage fluid={img.fluid} alt='images gallery' />
            </ShotContainer>
          ))}
        </ShotsList>

        <LightboxModal visible={showLightBox}>
          <Close onClick={this.closeLightBox}>
            <MaterialIcon>clear</MaterialIcon>
          </Close>
          <LightboxContent onKeyUp={e => this.handleKeyUp(e)}>
            <Arrow onClick={this.goPrev} disabled={selectedImage === 0}>
              <img src='/icons/arrow_previous.png' alt='prev arrow' />
              {/* <MaterialIcon>keyboard_arrow_left</MaterialIcon> */}
            </Arrow>
            {this.getLightBoxImage(data[selectedImage].fluid)}
            <Arrow
              onClick={this.goNext}
              disabled={selectedImage === data.length - 1}
            >
              <img src='/icons/arrow_next.png' alt='next arrow' />
              {/* <MaterialIcon>keyboard_arrow_right</MaterialIcon> */}
            </Arrow>
          </LightboxContent>
        </LightboxModal>
      </>
    )
  }
}
