import React from "react"

//styled components
import { Banner, ComingSoon } from "../../styles/homeStyles"
import { Container } from "../../styles/globalStyles"

const HomeBanner = () => {
  return (
    <Banner>
      <Container>
        <ComingSoon
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 2, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          Website <br /> Coming Soon.
        </ComingSoon>
      </Container>
    </Banner>
  )
}

export default HomeBanner
