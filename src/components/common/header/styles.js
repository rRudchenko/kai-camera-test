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
  @media (max-width: 596px) {
    flex-direction: column;
    align-items: center;
  }
`

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: flex-end;
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
