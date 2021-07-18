import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import "@fontsource/oswald"
import "@fontsource/roboto-condensed"
import "@fontsource/medievalsharp"
import "@fontsource/material-icons"
import "@fontsource/material-icons-outlined"
import theme from '../styles/theme'
import initAuth from '../lib/initAuth'

initAuth()

function MyApp({ Component, pageProps }) {
  return (
   
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: false,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  
 
  )
}

export default MyApp
