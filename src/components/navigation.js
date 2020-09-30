import React from "react"
import { Link } from "gatsby"

import FaholoBanner from "../assets/images/faholo-icon.png"

//styled components
import {
  Nav,
  NavHeader,
  LogoNav,
  CloseNav,
  NavList,
  NavFooter,
} from "../styles/navigationStyles"
import { Container, Flex } from "../styles/globalStyles"
import { AnimatePresence, motion } from "framer-motion"

const navRoutes = [
  {
    id: 0,
    title: "Products",
    path: "/products",
  },
  {
    id: 1,
    title: "About",
    path: "/products",
  },
  {
    id: 2,
    title: "Contacts",
    path: "/contacts",
  },
]

const transition = { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }

// Menu Title Slide Up
const titleSlideUp = {
  initial: { y: 200 },
  animate: { y: 0 },
}
// Stagger on menu link
const parent = {
  animate: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
}

const Navigation = ({ toggleMenu, setToggleMenu }) => {
  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: toggleMenu ? 1 : 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <LogoNav>
                    <Link to="/">
                      <img src={FaholoBanner} alt="" />
                    </Link>
                    <Link to="/">
                      Faholo <br /> Chemicals Ltd
                    </Link>
                  </LogoNav>
                  <CloseNav onClick={() => setToggleMenu(!toggleMenu)}>
                    <button>
                      <motion.span
                        animate={{ rotate: 45 }}
                        transition={{
                          duration: 0.1,
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                        exit={{ rotate: 0 }}
                      ></motion.span>
                      <motion.span
                        animate={{ rotate: -45, y: -5 }}
                        transition={{
                          duration: 0.1,
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                        exit={{ rotate: 0 }}
                      ></motion.span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 30, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.6, 0.05, -0.01, 0.9],
                }}
              >
                <motion.ul
                  variants={parent}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {navRoutes.map(route => (
                    <motion.li
                      key={route.id}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link to={`${route.path}`}>
                        <motion.div
                          variants={titleSlideUp}
                          transition={transition}
                          className="link"
                        >
                          {route.title}
                        </motion.div>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </NavList>
              <NavFooter></NavFooter>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
