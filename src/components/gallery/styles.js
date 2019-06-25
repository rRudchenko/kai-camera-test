import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'

export const ShotsList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 5px;
`

export const ShotContainer = styled.div`
  width: 300px;
  height: 300px;
  margin: 5px;
  cursor: pointer;
  object-fit: contain;
  object-position: 50% 50%;
`

export const ShotImage = styled(Img)`
  margin: auto;
  width: auto;
  height: 100%;
  max-width: ${props => props.fluid.presentationWidth};
  max-height: ${props => props.fluid.presentationHeight};
  min-width: 90%;
  min-height: 100%;
`

export const LightboxContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: auto;
  width: 100%;
  height: 100%;
`

export const LightboxModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`

export const Arrow = styled.div`
  background: #e5e5e5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 5%;
  height: 100%;
  visibility: ${props => (props.disabled === true ? 'hidden' : 'visible')};
`

export const Close = styled.div`
  /* background: #e5e5e5; */
  color: #f9c806;
  width: 20px;
  height: auto;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MaterialIcon = styled.div`
  font-family: 'Material Icons';
  color: #f9c806;
  font-size: 60px;
`
