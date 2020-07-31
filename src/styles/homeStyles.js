import styled from "styled-components"
import { motion } from "framer-motion"

export const Banner = styled.div`
  position: relative;
  height: 100vh;
`

export const ComingSoon = styled(motion.div)`
  position: absolute;
  top: 30%;
  //text-transform: uppercase;
  color: ${props => props.theme.green};
  font-size: 7rem;
  font-weight: 900;
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`
