const globalStyles = theme => ({
  "*": {
    boxSizing: "border-box",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale"
  },
  "html, body": {
    margin: 0,
    overflowX: "hidden",
    fontSize: "16px",
    [`@media(min-width: ${theme.breakpoints[1]})`]: {
      fontSize: "17px"
    },
    [`@media(min-width: ${theme.breakpoints[2]})`]: {
      fontSize: "18px"
    }
  },
  body: {
    background: theme.colors.background,
    fontFamily: `Inter, -apple-system, BlinkMacSystemFont,
      "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif`,
    fontWeight: theme.fontWeights.medium
  },
  "p, h1, h2, h3, h4, h5, h6": { margin: 0 }
})

export default globalStyles
