import React from "react"
import Layout from "./src/ui/layout"

const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}

export default wrapPageElement
