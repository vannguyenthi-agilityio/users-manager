import { ChakraProvider } from "@chakra-ui/react"
import '../styles/globals.css'
import { CHAKRA_THEME } from '../themes/chakra'

function App({ Component, pageProps }) {
  return <ChakraProvider theme={CHAKRA_THEME}>
    <Component {...pageProps} />
  </ChakraProvider>
}

export default App
