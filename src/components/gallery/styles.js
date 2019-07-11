import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'

export const MainContainer = styled.section`
  background: #fafafa;
  width: 100%;
`

export const TabsContainer = styled.section`
  max-width: 935px;
  margin: 0 auto 10px auto;
  height: fit-content;
  border-bottom: 1px solid darkgrey;
`

export const TabItem = styled.span`
  font: 20px/50px 'Ubuntu', sans-serif;
  margin-left: 10px;
  color: #4e4e4e;
  opacity: 0.6;
  text-decoration: none;
  transition: color 0.5s;
  /* &.active {
  font-weight: 500;
  } */
  &:hover {
    color: #f9c806;
  }
  &:not(:first-child) {
    margin-left: 28px;
  }
`

export const ShotsList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 960px;
  margin: 0 auto;
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
  min-width: 70%;
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
  /* background: #e5e5e5; */
  display: ${props => (props.showLightBox ? 'flex' : 'none')};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  box-sizing: border-box;
  cursor: pointer;
  width: 15%;
  height: 100%;
  visibility: ${props => (props.disabled === true ? 'hidden' : 'visible')};
  img {
    min-width: 30px;
    max-width: 50px;
  }
`

export const Close = styled.div`
  color: #f9c806;
  width: 20px;
  height: auto;
  position: absolute;
  /* top: 10px; */
  right: 20px;
  z-index: 1900;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MaterialIcon = styled.div`
  font-family: 'Material Icons', sans-serif;
  color: #f9c806;
  font-size: 60px;
`
