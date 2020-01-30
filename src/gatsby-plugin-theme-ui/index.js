const heading = {
  color: "white",
  fontWeight: "semibold",
  lineHeight: "1.2"
}
const colorsSet = {
  white: "rgba(255,255,255,1)",
  gray75: "rgba(255,255,255,.75)",
  gray50: "rgba(255,255,255,.50)",
  gray10: "rgba(255,255,255,.10)",
  skyblue: "#C5EAFF",
  black: "#202226"
}
const colors = {
  ...colorsSet,
  text: colorsSet.gray75,
  background: colorsSet.black,
  primary: colorsSet.skyblue
}
const h1 = {
  ...heading,
  fontSize: 4
}
const h2 = {
  ...heading,
  fontSize: 3
}
const h3 = {
  ...heading,
  fontSize: 2
}
const headings = {
  h1,
  h2,
  h3
}

export default {
  breakpoints: ["34em", "44em", "54em", "64em"],
  colors,
  radii: {
    s: "5px"
  },
  space: [
    "0rem",
    ".25rem",
    ".5rem",
    ".75rem",
    "1rem",
    "1.5rem",
    "2rem",
    "3rem",
    "6rem",
    "9rem"
  ],
  fontSizes: [".875em", "1em", "1.25em", "1.5em", "2em"],
  fontWeights: {
    medium: "500",
    semibold: "600"
  },
  styles: {
    ...headings,
    p: {
      lineHeight: "1.6",
      mb: 5,
      color: "text"
    }
  },
  text: {
    ...headings
  },
  links: {
    navigation: {
      fontSize: 1,
      textDecoration: "none",
      color: "primary"
    }
  },
  layouts: {
    fullWidth: {
      width: "100%"
    },
    container: {
      width: ["90%", "85%", "75%"],
      maxWidth: "45rem",
      margin: "0 auto"
    }
  }
}
