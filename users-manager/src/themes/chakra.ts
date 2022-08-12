import { extendTheme } from '@chakra-ui/react';

//Common
import { fontSizes } from './commons/fontSizes';
import { colors } from './commons/colors';
import { lineHeights } from './commons/lineHeights';

//cComponents
import { Text } from './components/text';

const overrides = {
  components: {
    Text
  },
  fontSizes,
  colors,
  lineHeights
};

export const CHAKRA_THEME = extendTheme(overrides);
