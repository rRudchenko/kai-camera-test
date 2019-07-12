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
  background-size: 86px 74px;
  background-image: url('/icons/cameranew.png'), url('/icons/cameranew.png'),
    url('/icons/cameranew.png'), url('/icons/cameranew.png');
  background-position: left top, left 129px top 15px, left 0 top 37px,
    left 129px top 52px;
  background-repeat: repeat-x;
`

export const FooterText = styled.p`
  display: inline-block;
  font: 20px/20px 'Roboto', sans-serif;
  color: #fff;
`
