import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'

export const ShotsList = styled.div`
  /* border: 1px dotted violet; */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 5px;
  /* width: auto; */
  /* @media (max-width: 768px) {
    justify-content: space-around;
  } */
`

export const ShotContainer = styled.div`
  border: 1px solid green;
  width: 300px;
  height: 300px;
  /* display: flex; */
  /* align-items: center; */
  margin: 5px;
  cursor: pointer;
`

export const ShotImage = styled(Img)`
  /* border: 1px solid blue; */
  object-fit: contain;
  object-position: 50% 50%;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: ${props => props.fluid.presentationWidth};
  max-height: ${props => props.fluid.presentationHeight};
`

export const HorizontalShotImage = styled(ShotImage)`
  width: auto;
  /* height: auto; */
  min-width: 70%;
  min-height: 100%;
  /* min-height: ${props =>
    props.fluid.presentationWidth * props.fluid.aspectRatio}; */
`

export const VerticalShotImage = styled(ShotImage)`
  width: auto;
  /* height: auto; */
  min-width: 30%;
  min-height: 100%;
`

export const SquareShotImage = styled(ShotImage)`
  width: auto;
  /* height: auto; */
  min-width: 50%;
  min-height: 100%;
`

export const LightboxContent = styled.div`
  border: 1px solid red;
  display: flex;
  flex-flow: row nowrap;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 99%;
  max-height: 99%;
`

export const LightboxModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  background: rgba(0, 0, 0, 0.7);
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`

// export const Button = styled.button``

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Prev = styled.div`
  background: #e5e5e5;
  width: 5%;
  height: 100%;
  visibility: ${props => (props.disabled === true ? 'hidden' : 'visible')};
`

export const PrevIcon = styled(Img)`
  width: 50px;
  height: 50px;
`

export const Next = styled.div`
  background: #e5e5e5;
  width: 5%;
  height: 100%;
  visibility: ${props => (props.disabled === true ? 'hidden' : 'visible')};
`
