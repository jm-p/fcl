import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//Styled Components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

//fonts
import * as font from "../fonts"

//components
import Header from "./header"
import Navigation from "./navigation"
import Loading from "./loading"

const GlobalStyle = createGlobalStyle`
${normalize}
@font-face {
  font-family: "TechniqueSans";
  font-weight: normal;
  font-style: normal;
  src: url("${font.TechniqueSans}") format("opentype");
  font-display: swap;
}
@font-face {
  font-family: "BasierSquareMono";
  font-weight: normal;
  font-style: normal;
  src: url("${font.BasierSquareMono}") format("truetype");
  font-display: swap;
}
* {
  text-decoration: none;
  //cursor: none;
}
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  
  
}
body {
  font-size: 16px;
  font-family: 'TechniqueSans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${props => props.theme.background};
  overscroll-behavior: none;
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 2.5rem 0 1.05rem;
  line-height: 1.5;
}

h1 {
  position: relative;
  font-size: 1rem;
  text-transform: uppercase;
  color: ${props => props.theme.green};
  font-family: 'BasierSquareMono', Arial, sans-serif;
  @media (max-width: 375px) {
    font-size: 0.9rem;
    margin-top: 0;
  }
  // &:before {
  //   position: absolute;
  //   background: ${props => props.theme.green};
  //   content: "";
  //   width: 40px;
  //   height: 2px;
  //   bottom: 10px;
  //   left: 0;
  // }
}

h2 {
  margin-bottom: 0;
  font-size: 1.5rem;
  font-weight: normal;
  @media (max-width: 800px) {
    font-size: 1.3rem;
  }
  @media (max-width: 700px) {
    margin: 0;
    padding: 0 24px 0 0;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
  @media (max-width: 375px) {
    font-size: 1.1rem;
  }
  @media (max-width: 320px) {
    font-size: 0.9rem;
  }
}

h3 {
  font-size: 1.3rem;
  //text-transform: uppercase;
  font-weight: normal;
  color: ${props => props.theme.background};
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
  @media (max-width: 375px) {
    font-size: 1rem;
  }
}

h4 {
  font-size: 1.563em;
}

h5 {
  font-size: 1.25em;
}

small,
.text_small {
  font-size: 0.8em;
}

a {
  text-decoration: none;
  color: ${props => props.theme.text};
  transition: ease-in-out 0.2s;
  &:hover {
    opacity: 0.5;
  }
  &.no-hover {
    &:hover {
      opacity: 1;
    }
  }
}

`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const lightTheme = {
    background: "#fff",
    text: "#000",
    green: "#2C7147",
    red: "#FF0000",
    blue: "#105EFB",
    grey: "#F0F0F0",
  }

  const [toggleMenu, setToggleMenu] = useState(false)

  const [finishLoading, setFinishLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setFinishLoading(false)
    }, 4000)
  }, [])

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {finishLoading ? (
        <Loading />
      ) : (
        <div>
          <Header
            toggleMenu={toggleMenu}
            setToggleMenu={setToggleMenu}
            siteTitle={data.site.siteMetadata.title}
          />
          <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
          <main>{children}</main>
        </div>
      )}
    </ThemeProvider>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
