import { extendTheme } from '@chakra-ui/react'
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const fonts = { mono: `'Menlo', monospace`}

const colors = {
  blackroot: {
    "white": "#F9F9F9",
    "ivory": "#F2EDE3",
    "red": "#AF5654",
    "red-dark": "#8B4341",
    "light": "#CCCCCC",
    "dark": "#2D2D2D"
  },
  sauron: {
    "white": "#F5F5F5",
    "light": "#D5D6D7",
    "medium": "#777B7E",
    "dark": "#444648",
    "red": "#EF1D00"
  }
}

const theme = extendTheme({
  fonts,
  colors,
  config,
  components: {
    Steps,
  },
})

export default theme
