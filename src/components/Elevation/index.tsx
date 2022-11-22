import { Flex, Image, Text, Box } from '@chakra-ui/react';

import { FiStar, FiCheck } from 'react-icons/fi';

import { User } from 'src/models/user';

// Components
import { Button } from 'src/components/Button';

interface ElevationProps {
  className?: string;
  data?: User;
}

export const Elevation = ({
  className = '',
  data,
  ...props
}: ElevationProps) => {
  console.log('data', data);
  return (
    <Flex
      className={className}
      w="288px"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      border="1px solid gray"
      p={5}
      borderRadius="sm"
      {...props}
    >
      <Image src={data.avatar} borderRadius="md" w="120px" />
      <Text
        fontWeight="500"
        fontSize="2xl"
        lineHeight="inherit"
        color="default.grey.600"
        my={5}
      >
        {data.fullName}
      </Text>
      <Button
        variant="border"
        label="Admin"
        size="autoSize"
        padding="5px"
        borderRadius="md"
        color="default.red"
        bg="transparent"
      />
      <Flex mt={10} justifyContent="space-between">
        <Flex justifyContent="center" alignItems="center">
          <Flex
            bg="default.purple.200"
            borderRadius="sm"
            w="50px"
            h="50px"
            justifyContent="center"
            alignItems="center"
          >
            <FiStar color="rgb(145, 85, 253)" size={30} />
          </Flex>
          <Flex flexDirection="column" ml={2}>
            <Text color="default.grey.600" fontSize="22px" fontWeight="500">
              {data.totalTask}
            </Text>
            <Text color="default.grey.900" fontSize="15px" mt={2}>
              Task Done
            </Text>
          </Flex>
        </Flex>
        <Flex justifyContent="center" alignItems="center" ml={5}>
          <Flex
            bg="default.purple.200"
            borderRadius="sm"
            w="50px"
            h="50px"
            justifyContent="center"
            alignItems="center"
          >
            <FiCheck color="rgb(145, 85, 253)" size={30} />
          </Flex>
          <Flex flexDirection="column" ml={2}>
            <Text color="default.grey.600" fontSize="22px" fontWeight="500">
              {data.totalProject}
            </Text>
            <Text color="default.grey.900" fontSize="15px" mt={2}>
              Project Done
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
