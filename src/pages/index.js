/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

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
  width: ["100%", "30rem", "32rem", "49rem"],
  my: 0,
  mx: ["auto", "auto", "auto", 0],
  backgroundSize: "200px"
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
  fontSize: [".675rem", ".825rem", ".875rem", "1rem"],
  mb: [6, 7]
}
const sxHeroNav = {
  display: "flex",
  listStyle: "none",
  m: 0,
  p: 0,
  fontSize: [null, null, "1.1rem", "1.2rem"],
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
  px: [6],
  py: [null, 9],
  mx: "auto",
  width: ["100%", "30rem", "32rem", "49rem"]
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
const sxPostTitle = { variant: "text.h1", lineHeight: "1.05", mt: 1, mb: 2 }
const sxPostLink = { color: "primary", fontSize: "1.1rem" }

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

  const posts = data.allMdx.nodes.map(post => (
    <PostLink key={post.id} post={post} />
  ))
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
              <Link sx={sxHeroNavLink} to="/articles">
                Articles
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
            to="/articles"
            sx={{ variant: "links.navigation", color: "gray75" }}
          >
            View All
          </Link>
        </div>
        <div>{posts}</div>
      </div>
    </>
  )
}

export default Index
