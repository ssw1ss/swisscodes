/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import Header from "../components/Header"

const About = () => (
  <>
    <Header />
    <div sx={{ variant: "layout.container" }}>
      <h1 sx={{ variant: "text.h1", mt: 7, pt: 2 }}>About</h1>
      <h3 sx={{ variant: "text.h3", mt: 5, color: "gray" }}>
        Born in Swizterland, raised in the US. 24 year, old web developer with 6
        years of experience with html, css, javascript and a bunch of different
        tooling around these technologies (nodejs, react, gatsby, aws amplify
        etc).
      </h3>
    </div>
  </>
)

export default About
