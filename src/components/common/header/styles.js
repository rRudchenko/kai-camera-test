import styled from 'styled-components'
import { Link } from '../link/Link'

export const HeaderContainer = styled.header`
  padding: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const LinkStyle = styled(Link)`
  display: inline-block;
  color: #4e4e4e;
  opacity: 0.6;
  font: 20px/50px 'Roboto', sans-serif;
  margin-right: 50px;
  text-transform: uppercase;
  text-decoration: none;
  /* &:first-child {
    margin-right: 0;
  } */
  &:hover {
    color: #f9c806;
  }
  @media (max-width: 596px) {
    display: block;
  }
`

export const BurgerLink = styled(LinkStyle)`
  margin-right: 0;
`

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (max-width: 596px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const MaterialIcon = styled.div`
  font-family: 'Material Icons', sans-serif;
  color: #4e4e4e;
  font-size: 60px;
  cursor: pointer;
`

export const Accordion = styled.a`
  background-color: #eeeeee;
  color: #444;
  min-width: 80px;
  min-height: 60px;
  width: 100%;
  height: auto;
  text-align: center;
  border: none;
`

export const Panel = styled.div`
  width: auto;
  position: relative;
  left: ${({ availWidth }) => -(availWidth - 170)}px;
  padding: 0 5px;
  background-color: white;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`
