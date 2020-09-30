import React, { useState, useEffect } from "react"
import SEO from "../components/seo"

import { LoadingScreen } from "../styles/loadingStyles"

const Loading = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      counter <= 99 && setCounter(counter + 1)
    }, 20)
  }, [counter])

  return (
    <LoadingScreen
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO title="Faholo Chemicals" />
      <>
        <span className="text">Faholo Chemicals Ltd</span>
      </>
      <span className="progress">%{counter}</span>
    </LoadingScreen>
  )
}

export default Loading
