import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"

//home banner styles
export const Banner = styled.div`
  position: relative;
  height: 100vh;
  @media (max-width: 700px) {
    margin-top: 10%;
  }
`

export const LandingWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`
export const LandingText = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  @media (max-width: 700px) {
    width: 100%;
    height: 45%;
  }
`
export const LandingTextInner = styled.div`
  padding: 0 50px;
  @media (max-width: 700px) {
    //display: flex;
    padding: 0 24px;
  }
  h2 {
    span {
      color: ${props => props.theme.green};
    }
  }
`

export const LandingImage = styled.div`
  position: relative;
  display: block;
  align-items: center;
  height: 100%;
  width: 50%;
  // background: ${props => props.theme.text};
  @media (max-width: 700px) {
    height: 55%;
    width: 100%;
  }
`

export const LandingImageInner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  vertical-align: center;
  background-position: 50% 50%;
`

export const ScrollArrow = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  bottom: 10px;
  right: 0;
  @media (max-width: 700px) {
    bottom: 50px;
  }
  span {
    font-size: 1rem;
    color: ${props => props.theme.green};
    font-family: "BasierSquareMono", Arial, sans-serif;
  }
`
export const CallToActionWrapper = styled(motion.div)`
  position: absolute;
  height: 230px;
  width: 100px;
  bottom: 0;
  left: 0;
  background: ${props => props.theme.green};
  @media (max-width: 700px) {
    bottom: 80px;
  }
`
export const CallToActionWrapperInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  p {
    margin: 0;
    font-size: 0.7rem;
    color: ${props => props.theme.background};
    font-family: "BasierSquareMono", Arial, sans-serif;
  }
`

export const TitleCta = styled.div`
  p {
    position: absolute;
    top: 0;
    left: 0;
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    transform-origin: center;
    border: 1px solid #000;
    outline: none;
    background: ${props => props.theme.text};
    &:hover {
      transition: 0.2s ease-in-out;
      background: ${props => props.theme.red};
    }
    span {
      color: ${props => props.theme.background};
    }
  }
`

export const CallCta = styled.div`
  margin: 20px 0 10px 0;
  a {
    text-decoration: none;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      transform-origin: center;
      border: none;
      border-radius: 100px;
      outline: none;
      background: ${props => props.theme.background};
      &:hover {
        transition: 0.2s ease-in-out;
        background: ${props => props.theme.grey};
      }
      img {
        height: 32px;
        width: 32px;
      }
    }
  }
`

export const EmailCta = styled.div`
  a {
    text-decoration: none;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      transform-origin: center;
      border: none;
      border-radius: 100px;
      outline: none;
      background: ${props => props.theme.background};
      &:hover {
        transition: 0.2s ease-in-out;
        background: ${props => props.theme.grey};
      }
      img {
        height: 32px;
        width: 32px;
      }
    }
  }
`
//home products styles

export const ProductSectionWrapper = styled.div`
  position: relative;
  height: 100vh;
  @media (max-width: 700px) {
    margin-top: 10%;
  }
`

export const ProductSectionWrapperInner = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: row;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`

export const ProductImage = styled.div`
  position: relative;
  display: block;
  align-items: center;
  height: 100%;
  width: 50%;
  // background: ${props => props.theme.text};
  @media (max-width: 700px) {
    height: 50%;
    width: 100%;
  }
`

export const ProductImageInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  }
`
export const ProductSize = styled.div`
  position: relative;
  height: 80%;
  width: 450px;
  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`

export const ProductText = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  @media (max-width: 700px) {
    width: 100%;
    height: 50%;
  }
`

export const ProductTextInner = styled.div`
  padding-left: 54px;
  padding-right: 54px;
  @media (min-width: 1100px) {
    padding-right: 160px;
  }
  @media (max-width: 700px) {
    //display: flex;
    padding-left: 24px;
    padding-right: 0px;
  }
`

export const ProductTextInnerFlex = styled.div`
  @media (max-width: 700px) {
    //display: flex;
  }
`

export const ExploreProductsCta = styled.div`
  // margin-top: 2rem;
  margin: 2rem 0;
  height: 50px;
  width: 200px;
  @media (max-width: 600px) {
    margin: 1.5rem 0;
    height: 45px;
    width: 160px;
  }
  a {
    color: ${props => props.theme.text};
    text-decoration: none;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      padding: 10px;
      transform-origin: center;
      border: none;
      border-radius: 30px;
      outline: none;
      background: ${props => props.theme.green};
      span {
        font-size: 0.8rem;
        text-transform: uppercase;
        color: ${props => props.theme.background};
        font-family: "BasierSquareMono", Arial, sans-serif;
        @media (max-width: 600px) {
          font-size: 0.7rem;
        }
      }
      &:hover {
        transition: 0.2s ease-in-out;
        border: 1px solid #000;
        background: ${props => props.theme.background};
        span {
          color: ${props => props.theme.text};
        }
      }
    }
  }
`
//home about styles

export const AboutSectionWrapper = styled.div`
  position: relative;
  height: 100vh;
  @media (max-width: 700px) {
    margin-top: 10%;
  }
`
export const AboutSectionWrapperInner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`
export const AboutImage = styled.div`
  position: relative;
  display: block;
  height: 100%;
  width: 50%;
  @media (max-width: 700px) {
    height: 50%;
    width: 100%;
  }
`
export const AboutImageInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`
export const AboutImageSize = styled.div`
  width: 500px;
  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
  Img {
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    vertical-align: center;
    background-position: center bottom;
  }
`

export const AboutText = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  @media (max-width: 700px) {
    width: 100%;
    height: 50%;
  }
`
export const AboutTextInner = styled.div`
  padding-left: 54px;
  padding-right: 54px;
  @media (min-width: 1024px) {
    padding-left: 100px;
  }
  @media (max-width: 700px) {
    // display: flex;
    padding-left: 24px;
    padding-right: 0px;
  }
`
export const AboutTextInnerFlex = styled.div`
  @media (max-width: 700px) {
    //display: flex;
  }
`
export const ExploreAboutCta = styled.div`
  //margin-top: 2rem;
  margin: 2rem 0;
  height: 50px;
  width: 200px;
  @media (max-width: 600px) {
    margin: 1.5rem 0;
    height: 45px;
    width: 160px;
  }
  a {
    color: ${props => props.theme.text};
    text-decoration: none;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      padding: 10px;
      transform-origin: center;
      border: none;
      border-radius: 30px;
      outline: none;
      background: ${props => props.theme.green};
      span {
        font-size: 0.8rem;
        text-transform: uppercase;
        color: ${props => props.theme.background};
        font-family: "BasierSquareMono", Arial, sans-serif;
        @media (max-width: 600px) {
          font-size: 0.7rem;
        }
      }
      &:hover {
        transition: 0.2s ease-in-out;
        border: 1px solid #000;
        background: ${props => props.theme.background};
        span {
          color: ${props => props.theme.text};
        }
      }
    }
  }
`
//home steps styles

export const StepsWrapper = styled.div`
  position: relative;
  height: 90vh;
  width: 100%;
  font-weight: normal;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  @media (max-width: 1024px) {
    height: 1000px;
  }
`
export const StepsMarquee = styled.div`
  position: relative;
  height: 25%;
  display: flex;
  align-items: center;
  overflow: hidden;
  --offset: 20vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
  @media (max-width: 1024px) {
    height: 120px;
  }
`

const marquee = keyframes`
    0% {
      transform: translate3d(var(--move-initial), 0, 0);
    }

    100% {
      transform: translate3d(var(--move-final), 0, 0);
    }
`

export const StepsMarqueeInner = styled.div`
  width: fit-content;
  display: flex;
  position: relative;
  transform: translate3d(var(--move-initial), 0, 0);
  animation: ${marquee} 5s linear infinite;
  animation-play-state: running;
  span {
    color: ${props => props.theme.text};
    font-size: 3rem;
    padding: 0 2vw;
    white-space: nowrap;
    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
`

export const StepsWrapperInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 75%;
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction: column;
    height: 700px;
  }
`
export const Step = styled.div`
  position: relative;
  height: 400px;
  width: 30%;
  background: ${props => props.theme.text};
  @media (max-width: 1024px) {
    width: 100%;
    margin-bottom: 30px;
    //height: 250px;
  }
`
export const StepHeading = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 20px;
  justify-content: space-between;
  @media (max-width: 1024px) {
    margin: 0 20px;
  }
  &:after {
    position: absolute;
    background: ${props => props.theme.background};
    content: "";
    width: 100%;
    height: 1px;
    bottom: 5px;
    left: 0;
  }
  img {
    width: 32px;
    height: 32px;
    display: inline-block;
  }
`
export const StepDescription = styled.div`
  position: relative;
  display: flex;
  //height: 100%;
  padding-bottom: 20px;
  width: 100%;
`
export const StepDescriptionInner = styled.div`
  position: relative;
  width: 80%;
  padding-right: 20px;
  p {
    font-size: 1rem;
    color: ${props => props.theme.background};
    @media (max-width: 600px) {
      font-size: 0.9rem;
    }
  }
  a {
    color: ${props => props.theme.background};
    font-family: "BasierSquareMono", Arial, sans-serif;
  }
`

export const StepNumber = styled.div`
  position: relative;
  padding-left: 20px;
  width: 20%;
  p {
    font-size: 1rem;
    color: ${props => props.theme.background};
    @media (max-width: 600px) {
      font-size: 0.9rem;
    }
  }
`
export const GetLocationCta = styled.div`
  height: 50px;
  width: 200px;
  @media (max-width: 600px) {
    height: 45px;
    width: 160px;
  }
  a {
    color: ${props => props.theme.text};
    text-decoration: none;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      padding: 10px;
      transform-origin: center;
      border: 1px solid #000;
      border-radius: 30px;
      outline: none;
      background: ${props => props.theme.background};
      span {
        font-size: 0.8rem;
        text-transform: uppercase;
        color: ${props => props.theme.text};
        font-family: "BasierSquareMono", Arial, sans-serif;
        @media (max-width: 600px) {
          font-size: 0.7rem;
        }
      }
      &:hover {
        transition: 0.2s ease-in-out;
        border: none;
        background: ${props => props.theme.green};
        span {
          color: ${props => props.theme.background};
        }
      }
    }
  }
`
