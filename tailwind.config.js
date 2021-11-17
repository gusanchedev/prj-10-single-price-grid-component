module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "karla": ["karla"],
      },
      colors: {
        "myCyan": "hsl(179, 62%, 43%)",
        "myBrightYellow": "hsl(71, 73%, 54%)",
        "myLightGray": "hsl(204, 43%, 93%)",
        "myGrayishBlue": "hsl(218, 22%, 67%)",
        "myGreenLight": "hsla(179,47%, 52%, 1)",
        "myGreenDark": "hsla(179,61%, 44%, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
