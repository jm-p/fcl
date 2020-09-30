import styled from "styled-components"

export const FooterWrapper = styled.div`
  position: relative;
  height: 90vh;
  width: 100%;
`
export const FooterImage = styled.div`
  position: relative;
  height: 45vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    height: 30vh;
  }
  p {
    font-size: 1.5rem;
    color: ${props => props.theme.green};
    @media (max-width: 700px) {
      font-size: 1rem;
    }
    @media (max-width: 400px) {
      font-size: 0.8rem;
    }
  }
`

export const FooterContent = styled.div`
  position: relative;
  height: 45vh;
  width: 100%;
  //display: flex;
  //justify-content: space-between;
  background: ${props => props.theme.green};
  @media (max-width: 700px) {
    //flex-direction: column;
    height: 60vh;
  }
  p {
    font-size: 1rem;
    line-height: 2.5rem;
    text-transform: uppercase;
    color: ${props => props.theme.text};
    margin: 0;
    @media (max-width: 750px) {
      font-size: 0.8rem;
      line-height: 1.8rem;
    }
  }
  a {
    font-size: 1rem;
    line-height: 1.7rem;
    color: ${props => props.theme.text};
    @media (max-width: 750px) {
      font-size: 0.8rem;
      line-height: 1.5rem;
    }
  }
`

export const FooterCompany = styled.div`
  position: absolute;
  bottom: 4%;
  right: 4%;
  p {
    color: ${props => props.theme.text};
    text-transform: none;
    @media (max-width: 700px) {
      font-size: 0.7rem;
    }
  }
  @media (min-width: 700px) {
    right: 3%;
  }
`

export const FooterDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 54px 0 0 54px;
  @media (max-width: 700px) {
    flex-direction: row;
    padding: 24px 0 0 24px;
  }
`

export const FooterDetailsOne = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
  @media (max-width: 700px) {
    margin-bottom: 20px;
  }
`
export const FooterCredits = styled.div`
  position: absolute;
  bottom: 0;
  right: 4%;
  p {
    font-size: 0.7rem;
    text-transform: none;
    color: ${props => props.theme.text};
  }
  a {
    font-size: 0.7rem;
    color: ${props => props.theme.text};
    text-decoration: underline;
  }
  @media (min-width: 700px) {
    right: 3%;
  }
`
