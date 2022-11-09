import {
  Center,
  Spinner as SpinnerChakra,
  SpinnerProps as SpinnerPropsChakra
} from '@chakra-ui/react';

interface SpinnerProps extends SpinnerPropsChakra {
  color?: string;
  size?: string;
}

export const Indicator = ({
  color = 'blue.500',
  size = 'xl',
  ...props
}: SpinnerProps) => (
  <Center h="100%">
    <SpinnerChakra
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color={color}
      size={size}
      {...props}
    />
  </Center>
);
