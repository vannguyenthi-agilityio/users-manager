import { Box } from '@chakra-ui/react';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { getUser } from 'src/service/user-service';
// Components
import { Indicator } from 'src/components/Indicator';
import { Elevation } from 'src/components/Elevation';

import { User } from 'src/models/user';

const Overview = () => {
  const { data, isFetching } = useQuery<User>(['users'], () => getUser(1));

  return isFetching ? (
    <Indicator />
  ) : (
    <Box>
      <Elevation data={data} />
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
