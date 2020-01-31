/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Header from "../components/Header"
import PostListing from "../components/PostListing"

const sxPostsSection = {
  variant: "layout.container"
}
const sxPostItem = {
  mb: 7,
  textDecoration: "none",
  display: "block",
  fontWeight: "semibold"
}
const sxPostDate = {
  fontSize: 0,
  color: "gray50",
  textTransform: "uppercase",
  letterSpacing: ".05rem"
}
const sxPostTitle = { variant: "text.h1", lineHeight: "1.05", my: 1 }
const sxPostLink = { color: "primary", fontSize: 1 }

const PostLink = ({
  post: {
    frontmatter: { date, title },
    fields: { slug }
  },
  ...props
}) => (
  <Link to={slug} {...props} sx={sxPostItem}>
    <div sx={sxPostDate}>{date}</div>
    <div sx={sxPostTitle}>{title}</div>
    <div sx={sxPostLink}>Read More</div>
  </Link>
)

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  const postList = data.allMdx.nodes
  return (
    <>
      <Header />
      <div sx={sxPostsSection}>
        <PostListing postList={postList} />
      </div>
    </>
  )
}

export default Blog
