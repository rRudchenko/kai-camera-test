import styled, { css } from 'styled-components'
import { Link } from '../link/Link'
import { Img } from '../img/Img'

export const HeaderU = styled.header`
  background: #ffffff;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
`
export const Container = styled.div`
  box-sizing: border-box;
  max-width: 935px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  z-index: 100;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`
export const LogoStyle = styled(Link)`
  z-index: ${({ isOpen }) => (isOpen ? '100' : '10')};
  display: block;
  text-decoration: none;
  line-height: 1;
`
export const LogoImage = styled(Img)`
  display: inline-block;
  width: auto;
  height: 100%;
  max-height: 46px;
  margin-bottom: -2px;
`

export const Menu = styled.div`
  top: ${({ isOpen }) => (isOpen ? '80px' : '-160px')};
  display: block;
  left: 0;
  height: max-content;
  transition: top 1s;
  @media (max-width: 992px) {
    position: absolute;
    width: 100%;
    background: #ffffff;
    text-align: center;
  }
  ${p => p.isOpen
    && css`
      top: 80px;
      left: 0;
      background: #ffffff;
      width: 100%;
      height: max-content;
      text-align: center;
      box-sizing: border-box;
      padding: 10px 20px 10px 0;
      transition: all 1s;
    `}
`

export const Burger = styled.div`
  z-index: 100;
  width: 30px;
  height: 22px;
  display: none;
  transform: rotate(0);
  transition: 0.3s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #f9c806;
    opacity: 1;
    left: 0;
    transform: rotate(0);
    transition: all 0.3s ease-in-out;
  }
  span:nth-child(1) {
    top: 0;
  }
  span:nth-child(2),
  span:nth-child(3) {
    top: 10px;
  }
  span:nth-child(4) {
    top: 20px;
  }

  ${p => p.isOpen
    && css`
      span:nth-child(1),
      span:nth-child(4) {
        top: 10px;
        width: 0;
        left: 50%;
      }
      span:nth-child(2) {
        transform: rotate(45deg);
        background: #f9c806;
      }
      span:nth-child(3) {
        transform: rotate(-45deg);
        background: #f9c806;
      }
    `}

  @media (max-width: 992px) {
    display: flex;
  }
`

export const LinkStyle = styled(Link).attrs(p => ({
  activeClassName: p.activeClassName || 'active',
}))`
  display: inline-block;
  position: relative;
  font: 20px/50px 'Roboto', sans-serif;
  color: #4e4e4e;
  opacity: 0.6;
  text-decoration: none;
  text-transform: uppercase;
  border-top: 3px solid transparent;
  transition: color 0.5s;
  &:hover {
    color: #f9c806;
  }
  &:not(:first-child) {
    margin-left: 28px;
  }

  @media (max-width: 992px) {
    width: 100%;
    margin-left: 0;
    &:not(:first-child) {
      margin-left: 0;
    }
  }
`
