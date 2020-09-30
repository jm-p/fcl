import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: ${props => props.theme.green};
  color: ${props => props.theme.background};
  z-index: 100;
  overflow: hidden;
`

export const NavHeader = styled.div`
  top: 56px;
  position: relative;
  @media (max-width: 600px) {
    top: 40px;
  }
  }
`

export const LogoNav = styled.div`
  display: flex;
  align-items: center;
  a {
    img {
      width: 56px;
      height: 56px;
      margin-right: 5px;
      @media (max-width: 600px) {
        width: 40px;
        height: 40px;
      }
    }
    font-size: 1.1rem;
    font-weight: 500;
    text-transform: uppercase;
    color: ${props => props.theme.text};
    @media (max-width: 600px) {
      font-size: 0.85rem;
    }
    @media (max-width: 320px) {
      font-size: 0.8rem;
    }
  }
`

export const CloseNav = styled.div`
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform-origin: center;
    border: none;
    height: 60px;
    width: 60px;
    border-radius: 100px;
    background: ${props => props.theme.background};
    outline: none;
    @media (max-width: 700px) {
      background: ${props => props.theme.grey};
      height: 50px;
      width: 50px;
    }
    span {
      position: relative;
      width: 32px;
      height: 2px;
      display: block;
      background: ${props => props.theme.text};
      margin: 1.5px;
      @media (max-width: 600px) {
        width: 24px;
        //margin-bottom: 2px;
      }
    }
  }
`

export const NavList = styled(motion.div)`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    li {
        list-style: none;
        font-size: 3rem;
        font-weight: 300;
        height: 96px;
        line-height: 96px;
        overflow: hidden;
        @media (max-width: 600px) {
            font-size: 2rem;
            height: 56px;
            line-height: 56px;
          }
        .link {
        color: ${props => props.theme.text};
        position: relative;
        display: flex;
        align-items: center;
    }
`
export const NavFooter = styled.div``
