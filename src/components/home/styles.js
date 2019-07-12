import styled from 'styled-components'
import { Img } from '../common'

export const MainContainer = styled.section`
  background: #fafafa;
  box-sizing: border-box;
  width: 100%;
`

export const HomeContainer = styled.section`
  display: flex;
  align-items: center;
  max-width: 935px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 10px;
  @media (max-width: 596px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const HomeImg = styled(Img)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
`

export const HomeIcon = styled(Img)`
  border-radius: 50%;
  margin-left: 10px;
`

export const HomeText = styled.p`
  font: 25px/35px 'Roboto', sans-serif;
  color: #4e4e4e;
  @media (max-width: 596px) {
    text-align: center;
  }
`
