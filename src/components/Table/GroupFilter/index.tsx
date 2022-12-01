// Charka
import { Flex, Box } from '@chakra-ui/react';

const GroupFilter = (headerFilter) => {
  const { headerGroups } = headerFilter;
  return (
    <>
      <Flex
        w="100%"
        px={6}
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ sm: 'column', md: 'row' }}
      >
        {headerGroups[1]?.headers.map(
          (column) =>
            column.hasFilter && (
              <Box
                width={{ sm: '100%', md: '33%' }}
                mr={{
                  sm: '0',
                  md: `${column.id !== 'status' ? '24px' : '0'}`
                }}
                mt={{ sm: '20px', md: '0' }}
                key={column.id}
              >
                {column.canFilter ? column.render('Filter') : null}
              </Box>
            )
        )}
      </Flex>
    </>
  );
};

export default GroupFilter;
