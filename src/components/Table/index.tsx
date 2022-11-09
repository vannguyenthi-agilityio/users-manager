/* eslint-disable react/jsx-curly-newline, react/jsx-one-expression-per-line, operator-linebreak */
import React, { useState } from 'react';
import {
  useSortBy,
  useTable,
  useFilters,
  useGlobalFilter,
  usePagination
} from 'react-table';

// Charka
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Flex,
  Box,
  Button,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider
} from '@chakra-ui/react';

import {
  ArrowUpIcon,
  ArrowDownIcon,
  ViewIcon,
  EditIcon,
  RepeatIcon,
  SettingsIcon,
  DeleteIcon,
  ExternalLinkIcon
} from '@chakra-ui/icons';

import { Search, DefaultSearchForColumn } from '../Search';

// Utils
import { getBadgeVariant } from '../../utils/table';

import { StatusLabel } from '../StatusLabel';
import { Pagination } from '../Pagination';

interface ColumnType {
  Header: string;
  columns: {
    header: string;
    accessor: string;
  }[];
}
[];

interface TableData {
  [key: string]: string | React.ReactNode;
}

interface TableType {
  columns: Array<ColumnType>;
  data: Array<TableData>;
  variant?: string;
}

const BasicTable: React.FC<TableType> = ({ data, columns, variant }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {}
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultSearchForColumn },
      initialState: { pageIndex: 0 }
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const [checkedItems, setCheckedItems] = useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <TableContainer>
      <Flex
        w="100%"
        px={6}
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ sm: 'column', md: 'row' }}
        my={4}
      >
        {headerGroups[1].headers.map(
          (column) =>
            column.id !== 'userName' &&
            column.id !== 'email' &&
            column.id !== 'actions' && (
              <Box
                width={{ sm: '100%', md: '33%' }}
                mr={{ sm: '0', md: `${column.id !== 'status' ? '24px' : '0'}` }}
                mt={{ sm: '20px', md: '0' }}
                key={column.id}
              >
                {column.canFilter ? column.render('Filter') : null}
              </Box>
            )
        )}
      </Flex>
      <Box>
        {/* rendering global filter */}
        <Flex
          w="100%"
          px={6}
          alignItems="center"
          justifyContent="space-between"
          my={4}
        >
          <Button
            h="30px"
            bg="transparent"
            w="130px"
            minW="30px"
            display="flex"
            border="1px solid"
            borderColor="buttons.export"
            color="rgb(138, 141, 147)"
            fontSize="14px"
            py={5}
            textTransform="uppercase"
          >
            <ExternalLinkIcon w={4} h={4} mr={3} />
            Export
          </Button>
          <Search
            globalSearch={state.globalFilter}
            setGlobalSearch={setGlobalFilter}
          />
        </Flex>
      </Box>
      <Table {...getTableProps()} variant={variant || 'simple'} size="sm">
        <Thead bg="default.bgHeadTable">
          <Tr h="62px">
            <Th px={['4', '4', '6']} color="gray.300" w="8">
              <Checkbox
                colorScheme="orange"
                isChecked={allChecked}
                isIndeterminate={isIndeterminate}
                onChange={(e) =>
                  setCheckedItems([e.target.checked, e.target.checked])
                }
              />
            </Th>
            {headerGroups[1].headers.map((column) => (
              <Th
                userSelect="none"
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                <Flex align="center" className="table-users" minW="120px">
                  <Divider
                    orientation="vertical"
                    borderWidth={1}
                    h={6}
                    mr={4}
                  />
                  {column.render('header')}
                  {!column.isSorted && (
                    <Button
                      bg="default.bgIconSort"
                      borderRadius="50%"
                      p="0"
                      ml={1}
                      h="30px"
                      w="30px"
                      minW="30px"
                      className="table-users-icon-sort"
                      display="none"
                    >
                      <ArrowDownIcon w={4} h={4} />
                    </Button>
                  )}
                  {/* Add a sort direction indicator */}
                  {column.isSorted &&
                    (column.isSortedDesc ? (
                      <Button
                        bg="default.bgIconSort"
                        borderRadius="50%"
                        p="0"
                        ml={1}
                        h="30px"
                        w="30px"
                        minW="30px"
                        display="flex"
                      >
                        <ArrowDownIcon w={4} h={4} />
                      </Button>
                    ) : (
                      <Button
                        bg="default.bgIconSort"
                        borderRadius="50%"
                        p="0"
                        ml={1}
                        h="30px"
                        w="30px"
                        minW="30px"
                        display="flex"
                      >
                        <ArrowUpIcon w={4} h={4} />
                      </Button>
                    ))}
                </Flex>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                <Td px={['4', '4', '6']} color="gray.300" w="8">
                  <Checkbox
                    colorScheme="gray"
                    isChecked={allChecked}
                    isIndeterminate={isIndeterminate}
                    onChange={(e) =>
                      setCheckedItems([e.target.checked, e.target.checked])
                    }
                  />
                </Td>
                {row.cells.map((cell) => {
                  const status = cell.row.values.status.toLowerCase();
                  const role = cell.row.values.role.toLowerCase();
                  return (
                    <Td
                      {...cell.getCellProps()}
                      maxW="250px"
                      pl={9}
                      color={`${
                        cell.column.id === 'email'
                          ? 'default.red.500'
                          : 'inherit'
                      }`}
                      className={`table-users-${cell.column.id} ${
                        cell.column.id === 'email' ? 'text-overflow' : ''
                      }`}
                    >
                      {cell.column.id === 'role' && role === 'editor' && (
                        <EditIcon w={4} h={4} mr={3} color="blue.500" />
                      )}
                      {cell.column.id === 'role' && role === 'author' && (
                        <SettingsIcon w={4} h={4} mr={3} color="yellow.500" />
                      )}
                      {cell.column.id === 'role' && role === 'maintaine' && (
                        <RepeatIcon
                          w={4}
                          h={4}
                          mr={3}
                          color="default.green.100"
                        />
                      )}
                      {cell.column.id !== 'status' ? (
                        cell.render('Cell')
                      ) : (
                        <StatusLabel
                          variant={getBadgeVariant(status)}
                          value={cell.render('Cell')}
                        />
                      )}
                      {cell.column.id === 'actions' && (
                        <Menu closeOnSelect>
                          <MenuButton
                            className={cell.column.id}
                            w={6}
                            h={10}
                            transform="rotate(90deg)"
                            fontSize="20px"
                            ml="30px"
                          >
                            ...
                          </MenuButton>
                          <MenuList
                            minWidth="128px"
                            color="gray.600"
                            fontSize="16px"
                          >
                            <MenuItem value="view" py={3}>
                              <ViewIcon w={4} h={4} mr={3} />
                              View
                            </MenuItem>
                            <MenuItem value="edit" py={3}>
                              <EditIcon w={4} h={4} mr={3} />
                              Edit
                            </MenuItem>
                            <MenuItem value="delete" py={3}>
                              <DeleteIcon w={4} h={4} mr={3} />
                              Delete
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      )}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      {page.length > 0 ? (
        <Pagination
          pageSize={10}
          totalCount={100}
          currentPage={1}
          onPageSizeChange={setPageSize}
          nextPage={nextPage}
          previousPage={previousPage}
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
        />
      ) : (
        <Box w="100%" textAlign="center" py={8}>
          No Row
        </Box>
      )}
    </TableContainer>
  );
};

export default BasicTable;
