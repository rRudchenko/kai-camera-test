import styled, { css } from 'styled-components'
import { Link } from '../link/Link'
import { Img } from '../img/Img'

export const HeaderU = styled.header`
  background: #ffffff;
  box-sizing: border-box;
  width: 100%;
  max-width: 935px;
  margin: 0 auto;
  height: 80px;
  /* height: ${({ isOpen }) => (isOpen ? '260px' : '90px')};
  transition: height 0.5s; */
  `
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`
export const LogoStyle = styled(Link)`
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
  display: flex;
  align-items: flex-end;
  /* width: 100%; */
  transition: all 1s ease-in-out;
  @media (max-width: 992px) {
    display: none;
  }
  ${p => p.isOpen
    && css`
      display: block !important;
      position: absolute;
      top: ${({ isOpen }) => (isOpen ? '80px' : '-170px')};
      left: 0;
      background: #ffffff;
      width: 100%;
      height: 140px;
      transition: all 1s ease-in-out;
      text-align: justify;
      padding: 10px 20px 10px 0;
    `}
`
export const Burger = styled.div`
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
  /* &.active {
    border-top: 3px solid #229dd2;
  } */
  &:hover {
    color: #f9c806;
  }
  &:not(:first-child) {
    margin-left: 28px;
  }

  @media (max-width: 992px) {
    padding-left: 20px;
    display: block;
    margin-left: 0;
    &:not(:first-child) {
      margin-left: 0;
    }
  }
`
