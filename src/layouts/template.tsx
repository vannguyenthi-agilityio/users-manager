import React from 'react';
import { Box } from '@chakra-ui/react';
import Sidebar from '../components/SideBar';

type LayoutProp = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProp) => (
  <Sidebar>
    <Box px="5">{children}</Box>
  </Sidebar>
);
