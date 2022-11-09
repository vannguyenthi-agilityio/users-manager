import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

type TypeProp = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: TypeProp) => (
  <Grid
    templateAreas={'"header header" "main main"'}
    gridTemplateRows="64px 1fr 56px"
    gridTemplateColumns="260px 1fr"
    h="100vh"
    gap="1"
  >
    <GridItem px="5" area="main">
      {children}
    </GridItem>
  </Grid>
);
