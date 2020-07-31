import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

//components
import HomeBanner from "../components/homePage/HomeBanner"

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
    </Layout>
  )
}

export default IndexPage
