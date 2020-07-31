import React from "react"
import { Link } from "gatsby"

import DropdownArrow from "../assets/svg/drop-down-arrow.svg"
import FaholoBanner from "../assets/images/faholo-banner.png"

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

const Header = () => {
  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -56, opacity: 0 }}
      transition={{ duration: 2, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to="/">
              <img src={FaholoBanner} alt="" />
            </Link>
          </Logo>
          <Menu>
            <AboutMenu>
              <Link to="/">Our Story</Link>
            </AboutMenu>
            <ProductsMenu>
              <Link to="/">
                Products <img src={DropdownArrow} alt="" />
              </Link>
            </ProductsMenu>
            <ContactMenu>
              <Link to="/">Contacts</Link>
            </ContactMenu>
            <HamburgerMenu>
              <button>
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
