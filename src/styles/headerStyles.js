import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  height: 50px;
  width: 100%;
  position: absolute;
  top: 56px;
  right: 0;
  left: 0;
  z-index: 99;
  @media (max-width: 600px) {
    top: 40px;
  }
`

export const Logo = styled.div`
  a {
    img {
        width: 150px;
        height: 40px;
        @media (max-width: 600px) {
            width: 150px;
            height: 30px;
        }
    }
    // font-size: 1rem;
    // font-weight: 900;
    // text-transform: uppercase;
    // color: ${props => props.theme.text};
    // @media (max-width: 600px) {
    //   font-size: 0.7rem;
    // }
  }
`

export const Menu = styled.div`
  display: flex;
  display: none;
  align-items: center;
  a {
    text-decoration: none;
    //text-transform: uppercase;
    color: ${props => props.theme.text};
    font-size: 1rem;
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
  a {
    @media (max-width: 600px) {
      display: none;
    }
  }
`
export const ProductsMenu = styled.div`
  img {
    height: 16px;
    width: 16px;
    top: 2px;
    margin-left: 4px;
    display: inline-block;
    position: relative;
    @media (max-width: 600px) {
      top: 0px;
      height: 8px;
      width: 8px;
      margin-left: 2px;
    }
  }
`
export const ContactMenu = styled.div`
  a {
    @media (max-width: 600px) {
      display: none;
    }
  }
`
export const HamburgerMenu = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 0 0 0 20px;
    background: none;
    outline: none;
    span {
      width: 32px;
      height: 4px;
      display: block;
      background: ${props => props.theme.text};
      margin: 4px;
      @media (max-width: 600px) {
        width: 24px;
        height: 4px;
        margin-bottom: 2px;
      }
    }
    @media (max-width: 600px) {
      padding: 0 0 0 15px;
    }
  }
`
