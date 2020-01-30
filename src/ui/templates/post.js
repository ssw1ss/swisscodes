/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

const postDateSX = {
  variant: "text.h4",
  fontSize: 1,
  letterSpacing: ".025rem",
  mt: 1,
  color: "gray",
  textTransform: "uppercase"
}

const Post = ({ data: { mdx: post } }) => {
  return (
    <div sx={{ mt: 7, pt: 5 }}>
      <h1 sx={{ variant: "text.h1" }}>{post.frontmatter.title}</h1>
      <h3 sx={postDateSX}>{post.frontmatter.date}</h3>
      <div sx={{ mt: 6 }}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </div>
  )
}

export default Post

export const postQuery = graphql`
  query postQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        date
      }
      body
    }
  }
`
