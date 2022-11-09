import { extendTheme } from '@chakra-ui/react';

// Common
import { fontSizes } from './commons/fontSizes';
import { fonts } from './commons/fonts';
import { colors } from './commons/colors';
import { lineHeights } from './commons/lineHeights';
import { space } from './commons/spacing';

// Components
import { Text } from './components/text';
import { Badge } from './components/badge';

const overrides = {
  components: {
    Text,
    Badge
  },
  fontSizes,
  fonts,
  colors,
  space,
  lineHeights
};

export const CHAKRA_THEME = extendTheme(overrides);
