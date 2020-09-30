import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

// Import css files
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
// import Slider from "react-slick"

// const settings = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: false,
//   arrows: false,
// }

//styled components
import {
  ProductSectionWrapper,
  ProductSectionWrapperInner,
  ProductImage,
  ProductImageInner,
  ProductText,
  ProductTextInner,
  ExploreProductsCta,
  ProductTextInnerFlex,
  ProductSize,
} from "../../styles/homeStyles"

//svg
// import ArrowRight from "../../assets/svg/arrow-right.svg"
// import ArrowLeft from "../../assets/svg/arrow-left.svg"
// <span>category : cleaning solutions</span>

const HomeProducts = () => {
  const data = useStaticQuery(graphql`
    query {
      productCategoryImage: file(relativePath: { eq: "four-prod.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ProductSectionWrapper>
      <ProductSectionWrapperInner>
        <ProductImage>
          <ProductImageInner>
            <ProductSize>
              <Img
                fluid={data.productCategoryImage.childImageSharp.fluid}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  zIndex: -1,
                  width: "100%",
                  height: "100%",
                }}
                alt="cleaning solutions"
              />
            </ProductSize>
          </ProductImageInner>
        </ProductImage>
        <ProductText>
          <ProductTextInner>
            <ProductTextInnerFlex>
              <h1>Our products</h1>
              <h2>
                With Quality, Customer Care & Honesty being at the forefront of
                our journey, we focus on making efficient, industry approved &
                research-driven formulations that make a difference in
                maintaining a safe & healthy way of living.
              </h2>
            </ProductTextInnerFlex>
            <ExploreProductsCta>
              <Link to="/" aria-label="products page">
                <button>
                  <span>Explore Products</span>
                </button>
              </Link>
            </ExploreProductsCta>
          </ProductTextInner>
        </ProductText>
      </ProductSectionWrapperInner>
    </ProductSectionWrapper>
  )
}

export default HomeProducts
