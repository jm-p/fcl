import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  height: 50px;
  width: 100%;
  position: fixed;
  top: 56px;
  right: 0;
  left: 0;
  z-index: 99;
  @media (max-width: 600px) {
    top: 40px;
  }
`

export const Logo = styled.div`
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
    font-weight: normal;
    text-transform: uppercase;
    color: ${props => props.theme.green};
    @media (max-width: 600px) {
      font-size: 0.85rem;
    }
    @media (max-width: 320px) {
      font-size: 0.8rem;
    }
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    // text-transform: uppercase;
    color: ${props => props.theme.text};
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0 25px;
    &:last-child {
      margin-right: 0px;
    }
    @media (max-width: 600px) {
      text-transform: uppercase;
      font-size: 0.7rem;
      margin: 0 10px;
    }
  }
`
export const AboutMenu = styled.div`
  display: none;
  a {
    @media (max-width: 600px) {
      display: none;
    }
  }
`
export const ProductsMenu = styled.div`
  display: none;
  a {
    @media (max-width: 600px) {
      display: none;
    }
  }
`
export const ContactMenu = styled.div`
  display: none;
  a {
    @media (max-width: 600px) {
      display: none;
    }
  }
`
export const HamburgerMenu = styled.div`
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
    &:hover {
      transition: 0.2s ease-in-out;
      background: ${props => props.theme.grey};
    }
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
      }
    }
  }
`
