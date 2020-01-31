/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

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

const PostListing = ({ postList, ...props }) => {
  const posts = postList.map(post => <PostLink key={post.id} post={post} />)
  return <div {...props}>{posts}</div>
}

export default PostListing
