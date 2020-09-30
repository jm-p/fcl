import React, { useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

//framer
import { AnimatePresence } from "framer-motion"

//styled components
import {
  Banner,
  LandingText,
  LandingImage,
  LandingImageInner,
  LandingWrapper,
  LandingTextInner,
  ScrollArrow,
  CallToActionWrapper,
  CallToActionWrapperInner,
  TitleCta,
  CallCta,
  EmailCta,
} from "../../styles/homeStyles"
// import { Container } from "../../styles/globalStyles"

//svg
import ArrowDown from "../../assets/svg/arrow-down.svg"
import CallIcon from "../../assets/svg/call.svg"
import EmailIcon from "../../assets/svg/email.svg"

const HomeBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      landingpageImage: file(relativePath: { eq: "chem-structure.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [closePopUp, setClosePopUp] = useState(true)

  return (
    <Banner>
      <LandingWrapper>
        <LandingImage>
          <LandingImageInner>
            <Img
              fluid={data.landingpageImage.childImageSharp.fluid}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: -1,
                width: "100%",
                height: "100%",
              }}
              alt=""
            />
          </LandingImageInner>
        </LandingImage>
        <LandingText>
          <LandingTextInner>
            <h1>who we are</h1>
            <h2>
              A Chemical Manufacturing Company , headquartered in Nairobi,
              Kenya; Specializing in Manufacturing & Distribution of{" "}
              <span>external</span> application products.
            </h2>
          </LandingTextInner>
        </LandingText>
      </LandingWrapper>
      <AnimatePresence>
        {closePopUp && (
          <CallToActionWrapper
            initial={{ opacity: 0, x: "-120%" }}
            exit={{ opacity: 0, x: "-120%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
              ease: [0.6, 0.05, -0.01, 0.9],
            }}
          >
            <CallToActionWrapperInner>
              <TitleCta>
                <p>CLICK/TAP</p>
                <button onClick={() => setClosePopUp(!closePopUp)}>
                  <span>x</span>
                </button>
              </TitleCta>
              <CallCta>
                <a href="tel:+254770321966">
                  <p>CALL NOW</p>
                  <button>
                    <img src={CallIcon} alt="call-icon" />
                  </button>
                </a>
              </CallCta>
              <EmailCta>
                <a href="mailto:faholochemicals@gmail.com">
                  <p>EMAIL NOW</p>
                  <button>
                    <img src={EmailIcon} alt="email-icon" />
                  </button>
                </a>
              </EmailCta>
            </CallToActionWrapperInner>
          </CallToActionWrapper>
        )}
      </AnimatePresence>
      <ScrollArrow>
        <span>SCROLL</span>
        <img src={ArrowDown} alt="down arrow" />
      </ScrollArrow>
    </Banner>
  )
}

export default HomeBanner
