import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

//styled components
import {
  AboutSectionWrapper,
  AboutSectionWrapperInner,
  AboutImage,
  AboutImageInner,
  AboutText,
  AboutTextInner,
  AboutTextInnerFlex,
  ExploreAboutCta,
  AboutImageSize,
} from "../../styles/homeStyles"
const HomeAbout = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutDisplayImage: file(relativePath: { eq: "f-f.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <AboutSectionWrapper>
      <AboutSectionWrapperInner>
        <AboutImage>
          <AboutImageInner>
            <AboutImageSize>
              <Img
                fluid={data.aboutDisplayImage.childImageSharp.fluid}
                alt="about display"
              />
            </AboutImageSize>
          </AboutImageInner>
        </AboutImage>
        <AboutText>
          <AboutTextInner>
            <AboutTextInnerFlex>
              <h1>About Us</h1>
              <h2>
                We are the Leading Chemical Manufacturing Co. in East Africa,
                with years of experience in the Chemical Industry. Our
                progressive & collaborative partnership with our stakeholders
                ...
              </h2>
            </AboutTextInnerFlex>
            <ExploreAboutCta>
              <Link
                to="/"
                aria-label="about page"
                target="_blank"
                rel="noopener"
              >
                <button>
                  <span>Read More</span>
                </button>
              </Link>
            </ExploreAboutCta>
          </AboutTextInner>
        </AboutText>
      </AboutSectionWrapperInner>
    </AboutSectionWrapper>
  )
}

export default HomeAbout
