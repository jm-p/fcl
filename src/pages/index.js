import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

//components
import HomeBanner from "../components/homePage/HomeBanner"
import HomeProducts from "../components/homePage/HomeProducts"
import HomeAbout from "../components/homePage/HomeAbout"
import HomeSteps from "../components/homePage/homeSteps"
import Footer from "../components/footer"

const IndexPage = props => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `Faholo Chemicals`,
          `Faholo Chemicals Website`,
          `Chemical Manufacturer in Kenya`,
        ]}
      />
      <HomeBanner />
      <HomeProducts />
      <HomeAbout />
      <HomeSteps />
      <Footer />
    </Layout>
  )
}

export default IndexPage
