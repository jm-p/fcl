import React from "react"
// import { Link } from "gatsby"

//styles
import { Container } from "../../styles/globalStyles"
import {
  StepsWrapper,
  StepsWrapperInner,
  StepsMarquee,
  StepsMarqueeInner,
  Step,
  StepHeading,
  StepDescription,
  GetLocationCta,
  StepNumber,
  StepDescriptionInner,
} from "../../styles/homeStyles"

//svg
import InquireIcon from "../../assets/svg/conversation.svg"
import ContractIcon from "../../assets/svg/contract.svg"
import ShippedIcon from "../../assets/svg/shipped.svg"

const HomeSteps = () => {
  return (
    <StepsWrapper>
      <StepsMarquee>
        <StepsMarqueeInner>
          <span>ORDER OR INQUIRY?</span>
          <span>ORDER OR INQUIRY?</span>
          <span>ORDER OR INQUIRY?</span>
          <span>ORDER OR INQUIRY?</span>
        </StepsMarqueeInner>
      </StepsMarquee>
      <Container>
        <StepsWrapperInner>
          <Step>
            <StepHeading>
              <h3>Reach out</h3>
              <img src={InquireIcon} alt="conversation icon" />
            </StepHeading>
            <StepDescription>
              <StepNumber>
                <p>1/3</p>
              </StepNumber>
              <StepDescriptionInner>
                <p>
                  With the product name, pack size & quantity, reach out to our
                  dedicated sales team for a quote/assistance. through the
                  following contacts. <br /> <br /> faholochemicals@gmail.com{" "}
                  <br />
                  <a href="tel:+254770321966">(+254) 770 321 966</a> <br />
                  <a href="tel:+254790753945">(+254) 790 753 945</a> <br />
                  <a href="tel:+254737483812">(+254) 737 483 812</a>
                </p>
              </StepDescriptionInner>
            </StepDescription>
          </Step>
          <Step>
            <StepHeading>
              <h3>Quote & Payment</h3>
              <img src={ContractIcon} alt="conversation icon" />
            </StepHeading>
            <StepDescription>
              <StepNumber>
                <p>2/3</p>
              </StepNumber>
              <StepDescriptionInner>
                <p>
                  Receive your quote & agree on the mode of payment and delivery
                  details.
                </p>
              </StepDescriptionInner>
            </StepDescription>
          </Step>
          <Step>
            <StepHeading>
              <h3>Delivery</h3>
              <img src={ShippedIcon} alt="delivery icon" />
            </StepHeading>
            <StepDescription>
              <StepNumber>
                <p>3/3</p>
              </StepNumber>
              <StepDescriptionInner>
                <p>
                  Depending on the agreement made, get your goods delivered or
                  locate us to pick them up. <br /> <br /> Location : <br />{" "}
                  Bellway Industrial Park, GoDown No.4 <br /> Embakasi, Nairobi
                  Kenya.
                </p>
                <GetLocationCta>
                  <a
                    href="https://www.google.com/maps/dir//faholo/@-1.3138759,36.8439214,12z/data=!3m1!4b1!4m9!4m8!1m1!4e2!1m5!1m1!1s0x182f1109e4088c39:0x81f820e2de258964!2m2!1d36.913962!2d-1.3138769"
                    aria-label="directions"
                  >
                    <button>
                      <span>Get Directions</span>
                    </button>
                  </a>
                </GetLocationCta>
              </StepDescriptionInner>
            </StepDescription>
          </Step>
        </StepsWrapperInner>
      </Container>
    </StepsWrapper>
  )
}

export default HomeSteps
