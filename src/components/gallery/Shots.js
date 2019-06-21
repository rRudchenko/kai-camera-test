import React from 'react'
import { Img } from 'gatsby-image'
// import prevSVG from '../../../static/icons/arrow_previous.svg'
// import { Shot } from './_Shot'
import {
  PrevIcon,
  ShotContainer,
  ShotsList,
  HorizontalShotImage,
  VerticalShotImage,
  SquareShotImage,
  ShotImage,
  Button,
  LightboxModal,
  LightboxContent,
  Prev,
  Next,
  Controls,
  LeftRight,
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
    this.setState({
      showLightBox: !this.state.showLightBox,
      selectedImage: index,
    })
  }

  goPrev = () => {
    this.setState({
      selectedImage: this.state.selectedImage - 1,
    })
  }

  goNext = () => {
    this.setState({
      selectedImage: this.state.selectedImage + 1,
    })
  }

  closeLightBox = () => {
    this.setState({
      showLightBox: false,
    })
  }

  handleKeyUp = e => {
    e.preventDefault()
    const { keyCode } = e
    if (this.state.showLightBox) {
      if (keyCode === 37) {
        // Left Arrow Key Code
        if (this.state.selectedImage > 0) {
          this.setState({ selectedImage: this.state.selectedImage - 1 })
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key Code
        if (this.state.selectedImage < this.props.data.length - 1) {
          this.setState({ selectedImage: this.state.selectedImage + 1 })
        }
      }
      if (keyCode === 27) {
        // Escape key Code
        this.setState({ showLightBox: false })
      }
    }
  }

  getLightBoxImage = imgFluid => {
    if (imgFluid.presentationWidth > imgFluid.presentationHeight) {
      console.log(
        'WIDTH IS BIGGER',
        imgFluid.presentationWidth,
        imgFluid.presentationHeight
      )
      console.log('state', this.state.selectedImage)
      return (
        <HorizontalShotImage
          // id={imgFluid.id}
          fluid={imgFluid}
          alt='images gallery'
        />
      )
    } else if (imgFluid.presentationWidth < imgFluid.presentationHeight) {
      console.log(
        'HEIGHT IS BIGGER',
        imgFluid.presentationWidth,
        imgFluid.presentationHeight
      )
      console.log('state', this.state.selectedImage)
      return (
        <VerticalShotImage
          // id={imgFluid.id}
          fluid={imgFluid}
          alt='images gallery'
        />
      )
    } else {
      console.log(
        'WIDTH IS EQUAL HEIGHT',
        imgFluid.presentationWidth,
        imgFluid.presentationHeight
      )
      console.log('state', this.state.selectedImage)
      return (
        <SquareShotImage
          // id={imgFluid.id}
          fluid={imgFluid}
          alt='images gallery'
        />
      )
    }
  }

  render() {
    console.log('shots props data', this.props.data)
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

        <LightboxModal
          visible={showLightBox}
          // onClick={this.closeLightBox}
        >
          <LightboxContent onKeyUp={e => this.handleKeyUp(e)}>
            <Prev onClick={this.goPrev} disabled={selectedImage === 0}>
              {/* <PrevIcon src='/static/icons/arrow_next.svg' /> */}
            </Prev>
            {this.getLightBoxImage(data[selectedImage].fluid)}
            <Next
              onClick={this.goNext}
              disabled={selectedImage === data.length - 1}
            />
          </LightboxContent>
        </LightboxModal>
      </>
    )
  }
}
