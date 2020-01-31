/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import PostListing from "../components/PostListing"
import Logo from "assets/images/logo.svg"
import HeroImage from "assets/images/hero-image.svg"

const sxHeroContainer = {
  borderColor: "gray10",
  borderBottom: [null, theme => `1px solid ${theme.colors.gray10}`]
}
const sxHero = {
  position: "relative",
  py: [8, 9],
  px: [6, 0, 0, 8],
  mx: ["auto", "auto", "auto", 0],
  width: ["100%", "27.5rem", "37rem", "49rem"]
}
const sxHeroImage = {
  display: ["none", "none", "none", "none", "block"],
  position: "absolute",
  right: "-12%",
  top: "50%",
  transform: "translateY(-50%)",
  width: "15%"
}
const sxLogo = {
  width: ["2.5rem", "3rem"],
  mb: [6, 7]
}
const sxHeroCopy = {
  mb: [6, 7]
}
const sxHeroNav = {
  display: "flex",
  listStyle: "none",
  m: 0,
  p: 0,
  fontWeight: "semibold"
}
const sxHeroNavItem = {
  "&:after": {
    content: "'/'",
    color: "gray10",
    mx: [2, 4, 5]
  },
  "&:last-child:after": {
    display: "none"
  }
}
const sxHeroNavLink = {
  variant: "links.navigation",
  position: "relative",
  fontSize: 1
}

const sxPostsSection = {
  variant: "layout.container"
}
const sxPostsHeader = {
  display: "flex",
  justifyContent: "space-between",
  mb: 7
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

const Index = () => {
  const data = useStaticQuery(graphql`
    query indexPageQuery {
      allMdx(limit: 5) {
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
      <div sx={sxHeroContainer}>
        <div sx={sxHero}>
          <div sx={sxHeroImage}>
            <HeroImage />
          </div>
          <div sx={sxLogo}>
            <Logo sx={{ width: "100%" }} />
          </div>
          <div sx={sxHeroCopy}>
            <h1 sx={{ variant: "text.h1" }}>
              Hi! My name is Lukas, I’m a web developer. Online I go by
              swisscodes. I stream my work over on twitch, where I teach what I
              learn.
            </h1>
          </div>
          <ul sx={sxHeroNav}>
            <li sx={sxHeroNavItem}>
              <Link sx={sxHeroNavLink} to="/blog">
                Blog
              </Link>
            </li>
            <li sx={sxHeroNavItem}>
              <Link sx={sxHeroNavLink} to="/projects">
                Projects
              </Link>
            </li>
            <li sx={sxHeroNavItem}>
              <Link sx={sxHeroNavLink} to="/about">
                About
              </Link>
            </li>
            <li sx={sxHeroNavItem}>
              <Link sx={sxHeroNavLink} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div sx={sxPostsSection}>
        <div sx={sxPostsHeader}>
          <h3 sx={{ variant: "text.h3", color: "gray75" }}>Latest Posts</h3>
          <Link
            to="/blog"
            sx={{ variant: "links.navigation", color: "gray75" }}
          >
            View All
          </Link>
        </div>
        <PostListing postList={postList} />
      </div>
    </>
  )
}

export default Index
