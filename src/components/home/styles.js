import styled from 'styled-components'
import { Img } from '../common'

export const HomeContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 10px;
  background: #e5e5e5;
  /* @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: center;
  } */
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
  font: 25px/35px 'Roboto';
  color: #4e4e4e;
  /* @media (max-width: 480px) {
    text-align: center;
  } */
`
