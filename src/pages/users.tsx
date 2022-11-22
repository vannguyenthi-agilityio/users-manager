import { Box, Avatar, HStack, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { getUsers } from 'src/service/user-service';
// Components
import { Text } from 'src/components/Text';
import BasicTable from 'src/components/Table';
import { Indicator } from 'src/components/Indicator';
import { User } from 'src/models/user';
import { columnsUsers } from 'src/constants/tableColumn';
import { ROUTES } from 'src/constants/routes';

const Users = () => {
  const { data = [], isFetching } = useQuery<Array<User>>(['users'], () =>
    getUsers()
  );

  const dataTable = data.length
    ? data.map((user) => ({
        userName: (
          <HStack spacing={2} key={user.id}>
            <Avatar
              name={user.fullName}
              src="https://bit.ly/broken-link"
              w={8}
              h={8}
            />
            <Box>
              <Link href={`${ROUTES.USER_DETAIL.URL}`}>{user.fullName}</Link>
              <Text
                pt={2}
                fontSize="xs"
                value={user.userName}
                variant="caption"
              />
            </Box>
          </HStack>
        ),
        email: user.email,
        role: user.role,
        plan: user.plan,
        status: user.status
      }))
    : [];

  return isFetching ? (
    <Indicator />
  ) : (
    <Box>
      <Heading mb={4} color="gray.600" fontSize="20px">
        Search Filter
      </Heading>
      <Box boxShadow="xs" rounded="md" bg="white">
        <BasicTable data={dataTable} columns={columnsUsers} />
      </Box>
    </Box>
  );
};

export default Users;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['user'], () => getUsers());

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}
