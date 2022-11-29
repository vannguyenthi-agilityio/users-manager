import React, { useMemo } from 'react';
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
  Divider
} from '@chakra-ui/react';

import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';

// Components
import { Pagination } from '../Pagination';
import { Button } from '../Button';
import GlobalFilter from './GroupFilter';
// import { Search } from '../Search';

interface ColumnType {
  Header: string;
  columns: {
    header: string | React.ReactNode;
    accessor: string;
    hasSort?: boolean;
    hasFilter?: boolean;
  }[];
}
[];

interface TableData {
  [key: string]: string | React.ReactNode;
}

interface TableType {
  columnsTable: Array<ColumnType>;
  dataTable: Array<TableData>;
  variant?: string;
}

const BasicTable: React.FC<TableType> = ({
  dataTable,
  columnsTable,
  variant
}) => {
  const columns = useMemo(() => columnsTable, []); // memoize before adding to useTable hook
  const data = useMemo(() => [...dataTable], [dataTable]);

  const {
    getTableProps,
    getTableBodyProps,
    // setGlobalFilter,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    setPageSize
    // state: { globalFilter }
  } = useTable(
    {
      columns, // useTable hook takes in memoized columns and data to be displayed
      data,
      defaultColumn: {},
      initialState: { pageIndex: 0 }
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  return (
    <TableContainer>
      <GlobalFilter headerGroups={headerGroups} />
      {/* <Search
        globalSearch={globalFilter}
        setGlobalSearch={setGlobalFilter}
        label="Search: "
      /> */}
      {/* apply the table props */}
      <Table {...getTableProps()} variant={variant || 'simple'} size="sm">
        <Thead bg="default.bgHeadTable">
          <Tr h="62px">
            {headerGroups[1].headers.map((column) => (
              <Th
                key={column.id}
                userSelect="none"
                {...(column.hasSort && column.getSortByToggleProps())}
              >
                <Flex align="center">
                  <Divider
                    orientation="vertical"
                    borderWidth={1}
                    h={6}
                    mr={4}
                  />
                  {column.render('header')}
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
        {/* Apply the table body props */}
        <Tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            page.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => (
                      // Apply the cell props
                      <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                    ))
                  }
                </Tr>
              );
            })
          }
        </Tbody>
      </Table>
      {page.length > 0 ? (
        <Pagination
          pageSize={10}
          totalCount={data.length}
          currentPage={1}
          onPageSizeChange={setPageSize}
          nextPage={nextPage}
          previousPage={previousPage}
          hasNextPage={canNextPage}
          hasPreviousPage={canPreviousPage}
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
