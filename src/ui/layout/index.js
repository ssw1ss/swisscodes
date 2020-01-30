/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Global } from "@emotion/core"

import globalStyles from "./globalStyles"

const Index = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <div>{children}</div>
    </>
  )
}

export default Index
