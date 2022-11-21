import { Box, Heading } from '@chakra-ui/react';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { getUser } from 'src/service/user-service';
// Components
import { Indicator } from 'src/components/Indicator';
import { User } from 'src/models/user';

const Overview = () => {
  const { data, isFetching } = useQuery<User>(['users'], () => getUser(1));

  return isFetching ? (
    <Indicator />
  ) : (
    <Box>
      <Heading mb={4} color="gray.600" fontSize="20px">
        View user id = {data.id}
      </Heading>
    </Box>
  );
};

export default Overview;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['user'], () => getUser());

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}
