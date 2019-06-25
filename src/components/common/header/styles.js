import styled from 'styled-components'
import { Link } from '../link/Link'

export const HeaderContainer = styled.header`
  border-bottom: 1px solid #efefef;
  padding: 14px 10px;
`

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
  /* @media (max-width: 596px) {
    flex-direction: column;
    align-items: center;
  } */
`

export const HeaderMenu = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-end;
  @media (max-width: 596px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const LinkStyle = styled(Link)`
  display: inline-block;
  color: #4e4e4e;
  opacity: 0.6;
  font: 20px/50px 'Roboto';
  margin-left: 50px;
  text-transform: uppercase;
  text-decoration: none;
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    color: #f9c806;
  }
  @media only screen and (max-width: 768px) {
    display: block;
  }
`

export const MaterialIcon = styled.div`
  font-family: 'Material Icons';
  color: #4e4e4e;
  font-size: 60px;
  cursor: pointer;
`

export const Accordion = styled.button`
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
`

export const Panel = styled.div`
  /* border: 1px solid red; */
  position: relative;
  left: ${({ availWidth }) => -(availWidth - 170)}px;
  padding: 0 18px;
  background-color: white;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  overflow: hidden;
`
