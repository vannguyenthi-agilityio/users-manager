import { useState, useMemo, useEffect, useContext } from 'react';
import UserContext from 'src/contexts/UserContext';
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
// Components
import { Text } from 'src/components/Text';
import BasicTable from 'src/components/Table';
import { Indicator } from 'src/components/Indicator';
import { StatusLabel } from 'src/components/StatusLabel';
import { Filter } from 'src/components/Filter';
import EditUserModal from 'src/components/Modal/EditUserModal';
import DeleteUserModal from 'src/components/Modal/DeleteUserModal';

import {
  ExternalLinkIcon,
  ViewIcon,
  EditIcon,
  DeleteIcon
} from '@chakra-ui/icons';

import { Button } from 'src/components/Button';
import AddUserModal from 'src/components/AddUserModal';

import { ROUTES } from 'src/constants/routes';

// Utils
import { getBadgeVariant } from 'src/utils/table';

// Constants
import { columnsUsers } from 'src/constants/tableColumn';

// Models
import { User } from 'src/models/user';

const Users = () => {
  const { users, isLoading, addUser, deleteUser, editUser, updateUser } =
    useContext(UserContext);
  const [checkedItems, setCheckedItems] = useState([false, false]);
  const [dataTableUser, setDataTableUser] = useState(users);

  useEffect(() => {
    if (dataTableUser.length > 0) {
      setDataTableUser(dataTableUser);
    } else {
      setDataTableUser(users);
    }
  }, [isLoading, dataTableUser]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const handleDelete = (id: string) => {
    deleteUser(id);
  };

  const handleEdit = (user: User) => {
    editUser(user);
    updateUser(user.id, user);
  };

  const handleAddUser = (user: User) => {
    addUser(user);
  };

  const columnsTableUsers = useMemo(
    () => [
      {
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
            hasSort: true
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
              const { key } = row.values.userName;
              const userFilter = users?.filter((user) => user.id === key);
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
                      <Link
                        href={`${ROUTES.USER_DETAIL.URL}/${key}`}
                        display="flex"
                      >
                        <ViewIcon w={4} h={4} mr={3} />
                        <Text color="default.grey.600" value="View" />
                      </Link>
                    </MenuItem>
                    <MenuItem value="edit" py={3}>
                      <Flex>
                        <EditIcon w={4} h={4} mr={3} />
                        <EditUserModal
                          userInfo={userEdit}
                          onSubmitModal={(user) => handleEdit(user)}
                        />
                      </Flex>
                    </MenuItem>
                    <MenuItem value="delete" py={3}>
                      <Flex>
                        <DeleteIcon w={4} h={4} mr={3} />
                        <DeleteUserModal
                          onSubmitModal={() => {
                            const { key } = row.values.userName;
                            handleDelete(key);
                          }}
                        />
                      </Flex>
                    </MenuItem>
                  </MenuList>
                </Menu>
              );
            }
          }
        ],
        ...columnsUsers
      }
    ],
    [dataTableUser, isLoading]
  );

  const dataTable = dataTableUser.length
    ? dataTableUser.map((user) => ({
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
              <Link href={`${ROUTES.USER_DETAIL.URL}/${user.id}`}>
                {user.fullName}
              </Link>
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

  return isLoading ? (
    <Indicator />
  ) : (
    <Box>
      <Heading mb={4} color="gray.600" fontSize="20px">
        Search Filter
      </Heading>
      <Box boxShadow="xs" rounded="md" bg="white" className="table" pt="20px">
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
            <AddUserModal onSubmitModal={(user) => handleAddUser(user)} />
          </Flex>
        </Flex>
        <BasicTable dataTable={dataTable} columnsTable={columnsTableUsers} />
      </Box>
    </Box>
  );
};

export default Users;
