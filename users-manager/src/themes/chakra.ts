import { extendTheme } from '@chakra-ui/react';
import { fontSizes } from './fontSizes';
import { Text } from './components/text';

const overrides = {
  components: {
    Text
  },
  fontSizes
};

export const CHAKRA_THEME = extendTheme(overrides);
