import React from "react"
import { Link } from "gatsby"

import FaholoBanner from "../assets/images/faholo-icon.png"

//styled components
import {
  HeaderNav,
  Logo,
  Menu,
  AboutMenu,
  ProductsMenu,
  ContactMenu,
  HamburgerMenu,
} from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"

const transition = { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }
const Header = ({ toggleMenu, setToggleMenu }) => {
  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -56, opacity: 0 }}
      transition={transition}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to="/">
              <img src={FaholoBanner} alt="" />
            </Link>
            <Link to="/">
              Faholo <br /> Chemicals Ltd
            </Link>
          </Logo>
          <Menu>
            <AboutMenu>
              <Link to="/">Products</Link>
            </AboutMenu>
            <ProductsMenu>
              <Link to="/">About</Link>
            </ProductsMenu>
            <ContactMenu>
              <Link to="/">Contacts</Link>
            </ContactMenu>
            <HamburgerMenu onClick={() => setToggleMenu(!toggleMenu)}>
              <button>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </HamburgerMenu>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
