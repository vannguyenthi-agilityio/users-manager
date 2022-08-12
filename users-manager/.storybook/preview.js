import { ChakraProvider } from '@chakra-ui/react';
import { CHAKRA_THEME } from '../src/themes/chakra'
import { BrowserRouter } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
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
