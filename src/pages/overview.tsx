import { Box, HStack, Avatar, Link, Flex } from '@chakra-ui/react';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { getUser } from 'src/service/user-service';
// Components
import { Indicator } from 'src/components/Indicator';
import { Text } from 'src/components/Text';
import { Elevation } from 'src/components/Elevation';
import BasicTable from 'src/components/Table';
import { columnsProjects } from 'src/constants/tableColumn';

import { User } from 'src/models/user';

const Overview = () => {
  const { data, isFetching } = useQuery<User>(['users'], () => getUser(1));

  const dataTable = data?.projects.length
    ? data.projects.map((project) => ({
        projectName: (
          <HStack spacing={2} key={project.projectName}>
            <Avatar
              name={project.projectName}
              src="https://bit.ly/broken-link"
              w={8}
              h={8}
            />
            <Box>
              <Link href="#">{project.projectName}</Link>
              <Text
                pt={2}
                fontSize="xs"
                value={project.techStack}
                variant="caption"
              />
            </Box>
          </HStack>
        ),
        totalTask: (
          <Box>
            {project.taskDone}/{project.totalTask}
          </Box>
        ),
        progress: <Box>{(project.taskDone * 100) / project.totalTask}</Box>,
        hours: (
          <Box>
            {project.timeDone}:{project.totalTime}
          </Box>
        )
      }))
    : [];

  return isFetching ? (
    <Indicator />
  ) : (
    <Flex>
      <Elevation userInfo={data} />
      <Box w="inherit" boxShadow="xs" rounded="md" bg="white">
        <BasicTable data={dataTable} columns={columnsProjects} />
      </Box>
    </Flex>
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
