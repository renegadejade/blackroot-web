import { extendTheme } from '@chakra-ui/react'
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const fonts = { mono: `'Menlo', monospace`}

const colors = {
  brand: {
    50: "#EAE0D4",
    100: "#E1CFC4",
    200: "#D9BEB5",
    300: "#D0ADA5",
    400: "#C89C96",
    500: "#BF8B86",
    600: "#B77A77",
    700: "#AE6967",
    800: "#A65858",
    900: "#9D4748"
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
