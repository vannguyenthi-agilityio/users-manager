// Import the global style enabling classes
import 'src/App.css'
import { ChakraProvider } from '@chakra-ui/react';
import { CHAKRA_THEME } from 'src/themes/chakra'
import { BrowserRouter } from 'react-router-dom';

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <ChakraProvider theme={CHAKRA_THEME}>
        <Story />
      </ChakraProvider>
    </BrowserRouter>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
