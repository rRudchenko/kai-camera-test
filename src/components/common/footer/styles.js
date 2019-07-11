import styled from 'styled-components'

export const MainContainer = styled.section`
  background: #fafafa;
  width: 100%;
`

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 0;
  margin: 0;
`

export const TextContainer = styled.div`
  background: #f9c806;
  padding: 20px;
`

export const Cameras = styled.div`
  width: 100%;
  height: 100px;
  background-size: 100px 40px;
  background-image: url('/icons/camera.svg'), url('/icons/camera.svg'),
    url('/icons/camera.svg'), url('/icons/camera.svg');
  background-position: top 0 left 0, top 20px left 50px, top 40px left 0,
    top 60px left 50px;
  background-repeat: repeat-x;
`

export const FooterText = styled.p`
  display: inline-block;
  font: 20px/20px 'Roboto', sans-serif;
  color: #fff;
`
