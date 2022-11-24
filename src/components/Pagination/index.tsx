import { useState } from 'react';
import { Select, Text, Flex, IconButton, Tooltip } from '@chakra-ui/react';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

interface PaginationProps {
  className?: string;
  totalCount?: number;
  currentPage?: number;
  offset?: number;
  pageSize?: number;
  from?: number;
  to?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  previousPage?: () => void;
  nextPage?: () => void;
  onPageSizeChange?: (pageSizeValue: number) => void;
}

export const Pagination = ({
  className,
  totalCount,
  currentPage = 1,
  offset = 0,
  nextPage,
  previousPage,
  pageSize = 10,
  hasNextPage = true,
  hasPreviousPage = true,
  from = 1,
  to = 10,
  onPageSizeChange
}: PaginationProps) => {
  const [pagination, setPagination] = useState({
    pageOffset: offset,
    pageSizeState: pageSize,
    currentPage: currentPage,
    from: from,
    to: to,
    selectedPageSize: {
      label: pageSize.toString(),
      value: pageSize.toString()
    }
  });
  const pageCount = Math.ceil(totalCount / pagination.pageSizeState);
  const checkTotalCount =
    pagination.pageSizeState * pagination.currentPage > totalCount && pagination.pageSizeState < totalCount;
  const valueStartPage = checkTotalCount
    ? totalCount
    : pagination.pageSizeState * pagination.currentPage -
      pagination.pageSizeState +
      1;
  const valueEndPage = checkTotalCount
    ? totalCount
    : pagination.pageSizeState * pagination.currentPage;

  const nextPageChange = () => {
    const newOffset: number = offset + pagination.pageSizeState;
    nextPage();
    setPagination({ ...pagination, pageOffset: newOffset });
    setPagination({
      ...pagination,
      currentPage:
        pagination.currentPage < pageCount
          ? pagination.currentPage + 1
          : pagination.currentPage
    });
    return;
  };

  const previousPageChange = () => {
    const newOffset: number =
      pagination.pageOffset - pagination.pageSizeState >= 0
        ? pagination.pageOffset - pagination.pageSizeState
        : 0;
    setPagination({ ...pagination, pageOffset: newOffset });
    previousPage();
    setPagination({
      ...pagination,
      currentPage:
        pagination.currentPage > 1
          ? pagination.currentPage - 1
          : pagination.currentPage
    });
    return;
  };

  const setPageSize = (value: number) => {
    onPageSizeChange(value);
    setPagination({
      ...pagination,
      pageSizeState: value,
      currentPage: pagination.currentPage > 2 ? 2 : pagination.currentPage
    });
    return;
  };

  return (
    <Flex justifyContent="flex-end" className={className}>
      <Flex
        justifyContent="space-between"
        minW="375px"
        m={4}
        alignItems="center"
        color="default.grey.600"
      >
        <Flex alignItems="center">
          <Text flexShrink={0} mr={2} color="default.grey.600">
            Rows per page:{' '}
          </Text>
          <Select
            w={20}
            value={pagination.pageSizeState}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 25, 50].map((pageSizeOption) => (
              <option key={pageSizeOption} value={pageSizeOption}>
                {pageSizeOption}
              </option>
            ))}
          </Select>
          <Text flexShrink={0} ml={2} color="default.grey.600">
            {valueStartPage} - {valueEndPage} of {totalCount}
          </Text>
        </Flex>
        <Flex minW="85px" justifyContent="space-between">
          <Tooltip label="Previous Page">
            <IconButton
              aria-label="previous"
              onClick={previousPageChange}
              isDisabled={!hasPreviousPage}
              icon={<ChevronLeftIcon h={6} w={6} />}
            />
          </Tooltip>
          <Tooltip label="Next Page">
            <IconButton
              aria-label="next"
              onClick={nextPageChange}
              isDisabled={!hasNextPage}
              icon={<ChevronRightIcon h={6} w={6} />}
            />
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
};
