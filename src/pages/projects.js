/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import Header from "../components/Header"

const Projects = () => (
  <>
    <Header />
    <div sx={{ variant: "layout.container" }}>
      <h1 sx={{ variant: "text.h1", mt: 7, pt: 2 }}>Projects</h1>
      <h3 sx={{ variant: "text.h3", mt: 5, color: "gray" }}>
        I will be adding my experiments and projects here, check back soon!
      </h3>
    </div>
  </>
)

export default Projects
