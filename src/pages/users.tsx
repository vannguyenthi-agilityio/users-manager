import { useState, useMemo, useEffect, useCallback } from 'react';
import {
  Box,
  Avatar,
  HStack,
  Heading,
  Checkbox,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Menu,
  Link
} from '@chakra-ui/react';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { getUsers } from 'src/service/user-service';
// Components
import { Text } from 'src/components/Text';
import BasicTable from 'src/components/Table';
import { Indicator } from 'src/components/Indicator';
import { StatusLabel } from 'src/components/StatusLabel';
import { Filter } from 'src/components/Filter';
import EditUserModal from 'src/components/Modal/EditUserModal';
import DeleteUserModal from 'src/components/Modal/DeleteUserModal';

import { ROUTES } from 'src/constants/routes';

// Utils
import { getBadgeVariant } from 'src/utils/table';

// Constants
import { columnsUsers } from 'src/constants/tableColumn';

// Models
import { User } from 'src/models/user';

import { ViewIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons';

const Users = () => {
  const { data = [], isFetching } = useQuery<Array<User>>(['users'], () =>
    getUsers()
  );
  const [checkedItems, setCheckedItems] = useState([false, false]);
  const [tableDataUser, settableDataUser] = useState(data);
  const [isOpenModal, setCloseModal] = useState(false);

  useEffect(() => {
    const dataNewUser = JSON.parse(localStorage.getItem('newUser') || null);
    if (tableDataUser.length > 0) {
      const newDataUser = [...tableDataUser, dataNewUser];
      settableDataUser(newDataUser);
    } else {
      settableDataUser(data);
    }
  }, [isFetching, isOpenModal]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const handleDelete = useCallback((e, id) => {
    e.preventDefault();
    settableDataUser(tableDataUser.filter((v, i) => i !== id));
    setCloseModal(false);
  }, [tableDataUser]);

  const handleEdit = useCallback((e, id) => {
    e.preventDefault();
    setCloseModal(false);
  }, [tableDataUser]);

  const columnsTableUsers = useMemo(
    () => [{
      Header: 'Info',
      columns: [
        {
          header: (
            <Checkbox
              colorScheme="orange"
              isChecked={allChecked}
              isIndeterminate={isIndeterminate}
              onChange={(e) =>
                setCheckedItems([e.target.checked, e.target.checked])
              }
            />
          ),
          accessor: 'checkBox'
        },
        {
          header: 'User',
          accessor: 'userName',
          hasSort: true,
          Cell: (cell) => {
            const { row } = cell;
            return (
              <Text
                className="text-overflow"
                color="default.grey.600"
                value={row.values.userName}
              />
            );
          }
        },
        {
          header: 'Email',
          accessor: 'email',
          Cell: (cell) => {
            const { row } = cell;
            return (
              <Text
                className="text-overflow"
                color="default.grey.500"
                value={row.values.email}
                pl={4}
              />
            );
          }
        },
        {
          header: 'Role',
          accessor: 'role',
          Filter: Filter,
          filter: 'includes',
          hasFilter: true,
          Cell: (cell) => {
            const { row } = cell;
            return (
              <Text
                className="text-overflow"
                color="default.grey.600"
                value={row.values.role}
                pl={4}
              />
            );
          }
        },
        {
          header: 'Plan',
          accessor: 'plan',
          Filter: Filter,
          filter: 'includes',
          hasFilter: true,
          Cell: (cell) => {
            const { row } = cell;
            return (
              <Text
                className="text-overflow"
                color="default.grey.600"
                value={row.values.plan}
                pl={4}
              />
            );
          }
        },
        {
          header: 'Status',
          accessor: 'status',
          Filter: Filter,
          filter: 'includes',
          hasFilter: true,
          Cell: (cell) => {
            const { row } = cell;
            return (
              <StatusLabel
                variant={getBadgeVariant(row.values.status?.toLowerCase())}
                value={row.values.status}
                ml={4}
              />
            );
          }
        },
        {
          header: 'Actions',
          accessor: 'actions',
          Cell: (tableProps) => {
            const { row } = tableProps;
            const userFilter = data?.filter((user) => user.id === Number(row.id));
            const userEdit = Object(userFilter[0]);
            return (
              <Menu closeOnSelect>
                <MenuButton
                  w={6}
                  h={10}
                  transform="rotate(90deg)"
                  fontSize="20px"
                  ml="30px"
                >
                  ...
                </MenuButton>
                <MenuList minWidth="128px" color="gray.600" fontSize="16px">
                  <MenuItem value="view" py={3}>
                    <Link href={ROUTES.USER_DETAIL.URL} display="flex">
                      <ViewIcon w={4} h={4} mr={3} />
                      <Text color="default.grey.600" value="View" />
                    </Link>
                  </MenuItem>
                  <MenuItem value="edit" py={3}>
                    <Flex>
                      <EditIcon w={4} h={4} mr={3} />
                      <EditUserModal
                        userInfo={userEdit}
                        isOpen={isOpenModal}
                        onSubmitModal={(event) => handleEdit(event, row.index)}
                      />
                    </Flex>
                  </MenuItem>
                  <MenuItem
                    value="delete"
                    py={3}
                  >
                    <Flex>
                      <DeleteIcon w={4} h={4} mr={3} />
                      <DeleteUserModal
                        isOpen={isOpenModal}
                        onSubmitModal={(event) => handleDelete(event, row.index)}
                      />
                    </Flex>
                  </MenuItem>
                </MenuList>
              </Menu>
            )
          }
        }
      ],
      ...columnsUsers
    }
  ],
  [tableDataUser, isOpenModal, isFetching]
);

const dataTable = tableDataUser.length
  ? tableDataUser.map((user) => ({
      checkBox: (
        <Checkbox
          colorScheme="orange"
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) =>
            setCheckedItems([e.target.checked, e.target.checked])
          }
        />
      ),
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
      <Box boxShadow="xs" rounded="md" bg="white" className="table">
        <BasicTable dataTable={dataTable} columnsTable={columnsTableUsers} />
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
