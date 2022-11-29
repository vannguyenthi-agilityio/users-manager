// Charka
import { Flex, Box } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { Button } from 'src/components/Button';
import AddUserModal from 'src/components/AddUserModal';

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
        my={4}
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
      <Flex
        w="100%"
        px={6}
        alignItems="center"
        justifyContent="space-between"
        my={4}
      >
        <Button
          h="48px"
          bg="transparent"
          w="130px"
          minW="30px"
          display="flex"
          border="1px solid"
          borderColor="buttons.export"
          color="rgb(138, 141, 147)"
          fontSize="14px"
          mr={3}
          textTransform="uppercase"
          label="Export"
          cursor="pointer"
        >
          <ExternalLinkIcon w={4} h={4} ml={3} />
        </Button>
        <Flex>
          {/* <Search
            globalSearch={globalFilter}
            setGlobalSearch={setGlobalFilter}
          /> */}
          <AddUserModal />
        </Flex>
      </Flex>
    </>
  );
};

export default GroupFilter;
