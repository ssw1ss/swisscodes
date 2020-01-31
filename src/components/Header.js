/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

import Logo from "assets/images/logo.svg"

const sxHeaderContainer = {
  borderBottom: "1px solid",
  borderColor: "gray10",
  py: 3
}
const sxHeader = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}
const sxLogo = {
  width: ["2rem", "2.5rem"],
  mr: [6, 7]
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
    mx: [2, 3, 4]
  },
  "&:last-child:after": {
    display: "none"
  }
}
const sxHeroNavLink = {
  variant: "links.navigation",
  position: "relative",
  fontSize: 0
}

const Header = () => {
  return (
    <div sx={sxHeaderContainer}>
      <div sx={sxHeader}>
        <Link to="/" sx={sxLogo}>
          <Logo sx={{ width: "100%" }} />
        </Link>
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
  )
}

export default Header
