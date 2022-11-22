import { Box, Image } from '@chakra-ui/react';

import { User } from 'src/models/user';

interface ElevationProps {
  className?: string;
  data?: User;
}

export const Elevation = ({
  className = '',
  data,
  ...props
}: ElevationProps) => (
  <Box className={className} {...props} minWidth="288px">
    <Image src="./images/user.png" borderRadius="20px" />
  </Box>
);
