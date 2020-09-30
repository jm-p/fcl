import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

//styles
import {
  FooterWrapper,
  FooterImage,
  FooterContent,
  FooterCompany,
  FooterDetails,
  FooterDetailsOne,
  FooterCredits,
} from "../styles/footerStyles"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      footerDisplayImage: file(relativePath: { eq: "delivery-faholo.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterImage>
        <Img
          fluid={data.footerDisplayImage.childImageSharp.fluid}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: -1,
            opacity: 0.3,
            width: "100%",
            height: "100%",
          }}
          alt="footer image"
        />
        <p>We Believe in Quality, Customer care & Honesty</p>
      </FooterImage>
      <FooterContent>
        <FooterDetails>
          <FooterDetailsOne>
            <p>Support</p>
            <Link to="/">Contacts</Link>
            <Link to="/">FAQs</Link>
          </FooterDetailsOne>
          <FooterDetailsOne>
            <p>Company</p>
            <Link to="/">Products</Link>
            <Link to="/">About Us</Link>
          </FooterDetailsOne>
          <FooterDetailsOne>
            <p>Socials</p>
            <a href="https://www.facebook.com/pg/Faholo-Chemicals-Ltd-1713341125452958/posts/">
              Facebook
            </a>
            <a href="https://www.instagram.com/jobmusembi">Instagram</a>
          </FooterDetailsOne>
        </FooterDetails>
        <FooterCompany>
          <p>© Faholo Chemicals {new Date().getFullYear()}</p>
        </FooterCompany>
        <FooterCredits>
          <p>
            Designed & Developed By{" "}
            <a href="https://jobmusembi.com">Job Musembi</a>
          </p>
        </FooterCredits>
      </FooterContent>
    </FooterWrapper>
  )
}

export default Footer
