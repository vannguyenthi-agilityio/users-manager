import { useContext } from 'react';
import UserContext from 'src/contexts/UserContext';
import { useRouter } from 'next/router';

import { Box, HStack, Avatar, Link, Flex, Progress } from '@chakra-ui/react';

// Components
import { Indicator } from 'src/components/Indicator';
import { Text } from 'src/components/Text';
import { Elevation } from 'src/components/Elevation';
import BasicTable from 'src/components/Table';
import { columnsProjects } from 'src/constants/tableColumn';

const Overview = () => {
  const { users, isLoading } = useContext(UserContext);
  const router = useRouter();
  const { id } = router.query;
  const dataUser = users[id?.toString()];

  const columnsTableProjects = [
    {
      Header: 'InfoProject',
      columns: [
        {
          header: 'Project',
          accessor: 'projectName'
        },
        {
          header: 'Total Tasks',
          accessor: 'totalTask',
          Cell: (cell) => {
            const { row } = cell;
            return (
              <Text
                className="text-overflow"
                color="default.grey.600"
                pl={4}
                value={row.values.totalTask}
              />
            );
          }
        },
        {
          header: 'Progress',
          accessor: 'progress',
          Cell: (cell) => {
            const { row } = cell;
            return (
              <Text
                className="text-overflow"
                color="default.grey.600"
                pl={4}
                value={row.values.progress}
              />
            );
          }
        },
        {
          header: 'Hours',
          accessor: 'hours',
          Cell: (cell) => {
            const { row } = cell;
            return (
              <Text
                className="text-overflow"
                color="default.grey.600"
                pl={4}
                value={row.values.hours}
              />
            );
          }
        }
      ],
      ...columnsProjects
    }
  ];

  const dataTable = dataUser?.projects.length
    ? dataUser.projects.map((project) => ({
        projectName: (
          <HStack spacing={2} key={project.id}>
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
        progress: (
          <Box textAlign="center">
            {Math.round((project.taskDone * 100) / project.totalTask)}%
            <Progress
              colorScheme={
                ((project.taskDone * 100) / project.totalTask >= 75 &&
                  'green') ||
                ((project.taskDone * 100) / project.totalTask >= 50 &&
                  'purple') ||
                ((project.taskDone * 100) / project.totalTask < 50 && 'red')
              }
              size="xs"
              value={(project.taskDone * 100) / project.totalTask}
              borderRadius="lg"
            />
          </Box>
        ),
        hours: (
          <Box>
            {project.timeDone}:{project.totalTime}
          </Box>
        )
      }))
    : [];

  return isLoading ? (
    <Indicator />
  ) : (
    <Flex flexDirection={{ sm: 'column', md: 'row' }}>
      <Elevation userInfo={dataUser} />
      <Box
        w={{ sm: '100%', md: 'calc(800 * 100%/1028)' }}
        boxShadow="xs"
        rounded="md"
        bg="white"
        ml={8}
        className="table"
      >
        <BasicTable dataTable={dataTable} columnsTable={columnsTableProjects} />
      </Box>
    </Flex>
  );
};

export default Overview;
