import styled from "styled-components"
import { motion } from "framer-motion"

export const LoadingScreen = styled(motion.div)`
  display: flex;
  background: ${props => props.theme.green};
  color: ${props => props.theme.background};
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 99;
  .text {
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
  .progress {
    // display: none;
    position: absolute;
    bottom: 8rem;
    right: 8rem;
    font-size: 1rem;
    @media (max-width: 1024px) {
      bottom: 3rem;
      right: 3rem;
    }
    @media (max-width: 480px) {
      bottom: 3rem;
      right: 1.5rem;
    }
  }
`
