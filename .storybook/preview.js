import { ChakraProvider } from '@chakra-ui/react';
import { CHAKRA_THEME } from '../src/themes/chakra'
import { BrowserRouter } from 'react-router-dom';
import { RouterContext } from "next/dist/shared/lib/router-context";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider
  },
}

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <ChakraProvider theme={CHAKRA_THEME}>
        <Story />
      </ChakraProvider>
    </BrowserRouter>
  ),
];
