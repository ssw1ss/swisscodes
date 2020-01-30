/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Index = () => (
  <>
    <h1 sx={{ variant: "text.h1", mt: 7, pt: 2 }}>Projects</h1>
    <h3 sx={{ variant: "text.h3", mt: 5, color: "gray" }}>
      I will be adding my experiments and projects here, check back soon!
    </h3>
  </>
)

export default Index
