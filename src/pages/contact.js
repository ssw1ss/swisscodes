/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import Header from "../components/Header"

const Contact = () => (
  <>
    <Header />
    <div sx={{ variant: "layout.container" }}>
      <h1 sx={{ variant: "text.h1", mt: 7, pt: 2 }}>Contact</h1>
      <h3 sx={{ variant: "text.h3", mt: 5, color: "gray" }}>
        Contact form &amp; info will go here
      </h3>
    </div>
  </>
)

export default Contact
