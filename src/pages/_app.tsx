import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { UserProvider } from 'src/contexts/UserContext';
import { Layout } from 'src/layouts/template';
import { CHAKRA_THEME } from 'src/themes/chakra';

// Styles
import 'src/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <ChakraProvider resetCSS theme={CHAKRA_THEME}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </UserProvider>
);

export default App;
