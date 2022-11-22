import { Flex, Image, Text, Divider } from '@chakra-ui/react';

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
      w="340px"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="secondary.300"
      color="default.grey.600"
      p={6}
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
        padding="4px 6px"
        fontWeight="400"
        borderRadius="xl"
        color="default.red"
        bg="transparent"
      />
      <Flex mt={10} justifyContent="space-between" w="100%">
        <Flex justifyContent="center" alignItems="center">
          <Flex
            bg="default.purple.200"
            borderRadius="sm"
            w="44px"
            h="44px"
            justifyContent="center"
            alignItems="center"
          >
            <FiStar color="rgb(145, 85, 253)" size={30} />
          </Flex>
          <Flex flexDirection="column" ml={2}>
            <Text color="default.grey.600" fontSize="22px" fontWeight="500">
              {data.totalTask}
            </Text>
            <Text
              color="default.grey.900"
              fontSize="14px"
              mt={2}
              maxW="50px"
            >
              Task Done
            </Text>
          </Flex>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <Flex
            bg="default.purple.200"
            borderRadius="sm"
            w="44px"
            h="44px"
            justifyContent="center"
            alignItems="center"
          >
            <FiCheck color="rgb(145, 85, 253)" size={30} />
          </Flex>
          <Flex flexDirection="column" ml={2}>
            <Text color="default.grey.600" fontSize="22px" fontWeight="500">
              {data.totalProject}
            </Text>
            <Text
              color="default.grey.900"
              fontSize="14px"
              mt={2}
              maxW="50px"
            >
              Project Done
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        mt={10}
        flexDirection="column"
      >
        <Text
          fontSize="x-large"
          color="default.grey.600"
        >
          Details
        </Text>
        <Divider
          w="100%"
          my={5}
          borderColor="secondary.300"
        />
        <Flex mb={3}>
          <Text
            fontSize="14px"
            fontWeight="500"
            color="default.grey.600"
          >
            Username:
          </Text>
          <Text
            fontSize="14px"
            color="default.grey.500"
            ml={2}
          >
            {data.userName}
          </Text>
        </Flex>
        <Flex mb={3}>
          <Text
            fontSize="14px"
            fontWeight="500"
            color="default.grey.600"
          >
            Billing Email:
          </Text>
          <Text
            fontSize="14px"
            color="default.grey.500"
            ml={2}
          >
            {data.email}
          </Text>
        </Flex>
        <Flex mb={3}>
          <Text
            fontSize="14px"
            fontWeight="500"
            color="default.grey.600"
          >
            Status:
          </Text>
          <Text
            fontSize="14px"
            color="default.grey.500"
            ml={2}
          >
            {data.status}
          </Text>
        </Flex>
        <Flex mb={3}>
          <Text
            fontSize="14px"
            fontWeight="500"
            color="default.grey.600"
          >
            Role:
          </Text>
          <Text
            fontSize="14px"
            color="default.grey.500"
            ml={2}
          >
            {data.role}
          </Text>
        </Flex>
        <Flex mb={3}>
          <Text
            fontSize="14px"
            fontWeight="500"
            color="default.grey.600"
          >
            Language:
          </Text>
          <Text
            fontSize="14px"
            color="default.grey.500"
            ml={2}
          >
            {data.language}
          </Text>
        </Flex>
        <Flex mb={3}>
          <Text
            fontSize="14px"
            fontWeight="500"
            color="default.grey.600"
          >
            Country:
          </Text>
          <Text
            fontSize="14px"
            color="default.grey.500"
            ml={2}
          >
            {data.country}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
