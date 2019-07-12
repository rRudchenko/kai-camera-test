import styled from 'styled-components'

export const MainContainer = styled.section`
  background: #fafafa;
  max-width: 100%;
`

export const FooterContainer = styled.footer`
  padding: 0;
  margin: 0;
  width: 100%;
  background: #f9c806;
`

export const TextContainer = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 935px;
  padding: 20px;
`

export const Cameras = styled.div`
  width: 100%;
  height: 100px;
  background-size: 100px 40px;
  -webkit-background-image: url('/icons/camera.svg'), url('/icons/camera.svg'),
    url('/icons/camera.svg'), url('/icons/camera.svg');
  -moz-background-image: url('/icons/camera.svg'), url('/icons/camera.svg'),
    url('/icons/camera.svg'), url('/icons/camera.svg');
  background-image: url('/icons/camera.svg'), url('/icons/camera.svg'),
    url('/icons/camera.svg'), url('/icons/camera.svg');
  -webkit-background-position: top 0 left 0, top 20px left 50px, top 40px left 0,
    top 60px left 50px;
  -moz-background-position: top 0 left 0, top 20px left 50px, top 40px left 0,
    top 60px left 50px;
  background-position: top 0 left 0, top 20px left 50px, top 40px left 0,
    top 60px left 50px;
  -webkit-background-repeat: repeat-x;
  -moz-background-repeat: repeat-x;
  background-repeat: repeat-x;
`

export const FooterText = styled.p`
  display: inline-block;
  font: 20px/20px 'Roboto', sans-serif;
  color: #fff;
`
